import type Lenis from "lenis";
import { HEADER_SCROLL_OFFSET } from "@/components/LenisProvider";

const MD_QUERY = "(min-width: 768px)";

const scrollOpts = {
  duration: 1.2,
  lerp: 0.1 as const,
};

/**
 * Scroll the page so **Selected works** (desktop) is the main view: Lenis resolves
 * `scrollTo(HTMLElement)` from live layout (`rect.top + animatedScroll`), so it stays in sync
 * with the Works section height, unlike a hand-computed Y.
 */
export function scrollToWorksSection(lenis: Lenis | null, opts?: { onStart?: () => void }): void {
  if (typeof window === "undefined") return;
  const isMd = window.matchMedia(MD_QUERY).matches;
  const snap = document.getElementById("works-snap");
  const runStart = () => {
    opts?.onStart?.();
  };

  if (isMd && snap) {
    if (lenis) {
      lenis.scrollTo(snap, {
        ...scrollOpts,
        offset: HEADER_SCROLL_OFFSET,
        /** Ensure scroll even if a previous target matches (Lenis can no-op) */
        force: true,
        onStart: runStart,
      });
      return;
    }
    const y = snap.getBoundingClientRect().top + window.scrollY + HEADER_SCROLL_OFFSET;
    runStart();
    window.scrollTo({ top: Math.max(0, y), left: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById("works");
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, {
      duration: 0.9,
      lerp: 0.12,
      offset: HEADER_SCROLL_OFFSET,
      force: true,
      onStart: runStart,
    });
  } else {
    const y = el.getBoundingClientRect().top + window.scrollY + HEADER_SCROLL_OFFSET;
    runStart();
    window.scrollTo({ top: Math.max(0, y), left: 0, behavior: "smooth" });
  }
}

/**
 * @deprecated use {@link scrollToWorksSection} with Lenis + `#works-snap` only
 */
export function computeWorksScrollTop(): number | null {
  if (typeof window === "undefined") return null;
  const snap = document.getElementById("works-snap");
  if (snap) {
    return Math.max(0, snap.getBoundingClientRect().top + window.scrollY + HEADER_SCROLL_OFFSET);
  }
  const el = document.getElementById("works");
  if (!el) return null;
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY + HEADER_SCROLL_OFFSET);
}
