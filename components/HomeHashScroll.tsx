"use client";

import { useEffect } from "react";

/**
 * When landing on `/#works` (or using in-page #works), scroll the real Works anchor
 * into view. The anchor sits at `top: 100vh` inside the Works section to offset the
 * -100vh overlap layout; the sticky band also uses `top` below the fixed nav.
 */
function scrollToWorksIfNeeded() {
  if (window.location.hash !== "#works") return;
  const el = document.getElementById("works");
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, left: 0, behavior: "auto" });
}

function scheduleScrollToWorks() {
  scrollToWorksIfNeeded();
  requestAnimationFrame(scrollToWorksIfNeeded);
  setTimeout(scrollToWorksIfNeeded, 120);
  setTimeout(scrollToWorksIfNeeded, 400);
}

export default function HomeHashScroll() {
  useEffect(() => {
    scheduleScrollToWorks();
    const onHash = () => {
      if (window.location.hash === "#works") scheduleScrollToWorks();
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return null;
}
