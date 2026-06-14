import { setRequestLocale, getTranslations } from 'next-intl/server';

import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Stack from '@/components/Stack';
import Footer from '@/components/Footer';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'About' });

    const languages = Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}/about`])
    );
    languages['x-default'] = `/${routing.defaultLocale}/about`;

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        alternates: {
            canonical: `/${locale}/about`,
            languages,
        },
        openGraph: {
            title: t('metaTitle'),
            description: t('metaDescription'),
            type: 'profile',
            url: `/${locale}/about`,
            siteName: 'Inna Boiko',
        },
    };
}

export default async function AboutPage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: 'About' });

    return (
        <div className="relative w-full min-h-screen bg-background text-primary selection:bg-accent selection:text-primary">
            <Navbar />
            <main>
                {/* Hero band — dark so the transparent navbar reads correctly */}
                <section className="relative bg-primary text-background pt-40 pb-24 md:pt-48 md:pb-28 px-6 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-primary to-primary pointer-events-none" />
                    <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-6">{t('eyebrow')}</p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl text-title-sans mb-8 leading-[0.9]">
                            {t('titleLine1')} <span className="text-title-drama text-accent">{t('titleAccent')}</span>
                        </h1>
                        <p className="text-background/70 font-mono max-w-2xl mx-auto text-sm md:text-base leading-relaxed">{t('intro')}</p>
                    </div>
                </section>

                <Stack />
            </main>
            <Footer />
        </div>
    );
}
