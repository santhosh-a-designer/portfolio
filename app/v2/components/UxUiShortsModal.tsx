"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight, CaretLeft, CaretRight, Play, FilmStrip, Sparkle } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/components/LenisProvider";

import { IRSTUNNER_UX_SHORT } from "@/lib/uxShortProjects/irStunner";
import { IRASUS_UX_SHORT } from "@/lib/uxShortProjects/irasus";
import { INDIAONE_ATM_UX_SHORT } from "@/lib/uxShortProjects/indiaOneAtm";

export interface UxShortItem {
  id: string;
  projectLabel: string;
  projectTitle: string;
  tagline: string;
  tools: string;
  duration?: string;
  liveUrl?: string;
  liveUrlDisplay?: string;
  overview: string;
  uxUi?: string;
  development?: string;
  accent: string;
  marketingStats?: { label: string; value: string }[];
  packagingImages?: { src: string; alt: string; label?: string }[];
  showreel?: { src: string; mp4Src?: string; mimeType?: string; title?: string };
  showreelVideoPairs?: {
    sectionTitle: string;
    videos: { id: string; label: string; caption: string; src: string }[];
  }[];
}

export const UX_SHORTS_DATA: UxShortItem[] = [
  {
    id: "p1",
    projectLabel: "Project 1",
    projectTitle: "IR Stunner",
    tagline: "Smart hardware, 3D packaging & visualizer",
    tools: IRSTUNNER_UX_SHORT.tools,
    duration: IRSTUNNER_UX_SHORT.duration,
    liveUrl: IRSTUNNER_UX_SHORT.liveUrl,
    liveUrlDisplay: IRSTUNNER_UX_SHORT.liveUrlDisplay,
    overview: IRSTUNNER_UX_SHORT.overview,
    uxUi: IRSTUNNER_UX_SHORT.uxUi,
    development: IRSTUNNER_UX_SHORT.development,
    accent: "#FF462D",
    marketingStats: IRSTUNNER_UX_SHORT.marketingStats,
    packagingImages: IRSTUNNER_UX_SHORT.packagingImages,
  },
  {
    id: "p2",
    projectLabel: "Project 2",
    projectTitle: "iRasus",
    tagline: "EV battery telemetry & fleet intelligence system",
    tools: IRASUS_UX_SHORT.tools,
    duration: IRASUS_UX_SHORT.duration,
    overview: IRASUS_UX_SHORT.overview,
    uxUi: IRASUS_UX_SHORT.uxUi,
    development: IRASUS_UX_SHORT.development,
    accent: "#0FE0E3",
    marketingStats: IRASUS_UX_SHORT.marketingStats,
    showreel: IRASUS_UX_SHORT.showreel,
  },
  {
    id: "p3",
    projectLabel: "Project 3",
    projectTitle: "IndiaOne ATM Manager",
    tagline: "Multi-lingual rural banking kiosk workflow",
    tools: INDIAONE_ATM_UX_SHORT.tools,
    duration: INDIAONE_ATM_UX_SHORT.duration,
    overview: INDIAONE_ATM_UX_SHORT.overview,
    uxUi: INDIAONE_ATM_UX_SHORT.uxUi,
    development: INDIAONE_ATM_UX_SHORT.development,
    accent: "#FAED00",
    showreelVideoPairs: INDIAONE_ATM_UX_SHORT.showreelVideoPairs,
  },
];

interface UxUiShortsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectId?: string;
}

