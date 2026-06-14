'use client';

import { Globe, Lock, CalendarCheck, LayoutDashboard, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

// Compact preview of the freelance services; full detail + pricing lives on /services.
const services = [
    { key: 's1', icon: Globe },
    { key: 's2', icon: Lock },
    { key: 's3', icon: CalendarCheck },
    { key: 's4', icon: LayoutDashboard },
    { key: 's5', icon: Mail },
    { key: 's6', icon: Sparkles },
];

export default function ServicesTeaser() {
    const t = useTranslations('Services');

    return (
        <section id="services-teaser" className="bg-background text-primary py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-14 md:mb-16 max-w-3xl">
                    <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
                        {t('teaserEyebrow')}
                    </p>
                    <h2 className="text-4xl md:text-6xl text-title-sans">{t('teaserTitle')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map(({ key, icon: Icon }) => (
                        <div
                            key={key}
                            className="flex flex-col gap-4 bg-background rounded-[2rem] border border-primary/10 p-7 md:p-8 transition-colors hover:border-accent/40"
                        >
                            <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-accent/10 text-accent">
                                <Icon className="w-5 h-5" />
                            </span>
                            <h3 className="text-xl font-sans font-bold tracking-tight">{t(`${key}Title`)}</h3>
                            <p className="font-mono text-sm leading-relaxed text-slate">{t(`${key}Desc`)}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link
                        href="/services"
                        className="group inline-flex items-center gap-2 px-9 py-4 rounded-[2rem] font-sans font-semibold tracking-tight text-base bg-primary text-background border border-primary/20 hover:bg-slate transition-colors"
                    >
                        {t('teaserCta')} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
