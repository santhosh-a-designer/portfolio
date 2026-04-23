import type Lenis from "lenis";

/**
 * Works should open as a full-view section with no dark strip above it.
 * Keep this local offset separate from the global nav offset.
 */
const WORKS_SCROLL_OFFSET = 0;

/**
 * Scroll to Works top with the shared header offset.
 * Works is now normal page flow (no deep snap anchor / scroll trap).
 */
export function scrollToWorksSection(lenis: Lenis | null, opts?: { onStart?: () => void }): void {
  if (typeof window === "undefined") return;
  const el = document.getElementById("works");
  if (!el) return;
  const runStart = () => {
    opts?.onStart?.();
  };

  if (lenis) {
    lenis.scrollTo(el, {
      duration: 0.85,
      lerp: 0.12,
      offset: WORKS_SCROLL_OFFSET,
      force: true,
      onStart: runStart,
    });
    return;
  } else {
    const y = el.getBoundingClientRect().top + window.scrollY + WORKS_SCROLL_OFFSET;
    runStart();
    window.scrollTo({ top: Math.max(0, y), left: 0, behavior: "smooth" });
  }
}

/**
 * Legacy helper retained for compatibility.
 */
export function computeWorksScrollTop(): number | null {
  if (typeof window === "undefined") return null;
  const el = document.getElementById("works");
  if (!el) return null;
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY + WORKS_SCROLL_OFFSET);
}
