"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FilePdf } from "@phosphor-icons/react";
import Image from "next/image";
import { contrastGrade } from "@/lib/contrast";
import type { DesignSystemPdfMeta } from "@/lib/designSystemPdfMeta";
import { outfitVk } from "@/lib/fonts/outfitVk";
import {
  vidyasDesignSystem,
  type VidyasDesignSurface,
} from "@/lib/vidyasKitchenCaseStudyContent";
import HighlightText from "./HighlightText";

type Props = {
  pdfMeta: DesignSystemPdfMeta;
};

function Dim({ w, h, r }: { w?: number; h?: number; r?: number }) {
  const parts: string[] = [];
  if (w != null) parts.push(`${w}px`);
  if (h != null) parts.push(`${h}px`);
  if (r != null) parts.push(`r${r}`);
  if (!parts.length) return null;
  return (
    <span className="pointer-events-none absolute -bottom-4 left-0 font-mono text-[8px] font-bold text-[#E11D2E]">
      {parts.join(" · ")}
    </span>
  );
}

function PreviewStage({
  surface,
  chipId,
  menuPhoto,
}: {
  surface: VidyasDesignSurface;
  chipId: string;
  menuPhoto: string;
}) {
  const wrap = "relative mx-auto w-full max-w-[320px] rounded-lg border-2 border-black p-4";

  if (surface.id === "landing") {
    const bg = "#1A1A1A";
    if (chipId === "wa-cta") {
      return (
        <div className={wrap} style={{ background: bg }}>
          <div className="relative inline-block">
            <button
              type="button"
              className="w-full min-w-[220px] rounded-xl px-5 py-3 text-center text-[15px] font-bold text-white"
              style={{ background: "#25D366" }}
            >
              Order with Vidya Bot
            </button>
            <Dim h={48} r={12} />
          </div>
        </div>
      );
    }
    if (chipId === "landing-card") {
      return (
        <div className={wrap} style={{ background: bg }}>
          <div className="relative rounded-2xl border border-white/10 bg-[#222] p-4 text-center text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Welcome to</p>
            <p className="mt-1 text-lg font-extrabold tracking-wide" style={{ color: "#CC1C1C" }}>
              VIDYA&apos;S KITCHEN
            </p>
            <Dim r={16} />
          </div>
        </div>
      );
    }
    return (
      <div className={wrap} style={{ background: bg }}>
        <div className="relative flex flex-col gap-2">
          <button
            type="button"
            className="h-12 w-full rounded-xl text-[15px] font-bold text-white"
            style={{ background: "#25D366" }}
          >
            WhatsApp
          </button>
          <button
            type="button"
            className="h-12 w-full rounded-xl border-2 text-[14px] font-bold text-white"
            style={{ borderColor: "#CC1C1C", color: "#CC1C1C" }}
          >
            Install app
          </button>
          <Dim h={48} />
        </div>
      </div>
    );
  }

  if (surface.id === "customer") {
    const bg = "#F5F5F7";
    if (chipId === "primary-btn") {
      return (
        <div className={wrap} style={{ background: bg }}>
          <div className="relative inline-block w-full">
            <button
              type="button"
              className="flex h-14 w-full min-w-[220px] items-center justify-center rounded-[20px] text-[15px] font-extrabold tracking-tight text-white"
              style={{ background: "#BD2320" }}
            >
              Continue
            </button>
            <Dim w={220} h={56} r={20} />
          </div>
        </div>
      );
    }
    if (chipId === "menu-card") {
      return (
        <div className={wrap} style={{ background: bg }}>
          <div className="relative w-[220px] rounded-[28px] border border-black/10 bg-white/80 p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
            <div className="relative h-[120px] overflow-hidden rounded-[22px]">
              <Image src={menuPhoto} alt="" fill className="object-cover" sizes="220px" />
            </div>
            <p className="mt-2 text-[16px] font-bold leading-snug text-[#1A1A1A]">Mom&apos;s Recipe — Chicken Gravy</p>
            <Dim w={220} r={28} />
          </div>
        </div>
      );
    }
    return (
      <div className={wrap} style={{ background: bg }}>
        <div className="relative flex gap-2">
          <div className="flex h-[72px] w-[108px] flex-col items-center justify-center rounded-2xl border border-black/10 bg-black/[0.03] text-[15px] font-extrabold">
            500gm
            <span className="text-[12px] font-bold text-black/40">₹349</span>
          </div>
          <div className="flex h-[72px] w-[108px] flex-col items-center justify-center rounded-2xl border-[1.5px] border-[#BD2320] bg-[#BD2320]/10 text-[15px] font-extrabold">
            1kg
            <span className="text-[12px] font-bold text-[#BD2320]">₹699</span>
          </div>
          <Dim w={108} h={72} r={16} />
        </div>
      </div>
    );
  }

  if (surface.id === "driver") {
    const bg = "#0A0A0A";
    if (chipId === "swipe") {
      return (
        <div className={wrap} style={{ background: bg }}>
          <div className="relative h-[60px] w-[280px] overflow-hidden rounded-[14px] text-[15px] font-extrabold text-white" style={{ background: "#E8492D" }}>
            <span className="absolute left-1 top-1 h-[52px] w-[52px] rounded-xl bg-white" aria-hidden />
            <span className="relative z-10 flex h-full items-center justify-center">Swipe to mark delivered</span>
            <Dim w={280} h={60} r={14} />
          </div>
        </div>
      );
    }
    if (chipId === "job-card") {
      return (
        <div className={wrap} style={{ background: bg }}>
          <div className="relative w-[280px] rounded-[18px] bg-[#1C1C1E] p-3.5 text-white">
            <p className="text-[22px] font-extrabold">Anand</p>
            <p className="mt-1 text-[13px] font-semibold text-[#AEAEB2]">#00001 · Breakfast</p>
            <Dim w={280} r={18} />
          </div>
        </div>
      );
    }
    return (
      <div className={wrap} style={{ background: bg }}>
        <div className="relative w-[280px] rounded-2xl bg-[#F5A623]/10 p-3.5">
          <p className="text-[11px] font-extrabold tracking-wider text-[#F5A623]">COLLECT — CASH OR UPI</p>
          <p className="text-[28px] font-extrabold text-white">₹348</p>
          <Dim w={280} r={16} />
        </div>
      </div>
    );
  }

  // dashboard
  const bg = "#0D0D0D";
  if (chipId === "approve") {
    return (
      <div className={wrap} style={{ background: bg }}>
        <div className="relative inline-block">
          <button
            type="button"
            className="h-11 rounded-[10px] px-4 text-[14px] font-medium text-[#111]"
            style={{ background: "#F5E32D" }}
          >
            Approve
          </button>
          <Dim h={44} r={10} />
        </div>
      </div>
    );
  }
  if (chipId === "stat") {
    return (
      <div className={wrap} style={{ background: bg }}>
        <div className="relative w-[160px] rounded-2xl border border-[#222] bg-[#161616] p-3.5">
          <p className="text-[12px] font-bold text-[#888]">New orders</p>
          <p className="mt-1 text-[28px] font-extrabold text-white">12</p>
          <Dim w={160} r={16} />
        </div>
      </div>
    );
  }
  return (
    <div className={wrap} style={{ background: bg }}>
      <div className="relative w-[240px] rounded-2xl bg-[#0d0d0d] p-3">
        <div className="flex min-h-[44px] items-center gap-3 rounded-xl bg-[#F5E32D] px-4 text-[14px] font-semibold text-black">
          Dashboard
        </div>
        <div className="mt-1 flex min-h-[44px] items-center rounded-xl px-4 text-[14px] font-semibold text-[#888]">
          Drivers
        </div>
        <Dim h={44} r={12} />
      </div>
    </div>
  );
}

