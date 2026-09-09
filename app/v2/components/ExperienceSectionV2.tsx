"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Plus, Minus } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

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
  {
    num: "04",
    role: "UX MENTOR & LEAD",
    company: "FITA ACADEMY & PIXEL SOCIETY",
    period: "2023 – PRESENT",
    location: "CHENNAI, INDIA",
    description: "Mentoring 100+ designers in design systems, portfolio craft, and modern AI-augmented frontend development workflows.",
    highlights: [
      "Trained 100+ students with 20+ placed in high-growth product teams",
      "Organized design thinking workshops and community hackathons",
      "Championed vibe coding and AI-accelerated workflows with Cursor & MCP",
    ],
    skills: ["Mentorship", "Design Thinking", "Community", "Vibe Coding", "Workshops"],
  },
];

export default function ExperienceSectionV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleExperience = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="w-full bg-[#F4F4F0] border-b-2 border-black scroll-mt-20">
      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black bg-white flex flex-col">
        
        {/* ─── 4-Column Layout Matching Reference Exactly ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b-0 bg-white">
          
          {/* Column 1: Yellow Block with Geometric Brutalist Badge / Icon */}
          <div className="md:col-span-3 lg:col-span-3 bg-[#FAED00] border-b-2 md:border-b-0 md:border-r-2 border-black p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center min-h-[220px] md:min-h-[320px]">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="text-5xl sm:text-6xl md:text-7xl font-black font-mono tracking-tighter text-black leading-none mb-2">
                04+
              </span>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-black font-mono">
                YEARS EXP.
              </span>
              <div className="w-12 h-1 bg-black mt-3 mb-2" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/80">
                PROVEN IMPACT
              </span>
            </div>
          </div>

          {/* Column 2: "TRACK RECORD." + Summary + "VIEW FULL RESUME ↗" */}
          <div className="md:col-span-4 lg:col-span-4 p-6 sm:p-8 md:p-10 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-black bg-white">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-[0.95] font-sans mb-6">
                TRACK<br />RECORD.
              </h2>
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black leading-relaxed max-w-sm mb-6">
                FROM 0-TO-1 VENTURES TO GLOBAL ENTERPRISES. BUILDING SCALABLE DESIGN SYSTEMS, DIGITAL PLATFORMS, AND INTELLIGENT AI EXPERIENCES.
              </p>
            </div>

            <div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-wider text-black hover:text-[#FF462D] transition-colors group"
              >
                <span>VIEW FULL RESUME</span>
                <ArrowUpRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Column 3: Narrow Vertical "EXPERIENCE →" Divider */}
          <div className="md:col-span-1 lg:col-span-1 hidden md:flex flex-col items-center justify-between py-8 px-1 border-r-2 border-black bg-white select-none">
            <span className="text-[11px] font-black tracking-[0.25em] uppercase text-black rotate-90 origin-center whitespace-nowrap mt-10">
              EXPERIENCE
            </span>
            <ArrowRight weight="bold" className="w-5 h-5 text-black mb-6" />
          </div>

          {/* Column 4: 4 Experience Accordion Rows */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col divide-y-2 divide-black bg-white">
            {experiences.map((exp, idx) => {
              const isOpen = openIndex === idx;
              const isHighlight = exp.isHighlight;

              return (
                <div key={exp.num} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => toggleExperience(idx)}
                    className="w-full px-5 py-5 sm:px-6 sm:py-6 flex items-center justify-between bg-white hover:bg-zinc-50 transition-colors text-left group min-h-[70px] sm:min-h-[80px] cursor-pointer"
                  >
                    <div className="flex items-center gap-5 sm:gap-6 min-w-0 pr-2">
                      <span className="text-xs sm:text-sm font-black tracking-wider text-black font-mono select-none shrink-0">
                        {exp.num}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span
                          className={`text-xs sm:text-sm font-black uppercase tracking-tight truncate transition-colors ${
                            isHighlight ? "text-[#FF462D]" : "text-black group-hover:text-[#FF462D]"
                          }`}
                        >
                          {exp.role}
                        </span>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 truncate">
                          {exp.company} · {exp.period}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-6 h-6 flex items-center justify-center shrink-0 transition-colors ${
                        isHighlight ? "text-[#FF462D]" : "text-black group-hover:text-[#FF462D]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus weight="bold" className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Plus weight="bold" className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden bg-[#fafafa] border-t-2 border-black"
                      >
                        <div className="p-5 sm:p-6 flex flex-col gap-4 text-black">
                          <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-zinc-800 leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Key achievements */}
                          <div className="space-y-2 pt-2 border-t border-zinc-200">
                            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500 block">
                              KEY ACHIEVEMENTS
                            </span>
                            <ul className="space-y-1.5">
                              {exp.highlights.map((h, i) => (
                                <li key={i} className="text-xs font-semibold text-zinc-700 flex items-start gap-2">
                                  <span className="text-[#FF462D] font-bold mt-0.5">●</span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills tags */}
                          <div className="pt-2 flex flex-wrap gap-1.5">
                            {exp.skills.map((s) => (
                              <span
                                key={s}
                                className="text-[10px] font-mono font-bold px-2 py-0.5 bg-white border border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
