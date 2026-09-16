"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useRouter } from "next/navigation";
import {
  SCROLL_TO_SNIPPETS_STORAGE_KEY,
  SCROLL_TO_WORKS_STORAGE_KEY,
} from "@/lib/scrollToWorks";

type Props = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href?: string;
};

/**
 * Client navigation to home + section hash: Next.js may skip native hash scroll on cross-route links.
 * We set a one-shot session flag and push `/` so {@link HomeHashScroll} can Lenis-scroll once the section exists.
 */
export default function BackToWorksLink({ href = "/v2#work", onClick, ...rest }: Props) {
  const router = useRouter();

  return (
    <a
      {...rest}
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        e.preventDefault();

        // Check if history has a previous page within the same origin
        if (typeof window !== "undefined") {
          const referrer = document.referrer;
          const isFromV2 = referrer.includes("/v2") || (!referrer.includes("/graphic-design") && !referrer.includes("/ux-ui-shorts"));
          const targetUrl = isFromV2 ? "/v2#work" : href;
          window.location.assign(targetUrl);
        } else {
          router.push("/v2#work");
        }
      }}
    />
  );
}
