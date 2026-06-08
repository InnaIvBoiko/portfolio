'use client';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Button({ children, className = '', variant = 'primary', onClick, ...props }) {
    const buttonRef = useRef(null);
    const bgRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const btn = buttonRef.current;
            const bg = bgRef.current;

            btn.addEventListener('mouseenter', () => {
                gsap.to(bg, { y: '0%', duration: 0.4, ease: 'power3.out' });
                gsap.to(btn, { scale: 1.03, duration: 0.3, ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(bg, { y: '100%', duration: 0.4, ease: 'power3.out' });
                gsap.to(btn, { scale: 1, duration: 0.3, ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' });
            });

            btn.addEventListener('mousedown', () => {
                gsap.to(btn, { scale: 0.97, duration: 0.1 });
            });

            btn.addEventListener('mouseup', () => {
                gsap.to(btn, { scale: 1.03, duration: 0.3, ease: 'elastic.out(1, 0.5)' });
            });
        }, buttonRef);

        return () => ctx.revert();
    }, []);

    const baseStyle = "group relative overflow-hidden rounded-[2rem] px-8 py-4 font-sans font-semibold tracking-tight transition-colors inline-block text-center";

    const variants = {
        primary: "bg-primary text-background border border-primary/20",
        accent: "bg-accent text-primary border border-accent/20",
        outline: "bg-transparent text-primary border border-primary/20",
    };

    const hoverBgs = {
        primary: "bg-slate",
        accent: "bg-[#9B88FF]", // lighter plasma
        outline: "bg-primary text-background",
    };

    return (
        <button
            ref={buttonRef}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            <span
                ref={bgRef}
                className={`absolute inset-0 w-full h-full translate-y-full ${hoverBgs[variant]}`}
            />
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-background transition-colors duration-300">
                {children}
            </span>
        </button>
    );
}
