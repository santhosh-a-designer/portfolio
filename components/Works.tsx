"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import {
  ArrowSquareOut, ArrowRight, Lightning,
  GlobeHemisphereWest, DeviceMobile, Robot,
} from "@phosphor-icons/react";

const projects = [
  {
    id: 1, index: "01",
    tag: "Enterprise · Ecommerce",
    title: "Parla Retail",
    subtitle: "Show & Sell Platform",
    description: "Ecommerce platform connecting users with salespersons via intelligent call routing, chat handoffs, in-call product additions, and payment processing across US/UK markets.",
    stats: [
      { value: "US/UK", label: "Markets" },
      { value: "25%+", label: "Engagement" },
      { value: "4", label: "Deliverables" },
      { value: "Shipped", label: "Status" },
    ],
    tags: ["Figma", "Ecommerce", "Dashboard"],
    icon: GlobeHemisphereWest,
    accentColor: "#FF7410",
    status: "shipped",
    link: null,
  },
  {
    id: 2, index: "02",
    tag: "EdTech · Automation",
    title: "Ezra Dashboard",
    subtitle: "FITA Academy — Mentor Platform",
    description: "Mentor intelligence dashboard with real-time attendance, earnings, and batch tracking. Telegram bot triggers attendance alerts and payment-release emails with a single click.",
    stats: [
      { value: "100+", label: "Mentors" },
      { value: "1-click", label: "Automation" },
      { value: "Live", label: "Status" },
      { value: "3", label: "Integrations" },
    ],
    tags: ["Dashboard", "Automation", "EdTech"],
    icon: Robot,
    accentColor: "#FF7410",
    status: "live",
    link: "https://ezra-dashboard.vercel.app",
  },
  {
    id: 3, index: "03",
    tag: "PWA · Hyper-local",
    title: "Vidya's Kitchen",
    subtitle: "Home Catering App — Sivakasi",
    description: "Progressive Web App for a home catering service in Sivakasi. Minimal UI for low digital literacy — offline-first, Tamil language support, accessible onboarding.",
    stats: [
      { value: "PWA", label: "Architecture" },
      { value: "Tamil", label: "Language" },
      { value: "Dev", label: "Status" },
      { value: "0", label: "Friction" },
    ],
    tags: ["PWA", "Mobile", "Accessibility"],
    icon: DeviceMobile,
    accentColor: "#E07010",
    status: "in-progress",
    link: null,
  },
  {
    id: 4, index: "04",
    tag: "AI · Commerce",
    title: "CEaSS",
    subtitle: "Community-Enabled Autonomous Sales",
    description: "Autonomous sales platform for pet products combining community discovery with intelligent automation. Reduces friction from browsing to purchase for micro-sellers.",
    stats: [
      { value: "AI", label: "Automation" },
      { value: "Community", label: "Discovery" },
      { value: "Dev", label: "Status" },
      { value: "1", label: "Niche" },
    ],
    tags: ["AI", "Commerce", "Next.js"],
    icon: Lightning,
    accentColor: "#EA580C",
    status: "in-progress",
    link: null,
  },
];

const statusLabel: Record<string, string> = {
  shipped: "Shipped", live: "Live", "in-progress": "In Progress",
};

