"use client";

import { useEffect, useState } from "react";
import SkeletonImage from "@/components/SkeletonImage";

type Photo = { src: string; alt: string; focus?: string };

type Props = {
  photos: Photo[];
};

/** 3:2 slides — width drives height via aspect-ratio */
const SLIDE_CLASS =
  "relative shrink-0 overflow-hidden border-r-2 border-black w-[min(300px,78vw)] sm:w-[390px] md:w-[450px] aspect-[3/2]";

const DEFAULT_FOCUS = "50% 58%";

export default function FoodPhotoCarousel({ photos }: Props) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const loop = [...photos, ...photos];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div
      className="relative border-y-2 border-black overflow-hidden bg-black"
      aria-label="Vidya's Kitchen food photography"
    >
      <div
        className={`flex w-max items-stretch ${reducedMotion ? "overflow-x-auto" : "animate-food-carousel"}`}
      >
        {loop.map((photo, index) => (
          <SkeletonImage
            key={`${photo.src}-${index}`}
            src={photo.src}
            alt={photo.alt}
            loading={index < 2 ? "eager" : "lazy"}
            className={SLIDE_CLASS}
            imgClassName="scale-[1.03] object-cover"
            imgStyle={{ objectPosition: photo.focus ?? DEFAULT_FOCUS }}
            tone="dark"
          />
        ))}
      </div>
    </div>
  );
}
