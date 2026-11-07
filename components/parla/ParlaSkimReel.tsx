"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle } from "@phosphor-icons/react";

interface Props {
  onExpandFullStory: () => void;
}

const PARLA_KPIS = [
  { value: "1-Click", label: "Instant Video Call", highlight: "Zero app install needed" },
  { value: "3 Roles", label: "Unified Architecture", highlight: "Customer, staff, & admin" },
  { value: "100% Web", label: "In-Store QR Flow", highlight: "WebRTC in mobile browser" },
  { value: "Live Basket", label: "Synchronized Cart", highlight: "Staff adds, shopper pays" },
];

export default function ParlaSkimReel({ onExpandFullStory }: Props) {
  return (
    <div className="w-full space-y-0 text-black font-sans divide-y divide-black/15">
      {/* ─── HERO BEAT: Hook + 4-KPI Strip ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-8 sm:py-10 bg-white space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-black/15 font-mono text-[10px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1976D2]" />
            <span className="font-black uppercase tracking-wider text-black">
              PARLA RETAIL // 60-SECOND EXECUTIVE REEL
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#EC4899] text-white font-black uppercase tracking-wider text-[9px]">
              US Enterprise Retail Rollout
            </span>
            <a
              href="https://parlaretail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#1976D2] hover:bg-[#EC4899] text-white font-mono text-[10px] font-black uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>parlaretail.com ↗</span>
            </a>
          </div>
        </div>

        <div className="space-y-2 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black leading-[0.9] flex items-baseline flex-wrap gap-2">
            <span>Show &amp; Sell</span>
            <span className="font-serif italic lowercase text-2xl sm:text-4xl text-[#1976D2] font-normal tracking-normal select-none">
              assisted commerce
            </span>
            <span className="w-3 h-3 rounded-full bg-[#EC4899] shrink-0" />
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-bold text-zinc-900 leading-snug">
            “Bridging retail e-commerce and instant human trust via 1-click scheduling, video consultation, and in-call checkout.”
          </p>
        </div>

        {/* 4-Stat KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-3 border-t border-black/15 font-mono">
          {PARLA_KPIS.map((kpi, idx) => (
            <div key={idx} className="space-y-0.5 border-l-2 border-[#1976D2]/30 pl-3 min-w-0">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight block leading-none whitespace-nowrap">
                {kpi.value}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase text-zinc-600 block leading-tight">
                {kpi.label}
              </span>
              <span className="text-[9px] text-[#EC4899] font-black uppercase tracking-wider block">
                {kpi.highlight}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BEAT 01: THE PROBLEM ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1976D2]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#1976D2]">
            01 — THE PROBLEM
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “HIGH-TICKET E-COMMERCE DROPS OFF ON STATIC PAGES.”
        </h2>
        <p className="text-sm sm:text-base text-zinc-700 max-w-[70ch] leading-relaxed">
          When buyers consider $2,000+ purchases like furniture, jewelry, or consumer tech, static product pages leave critical tactile and dimension questions unanswered, causing immediate drop-offs.
        </p>
      </section>

      {/* ─── BEAT 02: 3 CORE DECISIONS (STAR) ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#EC4899]">
            02 — THE DECISIONS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “THREE CALLS THAT SHAPED ASSISTED SELLING.”
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2">
          {/* Decision 1 */}
          <div className="p-4 bg-zinc-50 border border-black/15 space-y-3">
            <span className="font-mono text-xs font-black uppercase text-black block pb-2 border-b border-black/10">
              01 / The Storefront CTA
            </span>
            <div className="space-y-1.5 text-xs text-zinc-700">
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">S</span>
                <p className="leading-snug">Aggressive pop-up modals caused immediate customer bounces.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">T</span>
                <p className="leading-snug">Create an un-intrusive floating trigger with clear value props.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">A</span>
                <p className="leading-snug">Designed polite floating widget offering immediate or scheduled video.</p>
              </div>
            </div>
            <div className="pt-2 border-t border-dashed border-black/15">
              <div className="flex items-start gap-1.5 bg-white p-2.5 border border-blue-900/15">
                <CheckCircle weight="fill" className="w-4 h-4 text-[#1976D2] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] font-black uppercase text-[#1976D2] block">
                    Outcome
                  </span>
                  <p className="text-xs font-bold text-zinc-900 leading-snug">
                    Customers trigger video consultations on their own terms without browsing disruption.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 2 */}
          <div className="p-4 bg-zinc-50 border border-black/15 space-y-3">
            <span className="font-mono text-xs font-black uppercase text-black block pb-2 border-b border-black/10">
              02 / Showroom-Floor Scheduler
            </span>
            <div className="space-y-1.5 text-xs text-zinc-700">
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">S</span>
                <p className="leading-snug">Generic Calendly-style slots confused departmental retail shoppers.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">T</span>
                <p className="leading-snug">Map appointments to physical departments, locations, and sales specialists.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">A</span>
                <p className="leading-snug">Built store-mapped booking tree with automatic agent assignment.</p>
              </div>
            </div>
            <div className="pt-2 border-t border-dashed border-black/15">
              <div className="flex items-start gap-1.5 bg-white p-2.5 border border-pink-900/15">
                <CheckCircle weight="fill" className="w-4 h-4 text-[#EC4899] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] font-black uppercase text-[#EC4899] block">
                    Outcome
                  </span>
                  <p className="text-xs font-bold text-zinc-900 leading-snug">
                    Shoppers book the exact showroom floor specialist matching their purchase doubt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 3 */}
          <div className="p-4 bg-zinc-50 border border-black/15 space-y-3">
            <span className="font-mono text-xs font-black uppercase text-black block pb-2 border-b border-black/10">
              03 / Synchronized In-Call Cart
            </span>
            <div className="space-y-1.5 text-xs text-zinc-700">
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">S</span>
                <p className="leading-snug">Directing shoppers to standard checkout broke conversation momentum.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">T</span>
                <p className="leading-snug">Enable live cart building and barcode scanning inside the video window.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold text-zinc-400 text-[10px] uppercase w-4 shrink-0 pt-0.5">A</span>
                <p className="leading-snug">Engineered real-time QR scanner + mirrored checkout during the live stream.</p>
              </div>
            </div>
            <div className="pt-2 border-t border-dashed border-black/15">
              <div className="flex items-start gap-1.5 bg-white p-2.5 border border-blue-900/15">
                <CheckCircle weight="fill" className="w-4 h-4 text-[#1976D2] shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] font-black uppercase text-[#1976D2] block">
                    Outcome
                  </span>
                  <p className="text-xs font-bold text-zinc-900 leading-snug">
                    The showroom rep scans products live; the customer confirms payment without hanging up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BEAT 03: PRODUCT TRIO ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1976D2]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#1976D2]">
            03 — THE SHIPPED SURFACES
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “STOREFRONT CTA, SCHEDULER, AND IN-CALL CART.”
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="border border-black/15 bg-zinc-50 overflow-hidden space-y-2 p-2">
            <div className="flex items-center justify-between font-mono text-[10px] px-1">
              <span className="font-bold text-zinc-500 uppercase">STOREFRONT</span>
              <span className="font-black text-black uppercase">Trigger CTA</span>
            </div>
            <div className="relative aspect-[4/3] bg-zinc-900 border border-black/10 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/case-studies/parla/CTA-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="border border-black/15 bg-zinc-50 overflow-hidden space-y-2 p-2">
            <div className="flex items-center justify-between font-mono text-[10px] px-1">
              <span className="font-bold text-zinc-500 uppercase">SCHEDULER</span>
              <span className="font-black text-black uppercase">Showroom Booking</span>
            </div>
            <div className="relative aspect-[4/3] bg-zinc-900 border border-black/10 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/case-studies/parla/CS-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="border border-black/15 bg-zinc-50 overflow-hidden space-y-2 p-2">
            <div className="flex items-center justify-between font-mono text-[10px] px-1">
              <span className="font-bold text-zinc-500 uppercase">CONSULTATION</span>
              <span className="font-black text-black uppercase">1:1 Video &amp; QR</span>
            </div>
            <div className="relative aspect-[4/3] bg-zinc-900 border border-black/10 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/case-studies/parla/QR_Code_Video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BEAT 04: VERIFIED OUTCOMES ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#EC4899]">
            04 — OUTCOMES
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “WHAT CHANGED WHEN SHOWROOMS WENT LIVE ON THE WEB.”
        </h2>

        <div className="border-t border-b border-black/20 divide-y divide-black/15 font-mono">
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2">
            <span className="text-lg sm:text-xl font-black text-black tracking-tight whitespace-nowrap">
              1-Click WebRTC
            </span>
            <span className="text-xs text-zinc-600 font-sans sm:text-right">
              Runs in standard mobile Safari &amp; Chrome without app installs.
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2">
            <span className="text-lg sm:text-xl font-black text-black tracking-tight whitespace-nowrap">
              Enterprise Rollout
            </span>
            <span className="text-xs text-zinc-600 font-sans sm:text-right">
              Adopted by multi-department US showroom retailers (Nebraska Furniture Mart).
            </span>
          </div>
          <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 sm:gap-2">
            <span className="text-lg sm:text-xl font-black text-black tracking-tight whitespace-nowrap">
              Live Mirrored Cart
            </span>
            <span className="text-xs text-zinc-600 font-sans sm:text-right">
              Sales rep builds basket in real time while customer stays in the call.
            </span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            type="button"
            onClick={onExpandFullStory}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#1976D2] hover:bg-black text-white font-mono text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-sm group"
          >
            <span>Read the full case study</span>
            <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="https://parlaretail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 border border-black/20 hover:border-black bg-zinc-50 hover:bg-black text-black hover:text-white font-mono text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Live site · parlaretail.com</span>
            <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* ─── BEAT 05: KEY LEARNING ─── */}
      <section className="w-full px-[clamp(20px,4vw,64px)] py-6 sm:py-8 bg-white space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1976D2]" />
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#1976D2]">
            05 — WHAT I LEARNED
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight">
          “TWO LESSONS FROM ASSISTED COMMERCE.”
        </h2>

        <div className="p-4 bg-zinc-50 border-l-4 border-[#1976D2] space-y-1">
          <span className="font-mono text-[10px] font-black uppercase text-[#1976D2] block">
            Core Takeaway
          </span>
          <p className="text-sm sm:text-base font-bold text-zinc-900 leading-snug">
            In conversion-heavy B2B2C products, booking confidence beats visual decoration. Eliminating friction before the call and preserving conversation flow during checkout is what closes high-ticket sales.
          </p>
        </div>
      </section>
    </div>
  );
}
