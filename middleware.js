import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Detects the locale (URL → cookie → Accept-Language) and redirects when missing.
export default createMiddleware(routing);

export const config = {
    // Skip Next internals, the API, and anything with a file extension (static assets).
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
