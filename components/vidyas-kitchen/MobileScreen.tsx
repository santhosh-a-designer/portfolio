"use client";

import SkeletonImage from "@/components/SkeletonImage";

/** Display size — 940px-wide sources render at ¼ for crisp 2× retina */
export const MOBILE_SCREEN_WIDTH = 235;
export const MOBILE_SCREEN_HEIGHT = 512;

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Same frame for PWA, WhatsApp, and driver carousels:
 * subtle gray border + zinc-50 bezel (no black plate behind the screenshot).
 */
export default function MobileScreen({ src, alt, className = "" }: Props) {
  return (
    <div
      className={`relative mx-auto w-[min(235px,calc(100vw-3.25rem))] shrink-0 overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50 shadow-[0_4px_16px_rgba(0,0,0,0.06)] ${className}`}
      style={{ aspectRatio: `${MOBILE_SCREEN_WIDTH} / ${MOBILE_SCREEN_HEIGHT}` }}
    >
      <SkeletonImage
        src={src}
        alt={alt}
        decoding="async"
        tone="light"
        className="absolute inset-0 h-full w-full"
        imgClassName="block h-full w-full object-contain object-top"
      />
    </div>
  );
}
