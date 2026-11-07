"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ArrowsOut,
  X,
  CaretLeft,
  CaretRight,
  CheckCircle,
} from "@phosphor-icons/react";
import type { CaseStudy } from "@/lib/caseStudies";
import ParlaDesignSystemSection from "./ParlaDesignSystemSection";
import ParlaSkimReel from "./ParlaSkimReel";
import { useLenis } from "@/components/LenisProvider";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";

const openEase = [0.22, 1, 0.36, 1] as const;

function OutlineFillTitle({ title }: { title: string }) {
  return (
    <motion.h2
      initial={{ color: "transparent" }}
      whileInView={{ color: "#000000" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: openEase }}
      style={{ WebkitTextStroke: "1.5px #000000" }}
      className="font-black uppercase tracking-tighter leading-[0.88] select-none text-[clamp(44px,7vw,88px)]"
    >
      {title}
    </motion.h2>
  );
}

function SectionHeader({
  eyebrow,
  title,
  takeaway,
  accentColor = "#1976D2",
}: {
  eyebrow: string;
  title: string;
  takeaway: string;
  accentColor?: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
        <span
          className="font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em]"
          style={{ color: accentColor }}
        >
          {eyebrow}
        </span>
      </div>
      <OutlineFillTitle title={title} />
      <p className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900 leading-snug">
        “{takeaway}”
      </p>
    </div>
  );
}

function QuoteBlock({
  quote,
  author,
  role,
}: {
  quote: string;
  author?: string;
  role?: string;
}) {
  return (
    <div className="relative border-l-4 border-[#1976D2] bg-zinc-50 p-4 sm:p-5 my-6">
      <span className="font-serif text-3xl sm:text-4xl leading-none text-zinc-300 select-none block -mb-2">“</span>
      <p className="font-serif text-sm sm:text-base italic leading-relaxed text-zinc-800 font-medium">
        {quote}
      </p>
      {author ? (
        <div className="mt-2.5 pt-2 border-t border-black/10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
          <span className="font-black text-black">{author}</span>
          {role ? <span className="text-zinc-400">· {role}</span> : null}
        </div>
      ) : null}
    </div>
  );
}

function Clip({
  label,
  caption,
  description,
  src,
  className = "",
  videoContainerClass = "",
}: {
  label: string;
  caption: string;
  description?: string;
  src: string;
  className?: string;
  videoContainerClass?: string;
}) {
  return (
    <figure className={`flex h-full min-w-0 flex-col border border-black/15 bg-white ${className}`}>
      <figcaption className="border-b border-black/15 bg-zinc-100 px-3 py-2 font-mono text-[10px] font-black uppercase tracking-wider shrink-0 flex items-center justify-between">
        <span className="text-black">{label}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#1976D2]" />
      </figcaption>
      <div className={`w-full bg-black flex items-center justify-center overflow-hidden ${videoContainerClass}`}>
        <video
          className="w-full h-full max-h-full object-contain block bg-black"
          controls
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace(".mp4", ".mov")} type="video/quicktime" />
        </video>
      </div>
      <div className="flex-1 flex flex-col justify-start p-3.5 sm:p-4 border-t border-black/10">
        <p className="text-xs font-bold leading-snug text-black sm:text-sm">{caption}</p>
        {description ? (
          <p className="mt-1.5 text-xs font-medium leading-relaxed text-zinc-600 sm:text-[13px]">
            {description}
          </p>
        ) : null}
      </div>
    </figure>
  );
}

interface ParlaCaseStudyViewProps {
  study: CaseStudy;
  prev?: CaseStudy | null;
  next?: CaseStudy | null;
}

