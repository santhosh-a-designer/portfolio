"use client";

import React, { useEffect, useState } from "react";
import {
  X,
  CaretLeft,
  CaretRight,
  VideoCamera,
  CalendarCheck,
  CreditCard,
  Microphone,
  Broadcast,
  CheckCircle,
  Sparkle,
  ArrowRight,
  Clock,
  User,
  ShieldCheck,
  Storefront,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useLenis } from "@/components/LenisProvider";

interface ParlaDesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PARLA_COLORS = [
  {
    name: "Enterprise Blue",
    token: "parla-blue",
    hex: "#1976D2",
    use: "Primary interactive CTA, scheduler selection, booking confirmation",
  },
  {
    name: "Parla Coral Red",
    token: "parla-red",
    hex: "#FF462D",
    use: "Attention anchors, live call badge, urgent notification triggers",
  },
  {
    name: "Conversion Yellow",
    token: "parla-yellow",
    hex: "#FAED00",
    use: "Checkout highlight, consultant active item highlight",
  },
  {
    name: "Night WebRTC Canvas",
    token: "canvas-dark",
    hex: "#0F172A",
    use: "Low-distraction video streaming canvas and media overlay",
  },
  {
    name: "Verified Green",
    token: "status-green",
    hex: "#00C16A",
    use: "Consultant online status, live connection ping, payment verified",
  },
  {
    name: "Pure Light White",
    token: "canvas-light",
    hex: "#FFFFFF",
    use: "Customer portal background, clean document and scheduler cards",
  },
];

