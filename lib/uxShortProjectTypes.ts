/**
 * Content for {@link UxShortProjectCard} — swap fields per project; layout stays fixed.
 */
export type UxShortStatItem = {
  label: string;
  value: string;
};

export type UxShortShowreel = {
  src: string;
  /** e.g. video/quicktime for .mov */
  mimeType?: string;
  /** Section heading (default: Design walkthrough) */
  title?: string;
  poster?: string;
};

export type UxShortProjectContent = {
  projectLabel: string;
  projectTitle: string;
  /** Box 1 — comma/dot separated tools string */
  tools: string;
  /** Box 2 — timeline text */
  duration: string;
  /** Box 3 — when set, opens in new tab */
  liveUrl?: string;
  liveUrlDisplay?: string;
  /** Box 3 column label (default: Live site) */
  thirdInfoLabel?: string;
  /** When there is no URL, show this line in the third box (e.g. "Internal / NDA") */
  thirdInfoFallback?: string;
  /** One paragraph (~2–3 sentences) */
  uxUi: string;
  development: string;
  overview: string;
  /** Marketing & sales / impact — small stat grid */
  marketingStats?: UxShortStatItem[];
  /** Centered video (Figma walkthrough, screen recording) */
  showreel?: UxShortShowreel;
  packagingImages?: { src: string; alt: string; label?: string }[];
  accentColor?: string;
};
