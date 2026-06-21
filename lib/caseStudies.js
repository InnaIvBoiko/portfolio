export const caseStudies = [
    {
        slug: 'zeusdental',
        tech: ['React', 'Redux Toolkit', 'React Router 7', 'Web Crypto API', 'Vitest', 'Multi-tenant'],
        pillars: ['solArch', 'solSec', 'solMod'],
        stats: ['stat1', 'stat2', 'stat3'],
        live: null,
        code: null,
    },
    {
        slug: 'psychologists-services',
        tech: ['Next.js 14', 'Prisma 5', 'Neon', 'Auth.js v5', 'next-intl', 'Vitest', 'Playwright'],
        pillars: ['solArch', 'solSec', 'solUX'],
        stats: ['stat1', 'stat2', 'stat3'],
        live: 'https://psychologists-services-98v1.vercel.app/',
        code: 'https://github.com/InnaIvBoiko/psychologists_services',
    },
    {
        slug: 'living-notebook',
        tech: ['Next.js 16', 'TypeScript', 'Auth.js v5', 'Drizzle ORM', 'PGlite', 'Zustand', 'TanStack Query'],
        pillars: ['solArch', 'solDB', 'solSec'],
        stats: ['stat1', 'stat2', 'stat3'],
        live: 'https://next-js-notebook.vercel.app/',
        code: 'https://github.com/InnaIvBoiko/next-js-notebook',
    },
    {
        slug: 'crm-dashboard',
        tech: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'Neon', 'TanStack Query 5', 'Vitest'],
        pillars: ['solRoutes', 'solData', 'solTest'],
        stats: ['stat1', 'stat2', 'stat3'],
        live: 'https://crm-nextjs-six.vercel.app/',
        code: 'https://github.com/InnaIvBoiko/crm-nextjs',
    },
];

export const caseStudySlugs = caseStudies.map((c) => c.slug);

export function getCaseStudy(slug) {
    return caseStudies.find((c) => c.slug === slug) ?? null;
}
