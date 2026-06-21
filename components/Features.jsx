'use client';

import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';

function ShufflerCard({ title, items }) {
    const t = useTranslations('Features');
    const containerRef = useRef(null);
    const [cards, setCards] = useState(items);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.shuffler-item',
                { y: -20, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)', stagger: 0.1 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, [cards]);

    return (
        <div className="bg-background rounded-[2rem] p-8 shadow-2xl border border-primary/5 flex flex-col h-full relative overflow-hidden group">
            <h3 className="text-xl font-sans font-bold tracking-tight mb-2 text-primary">{title}</h3>
            <p className="text-sm font-mono text-slate mb-8">{t('card1Subtitle')}</p>

            <div ref={containerRef} className="relative flex-1 min-h-[160px] flex flex-col justify-end gap-3 mt-auto">
                {cards.map((item, i) => (
                    <div
                        key={item.id}
                        className="shuffler-item absolute bottom-0 left-0 w-full bg-primary text-background p-4 rounded-2xl shadow-lg border border-primary/20 transition-all duration-500"
                        style={{
                            transform: `translateY(-${(2 - i) * 15}px) scale(${1 - (2 - i) * 0.05})`,
                            zIndex: i,
                            opacity: 1 - (2 - i) * 0.2
                        }}
                    >
                        <div className="font-mono text-xs text-accent mb-1">{t('sliceLabel', { id: item.id })}</div>
                        <div className="font-sans font-medium">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TypewriterCard({ title }) {
    const t = useTranslations('Features');
    const textRef = useRef(null);
    const messages = [
        t('terminal1'),
        t('terminal2'),
        t('terminal3'),
        t('terminal4'),
        t('terminal5'),
    ];
    // Restart the typewriter when the locale (and therefore the messages) changes.
    const messagesKey = messages.join('|');

    useLayoutEffect(() => {
        const el = textRef.current;
        let msgIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeout;

        function type() {
            const currentMsg = messages[msgIndex];

            if (isDeleting) {
                el.textContent = currentMsg.substring(0, charIndex - 1);
                charIndex--;
            } else {
                el.textContent = currentMsg.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = 50;
            if (isDeleting) typeSpeed /= 2;

            if (!isDeleting && charIndex === currentMsg.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                msgIndex = (msgIndex + 1) % messages.length;
                typeSpeed = 500;
            }

            timeout = setTimeout(type, typeSpeed);
        }

        timeout = setTimeout(type, 1000);
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messagesKey]);

    return (
        <div className="bg-primary text-background rounded-[2rem] p-8 shadow-xl border border-primary/20 flex flex-col h-full relative overflow-hidden group">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-sans font-bold tracking-tight text-accent">{title}</h3>
                <div className="flex items-center gap-2 bg-slate px-3 py-1 rounded-full border border-primary/50">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest">{t('liveFeed')}</span>
                </div>
            </div>
            <p className="text-sm font-mono text-background/60 mb-8">{t('card2Subtitle')}</p>

            <div className="mt-auto bg-[#0A0A0E] p-4 rounded-xl border border-slate/50 font-mono text-xs md:text-sm text-[#00FF41] leading-relaxed min-h-[120px] flex items-start">
                <div>
                    <span className="text-accent">{'> '}</span>
                    <span ref={textRef}></span>
                    <span className="animate-pulse">_</span>
                </div>
            </div>
        </div>
    );
}

function SchedulerCard({ title }) {
    const t = useTranslations('Features');
    const cursorRef = useRef(null);
    const btnRef = useRef(null);
    const containerRef = useRef(null);
    const days = t.raw('days');
    const [activeDay, setActiveDay] = useState(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Cursor enters
            tl.fromTo(cursorRef.current, { x: 0, y: 150, opacity: 0 }, { x: 60, y: 40, opacity: 1, duration: 1, ease: 'power2.out' })
                // Hover day
                .to(cursorRef.current, { scale: 0.9, duration: 0.1 })
                .call(() => setActiveDay(2)) // Wednesday
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                // Move to save
                .to(cursorRef.current, { x: 180, y: 110, duration: 1, ease: 'power2.inOut', delay: 0.5 })
                // Click save
                .to(cursorRef.current, { scale: 0.9, duration: 0.1 })
                .to(btnRef.current, { scale: 0.95, backgroundColor: '#e5c25e', duration: 0.1 }, "<")
                .to(cursorRef.current, { scale: 1, duration: 0.1 })
                .to(btnRef.current, { scale: 1, backgroundColor: '#C9A84C', duration: 0.1 }, "<")
                // Exit
                .to(cursorRef.current, { x: 300, y: 150, opacity: 0, duration: 1, delay: 0.5 })
                .call(() => setActiveDay(null));

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-background rounded-[2rem] p-8 shadow-2xl border border-primary/5 flex flex-col h-full relative overflow-hidden group">
            <h3 className="text-xl font-sans font-bold tracking-tight mb-2 text-primary">{title}</h3>
            <p className="text-xs font-mono text-slate mb-8">
                {t('card3Desc')}
            </p>

            <div className="mt-auto relative z-10 bg-white p-4 rounded-xl border border-primary/10 shadow-sm">
                <div className="grid grid-cols-7 gap-1 mb-4">
                    {days.map((d, i) => (
                        <div
                            key={i}
                            className={`text-center py-2 text-xs font-mono rounded-md transition-colors duration-300
                ${activeDay === i ? 'bg-accent text-primary font-bold' : 'bg-background/50 text-slate'}`}
                        >
                            {d}
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <div ref={btnRef} className="bg-accent text-primary text-xs font-mono font-bold px-4 py-1.5 rounded-full transition-colors">
                        {t('save')}
                    </div>
                </div>

                {/* SVG Cursor */}
                <svg ref={cursorRef} className="absolute top-0 left-0 w-6 h-6 z-20 drop-shadow-md text-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.3 1-3.2-7.4-4.4 5V2z" stroke="white" strokeWidth="1" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}

export default function Features() {
    const t = useTranslations('Features');
    const shufflerItems = [
        { id: 1, label: t('card1Item1') },
        { id: 2, label: t('card1Item2') },
        { id: 3, label: t('card1Item3') }
    ];

    return (
        <section id="features" className="py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <p className="font-mono text-xs md:text-sm text-accent tracking-widest uppercase mb-4">
                        {t('eyebrow')}
                    </p>
                    <h2 className="text-4xl md:text-5xl text-title-sans mb-6">{t('title')}</h2>
                    <p className="text-slate font-mono text-sm md:text-base leading-relaxed">
                        {t('intro')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[450px]">
                    <ShufflerCard title={t('card1Title')} items={shufflerItems} />
                    <TypewriterCard title={t('card2Title')} />
                    <SchedulerCard title={t('card3Title')} />
                </div>
            </div>
        </section>
    );
}
