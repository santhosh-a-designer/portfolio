"use client";

import Image from "next/image";
import { useMemo } from "react";
import { heroScreenForSurface } from "@/lib/vidyasDesignSystemScreens";
import type { VidyasDesignSurface } from "@/lib/vidyasKitchenCaseStudyContent";

const STAGE_HEIGHT = "min(480px, calc(100vw - 2rem))";

type Props = {
  surfaceId: VidyasDesignSurface["id"];
  reduceMotion: boolean;
  visible: boolean;
  isDarkPanel: boolean;
};

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[420px] border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
      <div className="flex items-center gap-2 border-b-2 border-black px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#FF462D]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#FAED00]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full border border-black bg-[#34D469]" aria-hidden />
        <span className="ml-2 flex-1 truncate border border-black/30 bg-zinc-100 px-2 py-0.5 font-mono text-[8px] font-bold text-zinc-600">
          vidyas.kitchen
        </span>
      </div>
      <div className="overflow-hidden bg-black">{children}</div>
    </div>
  );
}

function PhoneChrome({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-full max-w-[min(390px,calc(100vw-2rem))] overflow-hidden rounded-[32px] border-2 border-black bg-zinc-50 shadow-[3px_3px_0_0_#000] sm:max-w-[235px]"
      style={{ aspectRatio: "235 / 512" }}
    >
      {children}
    </div>
  );
}

export default function DesignSystemHeroPanel({
  surfaceId,
  reduceMotion,
  visible,
  isDarkPanel,
}: Props) {
  const screen = useMemo(() => heroScreenForSurface(surfaceId), [surfaceId]);

  const motionClass = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2";

  const transitionStyle = reduceMotion
    ? {}
    : {
        transition: "opacity 300ms ease-out, transform 300ms ease-out",
      };

  const image = (
    <div
      className="relative w-full"
      style={{ aspectRatio: `${screen.intrinsicWidth} / ${screen.intrinsicHeight}` }}
    >
      <Image
        src={screen.src}
        alt={screen.alt}
        fill
        className="object-contain object-top"
        sizes="(max-width: 768px) 100vw, 420px"
        priority={screen.surfaceId === "customer"}
      />
    </div>
  );

  const frame = (
    <div className="flex w-full justify-center">
      {screen.frame === "browser" ? (
        <BrowserChrome>{image}</BrowserChrome>
      ) : (
        <PhoneChrome>{image}</PhoneChrome>
      )}
    </div>
  );

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div
        className="relative flex w-full max-w-[440px] items-center justify-center"
        style={{ height: STAGE_HEIGHT, minHeight: 320 }}
      >
        <div className={`w-full ${motionClass}`} style={transitionStyle} key={surfaceId}>
          {frame}
        </div>
      </div>
      <p
        className={`max-w-[420px] text-center font-mono text-[10px] font-bold uppercase tracking-wide ${
          isDarkPanel ? "text-zinc-400" : "text-zinc-600"
        }`}
      >
        {screen.screenCaption}
      </p>
    </div>
  );
}
