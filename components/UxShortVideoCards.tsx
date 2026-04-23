"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

function videoSources(src: string) {
  return (
    <>
      <source src={src} type="video/mp4" />
      <source src={src} type="video/quicktime" />
      <source src={src.replace(".mov", ".mp4")} type="video/mp4" />
    </>
  );
}

export function UxShortPhoneVideoCard({
  label,
  caption,
  src,
}: {
  label: string;
  caption: string;
  src: string;
}) {
  const refMain = useRef<HTMLVideoElement | null>(null);
  const refFill = useRef<HTMLVideoElement | null>(null);
  const lastSync = useRef(0);
  const [ratio, setRatio] = useState<number | null>(null);

  const onLoaded = (el: HTMLVideoElement) => {
    const w = el.videoWidth;
    const h = el.videoHeight;
    if (w > 0 && h > 0) setRatio(w / h);
  };

  const aspect: CSSProperties = ratio != null ? { aspectRatio: ratio } : { aspectRatio: "9/19.5" };

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
        // no-op for initial seek races
      }
    };
    const onPlay = () => {
      sync();
      void f.play().catch(() => {});
    };
    const onPause = () => f.pause();
    m.addEventListener("timeupdate", sync);
    m.addEventListener("play", onPlay);
    m.addEventListener("pause", onPause);
    m.addEventListener("seeked", () => {
      f.currentTime = m.currentTime;
    });
    return () => {
      m.removeEventListener("timeupdate", sync);
      m.removeEventListener("play", onPlay);
      m.removeEventListener("pause", onPause);
    };
  }, [src]);

  const name = (() => {
    const last = src.split("/").pop() ?? src;
    try {
      return decodeURIComponent(last);
    } catch {
      return last;
    }
  })();

  return (
    <div className="min-w-0 border border-[#1e293b] bg-[#0c1014] p-3">
      <div className="mb-2 flex items-center justify-between gap-1">
        <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">{label}</div>
        <div className="max-w-[48%] truncate text-[9px] font-mono text-[#64748b]">{name}</div>
      </div>
      <button
        type="button"
        className="group relative w-full min-w-0 max-w-full overflow-hidden border border-dashed border-[#475569] bg-[#111] text-left"
        style={aspect}
        onClick={() => {
          const v = refMain.current;
          if (!v) return;
          if (v.paused) void v.play();
          else v.pause();
        }}
      >
        <video
          ref={refFill}
          className="pointer-events-none absolute inset-0 h-full w-full scale-[1.1] object-cover object-top opacity-75 blur-2xl"
          aria-hidden
          muted
          autoPlay
          loop
          playsInline
        >
          {videoSources(src)}
        </video>
        <video
          ref={refMain}
          autoPlay
          muted
          loop
          playsInline
          className="relative z-[1] block h-full w-full object-contain object-top [background:transparent]"
          onLoadedMetadata={(e) => onLoaded(e.currentTarget)}
        >
          {videoSources(src)}
        </video>
      </button>
      <p className="mt-2 text-[12px] leading-relaxed text-[#94a3b8]">{caption}</p>
    </div>
  );
}

export function UxShortDesktopVideoCard({
  label,
  caption,
  src,
  textAlign = "left",
}: {
  label: string;
  caption: string;
  src: string;
  textAlign?: "left" | "center";
}) {
  const refMain = useRef<HTMLVideoElement | null>(null);
  const refFill = useRef<HTMLVideoElement | null>(null);
  const lastSync = useRef(0);
  const [ratio, setRatio] = useState<number | null>(null);

  const onLoaded = (el: HTMLVideoElement) => {
    const w = el.videoWidth;
    const h = el.videoHeight;
    if (w > 0 && h > 0) setRatio(w / h);
  };

  const aspect: CSSProperties = ratio != null ? { aspectRatio: ratio } : { aspectRatio: "16 / 9" };

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
        // no-op for initial seek races
      }
    };
    const onPlay = () => {
      sync();
      void f.play().catch(() => {});
    };
    const onPause = () => f.pause();
    m.addEventListener("timeupdate", sync);
    m.addEventListener("play", onPlay);
    m.addEventListener("pause", onPause);
    m.addEventListener("seeked", () => {
      f.currentTime = m.currentTime;
    });
    return () => {
      m.removeEventListener("timeupdate", sync);
      m.removeEventListener("play", onPlay);
      m.removeEventListener("pause", onPause);
    };
  }, [src]);

  const cap = textAlign === "center" ? " text-center" : "";
  return (
    <div className={`min-w-0 border border-[#1e293b] bg-[#0c1014] p-3 sm:p-4${cap}`}>
      <div className={`mb-2 text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]${cap}`}>{label}</div>
      <div
        className="relative w-full min-w-0 max-w-full overflow-hidden border border-dashed border-[#475569] bg-[#111] pointer-events-none select-none"
        style={aspect}
        role="presentation"
        aria-label={label}
      >
        <video
          ref={refFill}
          className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-center opacity-70 blur-2xl"
          aria-hidden
          muted
          autoPlay
          loop
          playsInline
        >
          {videoSources(src)}
        </video>
        <video
          ref={refMain}
          className="relative z-[1] block h-full w-full object-contain object-center [background:transparent]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedMetadata={(e) => onLoaded(e.currentTarget)}
        >
          {videoSources(src)}
        </video>
      </div>
      <p className={`mt-3 text-[12px] leading-relaxed text-[#94a3b8]${cap}`}>{caption}</p>
    </div>
  );
}
