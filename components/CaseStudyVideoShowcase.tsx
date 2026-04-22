"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

type VideoItem = {
  label: string;
  caption: string;
  src: string;
};

function getVideoName(src: string) {
  const parts = src.split("/");
  const last = parts[parts.length - 1] ?? src;
  try {
    return decodeURIComponent(last);
  } catch {
    return last;
  }
}

export default function CaseStudyVideoShowcase({
  title,
  reason,
  videos,
  showTopRule = true,
  className = "",
}: {
  title?: string;
  reason?: string;
  videos: VideoItem[];
  /** Full-width “walkthrough” block with top border; set false when nested under a parent heading (e.g. CTA). */
  showTopRule?: boolean;
  className?: string;
}) {
  /** `videoWidth / videoHeight` per src, as metadata loads. */
  const [ratioBySrc, setRatioBySrc] = useState<Record<string, number>>({});

  const reportRatio = useCallback((src: string, r: number) => {
    if (!(r > 0)) return;
    setRatioBySrc((prev) => (prev[src] === r ? prev : { ...prev, [src]: r }));
  }, []);

  /**
   * One aspect ratio (W/H) for every preview in this row/section.
   * For fixed width, clip height = W/r, so the tallest clip needed is W / min(rᵢ).
   * Thus the shared box uses aspect ratio min(r₁, r₂, …) — same height, no cropping; a blurred under-layer fills the letterbox.
   */
  const unifiedRatio = useMemo(() => {
    const ratios = videos
      .map((v) => ratioBySrc[v.src])
      .filter((n): n is number => n != null && n > 0);
    if (ratios.length === 0) return null;
    return Math.min(...ratios);
  }, [videos, ratioBySrc]);

  return (
    <section
      className={
        showTopRule
          ? `mt-12 border-t border-[#1e293b] pt-8 ${className}`.trim()
          : `mt-0 border-0 p-0 ${className}`.trim()
      }
    >
      {title ? (
        <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#FF7410]">{title}</h2>
      ) : null}
      {reason ? <p className="mt-3 text-[15px] text-[#cbd5e1] leading-relaxed">{reason}</p> : null}

      <div className="mt-5 grid w-full min-w-0 max-w-full items-stretch gap-3 md:grid-cols-2">
        {videos.map((video) => (
          <VideoCard
            key={video.src}
            video={video}
            unifiedRatio={unifiedRatio}
            onReportRatio={reportRatio}
          />
        ))}
      </div>
    </section>
  );
}

function videoSources(src: string) {
  return (
    <>
      <source src={src} type="video/mp4" />
      <source src={src} type="video/quicktime" />
      <source src={src.replace(".mov", ".mp4")} type="video/mp4" />
    </>
  );
}

function VideoCard({
  video,
  unifiedRatio,
  onReportRatio,
}: {
  video: VideoItem;
  unifiedRatio: number | null;
  onReportRatio: (src: string, r: number) => void;
}) {
  const refMain = useRef<HTMLVideoElement | null>(null);
  const refFill = useRef<HTMLVideoElement | null>(null);
  const lastSync = useRef(0);
  const [paused, setPaused] = useState(false);
  const displayName = useMemo(() => getVideoName(video.src), [video.src]);

  const onLoadedMetadata = (el: HTMLVideoElement) => {
    const w = el.videoWidth;
    const h = el.videoHeight;
    if (w > 0 && h > 0) onReportRatio(video.src, w / h);
  };

  useEffect(() => {
    const m = refMain.current;
    const f = refFill.current;
    if (!m || !f) return;
    const sync = () => {
      const now = performance.now();
      if (now - lastSync.current < 80) return;
      lastSync.current = now;
      try {
        f.currentTime = m.currentTime;
      } catch {
        /* seek edge cases on init */
      }
    };
    const onPlay = () => {
      sync();
      void f.play().catch(() => {});
    };
    const onPause = () => f.pause();
    const onSeeked = () => {
      f.currentTime = m.currentTime;
    };
    m.addEventListener("timeupdate", sync);
    m.addEventListener("play", onPlay);
    m.addEventListener("pause", onPause);
    m.addEventListener("seeked", onSeeked);
    return () => {
      m.removeEventListener("timeupdate", sync);
      m.removeEventListener("play", onPlay);
      m.removeEventListener("pause", onPause);
      m.removeEventListener("seeked", onSeeked);
    };
  }, [video.src]);

  const togglePlayback = () => {
    const el = refMain.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPaused(false);
    } else {
      el.pause();
      setPaused(true);
    }
  };

  const aspectStyle: CSSProperties =
    unifiedRatio != null
      ? { aspectRatio: unifiedRatio }
      : { aspectRatio: "16/9" };

  return (
    <div className="min-w-0 border border-[#1e293b] bg-[#0c1014] p-3">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">{video.label}</div>
        <div className="text-[10px] font-mono text-[#64748b] truncate">{displayName}</div>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        style={aspectStyle}
        className="group relative w-full min-w-0 max-w-full border border-dashed border-[#475569] bg-[#111] overflow-hidden text-left"
        title={paused ? "Tap to play" : "Tap to pause"}
      >
        <video
          ref={refFill}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center scale-[1.12] blur-2xl opacity-75"
          aria-hidden
          tabIndex={-1}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
        >
          {videoSources(video.src)}
        </video>
        <video
          ref={refMain}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="relative z-[1] block h-full w-full object-contain object-center [background:transparent]"
          onLoadedMetadata={(e) => onLoadedMetadata(e.currentTarget)}
        >
          {videoSources(video.src)}
        </video>
      </button>

      <p className="mt-2 text-[12px] text-[#94a3b8] leading-relaxed">{video.caption}</p>
    </div>
  );
}
