// Case study registry. Non-translatable metadata lives here; all copy lives in
// messages under `CaseStudies.<slug>`. The detail template (components/CaseStudy)
// renders: context → challenge → solution (3 pillars) → result (3 stats).
export const caseStudies = [
    {
        slug: 'zeusdental',
        tech: ['React', 'Redux Toolkit', 'React Router 7', 'Web Crypto API', 'Vitest', 'Multi-tenant'],
        // i18n key prefixes — each pillar reads <prefix>Title / <prefix>Desc,
        // each stat reads <prefix>Value / <prefix>Label.
        pillars: ['solArch', 'solSec', 'solMod'],
        stats: ['stat1', 'stat2', 'stat3'],
        // Proprietary product — no public live link.
        live: null,
    },
];

export const caseStudySlugs = caseStudies.map((c) => c.slug);

export function getCaseStudy(slug) {
    return caseStudies.find((c) => c.slug === slug) ?? null;
}
