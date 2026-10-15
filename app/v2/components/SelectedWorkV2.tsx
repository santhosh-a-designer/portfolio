"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ArrowDown } from "@phosphor-icons/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import ProjectWindowStack, { ProjectItem } from "./ProjectWindowStack";
import GraphicDesignModal from "./GraphicDesignModal";
import UxUiShortsModal, { UX_SHORTS_DATA } from "./UxUiShortsModal";
import { POSTER_PROJECTS } from "@/lib/graphicDesignProjects/posterProjects";

const clientLogos = [
  { name: "Makeon", src: "/clients/makeon-norm.webp", widthClass: "w-24 sm:w-28 md:w-32", heightClass: "h-6 sm:h-7 md:h-7.5" },
  { name: "Parla", src: "/clients/parla-norm.webp", widthClass: "w-24 sm:w-30 md:w-34", heightClass: "h-5 sm:h-5.5 md:h-6" },
  { name: "Nebraska Furniture Mart", src: "/clients/nfm-norm.webp", widthClass: "w-24 sm:w-30 md:w-34", heightClass: "h-6 sm:h-7 md:h-8" },
  { name: "iRasus", src: "/clients/irasus-norm.webp", widthClass: "w-24 sm:w-28 md:w-32", heightClass: "h-6 sm:h-7 md:h-8" },
  { name: "Intellemo", src: "/clients/intellemo-full.webp", widthClass: "w-24 sm:w-28 md:w-32", heightClass: "h-6 sm:h-7 md:h-8" },
  { name: "We Two Pets", src: "/clients/wetwopets-norm.webp", widthClass: "w-20 sm:w-24 md:w-26", heightClass: "h-6 sm:h-7 md:h-8" },
  { name: "We Two Brand", src: "/clients/wetwo-brand.webp", widthClass: "w-8 sm:w-9 md:w-10", heightClass: "h-8 sm:h-9 md:h-10" },
];

