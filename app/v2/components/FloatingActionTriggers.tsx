"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Quotes,
  SquaresFour,
  ArrowUpRight,
  ArrowRight,
  X,
  CheckCircle,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  initials: string;
  headline: string;
  text: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Daniel Forbes",
    role: "Manager · Parla Retail",
    location: "UK",
    initials: "DF",
    headline: "Reliable, creative, and thoughtful in every way",
    text: "He quickly proved himself to be reliable, creative, and thoughtful in his approach to design. His work always balanced good design with practical implementation, making it easy for developers and product managers to move projects forward. He was a supportive teammate — open to feedback, collaborative, and always positive to work with.",
    highlight: "reliable, creative, and thoughtful",
  },
  {
    name: "Raju Kumar",
    role: "Designer · Direct Report",
    location: "India",
    initials: "RK",
    headline: "A visionary leader who consistently elevates",
    text: "Reporting directly to Santhosh was an absolute privilege. His positive mindset and exceptional design skills have been a constant source of inspiration. Santhosh is a visionary leader who consistently elevates our projects. His strategic use of UX methodologies has set a new standard for our product's success.",
    highlight: "visionary leader who consistently elevates",
  },
  {
    name: "Ahobilesan Gurumurthy",
    role: "Senior Software Developer · Parla Retail",
    location: "UK",
    initials: "AG",
    headline: "Bridges the gap between design and development effortlessly",
    text: "Working alongside Santhosh has been exceptional. His designs are not just beautiful, they are developer-friendly and thoughtful. He bridges the gap between design and development effortlessly, always considering technical constraints while maintaining creative excellence. His collaborative approach and clear communication made our workflow seamless. Santhosh truly understands how to create designs that developers love to implement.",
    highlight: "developer-friendly and thoughtful",
  },
  {
    name: "Chandresh Kamal",
    role: "Vice President · Intellemo.AI",
    location: "India",
    initials: "CK",
    headline: "His impact on our revenue growth has been profound",
    text: "Honouring Santhosh, our exceptional UX Designer! In just a year, he has revolutionised our approach with rapid design, innovative ideas, and user-centric solutions. His impact on our revenue growth has been profound, solidifying his position as a key player in our success story. Additionally, his exceptional communication skills and ability to translate ideas into tangible results make him an invaluable asset to any team.",
    highlight: "impact on our revenue growth has been profound",
  },
];

interface ShortProject {
  tag: string;
  title: string;
  desc: string;
  accent: string;
}

const uxShorts: ShortProject[] = [
  {
    tag: "P1",
    title: "IR STUNNER",
    desc: "Smart hardware, 3D packaging & visualizer",
    accent: "#FF462D",
  },
  {
    tag: "P2",
    title: "iRASUS",
    desc: "EV battery telemetry & fleet intelligence system",
    accent: "#0FE0E3",
  },
  {
    tag: "P3",
    title: "INDIAONE ATM",
    desc: "Multi-lingual rural banking kiosk workflow",
    accent: "#FAED00",
  },
];

