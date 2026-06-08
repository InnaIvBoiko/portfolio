'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LOCALE_LABELS = {
    it: { short: 'IT', name: 'Italiano' },
    en: { short: 'EN', name: 'English' },
    uk: { short: 'UK', name: 'Українська' },
};

export default function LanguageSwitcher() {
    const t = useTranslations('Nav');
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Close on outside click and Escape.
    useEffect(() => {
        if (!open) return;

        function onPointerDown(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        function onKeyDown(e) {
            if (e.key === 'Escape') setOpen(false);
        }

        document.addEventListener('mousedown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('mousedown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    function switchTo(nextLocale) {
        setOpen(false);
        if (nextLocale === locale) return;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div ref={wrapperRef} className="relative">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                disabled={isPending}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-label={t('language')}
                className="inline-flex items-center gap-1.5 font-mono text-sm uppercase tracking-widest px-3 py-1.5 rounded-full border border-current/20 hover:text-accent hover:border-accent/50 transition-colors disabled:opacity-60"
            >
                <Globe className="w-4 h-4" aria-hidden="true" />
                {LOCALE_LABELS[locale]?.short ?? locale.toUpperCase()}
                <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                />
            </button>

            {open && (
                <ul
                    role="listbox"
                    aria-label={t('language')}
                    className="absolute right-0 mt-2 min-w-[11rem] rounded-2xl border border-primary/10 bg-background/95 backdrop-blur-xl shadow-xl p-1.5 z-[110]"
                >
                    {routing.locales.map((loc) => {
                        const selected = loc === locale;
                        return (
                            <li key={loc}>
                                <button
                                    type="button"
                                    role="option"
                                    aria-selected={selected}
                                    onClick={() => switchTo(loc)}
                                    className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl font-mono text-sm transition-colors ${
                                        selected
                                            ? 'text-accent bg-accent/10'
                                            : 'text-primary hover:text-accent hover:bg-primary/5'
                                    }`}
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="uppercase tracking-widest text-xs w-7 text-left text-slate/70">
                                            {LOCALE_LABELS[loc]?.short ?? loc.toUpperCase()}
                                        </span>
                                        {LOCALE_LABELS[loc]?.name ?? loc}
                                    </span>
                                    {selected && <Check className="w-4 h-4" aria-hidden="true" />}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
