"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type Ref,
} from "react";
import type { CaseStudy } from "@/lib/caseStudies";

type Story = NonNullable<NonNullable<CaseStudy["productDeepDive"]>["customerSchedulerStory"]>;
type Chapter = Story["chapters"][number];

function BusinessImpactMetricsList({
  metrics,
  listClassName,
  itemPad = "p-3.5",
  valueClassName = "font-title text-[1.65rem] font-black tabular-nums leading-none tracking-tight text-[#FF7410] sm:text-[1.75rem]",
  labelClassName = "mt-2 text-[12px] leading-snug text-[#94a3b8]",
}: {
  metrics: NonNullable<Chapter["businessImpact"]>["metrics"];
  listClassName?: string;
  itemPad?: string;
  valueClassName?: string;
  labelClassName?: string;
}) {
  return (
    <ul className={listClassName ?? "mt-4 grid list-none gap-3 sm:grid-cols-3"} role="list">
      {metrics.map((m) => (
        <li
          key={m.value + m.label}
          className={`rounded-none border border-[#1e293b] bg-[#0c1014]/95 shadow-[0_1px_0_0_rgba(27,20,10,0.04)] ${itemPad}`}
        >
          <p className={valueClassName}>{m.value}</p>
          <p className={labelClassName}>{m.label}</p>
        </li>
      ))}
    </ul>
  );
}

function BusinessImpactStrip({
  eyebrow,
  intro,
  metrics,
  footnote,
  className = "mt-5",
  fillHeight = false,
}: NonNullable<Chapter["businessImpact"]> & { className?: string; fillHeight?: boolean }) {
  return (
    <div
      className={`rounded-none border border-[#334155] bg-gradient-to-b from-[#11161c] to-[#0a0d12] px-4 py-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] sm:px-5 sm:py-5 ${fillHeight ? "flex h-full min-h-0 w-full min-w-0 flex-1 flex-col" : ""} ${className}`.trim()}
    >
      <p className="shrink-0 text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF7410]">{eyebrow}</p>
      {intro ? (
        <p className="mt-2.5 max-w-[72ch] shrink-0 text-[14px] leading-relaxed text-[#cbd5e1]">{intro}</p>
      ) : null}
      <BusinessImpactMetricsList
        metrics={metrics}
        listClassName={`mt-4 grid list-none gap-3 sm:grid-cols-3 ${fillHeight ? "min-h-0 flex-1 content-start" : ""}`.trim()}
      />
      {footnote ? (
        <p className="mt-4 shrink-0 border-t border-[#1e293b] pt-3 text-[10px] leading-relaxed text-[#64748b]">{footnote}</p>
      ) : null}
    </div>
  );
}

function sources(src: string) {
  return (
    <>
      <source src={src} type="video/mp4" />
      <source src={src} type="video/quicktime" />
      <source src={src.replace(".mov", ".mp4")} type="video/mp4" />
    </>
  );
}

