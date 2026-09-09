"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const aboutSlides = [
  {
    category: "ABOUT & CRAFT",
    headline: "CRAFTING INTUITIVE DIGITAL PRODUCTS & INTERACTIVE SYSTEMS.",
    detail: "FOCUSED ON CONVERSION-LED PRODUCTS, PRACTICAL UX ARCHITECTURE & CLEAN HANDOFFS.",
  },
  {
    category: "01 · CURRENT LEADERSHIP",
    headline: "HEAD OF PRODUCT DESIGN & AI AT COMMERCE AGENTS.",
    detail: "DIRECTING 0-TO-1 MULTI-AGENT INTERACTION MODELS & ENTERPRISE WEB ECOSYSTEMS.",
  },
  {
    category: "02 · FEATURED CLIENTS",
    headline: "NEBRASKA FURNITURE MART · PARLA (UK) · URBAN COMPANY.",
    detail: "SERVED CLIENTS ACROSS US, UK & INDIA MARKETS ON MISSION-CRITICAL PLATFORMS.",
  },
  {
    category: "03 · SHIPPED PRODUCTS",
    headline: "SHOW & SELL · VIDYA'S KITCHEN · MAKEON BUILDER.",
    detail: "FROM ENTERPRISE SCHEDULERS & PWAS TO INTERACTIVE STEM LEARNING APPS.",
  },
  {
    category: "04 · CORE TOOLKIT",
    headline: "FIGMA · NEXT.JS · TYPESCRIPT · TAILWIND · AI WORKFLOWS.",
    detail: "BRIDGING PRODUCT DESIGN, RESEARCH & PRODUCTION-READY CODE AS A VIBE CODER.",
  },
];

export default function HeroV2() {
  const [currentAboutIdx, setCurrentAboutIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAboutIdx((prev) => (prev + 1) % aboutSlides.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: "5+", label: "Years" },
    { value: "US · UK", label: "Clients" },
    { value: "10+", label: "Projects" },
    { value: "100+", label: "Mentored" },
    { value: "10K+", label: "Downloads" },
  ];

  return (
    <section className="w-full bg-[#F4F4F0] border-b-2 border-black">
      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black bg-white">
        
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-black">
          
          {/* Left Column: Big Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 md:p-12 lg:p-14 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white">
            <div>
              {/* Roles Badge / Pill - Increased size */}
              <div className="flex items-center gap-2.5 sm:gap-3 text-base sm:text-lg md:text-xl font-black tracking-wider uppercase text-black mb-5">
                <span>UX DESIGNER</span>
                <span className="text-[#FF462D]">×</span>
                <span>VIBE CODER</span>
                <span className="text-[#FF462D]">×</span>
                <span>MENTOR</span>
              </div>

              {/* Headline - Reduced/refined size */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight uppercase text-black select-none font-sans mb-6">
                I design experiences people <span className="text-[#FF462D]">feel</span> — then build them.
              </h1>

              {/* Sub-description with yellow accent square */}
              <div className="flex items-start gap-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-zinc-800 mb-8 max-w-xl">
                <span className="w-3.5 h-3.5 bg-[#FAED00] border border-black inline-block shrink-0 mt-0.5" />
                <span>UX DESIGNER FROM CHENNAI FOCUSED ON CONVERSION-LED PRODUCTS, PRACTICAL SYSTEMS, AND CLEAN HANDOFFS.</span>
              </div>
            </div>

            {/* View Work Action Box with Yellow Offset Drop-Shadow matching Send Brief style */}
            <div className="pt-2">
              <Link
                href="#work"
                className="inline-flex items-center justify-between gap-6 px-8 py-4 bg-black text-white hover:bg-zinc-900 border-2 border-black shadow-[6px_6px_0px_0px_rgba(250,237,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all text-xs sm:text-sm font-black tracking-widest uppercase select-none group min-w-[210px] cursor-pointer"
              >
                <span>VIEW WORK</span>
                <ArrowUpRight
                  weight="bold"
                  className="w-4 h-4 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Statement, Top-Right Location Badge */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#F4F4F0]">
            
            <div className="flex items-stretch border-b-2 lg:border-b-0 border-black bg-white min-h-[140px] h-full">
              
              {/* Text statement with sequential animated transitions */}
              <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FF462D]">
                    {aboutSlides[currentAboutIdx].category}
                  </span>
                  <div className="flex items-center gap-1">
                    {aboutSlides.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 transition-all duration-300 ${
                          i === currentAboutIdx ? "w-4 bg-[#FF462D]" : "w-1.5 bg-black/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[96px] sm:min-h-[105px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentAboutIdx}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full flex flex-col justify-center"
                    >
                      <h2 className="text-sm sm:text-base md:text-[17px] font-black uppercase tracking-tight text-black leading-snug mb-1.5">
                        {aboutSlides[currentAboutIdx].headline}
                      </h2>
                      <p className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 leading-normal">
                        {aboutSlides[currentAboutIdx].detail}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Right icon & status column */}
              <div className="flex flex-col items-stretch border-l-2 border-black w-24 sm:w-28 md:w-32 shrink-0">
                {/* Green Status Box with Available text */}
                <div className="flex-1 flex flex-col items-center justify-center p-3 sm:p-4 border-b-2 border-black bg-[#10B981] hover:bg-[#059669] transition-colors">
                  <span className="text-[10px] sm:text-[11px] md:text-xs font-black uppercase tracking-wider text-center text-black leading-tight select-none">
                    AVAILABLE<br />FOR<br />FULL-TIME
                  </span>
                </div>

                {/* Brutalist Location & Globe Animated Badge with Slide Effect */}
                <div className="flex-1 relative flex flex-col items-center justify-center p-3 sm:p-4 bg-[#FF462D] overflow-hidden select-none min-h-[110px]">
                  
                  {/* Default State: Orange Background with Brutalist Globe Symbol */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-9 h-9 sm:w-10 sm:h-10 stroke-black fill-none"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>

                  {/* Sliding White Panel */}
                  <motion.div
                    animate={{
                      y: ["-100%", "0%", "0%", "-100%"],
                    }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      repeatDelay: 0.6,
                      ease: [0.76, 0, 0.24, 1],
                      times: [0, 0.25, 0.75, 1],
                    }}
                    className="absolute inset-0 bg-white z-10"
                  />

                  {/* Sliding Content (Orange Location Icon + Text on White) */}
                  <motion.div
                    animate={{
                      y: [30, 0, 0, -30],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      repeatDelay: 0.6,
                      ease: [0.76, 0, 0.24, 1],
                      times: [0, 0.25, 0.75, 1],
                    }}
                    className="relative z-20 flex flex-col items-center justify-center gap-1.5 pointer-events-none text-center"
                  >
                    <MapPin weight="fill" className="w-7 h-7 sm:w-8 sm:h-8 text-[#FF462D] drop-shadow-sm" />
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-wider text-[#FF462D] leading-tight">
                      CHENNAI,<br />INDIA
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row Strip directly underneath */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black border-b-0 bg-white">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`p-5 sm:p-6 md:p-7 flex flex-col justify-center items-center text-center hover:bg-zinc-50 transition-colors ${
                idx === stats.length - 1 ? "col-span-2 sm:col-span-1 border-t-2 sm:border-t-0" : ""
              }`}
            >
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FF462D] tracking-tight uppercase leading-none font-sans mb-1.5">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-zinc-600">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
