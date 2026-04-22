"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";
import type { CaseStudy } from "@/lib/caseStudies";

type Story = NonNullable<NonNullable<CaseStudy["productDeepDive"]>["customerSchedulerStory"]>;
type Chapter = Story["chapters"][number];

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
      className={`rounded-sm border border-[#e0d4c4] bg-gradient-to-b from-[#fdfaf5] to-[#f7f0e6] px-4 py-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] sm:px-5 sm:py-5 ${fillHeight ? "h-full min-h-0 flex flex-col" : ""} ${className}`.trim()}
    >
      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a87847]">{eyebrow}</p>
      {intro ? <p className="mt-2.5 max-w-[72ch] text-[14px] leading-relaxed text-[#4a4036]">{intro}</p> : null}
      <ul className="mt-4 grid list-none gap-3 sm:grid-cols-3" role="list">
        {metrics.map((m) => (
          <li
            key={m.value + m.label}
            className="rounded-sm border border-[#e7ddcf] bg-white/90 p-3.5 shadow-[0_1px_0_0_rgba(27,20,10,0.04)]"
          >
            <p className="font-title text-[1.65rem] font-black tabular-nums leading-none tracking-tight text-[#c96010] sm:text-[1.75rem]">
              {m.value}
            </p>
            <p className="mt-2 text-[12px] leading-snug text-[#5d5145]">{m.label}</p>
          </li>
        ))}
      </ul>
      {footnote ? <p className="mt-4 border-t border-[#e7ddcf] pt-3 text-[10px] leading-relaxed text-[#8a7d6f]">{footnote}</p> : null}
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
  /** Rendered after the video area, before the caption (e.g. business impact under desktop CS-1). */
  belowVideo,
  /**
   * CS-1 pair (lg): stretch with mobile column; belowVideo grows to fill, matching mobile height.
   */
  stackStretch = false,
  /**
   * CS-1 mobile column (lg): card fills the row; spacer below fixed-height video + caption at bottom.
   */
  pairMobileStretch = false,
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
  belowVideo?: ReactNode;
  stackStretch?: boolean;
  pairMobileStretch?: boolean;
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
          ? "relative h-full min-h-0 w-full min-w-0 max-w-full max-h-full flex-1 overflow-hidden rounded-sm border border-dashed border-[#ccb9a6] bg-[#0c0c0c] text-left"
          : "relative w-full min-w-0 max-w-full overflow-hidden rounded-sm border border-dashed border-[#ccb9a6] bg-[#0c0c0c] text-left"
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
    "min-w-0 border border-[#e7ddcf] bg-white p-3 shadow-sm",
    sideBySideEqual || stackStretch
      ? "flex h-full min-h-0 w-full min-w-0 flex-col"
      : pairMobileStretch
        ? "flex h-full min-h-0 w-full min-w-0 flex-col"
        : heightMode === "fill"
          ? "flex h-full min-h-0 w-full min-w-0 flex-1 flex-col"
          : "",
  ]
    .filter(Boolean)
    .join(" ");

  const headerBlock = (
    <div className="mb-2 flex shrink-0 items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#8a7460]">{label}</span>
      <span className="text-[10px] font-mono text-[#9a8a7a] truncate max-w-[55%]">{displayName}</span>
    </div>
  );

  const captionBlock = <p className="mt-2.5 shrink-0 text-[12px] leading-relaxed text-[#5d5145]">{caption}</p>;

  const fillVideoBlock = (
    <div
      className={
        maxFrameHeight != null && maxFrameHeight > 0
          ? "flex min-h-0 min-w-0 flex-1 flex-col"
          : "flex min-h-[200px] min-w-0 flex-1 flex-col"
      }
      style={
        maxFrameHeight != null && maxFrameHeight > 0 ? { height: maxFrameHeight, minHeight: 0 } : undefined
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

  if (stackStretch) {
    return (
      <div className={shellClass}>
        {headerBlock}
        <div className="w-full min-w-0 shrink-0">{videoShell}</div>
        {belowVideo ? (
          <div className="mt-3 flex min-h-0 min-w-0 flex-1 flex-col">
            {belowVideo}
          </div>
        ) : null}
        {captionBlock}
      </div>
    );
  }

  if (heightMode === "fill" && pairMobileStretch) {
    return (
      <div className={shellClass}>
        {headerBlock}
        <div
          className={
            maxFrameHeight != null && maxFrameHeight > 0
              ? "flex min-h-0 w-full shrink-0 flex-col"
              : "flex min-h-[200px] w-full shrink-0 flex-col"
          }
          style={
            maxFrameHeight != null && maxFrameHeight > 0 ? { height: maxFrameHeight, minHeight: 0 } : undefined
          }
        >
          <div className="flex h-full min-h-0 w-full min-w-0 flex-col">
            {videoShell}
          </div>
        </div>
        <div className="min-h-0 min-w-0 flex-1" aria-hidden />
        {captionBlock}
      </div>
    );
  }

  return (
    <div className={shellClass}>
      {headerBlock}
      {heightMode === "fill" ? fillVideoBlock : videoShell}
      {belowVideo}
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
        <p className="text-center text-[14px] leading-relaxed text-[#4d4339] sm:text-left">
          <span className="font-medium text-[#c96010]">One pipeline.</span> {bridge}
        </p>
      ) : null}
      <div className={bridge ? "mt-4 space-y-6 lg:hidden" : "space-y-6 lg:hidden"}>
        <div className="min-w-0">
          <h4 className="font-title text-base font-bold text-[#1f1a15] sm:text-lg">{left.title}</h4>
          <p className="mt-2 text-[14px] leading-relaxed text-[#43392f]">{left.body}</p>
          <div className="mt-4 flex min-h-[280px] min-w-0 flex-col">{walkL}</div>
        </div>
        <div className="min-w-0">
          <h4 className="font-title text-base font-bold text-[#1f1a15] sm:text-lg">{right.title}</h4>
          <p className="mt-2 text-[14px] leading-relaxed text-[#43392f]">{right.body}</p>
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
          <h4 className="font-title text-base font-bold text-[#1f1a15] sm:text-lg">{left.title}</h4>
          <p className="mt-2 text-[14px] leading-relaxed text-[#43392f]">{left.body}</p>
        </div>
        <div className="min-w-0 self-start">
          <h4 className="font-title text-base font-bold text-[#1f1a15] sm:text-lg">{right.title}</h4>
          <p className="mt-2 text-[14px] leading-relaxed text-[#43392f]">{right.body}</p>
        </div>
        <div className="flex min-h-0 min-w-0 flex-col">{walkL}</div>
        <div className="flex min-h-0 min-w-0 flex-col">{walkR}</div>
      </div>
    </div>
  );
}

