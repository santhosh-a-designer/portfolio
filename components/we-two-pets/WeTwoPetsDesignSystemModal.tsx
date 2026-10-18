"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  CaretLeft,
  CaretRight,
  Heart,
  Truck,
  Sparkle,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Package,
  BookOpen,
  ArrowSquareOut,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useLenis } from "@/components/LenisProvider";

interface WeTwoPetsDesignSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WTP_COLORS = [
  {
    name: "Deep Forest",
    token: "brand",
    hex: "#0D2E28",
    use: "Primary brand canvas, footer, high-contrast headings",
    category: "Primary",
  },
  {
    name: "Night Pine",
    token: "brand-dark",
    hex: "#001C18",
    use: "Deepest dark background for editorial contrast cards",
    category: "Primary",
  },
  {
    name: "Mint Sage",
    token: "brand-accent",
    hex: "#5FB89C",
    use: "Micro-accents, icons, live status pings, highlights",
    category: "Accent",
  },
  {
    name: "Warm Ivory",
    token: "ivory",
    hex: "#FAF8F5",
    use: "Default page canvas, editorial breathing room",
    category: "Surface",
  },
  {
    name: "Cream Linen",
    token: "linen",
    hex: "#F0E8D8",
    use: "Hero gradient wash, card containers",
    category: "Surface",
  },
  {
    name: "Charcoal Slate",
    token: "charcoal",
    hex: "#1A2E2A",
    use: "Primary body text, high legibility serif titles",
    category: "Text",
  },
];

