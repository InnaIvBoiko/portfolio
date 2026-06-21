import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/navigation';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Privacy' });

    const languages = Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}/privacy`])
    );
    languages['x-default'] = `/${routing.defaultLocale}/privacy`;

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        alternates: {
            canonical: `/${locale}/privacy`,
            languages,
        },
        robots: { index: false },
    };
}

export default async function PrivacyPage({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: 'Privacy' });

    const sections = [
        { title: t('s1Title'), body: t('s1Body') },
        { title: t('s2Title'), body: t('s2Body') },
        { title: t('s3Title'), body: t('s3Body') },
        { title: t('s4Title'), body: t('s4Body') },
        { title: t('s5Title'), body: t('s5Body') },
        { title: t('s6Title'), body: t('s6Body') },
        { title: t('s7Title'), body: t('s7Body') },
        { title: t('s8Title'), body: t('s8Body') },
    ];

    return (
        <div className="relative w-full min-h-screen bg-background text-primary selection:bg-accent selection:text-primary">
            <Navbar />
            <main>
                {/* Hero band */}
                <section className="relative bg-primary text-background pt-40 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-primary to-primary pointer-events-none" />
                    <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
                        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-6">
                            GDPR · Art. 13
                        </p>
                        <h1 className="text-5xl md:text-7xl text-title-sans mb-6 leading-[0.9]">
                            {t('title')}
                        </h1>
                        <p className="font-mono text-sm text-background/50">{t('lastUpdated')}</p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-20 md:py-28 px-6">
                    <div className="max-w-2xl mx-auto flex flex-col gap-10">
                        {sections.map(({ title, body }) => (
                            <div key={title}>
                                <h2 className="font-sans font-bold text-lg text-primary mb-2">{title}</h2>
                                <p className="font-mono text-sm text-slate leading-relaxed">{body}</p>
                            </div>
                        ))}

                        <div className="pt-4 border-t border-primary/10">
                            <Link
                                href="/"
                                className="font-mono text-sm text-accent hover:underline"
                            >
                                ← Home
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
