import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';
import { caseStudySlugs } from '@/lib/caseStudies';

// Generates /sitemap.xml. The site is rendered in three locales, so each page
// emits one entry per locale with hreflang alternates linking them together.
const PAGES = [
  { path: '', priority: 1 },
  { path: '/services', priority: 0.9 },
  { path: '/case-studies', priority: 0.8 },
  { path: '/about', priority: 0.7 },
  ...caseStudySlugs.map((slug) => ({ path: `/case-studies/${slug}`, priority: 0.7 })),
];

export default function sitemap() {
  return PAGES.flatMap(({ path, priority }) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`])
    );

    return routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: locale === routing.defaultLocale ? priority : priority - 0.2,
      alternates: { languages },
    }));
  });
}
