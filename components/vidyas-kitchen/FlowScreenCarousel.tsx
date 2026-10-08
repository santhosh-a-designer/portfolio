"use client";

import { useEffect, useState } from "react";
import MobileScreen from "./MobileScreen";
import type { VidyasProductFlowScreen } from "@/lib/vidyasKitchenCaseStudyContent";

type Props = {
  screens: VidyasProductFlowScreen[];
};

/** One slide: tag + phone + caption */
function CarouselSlide({ screen }: { screen: VidyasProductFlowScreen }) {
  return (
    <div className="flex w-[min(267px,calc(100vw-1.5rem))] shrink-0 flex-col items-center px-3 sm:px-4">
      <span
        className={`mb-2 font-mono text-[9px] font-black uppercase tracking-wider ${
          screen.featured
            ? "border-2 border-black bg-[#FF462D] px-2 py-0.5 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            : "text-[#FF462D]"
        }`}
      >
        {screen.tag}
      </span>
      <MobileScreen src={screen.src} alt={screen.alt} />
      <p className="mt-3 max-w-[235px] text-center text-[11px] font-bold leading-snug text-zinc-700 sm:text-xs">
        {screen.caption}
      </p>
    </div>
  );
}

/** Infinite auto-moving carousel — duplicated track, CSS translate loop */
export default function FlowScreenCarousel({ screens }: Props) {
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
    <div
      className="relative overflow-hidden py-6"
      aria-label="Product flow screens"
    >
      <div
        className={`flex w-max items-start ${
          reducedMotion
            ? "flow-scroll-hide overflow-x-auto px-4"
            : "animate-flow-carousel hover:[animation-play-state:paused]"
        }`}
      >
        {loop.map((screen, index) => (
          <CarouselSlide key={`${screen.id}-${index}`} screen={screen} />
        ))}
      </div>
    </div>
  );
}