export default function FloatingActionTriggers() {
  const [activePanel, setActivePanel] = useState<"recommendations" | "shorts" | null>(null);
  const [hoveredTrigger, setHoveredTrigger] = useState<"recommendations" | "shorts" | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear close timeout on action
  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Debounced close to allow smooth mouse transfer to panel
  const scheduleClose = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setActivePanel(null);
    }, 280);
  };

  const handleTriggerEnter = (panel: "recommendations" | "shorts") => {
    cancelClose();
    setActivePanel(panel);
  };

  const togglePanel = (panel: "recommendations" | "shorts") => {
    cancelClose();
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePanel(null);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActivePanel(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      cancelClose();
    };
  }, []);

  return (
    <>
      {/* ─── Blurred Backdrop Overlay when panel is open ─── */}
      <AnimatePresence>
        {activePanel !== null && (
          <motion.div
            key="modal-backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActivePanel(null)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md pointer-events-auto"
          />
        )}
      </AnimatePresence>

      <div
        ref={containerRef}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto select-none"
      >
        {/* ─── Popover Panels Container (Floats above / left of buttons) ─── */}
        <AnimatePresence>
          {activePanel === "recommendations" && (
            <motion.div
              key="panel-recommendations"
              initial={{ opacity: 0, scale: 0.95, y: 12, x: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="w-[340px] sm:w-[420px] bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden max-h-[80vh] sm:max-h-[540px] mb-2 z-50"
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Panel Header */}
              <div className="px-4 py-3 bg-[#FAED00] border-b-2 border-black flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <Quotes weight="fill" className="w-4 h-4 text-black" />
                  <span className="text-[11px] font-mono font-black uppercase tracking-wider text-black">
                    // RECOMMENDATIONS (04)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePanel(null)}
                  aria-label="Close recommendations panel"
                  className="w-6 h-6 flex items-center justify-center bg-black text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X size={14} weight="bold" />
                </button>
              </div>

              {/* Scrollable Card Stack — with data-lenis-prevent and native overscroll containment */}
              <div 
                data-lenis-prevent
                className="p-4 space-y-4 overflow-y-auto overscroll-contain flex-1 min-h-0 divide-y divide-zinc-200 touch-pan-y"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#000000 #F4F4F0",
                }}
              >
                {testimonials.map((t) => (
                  <div key={t.name} className="pt-3.5 first:pt-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-6 h-6 rounded-none bg-black text-[#FAED00] flex items-center justify-center font-mono font-black text-[10px] shrink-0">
                          {t.initials}
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-black uppercase tracking-tight text-black truncate block font-sans">
                            {t.name}
                          </span>
                          <span className="text-[9px] font-mono font-bold text-zinc-500 truncate block">
                            {t.role}
                          </span>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-zinc-100 text-zinc-700 border border-zinc-300 uppercase shrink-0">
                        {t.location}
                      </span>
                    </div>

                    <p className="text-[11.5px] font-serif italic text-zinc-800 leading-relaxed pl-2.5 border-l-2 border-[#FF462D]">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer LinkedIn Action */}
              <div className="px-4 py-2.5 bg-[#F4F4F0] border-t-2 border-black flex items-center justify-between shrink-0">
                <span className="text-[10px] font-mono font-bold text-zinc-600 flex items-center gap-1.5">
                  <CheckCircle weight="fill" className="text-[#00C16A] w-3.5 h-3.5" />
                  VERIFIED LINKEDIN REVIEWS
                </span>
                <a
                  href="https://linkedin.com/in/santhosh-designer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-mono font-black uppercase tracking-wider text-black hover:text-[#FF462D] transition-colors"
                >
                  <span>VIEW ALL ON LINKEDIN</span>
                  <ArrowUpRight weight="bold" className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          )}

          {activePanel === "shorts" && (
            <motion.div
              key="panel-shorts"
              initial={{ opacity: 0, scale: 0.95, y: 12, x: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="w-[340px] sm:w-[420px] bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden max-h-[80vh] sm:max-h-[540px] mb-2 z-50"
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Panel Header */}
              <div className="px-4 py-3 bg-[#0FE0E3] border-b-2 border-black flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <SquaresFour weight="bold" className="w-4 h-4 text-black" />
                  <span className="text-[11px] font-mono font-black uppercase tracking-wider text-black">
                    // ARCHIVES &amp; SHORTS
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePanel(null)}
                  aria-label="Close shorts panel"
                  className="w-6 h-6 flex items-center justify-center bg-black text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X size={14} weight="bold" />
                </button>
              </div>

              {/* Content List — with data-lenis-prevent and native overscroll containment */}
              <div 
                data-lenis-prevent
                className="p-4 space-y-4 overflow-y-auto overscroll-contain flex-1 min-h-0 touch-pan-y"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#000000 #F4F4F0",
                }}
              >
                {/* UX/UI Shorts Section */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500">
                      UX / UI SHORTS (P1–P3)
                    </span>
                    <span className="text-[9px] font-mono font-bold text-[#FF462D]">
                      3 CASE SHORTS
                    </span>
                  </div>

                  <div className="space-y-2">
                    {uxShorts.map((short) => (
                      <div
                        key={short.title}
                        className="p-2.5 bg-zinc-50 hover:bg-zinc-100 border border-black/30 flex items-start gap-3 transition-colors"
                      >
                        <span
                          className="text-[10px] font-mono font-black px-1.5 py-0.5 text-black border border-black shrink-0 mt-0.5"
                          style={{ backgroundColor: short.accent }}
                        >
                          {short.tag}
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="text-xs font-black uppercase tracking-tight text-black font-mono block">
                            {short.title}
                          </span>
                          <span className="text-[10px] font-bold text-zinc-600 block leading-tight font-sans">
                            {short.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/ux-ui-shorts"
                    className="mt-2.5 w-full py-2 px-3 bg-black hover:bg-zinc-800 text-white font-mono font-black text-[10px] uppercase tracking-wider flex items-center justify-between transition-colors border border-black shadow-[2px_2px_0px_0px_rgba(250,237,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    <span>OPEN FULL UX/UI SHORTS PAGE</span>
                    <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#FAED00]" />
                  </Link>
                </div>

                {/* Graphic Work Section */}
                <div className="pt-3 border-t-2 border-black/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500">
                      GRAPHIC DESIGN WORK
                    </span>
                    <span className="text-[9px] font-mono font-bold text-zinc-400">
                      POSTERS &amp; PRINT
                    </span>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-700 leading-relaxed font-sans mb-2.5">
                    Brand identities, packaging typography, poster collections, and experimental visual systems.
                  </p>

                  <Link
                    href="/graphic-design"
                    className="w-full py-2 px-3 bg-[#FF462D] hover:bg-[#ff3419] text-white font-mono font-black text-[10px] uppercase tracking-wider flex items-center justify-between transition-colors border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    <span>EXPLORE GRAPHIC WORK</span>
                    <ArrowRight weight="bold" className="w-3.5 h-3.5 text-white" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      {/* ─── Stacked Floating Action Buttons ─── */}
      <div className="flex flex-col gap-2.5 items-end">
        {/* Trigger 1: Recommendations */}
        <div className="relative flex items-center">
          {/* Hover Tooltip (visible when panel is closed and button hovered) */}
          <AnimatePresence>
            {hoveredTrigger === "recommendations" && activePanel === null && (
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.15 }}
                className="absolute right-14 whitespace-nowrap bg-black text-white font-mono font-black text-[10px] uppercase tracking-wider px-2.5 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(250,237,0,1)] pointer-events-none"
              >
                RECOMMENDATIONS (4)
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => togglePanel("recommendations")}
            onMouseEnter={() => {
              setHoveredTrigger("recommendations");
              handleTriggerEnter("recommendations");
            }}
            onMouseLeave={() => setHoveredTrigger(null)}
            aria-label="Open LinkedIn recommendations panel"
            className={`w-11 h-11 sm:w-12 sm:h-12 border-2 border-black flex items-center justify-center transition-all cursor-pointer ${
              activePanel === "recommendations"
                ? "bg-black text-[#FAED00] scale-105 shadow-[4px_4px_0px_0px_rgba(250,237,0,1)]"
                : "bg-[#FAED00] text-black hover:bg-black hover:text-[#FAED00] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
            }`}
          >
            <Quotes weight="fill" className="w-5 h-5" />
          </button>
        </div>

        {/* Trigger 2: UX/UI Shorts & Graphic Work */}
        <div className="relative flex items-center">
          {/* Hover Tooltip (visible when panel is closed and button hovered) */}
          <AnimatePresence>
            {hoveredTrigger === "shorts" && activePanel === null && (
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.15 }}
                className="absolute right-14 whitespace-nowrap bg-black text-white font-mono font-black text-[10px] uppercase tracking-wider px-2.5 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(15,224,227,1)] pointer-events-none"
              >
                SHORTS &amp; GRAPHICS
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => togglePanel("shorts")}
            onMouseEnter={() => {
              setHoveredTrigger("shorts");
              handleTriggerEnter("shorts");
            }}
            onMouseLeave={() => setHoveredTrigger(null)}
            aria-label="Open UX UI shorts and graphic work panel"
            className={`w-11 h-11 sm:w-12 sm:h-12 border-2 border-black flex items-center justify-center transition-all cursor-pointer ${
              activePanel === "shorts"
                ? "bg-black text-[#0FE0E3] scale-105 shadow-[4px_4px_0px_0px_rgba(15,224,227,1)]"
                : "bg-white text-black hover:bg-black hover:text-[#0FE0E3] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
            }`}
          >
            <SquaresFour weight="bold" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
