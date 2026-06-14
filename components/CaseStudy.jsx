import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

// Renders a single case study from its registry metadata; all copy is read from
// the `CaseStudies.<slug>` i18n namespace. Template: context → challenge →
// solution (3 pillars) → result (3 stats) → CTA.
export default function CaseStudy({ caseStudy }) {
    const t = useTranslations('CaseStudies');
    const { slug, tech, pillars, stats } = caseStudy;
    const k = (key) => `${slug}.${key}`; // nested-key helper

    return (
        <>
            {/* Hero band — dark so the transparent navbar reads correctly */}
            <section className="relative bg-primary text-background pt-36 pb-24 md:pt-44 md:pb-28 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-primary to-primary pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Link href="/case-studies" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-background/60 hover:text-accent transition-colors mb-10">
                        <ArrowLeft className="w-4 h-4" /> {t('backToList')}
                    </Link>
                    <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-5">{t(k('cardTagline'))}</p>
                    <h1 className="text-5xl md:text-7xl text-title-sans mb-5 leading-[0.95]">{t(k('title'))}</h1>
                    <p className="text-background/70 font-mono text-base md:text-lg max-w-2xl mb-10">{t(k('subtitle'))}</p>

                    {/* Meta */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-background/10 pt-8">
                        {[['roleLabel', 'role'], ['sectorLabel', 'sector'], ['periodLabel', 'period']].map(([label, value]) => (
                            <div key={label}>
                                <p className="font-mono text-[11px] uppercase tracking-widest text-background/40 mb-1">{t(label)}</p>
                                <p className="font-mono text-sm text-background/90">{t(k(value))}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Context + Challenge */}
            <section className="bg-background text-primary py-24 md:py-28 px-6">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div>
                        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">{t('contextLabel')}</p>
                        <p className="font-mono text-sm md:text-base leading-relaxed text-slate">{t(k('context'))}</p>
                    </div>
                    <div>
                        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">{t('challengeLabel')}</p>
                        <p className="font-mono text-sm md:text-base leading-relaxed text-slate">{t(k('challenge'))}</p>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="bg-primary text-background py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-14 md:mb-16 max-w-3xl">
                        <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">{t('solutionLabel')}</p>
                        <p className="text-2xl md:text-3xl text-title-sans leading-snug">{t(k('solutionIntro'))}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {pillars.map((p) => (
                            <article key={p} className="flex flex-col gap-4 bg-background/5 rounded-[2rem] border border-background/10 p-8 md:p-10">
                                <h3 className="text-xl md:text-2xl font-sans font-bold tracking-tight text-accent">{t(k(`${p}Title`))}</h3>
                                <p className="font-mono text-sm leading-relaxed text-background/70">{t(k(`${p}Desc`))}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Result */}
            <section className="bg-background text-primary py-24 md:py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">{t('resultLabel')}</p>
                    <p className="font-mono text-sm md:text-base leading-relaxed text-slate max-w-2xl mb-12">{t(k('result'))}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12">
                        {stats.map((s) => (
                            <div key={s} className="rounded-[2rem] border border-primary/10 p-8 text-center">
                                <p className="text-5xl md:text-6xl text-title-sans text-accent mb-2">{t(k(`${s}Value`))}</p>
                                <p className="font-mono text-xs uppercase tracking-widest text-slate">{t(k(`${s}Label`))}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tech stack */}
                    <p className="font-mono text-[11px] uppercase tracking-widest text-slate/60 mb-3">{t('stackLabel')}</p>
                    <div className="flex flex-wrap gap-2">
                        {tech.map((item) => (
                            <span key={item} className="font-mono text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/80">{item}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-background text-primary py-24 md:py-32 px-6 border-t border-primary/5">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl text-title-sans mb-6">{t('ctaTitle')}</h2>
                    <p className="font-mono text-sm md:text-base text-slate max-w-xl mb-10 leading-relaxed">{t('ctaText')}</p>
                    <Link
                        href="/#cta"
                        className="group inline-flex items-center gap-2 px-10 py-5 rounded-[2rem] font-sans font-semibold tracking-tight text-lg bg-primary text-background border border-primary/20 hover:bg-slate transition-colors"
                    >
                        {t('ctaButton')} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </>
    );
}
