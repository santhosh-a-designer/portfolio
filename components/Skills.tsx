"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Plus, Minus } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  num: string;
  title: string;
  badge?: string;
  isStack?: boolean;
  description?: string;
}

const uxSkillsList = [
  "User Research", "Wireframing", "Prototyping",
  "Design Systems", "Usability Testing", "Information Architecture",
  "Cross-cultural UX", "Stakeholder Alignment"
];

const devSkillsList = [
  "HTML / CSS", "JavaScript", "React",
  "Next.js", "Tailwind CSS", "TypeScript",
  "Figma → Code", "Responsive Design"
];

const toolsList = [
  "Figma", "FigJam", "Framer", "Maze", "Hotjar",
  "Next.js", "React", "Tailwind CSS", "TypeScript",
  "Cursor IDE", "MCP Servers", "Vercel", "Git", "Jira"
];

const methodsList = [
  "Design Thinking", "Agile / Scrum", "Jobs-to-be-done",
  "Double Diamond", "User Story Mapping", "A/B Testing",
  "Info Architecture", "Cross-cultural UX"
];

const services: ServiceItem[] = [
  {
    num: "01",
    title: "FULL DESIGN + DEV STACK",
    badge: "CORE CAPABILITIES",
    isStack: true,
  },
  {
    num: "02",
    title: "WEB DESIGN",
    description: "Responsive layouts, conversion-focused wireframing, high-fidelity UI mockups, design tokens, and user experience craft.",
  },
  {
    num: "03",
    title: "DEVELOPMENT",
    description: "Clean frontend architecture with Next.js, React, TypeScript, performance optimizations, and fluid interactive animations.",
  },
  {
    num: "04",
    title: "DIGITAL STRATEGY",
    description: "Product discovery, user flow mapping, conversion rate optimization (CRO), GTM positioning, and scalable systems.",
  },
];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="skills" className="w-full bg-[#F4F4F0] border-y-2 border-black scroll-mt-20">
      <div className="w-full max-w-6xl mx-auto border-x-0 sm:border-x-2 border-black bg-white flex flex-col">
        
        {/* ─── Top Main Section: 4-Column Layout Exactly Matching Reference ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 bg-white">
          
          {/* Column 1: Yellow Square Box (3 / 12 cols) */}
          <div className="md:col-span-3 bg-[#FAED00] border-b-2 md:border-b-0 md:border-r-2 border-black p-6 sm:p-8 md:p-10 flex items-center justify-center min-h-[220px] md:min-h-[300px]">
          </div>

          {/* Column 2: "BUILT TO DISRUPT." + Summary + "READ OUR STORY ↗" (4 / 12 cols) */}
          <div className="md:col-span-4 p-6 sm:p-8 md:p-10 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-black bg-white">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-[0.95] font-sans mb-6">
                BUILT TO<br />DISRUPT.
              </h2>
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black leading-relaxed max-w-sm mb-6">
                WE COMBINE STRATEGY, DESIGN AND TECHNOLOGY TO CREATE DIGITAL EXPERIENCES THAT CHALLENGE THE ORDINARY AND DELIVER REAL IMPACT.
              </p>
            </div>

            <div>
              <Link
                href="#about"
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-wider text-black hover:text-[#FF462D] transition-colors group"
              >
                <span>READ OUR STORY</span>
                <ArrowUpRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Column 3: Narrow Vertical "OUR SERVICES →" Divider (1 / 12 cols) */}
          <div className="md:col-span-1 hidden md:flex flex-col items-center justify-between py-8 px-1 border-r-2 border-black bg-white select-none">
            <span className="text-[11px] font-black tracking-[0.25em] uppercase text-black rotate-90 origin-center whitespace-nowrap mt-10">
              OUR SERVICES
            </span>
            <ArrowRight weight="bold" className="w-5 h-5 text-black mb-6" />
          </div>

          {/* Column 4: 4 Service Rows (4 / 12 cols) */}
          <div className="md:col-span-4 flex flex-col divide-y-2 divide-black bg-white">
            {services.map((svc, idx) => {
              const isOpen = openIndex === idx;
              const isDev = svc.num === "03";

              return (
                <div key={svc.num} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => toggleService(idx)}
                    className="w-full px-5 py-5 sm:px-6 sm:py-6 flex items-center justify-between bg-white hover:bg-zinc-50 transition-colors text-left group min-h-[70px] sm:min-h-[80px] cursor-pointer"
                  >
                    <div className="flex items-center gap-5 sm:gap-6">
                      <span className="text-xs sm:text-sm font-black tracking-wider text-black font-mono select-none">
                        {svc.num}
                      </span>
                      <span
                        className={`text-xs sm:text-sm md:text-base font-black uppercase tracking-tight transition-colors ${
                          isDev ? "text-[#FF462D]" : "text-black group-hover:text-[#FF462D]"
                        }`}
                      >
                        {svc.title}
                      </span>
                    </div>

                    <div
                      className={`w-6 h-6 flex items-center justify-center shrink-0 transition-colors ${
                        isDev ? "text-[#FF462D]" : "text-black group-hover:text-[#FF462D]"
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
                        {svc.isStack ? (
                          <div className="p-5 sm:p-6 flex flex-col gap-6 text-black">
                            
                            {/* ✦ UX Design */}
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-[#FF462D] font-bold">✦</span>
                                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black font-sans">
                                  UX Design
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {uxSkillsList.map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-white border border-black text-black select-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* ⌥ Development */}
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-[#FF462D] font-bold">⌥</span>
                                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black font-sans">
                                  Development
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {devSkillsList.map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-white border border-black text-black select-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Tools */}
                            <div>
                              <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-500 mb-2.5 font-mono">
                                Tools
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {toolsList.map((tool) => (
                                  <span
                                    key={tool}
                                    className="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-zinc-800"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Methods */}
                            <div>
                              <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-500 mb-2.5 font-mono">
                                Methods
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {methodsList.map((method) => (
                                  <span
                                    key={method}
                                    className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#FAED00]/30 border border-black text-black"
                                  >
                                    {method}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Vibe Coding ✦ */}
                            <div className="p-4 bg-[#FAED00] border-2 border-black flex flex-col gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                              <div className="text-[11px] font-black uppercase tracking-wider text-black flex items-center gap-1.5 font-mono">
                                <span>VIBE CODING</span>
                                <span>✦</span>
                              </div>
                              <p className="text-xs font-bold uppercase tracking-wide text-black leading-relaxed">
                                Using <strong className="font-black underline decoration-2">Cursor + MCP + Figma</strong> to ship pixel-perfect Next.js — faster than any traditional handoff.
                              </p>
                            </div>

                          </div>
                        ) : (
                          <p className="p-5 sm:p-6 pl-14 sm:pl-16 text-xs sm:text-sm font-semibold uppercase tracking-wide text-zinc-700 leading-relaxed">
                            {svc.description}
                          </p>
                        )}
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

