import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';

// Generates /sitemap.xml. The site is a single page rendered in three locales,
// so we emit one entry per locale with hreflang alternates linking them together.
export default function sitemap() {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}`])
  );

  return routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
