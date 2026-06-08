import './globals.css';
import { Sora, Instrument_Serif, Fira_Code } from 'next/font/google';

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

export const metadata = {
  title: 'Inna Boiko — Frontend & Full-Stack Developer',
  description:
    'Inna Boiko, Sviluppatrice Frontend & Full-Stack: React, Next.js (App Router) e TypeScript. SaaS scalabili, performance, architetture pulite e sicurezza. Bari, Italia — disponibile da remoto.',
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
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Inna Boiko — Frontend & Full-Stack Developer',
    description:
      'React, Next.js (App Router) e TypeScript. SaaS scalabili, performance e sicurezza. Bari, Italia — disponibile da remoto.',
    type: 'website',
    locale: 'it_IT',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${instrumentSerif.variable} ${firaCode.variable}`}>
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
        {children}
      </body>
    </html>
  );
}
