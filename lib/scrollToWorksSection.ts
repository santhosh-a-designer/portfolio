import type Lenis from "lenis";
import { HEADER_SCROLL_OFFSET } from "@/components/LenisProvider";

const MD_QUERY = "(min-width: 768px)";

/**
 * Document Y to scroll so the **visible** Works band is in view.
 * On `md+`, `#works` uses `margin-top: -100vh` (overlap with About); scrolling to the section’s
 * layout top leaves you in the overlap — add one viewport height past that edge.
 */
export function computeWorksScrollTop(): number | null {
  if (typeof window === "undefined") return null;
  const el = document.getElementById("works");
  if (!el) return null;
  const sectionTop = el.getBoundingClientRect().top + window.scrollY;
  const isMd = window.matchMedia(MD_QUERY).matches;
  const pastOverlap = isMd ? window.innerHeight : 0;
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
