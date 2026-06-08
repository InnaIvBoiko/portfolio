# Portfolio — Inna Boiko

Portfolio frontend costruito con **Next.js (App Router)**, **React 19**, **Tailwind CSS** e **GSAP**.

## Stack

- [Next.js 15](https://nextjs.org/) — App Router
- React 19
- Tailwind CSS 3
- GSAP + ScrollTrigger (animazioni)
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
  layout.jsx     # html/body, font, filtro noise, metadata
  page.jsx       # pagina principale (Client Component, orchestrazione GSAP)
  globals.css    # direttive Tailwind + utility custom
components/       # Navbar, Hero, Features, Philosophy, Protocol, CTASection, Footer, Button
public/           # asset statici
```

> Le animazioni GSAP girano lato client: i componenti interattivi sono marcati con `'use client'`.
