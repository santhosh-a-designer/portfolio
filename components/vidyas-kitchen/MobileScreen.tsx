"use client";

import SkeletonImage from "@/components/SkeletonImage";

/** Display size — 940px-wide sources stay sharp at 2× on a ~235px frame */
export const MOBILE_SCREEN_WIDTH = 235;
export const MOBILE_SCREEN_HEIGHT = 512;

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/** Rounded phone frame. Shrinks on narrow screens so two-up layouts don't overflow. */
export default function MobileScreen({ src, alt, className = "" }: Props) {
  return (
    <SkeletonImage
      src={src}
      alt={alt}
      className={`mx-auto w-[min(235px,calc(100vw-3.25rem))] aspect-[235/512] overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] ${className}`}
      imgClassName="object-cover object-top"
      decoding="async"
    />
  );
}
