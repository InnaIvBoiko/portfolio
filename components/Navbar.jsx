'use client';

import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
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
    const [menuOpen, setMenuOpen] = useState(false);

    // Section anchors live on the home page; prefix with the locale so they also
    // work when the navbar is rendered on a sub-page (e.g. /services).
    const home = `/${locale}`;

    // Scroll to the contact form when on the home page; otherwise navigate home to it.
    function goToContact() {
        setMenuOpen(false);
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

    // Close the mobile menu on outside click and Escape.
    useEffect(() => {
        if (!menuOpen) return;
        function onPointerDown(e) {
            if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false);
        }
        function onKeyDown(e) {
            if (e.key === 'Escape') setMenuOpen(false);
        }
        document.addEventListener('mousedown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('mousedown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [menuOpen]);

    const close = () => setMenuOpen(false);

    return (
        <nav
            ref={navRef}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between gap-12 text-background border border-transparent
                 w-[calc(100%-2rem)] max-w-5xl nav:max-w-6xl
                 [&.nav-scrolled]:bg-background/80 [&.nav-scrolled]:backdrop-blur-xl [&.nav-scrolled]:text-primary [&.nav-scrolled]:border-primary/10 [&.nav-scrolled]:shadow-lg"
        >
            <Logo className="text-xl" />

            {/* Inline links — wide screens only */}
            <div className="hidden nav:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
                <a href={`${home}#features`} className="hover:text-accent transition-colors interactive-lift">{t('experience')}</a>
                <a href={`${home}#philosophy`} className="hover:text-accent transition-colors interactive-lift">{t('manifesto')}</a>
                <a href={`${home}#protocol`} className="hover:text-accent transition-colors interactive-lift">{t('projects')}</a>
                <Link href="/services" className="hover:text-accent transition-colors interactive-lift">{t('services')}</Link>
                <Link href="/about" className="hover:text-accent transition-colors interactive-lift">{t('about')}</Link>
            </div>

            <div className="flex items-center gap-3">
                {/* Language switcher — wide screens only; on mobile it lives in the menu */}
                <div className="hidden nav:block">
                    <LanguageSwitcher />
                </div>
                <Button variant="accent" className="!py-2 !px-6 text-sm hidden nav:inline-block" onClick={goToContact}>
                    {t('contact')}
                </Button>

                {/* Burger — below the wide breakpoint */}
                <button
                    type="button"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Menu"
                    aria-expanded={menuOpen}
                    className="nav:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-current/20 hover:text-accent hover:border-accent/50 transition-colors"
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile / tablet dropdown menu */}
            {menuOpen && (
                <div className="nav:hidden absolute top-full left-0 right-0 mt-3 rounded-[1.75rem] border border-primary/10 bg-background/95 backdrop-blur-xl shadow-xl p-3 flex flex-col text-primary">
                    <a onClick={close} href={`${home}#features`} className="px-4 py-3 rounded-2xl font-mono text-sm uppercase tracking-widest hover:text-accent hover:bg-primary/5 transition-colors">{t('experience')}</a>
                    <a onClick={close} href={`${home}#philosophy`} className="px-4 py-3 rounded-2xl font-mono text-sm uppercase tracking-widest hover:text-accent hover:bg-primary/5 transition-colors">{t('manifesto')}</a>
                    <a onClick={close} href={`${home}#protocol`} className="px-4 py-3 rounded-2xl font-mono text-sm uppercase tracking-widest hover:text-accent hover:bg-primary/5 transition-colors">{t('projects')}</a>
                    <Link onClick={close} href="/services" className="px-4 py-3 rounded-2xl font-mono text-sm uppercase tracking-widest hover:text-accent hover:bg-primary/5 transition-colors">{t('services')}</Link>
                    <Link onClick={close} href="/about" className="px-4 py-3 rounded-2xl font-mono text-sm uppercase tracking-widest hover:text-accent hover:bg-primary/5 transition-colors">{t('about')}</Link>

                    {/* Language switcher inside the menu */}
                    <div className="mt-2 px-2 pt-3 border-t border-primary/10">
                        <LanguageSwitcher />
                    </div>

                    <button
                        type="button"
                        onClick={goToContact}
                        className="mt-3 px-4 py-3 rounded-2xl font-sans font-semibold tracking-tight text-center bg-accent text-primary hover:bg-[#9B88FF] transition-colors"
                    >
                        {t('contact')}
                    </button>
                </div>
            )}
        </nav>
    );
}
