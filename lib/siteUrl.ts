/**
 * Canonical site origin for metadata, sitemap, and robots.
 * On Vercel, set `NEXT_PUBLIC_SITE_URL` to `https://your-domain.com` (no trailing slash).
 * Falls back to `VERCEL_URL` on deploy previews, then localhost in dev.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