export default function SelectedWorkV2() {
  const [isGraphicModalOpen, setIsGraphicModalOpen] = useState(false);
  const [activeGraphicId, setActiveGraphicId] = useState("project-1");

  const [isShortsModalOpen, setIsShortsModalOpen] = useState(false);
  const [activeShortsId, setActiveShortsId] = useState("p1");

  const openGraphicProject = (id: string) => {
    setActiveGraphicId(id);
    setIsGraphicModalOpen(true);
  };

  const openShortsProject = (id: string) => {
    setActiveShortsId(id);
    setIsShortsModalOpen(true);
  };

  const projects: ProjectItem[] = [
    {
      id: "01",
      num: "01",
      title: "VIDYA'S KITCHEN",
      category: "ZERO TO LIVE",
      badge: "PWA / DASHBOARD / WHATSAPP BOT",
      href: "/case-studies/vidyas-kitchen-pwa",
      liveUrl: "https://www.vidyaskitchenhome.com/",
      isHighlight: true,
      image: "/case-studies/vidyas-kitchen/VK_Clean.webp",
      mockupType: "forma",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Razorpay", "WhatsApp API"],
      description: (
        <>
          Sivakasi Town&apos;s <span className="text-[#FF462D] font-black">FIRST-EVER</span> home food delivery app — built from zero infrastructure to a live, real-time ordering system, replacing manual WhatsApp call chaos with automated kitchen dispatch — eliminating marketplace fees while powering <span className="text-[#FF462D] font-black">ZERO ORDER DROP-OFFS</span> and <span className="inline-block px-1.5 py-0.5 bg-[#FAED00] text-black font-black border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] text-[10.5px] sm:text-[11.5px] tracking-tight">FRICTIONLESS REPEAT ORDERS</span>.
        </>
      ),
    },
    {
      id: "02",
      num: "02",
      title: "SHOW & SELL",
      category: "ECOMMERCE / SCHEDULER",
      badge: "CTA / VIDEO CALL / IN-CALL CHECKOUT",
      href: "/case-studies/parla-show-and-sell",
      image: "/case-studies/parla/parla-dashboard-mockup.webp",
      mockupType: "parla",
      techStack: ["Figma", "Next.js", "TypeScript", "Tailwind", "WebRTC Video", "Ecommerce CRM"],
      description: (
        <>
          Bridging high-value retail ecommerce and instant human trust — an assisted-selling platform connecting online shoppers directly to retail floor specialists via <span className="text-[#FF462D] font-black">ONE-CLICK SCHEDULING</span>, interactive video consultation, and in-call checkout that turns browsing doubt into immediate sales with <span className="inline-block px-1.5 py-0.5 bg-[#FAED00] text-black font-black border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] text-[10.5px] sm:text-[11.5px] tracking-tight">38% FRICTION REDUCTION</span>.
        </>
      ),
    },
    {
      id: "03",
      num: "03",
      title: "WE TWO PETS",
      category: "PET COMMERCE",
      badge: "STORE / CHECKOUT / TRACKING",
      href: "/case-studies/we-two-pets",
      liveUrl: "https://www.wetwopets.com/",
      image: "/case-studies/we-two-pets/wetwo-hero-mockup.webp",
      mockupType: "forma",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "FastAPI", "Gemini AI", "Cashfree"],
      description: (
        <>
          From dropship noise to an editorial brand that owns the order — powered by an <span className="text-[#FF462D] font-black">AUTONOMOUS AI GAP ENGINE</span> that scours global catalogs, enforces an <span className="text-[#FF462D] font-black">INDIA-AVAILABILITY VETO</span>, and requires <span className="inline-block px-1.5 py-0.5 bg-[#FAED00] text-black font-black border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] text-[10.5px] sm:text-[11.5px] tracking-tight">TWO HUMAN VOTES</span> before any exclusive pet essential ever reaches the live storefront.
        </>
      ),
    },
  ];

  return (
    <section id="clients-work" className="w-full bg-[#F4F4F0] border-b-2 border-black scroll-mt-20 px-0 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black bg-white">
        
        {/* Top Header Row of Selected Work: Yellow Title Block + White Marquee */}
        <div className="border-b-2 border-black bg-white overflow-hidden flex items-center h-12 sm:h-16 md:h-20 lg:h-24 relative">
          
          {/* Static Title Label with Separator — ONLY this block is yellow (#FAED00) */}
          <div className="px-2.5 min-[360px]:px-3.5 sm:px-6 md:px-8 lg:px-10 h-full flex items-center justify-center shrink-0 border-r-2 border-black bg-[#FAED00] z-10 select-none font-mono">
            <span className="text-[9px] min-[360px]:text-[10px] sm:text-xs md:text-sm lg:text-base font-black uppercase tracking-wider text-black whitespace-nowrap">
              CLIENTS &amp; COMPANIES
            </span>
          </div>

          {/* Smooth Continuous 2x Looping Marquee — clean white background */}
          <div className="flex-1 overflow-hidden h-full flex items-center relative bg-white">
            <motion.div
              className="flex items-center gap-5 min-[360px]:gap-7 sm:gap-12 md:gap-16 lg:gap-20 shrink-0 pr-5 min-[360px]:pr-7 sm:pr-12 md:pr-16 lg:pr-20"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 16,
              }}
            >
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <div
                  key={`${logo.name}-marquee-${idx}`}
                  className="flex items-center justify-center shrink-0 h-full py-1.5 px-1 sm:px-2"
                >
                  <div
                    className={`relative ${logo.heightClass} ${logo.widthClass} min-h-[24px] min-w-[72px] flex items-center justify-center`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="(max-width: 640px) 110px, (max-width: 1024px) 160px, 200px"
                      className="object-contain object-center filter contrast-110"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Section Title Banner — Target anchor for VIEW WORK & WORK nav item */}
        <motion.div
          id="work"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b-2 border-black p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white relative select-none"
        >
          <span className="absolute top-2.5 right-4 text-[10px] font-pixel text-zinc-400 hidden sm:inline">[STACKED_WINDOWS_V2]</span>
          <div>
            <div className="flex items-center gap-2 mb-1.5 font-mono">
              <span className="text-[10px] font-mono font-bold text-[#FF462D] uppercase tracking-wider">// SHIPPED_PRODUCTS</span>
              <span className="text-zinc-300">/</span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">3 LIVE PLATFORMS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black font-mono leading-none">
              SELECTED WORK.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-600">
            <span className="w-2 h-2 rounded-full bg-[#FF462D] animate-pulse" />
            <span className="uppercase font-bold tracking-wider">STACKING WINDOWS SCROLL ↓</span>
          </div>
        </motion.div>

        {/* ─── Dedicated "New Window" Stacking Project Cards ─── */}
        <div className="w-full bg-[#F4F4F0]">
          <ProjectWindowStack projects={projects} />
        </div>

        {/* ─── Archives & Shorts Dual Banner ─── */}
        <div className="border-t-2 border-black grid grid-cols-1 lg:grid-cols-2 bg-white">
          {/* Left: UX / UI Shorts */}
          <div className="p-6 sm:p-8 md:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-between bg-white hover:bg-[#FAED00]/5 transition-colors group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-black text-[#FF462D] uppercase tracking-wider">
                  // RAPID_CASE_STUDIES
                </span>
                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                  3 CASE SHORTS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-mono uppercase tracking-tight text-black mb-3">
                UX / UI SHORTS
              </h3>
              <p className="text-xs sm:text-[13px] text-zinc-600 font-sans leading-relaxed mb-5 font-medium">
                Focused micro case-studies tackling real hardware, IoT telemetry, and rural banking kiosk workflows. Tap any short below:
              </p>

              {/* Interactive Shorts Cards */}
              <div className="grid grid-cols-1 gap-2.5 mb-6">
                {UX_SHORTS_DATA.map((short) => (
                  <button
                    key={short.id}
                    type="button"
                    onClick={() => openShortsProject(short.id)}
                    className="p-3 border-2 border-black bg-zinc-50 hover:bg-[#FAED00]/15 hover:border-black transition-all cursor-pointer flex items-center justify-between gap-3 text-left shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 group/short"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        style={{ backgroundColor: short.accent }}
                        className="px-2 py-1 text-[10px] font-mono font-black border border-black text-black shrink-0"
                      >
                        {short.projectLabel.replace("Project ", "P")}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-mono font-black uppercase text-black truncate group-hover/short:text-[#FF462D] transition-colors">
                          {short.projectTitle}
                        </div>
                        <div className="text-[10px] text-zinc-500 font-sans truncate mt-0.5">
                          {short.tagline}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      weight="bold"
                      className="w-3.5 h-3.5 text-zinc-400 group-hover/short:text-black shrink-0 transition-colors"
                    />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => openShortsProject("p1")}
              className="w-full py-3 px-4 bg-black hover:bg-zinc-800 text-white font-mono font-black text-xs uppercase tracking-wider flex items-center justify-between transition-colors border-2 border-black shadow-[3px_3px_0px_0px_rgba(250,237,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer"
            >
              <span>INSPECT ALL UX/UI SHORTS (WITH VIDEO DEMOS)</span>
              <ArrowRight weight="bold" className="w-4 h-4 text-[#FAED00]" />
            </button>
          </div>

          {/* Right: Graphic Design Work */}
          <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white hover:bg-[#FF462D]/5 transition-colors group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono font-black text-zinc-500 uppercase tracking-wider">
                  // VISUAL_SYSTEMS
                </span>
                <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                  8 PRINT &amp; PACKAGING WORKS
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-mono uppercase tracking-tight text-black mb-3">
                GRAPHIC DESIGN ARCHIVE
              </h3>
              <p className="text-xs sm:text-[13px] text-zinc-600 font-sans leading-relaxed mb-5 font-medium">
                Brand identities, packaging typography, poster collections, and experimental visual systems. Tap any work below to inspect full details:
              </p>

              {/* Interactive Graphic Design Work Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {POSTER_PROJECTS.map((proj) => (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => openGraphicProject(proj.id)}
                    className="p-3 text-left border-2 border-black bg-zinc-50 hover:bg-[#FAED00]/15 hover:border-black transition-all cursor-pointer group/card flex flex-col justify-between shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(255,70,45,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[9px] font-mono font-black px-1.5 py-0.5 bg-black text-white uppercase tracking-wider">
                        {proj.projectLabel}
                      </span>
                      <ArrowUpRight
                        weight="bold"
                        className="w-3.5 h-3.5 text-zinc-400 group-hover/card:text-[#FF462D] transition-colors"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-black uppercase tracking-tight text-black line-clamp-1 group-hover/card:text-[#FF462D] transition-colors">
                        {proj.projectTitle}
                      </div>
                      <div className="text-[10px] text-zinc-500 font-sans line-clamp-1 mt-0.5">
                        {proj.tagline}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => openGraphicProject("project-1")}
              className="w-full py-3 px-4 bg-[#FF462D] hover:bg-[#ff3419] text-white font-mono font-black text-xs uppercase tracking-wider flex items-center justify-between transition-colors border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer"
            >
              <span>INSPECT FULL GRAPHIC DESIGN ARCHIVE (5 PROJECTS)</span>
              <ArrowRight weight="bold" className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* ─── Brutalist Graphic Design Inspection Modal ─── */}
        <GraphicDesignModal
          isOpen={isGraphicModalOpen}
          onClose={() => setIsGraphicModalOpen(false)}
          initialProjectId={activeGraphicId}
        />

        {/* ─── Brutalist UX / UI Shorts Inspection Modal ─── */}
        <UxUiShortsModal
          isOpen={isShortsModalOpen}
          onClose={() => setIsShortsModalOpen(false)}
          initialProjectId={activeShortsId}
        />

      </div>
    </section>
  );
}
