'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const t = useTranslations('Philosophy');
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax for background
            gsap.to('.bg-parallax', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });

            // Text reveal
            const lines = gsap.utils.toArray('.reveal-line');
            lines.forEach((line) => {
                gsap.fromTo(line,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: line,
                            start: 'top 85%',
                        }
                    }
                );
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="philosophy"
            ref={containerRef}
            className="relative py-40 px-6 bg-primary text-background overflow-hidden"
        >
            {/* Background Parallax Texture */}
            <div
                className="bg-parallax absolute inset-0 w-full h-[130%] -top-[15%] opacity-20 bg-cover bg-center mix-blend-overlay"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558470598-a5dda9640f68?q=80&w=2000&auto=format&fit=crop")' }}
            ></div>

            {/* Overlay for darker feel */}
            <div className="absolute inset-0 bg-primary/80" />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16 md:gap-32">
                <div className="max-w-xl">
                    <p className="reveal-line font-mono text-xs md:text-sm text-background/60 tracking-widest uppercase mb-6">
                        {t('conventionalEyebrow')}
                    </p>
                    <h2 className="reveal-line text-2xl md:text-3xl lg:text-4xl text-title-sans text-background/80 leading-tight">
                        {t.rich('conventionalText', {
                            hl: (chunks) => <span className="text-background">{chunks}</span>,
                        })}
                    </h2>
                </div>

                <div className="max-w-4xl self-end text-right">
                    <p className="reveal-line font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-6">
                        {t('manifestoEyebrow')}
                    </p>
                    <h2 className="reveal-line text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-[1.1] tracking-tight">
                        {t.rich('manifestoText', {
                            br: () => <br />,
                            hl: (chunks) => <span className="text-title-drama text-accent">{chunks}</span>,
                        })}
                    </h2>
                </div>
            </div>
        </section>
    );
}
