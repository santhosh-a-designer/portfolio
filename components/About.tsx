"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Briefcase, Code, Users } from "@phosphor-icons/react";

const timeline = [
  {
    year: "Oct 2025 – Present",
    role: "Freelance UX Designer & Dev",
    company: "Independent",
    color: "#FF7410",
    current: true,
    expertise: ["Product Design", "UX Research", "Next.js", "Tailwind CSS", "Framer Motion", "Figma", "MCP / AI Integration"],
    learned: ["End-to-end product delivery", "Vibe coding workflows", "Client scoping & management", "Shipping with modern stacks"],
    clients: ["Rettakili Brand, Sivakasi", "FITA Academy", "Personal Projects"],
    projects: ["Vidya's Kitchen (PWA)", "CEaSS Pet Platform", "EZRA Dashboard"],
  },
  {
    year: "May 2024 – Sep 2025",
    role: "UX Designer",
    company: "Parla Retail (UK)",
    color: "#E06010",
    expertise: ["Cross-cultural UX", "Enterprise Dashboards", "Ecommerce Flows", "Stakeholder Alignment", "Figma"],
    learned: ["US/UK market nuances", "Large-scale design systems", "Enterprise workflow design", "Cross-timezone collaboration"],
    clients: ["Parla Retail UK", "US Market Partners"],
    projects: ["Show & Sell Platform", "Customer Scheduler Integration", "Retailer Dashboard"],
  },
  {
    year: "Oct 2022 – Feb 2024",
    role: "Lead UX Designer",
    company: "Intellemo",
    color: "#B04C0A",
    expertise: ["Product Strategy", "Conversion Optimization", "Team Leadership", "Usability Testing", "Figma", "Maze"],
    learned: ["Leading a design team", "Data-driven UX decisions", "Paid conversion funnels", "OKR-aligned design"],
    clients: ["Intellemo SaaS Users", "B2B Clients"],
    projects: ["Intellemo Core Product", "Onboarding Redesign", "Analytics Dashboard"],
  },
  {
    year: "Dec 2020 – Oct 2022",
    role: "UX Designer",
    company: "Iconic Dream Focus",
    color: "#7A3008",
    expertise: ["UI/UX Design", "Gov Project UX", "Mobile Design", "User Research", "Figma", "Adobe XD"],
    learned: ["Government UX standards", "Mobile-first design", "Healthcare UX basics", "Research & validation"],
    clients: ["Tamil Nadu Government", "DRMURS Users"],
    projects: ["DRMURS App (100K+ downloads)", "TN Gov Healthcare Project"],
  },
  {
    year: "Aug 2020 – Nov 2020",
    role: "Software Developer Intern",
    company: "Iconic Dream Focus",
    color: "#4A5568",
    expertise: ["HTML", "CSS", "JavaScript", "React Basics", "Git"],
    learned: ["Front-end fundamentals", "Product development lifecycle", "Team collaboration", "Coding best practices"],
    clients: ["Internal Projects"],
    projects: ["Internal Web Tools", "Frontend Components"],
  },
];

const highlights = [
  { icon: MapPin, label: "Chennai, India", sub: "Available globally" },
  { icon: Briefcase, label: "5+ Years", sub: "Product · SaaS · Govt" },
  { icon: Code, label: "UX + Code", sub: "Figma → Next.js" },
  { icon: Users, label: "100+ Mentored", sub: "20+ placements" },
];

