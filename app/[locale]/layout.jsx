import '../globals.css';
import { Sora, Instrument_Serif, Fira_Code } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument-serif',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

// Pre-render every locale at build time.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const OG_LOCALES = { it: 'it_IT', en: 'en_US', uk: 'uk_UA' };

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  // hreflang map so Google serves the right language and de-duplicates the locales.
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `/${l}`])
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    keywords: [
      'Inna Boiko',
      'Frontend Developer',
      'Full-Stack Developer',
      'React',
      'Next.js',
      'TypeScript',
      'Bari',
      'Remote',
    ],
    authors: [{ name: 'Inna Boiko' }],
    icons: { icon: '/favicon.svg' },
    verification: {
      google: 'hOqEK5MKPLoYvLiNJLPEOjxEjzLjfDlpNdqquPoxE5E',
    },
    openGraph: {
      title: t('title'),
      description: t('ogDescription'),
      type: 'website',
      url: `/${locale}`,
      siteName: 'Inna Boiko',
      locale: OG_LOCALES[locale] ?? 'it_IT',
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: 'Inna Boiko — Frontend & Full-Stack Developer',
        },
      ],
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${sora.variable} ${instrumentSerif.variable} ${firaCode.variable}`}>
      <body className="bg-background text-primary font-sans antialiased overflow-x-hidden">
        {/* SVG Noise Filter Definition */}
        <svg
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-5 mix-blend-overlay"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.25 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
