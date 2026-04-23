import type Lenis from "lenis";
import { HEADER_SCROLL_OFFSET } from "@/components/LenisProvider";

const MD_QUERY = "(min-width: 768px)";

/**
 * Document Y to scroll so the **visible** Works band is in view.
 * On `md+`, `#works` uses `margin-top: -100vh` (overlap with About). One viewport is not enough:
 * the desktop grid stays hidden until `scrollYProgress` in Works exceeds ~0.75, so we must scroll
 * far enough into the 200vh section for the parallax + cards to turn on.
 */
export function computeWorksScrollTop(): number | null {
  if (typeof window === "undefined") return null;
  const el = document.getElementById("works");
  if (!el) return null;
  const sectionTop = el.getBoundingClientRect().top + window.scrollY;
  const isMd = window.matchMedia(MD_QUERY).matches;
  const vh = window.innerHeight;
  /** ~1 vh for About overlap + ~0.7 vh so Works `showContent` (progress > 0.75) triggers */
  const pastOverlap = isMd ? vh * 1.68 : 0;
  return Math.max(0, sectionTop + pastOverlap + HEADER_SCROLL_OFFSET);
}

export function scrollToWorksSection(lenis: Lenis | null, opts?: { onStart?: () => void }): void {
  const y = computeWorksScrollTop();
  if (y == null) return;
  if (lenis) {
    lenis.scrollTo(y, {
      duration: 0.9,
      lerp: 0.12,
      onStart: opts?.onStart,
    });
  } else {
    opts?.onStart?.();
    window.scrollTo({ top: y, left: 0, behavior: "smooth" });
  }
}