const TAB_IDS = vidyasDesignSystem.surfaces.map((s) => s.id);

export default function DesignSystemSection({ pdfMeta }: Props) {
  const [surfaceId, setSurfaceId] = useState<VidyasDesignSurface["id"]>("customer");
  const [chipId, setChipId] = useState<string>(vidyasDesignSystem.surfaces[1].chips[0].id);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [contrastHint, setContrastHint] = useState<string | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const surface = useMemo(
    () => vidyasDesignSystem.surfaces.find((s) => s.id === surfaceId) ?? vidyasDesignSystem.surfaces[0],
    [surfaceId],
  );

  useEffect(() => {
    const first = surface.chips[0]?.id;
    if (first) setChipId(first);
  }, [surface]);

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

  return (
    <div className={`${outfitVk.className} space-y-5`}>
      <p className="max-w-3xl text-sm leading-relaxed text-zinc-700">
        <HighlightText text={vidyasDesignSystem.intro} />
      </p>

      <div
        className="border-2 border-black bg-white p-4 shadow-[4px_4px_0_0_#000] sm:p-5"
        style={{ background: surface.id === "customer" || surface.id === "landing" ? "#FAF9F5" : surface.id === "driver" ? "#0A0A0A" : "#0D0D0D" }}
      >
        <div
          role="tablist"
          aria-label="Design system surfaces"
          className="mb-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
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
                className={`shrink-0 border-2 border-black px-3 py-2 font-mono text-[10px] font-black uppercase tracking-wider focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAED00] ${
                  selected ? "bg-[#FF462D] text-white shadow-[2px_2px_0_0_#000]" : "bg-white text-black"
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
          <div className="space-y-4">
            <p
              className={`text-xs leading-relaxed ${
                surface.id === "customer" || surface.id === "landing" ? "text-zinc-600" : "text-zinc-300"
              }`}
            >
              {surface.caption}
            </p>

            <div className="flex flex-wrap gap-2">
              {surface.swatches.map((sw) => (
                <button
                  key={sw.token}
                  type="button"
                  onClick={() => copySwatch(sw)}
                  className={`flex min-w-[140px] flex-1 items-center gap-2 border-2 border-black p-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAED00] ${
                    surface.id === "customer" || surface.id === "landing" ? "bg-white" : "bg-black/40"
                  }`}
                >
                  <span
                    className="h-9 w-9 shrink-0 border border-black/20"
                    style={{ background: sw.hex }}
                    aria-hidden
                  />
                  <span className="font-mono text-[9px]">
                    <span
                      className={`block font-black uppercase ${
                        surface.id === "customer" || surface.id === "landing" ? "text-black" : "text-white"
                      }`}
                    >
                      {sw.token}
                    </span>
                    <span className={surface.id === "customer" || surface.id === "landing" ? "text-zinc-500" : "text-zinc-400"}>
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
                surface.id === "customer" || surface.id === "landing" ? "text-zinc-600" : "text-zinc-400"
              }`}
            >
              <div>
                <dt className="opacity-60">Icons</dt>
                <dd>{surface.meta.icons}</dd>
              </div>
              <div>
                <dt className="opacity-60">Radius</dt>
                <dd>{surface.meta.radius}</dd>
              </div>
              <div>
                <dt className="opacity-60">Touch</dt>
                <dd>{surface.meta.touch}</dd>
              </div>
              <div className="col-span-2 text-[8px] font-semibold normal-case opacity-70">{surface.meta.source}</div>
            </dl>

            <div className="flex flex-wrap gap-2">
              {surface.chips.map((chip) => {
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
                        : surface.id === "customer" || surface.id === "landing"
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
                  surface.id === "customer" || surface.id === "landing" ? "text-zinc-500" : "text-zinc-400"
                }`}
              >
                Outfit
              </p>
              <div className="flex flex-wrap gap-3">
                {[500, 600, 700, 800, 900].map((w) => (
                  <div key={w} className="min-w-[52px] text-center">
                    <span
                      className={`block text-2xl leading-none ${
                        surface.id === "customer" || surface.id === "landing" ? "text-black" : "text-white"
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
                  surface.id === "customer" || surface.id === "landing" ? "text-zinc-700" : "text-zinc-300"
                }`}
                style={{ fontWeight: 600 }}
              >
                Vidya&apos;s Kitchen — home meals in Sivakasi.
              </p>
            </div>
          </div>

          <div className="flex min-h-[200px] items-center justify-center pb-6">
            <PreviewStage
              surface={surface}
              chipId={chipId}
              menuPhoto={vidyasDesignSystem.menuPhotoSrc}
            />
          </div>
        </div>
      </div>

      {showPdfBlock ? (
        <div className="flex flex-col gap-4 border-2 border-black bg-white p-4 shadow-[4px_4px_0_0_#000] sm:flex-row sm:items-start">
          {pdfMeta.previews.length > 0 ? (
            <div className="flex shrink-0 gap-2">
              {pdfMeta.previews.map((p) => (
                <div key={p.src} className="relative h-[100px] w-[72px] overflow-hidden border-2 border-black bg-zinc-100">
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
