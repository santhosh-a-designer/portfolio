"use client";

import { useEffect, useState } from "react";
import MobileScreen, { MOBILE_SCREEN_WIDTH } from "./MobileScreen";
import type { VidyasOpsScreen } from "@/lib/vidyasKitchenCaseStudyContent";

const WIDE_SLIDE_WIDTH = 520;

type Props = {
  screens: VidyasOpsScreen[];
  wide?: boolean;
  durationSec?: number;
  label: string;
};

function MobileSlide({ screen }: { screen: VidyasOpsScreen }) {
  return (
    <div
      className="flex shrink-0 flex-col items-center px-3 sm:px-4"
      style={{ width: MOBILE_SCREEN_WIDTH + 32 }}
    >
      <span className="mb-2 font-mono text-[9px] font-black uppercase tracking-wider text-[#FF462D]">
        {screen.tag}
      </span>
      <MobileScreen src={screen.src} alt={screen.alt} />
      <p className="mt-3 max-w-[235px] text-center text-[11px] font-bold leading-snug text-zinc-700 sm:text-xs">
        {screen.caption}
      </p>
    </div>
  );
}

function WideSlide({ screen }: { screen: VidyasOpsScreen }) {
  return (
    <div
      className="flex shrink-0 flex-col items-center px-3 sm:px-4"
      style={{ width: WIDE_SLIDE_WIDTH + 32 }}
    >
      <span className="mb-2 font-mono text-[9px] font-black uppercase tracking-wider text-[#FF462D]">
        {screen.tag}
      </span>
      <div
        className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
        style={{ width: WIDE_SLIDE_WIDTH }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screen.src}
          alt={screen.alt}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto"
        />
      </div>
      <p className="mt-3 max-w-[520px] text-center text-[11px] font-bold leading-snug text-zinc-700 sm:text-xs">
        {screen.caption}
      </p>
    </div>
  );
}

/** Auto-moving carousel for kitchen ops screens */
export default function OpsScreenCarousel({ screens, wide = false, durationSec = 50, label }: Props) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const loop = [...screens, ...screens];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="relative overflow-hidden py-4" aria-label={label}>
      <div
        className={`flex w-max items-start ${
          reducedMotion
            ? "flow-scroll-hide overflow-x-auto px-4"
            : "animate-flow-carousel hover:[animation-play-state:paused]"
        }`}
        style={reducedMotion ? undefined : { animationDuration: `${durationSec}s` }}
      >
        {loop.map((screen, index) =>
          wide ? (
            <WideSlide key={`${screen.id}-${index}`} screen={screen} />
          ) : (
            <MobileSlide key={`${screen.id}-${index}`} screen={screen} />
          )
        )}
      </div>
    </div>
  );
}
