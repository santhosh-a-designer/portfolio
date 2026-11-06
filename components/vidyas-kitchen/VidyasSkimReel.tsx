"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { vidyasSkimCopy, vidyasSnapshot } from "@/lib/vidyasKitchenCaseStudyContent";

interface Props {
  onExpandFullStory: () => void;
}

export default function VidyasSkimReel({ onExpandFullStory }: Props) {
  const { hero, beat01, beat02, beat03, beat04, beat05 } = vidyasSkimCopy;

  return (
    <div className="w-full space-y-0 text-black font-sans divide-y divide-black/15">
      {/* ─── HERO BEAT: Hook + 4-KPI Strip ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-8 sm:py-10 bg-white space-y-6">
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

        <div className="space-y-2 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-[0.9]">
            {hero.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 leading-snug">
            “{hero.tagline}”
          </p>
        </div>

        {/* 4-Stat KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-3 border-t border-black/15 font-mono">
          {hero.kpis.map((kpi, idx) => (
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
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
            01 — {beat01.label}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “{beat01.takeaway}”
        </h2>
        <p className="text-sm sm:text-base text-zinc-700 max-w-[70ch] leading-relaxed">
          {beat01.body}
        </p>
      </section>

      {/* ─── BEAT 02: THE USERS (Needs Statements, No Quotes) ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
            02 — {beat02.label}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “{beat02.takeaway}”
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {beat02.needs.map((item, idx) => (
            <div key={idx} className="p-3.5 bg-zinc-50 border-l-2 border-black/20 space-y-1">
              <span className="font-mono text-[10px] font-black uppercase text-[#BD2320] block">
                {item.role}
              </span>
              <p className="text-xs sm:text-sm font-medium text-zinc-800 leading-snug">
                {item.need}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BEAT 03: THE DECISIONS ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
            03 — {beat03.label}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “{beat03.takeaway}”
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          {beat03.decisions.map((d, idx) => (
            <div key={idx} className="p-3.5 bg-zinc-50 border-l-2 border-[#BD2320] space-y-1">
              <span className="font-mono text-xs font-black uppercase text-black block">
                {d.title}
              </span>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BEAT 04: THE SHIPPED PRODUCT (Static 3-Screen Trio, No Sliders) ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
            04 — {beat04.label}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “{beat04.takeaway}”
        </h2>

        {/* 3-Screen Trio Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {beat04.screens.map((screen, idx) => (
            <div key={idx} className="border border-black/15 bg-zinc-50 overflow-hidden space-y-2 p-2">
              <div className="flex items-center justify-between font-mono text-[10px] px-1">
                <span className="font-bold text-zinc-500 uppercase">{screen.surface}</span>
                <span className="font-black text-black uppercase">{screen.title}</span>
              </div>
              <div className="relative aspect-[9/16] md:aspect-[4/5] bg-zinc-900 border border-black/10 overflow-hidden">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BEAT 05: THE RESULTS (Verified Facts + CTA) ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-10 bg-white space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BD2320]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#BD2320]">
            05 — {beat05.label}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “{beat05.takeaway}”
        </h2>

        <div className="border-t border-b border-black/20 divide-y divide-black/15 font-mono">
          {beat05.results.map((r, idx) => (
            <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <span className="text-lg sm:text-xl font-black text-black tracking-tight whitespace-nowrap">
                {r.stat}
              </span>
              <span className="text-xs text-zinc-600 font-sans sm:text-right">
                {r.label}
              </span>
            </div>
          ))}
        </div>

        {/* Final CTA: Read the full case study */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            type="button"
            onClick={onExpandFullStory}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#BD2320] hover:bg-black text-white font-mono text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-sm group"
          >
            <span>{beat05.cta}</span>
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
    </div>
  );
}
