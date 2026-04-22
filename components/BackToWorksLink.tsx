"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useRouter } from "next/navigation";
import { SCROLL_TO_WORKS_STORAGE_KEY } from "@/lib/scrollToWorks";

type Props = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href?: string;
};

/**
 * Client navigation to home + Works: Next.js often skips native hash scroll on cross-route `<Link href="/#works" />`.
 * We set a one-shot session flag and push `/` so {@link HomeHashScroll} can Lenis-scroll once the Works section exists.
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
          sessionStorage.setItem(SCROLL_TO_WORKS_STORAGE_KEY, "1");
        } catch {
          /* private / blocked storage */
        }
        router.push("/");
      }}
    />
  );
}
