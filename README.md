# Inna Boiko — Portfolio

**Live:** [portfolio-three-ochre-95.vercel.app](https://portfolio-three-ochre-95.vercel.app/)

Personal portfolio of Inna Boiko, Frontend & Full-Stack Developer (Bari, Italy). Built with Next.js 15 App Router, React 19 and Tailwind CSS. Trilingual (IT / EN / UK), fully typed, production-grade architecture.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 — App Router |
| UI | React 19, Tailwind CSS v3 |
| Animations | GSAP + ScrollTrigger |
| i18n | next-intl v4 (IT / EN / UK) |
| Contact form | Web3Forms (no backend needed) |
| Fonts | Sora · Instrument Serif · Fira Code (next/font/google) |
| Deployment | Vercel (auto-deploy on push to `main`) |

---

## Architecture

```
app/
  [locale]/
    layout.jsx          # html lang, fonts, noise filter, OG metadata, NextIntlClientProvider
    page.jsx            # home (Server Component, setRequestLocale)
    about/page.jsx      # bio + Stack section
    services/page.jsx   # freelance services + pricing
    case-studies/
      page.jsx          # case studies index
      [slug]/page.jsx   # individual case study (static params from lib/caseStudies.js)
    privacy/page.jsx    # GDPR Privacy Policy
    opengraph-image.jsx # dynamic 1200×630 OG image (Next.js ImageResponse)
  sitemap.js            # /sitemap.xml — all locales × pages
  globals.css
i18n/
  routing.js            # locales config (it · en · uk), defaultLocale = 'it'
  navigation.js         # locale-aware Link / useRouter / usePathname
  request.js            # loads messages/<locale>.json per request
middleware.js           # next-intl: detect locale → URL · cookie · Accept-Language
messages/
  it.json               # Italian — all namespaces
  en.json               # English
  uk.json               # Ukrainian
lib/
  caseStudies.js        # case study metadata (slugs, tech stack, links)
  site.js               # SITE_URL constant
components/
  Navbar.jsx            # fixed nav + mobile burger menu, GSAP scroll state
  Footer.jsx            # links, socials, open-to-work badge
  Hero.jsx              # hero section with GSAP animation
  CTASection.jsx        # Web3Forms contact form with GDPR consent checkbox
  Stack.jsx             # tech stack + education timeline
  ...
```

---

## Key design decisions

**Next.js App Router with locale routing** — each page lives under `app/[locale]/`. The middleware detects locale from URL, cookie, or `Accept-Language` and redirects. `generateStaticParams` pre-renders all locale × page combinations at build time.

**Server Components by default** — only GSAP-animated components and the contact form are client components (`'use client'`). Everything else is a Server Component, keeping the JS bundle small.

**next-intl v4 split config** — `setRequestLocale` in every Server Component enables static rendering without breaking i18n. Translations are namespaced per component for maintainability.

**Dynamic OG image** — `app/[locale]/opengraph-image.jsx` uses `next/og` ImageResponse to generate a 1200×630 OG image at build time. No external image editor needed.

**Security headers** — `next.config.mjs` sets `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` and `X-DNS-Prefetch-Control` on every response. No strict CSP (would conflict with GSAP inline styles).

**GDPR compliance** — Privacy Policy page (`/privacy`) + mandatory consent checkbox in the contact form. No tracking cookies, no third-party analytics.

---

## Case studies

| Project | Tech | Links |
|---|---|---|
| [ZeusDental](https://portfolio-three-ochre-95.vercel.app/it/case-studies/zeusdental) | React · Redux Toolkit · Web Crypto API · Vitest | Production SaaS |
| [Psychologists Services](https://portfolio-three-ochre-95.vercel.app/it/case-studies/psychologists-services) | Next.js 14 · Prisma 5 · Neon · Auth.js v5 | [Live](https://psychologists-services-98v1.vercel.app/) · [Code](https://github.com/InnaIvBoiko/psychologists_services) |
| [Living Notebook](https://portfolio-three-ochre-95.vercel.app/it/case-studies/living-notebook) | Next.js 16 · TypeScript · PGlite WASM · Auth.js v5 | [Live](https://next-js-notebook.vercel.app/) · [Code](https://github.com/InnaIvBoiko/next-js-notebook) |
| [CRM Dashboard](https://portfolio-three-ochre-95.vercel.app/it/case-studies/crm-dashboard) | Next.js 16 · Parallel Routes · Drizzle · TanStack Query | [Live](https://crm-nextjs-six.vercel.app/) · [Code](https://github.com/InnaIvBoiko/crm-nextjs) |

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Available scripts:

```bash
npm run dev        # development server with Turbopack
npm run build      # production build
npm run start      # serve production build locally
npm run lint       # ESLint (Next.js config)
```

---

## i18n — adding a new language

1. Add the locale to `i18n/routing.js`
2. Create `messages/<locale>.json` (copy `en.json` as a starting point)
3. Vercel will pick up the new locale automatically on next deploy

---

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional | Override the canonical URL (e.g. `https://innaboiko.com`). Defaults to the Vercel deployment URL. |

---

## Deployment

Hosted on **Vercel**. Every push to `main` triggers an automatic deploy. No environment variables are required for basic functionality — the Web3Forms key is hardcoded and public by design (Web3Forms is domain-locked on their side).
