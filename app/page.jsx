'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Philosophy from '@/components/Philosophy';
import Protocol from '@/components/Protocol';
import Stack from '@/components/Stack';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const appRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Global GSAP context if needed
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="relative w-full min-h-screen bg-background text-primary selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Stack />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
