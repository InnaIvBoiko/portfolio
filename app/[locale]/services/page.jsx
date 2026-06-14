import { setRequestLocale, getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Services' });

    const languages = Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}/services`])
    );
    languages['x-default'] = `/${routing.defaultLocale}/services`;

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        keywords: [
            'React Developer',
            'Next.js Developer',
            'Full Stack JavaScript',
            'TypeScript',
            'SaaS',
            'AI integration',
            'Dashboard',
            'CRM',
            'Healthcare',
            'Prisma',
            'Auth.js',
            'PostgreSQL',
            'MVP startup',
            'freelance',
        ],
        alternates: {
            canonical: `/${locale}/services`,
            languages,
        },
        openGraph: {
            title: t('metaTitle'),
            description: t('metaDescription'),
            type: 'website',
            url: `/${locale}/services`,
            siteName: 'Inna Boiko',
        },
    };
}

export default async function ServicesPage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: 'Services' });

    // Schema.org — describes the freelance offering as a Service provided by Inna.
    const serviceJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: t('metaTitle'),
        description: t('metaDescription'),
        url: `${SITE_URL}/${locale}/services`,
        serviceType: 'Web development',
        areaServed: 'Worldwide',
        provider: {
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <Navbar />
            <main>
                <Services />
            </main>
            <Footer />
        </div>
    );
}
