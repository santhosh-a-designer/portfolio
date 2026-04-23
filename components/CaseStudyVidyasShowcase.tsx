"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { CaseStudyScrollReveal } from "@/components/CaseStudyScrollReveal";
import type { CaseStudy } from "@/lib/caseStudies";

const SECTION_H2 = "text-[12px] font-mono uppercase tracking-[0.2em] text-[#FF7410]";

type VidyaAfterCinematicData = NonNullable<
  NonNullable<NonNullable<CaseStudy["artifacts"]>["vidyaShowcase"]>["afterCinematic"]
>;

export function VidyasAfterCinematicBlock({ data }: { data: VidyaAfterCinematicData }) {
  return (
    <section
      className="mt-10 sm:mt-12 w-full min-w-0 border-t border-[#1e293b] pt-8"
      aria-label={data.title}
    >
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#94a3b8]">{data.eyebrow}</p>
      <h2 className="mt-2 font-title text-2xl font-black text-[#f8fafc] sm:text-3xl">{data.title}</h2>
      <p className="mt-3 w-full text-pretty text-[15px] leading-relaxed text-[#cbd5e1] sm:text-justify">
        {data.lead}
      </p>
      <h3 className="mt-6 text-[10px] font-mono uppercase tracking-[0.18em] text-[#FF7410]">{data.dashboardTitle}</h3>
      <p className="mt-2 w-full text-pretty text-[15px] leading-relaxed text-[#b4c0ce] sm:text-justify">
        {data.dashboard}
      </p>
      <h3 className="mt-6 text-[10px] font-mono uppercase tracking-[0.18em] text-[#FF7410]">{data.driverTitle}</h3>
      <p className="mt-2 w-full text-pretty text-[15px] leading-relaxed text-[#b4c0ce] sm:text-justify">
        {data.driver}
      </p>
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

type BotData = NonNullable<NonNullable<CaseStudy["artifacts"]>["vidyaShowcase"]>["whatsappBot"];
type PwaData = NonNullable<NonNullable<CaseStudy["artifacts"]>["vidyaShowcase"]>["pwa"];

export function PhoneWalkthroughCard({
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
        /* noop */
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

/** Desktop 16:9 (or source ratio): looping strip, no controls, no play/pause interaction. */
export function DesktopPwaShowcase({
  label,
  caption,
  src,
  textAlign = "left",
}: {
  label: string;
  caption: string;
  src: string;
  /** `center` for centered label + caption (e.g. Ezra dashboard). */
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
        /* noop */
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

function WhatsappRow({ data }: { data: BotData }) {
  return (
    <section className="mt-12 w-full min-w-0 border-t border-[#1e293b] pt-8" aria-label={data.title}>
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#94a3b8]">{data.eyebrow}</p>
      <h2 className="mt-2 font-title text-2xl font-black text-[#f8fafc] sm:text-3xl">{data.title}</h2>
      <p className="mt-3 w-full text-pretty text-[15px] leading-relaxed text-[#cbd5e1] sm:text-justify">
        {data.intro}
      </p>
      <p className="mt-2 w-full text-pretty text-[13px] leading-relaxed text-[#94a3b8] sm:text-justify">
        {data.contextAfterUserFlow}
      </p>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
        {data.options.map((o) => (
          <PhoneWalkthroughCard key={o.label} label={o.label} caption={o.caption} src={o.videoSrc} />
        ))}
      </div>
    </section>
  );
}

function PwaBlock({ pwa }: { pwa: PwaData }) {
  return (
    <section className="mt-12 w-full min-w-0 border-t border-[#1e293b] pt-8">
      <h2 className={SECTION_H2}>PWA — desktop site</h2>
      <p className="mt-3 w-full text-pretty text-[15px] leading-relaxed text-[#cbd5e1] sm:text-justify">
        {pwa.intro}
      </p>
      {pwa.howItWorks ? (
        <p className="mt-3 w-full text-pretty text-[15px] leading-relaxed text-[#b4c0ce] sm:text-justify">
          {pwa.howItWorks}
        </p>
      ) : null}
      {pwa.bullets?.length ? (
        <ul className="mt-4 w-full list-disc space-y-1.5 pl-4 text-[14px] text-[#94a3b8]">
          {pwa.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      <div className="mt-6 w-full min-w-0">
        <DesktopPwaShowcase
          label={pwa.desktop.label}
          caption={pwa.desktop.caption}
          src={pwa.desktop.videoSrc}
        />
      </div>
    </section>
  );
}

export function VidyasShowcaseSection({ study }: { study: CaseStudy }) {
  const v = study.artifacts?.vidyaShowcase;
  if (!v || study.slug !== "vidyas-kitchen-pwa") return null;
  return (
    <>
      <CaseStudyScrollReveal>
        <WhatsappRow data={v.whatsappBot} />
      </CaseStudyScrollReveal>
      <CaseStudyScrollReveal delay={0.08}>
        <PwaBlock pwa={v.pwa} />
      </CaseStudyScrollReveal>
    </>
  );
}
