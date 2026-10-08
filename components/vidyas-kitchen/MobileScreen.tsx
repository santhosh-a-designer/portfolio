"use client";

import { useState } from "react";

/** Display size — 940px-wide sources render at ¼ for crisp 2× retina */
export const MOBILE_SCREEN_WIDTH = 235;
export const MOBILE_SCREEN_HEIGHT = 512;

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/** Rounded phone frame · source rendered at 2× density for clarity */
export default function MobileScreen({ src, alt, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center rounded-[32px] border border-zinc-200 bg-zinc-50 p-3 text-center shadow-[0_4px_16px_rgba(0,0,0,0.06)] ${className}`}
        style={{ width: MOBILE_SCREEN_WIDTH, height: MOBILE_SCREEN_HEIGHT }}
      >
        <span className="font-mono text-[10px] uppercase text-zinc-500">{alt}</span>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50 shadow-[0_4px_16px_rgba(0,0,0,0.06)] ${className}`}
      style={{ width: MOBILE_SCREEN_WIDTH, height: MOBILE_SCREEN_HEIGHT }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="sync"
        draggable={false}
        className="block h-full w-full object-cover object-top"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
