'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from './Button';
import Logo from './Logo';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top -50',
                end: 99999,
                toggleClass: {
                    className: 'nav-scrolled',
                    targets: navRef.current
                }
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between gap-12 text-background border border-transparent
                 w-[calc(100%-2rem)] max-w-5xl
                 [&.nav-scrolled]:bg-background/80 [&.nav-scrolled]:backdrop-blur-xl [&.nav-scrolled]:text-primary [&.nav-scrolled]:border-primary/10 [&.nav-scrolled]:shadow-lg"
        >
            <Logo className="text-xl" />

            <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
                <a href="#features" className="hover:text-accent transition-colors interactive-lift">Esperienza</a>
                <a href="#philosophy" className="hover:text-accent transition-colors interactive-lift">Manifesto</a>
                <a href="#protocol" className="hover:text-accent transition-colors interactive-lift">Progetti</a>
                <a href="#stack" className="hover:text-accent transition-colors interactive-lift">Stack</a>
            </div>

            <Button variant="accent" className="!py-2 !px-6 text-sm" onClick={() => document.getElementById('cta')?.scrollIntoView()}>
                Contattami
            </Button>
        </nav>
    );
}
