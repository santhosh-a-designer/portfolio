"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { VidyasShowcaseScreen } from "@/lib/vidyasKitchenCaseStudyContent";

function ScreenFrame({ screen }: { screen: VidyasShowcaseScreen }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showPlaceholder = !screen.imageSrc || imgFailed;

  return (
    <article className="flex flex-col shrink-0 w-[220px] sm:w-[260px] md:w-[280px] select-none">
      <div className="flex items-center justify-between gap-2 mb-2 px-0.5">
        <span className="text-[10px] font-mono font-black uppercase tracking-wider text-black truncate">
          {screen.surface}
        </span>
        <span className="text-[9px] font-mono text-zinc-500 shrink-0">#{screen.rank}</span>
      </div>

      <div className="flex flex-wrap gap-1 mb-2 min-h-[22px]">
        {screen.tags.map((tag) => (
          <span
            key={tag}
            className="px-1.5 py-0.5 bg-zinc-100 border border-zinc-300 text-[9px] font-mono font-bold text-zinc-600 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative aspect-[9/19.5] bg-[#1a1a1a] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden rounded-[1.25rem]">
        {!showPlaceholder && screen.imageSrc ? (
          <Image
            src={screen.imageSrc}
            alt={screen.name}
            fill
            className="object-cover object-top"
            sizes="280px"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-zinc-800 to-zinc-950 text-center">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#FAED00] mb-2">
              Screenshot soon
            </span>
            <span className="text-xs font-bold text-white/90 leading-snug">{screen.name}</span>
          </div>
        )}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-black/80 rounded-b-md z-10" />
      </div>

      <p className="mt-2.5 text-[11px] sm:text-xs font-bold text-zinc-800 leading-snug">{screen.caption}</p>
    </article>
  );
}

export default function VidyasScreenShowcase({ screens }: { screens: VidyasShowcaseScreen[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || paused) return;

    let frameId = 0;
    const step = () => {
      if (track.scrollWidth <= track.clientWidth) return;
      track.scrollLeft += 0.35;
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [paused, screens.length]);

  const loopScreens = [...screens, ...screens];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={trackRef}
        className="flex gap-5 sm:gap-8 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory touch-pan-x"
        data-lenis-prevent
        style={{ scrollbarWidth: "none" }}
      >
        {loopScreens.map((screen, idx) => (
          <div key={`${screen.id}-${idx}`} className="snap-start">
            <ScreenFrame screen={screen} />
          </div>
        ))}
      </div>
      <p className="text-[10px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">
        Auto-scroll · hover or drag to pause · {screens.length} key screens
      </p>
    </div>
  );
}
