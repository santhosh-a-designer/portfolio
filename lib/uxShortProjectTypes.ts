/**
 * Content for {@link UxShortProjectCard} — swap fields per project; layout stays fixed.
 */
export type UxShortStatItem = {
  label: string;
  value: string;
};

export type UxShortShowreel = {
  /** Fallback / secondary source (e.g. .mov) */
  src: string;
  /** Preferred for the web (H.264 MP4) — try first; fixes Chrome/Edge vs QuickTime .mov */
  mp4Src?: string;
  /** e.g. video/quicktime for .mov in `src` */
  mimeType?: string;
  /** Section heading (default: Design walkthrough) */
  title?: string;
  poster?: string;
};

/** One video in a two-up row (same card pattern as {@link CaseStudyVideoShowcase}) */
export type UxShortShowreelVideoItem = {
  id: string;
  /** Shown in the card header (e.g. Atm-1) */
  label: string;
  caption: string;
  src: string;
  mp4Src?: string;
  mimeType?: string;
};

export type UxShortShowreelVideoSection = {
  sectionTitle: string;
  /** Usually two — rendered side by side on md+ */
  videos: UxShortShowreelVideoItem[];
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
  /** Third prose column heading (default: “Development”) */
  thirdBlockTitle?: string;
  overview: string;
  /** Marketing & sales / impact — small stat grid */
  marketingStats?: UxShortStatItem[];
  /** Centered single showreel */
  showreel?: UxShortShowreel;
  /**
   * Two-up video sections (e.g. Admin: Atm-1 + Atm-2, Loadman: Atm-3 + Atm-4).
   * Shown after the single `showreel` block, if any.
   */
  showreelVideoPairs?: UxShortShowreelVideoSection[];
  packagingImages?: { src: string; alt: string; label?: string }[];
  accentColor?: string;
};
