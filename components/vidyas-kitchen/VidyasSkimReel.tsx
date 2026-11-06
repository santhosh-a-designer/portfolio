"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle } from "@phosphor-icons/react";
import { vidyasSkimCopy, vidyasSnapshot } from "@/lib/vidyasKitchenCaseStudyContent";

interface Props {
  onExpandFullStory: () => void;
}

const PRODUCT_SCREENS = [
  {
    surface: "Customer",
    title: "Confirm Card",
    src: vidyasSkimCopy.product.screens[0],
    alt: "WhatsApp customer instant confirmation card",
  },
  {
    surface: "Kitchen",
    title: "Order Board",
    src: vidyasSkimCopy.product.screens[1],
    alt: "Kitchen order management supervisory board",
  },
  {
    surface: "Driver",
    title: "Delivery Slider",
    src: vidyasSkimCopy.product.screens[2],
    alt: "Driver daylight delivery slider and PIN interface",
  },
];

export default function VidyasSkimReel({ onExpandFullStory }: Props) {
  const { hero, problem, decisions, product, results, learning } = vidyasSkimCopy;

  return (
    <div className="w-full space-y-0 text-black font-sans divide-y divide-black/15">
      {/* ─── HERO BEAT: Hook + 4-KPI Strip ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-10 bg-white space-y-4 sm:space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-black/15 font-mono text-[10px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
            <span className="font-black uppercase tracking-wider text-black">
              CASE STUDY // 60-SECOND EXECUTIVE REEL
            </span>
          </div>
          <span className="px-2 py-0.5 bg-[#FAED00] text-black font-black uppercase tracking-wider text-[9px] border border-black/20">
            {vidyasSnapshot.firstInMarket}
          </span>
        </div>

        <div className="space-y-1.5 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-[0.9]">
            {hero.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 leading-snug">
            “{hero.tagline}”
          </p>
        </div>

        {/* 4-Stat KPI Strip (Verifiable Facts Only) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-3 border-t border-black/15 font-mono">
          {vidyasSnapshot.kpis.map((kpi, idx) => (
            <div key={idx} className="space-y-0.5 border-l-2 border-black/15 pl-3 min-w-0">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight block leading-none whitespace-nowrap">
                {kpi.value}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase text-zinc-600 block">
                {kpi.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BEAT 01: THE PROBLEM (Text-Only) ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-5 sm:py-8 bg-white space-y-2.5 sm:space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
            01 — THE PROBLEM
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “{problem.takeaway}”
        </h2>
        <p className="text-sm sm:text-base text-zinc-700 max-w-[70ch] leading-relaxed">
          {problem.body}
        </p>
      </section>

      {/* ─── BEAT 02: THE 3 STAR DECISIONS (S / T / A / Outcome) ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-5 sm:py-8 bg-white space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
            02 — THE DECISIONS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “{decisions.takeaway}”
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 pt-1 sm:pt-2">
          {decisions.items.map((item, idx) => (
            <div key={idx} className="p-3 sm:p-4 bg-zinc-50 border border-black/15 space-y-2 sm:space-y-3">
              <span className="font-mono text-xs font-black uppercase text-black block pb-1.5 sm:pb-2 border-b border-black/10">
                {item.title}
              </span>

              <div className="space-y-1 text-xs text-zinc-700">
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">S</span>
                  <p className="leading-snug">{item.s}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">T</span>
                  <p className="leading-snug">{item.t}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">A</span>
                  <p className="leading-snug">{item.a}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-dashed border-black/15">
                <div className="flex items-start gap-1.5 bg-white p-2 sm:p-2.5 border border-emerald-900/15">
                  <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] font-black uppercase text-emerald-800 block">
                      Outcome
                    </span>
                    <p className="text-xs font-bold text-zinc-900 leading-snug">
                      {item.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BEAT 03: THE SHIPPED PRODUCT (Static 3-Screen Trio) ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-5 sm:py-8 bg-white space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
            03 — THE PRODUCT
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “{product.takeaway}”
        </h2>

        {/* 3-Screen Trio Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-1 sm:pt-2">
          {PRODUCT_SCREENS.map((screen, idx) => (
            <div key={idx} className="border border-black/15 bg-zinc-50 overflow-hidden space-y-1.5 sm:space-y-2 p-2">
              <div className="flex items-center justify-between font-mono text-[10px] px-1">
                <span className="font-bold text-zinc-500 uppercase">{screen.surface}</span>
                <span className="font-black text-black uppercase">{screen.title}</span>
              </div>
              <div className="relative aspect-[4/5] bg-zinc-900 border border-black/10 overflow-hidden">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  loading="eager"
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BEAT 04: THE RESULTS (Verified Facts + CTA) ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-5 sm:py-8 bg-white space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
            04 — THE RESULTS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “{results.takeaway}”
        </h2>

        <div className="border-t border-b border-black/20 divide-y divide-black/15 font-mono">
          {results.items.map((r, idx) => (
            <div key={idx} className="py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2">
              <span className="text-lg sm:text-xl font-black text-black tracking-tight whitespace-nowrap">
                {r.stat}
              </span>
              <span className="text-xs text-zinc-600 font-sans sm:text-right">
                {r.label}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            type="button"
            onClick={onExpandFullStory}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#BD2320] hover:bg-black text-white font-mono text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-sm group"
          >
            <span>{results.cta}</span>
            <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href={vidyasSnapshot.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-zinc-600 hover:text-black transition-colors"
          >
            <span>Live site · vidyaskitchenhome.com</span>
            <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ─── BEAT 05: WHAT I LEARNED ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-5 sm:py-8 bg-white space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
            05 — WHAT I LEARNED
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “{learning.takeaway}”
        </h2>

        <div className="p-3.5 sm:p-4 bg-zinc-50 border-l-4 border-[#BD2320] space-y-1">
          <span className="font-mono text-[10px] font-black uppercase text-[#BD2320] block">
            Core Takeaway
          </span>
          <p className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
            {learning.lesson}
          </p>
        </div>
      </section>
    </div>
  );
}
