'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Button from './Button';
import HeroScene from './HeroScene';

export default function Hero() {
    const t = useTranslations('Hero');
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Staggered fade-up animation
            gsap.fromTo('.hero-text',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );

            // Background subtle zoom
            gsap.fromTo('.hero-bg',
                { scale: 1.05 },
                { scale: 1, duration: 2, ease: 'power2.out' }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden flex items-end">
            {/* Animated software-engineering background (SVG/CSS) */}
            <HeroScene />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-24 md:pb-28 grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-12 lg:col-span-10 flex flex-col items-start gap-6">

                    <div className="hero-text font-mono text-accent tracking-widest uppercase text-sm mb-2 flex items-center gap-3">
                        <span>{t('badge')}</span>
                        <span className="hidden sm:flex items-center gap-1 text-background/60 normal-case tracking-normal">
                            <MapPin className="w-3.5 h-3.5" /> {t('location')}
                        </span>
                    </div>

                    <h1 className="flex flex-col gap-2">
                        <span className="hero-text text-title-sans text-4xl md:text-5xl lg:text-7xl text-background">
                            {t('titleLine1')}
                        </span>
                        <span className="hero-text text-title-drama text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] text-accent mt-2">
                            {t('titleLine2')}
                        </span>
                    </h1>

                    <p className="hero-text font-mono text-sm md:text-base text-background/70 max-w-2xl leading-relaxed mt-2">
                        {t('description')}
                    </p>

                    <div className="hero-text mt-6 flex flex-wrap items-center gap-4">
                        <Button variant="accent" className="!px-10 !py-5 text-lg" onClick={() => document.getElementById('protocol')?.scrollIntoView()}>
                            {t('ctaProjects')}
                        </Button>

                        {/* <a
                            href="/Inna_Boiko_CV.pdf"
                            download
                            className="inline-flex items-center gap-2 px-8 py-5 rounded-[2rem] font-sans font-semibold tracking-tight text-lg text-background border border-background/30 hover:border-accent hover:text-accent transition-colors interactive-lift"
                        >
                            <Download className="w-5 h-5" /> Scarica CV
                        </a> */}

                        <div className="flex items-center gap-2">
                            <a
                                href="https://github.com/InnaIvBoiko"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-3 rounded-full border border-background/20 text-background hover:text-accent hover:border-accent/50 transition-colors interactive-lift"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/inna-boiko"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="p-3 rounded-full border border-background/20 text-background hover:text-accent hover:border-accent/50 transition-colors interactive-lift"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:inna_boiko@libero.it"
                                aria-label="Email"
                                className="p-3 rounded-full border border-background/20 text-background hover:text-accent hover:border-accent/50 transition-colors interactive-lift"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
