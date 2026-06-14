import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { caseStudies } from '@/lib/caseStudies';

// Lists all case studies as cards linking to their detail page.
export default function CaseStudiesIndex() {
    const t = useTranslations('CaseStudies');
    const k = (slug, key) => `${slug}.${key}`;

    return (
        <>
            {/* Hero band — dark so the transparent navbar reads correctly */}
            <section className="relative bg-primary text-background pt-40 pb-24 md:pt-48 md:pb-28 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-primary to-primary pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                    <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-6">{t('indexEyebrow')}</p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-title-sans mb-8 leading-[0.9]">
                        {t('indexTitle')} <span className="text-title-drama text-accent">{t('indexAccent')}</span>
                    </h1>
                    <p className="text-background/70 font-mono max-w-2xl mx-auto text-sm md:text-base leading-relaxed">{t('indexIntro')}</p>
                </div>
            </section>

            {/* Case study cards */}
            <section className="bg-background text-primary py-24 md:py-32 px-6">
                <div className="max-w-5xl mx-auto flex flex-col gap-6 md:gap-8">
                    {caseStudies.map(({ slug, tech }) => (
                        <Link
                            key={slug}
                            href={`/case-studies/${slug}`}
                            className="group flex flex-col gap-5 bg-background rounded-[2rem] border border-primary/10 p-8 md:p-12 transition-colors hover:border-accent/40"
                        >
                            <p className="font-mono text-xs uppercase tracking-widest text-accent">{t(k(slug, 'cardTagline'))}</p>
                            <h2 className="text-3xl md:text-5xl text-title-sans">{t(k(slug, 'title'))}</h2>
                            <p className="font-mono text-sm md:text-base leading-relaxed text-slate max-w-2xl">{t(k(slug, 'summary'))}</p>
                            <div className="flex flex-wrap gap-2">
                                {tech.slice(0, 5).map((item) => (
                                    <span key={item} className="font-mono text-xs px-3 py-1 rounded-full border border-primary/20 text-primary/70">{item}</span>
                                ))}
                            </div>
                            <span className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-primary group-hover:text-accent transition-colors mt-2">
                                {t('readMore')} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
