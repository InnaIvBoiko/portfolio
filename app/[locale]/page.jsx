import { setRequestLocale, getTranslations } from 'next-intl/server';

import { SITE_URL } from '@/lib/site';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesTeaser from '@/components/ServicesTeaser';
import Features from '@/components/Features';
import Philosophy from '@/components/Philosophy';
import Protocol from '@/components/Protocol';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

// Schema.org Person — helps Google show Inna as a "profile" / knowledge entity.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Inna Boiko',
  url: SITE_URL,
  jobTitle: 'Freelance Web Developer · Frontend & Full-Stack',
  email: 'mailto:inna_boiko@libero.it',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bari',
    addressCountry: 'IT',
  },
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Web Development', 'SaaS', 'Web Security', 'SEO'],
  sameAs: [
    'https://github.com/InnaIvBoiko',
    'https://linkedin.com/in/inna-boiko',
  ],
};

export default async function Home({ params }) {
  const { locale } = await params;
  // Enable static rendering for this locale.
  setRequestLocale(locale);

  // FAQPage structured data — lets Google show the FAQ as rich results.
  const tFaq = await getTranslations({ locale, namespace: 'FAQ' });
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [1, 2, 3, 4, 5].map((i) => ({
      '@type': 'Question',
      name: tFaq(`q${i}`),
      acceptedAnswer: { '@type': 'Answer', text: tFaq(`a${i}`) },
    })),
  };

  return (
    <div className="relative w-full min-h-screen bg-background text-primary selection:bg-accent selection:text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ServicesTeaser />
        <Features />
        <Philosophy />
        <Protocol />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
