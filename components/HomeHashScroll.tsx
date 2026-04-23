"use client";

import { useEffect } from "react";
import { useLenis } from "@/components/LenisProvider";
import {
  SCROLL_TO_SNIPPETS_STORAGE_KEY,
  SCROLL_TO_WORKS_STORAGE_KEY,
} from "@/lib/scrollToWorks";
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

function consumeStorageFlag(key: string): boolean {
  try {
    if (sessionStorage.getItem(key) === "1") {
      sessionStorage.removeItem(key);
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
    const scrollToSnippets = () => {
      const el = document.getElementById("snippets");
      if (!el) return;
      try {
        if (window.location.hash !== "#snippets") {
          history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}#snippets`
          );
        }
      } catch {
        /* */
      }
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
    };

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

    const run = () => {
      if (
        window.location.hash === "#snippets" ||
        consumeStorageFlag(SCROLL_TO_SNIPPETS_STORAGE_KEY)
      ) {
        scheduleScroll(scrollToSnippets);
        return;
      }
      if (
        window.location.hash === "#works" ||
        consumeStorageFlag(SCROLL_TO_WORKS_STORAGE_KEY)
      ) {
        scheduleScroll(scrollToWorks);
      }
    };

    run();

    const onHash = () => {
      if (window.location.hash === "#snippets") {
        scheduleScroll(scrollToSnippets);
      } else if (window.location.hash === "#works") {
        scheduleScroll(scrollToWorks);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [lenis]);

  return null;
}
