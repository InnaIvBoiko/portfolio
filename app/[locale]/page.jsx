import { setRequestLocale } from 'next-intl/server';

import { SITE_URL } from '@/lib/site';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Philosophy from '@/components/Philosophy';
import Protocol from '@/components/Protocol';
import Stack from '@/components/Stack';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

// Schema.org Person — helps Google show Inna as a "profile" / knowledge entity.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Inna Boiko',
  url: SITE_URL,
  jobTitle: 'Frontend & Full-Stack Developer',
  email: 'mailto:inna_boiko@libero.it',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bari',
    addressCountry: 'IT',
  },
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Frontend Architecture', 'Web Security', 'SaaS'],
  sameAs: [
    'https://github.com/InnaIvBoiko',
    'https://linkedin.com/in/inna-boiko',
  ],
};

export default async function Home({ params }) {
  const { locale } = await params;
  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <div className="relative w-full min-h-screen bg-background text-primary selection:bg-accent selection:text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
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
