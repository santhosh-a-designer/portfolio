"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, GlobeSimple } from "@phosphor-icons/react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Page-load stagger variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function HeroV2() {

  // 4 Auto-Rotating Headline Slides
  const headlineSlides = [
    {
      id: 0,
      content: (
        <>
          I design experiences people{" "}
          <span className="text-[#FF462D]">feel</span>
          <span className="hero-cursor font-mono text-black">_</span>
          {" "}— then build them.
        </>
      ),
    },
    {
      id: 1,
      content: (
        <>
          <span className="text-[#FF462D]">HOW I FACE CHALLENGES:</span>{" "}
          I debug first, panic later. Every problem is just a design flaw I haven&apos;t solved yet.
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <span className="text-[#FF462D]">WHY I DESIGN &amp; BUILD:</span>{" "}
          I got tired of handing off ideas and watching them die in translation. So I learned to ship them myself.
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <span className="text-[#FF462D]">WHAT I BRING TO YOUR TEAM:</span>{" "}
          Not just pixels, not just code — a bridge between them.
        </>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeadlinePaused, setIsHeadlinePaused] = useState(false);

  useEffect(() => {
    if (isHeadlinePaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % headlineSlides.length);
    }, 8500);

    return () => clearInterval(timer);
  }, [isHeadlinePaused, currentSlide, headlineSlides.length]);

  return (
    <section className="w-full bg-[#F4F4F0] border-b-2 border-black">
      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black bg-white">

        {/* ─── Main Hero Grid — locked to desktop viewport height to prevent all layout shifts ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-black lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] min-h-0 overflow-hidden">

          {/* ─────────── LEFT COLUMN ─────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white h-full max-h-full min-h-0 overflow-hidden"
          >
            {/* Top text block */}
            <div className="flex flex-col pt-2.5 pb-4 px-3 sm:pt-4 sm:pb-6 sm:px-6 md:p-8 lg:p-12 lg:justify-between lg:h-full gap-3 sm:gap-4 lg:gap-0">
              {/* Role badges */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-base md:text-xl font-black tracking-wider uppercase text-black mb-0 lg:mb-4 font-sans flex-wrap shrink-0"
              >
                <span className="text-[#FF462D]">DESIGN ENGINEER</span>
                <span className="text-[#FF462D]">×</span>
                <span className="text-black">MENTOR</span>
              </motion.div>

              {/* Headline Auto-Rotating Carousel */}
              <motion.div
                variants={itemVariants}
                className="relative flex flex-col mb-1 sm:mb-2 lg:mb-5"
                onMouseEnter={() => setIsHeadlinePaused(true)}
                onMouseLeave={() => setIsHeadlinePaused(false)}
              >
                <div className="relative w-full min-h-[55px] sm:min-h-[70px] md:min-h-[85px] lg:min-h-[140px] flex items-start overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={currentSlide}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="text-lg sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-black leading-[1.2] sm:leading-[1.15] tracking-tight uppercase text-black select-none font-sans hero-heading"
                    >
                      {headlineSlides[currentSlide].content}
                    </motion.h1>
                  </AnimatePresence>
                </div>

                {/* Pagination Dots directly below headline */}
                <div className="flex items-center gap-2 mt-2.5 sm:mt-3 select-none shrink-0">
                  {headlineSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 transition-all duration-300 rounded-none border border-black ${
                        currentSlide === idx
                          ? "w-7 sm:w-8 bg-[#FF462D] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          : "w-2.5 bg-zinc-200 hover:bg-zinc-400 opacity-60 hover:opacity-100 cursor-pointer"
                      }`}
                    />
                  ))}
                  <span className="text-[9px] font-mono font-bold text-zinc-400 ml-2 tracking-widest">
                    0{currentSlide + 1} / 0{headlineSlides.length}
                  </span>
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-2 sm:gap-2.5 text-[11px] sm:text-xs md:text-sm font-bold tracking-wide uppercase text-zinc-700 mb-1 sm:mb-2 lg:mb-5 max-w-xl leading-relaxed"
              >
                <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#FAED00] border border-black inline-block shrink-0 mt-0.5" />
                <span>
                  UX DESIGNER FROM CHENNAI FOCUSED ON CONVERSION-LED PRODUCTS, PRACTICAL SYSTEMS, AND CLEAN HANDOFFS.
                </span>
              </motion.div>

              {/* VIEW WORK */}
              <motion.div variants={itemVariants} className="mt-1 sm:mt-0">
                <Link
                  href="#work"
                  className="inline-flex items-center justify-center gap-3 sm:gap-5 px-4 py-2 sm:px-7 sm:py-3.5 bg-black text-white hover:bg-zinc-900 border-2 border-black shadow-[3px_3px_0px_0px_rgba(250,237,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(250,237,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-[11px] sm:text-sm font-black tracking-widest uppercase select-none group w-auto cursor-pointer font-mono scanline-btn"
                >
                  <span>VIEW WORK</span>
                  <ArrowUpRight
                    weight="bold"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </motion.div>
            </div>

            {/* ─── Bottom: Unified 2×3 Stats & Status Grid ─── */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 grid-rows-2 border-t-2 border-black bg-white select-none"
            >
              {/* Row 1, Col 1: 6+ YEARS */}
              <div className="p-2.5 sm:p-4 md:p-5 flex flex-col justify-center items-center text-center hover:bg-zinc-50 transition-colors group cursor-default border-r-2 border-b-2 border-black min-h-[72px] sm:min-h-[88px]">
                <span className="text-lg min-[360px]:text-xl sm:text-2xl md:text-3xl font-black text-[#FF462D] tracking-tight leading-none font-mono mb-0.5 group-hover:scale-105 transition-transform">
                  6+
                </span>
                <span className="text-[8px] min-[360px]:text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500 font-mono">
                  YEARS
                </span>
              </div>

              {/* Row 1, Col 2: US·UK CLIENTS */}
              <div className="p-2.5 sm:p-4 md:p-5 flex flex-col justify-center items-center text-center hover:bg-zinc-50 transition-colors group cursor-default border-r-2 border-b-2 border-black min-h-[72px] sm:min-h-[88px]">
                <span className="text-base min-[360px]:text-xl sm:text-2xl md:text-3xl font-black text-[#FF462D] tracking-tight leading-none font-mono mb-0.5 group-hover:scale-105 transition-transform">
                  US·UK
                </span>
                <span className="text-[8px] min-[360px]:text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500 font-mono">
                  CLIENTS
                </span>
              </div>

              {/* Row 1, Col 3: Green Box - Available for full-time */}
              <div className="border-b-2 border-black bg-[#00C16A] p-2 min-[360px]:p-2.5 sm:p-4 md:p-5 flex flex-col items-center justify-center group cursor-default h-full min-h-[72px] sm:min-h-[88px]">
                <span className="text-black font-black text-[8.5px] min-[360px]:text-[9.5px] min-[400px]:text-[10.5px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-center leading-tight font-mono">
                  AVAILABLE<br />FOR FULL-TIME
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono text-black/50 mt-0.5 sm:mt-1 hidden min-[360px]:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  // open to remote
                </span>
              </div>

              {/* Row 2, Col 1: 10+ PROJECTS */}
              <div className="p-2.5 sm:p-4 md:p-5 flex flex-col justify-center items-center text-center hover:bg-zinc-50 transition-colors group cursor-default border-r-2 border-black min-h-[72px] sm:min-h-[88px]">
                <span className="text-lg min-[360px]:text-xl sm:text-2xl md:text-3xl font-black text-[#FF462D] tracking-tight leading-none font-mono mb-0.5 group-hover:scale-105 transition-transform">
                  10+
                </span>
                <span className="text-[8px] min-[360px]:text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500 font-mono">
                  PROJECTS
                </span>
              </div>

              {/* Row 2, Col 2: 100+ MENTORED */}
              <div className="p-2.5 sm:p-4 md:p-5 flex flex-col justify-center items-center text-center hover:bg-zinc-50 transition-colors group cursor-default border-r-2 border-black min-h-[72px] sm:min-h-[88px]">
                <span className="text-lg min-[360px]:text-xl sm:text-2xl md:text-3xl font-black text-[#FF462D] tracking-tight leading-none font-mono mb-0.5 group-hover:scale-105 transition-transform">
                  100+
                </span>
                <span className="text-[8px] min-[360px]:text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500 font-mono">
                  MENTORED
                </span>
              </div>

              {/* Row 2, Col 3: Orange Box - Location animated cell */}
              <div className="relative overflow-hidden h-full min-h-[72px] sm:min-h-[88px]">
                <LocationAnimatedCell />
              </div>
            </motion.div>
          </motion.div>

          {/* ─────────── RIGHT COLUMN: Design → Code Card ─────────── */}
          <div className="lg:col-span-5 flex flex-col bg-[#F4F4F0] h-[380px] min-[380px]:h-[420px] sm:h-[480px] lg:h-full lg:max-h-full min-h-0 overflow-hidden">
            <DesignToCodeMorphingCard />
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Location Box: 2-State Vertical Slide Animation (Orange Globe ➔ Chennai, India) ─────
function LocationAnimatedCell() {
  const [showLocation, setShowLocation] = useState(false);
  const cellRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cellRef, { margin: "0px" });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setShowLocation((prev) => !prev);
    }, 4500); // loops every 4.5 seconds

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div ref={cellRef} className="w-full h-full relative overflow-hidden bg-white select-none">
      {/* State 2: "Chennai, India" text with GMT +5:30 subtext */}
      <motion.div
        animate={{ y: showLocation ? "0%" : "-20%" }}
        transition={{ duration: 0.65, ease: [0.65, 0, 0.35, 1] }}
        className="w-full h-full bg-white flex flex-col items-center justify-center p-4 group cursor-default"
      >
        <MapPin weight="fill" className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF462D] mb-1.5" />
        <span className="text-[#FF462D] font-black text-[11px] sm:text-xs uppercase tracking-widest text-center leading-snug font-mono">
          CHENNAI,<br />INDIA
        </span>
        <span className="text-[9px] font-mono text-zinc-400 mt-1">GMT +5:30</span>
        {/* Red accent bar at bottom */}
        <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF462D]" />
      </motion.div>

      {/* State 1: Full orange background with centered globe/world icon only */}
      <motion.div
        animate={{ y: showLocation ? "100%" : "0%" }}
        transition={{ duration: 0.65, ease: [0.65, 0, 0.35, 1] }}
        className="absolute inset-0 bg-[#FF462D] flex items-center justify-center z-10 cursor-default"
      >
        <GlobeSimple weight="bold" className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </motion.div>
    </div>
  );
}

// ─── Brand Logos for Live Handoff Mockups ────────────────────────────────────
function FigmaLogo({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  );
}

function VSCodeLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
        fill="#007ACC"
      />
    </svg>
  );
}

// ─── Design → Code Morphing Card (Right Column) ───────────────────────────────
function DesignToCodeMorphingCard() {
  // Single unified cycle timing:
  // Phase 1: Downward slide (0s -> 7.5s) synced 1:1 with code typing
  // Phase 2: Grid-only reveal hold (7.5s -> 8.3s) where image is fully down out of view
  // Phase 3: Loop in from top (8.3s -> 9.7s) entering from -135% smoothly down to 0%
  // Phase 4: Settle & reset (9.7s -> 10.2s) resting at 0% before starting next loop
  const SLIDE_DOWN_MS = 7500;
  const HOLD_MS = 800;
  const ENTER_LOOP_MS = 1400;
  const REST_MS = 500;
  const CYCLE_MS = SLIDE_DOWN_MS + HOLD_MS + ENTER_LOOP_MS + REST_MS;

  const [cycleTime, setCycleTime] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardContainerRef, { margin: "0px" });

  const fullCodeLines = [
    {
      num: "01",
      tokens: [
        { text: "import ", color: "text-[#FF79C6] font-bold" },
        { text: "React, { useState } ", color: "text-[#38BDF8]" },
        { text: "from ", color: "text-[#FF79C6]" },
        { text: '"react";', color: "text-[#50FA7B]" },
      ],
    },
    {
      num: "02",
      tokens: [
        { text: "export default function ", color: "text-[#FF79C6] font-bold" },
        { text: "OracleFusionLogin", color: "text-[#61AFEF] font-bold" },
        { text: "() {", color: "text-zinc-300" },
      ],
    },
    {
      num: "03",
      tokens: [
        { text: "  const [", color: "text-[#FF79C6]" },
        { text: "username, setUsername", color: "text-[#38BDF8]" },
        { text: "] = ", color: "text-zinc-300" },
        { text: "useState", color: "text-[#C678DD]" },
        { text: '("', color: "text-zinc-300" },
        { text: "Demo_Admin", color: "text-[#50FA7B]" },
        { text: '");', color: "text-zinc-300" },
      ],
    },
    {
      num: "04",
      tokens: [
        { text: "  const [", color: "text-[#FF79C6]" },
        { text: "password, setPassword", color: "text-[#38BDF8]" },
        { text: "] = ", color: "text-zinc-300" },
        { text: "useState", color: "text-[#C678DD]" },
        { text: '("");', color: "text-[#50FA7B]" },
      ],
    },
    {
      num: "05",
      tokens: [
        { text: "  const [", color: "text-[#FF79C6]" },
        { text: "rememberMe", color: "text-[#38BDF8]" },
        { text: "] = ", color: "text-zinc-300" },
        { text: "useState", color: "text-[#C678DD]" },
        { text: "(", color: "text-zinc-300" },
        { text: "true", color: "text-[#F59E0B]" },
        { text: ");", color: "text-zinc-300" },
      ],
    },
    {
      num: "06",
      tokens: [{ text: "  return (", color: "text-zinc-300" }],
    },
    {
      num: "07",
      tokens: [
        { text: "    <", color: "text-zinc-400" },
        { text: "div", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"grid grid-cols-12 rounded-xl bg-white shadow-2xl"', color: "text-[#50FA7B]" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "08",
      tokens: [
        { text: "      {/* Brand Hero Panel */}", color: "text-zinc-500 italic font-pixel" },
      ],
    },
    {
      num: "09",
      tokens: [
        { text: "      <", color: "text-zinc-400" },
        { text: "div", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"col-span-5 bg-gradient-to-br from-red-600 to-red-950 p-6 text-white"', color: "text-[#50FA7B]" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "10",
      tokens: [
        { text: "        <", color: "text-zinc-400" },
        { text: "h2", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"text-2xl font-bold"', color: "text-[#50FA7B]" },
        { text: ">Powering Digital Transformation</", color: "text-zinc-200" },
        { text: "h2", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "11",
      tokens: [
        { text: "        <", color: "text-zinc-400" },
        { text: "p", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"text-xs opacity-90 mt-2"', color: "text-[#50FA7B]" },
        { text: ">Seamless, secure, intelligent cloud solutions.</", color: "text-zinc-200" },
        { text: "p", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "12",
      tokens: [
        { text: "      </", color: "text-zinc-400" },
        { text: "div", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "13",
      tokens: [
        { text: "      {/* Sign In Form */}", color: "text-zinc-500 italic font-pixel" },
      ],
    },
    {
      num: "14",
      tokens: [
        { text: "      <", color: "text-zinc-400" },
        { text: "div", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"col-span-7 p-6 flex flex-col justify-center"', color: "text-[#50FA7B]" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "15",
      tokens: [
        { text: "        <", color: "text-zinc-400" },
        { text: "h3", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"text-xl font-bold text-gray-900"', color: "text-[#50FA7B]" },
        { text: ">Sign In</", color: "text-zinc-200" },
        { text: "h3", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "16",
      tokens: [
        { text: "        <", color: "text-zinc-400" },
        { text: "p", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"text-xs text-gray-500 mb-4"', color: "text-[#50FA7B]" },
        { text: ">Securely access your account</", color: "text-zinc-200" },
        { text: "p", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "17",
      tokens: [
        { text: "        <", color: "text-zinc-400" },
        { text: "form", color: "text-[#E06C75] font-bold" },
        { text: " onSubmit=", color: "text-[#F59E0B]" },
        { text: "{(e) => e.preventDefault()}", color: "text-[#61AFEF]" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"space-y-3"', color: "text-[#50FA7B]" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "18",
      tokens: [
        { text: "          <", color: "text-zinc-400" },
        { text: "label", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"text-xs font-semibold text-gray-700"', color: "text-[#50FA7B]" },
        { text: ">Username</", color: "text-zinc-200" },
        { text: "label", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "19",
      tokens: [
        { text: "          <", color: "text-zinc-400" },
        { text: "input", color: "text-[#E06C75] font-bold" },
        { text: " value=", color: "text-[#F59E0B]" },
        { text: "{username}", color: "text-[#61AFEF]" },
        { text: " onChange=", color: "text-[#F59E0B]" },
        { text: "{(e) => setUsername(e.target.value)}", color: "text-[#61AFEF]" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"w-full px-3 py-1.5 border rounded text-xs"', color: "text-[#50FA7B]" },
        { text: " />", color: "text-zinc-400" },
      ],
    },
    {
      num: "20",
      tokens: [
        { text: "          <", color: "text-zinc-400" },
        { text: "label", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"text-xs font-semibold text-gray-700"', color: "text-[#50FA7B]" },
        { text: ">Password</", color: "text-zinc-200" },
        { text: "label", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "21",
      tokens: [
        { text: "          <", color: "text-zinc-400" },
        { text: "input", color: "text-[#E06C75] font-bold" },
        { text: " type=", color: "text-[#F59E0B]" },
        { text: '"password"', color: "text-[#50FA7B]" },
        { text: " placeholder=", color: "text-[#F59E0B]" },
        { text: '"••••••••••••"', color: "text-[#50FA7B]" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"w-full px-3 py-1.5 border rounded text-xs"', color: "text-[#50FA7B]" },
        { text: " />", color: "text-zinc-400" },
      ],
    },
    {
      num: "22",
      tokens: [
        { text: "          <", color: "text-zinc-400" },
        { text: "div", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"flex items-center justify-between text-xs"', color: "text-[#50FA7B]" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "23",
      tokens: [
        { text: "            <", color: "text-zinc-400" },
        { text: "label", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"flex items-center gap-1 text-gray-600"', color: "text-[#50FA7B]" },
        { text: ">", color: "text-zinc-400" },
        { text: "<", color: "text-zinc-400" },
        { text: "input", color: "text-[#E06C75] font-bold" },
        { text: " type=", color: "text-[#F59E0B]" },
        { text: '"checkbox"', color: "text-[#50FA7B]" },
        { text: " defaultChecked /> Remember me</", color: "text-zinc-200" },
        { text: "label", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "24",
      tokens: [
        { text: "            <", color: "text-zinc-400" },
        { text: "a", color: "text-[#E06C75] font-bold" },
        { text: " href=", color: "text-[#F59E0B]" },
        { text: '"#"', color: "text-[#50FA7B]" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"font-semibold text-gray-800"', color: "text-[#50FA7B]" },
        { text: ">Forgot Password ?</", color: "text-zinc-200" },
        { text: "a", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "25",
      tokens: [
        { text: "          </", color: "text-zinc-400" },
        { text: "div", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "26",
      tokens: [
        { text: "          <", color: "text-zinc-400" },
        { text: "button", color: "text-[#E06C75] font-bold" },
        { text: " type=", color: "text-[#F59E0B]" },
        { text: '"submit"', color: "text-[#50FA7B]" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded"', color: "text-[#50FA7B]" },
        { text: ">Login</", color: "text-zinc-200" },
        { text: "button", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "27",
      tokens: [
        { text: "          <", color: "text-zinc-400" },
        { text: "p", color: "text-[#E06C75] font-bold" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"text-center text-xs text-gray-500 pt-1"', color: "text-[#50FA7B]" },
        { text: ">Don&apos;t have an Account ? <", color: "text-zinc-200" },
        { text: "a", color: "text-[#E06C75] font-bold" },
        { text: " href=", color: "text-[#F59E0B]" },
        { text: '"#"', color: "text-[#50FA7B]" },
        { text: " className=", color: "text-[#F59E0B]" },
        { text: '"font-bold text-gray-900"', color: "text-[#50FA7B]" },
        { text: ">Register</", color: "text-zinc-200" },
        { text: "a", color: "text-[#E06C75] font-bold" },
        { text: "></", color: "text-zinc-200" },
        { text: "p", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "28",
      tokens: [
        { text: "        </", color: "text-zinc-400" },
        { text: "form", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "29",
      tokens: [
        { text: "      </", color: "text-zinc-400" },
        { text: "div", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "30",
      tokens: [
        { text: "    </", color: "text-zinc-400" },
        { text: "div", color: "text-[#E06C75] font-bold" },
        { text: ">", color: "text-zinc-400" },
      ],
    },
    {
      num: "31",
      tokens: [{ text: "  );", color: "text-zinc-300" }],
    },
    {
      num: "32",
      tokens: [{ text: "}", color: "text-zinc-300" }],
    },
  ];

  const totalLength = fullCodeLines.reduce(
    (acc, line) => acc + line.tokens.reduce((tAcc, token) => tAcc + token.text.length, 0),
    0
  );

  // Single master RAF animation loop for absolute synchronization
  useEffect(() => {
    if (!isInView) return;

    let animationFrameId: number;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) % CYCLE_MS;
      setCycleTime(elapsed);
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [CYCLE_MS, isInView]);

  // 4-Phase loop calculation:
  // Phase 1 (0ms -> 7500ms): Continuous slide down (0% -> 135%) synchronized with typing
  // Phase 2 (7500ms -> 8300ms): Image is held off-screen below (135%), fully revealing technical grid lines
  // Phase 3 (8300ms -> 9700ms): Image smoothly loops in from top (-135% -> 0%) with cubic ease-out
  // Phase 4 (9700ms -> 10200ms): Settle at 0% before next cycle seamlessly starts
  let imageTranslateY = 0;
  let typedChars = 0;

  if (cycleTime < SLIDE_DOWN_MS) {
    const p = cycleTime / SLIDE_DOWN_MS;
    imageTranslateY = p * 135;
    typedChars = Math.min(totalLength, Math.floor(p * totalLength));
  } else if (cycleTime < SLIDE_DOWN_MS + HOLD_MS) {
    imageTranslateY = 135;
    typedChars = totalLength;
  } else if (cycleTime < SLIDE_DOWN_MS + HOLD_MS + ENTER_LOOP_MS) {
    const enterP = (cycleTime - (SLIDE_DOWN_MS + HOLD_MS)) / ENTER_LOOP_MS;
    // Cubic ease-out for smooth decelerating landing into 0%
    const eased = 1 - Math.pow(1 - enterP, 3);
    imageTranslateY = -135 + eased * 135;
    typedChars = 0;
  } else {
    imageTranslateY = 0;
    typedChars = 0;
  }

  // Smooth auto-scroll following the code down as new lines type
  useEffect(() => {
    const container = codeContainerRef.current;
    if (!container) return;

    if (typedChars === 0) {
      container.scrollTop = 0;
    } else {
      container.scrollTop = container.scrollHeight - container.clientHeight;
    }
  }, [typedChars]);

  let charCounter = 0;

  return (
    <div ref={cardContainerRef} className="w-full h-full grid grid-rows-[1.15fr_36px_0.85fr] border-b-2 lg:border-b-0 border-black bg-white select-none relative overflow-hidden">

      {/* ── TOP HALF: Design UI Mockup ── */}
      <div className="w-full h-full min-h-0 bg-white border-b-2 border-black flex flex-col relative overflow-hidden">
        {/* Safari titlebar */}
        <div className="px-2.5 sm:px-3 py-1.5 bg-[#E2E8F0] border-b border-black flex items-center justify-between z-20 shrink-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56] border border-black/30" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E] border border-black/30" />
            <span className="w-2 h-2 rounded-full bg-[#27C93F] border border-black/30" />
          </div>
          <div className="flex items-center gap-1 px-1.5 min-[360px]:px-2.5 py-0.5 bg-white border border-zinc-300 rounded text-[8px] min-[360px]:text-[9px] font-mono text-zinc-700 shadow-inner max-w-[170px] sm:max-w-none truncate">
            <FigmaLogo className="w-2 h-2.5 min-[360px]:w-2.5 min-[360px]:h-3.5 shrink-0" />
            <span className="truncate">designbysanthosh.com/v2</span>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <span className="text-[7.5px] min-[360px]:text-[8px] font-pixel text-zinc-600 font-bold hidden min-[340px]:inline">[FIGMA_UI]</span>
          </div>
        </div>

        {/* Technical Grid Background Layer — clean grid lines with drafting crosshairs */}
        <div
          className="flex-1 min-h-0 relative overflow-hidden bg-[#F8F9FA] p-2 sm:p-3.5 flex items-center justify-center"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        >
          {/* Subtle corner registration crosshairs */}
          <span className="absolute top-2 left-2 text-[11px] font-mono text-zinc-400 font-bold select-none pointer-events-none">+</span>
          <span className="absolute top-2 right-2 text-[11px] font-mono text-zinc-400 font-bold select-none pointer-events-none">+</span>
          <span className="absolute bottom-2 left-2 text-[11px] font-mono text-zinc-400 font-bold select-none pointer-events-none">+</span>
          <span className="absolute bottom-2 right-2 text-[11px] font-mono text-zinc-400 font-bold select-none pointer-events-none">+</span>

          <div
            style={{
              transform: `translateY(${imageTranslateY}%)`,
              opacity: 1,
              willChange: "transform",
            }}
            className="relative max-h-full max-w-full aspect-[5224/3396] bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden z-10 flex items-center justify-center"
          >
            <img
              src="/login_website.png"
              alt="Oracle Fusion Login UI Design"
              className="w-full h-full object-contain block brightness-[1.04] contrast-[1.03]"
            />
          </div>
        </div>
      </div>

      {/* ── CENTRE DIVIDER ── */}
      <div className="h-[32px] sm:h-[36px] shrink-0 bg-[#FAED00] border-b-2 border-black px-2 sm:px-4 flex items-center justify-between z-10">
        <span className="text-[8.5px] min-[360px]:text-[9.5px] sm:text-[10px] font-pixel text-black font-bold uppercase tracking-wider sm:tracking-widest">
          DESIGN ➔ CODE
        </span>
        <div className="px-2 sm:px-3 py-0.5 bg-black text-[#FAED00] font-pixel text-[8px] min-[360px]:text-[9px] uppercase font-bold border border-black shadow-[2px_2px_0px_0px_rgba(250,237,0,1)]">
          FIGMA ➔ JSX
        </div>
        <span className="text-[8px] min-[360px]:text-[9px] font-mono font-bold text-black uppercase">
          LIVE HANDOFF
        </span>
      </div>

      {/* ── BOTTOM HALF: VS Code Live Typing (JSX) ── */}
      <div className="w-full h-full min-h-0 bg-[#0D1117] flex flex-col relative overflow-hidden text-zinc-200 font-mono">
        {/* IDE titlebar */}
        <div className="px-2.5 sm:px-3 py-1.5 bg-[#161B22] border-b border-[#30363D] flex items-center justify-between shrink-0 text-[10px]">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <VSCodeLogo className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span className="font-pixel text-emerald-400 font-bold uppercase text-[8.5px] min-[360px]:text-[10px]">
              [OracleFusionLogin.jsx]
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[8px] min-[360px]:text-[9px] text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 bg-emerald-950/40 font-mono">
              JSX Syntax
            </span>
          </div>
        </div>

        {/* Code: starts at TOP-LEFT, font text-[11px], smooth auto-scrolling locked inside container */}
        <div
          ref={codeContainerRef}
          className="flex-1 min-h-0 w-full p-3 text-[11px] leading-[1.55] overflow-y-auto overflow-x-hidden flex flex-col justify-start items-start scrollbar-none"
        >
          {fullCodeLines.map((line) => {
            const lineStartChar = charCounter;
            const lineTokens = line.tokens.map((token) => {
              const startIdx = charCounter;
              charCounter += token.text.length;
              if (typedChars <= startIdx) return null;
              const visible = token.text.slice(0, Math.min(token.text.length, typedChars - startIdx));
              return (
                <span key={startIdx} className={token.color}>
                  {visible}
                </span>
              );
            });

            if (lineStartChar > typedChars && line.num !== "01") return null;

            const isActiveLine = typedChars >= lineStartChar && typedChars < charCounter;

            return (
              <div
                key={line.num}
                className={`flex items-start gap-2.5 w-full ${isActiveLine ? "active-typing-line" : ""}`}
              >
                <span className="text-[9px] text-zinc-600 select-none w-4 text-right shrink-0 mt-0.5">
                  {line.num}
                </span>
                <div className="whitespace-pre font-mono">
                  {lineTokens}
                  {isActiveLine && (
                    <span className="inline-block w-[2px] h-[13px] bg-emerald-400 align-middle animate-pulse ml-0.5" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


