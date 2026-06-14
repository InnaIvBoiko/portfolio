'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

const faqs = [1, 2, 3, 4, 5];

export default function FAQ() {
    const t = useTranslations('FAQ');
    const [open, setOpen] = useState(0); // first item open by default

    return (
        <section id="faq" className="bg-background text-primary py-24 md:py-32 px-6 border-t border-primary/5">
            <div className="max-w-3xl mx-auto">
                <div className="mb-14 md:mb-16 text-center">
                    <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">{t('eyebrow')}</p>
                    <h2 className="text-4xl md:text-6xl text-title-sans">{t('title')}</h2>
                </div>

                <div className="flex flex-col divide-y divide-primary/10 border-y border-primary/10">
                    {faqs.map((i, idx) => {
                        const isOpen = open === idx;
                        return (
                            <div key={i}>
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? -1 : idx)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                                >
                                    <span className="text-lg md:text-xl font-sans font-semibold tracking-tight group-hover:text-accent transition-colors">
                                        {t(`q${i}`)}
                                    </span>
                                    <Plus
                                        className={`w-5 h-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                                    />
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="font-mono text-sm md:text-base leading-relaxed text-slate pb-6 pr-10">
                                            {t(`a${i}`)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
