"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Plus, Minus } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import ResumeModal from "@/components/ResumeModal";

interface ExperienceItem {
  num: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isHighlight?: boolean;
  description: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    num: "01",
    role: "HEAD OF PRODUCT DESIGN & AI",
    company: "COMMERCE AGENTS",
    period: "2025 – PRESENT",
    location: "GLOBAL / REMOTE",
    isHighlight: true,
    description: "Leading 0-to-1 product strategy, multi-agent AI workflow design, and high-performance design systems for venture-backed AI platforms.",
    highlights: [
      "Architected autonomous agent interaction models & multimodal AI workflows",
      "Directed end-to-end design & frontend delivery across Next.js and React",
      "Created scalable design tokens and design systems adopted cross-team",
    ],
    skills: ["AI Agent UX", "Next.js", "Design Systems", "Figma → Code", "Product Strategy"],
  },
  {
    num: "02",
    role: "PRODUCT UX DESIGNER",
    company: "PARLA RETAIL",
    period: "2024 – 2025",
    location: "LONDON, UK (REMOTE)",
    description: "Designed conversion-driven ecommerce platforms, enterprise scheduling systems, and cross-cultural user experiences for UK and US retailers.",
    highlights: [
      "Revamped Show & Sell merchant portal, decreasing friction by 38%",
      "Engineered real-time customer scheduling and video call interaction flows",
      "Collaborated with enterprise clients including Nebraska Furniture Mart (US)",
    ],
    skills: ["Enterprise UX", "Ecommerce", "Design Systems", "Usability Testing", "User Research"],
  },
  {
    num: "03",
    role: "LEAD UX DESIGNER",
    company: "INTELLEMO",
    period: "2022 – 2024",
    location: "CHENNAI, INDIA",
    description: "Spearheaded design and UI architecture for SaaS marketing automation tools, increasing activation and user retention.",
    highlights: [
      "Redesigned SaaS navigation architecture and campaign generation wizard",
      "Improved subscription and checkout conversion by 26%",
      "Mentored junior designers and established standard Figma workflow guidelines",
    ],
    skills: ["SaaS Design", "Conversion (CRO)", "Information Architecture", "Prototyping", "A/B Testing"],
  },
];

export default function ExperienceSectionV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  const toggleExperience = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="w-full bg-[#F4F4F0] border-b-2 border-black scroll-mt-20">
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />

      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black bg-white flex flex-col">
        
        {/* ─── Top Header Strip: Yellow Stats Box + Track Record Headline & Resume Link ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-black bg-white">
          
          {/* Left Block: Yellow 04+ Years Exp */}
          <div className="md:col-span-4 lg:col-span-3 bg-[#FAED00] border-b-2 md:border-b-0 md:border-r-2 border-black p-6 sm:p-8 flex flex-col items-center justify-center text-center select-none">
            <span className="text-5xl sm:text-6xl font-black font-mono tracking-tighter text-black leading-none mb-1">
              04+
            </span>
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-black font-mono">
              YEARS EXP.
            </span>
            <div className="w-12 h-1 bg-black mt-2.5 mb-1.5" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/80">
              PROVEN IMPACT
            </span>
          </div>

          {/* Middle & Right Block: Track Record Statement + View Resume */}
          <div className="md:col-span-8 lg:col-span-9 p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 bg-white">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF462D]">
                  CAREER &amp; TRACK RECORD
                </span>
                <span className="text-zinc-300">/</span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                  3 MILESTONES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black leading-tight font-sans mb-3">
                TRACK RECORD.
              </h2>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700 leading-relaxed">
                FROM 0-TO-1 VENTURES TO GLOBAL ENTERPRISES. BUILDING SCALABLE DESIGN SYSTEMS, DIGITAL PLATFORMS, AND INTELLIGENT AI EXPERIENCES.
              </p>
            </div>

            <div className="shrink-0 pt-2 lg:pt-0">
              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-black text-white hover:bg-zinc-900 border-2 border-black shadow-[4px_4px_0px_0px_rgba(250,237,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-xs font-black tracking-widest uppercase select-none group cursor-pointer"
              >
                <span>VIEW FULL RESUME</span>
                <ArrowUpRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ─── 3-Column Experience Grid: 3 Clean Grid Boxes ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black border-b-0 bg-white">
          {experiences.map((exp) => {
            const isHighlight = exp.isHighlight;

            return (
              <div
                key={exp.num}
                className="flex flex-col justify-between p-6 sm:p-8 bg-white hover:bg-zinc-50/70 transition-colors group relative"
              >
                {/* Top Number & Period Header */}
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b-2 border-black">
                    <span className="text-3xl sm:text-4xl font-black font-mono tracking-tighter text-black">
                      {exp.num}
                    </span>
                    <div className="flex flex-col items-end text-right">
                      <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-wider text-black">
                        {exp.period}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Role Title & Company */}
                  <div className="mb-4">
                    <h3
                      className={`text-base sm:text-lg font-black uppercase tracking-tight leading-snug mb-1 transition-colors ${
                        isHighlight ? "text-[#FF462D]" : "text-black group-hover:text-[#FF462D]"
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 block">
                      {exp.company}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs font-bold uppercase tracking-wide text-zinc-800 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Achievements Bullet Points */}
                  <div className="space-y-2.5 pt-4 border-t-2 border-black/10 mb-6">
                    <span className="text-[9px] font-mono font-black uppercase tracking-widest text-zinc-500 block">
                      KEY ACHIEVEMENTS
                    </span>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-xs font-medium text-zinc-800 flex items-start gap-2 leading-snug">
                          <span className="text-[#FF462D] font-bold text-sm leading-none mt-0.5">■</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills Tags Bottom Row */}
                <div className="pt-4 border-t-2 border-black/10 mt-auto">
                  <span className="text-[9px] font-mono font-black uppercase tracking-widest text-zinc-500 block mb-2">
                    CORE EXPERTISE
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono font-bold px-2 py-1 bg-white border border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:border-[#FF462D] transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
