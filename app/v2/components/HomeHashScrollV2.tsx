"use client";

import { useEffect } from "react";
import { useLenis } from "@/components/LenisProvider";
import { SCROLL_TO_WORKS_STORAGE_KEY } from "@/lib/scrollToWorks";

function scheduleScroll(fn: () => void) {
  fn();
  requestAnimationFrame(fn);
  requestAnimationFrame(() => requestAnimationFrame(fn));
  setTimeout(fn, 100);
  setTimeout(fn, 300);
  setTimeout(fn, 600);
}

function consumeStorageFlag(key: string): boolean {
  try {
    if (sessionStorage.getItem(key) === "1") {
      sessionStorage.removeItem(key);
      return true;
    }
  } catch {
    /* ignore */
  }
  return false;
}

export default function HomeHashScrollV2() {
  const lenis = useLenis();

  useEffect(() => {
    // Record that the user was on /v2
    try {
      sessionStorage.setItem("origin_version", "v2");
    } catch {
      /* ignore */
    }

    const scrollToTarget = (targetId: string) => {
      const el = document.getElementById(targetId);
      if (!el) return;
      const headerOffset = window.innerWidth < 768 ? -100 : -70;
      if (lenis) {
        lenis.scrollTo(el, {
          offset: headerOffset,
          duration: 0.8,
          lerp: 0.12,
          force: true,
        });
      } else {
        const topPos = el.getBoundingClientRect().top + window.scrollY + headerOffset;
        window.scrollTo({ top: Math.max(0, topPos), behavior: "smooth" });
      }
    };

    const run = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        scheduleScroll(() => scrollToTarget(hash));
        return;
      }
      if (consumeStorageFlag(SCROLL_TO_WORKS_STORAGE_KEY)) {
        scheduleScroll(() => scrollToTarget("work"));
      }
    };

    run();

    const onHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) scheduleScroll(() => scrollToTarget(hash));
    };

    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [lenis]);

  return null;
}
