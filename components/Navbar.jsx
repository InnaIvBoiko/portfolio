'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations, useLocale } from 'next-intl';

import { Link } from '@/i18n/navigation';
import Button from './Button';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const t = useTranslations('Nav');
    const locale = useLocale();
    const navRef = useRef(null);

    // Section anchors live on the home page; prefix with the locale so they also
    // work when the navbar is rendered on a sub-page (e.g. /servizi).
    const home = `/${locale}`;

    // Scroll to the contact form when on the home page; otherwise navigate home to it.
    function goToContact() {
        const el = document.getElementById('cta');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.location.href = `${home}#cta`;
    }

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
                <a href={`${home}#features`} className="hover:text-accent transition-colors interactive-lift">{t('experience')}</a>
                <a href={`${home}#philosophy`} className="hover:text-accent transition-colors interactive-lift">{t('manifesto')}</a>
                <a href={`${home}#protocol`} className="hover:text-accent transition-colors interactive-lift">{t('projects')}</a>
                <a href={`${home}#stack`} className="hover:text-accent transition-colors interactive-lift">{t('stack')}</a>
                <Link href="/services" className="hover:text-accent transition-colors interactive-lift">{t('services')}</Link>
            </div>

            <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <Button variant="accent" className="!py-2 !px-6 text-sm hidden sm:inline-block" onClick={goToContact}>
                    {t('contact')}
                </Button>
            </div>
        </nav>
    );
}