export default function ParlaCaseStudyView({ study }: ParlaCaseStudyViewProps) {
  const [skimMode, setSkimMode] = useState(false);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [activeBeatIndex, setActiveBeatIndex] = useState<number | null>(null);
  const lenis = useLenis();

  // Sync Skim Mode with URL query param ?mode=60s and document data-mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const is60s = params.get("mode") === "60s";
      if (is60s) {
        setSkimMode(true);
        document.documentElement.setAttribute("data-mode", "60s");
      } else {
        document.documentElement.setAttribute("data-mode", "full");
      }
    }
  }, []);

  const handleSkimToggle = (mode: boolean) => {
    setSkimMode(mode);
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-mode", mode ? "60s" : "full");
      const url = new URL(window.location.href);
      if (mode) {
        url.searchParams.set("mode", "60s");
      } else {
        url.searchParams.delete("mode");
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  const handleBeatClick = (index: number) => {
    setActiveBeatIndex(index);
    const target = document.getElementById(`show-sell-video-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const story = study.productDeepDive?.customerSchedulerStory;
  const sell = study.productDeepDive?.showAndSell;
  const cta = study.artifacts?.ctaVideoShowcase;

  const coreScreens = [
    {
      id: "admin-dashboard",
      tabTitle: "01. Admin Dashboard",
      title: "Admin Dashboard & Real-Time Pulse",
      url: "parla.live/admin/analytics",
      roleBadge: "REP DASHBOARD · DERICK JOSE",
      src: "/case-studies/parla/Admin_Dashboard_Desktop.webp",
      desc: "Live visibility into active video calls (241), conversion volume (80 orders), generated revenue ($22.4k), and store department communication controls.",
    },
    {
      id: "messages-workspace",
      tabTitle: "02. In-Store Messages",
      title: "In-Store Messenger & Live Consultations",
      url: "parla.live/messages/chat",
      roleBadge: "CONSULTANT VIEW · EMILY CARTER",
      src: "/case-studies/parla/Messages_Desktop.webp",
      desc: "Instant two-way chat directly connecting online shoppers (Simon Dwayne) with certified in-store sales associates, complete with customer profile context.",
    },
    {
      id: "crm-orders",
      tabTitle: "03. CRM Customer & Order",
      title: "CRM Customer Profile & In-Call Order Builder",
      url: "parla.live/crm/customer/deepak-huda",
      roleBadge: "ORDER AUDIT · DEEPAK HUDA",
      src: "/case-studies/parla/CRM_Order.webp",
      desc: "Real-time assisted ordering: the consultant inspects verified customer carts, pushes scanned SKU items, and triggers in-call checkout without page hops.",
    },
  ];

  const activeScreen = coreScreens[activeScreenIndex];

  const handlePrevScreen = () => {
    setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : coreScreens.length - 1));
  };

  const handleNextScreen = () => {
    setActiveScreenIndex((prev) => (prev < coreScreens.length - 1 ? prev + 1 : 0));
  };

  // Lock background scroll when zoom modal is active
  useEffect(() => {
    if (!isZoomOpen) return;

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
      if (e.key === "Escape") setIsZoomOpen(false);
      if (e.key === "ArrowLeft") handlePrevScreen();
      if (e.key === "ArrowRight") handleNextScreen();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.position = prevBodyPos;
      document.body.style.top = prevBodyTop;
      document.body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);

      if (lenis) lenis.start();
    };
  }, [isZoomOpen, lenis]);

  return (
    <main className="w-full min-w-0 overflow-x-clip pb-28 sm:pb-32 bg-[#FAFAFA] relative">
      {/* Lightbox Zoom Modal */}
      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          data-lenis-prevent="true"
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/92 p-2 sm:p-6 select-none overscroll-contain"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative flex flex-col max-h-[96vh] w-full max-w-6xl overflow-hidden border border-white/20 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between border-b border-white/20 bg-zinc-900 px-3 py-2 text-white shrink-0 font-mono">
              <div className="flex items-center gap-2 truncate">
                <span className="bg-[#1976D2] px-2 py-0.5 text-[10px] font-bold text-white">
                  0{activeScreenIndex + 1}/03
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider truncate">
                  {activeScreen.title}
                </span>
              </div>

              {/* Prev / Next & Close */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handlePrevScreen}
                  className="px-2 py-1 bg-zinc-800 hover:bg-[#1976D2] text-white border border-white/30 text-[11px] font-bold uppercase transition-colors flex items-center gap-1 cursor-pointer"
                  title="Previous screen (← key)"
                >
                  <CaretLeft size={14} weight="bold" />
                  <span className="hidden sm:inline">PREV</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextScreen}
                  className="px-2 py-1 bg-zinc-800 hover:bg-[#1976D2] text-white border border-white/30 text-[11px] font-bold uppercase transition-colors flex items-center gap-1 cursor-pointer"
                  title="Next screen (→ key)"
                >
                  <span className="hidden sm:inline">NEXT</span>
                  <CaretRight size={14} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(false)}
                  className="p-1 hover:text-[#EC4899] cursor-pointer ml-1"
                  aria-label="Close zoom"
                  title="Close (Esc)"
                >
                  <X size={20} weight="bold" />
                </button>
              </div>
            </div>

            {/* Scrollable / Zoomable Full Screen View */}
            <div className="relative flex-1 min-h-0 overflow-auto bg-black flex items-center justify-center p-1 sm:p-2 overscroll-contain">
              <Image
                src={activeScreen.src}
                alt={activeScreen.title}
                width={3200}
                height={2276}
                className="max-h-[84vh] w-auto h-auto object-contain select-none"
                priority
              />

              {/* Floating Prev / Next Arrow overlays */}
              <button
                type="button"
                onClick={handlePrevScreen}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/75 hover:bg-[#1976D2] text-white border border-white/40 shadow-lg cursor-pointer transition-all active:scale-95"
                aria-label="Previous screen"
              >
                <CaretLeft size={22} weight="bold" />
              </button>
              <button
                type="button"
                onClick={handleNextScreen}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/75 hover:bg-[#1976D2] text-white border border-white/40 shadow-lg cursor-pointer transition-all active:scale-95"
                aria-label="Next screen"
              >
                <CaretRight size={22} weight="bold" />
              </button>
            </div>

            {/* Modal Bottom Caption */}
            <div className="p-2 sm:p-3 bg-zinc-900 border-t border-white/20 text-white font-mono text-[11px] flex items-center justify-between gap-2 shrink-0">
              <span className="truncate text-zinc-300">{activeScreen.desc}</span>
              <span className="hidden sm:inline text-zinc-500 shrink-0">Use ← → arrow keys · Esc to close</span>
            </div>
          </div>
        </div>
      )}

      {/* ─── Top Control Strip: Back link + Skim Mode Switch ─── */}
      <div className="w-full px-[clamp(20px,4vw,64px)] pt-4 pb-4 flex flex-wrap items-center justify-between gap-4 border-b border-black/15 select-none font-mono bg-[#FAFAFA]">
        <Link
          href="/#work"
          onClick={() => {
            try {
              sessionStorage.setItem("portfolio:scrollToWork", "1");
            } catch {
              /* */
            }
          }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider text-black hover:text-[#1976D2] transition-colors group"
        >
          <ArrowLeft weight="bold" className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO SELECTED WORK</span>
        </Link>

        {/* 60-Second Skim Mode Switch */}
        <div className="flex items-center gap-2 p-1 bg-zinc-100 border border-black/15 text-xs">
          <button
            type="button"
            onClick={() => handleSkimToggle(false)}
            className={`px-3 py-1 font-bold uppercase transition-all cursor-pointer ${
              !skimMode ? "bg-black text-white shadow-sm" : "text-zinc-600 hover:text-black"
            }`}
          >
            Full Story
          </button>
          <button
            type="button"
            onClick={() => handleSkimToggle(true)}
            className={`flex items-center gap-1.5 px-3 py-1 font-bold uppercase transition-all cursor-pointer ${
              skimMode ? "bg-[#1976D2] text-white shadow-sm" : "text-zinc-600 hover:text-black"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>60s Skim Mode</span>
          </button>
        </div>
      </div>

      {/* ─── Skim Mode Active Banner ─── */}
      <AnimatePresence>
        {skimMode && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full bg-[#1976D2] text-white px-[clamp(20px,4vw,64px)] py-2.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between gap-4 select-none sticky top-0 z-30 shadow-md"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse" />
              <span>⚡ 60s Skim Reel Active: One-line story beats + key screens</span>
            </div>
            <button
              type="button"
              onClick={() => handleSkimToggle(false)}
              className="px-2.5 py-0.5 bg-white text-black font-black uppercase text-[10px] hover:bg-zinc-100 transition-colors cursor-pointer shrink-0"
            >
              Show Full Story
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── RENDER EITHER DEDICATED 6-BEAT SKIM REEL OR FULL STORY ─── */}
      {skimMode ? (
        <ParlaSkimReel onExpandFullStory={() => handleSkimToggle(false)} />
      ) : (
        <div className="w-full space-y-0">
          {/* ─── HERO: Swiss Editorial Display ─── */}
          <section className="w-full px-[clamp(20px,4vw,64px)] py-10 sm:py-14 md:py-16 bg-white border-b border-black/15 space-y-8 sm:space-y-10">
            {/* Header Metadata Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-black/15 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1976D2]" />
                <span className="font-black uppercase tracking-wider text-black">
                  CASE STUDY // ASSISTED COMMERCE &amp; VIDEO PLATFORM
                </span>
              </div>
              <span className="px-2.5 py-0.5 bg-[#EC4899] text-white font-black uppercase tracking-wider text-[10px] border border-black/10">
                US Enterprise Retail Rollout
              </span>
            </div>

            {/* Title with Handwritten Cursive Accent */}
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl min-[380px]:text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-black leading-[0.9] flex items-baseline flex-wrap gap-2">
                <span>Show &amp; Sell</span>
                <span className="font-serif italic lowercase text-2xl sm:text-4xl md:text-5xl text-[#1976D2] font-normal tracking-normal select-none">
                  assisted commerce
                </span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#EC4899] shrink-0" />
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 leading-snug">
                “Turning high-intent ecommerce traffic into live, in-store video consultations that convert.”
              </p>
            </div>

            {/* Metadata Strip */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 pb-4 border-t border-b border-black/15 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Role</span>
                <span className="font-black text-black text-xs block">{study.role}</span>
              </div>
              <div className="space-y-1 md:col-span-2">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold">Team &amp; Ownership</span>
                <span className="font-bold text-zinc-800 text-xs block">3 Product Roles · Storefront, Scheduler &amp; Video Desk</span>
                <span className="text-[11px] text-zinc-600 block">Designed &amp; engineered the 0→1 WebRTC assisted commerce flow</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-bold mb-1.5">Production</span>
                <a
                  href="https://parlaretail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1976D2] hover:bg-black text-white font-mono text-xs font-black uppercase tracking-wider transition-all shadow-sm border border-black/15 group"
                >
                  <span>parlaretail.com</span>
                  <ArrowUpRight weight="bold" className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* KPI Strip: 4 Equal Columns, Big Numbers on Hairlines with Blue/Pink accents */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-black/15 font-mono">
              <div className="space-y-1 border-l-2 border-[#1976D2]/30 pl-3 sm:pl-4 min-w-0">
                <span className="text-[clamp(28px,3.8vw,56px)] font-black text-black tracking-tight block leading-none whitespace-nowrap">
                  1-Click
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase text-zinc-700 block leading-snug">
                  Instant Video Call
                </span>
                <span className="text-[10px] text-[#EC4899] font-black uppercase tracking-wider block">
                  Zero app install needed
                </span>
              </div>

              <div className="space-y-1 border-l-2 border-[#1976D2]/30 pl-3 sm:pl-4 min-w-0">
                <span className="text-[clamp(28px,3.8vw,56px)] font-black text-black tracking-tight block leading-none whitespace-nowrap">
                  3 Roles
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase text-zinc-700 block leading-snug">
                  Unified Architecture
                </span>
                <span className="text-[10px] text-[#1976D2] font-black uppercase tracking-wider block">
                  Customer, staff, &amp; admin
                </span>
              </div>

              <div className="space-y-1 border-l-2 border-[#1976D2]/30 pl-3 sm:pl-4 min-w-0">
                <span className="text-[clamp(28px,3.8vw,56px)] font-black text-black tracking-tight block leading-none whitespace-nowrap">
                  100% Web
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase text-zinc-700 block leading-snug">
                  In-Store QR Flow
                </span>
                <span className="text-[10px] text-[#EC4899] font-black uppercase tracking-wider block">
                  WebRTC in mobile browser
                </span>
              </div>

              <div className="space-y-1 border-l-2 border-[#1976D2]/30 pl-3 sm:pl-4 min-w-0">
                <span className="text-[clamp(28px,3.8vw,56px)] font-black text-black tracking-tight block leading-none whitespace-nowrap">
                  Live Basket
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase text-zinc-700 block leading-snug">
                  Synchronized Cart
                </span>
                <span className="text-[10px] text-[#1976D2] font-black uppercase tracking-wider block">
                  Staff adds, shopper pays
                </span>
              </div>
            </div>
          </section>

          {/* ─── PROMINENT HIGH-RESOLUTION CORE SCREENS SHOWCASE ─── */}
          <section className="w-full px-[clamp(20px,4vw,64px)] py-10 sm:py-14 bg-zinc-50 border-b border-black/15 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/15 pb-4">
              <div>
                <span className="font-mono text-[10px] font-black uppercase text-[#1976D2] tracking-wider block">
                  OPERATIONAL PRODUCTION INTERFACES
                </span>
                <h3 className="font-mono text-base sm:text-lg font-black uppercase text-black">
                  {activeScreen.title}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block border border-black/15 bg-white px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-zinc-700">
                  {activeScreen.roleBadge}
                </span>
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(true)}
                  className="inline-flex items-center gap-1.5 border border-black/15 bg-[#1976D2] text-white hover:bg-black px-3 py-1 font-mono text-[11px] font-black uppercase transition-colors cursor-pointer shadow-sm"
                >
                  <ArrowsOut size={14} weight="bold" />
                  <span>EXPAND FULLSCREEN</span>
                </button>
              </div>
            </div>

            {/* Screen Switcher Tabs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 bg-white p-1.5 sm:p-2 border border-black/15">
              <div className="grid grid-cols-3 gap-1 sm:gap-1.5 flex-1 font-mono text-[10px] sm:text-[11px] font-black uppercase">
                {coreScreens.map((screen, idx) => {
                  const isActive = activeScreenIndex === idx;
                  return (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => setActiveScreenIndex(idx)}
                      className={`px-1.5 sm:px-2.5 py-1.5 sm:py-2 border transition-all cursor-pointer text-center truncate ${
                        isActive
                          ? "bg-[#1976D2] text-white border-[#1976D2] shadow-sm font-black"
                          : "bg-zinc-50 border-black/10 text-zinc-700 hover:bg-zinc-100"
                      }`}
                    >
                      <span className="hidden md:inline">0{idx + 1}. </span>
                      <span>{screen.tabTitle.replace(/^\d+\.\s*/, "")}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-1.5 font-mono text-xs font-black">
                <button
                  type="button"
                  onClick={handlePrevScreen}
                  className="px-2.5 py-1.5 bg-zinc-100 hover:bg-[#1976D2] hover:text-white border border-black/15 cursor-pointer transition-colors flex items-center gap-1"
                  title="Previous Screen (←)"
                >
                  <CaretLeft size={16} weight="bold" />
                  <span className="text-[10px] uppercase">PREV</span>
                </button>
                <span className="px-2 font-mono text-[11px] font-black">
                  {activeScreenIndex + 1} / {coreScreens.length}
                </span>
                <button
                  type="button"
                  onClick={handleNextScreen}
                  className="px-2.5 py-1.5 bg-zinc-100 hover:bg-[#1976D2] hover:text-white border border-black/15 cursor-pointer transition-colors flex items-center gap-1"
                  title="Next Screen (→)"
                >
                  <span className="text-[10px] uppercase">NEXT</span>
                  <CaretRight size={16} weight="bold" />
                </button>
              </div>
            </div>

            {/* Browser Window Mockup */}
            <div className="overflow-hidden border border-black/15 bg-white shadow-sm">
              <div className="flex h-9 items-center justify-between border-b border-black/15 bg-zinc-100 px-3 font-mono text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EC4899]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                </div>
                <div className="flex max-w-[280px] sm:max-w-md items-center gap-1.5 truncate rounded border border-black/10 bg-white px-3 py-0.5 text-[10px] font-medium text-zinc-600">
                  <span className="text-[#1976D2] font-bold">🔒</span>
                  <span className="truncate">{activeScreen.url}</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-zinc-500">
                  <span>TAB {activeScreenIndex + 1}/3</span>
                </div>
              </div>

              {/* Active Large Screen View */}
              <div className="relative w-full bg-zinc-100 group">
                <div className="cursor-zoom-in" onClick={() => setIsZoomOpen(true)}>
                  <Image
                    src={activeScreen.src}
                    alt={activeScreen.title}
                    width={3200}
                    height={2276}
                    className="w-full h-auto object-contain transition-opacity duration-200"
                    priority
                  />
                </div>

                {/* In-Image Left/Right Hover Arrows */}
                <button
                  type="button"
                  onClick={handlePrevScreen}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-black/80 hover:bg-[#1976D2] text-white border border-white/20 shadow-md cursor-pointer transition-all active:scale-95 opacity-80 group-hover:opacity-100"
                  aria-label="Previous screen"
                >
                  <CaretLeft size={20} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={handleNextScreen}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-black/80 hover:bg-[#1976D2] text-white border border-white/20 shadow-md cursor-pointer transition-all active:scale-95 opacity-80 group-hover:opacity-100"
                  aria-label="Next screen"
                >
                  <CaretRight size={20} weight="bold" />
                </button>

                <div
                  className="absolute bottom-3 right-3 bg-black/80 hover:bg-[#1976D2] text-white px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider border border-white/20 cursor-pointer shadow-md flex items-center gap-1.5 transition-colors"
                  onClick={() => setIsZoomOpen(true)}
                >
                  <ArrowsOut size={13} weight="bold" /> Click to Zoom Full Resolution
                </div>
              </div>

              <div className="p-3 sm:p-4 bg-white border-t border-black/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <p className="text-xs sm:text-sm text-zinc-700 font-medium">
                  {activeScreen.desc}
                </p>
                <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 shrink-0">
                  Figma Production UI · 3200×2276 Hi-Res
                </span>
              </div>
            </div>
          </section>

          {/* ─── 01 THE SITUATION ─── */}
          <section id="situation" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="01 — THE SITUATION"
                  title="THE SITUATION"
                  takeaway="High-ticket online shopping is lonely without showroom experts."
                  accentColor="#1976D2"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-sans">
                  High-ticket online shopping is lonely. We mapped the 5 critical moments where shoppers hesitate, question, and drop off when considering purchases upwards of $2,000.
                </p>

                <QuoteBlock quote="Physical retail has showroom experts; ecommerce had static PDFs and generic forms. We built the live bridge between them." />

                {/* 5-Step Value Stream Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                  {[
                    {
                      step: "01",
                      name: "Browse",
                      surface: "Shop Website",
                      pain: "Buyers explore $2k+ items but drop off due to unanswered questions.",
                      fix: "Identified hesitation points to trigger guided assistance.",
                      accent: "#1976D2",
                    },
                    {
                      step: "02",
                      name: "Trigger",
                      surface: "Storefront CTA",
                      pain: "Aggressive pop-ups create friction and immediate bounces.",
                      fix: "Designed discreet floating trigger for instant or scheduled calls.",
                      accent: "#EC4899",
                    },
                    {
                      step: "03",
                      name: "Schedule",
                      surface: "Customer Scheduler",
                      pain: "Generic calendars don't match retail departments or floor staff.",
                      fix: "Floor-mapped booking with location, services, and time slots.",
                      accent: "#1976D2",
                    },
                    {
                      step: "04",
                      name: "Show & Sell",
                      surface: "WebRTC Video Call",
                      pain: "Reps struggle to share live products over standard video.",
                      fix: "Real-time QR barcode scanning directly into active video call.",
                      accent: "#EC4899",
                    },
                    {
                      step: "05",
                      name: "Checkout",
                      surface: "In-Call Mirror",
                      pain: "Intent drops when checkout requires leaving the consultation.",
                      fix: "Synchronized cart mirror: rep adds, customer buys in session.",
                      accent: "#1976D2",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="border border-black/15 bg-zinc-50 p-4 flex flex-col justify-between hover:bg-white transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs font-black text-zinc-400">STEP {item.step}</span>
                          <span
                            className="font-mono text-[9px] font-black uppercase px-2 py-0.5 border"
                            style={{ borderColor: item.accent, color: item.accent }}
                          >
                            {item.surface}
                          </span>
                        </div>
                        <h4 className="font-mono text-sm font-black uppercase text-black mb-1">{item.name}</h4>
                        <p className="text-xs leading-relaxed text-zinc-500 mb-2">
                          <strong className="text-zinc-700">Friction:</strong> {item.pain}
                        </p>
                      </div>
                      <p className="text-xs leading-relaxed text-zinc-800 font-semibold border-t border-black/10 pt-2">
                        <span className="text-[#1976D2] font-bold">✓ </span>{item.fix}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ─── 02 STOREFRONT CTA ─── */}
          {cta ? (
            <section id="storefront-cta" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-5 lg:sticky lg:top-24">
                  <SectionHeader
                    eyebrow="02 — STOREFRONT CTA"
                    title="THE TRIGGER"
                    takeaway="The entry gate before the call: inviting without disrupting."
                    accentColor="#EC4899"
                  />
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-sans">
                    The entry gate: inviting customers into a live consultation without disrupting their active browsing experience.
                  </p>

                  <QuoteBlock quote="If the call invitation feels like an aggressive pop-up, customers bounce. It had to feel like a courteous showroom associate asking: 'Can I show you how this looks in person?'" />

                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 font-medium">{cta.reason}</p>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-2">
                    {cta.videos.map((video) => (
                      <Clip
                        key={video.src}
                        label={video.label}
                        caption={video.caption}
                        description={video.description}
                        src={video.src}
                        videoContainerClass="aspect-[16/10]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* ─── 03 CUSTOMER SCHEDULER ─── */}
          {story ? (
            <section id="scheduler" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-5 lg:sticky lg:top-24">
                  <SectionHeader
                    eyebrow="03 — THE SCHEDULER"
                    title="SCHEDULER"
                    takeaway="Making appointment booking feel like walking onto the physical showroom floor."
                    accentColor="#1976D2"
                  />
                </div>

                <div className="lg:col-span-7 space-y-8">
                  <QuoteBlock quote="When Nebraska Furniture Mart signed on, the scheduler had to speak in real showroom floors and store cities—not generic calendar slots." />

                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 font-medium">{story.intro}</p>

                  <div className="space-y-8">
                    {story.chapters.map((chapter) => (
                      <article key={chapter.badge} className="space-y-4 border border-black/15 bg-zinc-50 p-4 sm:p-6">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#1976D2]" />
                          <p className="font-mono text-[10px] font-black uppercase tracking-wider text-[#1976D2]">
                            {chapter.badge}
                          </p>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black uppercase leading-tight text-black">
                          {chapter.title}
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">
                          {chapter.body}
                        </p>
                        {chapter.footnote ? (
                          <p className="text-xs font-semibold text-zinc-500">{chapter.footnote}</p>
                        ) : null}

                        {chapter.businessImpact ? (
                          <div className="border border-black/15 bg-white p-4 space-y-3">
                            <p className="font-mono text-[10px] font-black uppercase tracking-wider text-black">
                              {chapter.businessImpact.eyebrow}
                            </p>
                            {chapter.businessImpact.intro ? (
                              <p className="text-xs sm:text-sm leading-relaxed text-zinc-700">
                                {chapter.businessImpact.intro}
                              </p>
                            ) : null}
                            <ul className="grid list-none gap-3 sm:grid-cols-3">
                              {chapter.businessImpact.metrics.map((metric) => (
                                <li key={metric.value} className="border border-black/15 bg-zinc-50 p-3">
                                  <p className="font-mono text-2xl font-black leading-none text-[#1976D2]">
                                    {metric.value}
                                  </p>
                                  <p className="mt-2 text-xs font-semibold leading-snug text-zinc-800">
                                    {metric.label}
                                  </p>
                                </li>
                              ))}
                            </ul>
                            {chapter.businessImpact.footnote ? (
                              <p className="border-t border-black/10 pt-2 text-[11px] leading-relaxed text-zinc-500">
                                {chapter.businessImpact.footnote}
                              </p>
                            ) : null}
                          </div>
                        ) : null}

                        {chapter.media.kind === "single" ? (
                          <Clip label={chapter.media.label} caption={chapter.media.caption} src={chapter.media.src} />
                        ) : null}

                        {chapter.media.kind === "responsive" ? (
                          <div className="space-y-4 pt-2">
                            {chapter.media.bridge ? (
                              <p className="text-sm font-semibold text-zinc-600">{chapter.media.bridge}</p>
                            ) : null}
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
                              {/* Left: Desktop Widescreen Canvas */}
                              <div className="lg:col-span-7 flex h-full flex-col border border-black/15 bg-white shadow-sm">
                                <div className="flex items-center justify-between border-b border-black/15 bg-zinc-100 px-3.5 py-2 font-mono text-[10px] font-black uppercase tracking-wider shrink-0">
                                  <span className="text-black">{chapter.media.desktop.label} · WIDE CANVAS</span>
                                  <span className="text-[9px] bg-[#1976D2] text-white px-1.5 py-0.5 font-bold">16:10</span>
                                </div>
                                <div className="w-full flex-1 bg-black flex items-center justify-center overflow-hidden border-b border-black/15 min-h-[360px]">
                                  <video
                                    className="w-full h-full max-h-[460px] object-contain block bg-black"
                                    controls
                                    playsInline
                                    preload="metadata"
                                  >
                                    <source src={chapter.media.desktop.src} type="video/mp4" />
                                    <source src={chapter.media.desktop.src.replace(".mp4", ".mov")} type="video/quicktime" />
                                  </video>
                                </div>
                                <div className="p-3.5 sm:p-4 bg-zinc-50 min-h-[64px] flex items-center shrink-0">
                                  <p className="text-xs font-semibold leading-relaxed text-zinc-800">
                                    {chapter.media.desktop.caption}
                                  </p>
                                </div>
                              </div>

                              {/* Right: Mobile Pocket Phone Frame */}
                              <div className="lg:col-span-5 flex h-full flex-col border border-black/15 bg-white shadow-sm">
                                <div className="flex items-center justify-between border-b border-black/15 bg-zinc-100 px-3.5 py-2 font-mono text-[10px] font-black uppercase tracking-wider shrink-0">
                                  <span className="text-black">{chapter.media.mobile.label} · TOUCH FIRST</span>
                                  <span className="text-[9px] bg-[#EC4899] text-white px-1.5 py-0.5 font-bold">MOBILE</span>
                                </div>
                                <div className="w-full flex-1 bg-zinc-50 p-4 flex items-center justify-center overflow-hidden border-b border-black/15 min-h-[360px]">
                                  <div className="relative border-4 border-black rounded-[28px] bg-black p-2 shadow-md flex flex-col items-center">
                                    <div className="w-12 h-1.5 bg-zinc-800 rounded-full mb-1 shrink-0" />
                                    <div className="rounded-[18px] overflow-hidden bg-black flex items-center justify-center">
                                      <video
                                        className="h-[320px] sm:h-[360px] w-auto max-w-[190px] object-contain block bg-black"
                                        controls
                                        playsInline
                                        preload="metadata"
                                      >
                                        <source src={chapter.media.mobile.src} type="video/mp4" />
                                        <source src={chapter.media.mobile.src.replace(".mp4", ".mov")} type="video/quicktime" />
                                      </video>
                                    </div>
                                    <div className="w-14 h-1 bg-zinc-700 rounded-full mt-1.5 shrink-0" />
                                  </div>
                                </div>
                                <div className="p-3.5 sm:p-4 bg-zinc-50 min-h-[64px] flex items-center shrink-0">
                                  <p className="text-xs font-semibold leading-relaxed text-zinc-800">
                                    {chapter.media.mobile.caption}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}

                        {chapter.media.kind === "sideBySide" ? (
                          <div className="space-y-4 pt-2">
                            {chapter.media.bridge ? (
                              <p className="text-sm font-semibold text-zinc-600">{chapter.media.bridge}</p>
                            ) : null}
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch">
                              {/* Left: NFM Custom Stepped Flow */}
                              <div className="flex h-full flex-col border border-black/15 bg-white">
                                <div className="flex-1 p-4 sm:p-5">
                                  <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#EC4899]">
                                    {chapter.media.left.title}
                                  </h4>
                                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700">
                                    {chapter.media.left.body}
                                  </p>
                                </div>
                                <div className="w-full border-t border-b border-black/15 bg-black aspect-[2148/1526] overflow-hidden flex items-center justify-center">
                                  <video
                                    className="w-full h-full object-contain block bg-black"
                                    controls
                                    playsInline
                                    preload="metadata"
                                  >
                                    <source src={chapter.media.left.src} type="video/mp4" />
                                    <source src={chapter.media.left.src.replace(".mp4", ".mov")} type="video/quicktime" />
                                  </video>
                                </div>
                                <div className="p-3.5 sm:p-4 bg-zinc-50 min-h-[60px] flex items-center">
                                  <p className="text-xs font-semibold leading-relaxed text-zinc-800">
                                    {chapter.media.left.caption}
                                  </p>
                                </div>
                              </div>

                              {/* Right: Polished Shell Flow */}
                              <div className="flex h-full flex-col border border-black/15 bg-white">
                                <div className="flex-1 p-4 sm:p-5">
                                  <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#1976D2]">
                                    {chapter.media.right.title}
                                  </h4>
                                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700">
                                    {chapter.media.right.body}
                                  </p>
                                </div>
                                <div className="w-full border-t border-b border-black/15 bg-black aspect-[2148/1526] overflow-hidden flex items-center justify-center">
                                  <video
                                    className="w-full h-full object-contain block bg-black"
                                    controls
                                    playsInline
                                    preload="metadata"
                                  >
                                    <source src={chapter.media.right.src} type="video/mp4" />
                                    <source src={chapter.media.right.src.replace(".mp4", ".mov")} type="video/quicktime" />
                                  </video>
                                </div>
                                <div className="p-3.5 sm:p-4 bg-zinc-50 min-h-[60px] flex items-center">
                                  <p className="text-xs font-semibold leading-relaxed text-zinc-800">
                                    {chapter.media.right.caption}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {/* ─── 04 IN-CALL SHOW & SELL ─── */}
          {sell ? (
            <section id="show-and-sell" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-5 lg:sticky lg:top-24">
                  <SectionHeader
                    eyebrow="04 — IN-CALL COMMERCE"
                    title="SHOW & SELL"
                    takeaway="Physical products scanned live, mirroring on customer phones."
                    accentColor="#EC4899"
                  />
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-sans">
                    The centerpiece innovation: sales reps scan physical showroom items, and they instantly mirror on the customer's phone ready for checkout.
                  </p>

                  <QuoteBlock quote="Live commerce fails when reps recite SKU numbers. It succeeds when the physical product magically appears on the shopper's screen ready for purchase." />

                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-zinc-600">
                    {sell.walkthrough?.lead ?? sell.intro}
                  </p>

                  {/* Interactive 4-Beat Workflow Cards */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
                    {sell.bullets.map((bullet, idx) => {
                      const [trigger, description] = bullet.includes(" → ")
                        ? bullet.split(" → ")
                        : [bullet, ""];
                      const isSelected = activeBeatIndex === idx;

                      return (
                        <button
                          type="button"
                          key={bullet}
                          onClick={() => handleBeatClick(idx)}
                          className={`group relative flex flex-col justify-between text-left border p-4 transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-zinc-50 border-[#1976D2] shadow-sm ring-2 ring-[#1976D2]"
                              : "bg-white border-black/15 hover:bg-zinc-50 hover:border-black/30"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="inline-block px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider bg-[#1976D2] text-white">
                              BEAT 0{idx + 1}
                            </span>
                            <span className="font-mono text-[10px] font-bold text-zinc-500 group-hover:text-[#1976D2] flex items-center gap-1 transition-colors">
                              <span>Jump to video</span>
                              <span>↓</span>
                            </span>
                          </div>

                          <div className="space-y-1.5 flex-1">
                            <p className="text-xs sm:text-sm font-black uppercase tracking-tight text-black flex items-center gap-1.5">
                              <span>{trigger}</span>
                              <span className="text-zinc-400 group-hover:text-black transition-colors font-mono font-normal">→</span>
                            </p>
                            {description ? (
                              <p className="text-xs leading-relaxed text-zinc-600 sm:text-[13px]">
                                {description}
                              </p>
                            ) : null}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {sell.walkthrough ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-4">
                      {sell.walkthrough.videos.map((video, idx) => (
                        <div
                          key={video.src}
                          id={`show-sell-video-${idx}`}
                          className={`transition-all duration-300 ${
                            activeBeatIndex === idx
                              ? "ring-4 ring-[#1976D2] shadow-md -translate-y-0.5"
                              : ""
                          }`}
                        >
                          <Clip
                            label={video.label}
                            caption={video.caption}
                            src={video.src}
                            videoContainerClass="aspect-[16/10]"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          ) : null}

          {/* ─── 05 DESIGN SYSTEM ─── */}
          <section id="design-system" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="05 — DESIGN SYSTEM"
                  title="DESIGN SYSTEM"
                  takeaway="Standardizing multi-tenant showroom and mobile surfaces."
                  accentColor="#1976D2"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">
                  Standardizing components, tokens, and multi-tenant surfaces across showroom desks and customer mobile devices. Explore the interactive visual foundations below:
                </p>
                <ParlaDesignSystemSection />
              </div>
            </div>
          </section>

          {/* ─── 06 BUSINESS OUTCOMES ─── */}
          <section id="outcomes" className="w-full scroll-mt-24 px-[clamp(20px,4vw,64px)] py-12 sm:py-16 md:py-20 border-b border-black/15 bg-white space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <SectionHeader
                  eyebrow="06 — THE RESULTS"
                  title="THE RESULTS"
                  takeaway="What changed when retail showrooms went live on the web."
                  accentColor="#EC4899"
                />
              </div>

              <div className="lg:col-span-7 space-y-8">
                <QuoteBlock quote="Clarity converts. By eliminating hesitation before the call and friction during the call, we gave sales teams a tool they actually love using." />

                {/* Big Metric Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="border border-black/15 bg-zinc-50 p-4 text-center">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-[#1976D2] block">+31%</span>
                    <span className="font-mono text-[10px] font-black uppercase text-zinc-800 tracking-wider mt-1 block">Booking Completion Lift</span>
                    <p className="text-xs text-zinc-600 mt-1">vs early wireframe path across identical traffic</p>
                  </div>
                  <div className="border border-black/15 bg-zinc-50 p-4 text-center">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-[#EC4899] block">−26%</span>
                    <span className="font-mono text-[10px] font-black uppercase text-zinc-800 tracking-wider mt-1 block">Drop-off Reduction</span>
                    <p className="text-xs text-zinc-600 mt-1">at the service selection step post-rollout</p>
                  </div>
                  <div className="border border-black/15 bg-zinc-50 p-4 text-center">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-black block">1.8×</span>
                    <span className="font-mono text-[10px] font-black uppercase text-zinc-800 tracking-wider mt-1 block">Mobile Velocity</span>
                    <p className="text-xs text-zinc-600 mt-1">touch-first session completion on mobile</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="font-mono text-xs font-black uppercase text-zinc-500 tracking-wider block">
                    Verifiable Deliverables
                  </span>
                  <ul className="space-y-2">
                    {study.results.map((item) => (
                      <li key={item} className="flex gap-2.5 text-xs sm:text-sm text-zinc-800 bg-zinc-50 p-3 border-l-2 border-[#1976D2]">
                        <CheckCircle weight="fill" className="w-4 h-4 text-[#1976D2] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 pt-2">
                  {study.learnings.map((item, idx) => (
                    <div key={item} className="border border-black/15 bg-zinc-50 p-4 space-y-1">
                      <span className="font-mono text-[10px] font-black uppercase text-[#1976D2] block mb-1">
                        KEY LEARNING 0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold leading-relaxed text-zinc-800">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Footer Navigation */}
      <div className="w-full px-[clamp(20px,4vw,64px)] pt-12">
        <CaseStudyFooterNav
          currentTitle="Parla Retail · Show &amp; Sell Case Study"
          currentSubtitle="Designed by Santhosh A · Assisted Video Commerce System"
          prev={{
            company: "Sivakasi Town · D2C PWA",
            project: "Vidya's Kitchen PWA",
            summary: "First-ever home food delivery app in Sivakasi — PWA, kitchen dashboard, driver app, real-time WhatsApp dispatch.",
            href: "/case-studies/vidyas-kitchen-pwa",
          }}
          next={{
            company: "We Two Pets · India",
            project: "We Two Pets Commerce",
            summary: "An Indian D2C store for international dog & cat gear, powered by an autonomous AI sourcing engine and 2-human approval desk.",
            href: "/case-studies/we-two-pets",
          }}
        />
      </div>
    </main>
  );
}
