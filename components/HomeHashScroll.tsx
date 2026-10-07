"use client";

import { useEffect } from "react";
import type Lenis from "lenis";
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

/** Lenis scroll to `#work` (main / light portfolio). */
function scrollToWorkSection(lenis: Lenis | null) {
  const el = document.getElementById("work");
  if (!el) return;
  try {
    if (window.location.hash !== "#work") {
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}#work`);
    }
  } catch {
    /* */
  }
  if (lenis) {
    lenis.scrollTo(el, { offset: -80, duration: 0.9, lerp: 0.12, force: true });
  } else {
    window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  }
}

/**
 * Scroll to Works when landing with `#works` / `#work` or after {@link BackToWorksLink} set the session flag.
 * `#works` uses {@link scrollToWorksSection} (blueprint / dark edition). `#work` targets the main portfolio work section.
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
        return;
      }
      if (window.location.hash === "#work") {
        scheduleScroll(() => scrollToWorkSection(lenis));
      }
    };

    run();

    const onHash = () => {
      if (window.location.hash === "#snippets") {
        scheduleScroll(scrollToSnippets);
      } else if (window.location.hash === "#works") {
        scheduleScroll(scrollToWorks);
      } else if (window.location.hash === "#work") {
        scheduleScroll(() => scrollToWorkSection(lenis));
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [lenis]);

  return null;
}
