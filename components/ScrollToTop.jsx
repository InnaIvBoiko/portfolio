'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

// Fixed "back to top" button; appears after scrolling down.
export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function onScroll() {
            setVisible(window.scrollY > 500);
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Torna su"
            className={`fixed bottom-6 right-6 z-[90] inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-primary shadow-lg border border-accent/20 hover:bg-[#9B88FF] transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
}
