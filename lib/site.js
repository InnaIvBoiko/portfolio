// Single source of truth for the public site URL.
// Override on Vercel with NEXT_PUBLIC_SITE_URL once a custom domain is connected
// (e.g. https://innaboiko.com). Falls back to the current Vercel deployment.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-three-ochre-95.vercel.app'
).replace(/\/$/, '');
