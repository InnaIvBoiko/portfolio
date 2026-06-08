# Portfolio — Inna Boiko

**Live:** [portfolio-three-ochre-95.vercel.app](https://portfolio-three-ochre-95.vercel.app/)

Portfolio frontend costruito con **Next.js (App Router)**, **React 19**, **Tailwind CSS** e **GSAP**, deployato su **Vercel**. Multilingua (IT / EN / UK) con **next-intl**.

## Stack

- [Next.js 15](https://nextjs.org/) — App Router
- React 19
- Tailwind CSS 3
- GSAP + ScrollTrigger (animazioni)
- **next-intl v4** — i18n con routing per-locale (`/it`, `/en`, `/uk`)
- Font ottimizzati via `next/font/google` (Sora, Instrument Serif, Fira Code)

## Sviluppo

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Script

- `npm run dev` — server di sviluppo
- `npm run build` — build di produzione
- `npm run start` — avvia la build di produzione
- `npm run lint` — ESLint (config Next)

## Struttura

```
app/
  [locale]/
    layout.jsx   # <html lang>, font, filtro noise, metadata localizzata, NextIntlClientProvider
    page.jsx     # pagina principale (Server Component, setRequestLocale)
  globals.css    # direttive Tailwind + utility custom
i18n/
  routing.js     # locales (it/en/uk) + defaultLocale
  navigation.js  # Link/useRouter/usePathname locale-aware
  request.js     # carica messages/<locale>.json per richiesta
middleware.js    # next-intl: detect locale (URL → cookie → Accept-Language) + redirect
messages/        # cataloghi di traduzione: it.json · en.json · uk.json
components/       # Navbar (+ LanguageSwitcher), Hero, HeroScene, Features, Philosophy, Protocol, Stack, CTASection, Footer, Button, Logo
public/           # asset statici
```

## Internazionalizzazione (i18n)

- **Lingue:** italiano (default), inglese, ucraino — configurate in [i18n/routing.js](i18n/routing.js).
- **Routing:** ogni pagina vive sotto `app/[locale]/`, quindi gli URL sono `/it`, `/en`, `/uk`. `/` reindirizza alla lingua rilevata.
- **Testi:** un file JSON per lingua in [messages/](messages/), con un namespace per componente (`Hero`, `Features`, …). I componenti usano `useTranslations('Namespace')`.
- **Switcher:** la tendina lingua in `Navbar` ([components/LanguageSwitcher.jsx](components/LanguageSwitcher.jsx)) cambia locale mantenendo la pagina; la scelta è persistita in un cookie da next-intl.

> Per aggiungere una lingua: aggiungila a `i18n/routing.js` e crea `messages/<locale>.json`.

## Deploy

Hostato su **Vercel** (Next.js auto-rilevato): ogni push su `main` triggera un deploy automatico.

> Le animazioni GSAP girano lato client: i componenti interattivi sono marcati con `'use client'`.
