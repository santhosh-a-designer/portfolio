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
export default function BackToWorksLink({ href = "/#works", onClick, ...rest }: Props) {
  const router = useRouter();

  return (
    <a
      {...rest}
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        e.preventDefault();
        try {
          const targetKey =
            href.includes("#snippets") ? SCROLL_TO_SNIPPETS_STORAGE_KEY : SCROLL_TO_WORKS_STORAGE_KEY;
          sessionStorage.setItem(targetKey, "1");
        } catch {
          /* private / blocked storage */
        }
        // Cross-route hash scroll can be flaky with soft navigation; force a full nav so
        // HomeHashScroll + hash always run from a clean page load.
        if (typeof window !== "undefined") {
          window.location.assign(href);
        } else {
          router.push("/");
        }
      }}
    />
  );
}
