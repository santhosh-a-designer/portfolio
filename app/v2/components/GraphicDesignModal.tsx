"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, ArrowRight, ArrowLeft, Check, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { POSTER_PROJECTS } from "@/lib/graphicDesignProjects/posterProjects";
import type { GraphicDesignPosterProject } from "@/lib/graphicDesignTypes";

import { useLenis } from "@/components/LenisProvider";

interface GraphicDesignModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectId?: string;
}

export default function GraphicDesignModal({
  isOpen,
  onClose,
  initialProjectId = "project-1",
}: GraphicDesignModalProps) {
  const [selectedId, setSelectedId] = useState(initialProjectId);
  const lenis = useLenis();

  // Sync initial project when modal opens
  useEffect(() => {
    if (initialProjectId) {
      setSelectedId(initialProjectId);
    }
  }, [initialProjectId]);

  // Complete background and Lenis scroll freeze while modal is open
  useEffect(() => {
    if (!isOpen) return;

    // 1. Pause Lenis smooth scroll engine
    if (lenis) {
      lenis.stop();
    }

    // 2. Lock window & body position
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
    POSTER_PROJECTS.find((p) => p.id === selectedId) || POSTER_PROJECTS[0];

  const currentIndex = POSTER_PROJECTS.findIndex((p) => p.id === selectedId);

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + POSTER_PROJECTS.length) % POSTER_PROJECTS.length;
    setSelectedId(POSTER_PROJECTS[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % POSTER_PROJECTS.length;
    setSelectedId(POSTER_PROJECTS[nextIdx].id);
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
            <div className="p-3 sm:p-4 bg-[#FF462D] text-white border-b-2 border-black flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 bg-black" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider">
                  // GRAPHIC_DESIGN_ARCHIVE / [{currentProject.projectLabel}]
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 font-mono text-xs font-bold bg-black text-white px-2 py-0.5 border border-black">
                  <span>{currentIndex + 1}</span>
                  <span className="text-zinc-500">/</span>
                  <span>{POSTER_PROJECTS.length}</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-8 h-8 bg-black text-white hover:bg-white hover:text-black transition-colors border border-black flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  aria-label="Close modal"
                >
                  <X weight="bold" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Project Quick Tab Strip */}
            <div className="flex border-b-2 border-black bg-zinc-100 overflow-x-auto scrollbar-none shrink-0">
              {POSTER_PROJECTS.map((proj, idx) => {
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
                    <span className="truncate max-w-[110px] sm:max-w-[160px]">{proj.projectTitle}</span>
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
                  {/* Project Title & Overview Banner */}
                  <div className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-black text-[#FF462D] uppercase tracking-widest">
                        {currentProject.tagline}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                        PRINT &amp; BRAND IDENTITY
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-mono uppercase tracking-tight text-black mb-3">
                      {currentProject.projectTitle}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-700 font-sans leading-relaxed font-medium">
                      {currentProject.overview}
                    </p>
                  </div>

                  {/* ── Visual Assets Showcase ── */}

                  {/* 1. Before & After / Outside & Inside Pair */}
                  {!currentProject.hideImageBlock && currentProject.beforeAfter && (
                    <div className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-black">
                        <span className="text-xs font-mono font-black uppercase text-black">
                          // {currentProject.imagePairTitle || "BEFORE & AFTER"}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">
                          HIGH-RESOLUTION ASSET
                        </span>
                      </div>

                      {currentProject.useMainRowSingleImage ? (
                        <div className="flex justify-center p-3 sm:p-6 bg-zinc-50 border border-black">
                          <div className="relative w-full max-w-sm aspect-square">
                            <Image
                              src={currentProject.beforeAfter.newSrc}
                              alt={currentProject.beforeAfter.newAlt}
                              fill
                              priority
                              sizes="(max-width: 640px) 90vw, 400px"
                              className="object-contain"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Left Asset */}
                          <div className="border border-black bg-zinc-50 p-2 sm:p-3 flex flex-col">
                            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase mb-2">
                              {currentProject.id === "project-1" ? "[ORIGINAL STREET BOARD]" : "[EXTERIOR / OUTSIDE]"}
                            </span>
                            <div className="relative w-full h-56 sm:h-72 md:h-80 bg-zinc-100 flex items-center justify-center overflow-hidden">
                              <Image
                                src={currentProject.beforeAfter.oldSrc}
                                alt={currentProject.beforeAfter.oldAlt}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain p-2"
                              />
                            </div>
                          </div>

                          {/* Right Asset */}
                          <div className="border border-black bg-zinc-50 p-2 sm:p-3 flex flex-col">
                            <span className="text-[10px] font-mono font-black text-[#FF462D] uppercase mb-2">
                              {currentProject.id === "project-1" ? "[NEW REDESIGNED BOARD]" : "[INTERIOR / INSIDE]"}
                            </span>
                            <div className="relative w-full h-56 sm:h-72 md:h-80 bg-zinc-100 flex items-center justify-center overflow-hidden">
                              <Image
                                src={currentProject.beforeAfter.newSrc}
                                alt={currentProject.beforeAfter.newAlt}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain p-2"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 2. Third Panel: Sign Board (e.g. The Key) */}
                  {currentProject.thirdPanel && (
                    <div className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-black">
                        <span className="text-xs font-mono font-black uppercase text-black">
                          // EXTERIOR APPROACH SIGN BOARD
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">
                          WAYFINDING &amp; ENTRANCE
                        </span>
                      </div>
                      <div className="relative w-full h-72 sm:h-96 md:h-[450px] bg-zinc-50 border border-black flex items-center justify-center overflow-hidden">
                        <Image
                          src={currentProject.thirdPanel.src}
                          alt={currentProject.thirdPanel.alt}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, 800px"
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                  )}

                  {/* 3. Business Card Pair (Front & Back) */}
                  {currentProject.businessCardPair && (
                    <div className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-black">
                        <span className="text-xs font-mono font-black uppercase text-black">
                          // {currentProject.businessCardPair.blockTitle || "BUSINESS CARD IDENTITY"}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">
                          PRINT &amp; STATIONERY
                        </span>
                      </div>
                      <div
                        className={`grid gap-4 ${
                          currentProject.businessCardPair.first ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                        }`}
                      >
                        {currentProject.businessCardPair.first && (
                          <div className="border border-black bg-zinc-50 p-2 sm:p-3 flex flex-col">
                            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase mb-2">
                              [CARD FRONT]
                            </span>
                            <div className="relative w-full h-48 sm:h-56 bg-zinc-100 flex items-center justify-center overflow-hidden">
                              <Image
                                src={currentProject.businessCardPair.first.src}
                                alt={currentProject.businessCardPair.first.alt}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain p-2"
                              />
                            </div>
                          </div>
                        )}

                        <div className="border border-black bg-zinc-50 p-2 sm:p-3 flex flex-col">
                          <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase mb-2">
                            {currentProject.businessCardPair.first ? "[CARD BACK]" : "[BUSINESS CARD]"}
                          </span>
                          <div className="relative w-full h-48 sm:h-56 bg-zinc-100 flex items-center justify-center overflow-hidden">
                            <Image
                              src={currentProject.businessCardPair.second.src}
                              alt={currentProject.businessCardPair.second.alt}
                              fill
                              priority
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-contain p-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4. Packaging 4-Side Showcase (e.g. IR Stunner) */}
                  {currentProject.packagingImages && currentProject.packagingImages.length > 0 && (
                    <div className="p-4 sm:p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-black">
                        <span className="text-xs font-mono font-black uppercase text-black">
                          // PACKAGING DESIGN — 4 PANEL VIEW
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase">
                          BOX FACINGS
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

                      {currentProject.marketingStats && (
                        <div className="mt-4 pt-4 border-t border-black/10 grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {currentProject.marketingStats.map((stat) => (
                            <div key={stat.label} className="p-2 bg-zinc-50 border border-black/20">
                              <span className="text-[9px] font-mono text-zinc-500 uppercase block truncate">
                                {stat.label}
                              </span>
                              <span className="text-xs font-mono font-black text-black uppercase mt-0.5 block truncate">
                                {stat.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
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
                <span className="hidden sm:inline">PREV PROJECT</span>
                <span className="sm:hidden">PREV</span>
              </button>

              <span className="text-[10px] sm:text-xs font-mono text-zinc-500 font-bold uppercase">
                {currentProject.projectLabel} of {POSTER_PROJECTS.length}
              </span>

              <button
                type="button"
                onClick={handleNext}
                className="px-3 sm:px-4 py-2 bg-[#FAED00] hover:bg-[#faed00]/90 text-black border-2 border-black font-mono font-black text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
              >
                <span className="hidden sm:inline">NEXT PROJECT</span>
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
