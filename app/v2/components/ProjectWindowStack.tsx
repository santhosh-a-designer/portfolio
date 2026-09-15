"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "@phosphor-icons/react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

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

  // Calculate subtle depth dimming based on scroll progress (WITHOUT any horizontal scale)
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  // Dimming as card gets stacked over, while keeping left/right edges 100% flush
  const opacity = useTransform(
    scrollYProgress,
    [start, end, 1],
    index === total - 1 ? [1, 1, 1] : [1, 0.9, 0.82]
  );

  // Sticky top docking offset: exactly 28px downward offset per card for clean window tabs
  const stickyTop = 76 + index * 28;

  return (
    <div
      className="sticky w-full mb-8 sm:mb-12 last:mb-0 transition-all origin-top"
      style={{
        top: `${stickyTop}px`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          opacity,
        }}
        className="w-full h-auto lg:h-[530px] flex flex-col bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
      >
        {/* ─── Browser / Window Titlebar Header (Fixed Height) ─── */}
        <div className="h-[42px] shrink-0 px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none">
          {/* Left: Window Dots + Instance identifier */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/40" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-black ml-2 hidden sm:inline">
              WINDOW_{item.num} // {item.title}
            </span>
          </div>

          {/* Center: Category badge */}
          <div className="px-2.5 py-0.5 bg-black text-[#FAED00] font-black text-[9px] uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {item.category}
          </div>

          {/* Right: Project link status */}
          <div className="flex items-center gap-2 text-[10px]">
            {item.liveUrl && (
              <span className="hidden md:inline-flex items-center gap-1 text-emerald-700 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                PRODUCTION
              </span>
            )}
            <Link
              href={item.liveUrl || item.href}
              target={item.liveUrl ? "_blank" : undefined}
              rel={item.liveUrl ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1 text-black font-black uppercase hover:text-[#FF462D] transition-colors"
            >
              <span>{item.liveUrl ? "LIVE" : "CASE STUDY"}</span>
              <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ─── Window Body: Uniform Height 12-Column Layout ─── */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 bg-white overflow-hidden">
          
          {/* Left: Big Monospace Number & Details (Contained height with consistent padding) */}
          <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between h-full min-h-0 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white overflow-y-auto">
            <div>
              {/* Monospace Project Index */}
              <div className="flex items-baseline justify-between mb-2 font-mono">
                <span className="text-5xl sm:text-6xl font-black tracking-tighter leading-none text-black select-none">
                  {item.num}
                </span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  CASE_FILE // {item.num} OF 03
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-sans leading-tight mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#FF462D] font-mono mb-3.5">
                {item.category}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm font-sans text-zinc-700 leading-relaxed uppercase mb-5 font-semibold">
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
                  <span className="text-[9px] font-mono uppercase text-zinc-400 block mb-1.5 font-bold">TECH SPEC:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-bold px-2 py-0.5 bg-black text-white uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons at bottom of info panel */}
            <div className="pt-5 mt-4 border-t border-zinc-200 flex items-center gap-3 flex-wrap shrink-0">
              <Link
                href={item.liveUrl || item.href}
                target={item.liveUrl ? "_blank" : undefined}
                rel={item.liveUrl ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF462D] text-white hover:bg-black font-mono font-black text-xs uppercase tracking-wider border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span>{item.liveUrl ? "OPEN LIVE PRODUCT" : "VIEW CASE STUDY"}</span>
                <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
              </Link>

              {isVidyasKitchen && (
                <button
                  type="button"
                  onClick={() => setShowArchVisual((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#FAED00] text-black hover:bg-[#ffe600] font-mono font-bold text-xs uppercase tracking-wider border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                >
                  <Terminal weight="bold" className="w-3.5 h-3.5" />
                  <span>{showArchVisual ? "SHOW PREVIEW" : "VIEW ARCHITECTURE"}</span>
                </button>
              )}
            </div>
          </div>

          {/* Right: Interactive Mockup Visual or Contained Architecture Visual */}
          <div className="lg:col-span-7 p-4 sm:p-6 lg:p-7 bg-[#F8F9FA] flex flex-col justify-center items-center relative overflow-hidden h-full min-h-0">
            {isVidyasKitchen && showArchVisual ? (
              <div className="w-full h-full max-h-[420px] overflow-y-auto">
                <VidyasKitchenArchitectureVisual />
              </div>
            ) : (
              <div className="w-full h-full max-h-[420px] aspect-[16/10] relative bg-black border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group/mockup flex items-center justify-center">
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
                      className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/85 hover:bg-black backdrop-blur-sm px-3 py-2 border border-white/20 transition-all text-white font-mono text-xs z-10"
                    >
                      <span className="font-bold uppercase tracking-wider truncate">
                        {item.title} // {item.category}
                      </span>
                      <ArrowUpRight weight="bold" className="w-3.5 h-3.5 shrink-0 text-[#FAED00]" />
                    </Link>
                  </>
                ) : (
                  <div className="w-full h-full bg-zinc-900 p-6 flex flex-col justify-between text-white font-mono">
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
      </motion.div>
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
    <div ref={containerRef} className="relative w-full max-w-[1320px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 pb-20 sm:pb-24">
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

