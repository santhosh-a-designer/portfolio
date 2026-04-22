"use client";

import { useEffect } from "react";
import { useLenis, HEADER_SCROLL_OFFSET } from "@/components/LenisProvider";

function scheduleScroll(fn: () => void) {
  fn();
  requestAnimationFrame(fn);
  setTimeout(fn, 120);
  setTimeout(fn, 400);
}

/**
 * When landing on `/#works`, match Navigation + Lenis offset after layout.
 */
export default function HomeHashScroll() {
  const lenis = useLenis();

  useEffect(() => {
    const scrollToWorksIfNeeded = () => {
      if (window.location.hash !== "#works") return;
      const el = document.getElementById("works");
      if (!el) return;
      if (lenis) {
        lenis.scrollTo(el, { offset: HEADER_SCROLL_OFFSET, immediate: true });
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY + HEADER_SCROLL_OFFSET;
        window.scrollTo({ top: y, left: 0, behavior: "auto" });
      }
    };

    scheduleScroll(scrollToWorksIfNeeded);
    const onHash = () => {
      if (window.location.hash === "#works") scheduleScroll(scrollToWorksIfNeeded);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [lenis]);

  return null;
}
