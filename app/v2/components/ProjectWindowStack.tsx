"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "@phosphor-icons/react";
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "framer-motion";

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  href: string;
  liveUrl?: string;
  isHighlight?: boolean;
  image?: string;
  mockupType: "parla" | "ezra" | "forma";
  techStack?: string[];
  description?: string;
}



function VidyasKitchenDualDeviceMockup() {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] md:min-h-[340px] lg:max-h-[440px] bg-[#0A0D12] border-2 border-black p-3 sm:p-5 flex flex-col justify-center items-center relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] select-none">
      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Dual Devices Composition: iPhone (Left - Reduced) + MacBook (Right - Increased) */}
      <div className="relative z-10 w-full flex flex-row items-center justify-center gap-2.5 sm:gap-4 md:gap-5 lg:gap-6 max-w-[620px] mx-auto pb-7 sm:pb-9">
        
        {/* ─── LEFT: iPhone / Mobile Mockup (Straight angle, no tilt) ─── */}
        <div className="relative w-[23%] sm:w-[22%] max-w-[115px] shrink-0 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
          {/* iPhone Silver Titanium / Aluminum Chassis */}
          <div className="relative bg-gradient-to-br from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1] p-[2.5px] sm:p-[3.5px] rounded-[16px] sm:rounded-[20px] border-[1.5px] sm:border-[2px] border-[#94A3B8] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_6px_16px_rgba(0,0,0,0.5)]">
            
            {/* Dynamic Island / Speaker Notch Pill */}
            <div className="absolute top-[5px] sm:top-[6.5px] left-1/2 -translate-x-1/2 w-6 sm:w-8 h-1.5 sm:h-2 bg-[#09090b] rounded-full z-20 flex items-center justify-end pr-1 border border-black/40">
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-[#1c3d5a]/70" />
            </div>

            {/* Screen Bezel & Container displaying the exact Browse Menu screen */}
            <div className="relative w-full aspect-[438/956] bg-black rounded-[13px] sm:rounded-[16px] overflow-hidden border border-black/80">
              <Image
                src="/case-studies/vidyas-kitchen/vidyas-kitchen-mobile-menu.png"
                alt="Vidya's Kitchen Browse Menu Mobile App"
                fill
                unoptimized
                sizes="(max-width: 640px) 130px, 160px"
                className="object-cover object-top filter contrast-[1.02]"
                priority
              />

              {/* Gloss Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
            </div>

            {/* Bottom Home Indicator Line */}
            <div className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-8 sm:w-10 h-[2px] bg-white/60 rounded-full z-20 pointer-events-none" />
          </div>

          {/* Badge: MOBILE MENU */}
          <div className="absolute -bottom-2 sm:-bottom-2.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-[#00C16A] text-black font-mono font-black text-[7px] sm:text-[8px] uppercase tracking-wider border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap z-20">
            BROWSE MENU
          </div>
        </div>

        {/* ─── RIGHT: MacBook / Desktop Mockup (Increased Size) ─── */}
        <div className="relative w-[73%] sm:w-[75%] max-w-[420px] shrink-0 drop-shadow-[0_18px_36px_rgba(0,0,0,0.7)] hover:scale-[1.02] transition-transform duration-300">
          {/* MacBook Top Lid Display in Silver Anodized Finish */}
          <div className="relative bg-gradient-to-b from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1] p-[4px] sm:p-[6px] rounded-t-[12px] sm:rounded-t-[16px] border-[2px] border-b-0 border-[#94A3B8] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
            
            {/* Top Webcam Notch / Bezel */}
            <div className="absolute top-[3.5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full flex items-center justify-center z-20">
              <div className="w-1 h-1 rounded-full bg-[#18181b] border border-[#64748b]" />
            </div>

            {/* Laptop Screen Display */}
            <div className="relative w-full aspect-[1024/567] bg-[#0A0D12] rounded-t-[8px] sm:rounded-t-[11px] overflow-hidden border border-black flex items-center justify-center">
              <Image
                src="/case-studies/vidyas-kitchen/vidyas-kitchen-admin-dashboard.png"
                alt="Vidya's Kitchen Admin Dashboard"
                fill
                unoptimized
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 420px, 500px"
                className="object-contain filter contrast-[1.02]"
                priority
              />
              {/* Screen Glare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* MacBook Base Keyboard Chassis & Notch Lip in Silver Aluminum */}
          <div className="relative w-[106%] -left-[3%] h-[8px] sm:h-[10px] bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-[5px] border-[2px] border-[#94A3B8] shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex justify-center">
            {/* Display Open Thumb Groove */}
            <div className="w-14 sm:w-20 h-[3px] bg-[#64748B]/60 rounded-b-sm border-t border-white/40" />
          </div>

          {/* Badge: ADMIN DASHBOARD */}
          <div className="absolute -bottom-2 sm:-bottom-2.5 right-3 sm:right-6 px-1.5 py-0.5 bg-[#FAED00] text-black font-mono font-black text-[7.5px] sm:text-[8.5px] uppercase tracking-wider border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap z-20">
            ADMIN DASHBOARD
          </div>
        </div>

      </div>

      {/* Floating Link Pill Overlay — Stays above the device visual */}
      <Link
        href="https://www.vidyaskitchenhome.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between bg-black/90 hover:bg-black backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 border border-white/20 transition-all text-white font-mono text-[10px] sm:text-xs z-30 shadow-lg"
      >
        <span className="font-bold uppercase tracking-wider truncate">
          VIDYA&apos;S KITCHEN // PWA / WHATSAPP ORDERING
        </span>
        <ArrowUpRight weight="bold" className="w-3.5 h-3.5 shrink-0 text-[#FAED00]" />
      </Link>
    </div>
  );
}