function DetailPanel({ item }: { item: typeof timeline[0] }) {
  return (
    <motion.div
      key={item.year}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="h-full flex flex-col gap-5 p-8"
    >
      {/* Role header */}
      <div className="pb-5 border-b border-[#1e293b]">
        <div className="text-[10px] font-mono uppercase tracking-widest text-[#475569] mb-2">{item.year}</div>
        <h3 className="font-title text-2xl font-black text-white leading-tight">{item.role}</h3>
        <p className="text-sm font-medium mt-1" style={{ color: item.color }}>{item.company}</p>
      </div>

      {/* Expertise */}
      <div>
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-3">Expertise Used</div>
        <div className="flex flex-wrap gap-1.5">
          {item.expertise.map(e => (
            <span key={e} className="text-[11px] text-[#94a3b8] border border-[#1e293b] px-2 py-1 bg-[#0c0e12]">
              {e}
            </span>
          ))}
        </div>
      </div>

      {/* What I Learned */}
      <div>
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-3">What I Learned</div>
        <div className="space-y-1.5">
          {item.learned.map(l => (
            <div key={l} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-[12px] text-[#94a3b8]">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Clients */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-3">Clients</div>
          <div className="space-y-1">
            {item.clients.map(c => (
              <div key={c} className="text-[12px] text-[#64748b]">{c}</div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-3">Projects</div>
          <div className="space-y-1">
            {item.projects.map(p => (
              <div key={p} className="text-[12px] text-[#64748b]">{p}</div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  useMotionValueEvent(smoothProgress, "change", (v) => {
    const idx = Math.max(0, Math.min(timeline.length - 1, Math.floor(v * timeline.length)));
    setActiveIndex(idx);
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" ref={sectionRef} style={{ height: `${100 + timeline.length * 60}vh` }}>

      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

        {/* Index strip */}
        <div className="border-b border-[#1e293b] bg-[#08090b]/80 backdrop-blur-sm flex-shrink-0">
          <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569]">
            <span>Index · 01 — About</span>
            <span style={{ color: "rgba(255,116,16,0.7)" }}>Career · Expertise · Clients</span>
          </div>
        </div>

        {/* Stat bar */}
        <div className="flex-shrink-0 border-b border-[#1e293b]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-4 divide-x divide-[#1e293b]">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3 py-4 px-4">
                  <h.icon size={16} style={{ color: "#FF7410" }} />
                  <div>
                    <div className="text-sm font-title font-bold text-white">{h.label}</div>
                    <div className="text-[10px] text-[#475569] uppercase tracking-wider">{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main two-column split */}
        <div className="flex-1 min-h-0 border-b border-[#1e293b]">
          <div className="max-w-6xl mx-auto px-6 h-full grid lg:grid-cols-[380px_1fr] divide-x divide-[#1e293b]">

            {/* LEFT — Timeline */}
            <div className="py-8 pr-8 overflow-y-auto">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#475569] mb-6">Career Journey</div>

              <div className="relative">
                {/* Static track */}
                <div className="absolute left-[10px] top-3 bottom-3 w-px bg-[#1e293b]" />

                {/* Animated fill line */}
                <motion.div
                  className="absolute left-[10px] top-3 w-px origin-top"
                  style={{ height: lineHeight, backgroundColor: "#FF7410", opacity: 0.7 }}
                />

                <div className="space-y-0">
                  {timeline.map((item, i) => {
                    const isActive = i === activeIndex;
                    const isPast = i < activeIndex;
                    return (
                      <motion.div
                        key={i}
                        className="flex gap-5 py-4 cursor-pointer"
                        onClick={() => setActiveIndex(i)}
                      >
                        {/* Dot */}
                        <div
                          className="relative z-10 mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-500"
                          style={{
                            borderColor: isActive ? item.color : (isPast ? item.color : "#334155"),
                            backgroundColor: "#08090b",
                            boxShadow: isActive ? `0 0 12px ${item.color}` : "none",
                          }}
                        >
                          <motion.div
                            className="w-2 h-2 rounded-full"
                            animate={{ backgroundColor: isActive ? item.color : (isPast ? item.color : "#334155"), scale: isActive ? 1 : 0.7 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>

                        {/* Label */}
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-mono text-[#475569] uppercase tracking-wider mb-0.5">{item.year}</div>
                          <div
                            className="text-sm font-semibold transition-colors duration-300"
                            style={{ color: isActive ? "#fff" : "#64748b" }}
                          >
                            {item.role}
                          </div>
                          <div
                            className="text-[11px] font-medium transition-colors duration-300"
                            style={{ color: isActive ? item.color : "#475569" }}
                          >
                            {item.company}
                          </div>
                          {item.current && (
                            <span className="badge mt-1.5 inline-flex">Now</span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Scroll hint */}
              <div className="mt-4 flex items-center gap-2 text-[10px] text-[#334155] font-mono uppercase tracking-widest">
                <span>↓</span>
                <span>Scroll to explore</span>
              </div>
            </div>

            {/* RIGHT — Detail panel (client-only to avoid hydration mismatch) */}
            <div className="overflow-hidden relative bg-[#0a0c0f]">
              {(() => {
                const safeIdx = Math.max(0, Math.min(activeIndex, timeline.length - 1));
                const activeItem = timeline[safeIdx];
                if (!activeItem) return null;
                return mounted ? (
                  <>
                    <div
                      className="absolute top-4 right-6 font-title font-black text-[6rem] leading-none select-none pointer-events-none opacity-[0.04]"
                      style={{ color: activeItem.color }}
                    >
                      {String(safeIdx + 1).padStart(2, "0")}
                    </div>
                    <DetailPanel key={safeIdx} item={activeItem} />
                  </>
                ) : (
                  <DetailPanel item={timeline[0]} />
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