function InlineWalkthroughVideo({
  label,
  caption,
  videoSrc,
  noTopMargin = false,
  heightMode = "intrinsic" as "intrinsic" | "fill",
  videoButtonRef,
  /** Fill mode: at lg+ in the pair, match this pixel height to the desktop dashed player. */
  maxFrameHeight,
  /**
   * CS-2/CS-3 side-by-side row: card fills the grid cell; video flexes to available height.
   */
  sideBySideEqual = false,
}: {
  label: string;
  caption: string;
  videoSrc: string;
  noTopMargin?: boolean;
  heightMode?: "intrinsic" | "fill";
  videoButtonRef?: Ref<HTMLButtonElement | null>;
  maxFrameHeight?: number | null;
  sideBySideEqual?: boolean;
}) {
  const refMain = useRef<HTMLVideoElement | null>(null);
  const refFill = useRef<HTMLVideoElement | null>(null);
  const lastSync = useRef(0);
  const [ratio, setRatio] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const displayName = useMemo(() => videoSrc.split("/").pop() ?? videoSrc, [videoSrc]);

  const onMeta = (el: HTMLVideoElement) => {
    const w = el.videoWidth;
    const h = el.videoHeight;
    if (w > 0 && h > 0) setRatio(w / h);
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
        /* no-op */
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
  }, [videoSrc]);

  const fillLike = heightMode === "fill" || sideBySideEqual;
  const aspectStyle: CSSProperties | undefined = fillLike
    ? undefined
    : ratio != null
      ? { aspectRatio: ratio }
      : { aspectRatio: "16/9" };

  const toggle = useCallback(() => {
    const el = refMain.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPaused(false);
    } else {
      el.pause();
      setPaused(true);
    }
  }, []);

  const videoShell = (
    <button
      ref={videoButtonRef}
      type="button"
      onClick={toggle}
      style={fillLike ? undefined : aspectStyle}
      className={
        fillLike
          ? "relative h-full min-h-0 w-full min-w-0 max-w-full max-h-full flex-1 overflow-hidden rounded-none border border-dashed border-[#475569] bg-[#0c0c0c] text-left"
          : "relative w-full min-w-0 max-w-full overflow-hidden rounded-none border border-dashed border-[#475569] bg-[#0c0c0c] text-left"
      }
      title={paused ? "Tap to play" : "Tap to pause"}
    >
      <video
        ref={refFill}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center scale-[1.1] blur-2xl opacity-75"
        aria-hidden
        tabIndex={-1}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      >
        {sources(videoSrc)}
      </video>
      <video
        ref={refMain}
        className="relative z-[1] block h-full w-full min-h-0 object-contain object-center"
        onLoadedMetadata={(e) => onMeta(e.currentTarget)}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
      >
        {sources(videoSrc)}
      </video>
    </button>
  );

  const shellClass = [
    noTopMargin ? "mt-0" : "mt-5",
    "min-w-0 border border-[#1e293b] bg-[#0c1014] p-3 shadow-sm",
    sideBySideEqual
      ? "flex h-full min-h-0 w-full min-w-0 flex-col"
      : heightMode === "fill"
        ? "flex min-h-0 w-full min-w-0 flex-col"
        : "",
  ]
    .filter(Boolean)
    .join(" ");

  const headerBlock = (
    <div className="mb-2 flex shrink-0 items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748b]">{label}</span>
      <span className="text-[10px] font-mono text-[#64748b] truncate max-w-[55%]">{displayName}</span>
    </div>
  );

  const captionBlock = <p className="mt-2.5 shrink-0 text-[12px] leading-relaxed text-[#94a3b8]">{caption}</p>;

  const fillVideoBlock = (
    <div
      className={
        maxFrameHeight != null && maxFrameHeight > 0
          ? "flex min-h-0 min-w-0 flex-shrink-0 flex-col overflow-hidden"
          : "flex min-h-0 min-w-0 flex-shrink-0 flex-col overflow-hidden min-h-[180px] max-h-[min(80vh,640px)]"
      }
      style={
        maxFrameHeight != null && maxFrameHeight > 0
          ? { height: maxFrameHeight, maxHeight: maxFrameHeight, minHeight: 0 }
          : undefined
      }
    >
      {videoShell}
    </div>
  );

  const sideBySideVideoBlock = (
    <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
      {videoShell}
    </div>
  );

  if (sideBySideEqual) {
    return (
      <div className={shellClass}>
        {headerBlock}
        {sideBySideVideoBlock}
        {captionBlock}
      </div>
    );
  }

  return (
    <div className={shellClass}>
      {headerBlock}
      {heightMode === "fill" ? fillVideoBlock : videoShell}
      {captionBlock}
    </div>
  );
}

/**
 * Two walkthroughs (e.g. CS-2 and CS-3) with a short explainer for each column.
 */