function VidyasKitchenArchitectureVisual() {
  return (
    <div className="w-full h-full min-h-[380px] bg-[#0D1117] border-2 border-black p-4 sm:p-5 text-white font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#30363D] pb-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF462D]" />
          <span className="text-xs font-bold text-[#FAED00] uppercase tracking-wider">
            SYSTEM ARCHITECTURE // VIDYA&apos;S KITCHEN STACK
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 border border-emerald-500/30 px-2 py-0.5 bg-emerald-950/40 font-bold">
          FULL-STACK
        </span>
      </div>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-[10px] uppercase text-zinc-400 font-mono">STACK:</span>
        <span className="text-xs px-2.5 py-1 bg-[#0070F3] text-white font-bold border border-blue-400">React (PWA)</span>
        <span className="text-xs px-2.5 py-1 bg-[#3ECF8E] text-black font-bold border border-emerald-400">Supabase</span>
        <span className="text-xs px-2.5 py-1 bg-[#F59E0B] text-black font-bold border border-amber-400">SQL Database</span>
        <span className="text-xs px-2.5 py-1 bg-[#3776AB] text-white font-bold border border-sky-400">Python Automation</span>
        <span className="text-xs px-2.5 py-1 bg-[#25D366] text-black font-bold border border-emerald-400">WhatsApp Gateway</span>
      </div>

      {/* Visual Pipeline Flow Diagram */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs">
        <div className="p-3 bg-[#161B22] border border-[#30363D] flex flex-col items-center justify-center">
          <span className="text-[#0070F3] font-bold">1. FRONTEND PWA</span>
          <span className="text-[10px] text-zinc-400 mt-1">React + PWA Caching</span>
        </div>
        <div className="p-3 bg-[#161B22] border border-[#30363D] flex flex-col items-center justify-center">
          <span className="text-[#3ECF8E] font-bold">2. BACKEND &amp; DATA</span>
          <span className="text-[10px] text-zinc-400 mt-1">Supabase + PostgreSQL</span>
        </div>
        <div className="p-3 bg-[#161B22] border border-[#30363D] flex flex-col items-center justify-center">
          <span className="text-[#F59E0B] font-bold">3. ORDER ENGINE</span>
          <span className="text-[10px] text-zinc-400 mt-1">Python Service Scripts</span>
        </div>
        <div className="p-3 bg-[#161B22] border border-[#30363D] flex flex-col items-center justify-center">
          <span className="text-[#25D366] font-bold">4. DISPATCH</span>
          <span className="text-[10px] text-zinc-400 mt-1">WhatsApp Instant Order</span>
        </div>
      </div>
    </div>
  );
}

// Single Stacking Window Card Component
function WindowCard({
  item,
  index,
  total,
  scrollYProgress,
}: {
  item: ProjectItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const [showArchVisual, setShowArchVisual] = useState(false);
  const isVidyasKitchen = item.id === "02";

  // Sticky top docking offset: exactly 28px downward offset per card for clean window tabs
  const stickyTop = 76 + index * 28;

  return (
    <div
      className="sticky w-full mb-8 sm:mb-16 last:mb-0"
      style={{
        top: `${stickyTop}px`,
        zIndex: index + 10,
      }}
    >
      <div
        className="w-full h-auto lg:h-[530px] flex flex-col bg-white border-2 border-black shadow-[0px_10px_25px_rgba(0,0,0,0.1),4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[0px_10px_25px_rgba(0,0,0,0.1),6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative z-10"
      >
        {/* ─── Browser / Window Titlebar Header ─── */}
        <div className="h-[38px] sm:h-[42px] shrink-0 px-2.5 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none gap-2">
          {/* Left: Window Dots + Instance identifier */}
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F56] border border-black/40" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E] border border-black/40" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27C93F] border border-black/40" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-black ml-1 sm:ml-2 truncate max-w-[140px] sm:max-w-[220px] md:max-w-none">
              WIN_{item.num} // {item.title}
            </span>
          </div>

          {/* Right side: Category badge (on larger screens) + Action link */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden sm:inline-block px-2.5 py-0.5 bg-black text-[#FAED00] font-black text-[9px] uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {item.category}
            </div>

            <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10px]">
              {item.liveUrl && (
                <span className="hidden md:inline-flex items-center gap-1 text-emerald-700 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  PROD
                </span>
              )}
              <Link
                href={item.liveUrl || item.href}
                target={item.liveUrl ? "_blank" : undefined}
                rel={item.liveUrl ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 text-black font-black uppercase hover:text-[#FF462D] transition-colors py-0.5 px-1.5 sm:px-0 bg-black/5 sm:bg-transparent rounded sm:rounded-none"
              >
                <span>{item.liveUrl ? "LIVE" : "CASE STUDY"}</span>
                <ArrowUpRight weight="bold" className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Window Body: Uniform Height 12-Column Layout ─── */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 bg-white overflow-hidden">
          
          {/* Left: Big Monospace Number & Details */}
          <div className="lg:col-span-5 p-4 sm:p-6 lg:p-7 flex flex-col justify-between h-full min-h-0 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white overflow-y-auto">
            <div>
              {/* Monospace Project Index */}
              <div className="flex items-baseline justify-between mb-1 sm:mb-2 font-mono">
                <span className="text-4xl min-[360px]:text-5xl sm:text-6xl font-black tracking-tighter leading-none text-black select-none">
                  {item.num}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  CASE_FILE // {item.num} OF 03
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-sans leading-tight mb-1 sm:mb-1.5">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-sm font-bold uppercase tracking-wide text-[#FF462D] font-mono mb-2.5 sm:mb-3.5">
                {item.category}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm font-sans text-zinc-700 leading-relaxed uppercase mb-3.5 sm:mb-5 font-semibold">
                {item.description ||
                  (item.id === "01"
                    ? "Conversion-driven ecommerce scheduling platform for high-value retail appointments across UK & US markets."
                    : item.id === "02"
                    ? "Full-stack Progressive Web App with zero-friction WhatsApp ordering flow and automated business dispatch."
                    : "Intelligent STEM hardware builder platform with visual block coding and AI agent integration.")}
              </p>

              {/* Tech Stack Chips */}
              {item.techStack && (
                <div>
                  <span className="text-[8.5px] sm:text-[9px] font-mono uppercase text-zinc-400 block mb-1.5 font-bold">TECH SPEC:</span>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 bg-black text-white uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons at bottom of info panel */}
            <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 shrink-0">
              <Link
                href={item.liveUrl || item.href}
                target={item.liveUrl ? "_blank" : undefined}
                rel={item.liveUrl ? "noopener noreferrer" : undefined}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-[#FF462D] text-white hover:bg-black font-mono font-black text-[11px] sm:text-xs uppercase tracking-wider border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center"
              >
                <span>{item.liveUrl ? "OPEN LIVE PRODUCT" : "VIEW CASE STUDY"}</span>
                <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
              </Link>

              {isVidyasKitchen && (
                <button
                  type="button"
                  onClick={() => setShowArchVisual((prev) => !prev)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 bg-[#FAED00] text-black hover:bg-[#ffe600] font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer text-center"
                >
                  <Terminal weight="bold" className="w-3.5 h-3.5" />
                  <span>{showArchVisual ? "SHOW PREVIEW" : "VIEW ARCHITECTURE"}</span>
                </button>
              )}
            </div>
          </div>

          {/* Right: Interactive Mockup Visual or Contained Architecture Visual */}
          <div className="lg:col-span-7 p-3 sm:p-5 lg:p-7 bg-[#F8F9FA] flex flex-col justify-center items-center relative overflow-hidden h-full min-h-0">
            {isVidyasKitchen && showArchVisual ? (
              <div className="w-full h-full max-h-[420px] overflow-y-auto">
                <VidyasKitchenArchitectureVisual />
              </div>
            ) : isVidyasKitchen ? (
              <div className="w-full h-full flex items-center justify-center">
                <VidyasKitchenDualDeviceMockup />
              </div>
            ) : (
              <div className="w-full h-full min-h-[190px] sm:min-h-[260px] md:min-h-[300px] lg:max-h-[420px] aspect-[16/10] relative bg-black border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group/mockup flex items-center justify-center">
                {item.image ? (
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover contrast-105 group-hover/mockup:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover/mockup:bg-transparent transition-colors pointer-events-none" />
                    
                    {/* Floating Link Pill Overlay */}
                    <Link
                      href={item.liveUrl || item.href}
                      target={item.liveUrl ? "_blank" : undefined}
                      rel={item.liveUrl ? "noopener noreferrer" : undefined}
                      className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between bg-black/85 hover:bg-black backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 border border-white/20 transition-all text-white font-mono text-[10px] sm:text-xs z-10"
                    >
                      <span className="font-bold uppercase tracking-wider truncate">
                        {item.title} // {item.category}
                      </span>
                      <ArrowUpRight weight="bold" className="w-3.5 h-3.5 shrink-0 text-[#FAED00]" />
                    </Link>
                  </>
                ) : (
                  <div className="w-full h-full bg-zinc-900 p-4 sm:p-6 flex flex-col justify-between text-white font-mono">
                    <span className="text-xs uppercase tracking-widest text-zinc-400">
                      {item.title}
                    </span>
                    <Link
                      href={item.liveUrl || item.href}
                      target={item.liveUrl ? "_blank" : undefined}
                      rel={item.liveUrl ? "noopener noreferrer" : undefined}
                      className="text-xs font-black uppercase text-[#FAED00] hover:underline"
                    >
                      VISIT LIVE SITE ↗
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// Master Stacking Controller
export default function ProjectWindowStack({ projects }: { projects: ProjectItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative w-full max-w-[1320px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 pb-8 sm:pb-14">
      {projects.map((project, idx) => (
        <WindowCard
          key={project.id}
          item={project}
          index={idx}
          total={projects.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

