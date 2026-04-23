"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Client navigations from the long homepage (or between case studies) can leave
 * `window.scrollY` from the previous route; the case study then appears “mid-page”.
 * Next’s default Link scroll-to-top does not always win. Force the top on mount / slug change.
 */
export default function CaseStudyScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
