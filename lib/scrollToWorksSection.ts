import type Lenis from "lenis";
import { HEADER_SCROLL_OFFSET } from "@/components/LenisProvider";

const MD_QUERY = "(min-width: 768px)";

/**
 * Framer `useScroll` on `#works` uses `offset: ["start end", "end end"]`, so progress 0 is when
 * the section’s top hits the **bottom** of the viewport, and progress 1 is when the section’s
 * bottom does. That maps to scrollY ≈ `yDoc - vh + t * h` for progress `t` and section height `h`.
 * We don’t use a vh multiple — the section is `md:h-[400vh]`, so we scroll ~70–75% in so the grid
 * (`showContent` at 0.6) and the nav “Works” state read correctly.
 */
export function computeWorksScrollTop(): number | null {
  if (typeof window === "undefined") return null;
  const el = document.getElementById("works");
  if (!el) return null;
  const yDoc = el.getBoundingClientRect().top + window.scrollY;
  const vh = window.innerHeight;
  const h = el.offsetHeight || 0;
  const isMd = window.matchMedia(MD_QUERY).matches;
  if (!isMd) {
    return Math.max(0, yDoc + HEADER_SCROLL_OFFSET);
  }
  /**
   * t ∈ [0,1] along Works’ `scrollYProgress`. ~0.6 turns `showContent` on; use high t so the grid
   * fills the sticky band (and nav reads “Works”), without overshooting a bogus `+ vh` multiple.
   */
  const t = 0.92;
  const raw = h > 0 ? yDoc - vh + t * h + HEADER_SCROLL_OFFSET : yDoc - vh + 3.6 * vh + HEADER_SCROLL_OFFSET;
  const maxY = document.documentElement.scrollHeight - vh;
  return Math.max(0, Math.min(raw, maxY));
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
