import type Lenis from "lenis";

/**
 * Scroll so that the Works section top edge sits flush at the viewport top.
 *
 * With Works having `md:mt-[-100vh]`, its layout offsetTop equals exactly the
 * scroll position where its top edge meets the viewport top — no extra offset
 * needed. Lenis offset: 0 places the element top at y=0 in the viewport.
 */
export function scrollToWorksSection(lenis: Lenis | null, opts?: { onStart?: () => void }): void {
  if (typeof window === "undefined") return;
  const el = document.getElementById("works");
  if (!el) return;

  opts?.onStart?.();

  if (lenis) {
    lenis.scrollTo(el, {
      offset: 0,
      duration: 0.9,
      lerp: 0.12,
      force: true,
    });
  } else {
    window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  }
}

/** Retained for any call sites that still use the computed value. */
export function computeWorksScrollTop(): number | null {
  if (typeof window === "undefined") return null;
  const el = document.getElementById("works");
  if (!el) return null;
  return el.offsetTop;
}
