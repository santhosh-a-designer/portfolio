"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import {
  ArrowSquareOut,
  Check,
  Copy,
  Sparkle,
  ShieldCheck,
  DeviceMobile,
  Desktop,
  FileCode,
} from "@phosphor-icons/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function ParlaDesignSystemSection() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  const figmaUrl =
    "https://www.figma.com/design/T3cYrsrOEvfTfWHOwRhNIu/PARLA-RETAIL?node-id=1165-44&t=eHKdSwjWBueBU2uM-1";

  const colors = [
    {
      name: "PRIMARY BLUE",
      role: "Primary Action & Active CTA",
      hex: "#1976D2",
      bgClass: "bg-[#1976D2]",
      textClass: "text-white",
      desc: "Primary interactive buttons, appointment confirmations, active tab rails",
    },
    {
      name: "SECONDARY PINK / CORAL",
      role: "Show & Sell Attention Anchor",
      hex: "#FF462D",
      bgClass: "bg-[#FF462D]",
      textClass: "text-white",
      desc: "Show & Sell live call triggers, urgent notifications, attention grabbers",
    },
    {
      name: "BRAND TEAL",
      role: "Header & Verified Identity",
      hex: "#2DC8E8",
      bgClass: "bg-[#2DC8E8]",
      textClass: "text-black",
      desc: "Merchant header logo, verified retail partner badge, navigation accents",
    },
    {
      name: "CONVERSION YELLOW",
      role: "In-Call Highlight & Checkout",
      hex: "#FAED00",
      bgClass: "bg-[#FAED00]",
      textClass: "text-black",
      desc: "Direct checkout trigger, highlighted consultant recommendation SKU",
    },
    {
      name: "STATUS GREEN",
      role: "Online Presence & Connection",
      hex: "#00C16A",
      bgClass: "bg-[#00C16A]",
      textClass: "text-white",
      desc: "Live associate presence pulse, WebRTC ping health, verified order state",
    },
    {
      name: "CANVAS DARK",
      role: "Low-Distraction Video Surface",
      hex: "#0F172A",
      bgClass: "bg-[#0F172A]",
      textClass: "text-white",
      desc: "WebRTC video call background canvas, dark media modal shell",
    },
    {
      name: "CHARCOAL SLATE",
      role: "High-Contrast Enterprise Border",
      hex: "#1F2937",
      bgClass: "bg-[#1F2937]",
      textClass: "text-white",
      desc: "2px neo-brutalist borders, dense data tables, sharp drop shadows",
    },
    {
      name: "DESKTOP BG",
      role: "Dashboard Base & Surface",
      hex: "#FFFFFF",
      bgClass: "bg-white",
      textClass: "text-black",
      desc: "Clean light-mode surface familiar to floor sales teams, zero dark-mode glare",
    },
  ];

  return (
    <div className="space-y-10 bg-[#FAF8F5] p-4 sm:p-7 md:p-9 border-2 border-black text-[#1A2E2A]">
      {/* ─── Design System Header with Direct Figma Link ─── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b-2 border-black/15 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-[#1976D2] text-white px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider">
              DESIGN SYSTEM
            </span>
            <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider">
              PARLA SHOW &amp; SELL · FIGMA SOURCE
            </span>
          </div>
          <h3 className="mt-1 font-sans text-2xl sm:text-3xl font-black text-black uppercase tracking-tight">
            Visual Foundations: Typography &amp; Colography
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-zinc-600 font-medium max-w-2xl">
            Tokenized type styles, semantic color tokens, and the authentic production component library engineered for Parla Show &amp; Sell.
          </p>
        </div>

        {/* View-Only Figma Link Button */}
        <a
          href={figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group px-4 sm:px-5 py-3 sm:py-3.5 bg-[#FAED00] hover:bg-[#faed00]/90 text-black border-2 border-black font-mono font-black text-[11px] sm:text-xs uppercase tracking-wider shadow-[3px_3px_0_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2.5 shrink-0 w-full sm:w-auto cursor-pointer text-center"
        >
          <span className="h-2 w-2 rounded-full bg-[#00C16A] animate-pulse shrink-0" />
          <span className="truncate">INSPECT FIGMA FILE (VIEW-ONLY)</span>
          <ArrowSquareOut size={16} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </a>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. TYPOGRAPHY
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 border-b border-black/15 pb-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#FF462D]" />
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-black">
              01. Typography Hierarchy &amp; Text Styles
            </h4>
          </div>
          <span className="font-mono text-[10px] text-zinc-500">Montserrat Geometric Sans (Single-Family System)</span>
        </div>

        {/* 3 Font Weight / Style Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Card 1: Body & Paragraph */}
          <div className="border-2 border-black bg-white p-5 shadow-[3px_3px_0_0_#000] space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <span className="font-mono text-[10px] font-black uppercase text-[#1976D2]">
                Interface &amp; Body
              </span>
              <span className="font-mono text-[10px] text-zinc-400">Regular 400 · Medium 500</span>
            </div>
            <p className={`${montserrat.className} text-2xl font-black text-black leading-none`}>
              Montserrat
            </p>
            <p className={`${montserrat.className} text-base text-zinc-600 font-medium`}>
              Aa Bb Cc Dd Ee Ff Gg Hh 0123456789
            </p>
            <div className="pt-2 text-xs text-zinc-600 leading-relaxed space-y-1">
              <p><strong>Figma Styles:</strong> <code className="bg-zinc-100 px-1 font-mono text-[11px]">BODY</code>, <code className="bg-zinc-100 px-1 font-mono text-[11px]">PARAGRAPH</code>, <code className="bg-zinc-100 px-1 font-mono text-[11px]">SMALL TEXT</code>.</p>
              <p><strong>Intent:</strong> Geometric clarity and open apertures for fast, effortless scanning on busy retail floor tablets even under bright showroom lights.</p>
            </div>
          </div>

          {/* Card 2: UI Labels & Metrics */}
          <div className="border-2 border-black bg-white p-5 shadow-[3px_3px_0_0_#000] space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <span className="font-mono text-[10px] font-black uppercase text-[#FF462D]">
                Metrics, Tabs &amp; Chips
              </span>
              <span className="font-mono text-[10px] text-zinc-400">SemiBold 600 · Bold 700</span>
            </div>
            <p className={`${montserrat.className} text-xl font-bold uppercase text-black leading-none`}>
              Montserrat SemiBold
            </p>
            <p className={`${montserrat.className} text-sm font-semibold text-zinc-700 tracking-wide`}>
              241 CALLS · $22.4K REVENUE · [ACTIVE]
            </p>
            <div className="pt-2 text-xs text-zinc-600 leading-relaxed space-y-1">
              <p><strong>Figma Styles:</strong> <code className="bg-zinc-100 px-1 font-mono text-[11px]">TINY</code>, <code className="bg-zinc-100 px-1 font-mono text-[11px]">METRIC_VALUE</code>, <code className="bg-zinc-100 px-1 font-mono text-[11px]">STATUS_CHIP</code>.</p>
              <p><strong>Intent:</strong> Punchy tabular weight for real-time order values, session timers, and appointment status pills without shifting layouts.</p>
            </div>
          </div>

          {/* Card 3: Headings & Display */}
          <div className="border-2 border-black bg-white p-5 shadow-[3px_3px_0_0_#000] space-y-3">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
              <span className="font-mono text-[10px] font-black uppercase text-[#FAED00] bg-black px-1.5 py-0.5">
                Headings &amp; Display
              </span>
              <span className="font-mono text-[10px] text-zinc-400">ExtraBold 800 · Black 900</span>
            </div>
            <p className={`${montserrat.className} text-xl font-black uppercase text-black tracking-tight leading-none`}>
              Montserrat Black
            </p>
            <p className={`${montserrat.className} text-sm font-black uppercase text-zinc-500 tracking-wider`}>
              SHOW &amp; SELL ASSISTED COMMERCE
            </p>
            <div className="pt-2 text-xs text-zinc-600 leading-relaxed space-y-1">
              <p><strong>Figma Styles:</strong> <code className="bg-zinc-100 px-1 font-mono text-[11px]">HEADING</code>, <code className="bg-zinc-100 px-1 font-mono text-[11px]">HERO_TITLE</code>.</p>
              <p><strong>Intent:</strong> High-impact, authoritative display presence commanding user confidence and eliminating customer booking friction.</p>
            </div>
          </div>
        </div>

        {/* Typographic Scale in Action */}
        <div className="border-2 border-black bg-white p-5 shadow-[3px_3px_0_0_#000] space-y-4">
          <p className="font-mono text-[10px] font-bold uppercase text-zinc-500">
            Figma Text Style Hierarchy &amp; Specimen Scale (Montserrat Only)
          </p>
          <div className="space-y-3 divide-y divide-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2">
              <span className="font-mono text-[11px] text-zinc-500 w-36 shrink-0">HEADING · 32px</span>
              <span className={`${montserrat.className} text-2xl sm:text-3xl font-black text-black uppercase tracking-tight`}>
                Live Video Consultation with Showroom Specialists
              </span>
              <span className="font-mono text-[10px] text-zinc-500">Montserrat Black / -0.02em</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2">
              <span className="font-mono text-[11px] text-zinc-500 w-36 shrink-0">BODY · 18px</span>
              <span className={`${montserrat.className} text-lg font-bold text-zinc-900`}>
                Customer Scheduler: Pre-Call Floor Intake &amp; Requirements
              </span>
              <span className="font-mono text-[10px] text-zinc-500">Montserrat SemiBold / 1.3</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2">
              <span className="font-mono text-[11px] text-zinc-500 w-36 shrink-0">PARAGRAPH · 14px</span>
              <span className={`${montserrat.className} text-xs sm:text-sm font-normal text-zinc-700 leading-relaxed max-w-xl`}>
                Direct call from the merchant site gives sales associates full customer context before picking up the session.
              </span>
              <span className="font-mono text-[10px] text-zinc-500">Montserrat Regular / 1.55</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2">
              <span className="font-mono text-[11px] text-zinc-500 w-36 shrink-0">SMALL TEXT · 12px</span>
              <span className={`${montserrat.className} text-xs font-medium text-zinc-600`}>
                Nebraska Furniture Mart · Stepped 5-Beat In-Store Appointment Journey
              </span>
              <span className="font-mono text-[10px] text-zinc-500">Montserrat Medium / 1.4</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pt-2">
              <span className="font-mono text-[11px] text-zinc-500 w-36 shrink-0">TINY · 10px</span>
              <span className={`${montserrat.className} text-xs font-bold uppercase tracking-wider text-[#1976D2]`}>
                STAGE 02 · [WEBRTC CONNECTED] · $22.4K REVENUE
              </span>
              <span className="font-mono text-[10px] text-zinc-500">Montserrat Bold / +0.06em</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. COLOGRAPHY (COLOR SYSTEM)
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 border-b border-black/15 pb-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#1976D2]" />
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-black">
              02. Colography &amp; Color Palette Tokens
            </h4>
          </div>
          <span className="font-mono text-[10px] text-zinc-500">Click to copy HEX</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {colors.map((c) => {
            const isCopied = copiedColor === c.hex;
            return (
              <button
                key={c.hex}
                type="button"
                onClick={() => copyHex(c.hex)}
                className="border-2 border-black bg-white p-3 text-left shadow-[3px_3px_0_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#000] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`h-16 w-full border border-black mb-2 flex items-center justify-center font-mono text-xs font-black ${c.bgClass} ${c.textClass}`}
                  >
                    {isCopied ? "COPIED! ✓" : c.hex}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-1">
                    <p className="font-mono text-xs font-black uppercase text-zinc-900">{c.name}</p>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase">{c.role}</span>
                  </div>
                  <p className="text-[11px] text-zinc-600 mt-1 font-sans leading-snug">{c.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Color Role Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className="border border-black bg-white p-3.5 text-xs text-zinc-700 space-y-1">
            <span className="font-mono text-[10px] font-black uppercase text-[#1976D2] block">1. Color = Action Type</span>
            <p>Teal is brand identity, Sky Blue is booking action, Pink/Coral is Show &amp; Sell launch, Yellow is in-call checkout. The palette teaches the workflow.</p>
          </div>
          <div className="border border-black bg-white p-3.5 text-xs text-zinc-700 space-y-1">
            <span className="font-mono text-[10px] font-black uppercase text-[#00C16A] block">2. Real-Time Status Clarity</span>
            <p>Green pulses immediately communicate store associate readiness. Shoppers instantly know if a real human specialist is currently standing on the floor.</p>
          </div>
          <div className="border border-black bg-white p-3.5 text-xs text-zinc-700 space-y-1">
            <span className="font-mono text-[10px] font-black uppercase text-[#0F172A] block">3. Zero Visual Fatigue</span>
            <p>Clean white canvas for day-long showroom desktop usage, dynamically switching to deep dark WebRTC canvas during calls to frame the physical merchandise.</p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PRODUCTION FIGMA CANVAS & COMPONENT ARCHITECTURE (UNCROPPED HD)
      ───────────────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 border-b border-black/15 pb-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#FAED00]" />
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-black">
              03. Production Figma Canvas &amp; Component Architecture
            </h4>
          </div>
          <span className="font-mono text-[10px] text-zinc-500">Uncropped HD Specimen · Node #1165-44</span>
        </div>

        <div className="border-2 border-black bg-white p-4 sm:p-6 shadow-[4px_4px_0_0_#000] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-wider text-black">
                Full Production Canvas (Zero Edge Crop · Complete Layers &amp; Properties)
              </p>
              <p className="text-xs text-zinc-600 mt-0.5">
                Displaying 100% of the canvas from left sidebar (Layers/Pages) to right panel (Properties &amp; Dev Mode). Click image to inspect in full HD.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-mono text-[10px] font-bold uppercase bg-zinc-100 text-zinc-600 px-2.5 py-1 border border-zinc-300">
                Locked · View Only
              </span>
            </div>
          </div>

          {/* 100% Uncropped Image Container with Natural Aspect Ratio (5880 x 3540) */}
          <div className="relative w-full border-2 border-black bg-[#1E1E1E] overflow-hidden shadow-[3px_3px_0_0_#000]">
            {/* Native Aspect Ratio Box matching exact 5880x3540 image proportions */}
            <div className="relative w-full aspect-[5880/3540]">
              <Image
                src="/case-studies/parla/parla_figma.webp"
                alt="Parla Retail Production Figma Canvas Uncropped 6K HD"
                fill
                unoptimized
                priority
                className="object-contain w-full h-full"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* Quick Action Overlay (Bottom Right) */}
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-10">
              <a
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-black/90 hover:bg-black text-[#FAED00] border border-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <ArrowSquareOut size={14} weight="bold" />
                <span>Open Live in Figma ↗</span>
              </a>
            </div>
          </div>

          {/* Figma Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-[11px]">
            <div className="border border-black bg-[#FAF8F5] p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-[#1976D2]">
                <FileCode size={16} weight="bold" />
                <strong className="uppercase">Master Components</strong>
              </div>
              <p className="text-zinc-600 text-[11px] font-sans">
                Reusable <code className="font-mono text-[10px]">Store_Location_Card</code>, <code className="font-mono text-[10px]">Store_Services_Card</code>, and <code className="font-mono text-[10px]">Store_Date_&amp;_Time_Card</code>.
              </p>
            </div>

            <div className="border border-black bg-[#FAF8F5] p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-[#FF462D]">
                <DeviceMobile size={16} weight="bold" />
                <strong className="uppercase">Multi-Flow Testing</strong>
              </div>
              <p className="text-zinc-600 text-[11px] font-sans">
                Mapped interactive flows for both desktop and mobile stepped customer funnels.
              </p>
            </div>

            <div className="border border-black bg-[#FAF8F5] p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-[#00C16A]">
                <ShieldCheck size={16} weight="bold" />
                <strong className="uppercase">Safe View-Only Access</strong>
              </div>
              <p className="text-zinc-600 text-[11px] font-sans">
                Locked canvas permission allowing design leads to inspect auto-layout and tokens without editing rights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
