"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@/components/LenisProvider";

/**
 * Client navigations from the long homepage (or between case studies) can leave
 * `window.scrollY` from the previous route; the case study then appears “mid-page”.
 * Next’s default Link scroll-to-top does not always win. Force the top on mount / slug change.
 */
export default function CaseStudyScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, lenis]);

  return null;
}
