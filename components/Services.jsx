'use client';

import { Globe, Lock, CalendarCheck, LayoutDashboard, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

// Service metadata (icon + which i18n keys to read); copy lives in messages under `Services`.
// `highlight` marks the "custom / su misura" card so it reads as a soft CTA.
const services = [
    { key: 's1', icon: Globe },
    { key: 's2', icon: Lock },
    { key: 's3', icon: CalendarCheck },
    { key: 's4', icon: LayoutDashboard },
    { key: 's5', icon: Mail },
    { key: 's6', icon: Sparkles, highlight: true },
];

const steps = ['step1', 'step2', 'step3', 'step4'];

// Pricing tiers; `highlight` features the MVP package, `unit` shows a sub-line (/ mese, / ora, duration).
const pricing = [
    { key: 't1' },
    { key: 't2', highlight: true, unit: true, badge: true },
    { key: 't3', unit: true },
    { key: 't4', unit: true },
];

export default function Services() {
    const t = useTranslations('Services');

    return (
        <>
            {/* Hero band — dark so the transparent navbar reads correctly */}
            <section className="relative bg-primary text-background pt-40 pb-28 md:pt-48 md:pb-36 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-primary to-primary pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                    <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-6">
                        {t('eyebrow')}
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-title-sans mb-8 leading-[0.9]">
                        {t('titleLine1')}<br />
                        <span className="text-title-drama text-accent text-6xl md:text-8xl lg:text-[9rem]">{t('titleAccent')}</span>
                    </h1>
                    <p className="text-background/70 font-mono max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
                        {t('intro')}
                    </p>
                    <Link
                        href="/#cta"
                        className="group inline-flex items-center gap-2 px-10 py-5 rounded-[2rem] font-sans font-semibold tracking-tight text-lg bg-accent text-primary border border-accent/20 hover:bg-[#9B88FF] transition-colors"
                    >
                        {t('hireCta')} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>

            {/* Services */}
            <section className="bg-background text-primary py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 md:mb-20 max-w-3xl">
                        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
                            {t('servicesEyebrow')}
                        </p>
                        <h2 className="text-4xl md:text-6xl text-title-sans">{t('servicesTitle')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map(({ key, icon: Icon, highlight }) => (
                            <article
                                key={key}
                                className={`flex flex-col gap-5 rounded-[2rem] border p-8 md:p-10 transition-colors ${
                                    highlight
                                        ? 'bg-accent/5 border-accent/30 hover:border-accent/60'
                                        : 'bg-background border-primary/10 hover:border-accent/40'
                                }`}
                            >
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent">
                                    <Icon className="w-6 h-6" />
                                </span>
                                <h3 className="text-2xl font-sans font-bold tracking-tight">{t(`${key}Title`)}</h3>
                                <p className="font-mono text-sm leading-relaxed text-slate">{t(`${key}Desc`)}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="bg-primary text-background py-24 md:py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-14 md:mb-16 text-center max-w-2xl mx-auto">
                        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
                            {t('pricingEyebrow')}
                        </p>
                        <h2 className="text-4xl md:text-6xl text-title-sans mb-6">{t('pricingTitle')}</h2>
                        <p className="font-mono text-sm md:text-base text-background/70 leading-relaxed">{t('pricingIntro')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {pricing.map(({ key, highlight, unit, badge }) => (
                            <div
                                key={key}
                                className={`relative flex flex-col gap-3 rounded-[2rem] border p-8 md:p-10 ${
                                    highlight ? 'bg-accent/10 border-accent/40' : 'bg-background/5 border-background/10'
                                }`}
                            >
                                {badge && (
                                    <span className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-accent text-primary">
                                        {t('t2Badge')}
                                    </span>
                                )}
                                <p className="font-mono text-xs uppercase tracking-widest text-background/50">{t(`${key}Label`)}</p>
                                <span className="text-4xl md:text-5xl text-title-sans text-accent leading-tight">{t(`${key}Value`)}</span>
                                {unit && <span className="font-mono text-sm text-background/60 -mt-1">{t(`${key}Unit`)}</span>}
                                <p className="font-mono text-sm leading-relaxed text-background/70 mt-1">{t(`${key}Note`)}</p>
                            </div>
                        ))}
                    </div>

                    <p className="font-mono text-xs text-background/40 text-center mt-8">{t('pricingDisclaimer')}</p>
                </div>
            </section>

            {/* Process */}
            <section className="bg-background text-primary py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 md:mb-20 max-w-3xl">
                        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
                            {t('processEyebrow')}
                        </p>
                        <h2 className="text-4xl md:text-6xl text-title-sans">{t('processTitle')}</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {steps.map((step, i) => (
                            <div key={step} className="flex flex-col gap-3">
                                <span className="font-mono text-4xl md:text-5xl text-accent/40">[{String(i + 1).padStart(2, '0')}]</span>
                                <h3 className="text-xl font-sans font-bold tracking-tight">{t(`${step}Title`)}</h3>
                                <p className="font-mono text-sm leading-relaxed text-slate">{t(`${step}Desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA — links to the contact form on the home page */}
            <section id="contatto" className="bg-background text-primary py-24 md:py-32 px-6 border-t border-primary/5">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl text-title-sans mb-6">{t('finalTitle')}</h2>
                    <p className="font-mono text-sm md:text-base text-slate max-w-xl mb-10 leading-relaxed">{t('finalIntro')}</p>
                    <Link
                        href="/#cta"
                        className="group inline-flex items-center gap-2 px-10 py-5 rounded-[2rem] font-sans font-semibold tracking-tight text-lg bg-primary text-background border border-primary/20 hover:bg-slate transition-colors"
                    >
                        {t('finalCta')} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </>
    );
}
