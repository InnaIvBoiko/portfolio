import { SITE_URL } from '@/lib/site';

// Generates /robots.txt — allows all crawlers and points them to the sitemap.
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
