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
  Minus,
  Plus,
  MapPin,
  CaretDown,
  House,
  Receipt,
  User,
  ArrowRight,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/components/LenisProvider";
import ModalImageWithSkeleton from "@/components/ModalImageWithSkeleton";
import { contrastGrade } from "@/lib/contrast";
import type { DesignSystemPdfMeta } from "@/lib/designSystemPdfMeta";
import { vidyasDesignSystem, type VidyasDesignSurface } from "@/lib/vidyasKitchenCaseStudyContent";
import { createPortal } from "react-dom";
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
  initialSurfaceId = "landing",
}: VidyasDesignSystemModalProps) {
  const [mounted, setMounted] = useState(false);
  const [surfaceId, setSurfaceId] = useState<VidyasDesignSurface["id"]>(initialSurfaceId);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
  }, []);

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
  }, [isOpen, lenis, onClose]);

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

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 sm:p-4 md:p-6 select-none">
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
            className="relative w-full h-[100dvh] sm:h-[92vh] sm:max-w-6xl max-h-[94vh] bg-white border-0 sm:border-2 border-black sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col z-10 overflow-hidden"
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
                  <span>PDF SPEC ({pdfMeta.pages || 6} PAGES)</span>
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
            <div data-lenis-prevent="true" className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-8 bg-[#F4F4F0] space-y-6">
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
                            {/* Component 1: Location Delivery Header Pill */}
                            <div className="p-4 bg-[#F5F5F7] border border-black flex flex-col gap-2">
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                                  [01. LOCATION DELIVERY PILL · H: 44PX · RADIUS: 999PX]
                                </span>
                                <span className="text-[9px] font-mono font-bold text-[#BD2320]">
                                  WCAG 2.1 AAA
                                </span>
                              </div>
                              <div
                                style={{
                                  height: 44,
                                  borderRadius: 999,
                                  background: "#FFFFFF",
                                  border: "1px solid rgba(0,0,0,0.06)",
                                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "6px 14px 6px 8px",
                                  gap: 10,
                                }}
                              >
                                <span
                                  style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 999,
                                    background: "#FEE2E2",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                  }}
                                >
                                  <MapPin size={16} weight="fill" color="#BD2320" />
                                </span>
                                <div className="flex-1 min-w-0">
                                  <p className="m-0 text-[10px] text-black/50 font-medium leading-none">Delivering to • Home</p>
                                  <p className="m-0 text-[12px] font-bold text-[#1A1A1A] truncate leading-tight mt-0.5">
                                    5th Street 10th Main Rd 62, 60004...
                                  </p>
                                </div>
                                <CaretDown size={14} weight="bold" className="text-black/40 shrink-0" />
                              </div>
                            </div>

                            {/* Component 2: Category Segmented Filter Tabs */}
                            <div className="p-4 bg-[#F5F5F7] border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                                [02. CATEGORY FILTER TABS · TRACK H: 44PX · TAB H: 36PX · RADIUS: 999PX]
                              </span>
                              <div
                                style={{
                                  height: 44,
                                  borderRadius: 999,
                                  background: "#FFFFFF",
                                  border: "1px solid rgba(0,0,0,0.05)",
                                  padding: 4,
                                  display: "inline-flex",
                                  alignItems: "center",
                                  width: "fit-content",
                                }}
                              >
                                <div
                                  style={{
                                    height: 36,
                                    borderRadius: 999,
                                    background: "#BD2320",
                                    color: "#FFFFFF",
                                    padding: "0 18px",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: 800,
                                    fontSize: 13,
                                  }}
                                >
                                  Kitchen picks
                                </div>
                                <div
                                  style={{
                                    height: 36,
                                    padding: "0 16px",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: 600,
                                    fontSize: 13,
                                    color: "#666666",
                                  }}
                                >
                                  Favorites
                                </div>
                              </div>
                            </div>

                            {/* Component 3: Food Menu Card with Price Badge & Add Button */}
                            <div className="p-4 bg-[#F5F5F7] border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                                [03. FOOD MENU CARD · RADIUS: 20PX · PRICE: 24PX · ADD BTN: 36PX]
                              </span>
                              <div
                                style={{
                                  borderRadius: 20,
                                  background: "#FFFFFF",
                                  border: "1px solid rgba(0,0,0,0.06)",
                                  boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
                                  padding: 12,
                                  maxWidth: 260,
                                }}
                                className="space-y-3"
                              >
                                <div
                                  style={{
                                    height: 120,
                                    borderRadius: 14,
                                    background: "linear-gradient(135deg, #1C1917 0%, #292524 100%)",
                                    position: "relative",
                                    padding: 8,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                  }}
                                >
                                  <span
                                    style={{
                                      height: 24,
                                      borderRadius: 999,
                                      background: "#111111",
                                      color: "#FFFFFF",
                                      padding: "0 10px",
                                      display: "flex",
                                      alignItems: "center",
                                      fontSize: 12,
                                      fontWeight: 800,
                                    }}
                                  >
                                    ₹349
                                  </span>
                                  <span
                                    style={{
                                      height: 22,
                                      borderRadius: 6,
                                      background: "#F59E0B",
                                      color: "#FFFFFF",
                                      padding: "0 8px",
                                      display: "flex",
                                      alignItems: "center",
                                      fontSize: 10,
                                      fontWeight: 900,
                                    }}
                                  >
                                    20% Off!
                                  </span>
                                </div>

                                <p className="m-0 text-sm font-bold text-[#1A1A1A]">Mom&apos;s Recipe — Chicken Gravy</p>

                                <div className="flex justify-center pt-1">
                                  <button
                                    type="button"
                                    style={{
                                      height: 36,
                                      padding: "0 24px",
                                      borderRadius: 999,
                                      background: "#BD2320",
                                      color: "#FFFFFF",
                                      fontWeight: 800,
                                      fontSize: 13,
                                      border: "none",
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 6,
                                      boxShadow: "0 4px 12px rgba(189,35,32,0.25)",
                                    }}
                                  >
                                    <Plus size={14} weight="bold" />
                                    <span>ADD</span>
                                  </button>
                                </div>
                              </div>
                            </div>

                            {/* Component 4: Vidya Bot Floating WhatsApp Card */}
                            <div className="p-4 bg-[#F5F5F7] border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                                [04. VIDYA BOT FLOATING CARD · H: 58PX · RADIUS: 20PX · WA: 40×40PX]
                              </span>
                              <div
                                style={{
                                  height: 58,
                                  borderRadius: 20,
                                  background: "#FFFFFF",
                                  border: "1px solid rgba(0,0,0,0.06)",
                                  boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  padding: "8px 14px",
                                }}
                              >
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-[#1A1A1A]">Vidya Bot</span>
                                    <span
                                      style={{
                                        height: 18,
                                        padding: "0 6px",
                                        borderRadius: 999,
                                        background: "#DCFCE7",
                                        color: "#166534",
                                        fontSize: 9,
                                        fontWeight: 900,
                                        display: "inline-flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      ⚡ INSTANT
                                    </span>
                                  </div>
                                  <p className="m-0 text-[11px] text-black/50 font-medium">Order via our bot</p>
                                </div>
                                <span
                                  style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 999,
                                    background: "#25D366",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 4px 12px rgba(37,211,102,0.3)",
                                  }}
                                >
                                  <WhatsappLogo size={22} weight="fill" color="#FFFFFF" />
                                </span>
                              </div>
                            </div>

                            {/* Component 5: Floating Bottom Navigation Dock */}
                            <div className="p-4 bg-[#F5F5F7] border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                                [05. BOTTOM DOCK · H: 64PX · RADIUS: 999PX · ACTIVE PILL: 48PX]
                              </span>
                              <div
                                style={{
                                  height: 64,
                                  borderRadius: 999,
                                  background: "rgba(255,255,255,0.96)",
                                  border: "1px solid rgba(0,0,0,0.08)",
                                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "6px 10px",
                                  gap: 12,
                                  maxWidth: 360,
                                }}
                              >
                                <div>
                                  <p className="m-0 text-[10px] font-bold text-black/70 leading-none">Explore</p>
                                  <p className="m-0 text-[8px] text-black/40 leading-tight">17 dishes</p>
                                </div>

                                <div
                                  style={{
                                    height: 48,
                                    padding: "0 18px",
                                    borderRadius: 999,
                                    background: "#BD2320",
                                    color: "#FFFFFF",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    fontWeight: 800,
                                    fontSize: 13,
                                  }}
                                >
                                  <House size={18} weight="fill" />
                                  <span>Home</span>
                                </div>

                                <div className="relative p-2 text-black/60">
                                  <Receipt size={20} weight="bold" />
                                  <span
                                    style={{
                                      position: "absolute",
                                      top: 2,
                                      right: 2,
                                      width: 14,
                                      height: 14,
                                      borderRadius: 999,
                                      background: "#BD2320",
                                      color: "#FFFFFF",
                                      fontSize: 8,
                                      fontWeight: 900,
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    1
                                  </span>
                                </div>

                                <div className="p-2 text-black/60">
                                  <User size={20} weight="bold" />
                                </div>

                                <span
                                  style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 999,
                                    background: "rgba(189,35,32,0.12)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <ArrowRight size={18} weight="bold" color="#BD2320" />
                                </span>
                              </div>
                            </div>

                            {/* Component 6: Size Variant Selection Drawer & 52px Primary CTA */}
                            <div className="p-4 bg-[#F5F5F7] border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                                [06. SIZE DRAWER · 52×52PX WELL · 44PX STEPPER · 52PX CTA]
                              </span>
                              <div
                                style={{
                                  padding: "16px 16px 14px",
                                  borderRadius: 20,
                                  background: "#FFFFFF",
                                  border: "1.5px solid #F59E0B",
                                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                }}
                              >
                                <div className="flex items-start gap-3">
                                  <span
                                    style={{
                                      width: 52,
                                      height: 52,
                                      borderRadius: 18,
                                      background: "rgba(189,35,32,0.08)",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      flexShrink: 0,
                                    }}
                                  >
                                    <ForkKnife size={24} weight="fill" color="#BD2320" />
                                  </span>
                                  <div className="flex-1 min-w-0 pt-0.5">
                                    <p className="m-0 text-sm sm:text-base font-black text-[#1A1A1A]">South Indian Special Meals</p>
                                    <p className="m-0 mt-0.5 text-xs font-semibold text-black/45">Serves 1–2 · 500gm Portion</p>
                                  </div>
                                  <div className="text-right shrink-0">
                                    <p className="m-0 text-lg sm:text-xl font-black text-[#BD2320] tracking-tight">₹180</p>
                                  </div>
                                </div>

                                <div className="mt-3.5 flex items-center justify-between gap-3">
                                  <p className="m-0 text-xs font-semibold text-black/45">Quantity</p>
                                  <div
                                    style={{
                                      height: 44,
                                      borderRadius: 999,
                                      background: "rgba(0,0,0,0.05)",
                                      display: "flex",
                                      alignItems: "center",
                                      padding: "0 6px",
                                      width: 120,
                                      flexShrink: 0,
                                    }}
                                  >
                                    <button
                                      type="button"
                                      className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer border border-black/10 shadow-sm"
                                      aria-label="Decrease"
                                    >
                                      <Minus size={14} weight="bold" />
                                    </button>
                                    <span className="flex-1 text-center font-black text-sm text-black font-mono">01</span>
                                    <button
                                      type="button"
                                      className="w-8 h-8 rounded-full bg-[#BD2320] text-white flex items-center justify-center cursor-pointer border-0 shadow-sm"
                                      aria-label="Increase"
                                    >
                                      <Plus size={14} weight="bold" />
                                    </button>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  style={{
                                    width: "100%",
                                    height: 52,
                                    border: "none",
                                    borderRadius: 18,
                                    background: "#BD2320",
                                    color: "#fff",
                                    fontSize: 14,
                                    fontWeight: 900,
                                    cursor: "pointer",
                                    boxShadow: "0 8px 24px rgba(189,35,32,0.25)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 14,
                                  }}
                                >
                                  <span>ADD ITEM TO CART · ₹180</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {currentSurface.id === "landing" && (
                          <div className="space-y-4">
                            {/* Component A: Studio Glowing QR Glass Station from DesktopLanding.tsx */}
                            <div className="p-4 bg-[#0d0d0d] text-white border border-black flex flex-col gap-3 relative overflow-hidden">
                              <div
                                className="absolute -top-10 -left-10 w-44 h-44 pointer-events-none rounded-full"
                                style={{
                                  background: "radial-gradient(circle, rgba(189, 35, 32, 0.45) 0%, transparent 70%)",
                                  filter: "blur(40px)",
                                }}
                              />
                              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase relative z-10">
                                [DESKTOP QR LAUNCH STATION · BLUR 40PX GLASS · SCANNING FLARE]
                              </span>
                              <div className="relative flex items-center justify-center py-2 z-10">
                                <div
                                  style={{
                                    background: "rgba(255, 255, 255, 0.03)",
                                    backdropFilter: "blur(40px)",
                                    padding: "16px",
                                    borderRadius: "16px",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                                  }}
                                  className="relative flex flex-col items-center"
                                >
                                  {/* Scanning Laser Line */}
                                  <div
                                    className="w-full h-[2px] mb-3"
                                    style={{
                                      background: "linear-gradient(90deg, transparent 0%, #BD2320 50%, transparent 100%)",
                                      boxShadow: "0 0 20px rgba(189,35,32,1)",
                                    }}
                                  />
                                  <div className="w-24 h-24 bg-white p-2 rounded-lg flex items-center justify-center">
                                    <div className="w-full h-full border border-black/20 flex flex-col items-center justify-center font-mono text-[9px] font-black text-black">
                                      <span className="text-[#BD2320] text-xs font-black">VK</span>
                                      <span>PWA QR</span>
                                    </div>
                                  </div>
                                  <p className="text-[11px] text-white/75 text-center mt-2.5 font-medium leading-tight">
                                    Scan with phone to open{"\n"}Vidya&apos;s Kitchen PWA
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Component B: WhatsApp Action CTA Button from DesktopLanding.tsx */}
                            <div className="p-4 bg-[#0d0d0d] text-white border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                                [WHATSAPP ACTION CTA · EXACT RADIUS 16PX · #25D366]
                              </span>
                              <button
                                type="button"
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "10px",
                                  padding: "16px 20px",
                                  borderRadius: "16px",
                                  fontWeight: 900,
                                  fontSize: "14px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                  background: "#FFFFFF",
                                  color: "#000000",
                                  border: "none",
                                  cursor: "pointer",
                                  boxShadow: "0 8px 24px rgba(37,211,102,0.25)",
                                }}
                                className="hover:!bg-[#25D366] hover:!text-white transition-all active:scale-[0.99]"
                              >
                                <WhatsappLogo weight="fill" size={22} className="text-[#25D366]" />
                                <span>Order with Vidya Bot</span>
                              </button>
                              <p className="text-[10px] text-white/40 text-center tracking-wide font-medium mt-1">
                                Order from our daily menu or get instant support via WhatsApp
                              </p>
                            </div>
                          </div>
                        )}

                        {currentSurface.id === "driver" && (
                          <div className="space-y-4">
                            {/* Component A: Outdoor High-Contrast Delivery Job Card */}
                            <div className="p-4 bg-[#0A0A0A] text-white border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                                [OUTDOOR DELIVERY CARD · RADIUS 16PX · SUNLIGHT HIGH CONTRAST]
                              </span>
                              <div
                                style={{
                                  background: "#141414",
                                  borderRadius: 16,
                                  border: "1px solid rgba(255,255,255,0.12)",
                                  padding: 16,
                                }}
                                className="space-y-3"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <p className="m-0 text-base font-bold text-white">Murugan K.</p>
                                    <p className="m-0 text-xs text-white/60 mt-0.5">14/B Gandhi Road, Sivakasi East</p>
                                  </div>
                                  <span
                                    style={{
                                      borderRadius: 999,
                                      background: "rgba(255,255,255,0.08)",
                                      padding: "4px 10px",
                                      fontSize: 11,
                                      fontWeight: 700,
                                      color: "rgba(255,255,255,0.85)",
                                    }}
                                  >
                                    Slot: 12:30 PM
                                  </span>
                                </div>

                                {/* Amber Cash Alert Banner */}
                                <div
                                  style={{
                                    background: "rgba(245, 166, 35, 0.12)",
                                    border: "1px solid rgba(245, 166, 35, 0.35)",
                                    borderRadius: 12,
                                    padding: "10px 14px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <span className="text-xs font-mono font-black text-[#F5A623]">
                                    ₹180 CASH ON DELIVERY
                                  </span>
                                  <span className="text-[10px] font-mono text-white/80 font-bold uppercase">
                                    Collect exact
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Component B: Driver Ergonomic Action Buttons */}
                            <div className="p-4 bg-[#0A0A0A] text-white border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                                [DRIVER ACTIONS · TOUCH 48PX · RADIUS 14PX · SIGNAL GREEN #34D469]
                              </span>
                              <div className="grid grid-cols-2 gap-2">
                                <button
                                  type="button"
                                  style={{
                                    height: 48,
                                    borderRadius: 14,
                                    border: "1px solid rgba(255,255,255,0.22)",
                                    background: "transparent",
                                    color: "#FFFFFF",
                                    fontWeight: 700,
                                    fontSize: 13,
                                    cursor: "pointer",
                                  }}
                                >
                                  Call Customer
                                </button>
                                <button
                                  type="button"
                                  style={{
                                    height: 48,
                                    borderRadius: 14,
                                    border: "none",
                                    background: "#34D469",
                                    color: "#000000",
                                    fontWeight: 900,
                                    fontSize: 13,
                                    cursor: "pointer",
                                  }}
                                >
                                  Mark Delivered
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {currentSurface.id === "dashboard" && (
                          <div className="space-y-4">
                            {/* Component A: Floating Shell Sidebar Navigation from DashboardSidebar.tsx */}
                            <div className="p-4 bg-[#0D0D0D] text-white border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                                [DASHBOARD FLOATING SHELL &amp; ACTIVE NAV ROW · #F5E32D]
                              </span>
                              <div
                                style={{
                                  borderRadius: 16,
                                  border: "1px solid #222",
                                  background: "#141414",
                                  boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                                  padding: 12,
                                }}
                                className="space-y-1.5"
                              >
                                {/* Active Nav Item */}
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "10px 14px",
                                    borderRadius: 12,
                                    background: "#F5E32D",
                                    color: "#000000",
                                    fontWeight: 900,
                                    fontSize: 13,
                                    minHeight: 44,
                                  }}
                                >
                                  <span className="flex items-center gap-2">
                                    <Clock size={18} weight="bold" />
                                    <span>Live Kitchen Orders</span>
                                  </span>
                                  <span
                                    style={{
                                      minWidth: 18,
                                      height: 18,
                                      padding: "0 5px",
                                      borderRadius: 999,
                                      background: "#000000",
                                      color: "#F5E32D",
                                      fontSize: 9,
                                      fontWeight: 900,
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    9+
                                  </span>
                                </div>

                                {/* Idle Nav Item */}
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "10px 14px",
                                    borderRadius: 12,
                                    background: "transparent",
                                    color: "#888888",
                                    fontWeight: 600,
                                    fontSize: 13,
                                  }}
                                >
                                  <Sparkle size={18} weight="bold" />
                                  <span>AI Pricing Engine</span>
                                </div>
                              </div>
                            </div>

                            {/* Component B: Dashboard Action Button & Live Store Status Pill */}
                            <div className="p-4 bg-[#0D0D0D] text-white border border-black flex flex-col gap-2">
                              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                                [DASHBOARD CONTROLS · #F5E32D ACTION · #86EFAC LIVE STATUS]
                              </span>
                              <div className="flex items-center justify-between gap-3 p-3 bg-[#141414] border border-[#222] rounded-xl">
                                <div
                                  style={{
                                    padding: "4px 12px",
                                    borderRadius: 999,
                                    background: "rgba(134, 239, 172, 0.12)",
                                    border: "1px solid rgba(134, 239, 172, 0.3)",
                                    color: "#86EFAC",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 6,
                                  }}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#86EFAC] animate-pulse" />
                                  <span>Live on Storefront</span>
                                </div>

                                <button
                                  type="button"
                                  style={{
                                    padding: "8px 16px",
                                    borderRadius: 8,
                                    border: "1px solid rgba(245, 227, 45, 0.4)",
                                    background: "transparent",
                                    color: "#F5E32D",
                                    fontSize: 12,
                                    fontWeight: 800,
                                    cursor: "pointer",
                                  }}
                                >
                                  Approve &amp; Deploy
                                </button>
                              </div>
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

                      {/* PDF Download Card */}
                      <div className="border-2 border-black bg-[#FAED00] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <span className="text-xs font-mono font-black uppercase text-black block truncate">
                            COMPLETE {pdfMeta.pages || 6}-PAGE SPEC
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
    </AnimatePresence>,
    document.body
  );
}
