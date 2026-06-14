import { notFound } from 'next/navigation';
import { setRequestLocale, getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';
import { caseStudies, caseStudySlugs, getCaseStudy } from '@/lib/caseStudies';
import Navbar from '@/components/Navbar';
import CaseStudy from '@/components/CaseStudy';
import Footer from '@/components/Footer';

// Pre-render every (locale, slug) pair at build time.
export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        caseStudies.map((c) => ({ locale, slug: c.slug }))
    );
}

export async function generateMetadata({ params }) {
    const { locale, slug } = await params;
    if (!caseStudySlugs.includes(slug)) return {};

    const t = await getTranslations({ locale, namespace: 'CaseStudies' });
    const title = `${t(`${slug}.title`)} — ${t(`${slug}.subtitle`)}`;
    const description = t(`${slug}.summary`);

    const languages = Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}/case-studies/${slug}`])
    );
    languages['x-default'] = `/${routing.defaultLocale}/case-studies/${slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: `/${locale}/case-studies/${slug}`,
            languages,
        },
        openGraph: {
            title,
            description,
            type: 'article',
            url: `/${locale}/case-studies/${slug}`,
            siteName: 'Inna Boiko',
        },
    };
}

export default async function CaseStudyPage({ params }) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const caseStudy = getCaseStudy(slug);
    if (!caseStudy) notFound();

    const t = await getTranslations({ locale, namespace: 'CaseStudies' });

    // Schema.org CreativeWork describing the case study, attributed to Inna.
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: t(`${slug}.title`),
        description: t(`${slug}.summary`),
        url: `${SITE_URL}/${locale}/case-studies/${slug}`,
        author: {
            '@type': 'Person',
            name: 'Inna Boiko',
            url: SITE_URL,
            jobTitle: 'Frontend & Full-Stack Developer',
        },
    };

    return (
        <div className="relative w-full min-h-screen bg-background text-primary selection:bg-accent selection:text-primary">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main>
                <CaseStudy caseStudy={caseStudy} />
            </main>
            <Footer />
        </div>
    );
}