export default function WeTwoPetsDesignSystemModal({
  isOpen,
  onClose,
}: WeTwoPetsDesignSystemModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"components" | "colors" | "typography">("components");
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
            <div className="p-3 sm:p-4 bg-[#0D2E28] text-[#F5EFE6] border-b-2 border-black flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 bg-[#5FB89C] shrink-0" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider truncate">
                  // DESIGN_SYSTEM / WE TWO PETS (WETWOPETS.COM)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://wetwopets.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#5FB89C] text-[#0D2E28] border border-black font-mono text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-white transition-colors"
                >
                  <ArrowSquareOut weight="bold" size={13} />
                  <span>VISIT LIVE STORE</span>
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
                onClick={() => setActiveTab("typography")}
                className={`px-3 py-1.5 border-2 border-black transition-all cursor-pointer ${
                  activeTab === "typography"
                    ? "bg-[#FAED00] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                03. TYPOGRAPHY &amp; PRINCIPLES
              </button>
            </div>

            {/* Content Area */}
            <div data-lenis-prevent="true" className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6 md:p-8 bg-[#F4F4F0] space-y-6">
              
              {/* TAB 1: RECREATED NATIVE COMPONENTS */}
              {activeTab === "components" && (
                <div className="space-y-6">
                  
                  {/* Top Intro Card */}
                  <div className="border-2 border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-[10px] font-mono text-[#0D2E28] font-black uppercase block mb-1">
                      // EDITORIAL PET COMMERCE SYSTEM
                    </span>
                    <h3 className="text-base sm:text-lg font-mono font-black uppercase text-black">
                      Live Recreated Vector Components from wetwopets.com
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 font-medium mt-1 leading-relaxed">
                      Every component below is rendered live in clean vector CSS/HTML matching the exact production styling of the live store.
                    </p>
                  </div>

                  {/* Component 1: Announcement Header Banner */}
                  <div className="border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase block">
                      [ANNOUNCEMENT BAR COMPONENT · #0D2E28 BRAND]
                    </span>
                    <div className="w-full bg-[#0D2E28] text-white px-4 py-3 flex items-center justify-between text-xs font-mono font-bold tracking-wider border border-black shadow-sm">
                      <div className="flex items-center gap-2">
                        <Truck weight="bold" size={16} className="text-[#5FB89C]" />
                        <span>FREE SHIPPING ON ORDERS ABOVE ₹6,999</span>
                      </div>
                      <span className="text-[10px] text-[#5FB89C] font-semibold hidden sm:inline">
                        PAN-INDIA DISPATCH
                      </span>
                    </div>
                  </div>

                  {/* Component 2: Editorial Product Card Showcase */}
                  <div className="border-2 border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase block">
                      [EXCLUSIVE IMPORT PRODUCT CARD · HOVER &amp; WISHLIST INTERACTION]
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Product Card A */}
                      <div className="border border-black bg-[#FAF8F5] p-4 flex flex-col justify-between group">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[9px] font-mono font-black uppercase tracking-wider text-[#0D2E28] bg-[#5FB89C]/20 px-2 py-0.5 border border-[#5FB89C]/40">
                              EXCLUSIVE IMPORT
                            </span>
                            <Heart size={18} weight="regular" className="text-zinc-400 group-hover:text-rose-500 transition-colors" />
                          </div>
                          <div className="relative aspect-square w-full bg-white border border-black/10 flex items-center justify-center mb-3 overflow-hidden">
                            <Image
                              src="/case-studies/we-two-pets/product.jpg"
                              alt="Ultra-Lightweight Ergonomic Pet Carrier"
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 640px) 100vw, 300px"
                            />
                          </div>
                          <h4 className="font-serif text-base font-bold text-[#1A2E2A] leading-tight">
                            Ultra-Lightweight Ergonomic Pet Carrier
                          </h4>
                          <span className="text-xs text-[#6B7C79] block mt-1">International Standard · Shock Absorbing</span>
                        </div>
                        <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between">
                          <span className="font-mono text-sm font-black text-black">₹4,499</span>
                          <button
                            type="button"
                            className="px-3 py-1.5 bg-[#0D2E28] hover:bg-[#1a443d] text-white font-mono text-[10px] font-black uppercase tracking-wider shadow-sm transition-all"
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>

                      {/* Product Card B */}
                      <div className="border border-black bg-[#FAF8F5] p-4 flex flex-col justify-between group">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[9px] font-mono font-black uppercase tracking-wider text-[#0D2E28] bg-[#5FB89C]/20 px-2 py-0.5 border border-[#5FB89C]/40">
                              30-DAY TESTED
                            </span>
                            <Heart size={18} weight="fill" className="text-rose-500" />
                          </div>
                          <div className="relative aspect-square w-full bg-white border border-black/10 flex items-center justify-center mb-3 overflow-hidden">
                            <Image
                              src="/case-studies/we-two-pets/shop.jpg"
                              alt="Memory Foam Anti-Anxiety Lounger Bed"
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 640px) 100vw, 300px"
                            />
                          </div>
                          <h4 className="font-serif text-base font-bold text-[#1A2E2A] leading-tight">
                            Memory Foam Anti-Anxiety Lounger Bed
                          </h4>
                          <span className="text-xs text-[#6B7C79] block mt-1">Hypoallergenic Fabric · Calming Bolster</span>
                        </div>
                        <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between">
                          <span className="font-mono text-sm font-black text-black">₹3,299</span>
                          <button
                            type="button"
                            className="px-3 py-1.5 bg-[#0D2E28] hover:bg-[#1a443d] text-white font-mono text-[10px] font-black uppercase tracking-wider shadow-sm transition-all"
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Component 3: The 3 Core Trust Cards */}
                  <div className="border-2 border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase block">
                      [BRAND TRUST PILLARS · EDITORIAL LUXURY FINISH]
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 bg-[#FAF8F5] border border-black flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-[#0D2E28]/10 text-[#0D2E28] flex items-center justify-center mb-2">
                          <Sparkle size={18} weight="fill" />
                        </div>
                        <h5 className="font-serif font-bold text-sm text-[#0D2E28]">Thoughtfully Curated</h5>
                        <p className="text-[11px] text-[#6B7C79] mt-1">Only products we would confidently recommend to our own companions.</p>
                      </div>

                      <div className="p-4 bg-[#FAF8F5] border border-black flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-[#0D2E28]/10 text-[#0D2E28] flex items-center justify-center mb-2">
                          <BookOpen size={18} weight="bold" />
                        </div>
                        <h5 className="font-serif font-bold text-sm text-[#0D2E28]">Guided by Experience</h5>
                        <p className="text-[11px] text-[#6B7C79] mt-1">Practical advice to help pet parents make informed, conscious choices.</p>
                      </div>

                      <div className="p-4 bg-[#FAF8F5] border border-black flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-[#0D2E28]/10 text-[#0D2E28] flex items-center justify-center mb-2">
                          <ShieldCheck size={18} weight="bold" />
                        </div>
                        <h5 className="font-serif font-bold text-sm text-[#0D2E28]">30-Day Testing Gate</h5>
                        <p className="text-[11px] text-[#6B7C79] mt-1">Every single item is rigorously tested before reaching the public catalog.</p>
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
                      // DESIGN TOKENS
                    </span>
                    <h3 className="text-base sm:text-lg font-mono font-black uppercase text-black">
                      We Two Pets Core Color Palette
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 font-medium mt-1">
                      Click any swatch to copy the exact HEX code into your clipboard.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {WTP_COLORS.map((color) => {
                      const isCopied = copiedHex === color.hex;
                      return (
                        <button
                          key={color.hex}
                          type="button"
                          onClick={() => copyToClipboard(color.hex)}
                          className="p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-50 text-left transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer flex flex-col justify-between"
                        >
                          <div>
                            <div
                              className="h-14 w-full border-2 border-black mb-3 shadow-inner flex items-center justify-center font-mono text-xs font-black"
                              style={{
                                backgroundColor: color.hex,
                                color: color.hex === "#FAF8F5" || color.hex === "#F0E8D8" ? "#1A2E2A" : "#FFFFFF",
                              }}
                            >
                              {isCopied ? "✓ COPIED" : color.hex}
                            </div>
                            <span className="text-xs font-mono font-black uppercase text-black block">
                              {color.name}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-500 block mb-1">
                              token: --{color.token}
                            </span>
                            <p className="text-[11px] text-zinc-700 leading-snug">
                              {color.use}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: TYPOGRAPHY & PRINCIPLES */}
              {activeTab === "typography" && (
                <div className="space-y-4">
                  <div className="border-2 border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                    <span className="text-xs font-mono font-black uppercase text-black block pb-2 border-b-2 border-black">
                      // EDITORIAL HEADINGS &amp; MODERN SANS
                    </span>
                    <div className="space-y-4">
                      <div className="p-4 bg-[#FAF8F5] border border-black">
                        <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase block mb-1">
                          EDITORIAL SERIF (HEADINGS)
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#0D2E28] leading-tight">
                          Intentional pet care starts with better decisions.
                        </h2>
                      </div>
                      <div className="p-4 bg-white border border-black">
                        <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase block mb-1">
                          GEOMETRIC SANS-SERIF (BODY)
                        </span>
                        <p className="text-sm text-[#1A2E2A] leading-relaxed">
                          Thoughtfully selected products, trusted guidance, and practical advice to help pets and families thrive together.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Principles */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-[10px] font-mono text-[#5FB89C] font-black uppercase block mb-1">01. PRINCIPLE</span>
                      <h4 className="font-mono text-xs font-black uppercase text-black mb-1">Fewer Products, More Meaning</h4>
                      <p className="text-xs text-zinc-700 leading-snug">Not one product more than necessary; not one less than exceptional.</p>
                    </div>
                    <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-[10px] font-mono text-[#5FB89C] font-black uppercase block mb-1">02. PRINCIPLE</span>
                      <h4 className="font-mono text-xs font-black uppercase text-black mb-1">AI with Human Verification</h4>
                      <p className="text-xs text-zinc-700 leading-snug">Two human sign-offs required before any automated scrape reaches the catalog.</p>
                    </div>
                    <div className="p-4 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-[10px] font-mono text-[#5FB89C] font-black uppercase block mb-1">03. PRINCIPLE</span>
                      <h4 className="font-mono text-xs font-black uppercase text-black mb-1">Single-Domain Trust</h4>
                      <p className="text-xs text-zinc-700 leading-snug">Order, payment, and domestic tracking never redirect to third-party marketplaces.</p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 pb-[max(12px,env(safe-area-inset-bottom))] bg-white border-t-2 border-black flex items-center justify-between gap-3 shrink-0">
              <span className="text-[10px] sm:text-xs font-mono text-zinc-500 font-bold uppercase">
                WE TWO PETS · DIGITAL STOREFRONT SPEC
              </span>

              <a
                href="https://wetwopets.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#FAED00] hover:bg-[#faed00]/90 text-black border-2 border-black font-mono font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                <span>OPEN WETWOPETS.COM</span>
                <ArrowSquareOut weight="bold" size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
