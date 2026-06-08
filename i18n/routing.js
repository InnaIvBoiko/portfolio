import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // Italian is the primary language; English and Ukrainian are also supported.
    locales: ['it', 'en', 'uk'],
    defaultLocale: 'it',
});
