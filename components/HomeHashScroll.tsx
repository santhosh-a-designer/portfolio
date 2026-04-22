"use client";

import { useEffect } from "react";
import { useLenis } from "@/components/LenisProvider";
import { SCROLL_TO_WORKS_STORAGE_KEY } from "@/lib/scrollToWorks";
import { scrollToWorksSection } from "@/lib/scrollToWorksSection";

function scheduleScroll(fn: () => void) {
  fn();
  requestAnimationFrame(fn);
  requestAnimationFrame(() => requestAnimationFrame(fn));
  setTimeout(fn, 120);
  setTimeout(fn, 400);
  setTimeout(fn, 800);
  setTimeout(fn, 1200);
}

function consumeScrollToWorksFromStorage(): boolean {
  try {
    if (sessionStorage.getItem(SCROLL_TO_WORKS_STORAGE_KEY) === "1") {
      sessionStorage.removeItem(SCROLL_TO_WORKS_STORAGE_KEY);
      return true;
    }
  } catch {
    /* */
  }
  return false;
}

/**
 * Scroll to visible Works when landing with `#works` or after {@link BackToWorksLink} set the session flag.
 * Uses {@link scrollToWorksSection} so desktop `-100vh` overlap is accounted for.
 */
export default function HomeHashScroll() {
  const lenis = useLenis();

  useEffect(() => {
    const scrollToWorks = () => {
      if (!document.getElementById("works")) return;
      try {
        if (window.location.hash !== "#works") {
          history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}#works`
          );
        }
      } catch {
        /* */
      }
      scrollToWorksSection(lenis);
    };

    const shouldScroll = () => window.location.hash === "#works" || consumeScrollToWorksFromStorage();

    const run = () => {
      if (!shouldScroll()) return;
      scheduleScroll(scrollToWorks);
    };

    run();

    const onHash = () => {
      if (window.location.hash === "#works") scheduleScroll(scrollToWorks);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [lenis]);

  return null;
}