function SideBySideWalkthroughs({
  bridge,
  left,
  right,
}: {
  bridge?: string;
  left: { title: string; body: string; label: string; caption: string; src: string };
  right: { title: string; body: string; label: string; caption: string; src: string };
}) {
  const walkL = (
    <InlineWalkthroughVideo
      noTopMargin
      heightMode="fill"
      sideBySideEqual
      label={left.label}
      caption={left.caption}
      videoSrc={left.src}
    />
  );
  const walkR = (
    <InlineWalkthroughVideo
      noTopMargin
      heightMode="fill"
      sideBySideEqual
      label={right.label}
      caption={right.caption}
      videoSrc={right.src}
    />
  );

  return (
    <div className="mt-5 min-w-0">
      {bridge ? (
        <p className="text-center text-[14px] leading-relaxed text-[#cbd5e1] sm:text-left">
          <span className="font-medium text-[#FF7410]">One pipeline.</span> {bridge}
        </p>
      ) : null}
      <div className={bridge ? "mt-4 space-y-6 lg:hidden" : "space-y-6 lg:hidden"}>
        <div className="min-w-0">
          <h4 className="font-title text-base font-bold text-[#f8fafc] sm:text-lg">{left.title}</h4>
          <p className="mt-2 text-[14px] leading-relaxed text-[#cbd5e1]">{left.body}</p>
          <div className="mt-4 flex min-h-[280px] min-w-0 flex-col">{walkL}</div>
        </div>
        <div className="min-w-0">
          <h4 className="font-title text-base font-bold text-[#f8fafc] sm:text-lg">{right.title}</h4>
          <p className="mt-2 text-[14px] leading-relaxed text-[#cbd5e1]">{right.body}</p>
          <div className="mt-4 flex min-h-[280px] min-w-0 flex-col">{walkR}</div>
        </div>
      </div>
      <div
        className={
          bridge
            ? "mt-4 hidden min-h-0 min-w-0 grid-cols-2 grid-rows-[auto_minmax(260px,1fr)] gap-x-5 gap-y-3 lg:grid"
            : "hidden min-h-0 min-w-0 grid-cols-2 grid-rows-[auto_minmax(260px,1fr)] gap-x-5 gap-y-3 lg:grid"
        }
      >
        <div className="min-w-0 self-start">
          <h4 className="font-title text-base font-bold text-[#f8fafc] sm:text-lg">{left.title}</h4>
          <p className="mt-2 text-[14px] leading-relaxed text-[#cbd5e1]">{left.body}</p>
        </div>
        <div className="min-w-0 self-start">
          <h4 className="font-title text-base font-bold text-[#f8fafc] sm:text-lg">{right.title}</h4>
          <p className="mt-2 text-[14px] leading-relaxed text-[#cbd5e1]">{right.body}</p>
        </div>
        <div className="flex min-h-0 min-w-0 flex-col">{walkL}</div>
        <div className="flex min-h-0 min-w-0 flex-col">{walkR}</div>
      </div>
    </div>
  );
}

/**
 * Desktop column is intrinsic; we measure that player’s height and set the mobile column’s
 * fill height to 97% of that at lg+.
 */
