"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import {
  X,
  CaretLeft,
  CaretRight,
  FilePdf,
  Check,
  Copy,
  Sparkle,
  DeviceMobile,
  Desktop,
  ArrowSquareOut,
  ShoppingBag,
  WhatsappLogo,
  CheckCircle,
  Truck,
  ForkKnife,
  Clock,
  ShieldCheck,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/components/LenisProvider";
import ModalImageWithSkeleton from "@/components/ModalImageWithSkeleton";
import { contrastGrade } from "@/lib/contrast";
import type { DesignSystemPdfMeta } from "@/lib/designSystemPdfMeta";
import { vidyasDesignSystem, type VidyasDesignSurface } from "@/lib/vidyasKitchenCaseStudyContent";
import { heroScreenForSurface } from "@/lib/vidyasDesignSystemScreens";

interface VidyasDesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfMeta: DesignSystemPdfMeta;
  initialSurfaceId?: VidyasDesignSurface["id"];
}

export default function VidyasDesignSystemModal({
  isOpen,
  onClose,
  pdfMeta,
  initialSurfaceId = "customer",
}: VidyasDesignSystemModalProps) {
  const [surfaceId, setSurfaceId] = useState<VidyasDesignSurface["id"]>(initialSurfaceId);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (initialSurfaceId) {
      setSurfaceId(initialSurfaceId);
    }
  }, [initialSurfaceId]);

  // Freeze background scroll
  useEffect(() => {
    if (!isOpen) return;

    if (lenis) lenis.stop();

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
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
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

      if (lenis) lenis.start();
    };
  }, [isOpen, lenis, onClose, surfaceId]);

  const surfaces = vidyasDesignSystem.surfaces;
  const currentIndex = surfaces.findIndex((s) => s.id === surfaceId);
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= surfaces.length - 1;

  const currentSurface = useMemo(
    () => surfaces.find((s) => s.id === surfaceId) ?? surfaces[0],
    [surfaceId, surfaces],
  );

  const heroScreen = useMemo(() => heroScreenForSurface(currentSurface.id), [currentSurface.id]);

  const handlePrev = () => {
    if (isFirst) return;
    setSurfaceId(surfaces[currentIndex - 1].id);
  };

  const handleNext = () => {
    if (isLast) return;
    setSurfaceId(surfaces[currentIndex + 1].id);
  };

  const copyHex = async (hex: string, token: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedToken(token);
      setTimeout(() => setCopiedToken(null), 1800);
    } catch {
      setCopiedToken(null);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 select-none">
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[100dvh] sm:h-auto sm:max-w-6xl sm:max-h-[94vh] bg-white border-0 sm:border-2 border-black sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col z-10 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-3 sm:p-4 bg-[#FF462D] text-white border-b-2 border-black flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 bg-black shrink-0" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider truncate">
                  // DESIGN_SYSTEM_SPEC / VIDYA&apos;S KITCHEN [v2.1]
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={pdfMeta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAED00] text-black border border-black font-mono text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-white transition-colors"
                >
                  <FilePdf weight="bold" size={13} />
                  <span>PDF SPEC (18 PAGES)</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 sm:p-1.5 bg-black hover:bg-zinc-800 text-white border border-black cursor-pointer transition-transform active:scale-95"
                  aria-label="Close Design System Modal"
                >
                  <X weight="bold" className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Surface Selector Navigation Tabs */}
            <div className="flex items-center overflow-x-auto border-b-2 border-black bg-zinc-100 p-1.5 sm:p-2 gap-1.5 shrink-0 scrollbar-none">
              {surfaces.map((s, idx) => {
                const isActive = s.id === surfaceId;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSurfaceId(s.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 border-2 border-black font-mono text-[11px] font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#FAED00] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5"
                        : "bg-white text-zinc-700 hover:bg-zinc-50 hover:text-black"
                    }`}
                  >
                    <span className="text-[9px] opacity-60">0{idx + 1}.</span>
                    <span>{s.tabLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-[#F4F4F0] space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSurface.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-6"
                >
                  {/* Top Overview Strip */}
                  <div className="border-2 border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b-2 border-black">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-black text-[#FAED00] font-mono text-[10px] font-black uppercase">
                          SURFACE · 0{currentIndex + 1}
                        </span>
                        <h2 className="text-base sm:text-lg font-black uppercase font-mono tracking-tight text-black">
                          {currentSurface.tabLabel} Experience Surface
                        </h2>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                        {currentSurface.meta.source}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-bold uppercase text-zinc-800 leading-relaxed max-w-4xl">
                      {currentSurface.caption}
                    </p>

                    {/* Metadata Specs Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-4 border-t border-black/10">
                      <div className="p-2.5 bg-zinc-50 border border-black/20">
                        <span className="text-[9px] font-mono font-bold uppercase text-zinc-500 block">ICONS</span>
                        <span className="text-xs font-mono font-black text-black">{currentSurface.meta.icons}</span>
                      </div>
                      <div className="p-2.5 bg-zinc-50 border border-black/20">
                        <span className="text-[9px] font-mono font-bold uppercase text-zinc-500 block">RADIUS TOKENS</span>
                        <span className="text-xs font-mono font-black text-black">{currentSurface.meta.radius}</span>
                      </div>
                      <div className="p-2.5 bg-zinc-50 border border-black/20">
                        <span className="text-[9px] font-mono font-bold uppercase text-zinc-500 block">MIN TOUCH TARGET</span>
                        <span className="text-xs font-mono font-black text-black">{currentSurface.meta.touch}</span>
                      </div>
                      <div className="p-2.5 bg-zinc-50 border border-black/20">
                        <span className="text-[9px] font-mono font-bold uppercase text-zinc-500 block">TYPOGRAPHY</span>
                        <span className="text-xs font-mono font-black text-black">Outfit (500–900)</span>
                      </div>
                    </div>
                  </div>

                  {/* Two Column Grid: Recreated Components & Color Tokens on Left, Live High-Res Screen on Right */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* LEFT COLUMN (7 Cols): Recreated Interactive Components & Color Swatches */}
                    <div className="lg:col-span-7 space-y-6">
                      
                      {/* 1. RECREATED NATIVE UI COMPONENTS (No blur, pixel-perfect vector rendering!) */}
                      <div className="border-2 border-black bg-white p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-black">
                          <span className="text-xs font-mono font-black uppercase text-black flex items-center gap-1.5">
                            <Sparkle weight="fill" className="text-[#FAED00] w-4 h-4" />
                            // RECREATED NATIVE COMPONENTS
                          </span>
                          <span className="text-[9px] font-mono font-bold uppercase text-zinc-400">
                            CRISP VECTOR · LIVE TOKENS
                          </span>
                        </div>

                        {/* Surface-Specific Recreated Components */}
                        {currentSurface.id === "customer" && (
                          <div className="space-y-4">
                            {/* Component A: Primary 56px CTA */}
                            <div className="p-4 bg-[#F5F5F7] border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                                [PRIMARY ACTION CTA · 56PX · RADIUS 20PX · #BD2320]
                              </span>
                              <button
                                type="button"
                                className="w-full h-14 bg-[#BD2320] hover:bg-[#a51d1a] active:scale-[0.99] text-white rounded-[20px] font-bold text-sm flex items-center justify-center gap-2 shadow-[0_8px_20px_-4px_rgba(189,35,32,0.4)] transition-all cursor-pointer"
                              >
                                <ShoppingBag weight="bold" size={18} />
                                <span>Place Home Meal Order · ₹180</span>
                              </button>
                            </div>

                            {/* Component B: Meal Schedule Segmented Chip Selector */}
                            <div className="p-4 bg-[#F5F5F7] border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                                [SCHEDULE SELECTOR CHIPS · TAP TARGET 44PX]
                              </span>
                              <div className="grid grid-cols-3 gap-2">
                                <div className="h-11 bg-[#BD2320] text-white rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold border border-[#BD2320] shadow-sm">
                                  <Clock size={15} weight="bold" />
                                  <span>Lunch (12:30 PM)</span>
                                </div>
                                <div className="h-11 bg-white text-zinc-700 rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold border border-zinc-200">
                                  <Clock size={15} />
                                  <span>Dinner (7:30 PM)</span>
                                </div>
                                <div className="h-11 bg-white text-zinc-700 rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold border border-zinc-200">
                                  <Clock size={15} />
                                  <span>Pre-Book Tomorrow</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {currentSurface.id === "landing" && (
                          <div className="space-y-4">
                            {/* Component A: High-Conversion WhatsApp Order CTA */}
                            <div className="p-4 bg-[#1A1A1A] text-white border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                                [MARKETING WHATSAPP CTA · FULL-WIDTH · #25D366]
                              </span>
                              <button
                                type="button"
                                className="w-full h-14 bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.99] text-black font-extrabold text-sm flex items-center justify-center gap-2.5 rounded-2xl shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-all cursor-pointer"
                              >
                                <WhatsappLogo weight="fill" size={22} className="text-black" />
                                <span className="tracking-wide">Order with Vidya Bot on WhatsApp</span>
                              </button>
                            </div>

                            {/* Component B: Desktop QR Landing Feature Card */}
                            <div className="p-4 bg-[#222222] text-white border border-black flex items-center justify-between gap-3">
                              <div>
                                <span className="text-[10px] font-mono text-[#FAED00] font-black uppercase block">
                                  SCAN TO LAUNCH PWA
                                </span>
                                <span className="text-xs text-zinc-300 font-medium block mt-0.5">
                                  Instant menu preview without app store friction
                                </span>
                              </div>
                              <span className="px-3 py-1 bg-white/10 text-white font-mono text-[10px] font-bold uppercase rounded border border-white/20">
                                Sivakasi Hub
                              </span>
                            </div>
                          </div>
                        )}

                        {currentSurface.id === "driver" && (
                          <div className="space-y-4">
                            {/* Component A: Driver Sunlight-Optimized Swipe to Complete Slider */}
                            <div className="p-4 bg-[#0A0A0A] text-white border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                                [SWIPE TO DELIVER SLIDER · HIGH CONTRAST SUNLIGHT SAFE]
                              </span>
                              <div className="relative h-14 bg-zinc-900 border-2 border-white/30 rounded-2xl flex items-center px-2 select-none overflow-hidden">
                                <div className="h-10 w-12 bg-[#00C16A] text-black rounded-xl flex items-center justify-center font-black shadow-md cursor-grab active:cursor-grabbing">
                                  <Truck weight="bold" size={20} />
                                </div>
                                <span className="flex-1 text-center font-mono text-xs font-black uppercase tracking-wider text-zinc-300">
                                  SWIPE TO CONFIRM DELIVERY ➔
                                </span>
                              </div>
                            </div>

                            {/* Component B: Cash vs UPI Instant Toggle */}
                            <div className="p-4 bg-[#0A0A0A] text-white border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                                [PAYMENT RECONCILIATION TOGGLE · ZERO DRIFT]
                              </span>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="p-3 bg-[#00C16A]/15 border-2 border-[#00C16A] rounded-xl text-center">
                                  <span className="block text-xs font-mono font-black text-[#00C16A]">COLLECT CASH</span>
                                  <span className="text-[10px] font-mono text-white/70">₹180 Exact change</span>
                                </div>
                                <div className="p-3 bg-zinc-900 border border-white/20 rounded-xl text-center">
                                  <span className="block text-xs font-mono font-bold text-zinc-400">PAID VIA UPI</span>
                                  <span className="text-[10px] font-mono text-zinc-500">Auto-verified</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {currentSurface.id === "dashboard" && (
                          <div className="space-y-4">
                            {/* Component A: Live Order Ticket Bar */}
                            <div className="p-4 bg-zinc-50 border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                                [KITCHEN OPS TICKET · LIVE STATUS PILL]
                              </span>
                              <div className="p-3 bg-white border border-black shadow-sm flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2.5">
                                  <span className="w-8 h-8 rounded-lg bg-[#BD2320] text-white font-mono font-bold text-xs flex items-center justify-center">
                                    #42
                                  </span>
                                  <div>
                                    <span className="font-bold text-xs block text-black">South Indian Thali x 2</span>
                                    <span className="text-[10px] text-zinc-500 font-mono">Pack dispatched · Sivakasi East</span>
                                  </div>
                                </div>
                                <span className="px-2.5 py-1 bg-[#FAED00] text-black border border-black font-mono text-[10px] font-black uppercase">
                                  COOKING (8M)
                                </span>
                              </div>
                            </div>

                            {/* Component B: AI Festival Pricing Alert */}
                            <div className="p-4 bg-zinc-50 border border-black flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#00C16A] animate-pulse" />
                                <div>
                                  <span className="text-xs font-mono font-black uppercase text-black block">
                                    AI PRICING SUGGESTION
                                  </span>
                                  <span className="text-[10px] text-zinc-600 block">
                                    Diwali meal demand surge: +15% recommended
                                  </span>
                                </div>
                              </div>
                              <span className="px-2.5 py-1 bg-black text-white font-mono text-[10px] font-black uppercase">
                                AUTO-ADAPT
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 2. COLOR PALETTE WITH WCAG ACCESSIBILITY COMPLIANCE */}
                      <div className="border-2 border-black bg-white p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-black">
                          <span className="text-xs font-mono font-black uppercase text-black">
                            // TOKENIZED COLOR PALETTE &amp; WCAG RATING
                          </span>
                          <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase">
                            CLICK TO COPY HEX
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {currentSurface.swatches.map((sw) => {
                            const grade = contrastGrade(sw.fgHex, sw.onHex, sw.fontSize, sw.fontWeight);
                            const isCopied = copiedToken === sw.token;

                            return (
                              <button
                                key={sw.token}
                                type="button"
                                onClick={() => copyHex(sw.hex, sw.token)}
                                className="flex items-center justify-between p-2.5 bg-zinc-50 hover:bg-zinc-100 border border-black text-left cursor-pointer transition-all active:translate-x-0.5 active:translate-y-0.5 group"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div
                                    className="w-10 h-10 border-2 border-black shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                    style={{ backgroundColor: sw.hex }}
                                  />
                                  <div className="min-w-0 font-mono">
                                    <span className="text-xs font-black uppercase text-black block truncate">
                                      {sw.token}
                                    </span>
                                    <span className="text-[10px] text-zinc-500 font-bold block">
                                      {isCopied ? "✓ COPIED" : sw.hex}
                                    </span>
                                  </div>
                                </div>

                                <div className="text-right shrink-0">
                                  <span className={`inline-block px-1.5 py-0.5 text-[8.5px] font-mono font-black uppercase rounded ${
                                    grade.includes("AAA")
                                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                      : grade.includes("AA")
                                      ? "bg-blue-100 text-blue-800 border border-blue-300"
                                      : "bg-amber-100 text-amber-800 border border-amber-300"
                                  }`}>
                                    {grade.includes("AAA") ? "WCAG AAA" : grade.includes("AA") ? "WCAG AA" : "BRAND ACCENT"}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* 3. TYPOGRAPHY SCALE */}
                      <div className="border-2 border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <span className="text-xs font-mono font-black uppercase text-black block mb-3 pb-2 border-b-2 border-black">
                          // OUTFIT TYPOGRAPHIC HIERARCHY
                        </span>
                        <div className="grid grid-cols-4 gap-2 text-center">
                          {[500, 600, 700, 800].map((w) => (
                            <div key={w} className="p-2 bg-zinc-50 border border-black/20">
                              <span className="block text-2xl font-mono text-black leading-none" style={{ fontWeight: w }}>
                                Aa
                              </span>
                              <span className="text-[9px] font-mono font-bold text-zinc-500 mt-1 block">
                                Weight {w}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* RIGHT COLUMN (5 Cols): Live High-Resolution Screen in Context */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col">
                        <div className="flex items-center justify-between pb-2 mb-3 border-b-2 border-black">
                          <span className="text-xs font-mono font-black uppercase text-black flex items-center gap-1.5">
                            {heroScreen.frame === "phone" ? (
                              <DeviceMobile size={16} weight="bold" />
                            ) : (
                              <Desktop size={16} weight="bold" />
                            )}
                            // LIVE SCREEN IN-SITU
                          </span>
                          <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase">
                            HIGH-RES ASSET
                          </span>
                        </div>

                        {/* Device Frame */}
                        <div className="relative w-full aspect-[9/16] max-h-[520px] bg-zinc-100 border border-black flex items-center justify-center overflow-hidden">
                          <ModalImageWithSkeleton
                            src={heroScreen.src}
                            alt={heroScreen.alt}
                            priority
                            sizes="(max-width: 1024px) 100vw, 420px"
                            className="object-contain p-2"
                          />
                        </div>

                        <p className="mt-3 text-center font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                          {heroScreen.screenCaption}
                        </p>
                      </div>

                      {/* PDF 18-Page Download Card */}
                      <div className="border-2 border-black bg-[#FAED00] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <span className="text-xs font-mono font-black uppercase text-black block truncate">
                            COMPLETE 18-PAGE SPEC
                          </span>
                          <span className="text-[10px] font-mono font-bold text-black/70 block">
                            Measured tokens, spacing harnesses &amp; component matrices
                          </span>
                        </div>
                        <a
                          href={pdfMeta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 px-3.5 py-2 bg-black text-white font-mono text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-800 transition-colors"
                        >
                          <FilePdf weight="bold" size={15} />
                          <span>PDF</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modal Footer Controls */}
            <div className="p-3 sm:p-4 pb-[max(12px,env(safe-area-inset-bottom))] bg-white border-t-2 border-black flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                disabled={isFirst}
                className={`px-3.5 sm:px-4 py-2.5 sm:py-2 border-2 font-mono font-black text-xs uppercase tracking-wider flex items-center gap-1.5 min-h-[40px] ${
                  isFirst
                    ? "opacity-35 cursor-not-allowed bg-zinc-100 text-zinc-400 border-zinc-300 shadow-none"
                    : isLast
                    ? "bg-[#FAED00] hover:bg-[#faed00]/90 text-black border-black cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
                    : "bg-white hover:bg-zinc-100 text-black border-black cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
                }`}
              >
                <CaretLeft weight="bold" className="w-4 h-4" />
                <span className="hidden sm:inline">PREV SURFACE</span>
                <span className="sm:hidden">PREV</span>
              </button>

              <span className="text-[10px] sm:text-xs font-mono text-zinc-500 font-bold uppercase">
                {currentSurface.tabLabel} · 0{currentIndex + 1} of 0{surfaces.length}
              </span>

              <button
                type="button"
                onClick={handleNext}
                disabled={isLast}
                className={`px-3.5 sm:px-4 py-2.5 sm:py-2 border-2 font-mono font-black text-xs uppercase tracking-wider flex items-center gap-1.5 min-h-[40px] ${
                  isLast
                    ? "opacity-35 cursor-not-allowed bg-zinc-100 text-zinc-400 border-zinc-300 shadow-none"
                    : "bg-[#FAED00] hover:bg-[#faed00]/90 text-black border-black cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
                }`}
              >
                <span className="hidden sm:inline">NEXT SURFACE</span>
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