/**
 * Mobile video box height is capped to the **desktop** dashed player height (measured) so
 * it lines up with the left frame, not a taller stretched card.
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
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setIsLg(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    const el = desktopVideoBtnRef.current;
    if (!el) return;
    const set = () => setDesktopFrameH(el.getBoundingClientRect().height);
    set();
    const ro = new ResizeObserver(() => set());
    ro.observe(el);
    return () => ro.disconnect();
  }, [desktop.src]);

  const mobileFrameH =
    isLg && desktopFrameH != null && desktopFrameH > 0 ? desktopFrameH : null;

  return (
    <div className="mt-5">
      <p className="text-center text-[14px] leading-relaxed text-[#4d4339] sm:text-left">
        <span className="font-medium text-[#c96010]">One journey.</span> {bridge}
      </p>
      <div className="mt-4 grid min-w-0 grid-cols-1 items-stretch gap-x-4 gap-y-2 lg:grid-cols-[1.2fr_0.62fr] lg:items-stretch lg:gap-y-0">
        <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8a7460] lg:col-start-1 lg:row-start-1">Desktop</p>
        <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8a7460] lg:col-start-2 lg:row-start-1">Mobile</p>
        <div className="flex h-full min-h-0 min-w-0 flex-col lg:col-start-1 lg:row-start-2">
          <InlineWalkthroughVideo
            noTopMargin
            stackStretch={!!businessImpact}
            label={desktop.label}
            caption={desktop.caption}
            videoSrc={desktop.src}
            videoButtonRef={desktopVideoBtnRef}
            belowVideo={
              businessImpact ? (
                <BusinessImpactStrip
                  className="mt-0 min-h-0 flex-1"
                  fillHeight
                  {...businessImpact}
                />
              ) : null
            }
          />
        </div>
        <div className="flex h-full min-h-0 min-w-0 flex-col lg:col-start-2 lg:row-start-2">
          <InlineWalkthroughVideo
            noTopMargin
            heightMode="fill"
            pairMobileStretch={isLg}
            label={mobile.label}
            caption={mobile.caption}
            videoSrc={mobile.src}
            maxFrameHeight={mobileFrameH}
          />
        </div>
      </div>
    </div>
  );
}

export default function CustomerSchedulerStory({ story }: { story: Story }) {
  return (
    <section className="mt-12 w-full min-w-0 border-t border-[#e7ddcf] pt-10">
      <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#c96010]">{story.eyebrow}</p>
      <h2 className="mt-2 font-title text-2xl sm:text-3xl font-black tracking-tight text-[#1a1510]">{story.title}</h2>
      <p className="mt-4 max-w-[75ch] text-[16px] sm:text-[17px] leading-[1.75] text-[#4a4036]">{story.intro}</p>

      <div className="mt-10 space-y-14 sm:space-y-16">
        {story.chapters.map((ch, i) => (
          <article
            key={ch.badge + ch.title}
            className="relative scroll-mt-8 rounded-sm border border-[#ece4d8] bg-gradient-to-b from-white to-[#fbf7f0] p-4 sm:p-6 shadow-[0_1px_0_0_rgba(27,20,10,0.04)]"
          >
            <div
              className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#c96010] via-[#e8954a] to-[#c96010] opacity-90 sm:left-0 sm:rounded-l"
              aria-hidden
            />
            <div className="pl-3 sm:pl-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a87847]">
                {ch.badge}
                <span className="ml-2 text-[#b9a38d]">·</span>
                <span className="ml-2 text-[#8a7460]">
                  Part {i + 1} of {story.chapters.length}
                </span>
              </p>
              <h3 className="mt-2 font-title text-lg sm:text-xl font-bold text-[#1f1a15]">{ch.title}</h3>
              <p className="mt-3 text-[15px] sm:text-[16px] leading-[1.75] text-[#43392f]">{ch.body}</p>
              {ch.footnote ? (
                <p className="mt-3 border-l-2 border-[#e0cdb8] pl-3 text-[13px] italic leading-relaxed text-[#6b5d4e]">
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