function ResponsiveDesktopMobilePair({
  bridge,
  desktop,
  mobile,
  businessImpact,
}: {
  bridge: string;
  desktop: { label: string; caption: string; src: string };
  mobile: { label: string; caption: string; src: string };
  businessImpact?: Chapter["businessImpact"];
}) {
  const desktopVideoBtnRef = useRef<HTMLButtonElement | null>(null);
  const [desktopFrameH, setDesktopFrameH] = useState<number | null>(null);
  const [isLg, setIsLg] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches,
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsLg(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    if (!isLg) {
      setDesktopFrameH(null);
      return;
    }
    const el = desktopVideoBtnRef.current;
    if (!el) return;
    const set = () => {
      const h = el.getBoundingClientRect().height;
      if (h > 0) setDesktopFrameH(h);
    };
    set();
    const ro = new ResizeObserver(() => set());
    ro.observe(el);
    return () => ro.disconnect();
  }, [desktop.src, isLg]);

  /** Mobile fill height at lg+ — 97% of the measured desktop frame. */
  const mobileFrameH =
    isLg && desktopFrameH != null && desktopFrameH > 0
      ? Math.round(desktopFrameH * 0.97)
      : null;

  return (
    <div className="mt-5">
      <p className="text-center text-[14px] leading-relaxed text-[#cbd5e1] sm:text-left">
        <span className="font-medium text-[#FF7410]">One journey.</span> {bridge}
      </p>
      <div className="mt-4 grid min-h-0 min-w-0 grid-cols-1 items-stretch gap-x-4 gap-y-2 lg:grid-cols-[1.2fr_0.62fr] lg:items-stretch lg:gap-y-0">
        <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#64748b] lg:col-start-1 lg:row-start-1">Desktop</p>
        <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#64748b] lg:col-start-2 lg:row-start-1">Mobile</p>
        <div className="flex h-full min-h-0 w-full min-w-0 flex-col self-stretch lg:col-start-1 lg:row-start-2">
          <InlineWalkthroughVideo
            noTopMargin
            label={desktop.label}
            caption={desktop.caption}
            videoSrc={desktop.src}
            videoButtonRef={desktopVideoBtnRef}
          />
        </div>
        <div className="flex min-h-0 w-full min-w-0 flex-col self-stretch lg:col-start-2 lg:row-start-2 lg:self-start">
          <InlineWalkthroughVideo
            noTopMargin
            heightMode="fill"
            label={mobile.label}
            caption={mobile.caption}
            videoSrc={mobile.src}
            maxFrameHeight={mobileFrameH}
          />
        </div>
      </div>
      {businessImpact ? (
        <div className="mt-4 min-w-0 w-full sm:mt-5">
          <BusinessImpactStrip className="mt-0" {...businessImpact} />
        </div>
      ) : null}
    </div>
  );
}

export default function CustomerSchedulerStory({ story }: { story: Story }) {
  return (
    <section className="mt-12 w-full min-w-0 border-t border-[#1e293b] pt-10">
      <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#FF7410]">{story.eyebrow}</p>
      <h2 className="mt-2 font-title text-2xl sm:text-3xl font-black tracking-tight text-[#f8fafc]">{story.title}</h2>
      <p className="mt-4 max-w-[75ch] text-[16px] sm:text-[17px] leading-[1.75] text-[#cbd5e1]">{story.intro}</p>

      <div className="mt-10 space-y-14 sm:space-y-16">
        {story.chapters.map((ch, i) => (
          <article
            key={ch.badge + ch.title}
            className="relative scroll-mt-8 rounded-none border border-[#1e293b] bg-gradient-to-b from-[#121820] to-[#0c1014] p-4 sm:p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.35)]"
          >
            <div
              className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#FF7410] via-[#ff9a4d] to-[#FF7410] opacity-90 sm:left-0"
              aria-hidden
            />
            <div className="pl-3 sm:pl-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF7410]">
                {ch.badge}
                <span className="ml-2 text-[#64748b]">·</span>
                <span className="ml-2 text-[#64748b]">
                  Part {i + 1} of {story.chapters.length}
                </span>
              </p>
              <h3 className="mt-2 font-title text-lg sm:text-xl font-bold text-[#f8fafc]">{ch.title}</h3>
              <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.75] text-[#cbd5e1]">{ch.body}</p>
              {ch.footnote ? (
                <p className="mt-3 border-l-2 border-[#334155] pl-3 text-[13px] italic leading-relaxed text-[#94a3b8]">
                  {ch.footnote}
                </p>
              ) : null}

              {ch.media.kind === "single" ? (
                <>
                  {ch.businessImpact ? <BusinessImpactStrip {...ch.businessImpact} /> : null}
                  <InlineWalkthroughVideo label={ch.media.label} caption={ch.media.caption} videoSrc={ch.media.src} />
                </>
              ) : ch.media.kind === "responsive" ? (
                <ResponsiveDesktopMobilePair
                  bridge={ch.media.bridge}
                  desktop={ch.media.desktop}
                  mobile={ch.media.mobile}
                  businessImpact={ch.businessImpact}
                />
              ) : (
                <SideBySideWalkthroughs
                  bridge={ch.media.bridge}
                  left={ch.media.left}
                  right={ch.media.right}
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
