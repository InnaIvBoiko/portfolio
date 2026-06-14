import { setRequestLocale, getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import CaseStudiesIndex from '@/components/CaseStudiesIndex';
import Footer from '@/components/Footer';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'CaseStudies' });

    const languages = Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}/case-studies`])
    );
    languages['x-default'] = `/${routing.defaultLocale}/case-studies`;

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        alternates: {
            canonical: `/${locale}/case-studies`,
            languages,
        },
        openGraph: {
            title: t('metaTitle'),
            description: t('metaDescription'),
            type: 'website',
            url: `/${locale}/case-studies`,
            siteName: 'Inna Boiko',
        },
    };
}

export default async function CaseStudiesPage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="relative w-full min-h-screen bg-background text-primary selection:bg-accent selection:text-primary">
            <Navbar />
            <main>
                <CaseStudiesIndex />
            </main>
            <Footer />
        </div>
    );
}
