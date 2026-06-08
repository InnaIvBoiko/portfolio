import { setRequestLocale } from 'next-intl/server';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Philosophy from '@/components/Philosophy';
import Protocol from '@/components/Protocol';
import Stack from '@/components/Stack';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default async function Home({ params }) {
  const { locale } = await params;
  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <div className="relative w-full min-h-screen bg-background text-primary selection:bg-accent selection:text-primary">
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
