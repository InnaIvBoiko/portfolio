'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Trophy, ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stack = [
    { label: "Frontend", items: ["React", "Next.js 16", "TypeScript", "JavaScript", "Redux Toolkit", "Zustand", "TanStack Query", "Tailwind CSS", "CSS Modules", "Styled Components"] },
    { label: "Backend", items: ["Node.js", "Python", "FastAPI", "Route Handlers", "Server Actions", "Edge Middleware", "Resend", "Upstash Redis"] },
    { label: "Database", items: ["PostgreSQL", "Neon", "MongoDB", "Prisma 5", "Drizzle ORM", "PGlite"] },
    { label: "Auth & Security", items: ["Auth.js v5", "JWT", "bcryptjs", "cookie HttpOnly", "rate limiting", "AES-GCM 256-bit", "CSP", "BroadcastChannel"] },
    { label: "Testing", items: ["Vitest 4", "React Testing Library", "Playwright", "MSW", "coverage-v8", "jsdom"] },
    { label: "Performance & SEO", items: ["next/image", "next/font", "Metadata API", "sitemap/robots", "JSON-LD", "OG images"] },
    { label: "CI/CD & DevOps", items: ["GitHub Actions", "Vercel", "Prisma migrations", "single-deployment"] },
    { label: "i18n", items: ["next-intl", "IT / EN / UK"] },
    { label: "AI & Tools", items: ["GitHub Copilot", "Claude Code", "Google Antigravity"] },
    { label: "Sicurezza & Architettura", items: ["STRIDE", "DFD", "MITRE ATT&CK", "NIST"] },
];

const education = [
    {
        degree: "Master in Computer Science",
        school: "Neoversity · IT University (Woolf)",
        period: "Set 2025 – Feb 2028",
        detail: "Software Engineering & Artificial Intelligence: System Design, Cloud, MLOps, Machine Learning, Algoritmi.",
    },
    {
        degree: "Junior Full Stack Developer",
        school: "GoIT — Start your career in IT",
        period: "Set 2023 – Lug 2024",
        detail: "Percorso intensivo full-stack: HTML5/CSS3/SASS, JavaScript, React, Node.js e altre 6 competenze.",
    },
    {
        degree: "Master in Economia e Cibernetica",
        school: "Chernivtsi Institute of Trade and Economics",
        period: "Set 2002 – Giu 2007",
        detail: "Cibernetica Economica. Votazione: massima.",
    },
];

const achievements = [
    {
        title: "Vincitrice — GoIT Hackathon 2025",
        org: "GoIT · Neoversity · AI House · Grandia Solutions · Avrora",
        date: "12 Set 2025",
        detail: "Eco House — progetto vincitore in team: decisione, creatività e spirito di squadra per trasformare un'idea nella soluzione vincente.",
        live: "https://eco-house-zeta.vercel.app/",
        code: "https://github.com/InnaIvBoiko/eco-house",
    },
];

export default function Stack() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.stack-reveal').forEach((el) => {
                gsap.fromTo(el,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: el, start: 'top 88%' },
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="stack" className="bg-background py-28 md:py-36 px-6 border-t border-primary/5">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-16 md:mb-20 max-w-3xl stack-reveal">
                    <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
                        Stack &amp; Percorso
                    </p>
                    <h2 className="text-4xl md:text-6xl text-title-sans text-primary">
                        Strumenti &amp; <span className="text-title-drama text-accent">formazione.</span>
                    </h2>
                </div>

                {/* Tech stack */}
                <div className="flex flex-col gap-7 mb-20 md:mb-28">
                    {stack.map((group) => (
                        <div key={group.label} className="stack-reveal grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-8 md:items-baseline border-b border-primary/5 pb-7 last:border-b-0">
                            <p className="font-mono text-xs uppercase tracking-widest text-slate/70 pt-1">{group.label}</p>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <span
                                        key={item}
                                        className="font-mono text-sm px-3.5 py-1.5 rounded-full border border-primary/15 text-primary/80 hover:border-accent hover:text-accent transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div>

                    {/* Education */}
                    <div className="stack-reveal max-w-3xl">

                        {/* Highlighted achievement */}
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="w-5 h-5 text-accent" />
                            <h3 className="font-mono text-sm uppercase tracking-widest text-primary">Riconoscimenti</h3>
                        </div>
                        <div className="flex flex-col gap-4 mb-12">
                            {achievements.map((a) => (
                                <div key={a.title} className="relative rounded-[1.5rem] border border-accent/30 bg-accent/5 p-6 md:p-7 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-2xl rounded-full" />
                                    <div className="relative flex flex-col gap-1.5">
                                        <div className="font-mono text-xs text-accent">{a.date}</div>
                                        <h4 className="text-xl md:text-2xl font-sans font-bold tracking-tight text-primary">{a.title}</h4>
                                        <div className="font-mono text-xs text-slate/80">{a.org}</div>
                                        <p className="font-mono text-sm text-slate/80 mt-2 max-w-lg leading-relaxed">{a.detail}</p>

                                        <div className="flex flex-wrap gap-3 mt-4">
                                            <a
                                                href={a.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 font-mono text-sm font-semibold px-5 py-2.5 rounded-full bg-accent text-primary hover:bg-[#9B88FF] transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" /> Live
                                            </a>
                                            <a
                                                href={a.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 font-mono text-sm font-semibold px-5 py-2.5 rounded-full border border-primary/20 text-primary hover:border-accent hover:text-accent transition-colors"
                                            >
                                                <Github className="w-4 h-4" /> Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="w-5 h-5 text-accent" />
                            <h3 className="font-mono text-sm uppercase tracking-widest text-primary">Istruzione</h3>
                        </div>
                        <div className="flex flex-col gap-8">
                            {education.map((edu) => (
                                <div key={edu.degree} className="border-l-2 border-accent/30 pl-6">
                                    <div className="font-mono text-xs text-accent mb-1">{edu.period}</div>
                                    <h4 className="text-xl md:text-2xl font-sans font-bold tracking-tight text-primary">{edu.degree}</h4>
                                    <div className="font-mono text-sm text-slate mt-1">{edu.school}</div>
                                    <p className="font-mono text-sm text-slate/80 mt-2 max-w-lg">{edu.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
