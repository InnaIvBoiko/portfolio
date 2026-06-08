'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function HeroScene() {
    const ref = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Infinite perspective-grid scroll toward the viewer
            gsap.fromTo('.hero-grid',
                { backgroundPosition: '0px 0px' },
                { backgroundPosition: '0px 40px', duration: 1.4, ease: 'none', repeat: -1 }
            );

            // Slowly spinning wireframe shapes
            gsap.to('.wire-cube', { rotation: 360, duration: 22, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });
            gsap.to('.wire-tri', { rotation: -360, duration: 28, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });
            gsap.to('.wire-ring', { rotation: 360, duration: 40, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });

            // Gentle floating
            gsap.to('.float-a', { y: -22, duration: 4.5, ease: 'sine.inOut', yoyo: true, repeat: -1 });
            gsap.to('.float-b', { y: 26, duration: 5.5, ease: 'sine.inOut', yoyo: true, repeat: -1 });
            gsap.to('.float-c', { y: -16, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1 });

            // Plasma glow breathing
            gsap.to('.plasma', { scale: 1.12, opacity: 0.55, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        }, ref);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={ref} className="hero-bg absolute inset-0 w-full h-full overflow-hidden bg-primary">
            {/* Plasma radial glow */}
            <div className="plasma absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] min-w-[460px] min-h-[460px] rounded-full bg-accent/30 blur-[120px]" />

            {/* Faint dot matrix */}
            <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage: 'radial-gradient(rgba(240,239,244,0.7) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />

            {/* Perspective grid floor */}
            <div className="absolute inset-x-0 bottom-0 h-[55%] [perspective:520px]">
                <div
                    className="hero-grid absolute inset-0 origin-bottom [transform:rotateX(72deg)]"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(123,97,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(123,97,255,0.4) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to top, #000 5%, transparent 78%)',
                        WebkitMaskImage: 'linear-gradient(to top, #000 5%, transparent 78%)',
                    }}
                />
            </div>

            {/* Wireframe cube */}
            <svg
                className="float-a absolute right-[10%] top-[16%] w-40 h-40 md:w-56 md:h-56 text-accent drop-shadow-[0_0_25px_rgba(123,97,255,0.45)]"
                viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"
            >
                <g className="wire-cube">
                    <rect x="24" y="32" width="44" height="44" />
                    <rect x="40" y="20" width="44" height="44" />
                    <line x1="24" y1="32" x2="40" y2="20" />
                    <line x1="68" y1="32" x2="84" y2="20" />
                    <line x1="68" y1="76" x2="84" y2="64" />
                    <line x1="24" y1="76" x2="40" y2="64" />
                </g>
            </svg>

            {/* Wireframe pyramid / triangle */}
            <svg
                className="float-b absolute left-[8%] top-[52%] w-28 h-28 md:w-40 md:h-40 text-accent/80 drop-shadow-[0_0_20px_rgba(123,97,255,0.35)]"
                viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"
            >
                <g className="wire-tri">
                    <polygon points="50,12 88,82 12,82" />
                    <line x1="50" y1="12" x2="50" y2="82" />
                    <line x1="30" y1="82" x2="50" y2="50" />
                    <line x1="70" y1="82" x2="50" y2="50" />
                </g>
            </svg>

            {/* Orbiting ring + node */}
            <svg
                className="float-c absolute right-[26%] bottom-[20%] w-20 h-20 md:w-28 md:h-28 text-accent/60"
                viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1"
            >
                <g className="wire-ring">
                    <ellipse cx="50" cy="50" rx="42" ry="16" />
                    <circle cx="92" cy="50" r="4" fill="currentColor" />
                </g>
            </svg>

            {/* Legibility overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
        </div>
    );
}