export default function UxUiShortsModal({
  isOpen,
  onClose,
  initialProjectId = "p1",
}: UxUiShortsModalProps) {
  const [selectedId, setSelectedId] = useState(initialProjectId);
  const lenis = useLenis();

  useEffect(() => {
    if (initialProjectId) {
      setSelectedId(initialProjectId);
    }
  }, [initialProjectId]);

  // Complete background and Lenis scroll freeze while modal is open
  useEffect(() => {
    if (!isOpen) return;

    if (lenis) {
      lenis.stop();
    }

    const scrollY = window.scrollY;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPos = document.body.style.position;
    const prevBodyTop = document.body.style.top;
    const prevBodyWidth = document.body.style.width;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.position = prevBodyPos;
      document.body.style.top = prevBodyTop;
      document.body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);

      if (lenis) {
        lenis.start();
      }
    };
  }, [isOpen, lenis, onClose]);

  const currentProject =
    UX_SHORTS_DATA.find((p) => p.id === selectedId) || UX_SHORTS_DATA[0];

  const currentIndex = UX_SHORTS_DATA.findIndex((p) => p.id === selectedId);

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + UX_SHORTS_DATA.length) % UX_SHORTS_DATA.length;
    setSelectedId(UX_SHORTS_DATA[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % UX_SHORTS_DATA.length;
    setSelectedId(UX_SHORTS_DATA[nextIdx].id);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl max-h-[92vh] bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col z-10 overflow-hidden"
          >
            {/* Modal Header Bar */}
            <div className="p-3 sm:p-4 bg-black text-white border-b-2 border-black flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 font-mono">
                <span
                  style={{ backgroundColor: currentProject.accent }}
                  className="w-2.5 h-2.5 border border-white"
                />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white">
                  // UX_UI_SHORTS / [{currentProject.projectLabel}]
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 font-mono text-xs font-bold bg-zinc-900 text-white px-2 py-0.5 border border-zinc-700">
                  <span>{currentIndex + 1}</span>
                  <span className="text-zinc-500">/</span>
                  <span>{UX_SHORTS_DATA.length}</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-8 h-8 bg-white text-black hover:bg-[#FAED00] transition-colors border border-black flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono font-black"
                  aria-label="Close modal"
                >
                  <X weight="bold" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Project Quick Tab Strip */}
            <div className="flex border-b-2 border-black bg-zinc-100 overflow-x-auto scrollbar-none shrink-0">
              {UX_SHORTS_DATA.map((proj) => {
                const isActive = proj.id === currentProject.id;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => setSelectedId(proj.id)}
                    className={`px-3 sm:px-4 py-2 sm:py-2.5 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shrink-0 border-r-2 border-black transition-colors cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#FAED00] text-black font-black"
                        : "bg-white text-zinc-600 hover:bg-zinc-50 hover:text-black"
                    }`}
                  >
                    <span>{proj.projectLabel}:</span>
                    <span className="truncate max-w-[120px] sm:max-w-[180px]">{proj.projectTitle}</span>
                  </button>
                );
              })}
            </div>

            {/* Modal Body: Scrollable Content Area */}
            <div
              data-lenis-prevent="true"
              className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-8 bg-[#F4F4F0]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Overview Card */}
                  <div className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-black text-[#FF462D] uppercase tracking-widest">
                        {currentProject.tagline}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                        {currentProject.tools}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-mono uppercase tracking-tight text-black">
                        {currentProject.projectTitle}
                      </h3>
                      {currentProject.liveUrl && (
                        <Link
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono font-black text-black hover:text-[#FF462D] underline underline-offset-4"
                        >
                          <span>VISIT {currentProject.liveUrlDisplay || "LIVE SITE"}</span>
                          <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>

                    <p className="text-xs sm:text-[13px] text-zinc-700 font-sans leading-relaxed font-medium">
                      {currentProject.overview}
                    </p>
                  </div>

                  {/* Impact Stats Banner */}
                  {currentProject.marketingStats && currentProject.marketingStats.length > 0 && (
                    <div className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-black">
                        <span className="text-xs font-mono font-black uppercase text-black">
                          // KEY PERFORMANCE METRICS
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">
                          FIELD VALIDATION
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                        {currentProject.marketingStats.map((stat) => (
                          <div key={stat.label} className="p-3 bg-zinc-50 border border-black flex flex-col justify-between">
                            <span className="text-[9.5px] font-mono font-bold text-zinc-500 uppercase mb-1">
                              {stat.label}
                            </span>
                            <span className="text-base sm:text-lg font-mono font-black text-black tracking-tight">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* UX Strategy & Implementation Split Grid */}
                  {(currentProject.uxUi || currentProject.development) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentProject.uxUi && (
                        <div className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                          <span className="text-[10px] font-mono font-black text-[#FF462D] uppercase tracking-wider block mb-2">
                            // 01. UX ARCHITECTURE &amp; FLOWS
                          </span>
                          <p className="text-xs sm:text-[13px] text-zinc-700 font-sans leading-relaxed">
                            {currentProject.uxUi}
                          </p>
                        </div>
                      )}
                      {currentProject.development && (
                        <div className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                          <span className="text-[10px] font-mono font-black text-black uppercase tracking-wider block mb-2">
                            // 02. SYSTEM HANDOFF &amp; CODE
                          </span>
                          <p className="text-xs sm:text-[13px] text-zinc-700 font-sans leading-relaxed">
                            {currentProject.development}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Video Showreel (e.g. iRasus) */}
                  {currentProject.showreel && (
                    <div className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-black">
                        <span className="text-xs font-mono font-black uppercase text-black flex items-center gap-2">
                          <FilmStrip weight="bold" className="w-4 h-4 text-[#FF462D]" />
                          // PRODUCT SHOWREEL WALKTHROUGH
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">
                          VIDEO DEMO
                        </span>
                      </div>
                      <div className="border-2 border-black bg-black overflow-hidden aspect-video relative flex items-center justify-center">
                        <video
                          controls
                          playsInline
                          className="w-full h-full object-contain"
                          src={currentProject.showreel.mp4Src || currentProject.showreel.src}
                        >
                          <source src={currentProject.showreel.mp4Src} type="video/mp4" />
                          <source src={currentProject.showreel.src} type="video/quicktime" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}

                  {/* Multi-role Video Pairs (e.g. IndiaOne ATM Manager: Admin vs Loadman) */}
                  {currentProject.showreelVideoPairs && currentProject.showreelVideoPairs.length > 0 && (
                    <div className="space-y-4">
                      {currentProject.showreelVideoPairs.map((section) => (
                        <div
                          key={section.sectionTitle}
                          className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                          <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-black">
                            <span className="text-xs font-mono font-black uppercase text-black">
                              // {section.sectionTitle} WORKFLOW WALKTHROUGHS
                            </span>
                            <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">
                              DUAL ROLE SYSTEM
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.videos.map((vid) => (
                              <div key={vid.id} className="border border-black bg-zinc-50 p-2 flex flex-col">
                                <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase mb-1.5 truncate">
                                  {vid.caption}
                                </span>
                                <div className="border border-black bg-black aspect-[9/16] sm:aspect-video overflow-hidden">
                                  <video
                                    controls
                                    playsInline
                                    className="w-full h-full object-contain"
                                    src={vid.src}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Packaging Visuals (e.g. IR Stunner) */}
                  {currentProject.packagingImages && currentProject.packagingImages.length > 0 && (
                    <div className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-black">
                        <span className="text-xs font-mono font-black uppercase text-black">
                          // 4-PANEL PACKAGING FACINGS
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">
                          PRINT COLLATERAL
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {currentProject.packagingImages.map((img) => (
                          <div key={img.label} className="border border-black bg-zinc-50 p-2 flex flex-col">
                            <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase mb-1">
                              [{img.label}]
                            </span>
                            <div className="relative w-full aspect-square bg-zinc-100 flex items-center justify-center overflow-hidden">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                priority
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-contain p-1"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modal Footer Controls */}
            <div className="p-3 sm:p-4 bg-white border-t-2 border-black flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                className="px-3 sm:px-4 py-2 bg-white hover:bg-zinc-100 text-black border-2 border-black font-mono font-black text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
              >
                <CaretLeft weight="bold" className="w-4 h-4" />
                <span className="hidden sm:inline">PREV SHORT</span>
                <span className="sm:hidden">PREV</span>
              </button>

              <span className="text-[10px] sm:text-xs font-mono text-zinc-500 font-bold uppercase">
                {currentProject.projectLabel} of {UX_SHORTS_DATA.length}
              </span>

              <button
                type="button"
                onClick={handleNext}
                className="px-3 sm:px-4 py-2 bg-[#FAED00] hover:bg-[#faed00]/90 text-black border-2 border-black font-mono font-black text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
              >
                <span className="hidden sm:inline">NEXT SHORT</span>
                <span className="sm:hidden">NEXT</span>
                <CaretRight weight="bold" className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
