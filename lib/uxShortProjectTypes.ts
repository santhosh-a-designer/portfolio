/**
 * Content for {@link UxShortProjectCard} — swap fields per project; layout stays fixed.
 */
export type UxShortProjectContent = {
  projectLabel: string;
  projectTitle: string;
  /** Box 1 — comma/dot separated tools string */
  tools: string;
  /** Box 2 — timeline text */
  duration: string;
  /** Box 3 — public site */
  liveUrl: string;
  liveUrlDisplay?: string;
  /** One paragraph (~2–3 sentences) */
  uxUi: string;
  development: string;
  overview: string;
  packagingImages: { src: string; alt: string; label?: string }[];
  accentColor?: string;
};
