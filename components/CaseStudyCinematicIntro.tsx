"use client";

import { useLayoutEffect, useRef, useState, type ReactNode, type TransitionEvent } from "react";
import { useReducedMotion } from "framer-motion";

type CinematicConfig = { src: string; poster?: string };

/** Overlay opacity transition — shorter = snappier handoff to the page. */
const FADE_MS = 450;
/** Start fading this many seconds before the file ends (feels like an earlier exit). */
const EARLY_FADE_BEFORE_END_S = 0.5;

type Phase = "playing" | "fading" | "ready";

/**
 * Fullscreen intro video, then a smooth fade-out; then the case study content fades in.
 * Muted autoplay for policy. Skips to fade when prefers-reduced-motion or "Skip intro".
 */
export default function CaseStudyCinematicIntro({
  config,
  children,
}: {
  config: CinematicConfig;
  children: ReactNode;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const doneRef = useRef(false);
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>(reduce ? "ready" : "playing");
  const hideOverlay = reduce || phase === "ready";

  useLayoutEffect(() => {
    if (phase === "ready" && !reduce) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
        const el = document.getElementById("case-study-article");
        if (el) el.focus({ preventScroll: true });
      });
    }
  }, [phase, reduce]);

  /** No intro on small viewports: same clip is heavy; reading works better full-bleed. */
  useLayoutEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 767px)").matches) {
      doneRef.current = true;
      setPhase("ready");
    }
  }, [reduce]);

  useLayoutEffect(() => {
    const locked = phase === "playing" || phase === "fading";
    if (locked) {
      const prev = document.documentElement.style.overflow;
      const prevBody = document.body.style.overflow;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      return () => {
        document.documentElement.style.overflow = prev;
        document.body.style.overflow = prevBody;
      };
    }
    return undefined;
  }, [phase]);

  const goFade = (opts?: { pause?: boolean }) => {
    if (phase !== "playing") return;
    if (opts?.pause !== false) {
      videoRef.current?.pause();
    }
    setPhase("fading");
  };

  const skip = () => {
    videoRef.current?.pause();
    goFade({ pause: false });
  };

  const onVideoEnded = () => {
    if (phase === "fading" || phase === "ready") return;
    goFade({ pause: false });
  };

  const onTimeUpdate = () => {
    if (phase !== "playing") return;
    const v = videoRef.current;
    if (!v) return;
    const dur = v.duration;
    if (!Number.isFinite(dur) || dur <= 0) return;
    if (v.currentTime > 0.15 && dur - v.currentTime <= EARLY_FADE_BEFORE_END_S) {
      goFade({ pause: false });
    }
  };

  const finishIntro = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setPhase("ready");
  };

  const onOverlayTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "opacity" || phase !== "fading") return;
    finishIntro();
  };

  useLayoutEffect(() => {
    if (phase !== "fading") return;
    const t = window.setTimeout(() => finishIntro(), FADE_MS + 100);
    return () => clearTimeout(t);
  }, [phase]);

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <div className="contents" suppressHydrationWarning>
      {!hideOverlay ? (
        <div
          className="fixed inset-0 z-[500] flex flex-col items-center justify-center bg-[#08090b] transition-opacity ease-out"
          style={{
            transitionDuration: `${FADE_MS}ms`,
            opacity: phase === "fading" ? 0 : 1,
            pointerEvents: phase === "fading" ? "none" : "auto",
          }}
          onTransitionEnd={onOverlayTransitionEnd}
        >
          <div className="flex h-[100dvh] min-h-[100dvh] w-full items-center justify-center">
            <video
              ref={videoRef}
              src={config.src}
              poster={config.poster}
              className="h-full w-full min-h-[100dvh] object-cover"
              autoPlay
              playsInline
              muted
              onTimeUpdate={onTimeUpdate}
              onEnded={onVideoEnded}
            />
          </div>
          {phase === "playing" ? (
            <button
              type="button"
              onClick={skip}
              className="absolute bottom-6 left-1/2 z-[520] -translate-x-1/2 rounded-none border-2 border-[#334155] bg-[#0c1014] px-5 py-2.5 text-[11px] font-mono font-semibold uppercase tracking-[0.16em] text-[#e2e8f0] shadow-[0_0_0_1px_rgba(0,0,0,0.4)] transition-colors hover:border-[#FF7410] hover:text-[#FF7410] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7410]/50"
            >
              Skip intro
            </button>
          ) : null}
        </div>
      ) : null}

      <div
        className={
          (phase === "ready"
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0") +
          " transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0,1)] will-change-transform"
        }
        aria-hidden={phase !== "ready"}
      >
        {children}
      </div>
    </div>
  );
}
