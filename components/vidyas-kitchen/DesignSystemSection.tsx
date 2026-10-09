"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { FilePdf } from "@phosphor-icons/react";
import Image from "next/image";
import { contrastGrade } from "@/lib/contrast";
import type { DesignSystemPdfMeta } from "@/lib/designSystemPdfMeta";
import { designSystemHeroScreens } from "@/lib/vidyasDesignSystemScreens";
import { outfitVk } from "@/lib/fonts/outfitVk";
import {
  vidyasDesignSystem,
  type VidyasDesignSurface,
} from "@/lib/vidyasKitchenCaseStudyContent";
import DesignSystemHeroPanel from "./DesignSystemHeroPanel";
import HighlightText from "./HighlightText";

type Props = {
  pdfMeta: DesignSystemPdfMeta;
};

const TAB_IDS = vidyasDesignSystem.surfaces.map((s) => s.id);

function hexRelativeLuminance(hex: string): number {
  const raw = hex.replace("#", "");
  if (raw.length !== 6) return 1;
  const channel = (i: number) => {
    const v = parseInt(raw.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  const r = channel(0);
  const g = channel(2);
  const b = channel(4);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function swatchNeedsOutline(hex: string, onDarkPanel: boolean): boolean {
  const lum = hexRelativeLuminance(hex);
  if (lum < 0.12) return true;
  if (onDarkPanel && lum < 0.22) return true;
  return false;
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduce(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return reduce;
}

export default function DesignSystemSection({ pdfMeta }: Props) {
  const [surfaceId, setSurfaceId] = useState<VidyasDesignSurface["id"]>("customer");
  const [chipId, setChipId] = useState<string>(vidyasDesignSystem.surfaces[1].chips[0].id);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [contrastHint, setContrastHint] = useState<string | null>(null);
  const [displaySurfaceId, setDisplaySurfaceId] = useState(surfaceId);
  const [panelVisible, setPanelVisible] = useState(true);
  const [leftVisible, setLeftVisible] = useState(true);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabListRef = useRef<HTMLDivElement | null>(null);
  const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 });
  const reduceMotion = usePrefersReducedMotion();

  const surface = useMemo(
    () => vidyasDesignSystem.surfaces.find((s) => s.id === surfaceId) ?? vidyasDesignSystem.surfaces[0],
    [surfaceId],
  );

  const displaySurface = useMemo(
    () =>
      vidyasDesignSystem.surfaces.find((s) => s.id === displaySurfaceId) ??
      vidyasDesignSystem.surfaces[0],
    [displaySurfaceId],
  );

  useEffect(() => {
    for (const s of designSystemHeroScreens) {
      const img = new window.Image();
      img.src = s.src;
      void img.decode?.().catch(() => undefined);
    }
  }, []);

  useEffect(() => {
    const first = surface.chips[0]?.id;
    if (first) setChipId(first);
  }, [surface]);

  useEffect(() => {
    if (surfaceId === displaySurfaceId) return;
    const delay = reduceMotion ? 0 : 300;
    setPanelVisible(false);
    setLeftVisible(false);
    const t = window.setTimeout(() => {
      setDisplaySurfaceId(surfaceId);
      setPanelVisible(true);
      setLeftVisible(true);
    }, delay);
    return () => window.clearTimeout(t);
  }, [surfaceId, displaySurfaceId, reduceMotion]);

  const tabIndex = TAB_IDS.indexOf(surfaceId);

  useLayoutEffect(() => {
    const tab = tabRefs.current[tabIndex];
    const list = tabListRef.current;
    if (!tab || !list) return;
    const listRect = list.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    setTabIndicator({
      left: tabRect.left - listRect.left + list.scrollLeft,
      width: tabRect.width,
    });
  }, [tabIndex, surfaceId]);

  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % TAB_IDS.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + TAB_IDS.length) % TAB_IDS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TAB_IDS.length - 1;
    else return;
    e.preventDefault();
    const id = TAB_IDS[next];
    setSurfaceId(id);
    tabRefs.current[next]?.focus();
  };

  const copySwatch = useCallback(async (swatch: VidyasDesignSurface["swatches"][0]) => {
    try {
      await navigator.clipboard.writeText(swatch.hex);
      setCopiedToken(swatch.token);
      setContrastHint(
        contrastGrade(swatch.fgHex, swatch.onHex, swatch.fontSize, swatch.fontWeight),
      );
      window.setTimeout(() => setCopiedToken(null), 1500);
    } catch {
      setCopiedToken(null);
    }
  }, []);

  const showPdfBlock = pdfMeta.available;
  const mb = pdfMeta.bytes / (1024 * 1024);

  const fadeMs = reduceMotion ? 0 : 300;
  const leftFadeStyle = {
    transition: `opacity ${fadeMs}ms ease-out`,
    opacity: leftVisible ? 1 : 0,
  };

  const heroOnDark =
    displaySurfaceId === "driver" || displaySurfaceId === "dashboard";

  const swatchesOnDark =
    displaySurface.id === "driver" || displaySurface.id === "dashboard";

  return (
    <div className={`${outfitVk.className} space-y-5`}>
      <p className="max-w-3xl text-sm leading-relaxed text-zinc-700">
        <HighlightText text={vidyasDesignSystem.intro} />
      </p>

      <div
        className="overflow-x-hidden border-2 border-black bg-white p-4 shadow-[4px_4px_0_0_#000] sm:p-5"
        style={{
          background:
            surface.id === "customer" || surface.id === "landing"
              ? "#FAF9F5"
              : surface.id === "driver"
                ? "#0A0A0A"
                : "#0D0D0D",
        }}
      >
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Design system surfaces"
          className="relative mb-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <span
            className="pointer-events-none absolute top-0 z-0 h-[calc(100%-4px)] border-2 border-black bg-[#FF462D] shadow-[2px_2px_0_0_#000]"
            style={{
              left: tabIndicator.left,
              width: tabIndicator.width,
              transition: reduceMotion ? "none" : "left 250ms ease-out, width 250ms ease-out",
            }}
            aria-hidden
          />
          {vidyasDesignSystem.surfaces.map((tab, i) => {
            const selected = tab.id === surfaceId;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`ds-tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`ds-panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setSurfaceId(tab.id)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={`relative z-10 shrink-0 border-2 border-black px-3 py-2 font-mono text-[10px] font-black uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAED00] ${
                  selected ? "bg-transparent text-white" : "bg-white text-black"
                }`}
              >
                {tab.tabLabel}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`ds-panel-${surface.id}`}
          aria-labelledby={`ds-tab-${surface.id}`}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
        >
          <div className="order-2 space-y-4 lg:order-1" style={leftFadeStyle}>
            <p
              className={`text-xs leading-relaxed ${
                displaySurface.id === "customer" || displaySurface.id === "landing"
                  ? "text-zinc-600"
                  : "text-zinc-300"
              }`}
            >
              {displaySurface.caption}
            </p>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {displaySurface.swatches.map((sw, swIndex) => (
                <button
                  key={sw.token}
                  type="button"
                  onClick={() => copySwatch(sw)}
                  className={`flex min-h-[52px] items-center gap-2 border-2 border-black p-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAED00] ${
                    displaySurface.id === "customer" || displaySurface.id === "landing"
                      ? "bg-white"
                      : "bg-[#141414]"
                  }`}
                  style={
                    reduceMotion
                      ? undefined
                      : {
                          transition: `opacity ${fadeMs}ms ease-out`,
                          transitionDelay: leftVisible ? `${swIndex * 40}ms` : "0ms",
                          opacity: leftVisible ? 1 : 0,
                        }
                  }
                >
                  <span
                    className={`h-9 w-9 shrink-0 border-2 border-black ${
                      swatchNeedsOutline(sw.hex, swatchesOnDark)
                        ? "ring-2 ring-white/70 ring-offset-1 ring-offset-transparent"
                        : ""
                    }`}
                    style={{ background: sw.hex }}
                    aria-hidden
                  />
                  <span className="font-mono text-[9px]">
                    <span
                      className={`block font-black uppercase ${
                        displaySurface.id === "customer" || displaySurface.id === "landing"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      {sw.token}
                    </span>
                    <span
                      className={
                        displaySurface.id === "customer" || displaySurface.id === "landing"
                          ? "text-zinc-500"
                          : "text-zinc-400"
                      }
                    >
                      {copiedToken === sw.token ? "Copied" : sw.hex}
                    </span>
                  </span>
                </button>
              ))}
            </div>
            {contrastHint ? (
              <p
                className={`font-mono text-[10px] font-bold ${
                  contrastHint.includes("below AA") ? "text-[#FF462D]" : "text-zinc-500"
                }`}
              >
                Contrast: {contrastHint}
              </p>
            ) : null}

            <dl
              className={`grid grid-cols-2 gap-2 font-mono text-[9px] font-bold uppercase tracking-wide ${
                displaySurface.id === "customer" || displaySurface.id === "landing"
                  ? "text-zinc-600"
                  : "text-zinc-400"
              }`}
            >
              <div>
                <dt className="opacity-60">Icons</dt>
                <dd>{displaySurface.meta.icons}</dd>
              </div>
              <div>
                <dt className="opacity-60">Radius</dt>
                <dd>{displaySurface.meta.radius}</dd>
              </div>
              <div>
                <dt className="opacity-60">Touch</dt>
                <dd>{displaySurface.meta.touch}</dd>
              </div>
              <div className="col-span-2 text-[8px] font-semibold normal-case opacity-70">
                {displaySurface.meta.source}
              </div>
            </dl>

            <div className="flex flex-wrap gap-2">
              {displaySurface.chips.map((chip) => {
                const active = chip.id === chipId;
                return (
                  <button
                    key={chip.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setChipId(chip.id)}
                    className={`border-2 border-black px-2.5 py-1 font-mono text-[10px] font-bold uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAED00] ${
                      active
                        ? "bg-[#FAED00] text-black shadow-[2px_2px_0_0_#000]"
                        : displaySurface.id === "customer" || displaySurface.id === "landing"
                          ? "bg-[#FAF9F5] text-black"
                          : "bg-white/10 text-white"
                    }`}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>

            <div className="border-t-2 border-black/20 pt-3">
              <p
                className={`mb-2 font-mono text-[9px] font-black uppercase tracking-wider ${
                  displaySurface.id === "customer" || displaySurface.id === "landing"
                    ? "text-zinc-500"
                    : "text-zinc-400"
                }`}
              >
                Outfit
              </p>
              <div className="flex flex-wrap gap-3">
                {[500, 600, 700, 800, 900].map((w) => (
                  <div key={w} className="min-w-[52px] text-center">
                    <span
                      className={`block text-2xl leading-none ${
                        displaySurface.id === "customer" || displaySurface.id === "landing"
                          ? "text-black"
                          : "text-white"
                      }`}
                      style={{ fontWeight: w }}
                    >
                      Ag
                    </span>
                    <span className="font-mono text-[8px] font-bold opacity-60">{w}</span>
                  </div>
                ))}
              </div>
              <p
                className={`mt-2 text-sm ${
                  displaySurface.id === "customer" || displaySurface.id === "landing"
                    ? "text-zinc-700"
                    : "text-zinc-300"
                }`}
                style={{ fontWeight: 600 }}
              >
                Vidya&apos;s Kitchen — home meals in Sivakasi.
              </p>
            </div>
          </div>

          <div className="order-1 lg:sticky lg:top-24 lg:order-2 lg:self-start">
            <DesignSystemHeroPanel
              surfaceId={displaySurfaceId}
              reduceMotion={reduceMotion}
              visible={panelVisible}
              isDarkPanel={heroOnDark}
            />
          </div>
        </div>
      </div>

      {showPdfBlock ? (
        <div className="flex flex-col gap-4 border-2 border-black bg-white p-4 shadow-[4px_4px_0_0_#000] sm:flex-row sm:items-start">
          {pdfMeta.previews.length > 0 ? (
            <div className="flex shrink-0 gap-2">
              {pdfMeta.previews.map((p) => (
                <div
                  key={p.src}
                  className="relative h-[100px] w-[72px] overflow-hidden border-2 border-black bg-zinc-100"
                >
                  <Image src={p.src} alt={p.alt} fill className="object-cover object-top" sizes="72px" />
                </div>
              ))}
            </div>
          ) : null}
          <div className="min-w-0 flex-1 space-y-2">
            <a
              href={pdfMeta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-black bg-[#FAED00] px-4 py-2.5 font-mono text-xs font-black uppercase tracking-wider shadow-[3px_3px_0_0_#000] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <FilePdf weight="bold" className="h-4 w-4" aria-hidden />
              Design system PDF
            </a>
            <p className="font-mono text-[10px] leading-relaxed text-zinc-600">
              {pdfMeta.pages != null ? `${pdfMeta.pages} pages · ` : ""}
              {mb.toFixed(1)} MB
              {pdfMeta.version ? ` · v${pdfMeta.version}` : ""}
              {pdfMeta.dateLabel ? ` · ${pdfMeta.dateLabel}` : ""}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
