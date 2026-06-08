'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

// Non-translatable metadata; text (title/tagline/desc) lives in messages under each `key`.
const projects = [
    {
        key: "p3",
        num: "01",
        tech: ["Next.js 14", "Prisma", "Neon", "Auth.js", "next-intl"],
        live: "https://psychologists-services-98v1.vercel.app/",
        code: "https://github.com/InnaIvBoiko/psychologists_services",
        visual: "wave",
    },
    {
        key: "p2",
        num: "02",
        tech: ["Next.js 16", "Auth.js v5", "Drizzle ORM", "PGlite", "Zustand"],
        live: "https://next-js-notebook.vercel.app/",
        code: "https://github.com/InnaIvBoiko/next-js-notebook",
        visual: "grid",
    },
    {
        key: "p1",
        num: "03",
        tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "TanStack Query"],
        live: "https://crm-nextjs-six.vercel.app/",
        code: "https://github.com/InnaIvBoiko/crm-nextjs",
        visual: "gear",
    }
];

const secondaryProjects = [
    {
        key: "s1",
        tech: ["FastAPI", "Python", "PostgreSQL", "React", "LangGraph"],
        href: "https://github.com/InnaIvBoiko/OmniScraperOS",
        icon: "github",
    },
    {
        key: "s2",
        tech: ["STRIDE", "DREAD", "MITRE ATT&CK", "NIST"],
        href: "https://docs.google.com/document/d/1QOc6SoDSWMFN80Kl15-CAw8MT97Y-ab1/edit?usp=sharing",
        icon: "external",
    }
];

function Visual({ kind }) {
    if (kind === "gear") {
        return (
            <svg className="svg-gear w-2/3 h-2/3 text-accent/60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="50" cy="50" r="30" />
                <path d="M50 10V20M50 80V90M10 50H20M80 50H90M21.7 21.7L28.8 28.8M71.2 71.2L78.3 78.3M21.7 78.3L28.8 71.2M71.2 28.8L78.3 21.7" />
                <circle cx="50" cy="50" r="15" strokeDasharray="4 4" />
            </svg>
        );
    }
    if (kind === "grid") {
        return (
            <div className="relative w-2/3 h-2/3 border border-accent/30 rounded-xl overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20">
                    {Array.from({ length: 64 }).map((_, j) => (
                        <div key={j} className="border-[0.5px] border-accent"></div>
                    ))}
                </div>
                <div className="svg-laser absolute top-0 left-0 w-full h-0.5 bg-accent shadow-[0_0_15px_#7B61FF]"></div>
            </div>
        );
    }
    return (
        <svg className="w-2/3 h-2/3 text-accent/60" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path className="svg-wave-path" d="M0 50 Q25 10 50 50 T100 50 T150 50 T200 50" strokeDasharray="200" strokeDashoffset="0" />
        </svg>
    );
}

export default function Protocol() {
    const t = useTranslations('Protocol');
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Reveal each project card on scroll (no pinning, no overlap)
            gsap.utils.toArray('.project-card').forEach((card) => {
                gsap.fromTo(card,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: card, start: 'top 80%' },
                    }
                );
            });

            // Looping decorative animations inside the visuals
            gsap.to('.svg-gear', { rotation: 360, duration: 20, repeat: -1, ease: 'linear', transformOrigin: '50% 50%' });
            gsap.to('.svg-laser', { y: 200, duration: 2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
            gsap.to('.svg-wave-path', { strokeDashoffset: -200, duration: 3, repeat: -1, ease: 'linear' });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="protocol" className="relative bg-primary text-background py-28 md:py-36 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-16 md:mb-24 max-w-3xl">
                    <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
                        {t('eyebrow')}
                    </p>
                    <h2 className="text-4xl md:text-6xl text-title-sans">
                        {t('headingPre')}<span className="text-title-drama text-accent">{t('headingAccent')}</span>
                    </h2>
                </div>

                {/* Project cards */}
                <div className="flex flex-col gap-8 md:gap-12">
                    {projects.map((project, i) => (
                        <article
                            key={i}
                            className="project-card group bg-slate rounded-[2rem] md:rounded-[2.5rem] border border-background/10 overflow-hidden p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-colors hover:border-accent/40"
                        >
                            {/* Visual */}
                            <div className={`aspect-[16/10] lg:aspect-square w-full rounded-[1.5rem] bg-primary/60 border border-background/10 flex items-center justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <Visual kind={project.visual} />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-mono text-3xl md:text-5xl text-accent/70">[{project.num}]</span>
                                    <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-background/50">{t(`${project.key}Tagline`)}</span>
                                </div>

                                <h3 className="text-4xl md:text-5xl lg:text-6xl text-title-sans text-background">{t(`${project.key}Title`)}</h3>

                                <p className="font-mono text-sm md:text-base leading-relaxed text-background/70 max-w-xl">
                                    {t(`${project.key}Desc`)}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="font-mono text-xs px-3 py-1 rounded-full border border-background/20 text-background/80">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-3 mt-2">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-mono text-sm font-semibold px-6 py-3 rounded-full bg-accent text-primary hover:bg-[#9B88FF] transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" /> {t('liveLabel')}
                                    </a>
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-mono text-sm font-semibold px-6 py-3 rounded-full border border-background/30 text-background hover:border-accent hover:text-accent transition-colors"
                                    >
                                        <Github className="w-4 h-4" /> {t('codeLabel')}
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Secondary projects */}
                <div className="mt-20 md:mt-28">
                    <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-8">
                        {t('othersLabel')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {secondaryProjects.map((p) => (
                            <article
                                key={p.key}
                                className="project-card group flex flex-col gap-4 bg-slate/60 rounded-[1.5rem] border border-background/10 p-7 md:p-8 transition-colors hover:border-accent/40"
                            >
                                <div>
                                    <h4 className="text-2xl font-sans font-bold tracking-tight text-background">{t(`${p.key}Title`)}</h4>
                                    <p className="font-mono text-xs uppercase tracking-widest text-background/50 mt-1">{t(`${p.key}Tagline`)}</p>
                                </div>

                                <p className="font-mono text-sm leading-relaxed text-background/70">{t(`${p.key}Desc`)}</p>

                                <div className="flex flex-wrap gap-2">
                                    {p.tech.map((tech) => (
                                        <span key={tech} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-background/20 text-background/80">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 font-mono text-sm font-semibold text-background hover:text-accent transition-colors w-fit"
                                >
                                    {p.icon === "github" ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                                    {t(`${p.key}Link`)}
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
