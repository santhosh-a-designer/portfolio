"use client";

import { useMemo, useRef, useState } from "react";

type VideoItem = {
  label: string;
  caption: string;
  src: string;
};

function getVideoName(src: string) {
  const parts = src.split("/");
  return parts[parts.length - 1] ?? src;
}

export default function CaseStudyVideoShowcase({
  title,
  reason,
  videos,
}: {
  title: string;
  reason: string;
  videos: VideoItem[];
}) {
  return (
    <section className="mt-12 border-t border-[#e7ddcf] pt-8">
      <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]">{title}</h2>
      <p className="mt-3 text-[15px] text-[#4d4136] leading-relaxed">{reason}</p>

      <div className="mt-5 grid md:grid-cols-2 gap-3">
        {videos.map((video) => (
          <VideoCard key={video.src} video={video} />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ video }: { video: VideoItem }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [paused, setPaused] = useState(false);
  const displayName = useMemo(() => getVideoName(video.src), [video.src]);

  const togglePlayback = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPaused(false);
    } else {
      el.pause();
      setPaused(true);
    }
  };

  return (
    <div className="border border-[#e7ddcf] bg-white p-3">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#8a7460]">{video.label}</div>
        <div className="text-[10px] font-mono text-[#9a8a7a] truncate">{displayName}</div>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        className="aspect-video w-full border border-dashed border-[#ccb9a6] bg-[#0b0b0b] overflow-hidden text-left"
        title={paused ? "Tap to play" : "Tap to pause"}
      >
        <video
          ref={ref}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-contain"
        >
          <source src={video.src} type="video/mp4" />
          <source src={video.src} type="video/quicktime" />
          <source src={video.src.replace(".mov", ".mp4")} type="video/mp4" />
        </video>
      </button>

      <p className="mt-2 text-[12px] text-[#5d5145] leading-relaxed">{video.caption}</p>
    </div>
  );
}
