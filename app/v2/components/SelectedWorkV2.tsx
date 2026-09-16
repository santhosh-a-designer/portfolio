"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ArrowDown } from "@phosphor-icons/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import ProjectWindowStack, { ProjectItem } from "./ProjectWindowStack";

const clientLogos = [
  { name: "Makeon", src: "/clients/makeon-norm.png", widthClass: "w-24 sm:w-28 md:w-32", heightClass: "h-6 sm:h-7 md:h-7.5" },
  { name: "Parla", src: "/clients/parla-norm.png", widthClass: "w-24 sm:w-30 md:w-34", heightClass: "h-5 sm:h-5.5 md:h-6" },
  { name: "Nebraska Furniture Mart", src: "/clients/nfm-norm.png", widthClass: "w-24 sm:w-30 md:w-34", heightClass: "h-6 sm:h-7 md:h-8" },
  { name: "iRasus", src: "/clients/irasus-norm.png", widthClass: "w-24 sm:w-28 md:w-32", heightClass: "h-6 sm:h-7 md:h-8" },
  { name: "Intellemo", src: "/clients/intellemo-full.png", widthClass: "w-24 sm:w-28 md:w-32", heightClass: "h-6 sm:h-7 md:h-8" },
  { name: "We Two Pets", src: "/clients/wetwopets-norm.png", widthClass: "w-20 sm:w-24 md:w-26", heightClass: "h-6 sm:h-7 md:h-8" },
  { name: "We Two Brand", src: "/clients/wetwo-brand.png", widthClass: "w-8 sm:w-9 md:w-10", heightClass: "h-8 sm:h-9 md:h-10" },
];

export default function SelectedWorkV2() {
  const projects: ProjectItem[] = [
    {
      id: "01",
      num: "01",
      title: "SHOW & SELL",
      category: "ECOMMERCE / SCHEDULER",
      href: "/case-studies/parla-show-and-sell",
      image: "/case-studies/parla/Admin_Dashboard_Clean.png",
      mockupType: "parla",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Figma"],
      description: "Conversion-driven ecommerce scheduling platform for high-value retail appointments across UK & US markets.",
    },
    {
      id: "02",
      num: "02",
      title: "VIDYA'S KITCHEN",
      category: "PWA / WHATSAPP ORDERING",
      href: "/case-studies/vidyas-kitchen-pwa",
      liveUrl: "https://www.vidyaskitchenhome.com/",
      isHighlight: true,
      image: "/case-studies/vidyas-kitchen/VK_Clean.png",
      mockupType: "forma",
      techStack: ["React", "Supabase", "SQL", "Python"],
      description: "Full-stack Progressive Web App with zero-friction WhatsApp ordering flow and automated business dispatch.",
    },
    {
      id: "03",
      num: "03",
      title: "MAKEON BUILDER",
      category: "STEM / AI ECOSYSTEM",
      href: "/case-studies/makeon-builder-ecosystem",
      liveUrl: "https://makeon.build/",
      image: "/case-studies/makeon/makeon-hero-desktop.png",
      mockupType: "forma",
      techStack: ["React", "TypeScript", "AI Workflows", "Figma"],
      description: "Intelligent STEM hardware builder platform with visual block coding and AI agent integration.",
    },
  ];

  return (
    <section id="work" className="w-full bg-[#F4F4F0] border-b-2 border-black scroll-mt-20">
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
                  <div className={`relative ${logo.heightClass} ${logo.widthClass} flex items-center justify-center`}>
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      sizes="(max-width: 640px) 110px, (max-width: 1024px) 160px, 200px"
                      className="object-contain filter contrast-110"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Section Title Banner */}
        <motion.div
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

      </div>
    </section>
  );
}