export default function ParlaDesignSystemModal({
  isOpen,
  onClose,
}: ParlaDesignSystemModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"components" | "colors" | "architecture">("components");
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const copyToClipboard = async (hex: string) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 1800);
    } catch {
      setCopiedHex(null);
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
            className="relative w-full h-[100dvh] sm:h-[92vh] sm:max-w-5xl max-h-[94vh] bg-white border-0 sm:border-2 border-black sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 sm:p-4 bg-[#1976D2] text-white border-b-2 border-black flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 bg-[#FAED00] shrink-0" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider truncate">
                  // DESIGN_SYSTEM / SHOW &amp; SELL (PARLA RETAIL · UK &amp; US)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-white text-black border border-black font-mono text-[10px] font-black uppercase tracking-wider">
                  NEBRASKA FURNITURE MART CLIENT
                </span>
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

            {/* Navigation Tabs */}
            <div className="flex items-center border-b-2 border-black bg-zinc-100 p-1.5 sm:p-2 gap-1.5 shrink-0 font-mono text-[11px] font-black uppercase">
              <button
                type="button"
                onClick={() => setActiveTab("components")}
                className={`px-3 py-1.5 border-2 border-black transition-all cursor-pointer ${
                  activeTab === "components"
                    ? "bg-[#FAED00] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                01. RECREATED COMPONENTS
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("colors")}
                className={`px-3 py-1.5 border-2 border-black transition-all cursor-pointer ${
                  activeTab === "colors"
                    ? "bg-[#FAED00] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                02. COLOR TOKENS
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("architecture")}
                className={`px-3 py-1.5 border-2 border-black transition-all cursor-pointer ${
                  activeTab === "architecture"
                    ? "bg-[#FAED00] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                03. WORKFLOW ARCHITECTURE
              </button>
            </div>

            {/* Content Area */}
            <div data-lenis-prevent="true" className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-8 bg-[#F4F4F0] space-y-6">
              
              {/* TAB 1: RECREATED NATIVE COMPONENTS */}
              {activeTab === "components" && (
                <div className="space-y-6">
                  
                  {/* Top Intro */}
                  <div className="border-2 border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[10px] font-mono text-[#1976D2] font-black uppercase block mb-1">
                      // ENTERPRISE ASSISTED SELLING SYSTEM
                    </span>
                    <h3 className="text-base sm:text-lg font-mono font-black uppercase text-black">
                      Recreated Vector Components for Show &amp; Sell Video Commerce
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 font-medium mt-1 leading-relaxed">
                      Pixel-perfect native CSS/HTML components engineered to eliminate buyer hesitation during high-ticket retail consultations.
                    </p>
                  </div>

                  {/* Component 1: Integrated Customer Appointment Scheduler */}
                  <div className="border-2 border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase block">
                      [INTEGRATED CUSTOMER SCHEDULER · TIME SLOT SELECTOR]
                    </span>
                    <div className="border border-black bg-[#FAF9F5] p-4 flex flex-col gap-3">
                      <div className="flex items-center justify-between pb-2 border-b border-black/10">
                        <div className="flex items-center gap-2">
                          <CalendarCheck size={18} weight="bold" className="text-[#1976D2]" />
                          <span className="font-mono text-xs font-black uppercase text-black">
                            BOOK 1-ON-1 PRODUCT VIDEO CONSULTATION
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#00C16A]">3 CONSULTANTS ACTIVE</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div className="p-2.5 bg-[#1976D2] text-white border-2 border-black shadow-sm text-center">
                          <span className="block font-mono text-xs font-bold">10:00 AM</span>
                          <span className="text-[9px] font-mono text-white/80">Available</span>
                        </div>
                        <div className="p-2.5 bg-white text-zinc-700 border border-zinc-300 text-center">
                          <span className="block font-mono text-xs font-semibold">11:30 AM</span>
                          <span className="text-[9px] font-mono text-zinc-400">Available</span>
                        </div>
                        <div className="p-2.5 bg-white text-zinc-700 border border-zinc-300 text-center">
                          <span className="block font-mono text-xs font-semibold">02:00 PM</span>
                          <span className="text-[9px] font-mono text-zinc-400">Available</span>
                        </div>
                        <div className="p-2.5 bg-zinc-100 text-zinc-400 border border-zinc-200 text-center opacity-60">
                          <span className="block font-mono text-xs font-semibold">04:30 PM</span>
                          <span className="text-[9px] font-mono">Booked</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="w-full py-3 bg-[#1976D2] hover:bg-[#1565C0] text-white font-mono text-xs font-black uppercase tracking-wider shadow-sm transition-all mt-1"
                      >
                        CONFIRM APPOINTMENT &amp; SYNC CALENDAR
                      </button>
                    </div>
                  </div>

                  {/* Component 2: Live WebRTC Video Consultation Floating Bar */}
                  <div className="border-2 border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase block">
                      [WEBRTC VIDEO COMMERCE INTERFACE · IN-CALL HUD]
                    </span>
                    <div className="bg-[#0F172A] text-white p-4 border border-black flex flex-col gap-4">
                      
                      {/* Video Stream Simulation */}
                      <div className="relative aspect-[16/7] w-full bg-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden">
                        <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-white border border-white/20">
                          <span className="w-2 h-2 rounded-full bg-[#00C16A] animate-pulse" />
                          <span>LIVE CONSULTATION · HD 1080P</span>
                        </div>

                        <div className="text-center font-mono text-xs text-slate-400">
                          <Storefront size={28} className="mx-auto mb-1 text-slate-300" />
                          <span>Nebraska Furniture Mart · Virtual Living Room Demo</span>
                        </div>

                        {/* Consultant PiP Box */}
                        <div className="absolute bottom-3 right-3 w-32 h-24 bg-slate-800 border-2 border-[#1976D2] shadow-lg flex flex-col justify-between p-1.5 overflow-hidden">
                          <div className="flex items-center justify-between text-[8px] font-mono font-bold text-white/80">
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00C16A]" />
                              FEED 01
                            </span>
                            <VideoCamera size={11} className="text-[#1976D2]" weight="fill" />
                          </div>
                          <div className="flex flex-col items-center justify-center my-auto">
                            <div className="w-7 h-7 rounded-full bg-slate-700 border border-slate-500 flex items-center justify-center text-white">
                              <User size={14} weight="bold" />
                            </div>
                            <span className="text-[9px] font-mono font-bold text-white mt-1">Sarah J.</span>
                          </div>
                          <span className="text-[7.5px] font-mono text-center text-slate-400 truncate">
                            Senior Specialist
                          </span>
                        </div>
                      </div>

                      {/* HUD Bottom Controls */}
                      <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-700">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-white border border-slate-600">
                            <Microphone size={16} weight="bold" />
                          </div>
                          <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-white border border-slate-600">
                            <VideoCamera size={16} weight="bold" />
                          </div>
                          <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-white border border-slate-600">
                            <Broadcast size={16} weight="bold" />
                          </div>
                        </div>

                        {/* Instant In-Call Pay CTA */}
                        <button
                          type="button"
                          className="px-4 py-2 bg-[#FAED00] text-black font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-white transition-colors"
                        >
                          <CreditCard size={15} weight="bold" />
                          <span>INSTANT IN-CALL CHECKOUT · $1,299</span>
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: COLOR TOKENS */}
              {activeTab === "colors" && (
                <div className="space-y-4">
                  <div className="border-2 border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[10px] font-mono text-zinc-500 font-black uppercase block mb-1">
                      // COLOR SPECIFICATIONS
                    </span>
                    <h3 className="text-base sm:text-lg font-mono font-black uppercase text-black">
                      Show &amp; Sell High-Conversion Design Palette
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {PARLA_COLORS.map((c) => {
                      const isCopied = copiedHex === c.hex;
                      return (
                        <button
                          key={c.hex}
                          type="button"
                          onClick={() => copyToClipboard(c.hex)}
                          className="p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-50 text-left transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer flex flex-col justify-between"
                        >
                          <div>
                            <div
                              className="h-14 w-full border-2 border-black mb-3 shadow-inner flex items-center justify-center font-mono text-xs font-black"
                              style={{
                                backgroundColor: c.hex,
                                color: c.hex === "#FFFFFF" || c.hex === "#FAED00" ? "#000000" : "#FFFFFF",
                              }}
                            >
                              {isCopied ? "✓ COPIED" : c.hex}
                            </div>
                            <span className="text-xs font-mono font-black uppercase text-black block">
                              {c.name}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-500 block mb-1">
                              token: --{c.token}
                            </span>
                            <p className="text-[11px] text-zinc-700 leading-snug">
                              {c.use}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: WORKFLOW ARCHITECTURE */}
              {activeTab === "architecture" && (
                <div className="space-y-4">
                  <div className="border-2 border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                    <span className="text-xs font-mono font-black uppercase text-black block pb-2 border-b-2 border-black">
                      // 4-STAGE RETAIL CONVERSION PIPELINE
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div className="p-3 bg-[#FAF9F5] border border-black">
                        <span className="font-mono text-[10px] font-black text-[#1976D2] block">STAGE 01</span>
                        <h5 className="font-mono text-xs font-bold uppercase mt-1">Storefront CTA</h5>
                        <p className="text-[11px] text-zinc-600 mt-1">Non-intrusive "Ask an In-Store Expert" trigger on high-value SKU pages.</p>
                      </div>
                      <div className="p-3 bg-[#FAF9F5] border border-black">
                        <span className="font-mono text-[10px] font-black text-[#1976D2] block">STAGE 02</span>
                        <h5 className="font-mono text-xs font-bold uppercase mt-1">Zero-Drop Scheduler</h5>
                        <p className="text-[11px] text-zinc-600 mt-1">Instant slot booking without forced account registration or friction.</p>
                      </div>
                      <div className="p-3 bg-[#FAF9F5] border border-black">
                        <span className="font-mono text-[10px] font-black text-[#1976D2] block">STAGE 03</span>
                        <h5 className="font-mono text-xs font-bold uppercase mt-1">Live WebRTC Call</h5>
                        <p className="text-[11px] text-zinc-600 mt-1">Low-latency video consultation with synchronized product catalog sharing.</p>
                      </div>
                      <div className="p-3 bg-[#FAF9F5] border border-black">
                        <span className="font-mono text-[10px] font-black text-[#00C16A] block">STAGE 04</span>
                        <h5 className="font-mono text-xs font-bold uppercase mt-1">In-Call Checkout</h5>
                        <p className="text-[11px] text-zinc-600 mt-1">Instant checkout while intent is at its peak; 38% reduction in dropped sales.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 pb-[max(12px,env(safe-area-inset-bottom))] bg-white border-t-2 border-black flex items-center justify-between gap-3 shrink-0">
              <span className="text-[10px] sm:text-xs font-mono text-zinc-500 font-bold uppercase">
                SHOW &amp; SELL · UK &amp; US RETAIL PLATFORM SPEC
              </span>

              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-black hover:bg-zinc-800 text-white font-mono font-black text-xs uppercase tracking-wider cursor-pointer"
              >
                CLOSE SPEC
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
