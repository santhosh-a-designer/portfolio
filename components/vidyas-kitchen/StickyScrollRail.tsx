"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export interface RailSection {
  id: string;
  num: string;
  title: string;
  label: string;
}

export const CASE_STUDY_SECTIONS: RailSection[] = [
  { id: "reality", num: "01", title: "Reality", label: "01 // Sivakasi Reality" },
  { id: "personas", num: "02", title: "Personas", label: "02 // 3 Field Personas" },
  { id: "bottlenecks", num: "03", title: "Bottlenecks", label: "03 // Top 3 Bottlenecks" },
  { id: "whatsapp", num: "04", title: "WhatsApp", label: "04 // WhatsApp Ordering" },
  { id: "pwa", num: "05", title: "PWA Flow", label: "05 // Customer PWA" },
  { id: "kitchen", num: "06", title: "Kitchen Ops", label: "06 // Kitchen & Driver" },
  { id: "architecture", num: "07", title: "Architecture", label: "07 // Systems & IA" },
  { id: "retrospective", num: "08", title: "Retrospective", label: "08 // Retrospective" },
];

export default function StickyScrollRail() {
  const [activeId, setActiveId] = useState<string>("reality");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Track active section using IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = CASE_STUDY_SECTIONS.length - 1; i >= 0; i--) {
        const section = CASE_STUDY_SECTIONS[i];
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeSection =
    CASE_STUDY_SECTIONS.find((s) => s.id === activeId) || CASE_STUDY_SECTIONS[0];

  return (
    <>
      {/* ─── 1. Mobile & Tablet: Crisp 2.5px Top Progress Bar ─── */}
      <motion.div
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#BD2320] z-50 pointer-events-none"
        aria-hidden
      />

      {/* ─── 2. Mobile Floating Active Chapter Pill ─── */}
      <div className="fixed bottom-4 right-4 z-40 xl:hidden">
        <div className="bg-black/95 text-white font-mono text-[10px] px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20 shadow-[0_4px_16px_rgba(0,0,0,0.25)] select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BD2320] animate-pulse" />
          <span className="font-bold tracking-wider uppercase">{activeSection.num} // {activeSection.title}</span>
        </div>
      </div>

      {/* ─── 3. Desktop Editorial Sticky Side Rail ─── */}
      <nav
        aria-label="Case Study Table of Contents"
        className="fixed right-3 xl:right-6 2xl:right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end select-none pointer-events-auto"
      >
        <div className="flex items-center gap-3">
          {/* Section Names & Quick Links */}
          <div className="flex flex-col items-end gap-2.5 py-2">
            {CASE_STUDY_SECTIONS.map((sec) => {
              const isActive = sec.id === activeId;
              const isHovered = sec.id === hoveredId;

              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollTo(sec.id)}
                  onMouseEnter={() => setHoveredId(sec.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group flex items-center gap-2.5 text-right font-mono transition-all duration-200 cursor-pointer focus:outline-none"
                  aria-label={`Jump to section ${sec.label}`}
                >
                  {/* Label expands on hover or active */}
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? "text-black font-black opacity-100 translate-x-0"
                        : isHovered
                        ? "text-zinc-800 opacity-90 translate-x-0"
                        : "text-zinc-400 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0"
                    }`}
                  >
                    {sec.title}
                  </span>

                  {/* Section Number Pill */}
                  <span
                    className={`text-[10px] font-black px-1.5 py-0.5 rounded transition-colors ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200 group-hover:text-black"
                    }`}
                  >
                    {sec.num}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Vertical Progress Track with Sliding Red Fill */}
          <div className="relative w-[3px] h-52 bg-zinc-200 rounded-full overflow-hidden shrink-0">
            <motion.div
              style={{ scaleY: smoothProgress, transformOrigin: "top" }}
              className="absolute top-0 left-0 right-0 bottom-0 bg-[#BD2320] w-full rounded-full"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
