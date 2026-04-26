export type GraphicDesignBeforeAfter = {
  oldSrc: string;
  newSrc: string;
  oldAlt: string;
  newAlt: string;
  /** Next/Image intrinsic dimensions (must match the files’ aspect). Used so the row has no extra gap below. */
  intrinsicWidth?: number;
  intrinsicHeight?: number;
};

export type GraphicDesignThirdPanel = {
  src: string;
  alt: string;
  /** Optional; not shown in the UI. */
  label?: string;
  intrinsicWidth?: number;
  intrinsicHeight?: number;
};

/** One or two cards, below the main image row (e.g. back only, or front / back). */
export type GraphicDesignBusinessCardPair = {
  blockTitle: string;
  first?: {
    src: string;
    alt: string;
    intrinsicWidth?: number;
    intrinsicHeight?: number;
  };
  second: {
    src: string;
    alt: string;
    intrinsicWidth?: number;
    intrinsicHeight?: number;
  };
};

export type GraphicDesignPosterProject = {
  id: string;
  projectLabel: string;
  projectTitle: string;
  tagline: string;
  overview?: string;
  /** Replaces the default “Before & after” (e.g. “Outside & inside”, “Logo”). */
  imagePairTitle?: string;
  /**
   * When true, the main block is one full-width image from `beforeAfter.oldSrc` only (e.g. brand mark). `newSrc` is ignored; include a duplicate value for the field if your tooling needs it.
   */
  useMainRowSingleImage?: boolean;
  beforeAfter: GraphicDesignBeforeAfter;
  /** Optional third image (same row, equal height, object-contain). */
  thirdPanel?: GraphicDesignThirdPanel;
  /** Optional: second row within the same project (e.g. business cards). */
  businessCardPair?: GraphicDesignBusinessCardPair;
};