export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  /* ── White curtain wipes up (Buffered to give Bento time) ── */
  // It now wipes between 45% and 70% to ensure a 'blank canvas' exists before content appears
  const curtainY = useTransform(scrollYProgress, [0.45, 0.70], ["100%", "0%"]);

  // Detect when wipe is complete enough to trigger automatic animations
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // 1. Reveal content ONLY after curtain is 100% established (at v=0.70)
    // 2. Hide content IMMEDIATELY when scrolling up (before curtain starts moving down)
    if (v > 0.75) setShowContent(true);
    else if (v < 0.72) setShowContent(false); 
  });

  const contentTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 1,
  };

  return (
    /* High z-index and negative margin to overlap pinned About section */
    <section 
      id="works" 
      ref={sectionRef} 
      style={{ height: "200vh", marginTop: "-100vh" }} 
      className="relative z-10"
    >

      {/* Sticky viewport — stays fixed as user scrolls */}
      <div className="sticky top-0 h-screen overflow-hidden pointer-events-none">

        {/* TRANSPARENT base layer (allows previous section to be seen during wipe) */}
        <div className="absolute inset-0 bg-transparent" />

        {/* White curtain that wipes from bottom */}
        <motion.div
          className="absolute inset-x-0 bottom-0 pointer-events-auto"
          style={{ top: 0, y: curtainY, background: "#f5f0eb" }}
        />

        {/* ── Index strip ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={showContent ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
          transition={{ ...contentTransition, delay: 0.1 }}
          className="relative z-20 border-b border-[#e0d5c8] pointer-events-auto"
          style={{ background: showContent ? "rgba(245,240,235,0.97)" : "transparent" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em]">
            <span style={{ color: "#a89880" }}>Index · 02 — Works</span>
            <span style={{ color: "#c96010" }}>
              {projects.length} Projects — {projects.filter(p => p.status !== "in-progress").length} Shipped
            </span>
          </div>
        </motion.div>

        {/* ── Content area ── */}
        <div className="relative z-10 flex flex-col pointer-events-auto" style={{ height: "calc(100vh - 35px)" }}>
          <div className="max-w-6xl mx-auto px-6 w-full flex flex-col h-full py-8 gap-6">

            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={showContent ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.96 }}
              transition={{ ...contentTransition, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.26em] mb-3" style={{ color: "#c96010" }}>
                02 / Selected Works
              </p>
              <h2 className="font-title text-3xl sm:text-4xl font-black leading-tight" style={{ color: "#130e08" }}>
                Problems solved,{" "}
                <span style={{ color: "#FF7410" }}>products shipped</span>
              </h2>
            </motion.div>

            {/* 2×2 Card grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 flex-1 min-h-0"
              style={{ border: "1px solid #ddd0c2", overflow: "hidden" }}
            >
              {projects.map((project, i) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30, scale: 0.92 }}
                    animate={showContent ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.92 }}
                    transition={{ ...contentTransition, delay: 0.3 + i * 0.05 }}
                    className="flex flex-col p-5 bg-white hover:bg-[#fef9f5] transition-colors relative overflow-hidden"
                    style={{
                      borderRight: i % 2 === 0 ? "1px solid #ddd0c2" : "none",
                      borderBottom: i < 2 ? "1px solid #ddd0c2" : "none",
                    }}
                  >
                    {/* Watermark number */}
                    <div
                      className="absolute top-3 right-4 font-title text-5xl font-black leading-none select-none pointer-events-none"
                      style={{ color: project.accentColor, opacity: 0.06 }}
                    >
                      {project.index}
                    </div>

                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div
                        className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                        style={{ background: `${project.accentColor}14`, border: `1px solid ${project.accentColor}28` }}
                      >
                        <Icon size={15} style={{ color: project.accentColor }} />
                      </div>
                      <div
                        className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5"
                        style={{ color: project.accentColor, background: `${project.accentColor}10`, border: `1px solid ${project.accentColor}22` }}
                      >
                        {statusLabel[project.status]}
                      </div>
                    </div>

                    {/* Title */}
                    <div className="mb-2">
                      <div className="text-[9px] font-mono uppercase tracking-widest mb-1" style={{ color: "#a89880" }}>
                        {project.tag}
                      </div>
                      <h3 className="font-title text-base font-black leading-tight" style={{ color: "#130e08" }}>
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium mt-0.5" style={{ color: project.accentColor }}>
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-[11px] leading-relaxed flex-1 mb-3" style={{ color: "#6b5c4d" }}>
                      {project.description}
                    </p>

                    {/* Stats strip */}
                    <div className="grid grid-cols-4 gap-px mb-3" style={{ border: "1px solid #e6ddd2" }}>
                      {project.stats.map((stat, j) => (
                        <div
                          key={j}
                          className="px-2 py-2 text-center"
                          style={{ background: "#faf6f1", borderRight: j < 3 ? "1px solid #e6ddd2" : "none" }}
                        >
                          <div className="text-[11px] font-black font-title" style={{ color: "#130e08" }}>{stat.value}</div>
                          <div className="text-[8px] uppercase tracking-wider mt-0.5" style={{ color: "#9c8b7a" }}>{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags + link */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider"
                            style={{ color: "#7a6a5a", border: "1px solid #ddd0c2" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider flex-shrink-0"
                          style={{ color: project.accentColor }}
                        >
                          Live <ArrowSquareOut size={11} />
                        </a>
                      ) : (
                        <span className="text-[9px] font-mono flex items-center gap-1 flex-shrink-0" style={{ color: "#c4b8a8" }}>
                          <ArrowRight size={10} /> On request
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
