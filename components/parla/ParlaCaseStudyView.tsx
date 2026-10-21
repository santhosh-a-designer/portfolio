"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Sparkle,
  ArrowsOut,
  X,
  CaretLeft,
  CaretRight,
  CheckCircle,
  Desktop,
  ChatCircleText,
  ChartLineUp,
} from "@phosphor-icons/react";
import type { CaseStudy } from "@/lib/caseStudies";
import ParlaDesignSystemSection from "./ParlaDesignSystemSection";
import { useLenis } from "@/components/LenisProvider";
import CaseStudyFooterNav from "@/components/CaseStudyFooterNav";

function SectionWindow({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden border-2 border-black bg-white shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000]">
      <div className="flex h-10 items-center gap-2 border-b-2 border-black bg-[#E2E8F0] px-3 font-mono text-xs select-none sm:h-11 sm:px-4">
        <span className="bg-[#FF462D] px-2 py-0.5 text-[10px] font-bold text-white">{num}</span>
        <span className="truncate font-bold uppercase tracking-wider text-black">{title}</span>
      </div>
      <div className="p-4 sm:p-8 md:p-10">{children}</div>
    </section>
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
    <div className="relative border-l-4 border-black bg-[#FAF9F5] p-4 sm:p-5 my-6 shadow-[2px_2px_0_0_#000]">
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
    <figure className={`flex h-full min-w-0 flex-col border-2 border-black bg-[#FAF9F5] ${className}`}>
      <figcaption className="border-b-2 border-black bg-[#FAED00] px-3 py-2 font-mono text-[10px] font-black uppercase tracking-wider shrink-0">
        {label}
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
      <div className="flex-1 flex flex-col justify-start p-3.5 sm:p-4 border-t-2 border-black/10">
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

export default function ParlaCaseStudyView({ study, prev, next }: ParlaCaseStudyViewProps) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [activeBeatIndex, setActiveBeatIndex] = useState<number | null>(null);
  const lenis = useLenis();

  const handleBeatClick = (index: number) => {
    setActiveBeatIndex(index);
    const target = document.getElementById(`show-sell-video-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const story = study.productDeepDive?.customerSchedulerStory;
  const sell = study.productDeepDive?.showAndSell;
  const ds = study.artifacts?.designSystem;
  const cta = study.artifacts?.ctaVideoShowcase;
  const journey = study.artifacts?.journeyMap ?? [];

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
    <main className="mx-auto min-w-0 max-w-[1240px] space-y-8 px-3 pb-28 pt-4 sm:space-y-12 sm:px-6 sm:pb-32 sm:pt-6 md:pt-8 lg:px-8">
      {/* Lightbox Zoom Modal with Frozen Background & In-Modal Prev/Next Navigation */}
      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          data-lenis-prevent="true"
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/92 p-2 sm:p-6 select-none overscroll-contain"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative flex flex-col max-h-[96vh] w-full max-w-6xl overflow-hidden border-2 border-white bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between border-b-2 border-white/20 bg-zinc-900 px-3 py-2 text-white shrink-0 font-mono">
              <div className="flex items-center gap-2 truncate">
                <span className="bg-[#FF462D] px-2 py-0.5 text-[10px] font-bold text-white">
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
                  className="px-2 py-1 bg-zinc-800 hover:bg-[#FAED00] hover:text-black border border-white/30 text-[11px] font-bold uppercase transition-colors flex items-center gap-1 cursor-pointer"
                  title="Previous screen (← key)"
                >
                  <CaretLeft size={14} weight="bold" />
                  <span className="hidden sm:inline">PREV</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextScreen}
                  className="px-2 py-1 bg-zinc-800 hover:bg-[#FAED00] hover:text-black border border-white/30 text-[11px] font-bold uppercase transition-colors flex items-center gap-1 cursor-pointer"
                  title="Next screen (→ key)"
                >
                  <span className="hidden sm:inline">NEXT</span>
                  <CaretRight size={14} weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(false)}
                  className="p-1 hover:text-[#FAED00] cursor-pointer ml-1"
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

              {/* Floating Prev / Next Arrow overlays for direct in-image clicking */}
              <button
                type="button"
                onClick={handlePrevScreen}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/75 hover:bg-[#FAED00] hover:text-black text-white border-2 border-white/60 shadow-lg cursor-pointer transition-all active:scale-95"
                aria-label="Previous screen"
              >
                <CaretLeft size={22} weight="bold" />
              </button>
              <button
                type="button"
                onClick={handleNextScreen}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/75 hover:bg-[#FAED00] hover:text-black text-white border-2 border-white/60 shadow-lg cursor-pointer transition-all active:scale-95"
                aria-label="Next screen"
              >
                <CaretRight size={22} weight="bold" />
              </button>
            </div>

            {/* Modal Bottom Caption */}
            <div className="p-2 sm:p-3 bg-zinc-900 border-t border-white/20 text-white font-mono text-[11px] flex items-center justify-between gap-2 shrink-0">
              <span className="truncate text-zinc-300">{activeScreen.desc}</span>
              <span className="hidden sm:inline text-zinc-500 shrink-0">Use ← → arrow keys to navigate · Esc to close</span>
            </div>
          </div>
        </div>
      )}

      {/* Top Breadcrumb Nav */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-4 font-mono select-none">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black hover:text-[#FF462D] sm:text-sm"
        >
          <ArrowLeft weight="bold" className="h-4 w-4" />
          Back to selected work
        </Link>
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 sm:text-xs">
          Parla Retail · US &amp; UK
        </span>
      </div>

      {/* Hero Window */}
      <section className="overflow-hidden border-2 border-black bg-white shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000]">
        <div className="space-y-6 p-4 text-center sm:space-y-7 sm:p-10 md:p-12">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex border-2 border-black bg-[#FF462D] px-3 py-1 font-mono text-xs font-black uppercase tracking-widest text-white">
              Assisted Selling System
            </span>
            <span className="inline-flex border-2 border-black bg-[#FAED00] px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest sm:text-xs">
              {study.company}
            </span>
          </div>

          <div>
            <h1 className="text-[1.8rem] font-black uppercase leading-none tracking-tight min-[380px]:text-3xl sm:text-5xl">
              Show &amp; Sell
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base font-semibold text-zinc-600 leading-relaxed">
              Turning high-intent ecommerce traffic into live, in-store video consultations that convert.
            </p>
          </div>

          {/* Core Pull Quote */}
          <div className="mx-auto max-w-3xl border-l-4 border-black bg-[#FAF9F5] p-4 sm:p-5 text-left shadow-[2px_2px_0_0_#000]">
            <p className="font-serif text-sm sm:text-base italic leading-relaxed text-zinc-800">
              “When an online shopper is ready to spend $2,000 on furniture or luxury goods, a static product page isn't enough. Parla connects them to a real showroom expert in seconds.”
            </p>
          </div>

          {/* STAR Framework Matrix */}
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            {/* Situation */}
            <div className="border-2 border-black bg-white p-3.5 flex flex-col justify-between shadow-[2px_2px_0_0_#000]">
              <div>
                <span className="inline-block px-1.5 py-0.5 bg-[#FF462D] text-white font-mono text-[10px] font-black uppercase mb-1.5">
                  S · SITUATION
                </span>
                <p className="text-xs leading-relaxed text-zinc-700 font-medium">
                  High-intent shoppers dropped off when complex purchase doubts went unanswered on static product pages.
                </p>
              </div>
            </div>

            {/* Task */}
            <div className="border-2 border-black bg-white p-3.5 flex flex-col justify-between shadow-[2px_2px_0_0_#000]">
              <div>
                <span className="inline-block px-1.5 py-0.5 bg-[#1976D2] text-white font-mono text-[10px] font-black uppercase mb-1.5">
                  T · TASK
                </span>
                <p className="text-xs leading-relaxed text-zinc-700 font-medium">
                  Design an end-to-end assisted commerce pipeline: from storefront CTA to video consultation &amp; in-call cart.
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="border-2 border-black bg-white p-3.5 flex flex-col justify-between shadow-[2px_2px_0_0_#000]">
              <div>
                <span className="inline-block px-1.5 py-0.5 bg-[#00C16A] text-white font-mono text-[10px] font-black uppercase mb-1.5">
                  A · ACTION
                </span>
                <p className="text-xs leading-relaxed text-zinc-700 font-medium">
                  Built a low-friction CTA trigger, localized retail scheduler (NFM), real-time QR scanner, and CRM desk.
                </p>
              </div>
            </div>

            {/* Result */}
            <div className="border-2 border-black bg-[#FAED00] p-3.5 flex flex-col justify-between shadow-[2px_2px_0_0_#000]">
              <div>
                <span className="inline-block px-1.5 py-0.5 bg-black text-[#FAED00] font-mono text-[10px] font-black uppercase mb-1.5">
                  R · RESULT
                </span>
                <p className="text-xs leading-relaxed text-black font-bold">
                  +31% booking completion lift and enterprise US client adoption across multi-department showroom retail.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-2 font-mono text-xs md:grid-cols-3 sm:gap-3">
            <div className="flex min-h-[64px] flex-col items-center justify-center border-2 border-black bg-[#FAED00] p-2.5 text-center">
              <span className="mb-0.5 block text-[9px] uppercase text-black/60">Timeline</span>
              <span className="font-black leading-snug">{study.timeline}</span>
            </div>
            <div className="flex min-h-[64px] flex-col items-center justify-center border-2 border-black p-2.5 text-center">
              <span className="mb-0.5 block text-[9px] uppercase text-zinc-500">Role</span>
              <span className="font-black leading-snug">{study.role}</span>
            </div>
            <div className="col-span-2 flex min-h-[64px] flex-col items-center justify-center border-2 border-black p-2.5 text-center md:col-span-1">
              <span className="mb-0.5 block text-[9px] uppercase text-zinc-500">Craft</span>
              <span className="font-black leading-snug">{study.toolsAndLanguages}</span>
            </div>
          </div>
        </div>

        {/* PROMINENT HIGH-RESOLUTION CORE SCREENS SHOWCASE */}
        <div className="border-t-2 border-black bg-[#F4F4F0] p-3 sm:p-6 md:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-black/15 pb-4">
            <div>
              <span className="font-mono text-[10px] font-black uppercase text-[#FF462D] tracking-wider block">
                CORE OPERATIONAL SCREENS
              </span>
              <h3 className="font-mono text-sm sm:text-base font-black uppercase text-black">
                {activeScreen.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block border border-black bg-white px-2.5 py-1 font-mono text-[10px] font-bold uppercase text-zinc-700">
                {activeScreen.roleBadge}
              </span>
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                className="inline-flex items-center gap-1.5 border-2 border-black bg-[#FAED00] px-3 py-1 font-mono text-[11px] font-black uppercase text-black hover:bg-white transition-colors cursor-pointer shadow-[2px_2px_0_0_#000]"
              >
                <ArrowsOut size={14} weight="bold" />
                <span>EXPAND FULLSCREEN</span>
              </button>
            </div>
          </div>

          {/* TOP SCREEN SWITCHER TABS - Directly above the big image for instant one-click switching with zero scrolling */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 bg-[#E2E8F0] p-1.5 sm:p-2 border-2 border-black">
            <div className="grid grid-cols-3 gap-1 sm:gap-1.5 flex-1 font-mono text-[10px] sm:text-[11px] font-black uppercase">
              {coreScreens.map((screen, idx) => {
                const isActive = activeScreenIndex === idx;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`px-1.5 sm:px-2.5 py-1.5 sm:py-2 border-2 border-black transition-all cursor-pointer text-center truncate ${
                      isActive
                        ? "bg-[#FAED00] text-black shadow-[2px_2px_0_0_#000] font-black -translate-y-0.5"
                        : "bg-white text-zinc-700 hover:bg-zinc-100"
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
                className="px-2.5 py-1.5 bg-white hover:bg-[#FAED00] border-2 border-black cursor-pointer shadow-[2px_2px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1"
                title="Previous Screen (or use Left Arrow key)"
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
                className="px-2.5 py-1.5 bg-white hover:bg-[#FAED00] border-2 border-black cursor-pointer shadow-[2px_2px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1"
                title="Next Screen (or use Right Arrow key)"
              >
                <span className="text-[10px] uppercase">NEXT</span>
                <CaretRight size={16} weight="bold" />
              </button>
            </div>
          </div>

          {/* Browser Window Mockup with in-image arrows */}
          <div className="overflow-hidden border-2 border-black bg-white shadow-[6px_6px_0_0_#000]">
            <div className="flex h-9 items-center justify-between border-b-2 border-black bg-[#E2E8F0] px-3 font-mono text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full border border-black bg-[#FF5F56]" />
                <span className="h-3 w-3 rounded-full border border-black bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full border border-black bg-[#27C93F]" />
              </div>
              <div className="flex max-w-[280px] sm:max-w-md items-center gap-1.5 truncate rounded border border-black/20 bg-white px-3 py-0.5 text-[10px] font-medium text-zinc-600">
                <span className="text-[#00C16A] font-bold">🔒</span>
                <span className="truncate">{activeScreen.url}</span>
              </div>
              <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-zinc-500">
                <span>TAB {activeScreenIndex + 1}/3</span>
              </div>
            </div>

            {/* Active Large Screen View with Floating Prev / Next Controls */}
            <div className="relative w-full bg-zinc-100 group">
              <div
                className="cursor-zoom-in"
                onClick={() => setIsZoomOpen(true)}
              >
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
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-black/80 hover:bg-[#FAED00] hover:text-black text-white border-2 border-black shadow-md cursor-pointer transition-all active:scale-95 opacity-80 group-hover:opacity-100"
                aria-label="Previous screen"
                title="Previous screen"
              >
                <CaretLeft size={20} weight="bold" />
              </button>
              <button
                type="button"
                onClick={handleNextScreen}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 bg-black/80 hover:bg-[#FAED00] hover:text-black text-white border-2 border-black shadow-md cursor-pointer transition-all active:scale-95 opacity-80 group-hover:opacity-100"
                aria-label="Next screen"
                title="Next screen"
              >
                <CaretRight size={20} weight="bold" />
              </button>

              <div
                className="absolute bottom-3 right-3 bg-black/75 hover:bg-black text-white px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider border border-white cursor-pointer shadow-md flex items-center gap-1.5 transition-colors"
                onClick={() => setIsZoomOpen(true)}
              >
                <ArrowsOut size={13} weight="bold" /> Click to Zoom Full Resolution
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-[#FAF9F5] border-t-2 border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <p className="text-xs sm:text-sm text-zinc-700 font-medium">
                {activeScreen.desc}
              </p>
              <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 shrink-0">
                Figma Production UI · 3200×2276 Hi-Res
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 01 · Situation: 5-Step Value Stream */}
      <SectionWindow num="01" title="Situation: Where the sale actually happens">
        <p className="mb-2 text-sm sm:text-base font-semibold text-zinc-700 leading-relaxed">
          High-ticket online shopping is lonely. We mapped the 5 critical moments where shoppers hesitate, question, and drop off.
        </p>

        <QuoteBlock quote="Physical retail has showroom experts; ecommerce had static PDFs and generic forms. We built the live bridge between them." />

        {/* 5-Step Value Stream Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 my-6">
          {[
            {
              step: "01",
              name: "Browse",
              surface: "Shop Website",
              pain: "Buyers explore $2k+ items but drop off due to unanswered questions.",
              fix: "Identified hesitation points to trigger guided assistance.",
              color: "border-[#FF462D] text-[#FF462D]",
            },
            {
              step: "02",
              name: "Trigger",
              surface: "Storefront CTA",
              pain: "Aggressive pop-ups create friction and immediate bounces.",
              fix: "Designed discreet floating trigger for instant or scheduled calls.",
              color: "border-[#1976D2] text-[#1976D2]",
            },
            {
              step: "03",
              name: "Schedule",
              surface: "Customer Scheduler",
              pain: "Generic calendars don't match retail departments or floor staff.",
              fix: "Floor-mapped booking with location, services, and time slots.",
              color: "border-[#00C16A] text-[#00C16A]",
            },
            {
              step: "04",
              name: "Show & Sell",
              surface: "WebRTC Video Call",
              pain: "Reps struggle to share live products over standard video.",
              fix: "Real-time QR barcode scanning directly into active video call.",
              color: "border-[#FAED00] text-black",
            },
            {
              step: "05",
              name: "Checkout",
              surface: "In-Call Mirror",
              pain: "Intent drops when checkout requires leaving the consultation.",
              fix: "Synchronized cart mirror: rep adds, customer buys in session.",
              color: "border-black text-black",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="border-2 border-black bg-white p-3.5 flex flex-col justify-between shadow-[3px_3px_0_0_#000] hover:-translate-y-0.5 transition-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-black text-zinc-400">STEP {item.step}</span>
                  <span className={`font-mono text-[9px] font-black uppercase px-1.5 py-0.5 border ${item.color}`}>
                    {item.surface}
                  </span>
                </div>
                <h4 className="font-mono text-sm font-black uppercase text-black mb-1">{item.name}</h4>
                <p className="text-[11px] leading-relaxed text-zinc-500 mb-2">
                  <strong className="text-zinc-700">Friction:</strong> {item.pain}
                </p>
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-800 font-semibold border-t border-black/10 pt-2">
                <span className="text-[#00C16A] font-bold">✓ </span>{item.fix}
              </p>
            </div>
          ))}
        </div>
      </SectionWindow>

      {/* 02 · Storefront CTA */}
      {cta ? (
        <SectionWindow num="02" title="Action: The Storefront CTA, before the call">
          <p className="mb-2 text-sm sm:text-base font-semibold text-zinc-700 leading-relaxed">
            The entry gate: inviting customers into a live consultation without disrupting their active browsing experience.
          </p>

          <QuoteBlock quote="If the call invitation feels like an aggressive pop-up, customers bounce. It had to feel like a courteous showroom associate asking: 'Can I show you how this looks in person?'" />

          <p className="mb-6 max-w-3xl text-xs sm:text-sm leading-relaxed text-zinc-600 font-medium">{cta.reason}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
        </SectionWindow>
      ) : null}

      {/* 03 · Customer Scheduler */}
      {story ? (
        <SectionWindow num="03" title="Action: The Customer Scheduler">
          <p className="mb-2 font-mono text-[10px] font-black uppercase tracking-wider text-[#1976D2]">{story.eyebrow}</p>
          <h2 className="mb-2 text-xl font-black uppercase tracking-tight sm:text-2xl">{story.title}</h2>
          <p className="mb-2 text-sm sm:text-base font-semibold text-zinc-700 leading-relaxed">
            Making appointment booking feel like walking onto the retailer's physical showroom floor.
          </p>

          <QuoteBlock quote="When Nebraska Furniture Mart signed on, the scheduler had to speak in real showroom floors and store cities—not generic calendar slots." />

          <p className="mb-8 max-w-3xl text-xs sm:text-sm leading-relaxed text-zinc-600 font-medium">{story.intro}</p>
          <div className="space-y-8">
            {story.chapters.map((chapter) => (
              <article key={chapter.badge} className="space-y-4 border-2 border-black bg-[#FAF9F5] p-4 sm:p-6">
                <p className="font-mono text-[10px] font-black uppercase tracking-wider text-[#FF462D]">{chapter.badge}</p>
                <h3 className="text-lg font-black uppercase leading-tight">{chapter.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-zinc-700 font-medium">{chapter.body}</p>
                {chapter.footnote ? (
                  <p className="text-xs font-semibold text-zinc-500">{chapter.footnote}</p>
                ) : null}
                {chapter.businessImpact ? (
                  <div className="border-2 border-black bg-white p-4">
                    <p className="font-mono text-[10px] font-black uppercase tracking-wider">{chapter.businessImpact.eyebrow}</p>
                    {chapter.businessImpact.intro ? (
                      <p className="mt-2 text-sm leading-relaxed text-zinc-700">{chapter.businessImpact.intro}</p>
                    ) : null}
                    <ul className="mt-4 grid list-none gap-3 sm:grid-cols-3">
                      {chapter.businessImpact.metrics.map((metric) => (
                        <li key={metric.value} className="border-2 border-black bg-[#FAED00] p-3">
                          <p className="font-mono text-2xl font-black leading-none">{metric.value}</p>
                          <p className="mt-2 text-xs font-semibold leading-snug text-zinc-800">{metric.label}</p>
                        </li>
                      ))}
                    </ul>
                    {chapter.businessImpact.footnote ? (
                      <p className="mt-3 border-t border-black/10 pt-3 text-[11px] leading-relaxed text-zinc-500">
                        {chapter.businessImpact.footnote}
                      </p>
                    ) : null}
                  </div>
                ) : null}
                {chapter.media.kind === "single" ? (
                  <Clip label={chapter.media.label} caption={chapter.media.caption} src={chapter.media.src} />
                ) : null}
                {chapter.media.kind === "responsive" ? (
                  <div className="space-y-4">
                    {chapter.media.bridge ? (
                      <p className="text-sm font-semibold text-zinc-600">{chapter.media.bridge}</p>
                    ) : null}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
                      {/* Left: Desktop Widescreen Canvas (7 cols) */}
                      <div className="lg:col-span-7 flex h-full flex-col border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                        <div className="flex items-center justify-between border-b-2 border-black bg-[#FAED00] px-3.5 py-2 font-mono text-[10px] font-black uppercase tracking-wider shrink-0">
                          <span>{chapter.media.desktop.label} · WIDE CANVAS</span>
                          <span className="text-[9px] bg-black text-[#FAED00] px-1.5 py-0.5 rounded-none font-bold">16:10</span>
                        </div>
                        <div className="w-full flex-1 bg-black flex items-center justify-center overflow-hidden border-b-2 border-black min-h-[380px] sm:min-h-[430px]">
                          <video
                            className="w-full h-full max-h-[480px] object-contain block bg-black"
                            controls
                            playsInline
                            preload="metadata"
                          >
                            <source src={chapter.media.desktop.src} type="video/mp4" />
                            <source src={chapter.media.desktop.src.replace(".mp4", ".mov")} type="video/quicktime" />
                          </video>
                        </div>
                        <div className="p-3.5 sm:p-4 bg-[#FAF9F5] min-h-[68px] flex items-center shrink-0">
                          <p className="text-xs font-semibold leading-relaxed text-zinc-800">
                            {chapter.media.desktop.caption}
                          </p>
                        </div>
                      </div>

                      {/* Right: Mobile Pocket Phone Frame (5 cols) */}
                      <div className="lg:col-span-5 flex h-full flex-col border-2 border-black bg-white shadow-[4px_4px_0_0_#000]">
                        <div className="flex items-center justify-between border-b-2 border-black bg-[#FAED00] px-3.5 py-2 font-mono text-[10px] font-black uppercase tracking-wider shrink-0">
                          <span>{chapter.media.mobile.label} · POCKET MOMENT</span>
                          <span className="text-[9px] bg-black text-[#FAED00] px-1.5 py-0.5 rounded-none font-bold">TOUCH FIRST</span>
                        </div>
                        <div className="w-full flex-1 bg-[#F4F4F0] p-4 flex items-center justify-center overflow-hidden border-b-2 border-black min-h-[380px] sm:min-h-[430px]">
                          {/* Realistic Smartphone Shell */}
                          <div className="relative border-4 border-black rounded-[32px] bg-black p-2 shadow-[4px_4px_0_0_#000] flex flex-col items-center">
                            {/* Top Speaker / Dynamic Island */}
                            <div className="w-14 h-2 bg-zinc-800 rounded-full mb-1.5 shrink-0" />
                            {/* Phone Screen with video */}
                            <div className="rounded-[22px] overflow-hidden bg-black flex items-center justify-center">
                              <video
                                className="h-[340px] sm:h-[380px] w-auto max-w-[200px] object-contain block bg-black"
                                controls
                                playsInline
                                preload="metadata"
                              >
                                <source src={chapter.media.mobile.src} type="video/mp4" />
                                <source src={chapter.media.mobile.src.replace(".mp4", ".mov")} type="video/quicktime" />
                              </video>
                            </div>
                            {/* Home Indicator bar */}
                            <div className="w-16 h-1 bg-zinc-700 rounded-full mt-2 shrink-0" />
                          </div>
                        </div>
                        <div className="p-3.5 sm:p-4 bg-[#FAF9F5] min-h-[68px] flex items-center shrink-0">
                          <p className="text-xs font-semibold leading-relaxed text-zinc-800">
                            {chapter.media.mobile.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {chapter.media.kind === "sideBySide" ? (
                  <div className="space-y-4">
                    {chapter.media.bridge ? (
                      <p className="text-sm font-semibold text-zinc-600">{chapter.media.bridge}</p>
                    ) : null}
                    {/* Fixed Height & Matching Bottom Alignment */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch">
                      {/* Left: NFM Custom Stepped Flow */}
                      <div className="flex h-full flex-col border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                        <div className="flex-1 p-4 sm:p-5">
                          <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#FF462D]">
                            {chapter.media.left.title}
                          </h4>
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700">
                            {chapter.media.left.body}
                          </p>
                        </div>
                        <div className="w-full border-t-2 border-b-2 border-black bg-black aspect-[2148/1526] overflow-hidden flex items-center justify-center">
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
                        <div className="p-3.5 sm:p-4 bg-[#FAF9F5] min-h-[64px] flex items-center">
                          <p className="text-xs font-semibold leading-relaxed text-zinc-800">
                            {chapter.media.left.caption}
                          </p>
                        </div>
                      </div>

                      {/* Right: Polished Shell Flow */}
                      <div className="flex h-full flex-col border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                        <div className="flex-1 p-4 sm:p-5">
                          <h4 className="font-mono text-xs font-black uppercase tracking-wider text-[#1976D2]">
                            {chapter.media.right.title}
                          </h4>
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-700">
                            {chapter.media.right.body}
                          </p>
                        </div>
                        <div className="w-full border-t-2 border-b-2 border-black bg-black aspect-[2148/1526] overflow-hidden flex items-center justify-center">
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
                        <div className="p-3.5 sm:p-4 bg-[#FAF9F5] min-h-[64px] flex items-center">
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
        </SectionWindow>
      ) : null}

      {/* 04 · Show & Sell on the call */}
      {sell ? (
        <SectionWindow num="04" title="Action: Show & Sell on the call">
          <p className="mb-2 text-sm sm:text-base font-semibold text-zinc-700 leading-relaxed">
            The centerpiece innovation: sales reps scan physical showroom items, and they instantly mirror on the customer's phone ready for checkout.
          </p>

          <QuoteBlock quote="Live commerce fails when reps recite SKU numbers. It succeeds when the physical product magically appears on the shopper's screen ready for purchase." />

          <p className="mb-6 max-w-3xl text-xs sm:text-sm font-medium leading-relaxed text-zinc-600">{sell.walkthrough?.lead ?? sell.intro}</p>
          {/* Interactive 4-Beat Workflow Cards */}
          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {sell.bullets.map((bullet, idx) => {
              const [trigger, description] = bullet.includes(" → ")
                ? bullet.split(" → ")
                : [bullet, ""];
              const badgeColors = [
                "bg-[#FF462D] text-white",
                "bg-[#1976D2] text-white",
                "bg-[#00C16A] text-white",
                "bg-[#FAED00] text-black",
              ];
              const isSelected = activeBeatIndex === idx;

              return (
                <button
                  type="button"
                  key={bullet}
                  onClick={() => handleBeatClick(idx)}
                  className={`group relative flex flex-col justify-between text-left border-2 border-black p-4 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#FAF9F5] shadow-[5px_5px_0_0_#000] -translate-y-0.5 ring-2 ring-black"
                      : "bg-white hover:bg-[#FAF9F5] hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className={`inline-block px-2 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider border border-black ${badgeColors[idx % 4]}`}
                    >
                      BEAT 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-zinc-500 group-hover:text-black flex items-center gap-1 transition-colors">
                      <span>Jump to video</span>
                      <span className="transition-transform group-hover:translate-y-0.5">↓</span>
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {sell.walkthrough.videos.map((video, idx) => (
                <div
                  key={video.src}
                  id={`show-sell-video-${idx}`}
                  className={`transition-all duration-300 rounded-none ${
                    activeBeatIndex === idx
                      ? "ring-4 ring-[#FAED00] shadow-[6px_6px_0_0_#000] -translate-y-1"
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
        </SectionWindow>
      ) : null}

      {/* 05 · Design System Showcase */}
      <SectionWindow num="05" title="Craft: Enterprise Design System">
        <div className="space-y-4">
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base">
            Standardizing components, tokens, and multi-tenant surfaces across showroom desks and customer mobile devices. Explore the interactive visual foundations below:
          </p>
          <ParlaDesignSystemSection />
        </div>
      </SectionWindow>

      {/* 06 · What I Can Stand Behind */}
      <SectionWindow num="06" title="Result: Business Impact & Retrospective">
        <p className="mb-2 text-sm sm:text-base font-semibold text-zinc-700 leading-relaxed">
          The measurable business outcomes and design principles that delivered verifiable enterprise ROI.
        </p>

        <QuoteBlock quote="Clarity converts. By eliminating hesitation before the call and friction during the call, we gave sales teams a tool they actually love using." />

        {/* Big Metric Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          <div className="border-2 border-black bg-[#FAED00] p-4 text-center shadow-[3px_3px_0_0_#000]">
            <span className="font-mono text-3xl sm:text-4xl font-black text-black block">+31%</span>
            <span className="font-mono text-[10px] font-black uppercase text-zinc-800 tracking-wider mt-1 block">Booking Completion Lift</span>
            <p className="text-xs text-zinc-700 mt-1">vs early wireframe path across identical traffic</p>
          </div>
          <div className="border-2 border-black bg-white p-4 text-center shadow-[3px_3px_0_0_#000]">
            <span className="font-mono text-3xl sm:text-4xl font-black text-[#FF462D] block">−26%</span>
            <span className="font-mono text-[10px] font-black uppercase text-zinc-800 tracking-wider mt-1 block">Drop-off Reduction</span>
            <p className="text-xs text-zinc-700 mt-1">at the service selection step post-rollout</p>
          </div>
          <div className="border-2 border-black bg-white p-4 text-center shadow-[3px_3px_0_0_#000]">
            <span className="font-mono text-3xl sm:text-4xl font-black text-[#1976D2] block">1.8×</span>
            <span className="font-mono text-[10px] font-black uppercase text-zinc-800 tracking-wider mt-1 block">Mobile Velocity</span>
            <p className="text-xs text-zinc-700 mt-1">touch-first session completion on mobile</p>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <span className="font-mono text-xs font-black uppercase text-zinc-500 tracking-wider">Verifiable Deliverables</span>
          <ul className="space-y-2">
            {study.results.map((item) => (
              <li key={item} className="border-l-4 border-[#00C16A] bg-zinc-50 pl-3 py-2 text-xs sm:text-sm font-medium text-zinc-800">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {study.learnings.map((item, idx) => (
            <div key={item} className="border-2 border-black bg-[#FAF9F5] p-4 shadow-[2px_2px_0_0_#000]">
              <span className="font-mono text-[10px] font-black uppercase text-[#1976D2] block mb-1">
                KEY LEARNING 0{idx + 1}
              </span>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed text-zinc-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </SectionWindow>

      {/* 07 · Bottom Case Study Navigation */}
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
    </main>
  );
}
