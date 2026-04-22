"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, IdentificationCard, GraduationCap 
} from "@phosphor-icons/react";

const timeline = [
  {
    year: "Oct 2025 – Present",
    role: "Freelance UX Designer & Dev",
    company: "Independent",
    color: "#FF7410",
    current: true,
    expertise: ["Product Design", "UX Research", "Next.js", "Tailwind CSS", "Framer Motion", "Figma", "MCP / AI Integration", "AI Agent Workflows"],
    learned: [
      "Delivering end-to-end UX + frontend for ecommerce, EdTech, and community products",
      "Handling full lifecycle from client scoping to handoff and deployment",
      "Using AI-assisted workflows for faster and cleaner production builds",
      "Balancing design quality with practical, production-ready implementation",
    ],
    clients: ["Independent freelance projects", "Founder-led product teams", "Community-first products"],
    projects: ["Vidya's Kitchen (PWA)", "CEaSS Pet Ecommerce", "Irasus AI Battery Dashboard", "One India ATM App"],
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    year: "May 2024 – Sep 2025",
    role: "UX Designer",
    company: "Parla Retail (UK)",
    color: "#E06010",
    expertise: ["Cross-cultural UX", "Enterprise Dashboards", "CTA Workflows", "Figma"],
    learned: ["Improved booking and call workflows", "Built stronger conversion-oriented journey design", "Shipped with enterprise expectations for US retail users"],
    clients: ["Nebraska Furniture Mart (US)", "Parla Retail (UK)"],
    projects: ["Show & Sell Platform", "Customer Scheduler Integration", "Retailer Dashboard"],
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    year: "Oct 2022 – Feb 2024",
    role: "Lead UX Designer",
    company: "Intellemo",
    color: "#B04C0A",
    expertise: ["Product Strategy", "Conversion Optimization", "SaaS UX", "Figma"],
    learned: ["Lifted engagement through UI architecture revamp", "Improved monetization communication with subscription UX", "Scaled adoption with usability-first redesigns"],
    clients: ["Urban Company", "House of Candy", "Fabrento", "Jio Mart"],
    projects: ["Onboarding Redesign", "Analytics Dashboard", "Subscription UX Revamp"],
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    year: "Dec 2020 – Oct 2022",
    role: "UX Designer",
    company: "Iconic Dream Focus",
    color: "#7A3008",
    expertise: ["UI/UX Design", "Product-led UX", "Social Networking UX", "Mobile Design"],
    learned: ["Built DRMURS social networking app from concept to launch", "Improved delivery speed using agile design methods", "Contributed to stronger product adoption through usability-focused design"],
    clients: [],
    projects: ["DRMURS Social Networking App", "Core Product Experience Design"],
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    year: "Aug 2020 – Nov 2020",
    role: "Software Developer Intern",
    company: "Iconic Dream Focus",
    color: "#4A5568",
    expertise: ["HTML", "CSS", "JS", "React Basics"],
    learned: ["Front-end fundamentals", "Product lifecycle"],
    clients: ["Internal Projects"],
    projects: ["Web Tools"],
    span: "lg:col-span-1 lg:row-span-1",
  },
];

const highlights = [
  { icon: GraduationCap, label: "B.Tech Information Technology", sub: "Anna University · 2016 – 2020" },
  { icon: IdentificationCard, label: "Advanced UX UI Design Certification", sub: "Aspira Design Institute · UX Program" },
];

function BentoCard({ item, index }: { item: typeof timeline[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  /** Toggled by tap (mobile / touch) so details work without :hover. */
  const [detailPinned, setDetailPinned] = useState(false);
  const showDetail = isHovered || detailPinned;
  const overlayPointerEvents = detailPinned ? "pointer-events-auto" : "pointer-events-none";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group overflow-hidden border border-[#1e293b] bg-[#0c0e12] p-4 sm:p-6 flex flex-col gap-4 ${item.span} transition-all duration-500 hover:border-[#FF7410]/30 hover:bg-[#0e1116]`}
    >
      {/* Background Accent */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08]"
        style={{ 
          background: `radial-gradient(circle at top right, ${item.color}, transparent 70%)`,
        }} 
      />

      {/* Card Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#475569]">{item.year}</span>
          {item.current && <span className="badge px-2 py-0.5 text-[9px]">ACTIVE</span>}
        </div>
        <h3 className="font-title text-lg sm:text-xl font-black text-white leading-tight group-hover:text-[#FF7410] transition-colors">{item.role}</h3>
        <p className="text-xs sm:text-sm font-medium mt-1 transition-colors" style={{ color: showDetail ? '#fff' : item.color }}>{item.company}</p>
      </div>

      {/* Summary Content (Expertise) */}
      <div className="flex-1 relative z-10">
        <div className="flex flex-wrap gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
          {item.expertise.slice(0, item.span.includes('col-span-2') ? 8 : 4).map(e => (
            <span key={e} className="text-[10px] text-[#94a3b8] border border-[#1e293b] px-2 py-0.5 bg-[#08090b]">
              {e}
            </span>
          ))}
          {item.expertise.length > (item.span.includes('col-span-2') ? 8 : 4) && (
            <span className="text-[10px] text-[#475569] flex items-center">+ {item.expertise.length - (item.span.includes('col-span-2') ? 8 : 4)} more</span>
          )}
        </div>

        {/* Fill large card space with meaningful project context */}
        {item.span.includes("col-span-2") && (
          <div className="mt-5 grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="border border-[#1e293b] bg-[#08090b] p-3">
              <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#475569] mb-2">Freelance Projects</div>
              <div className="space-y-1.5">
                {item.projects.slice(0, 4).map((project) => (
                  <div key={project} className="text-[11px] text-[#94a3b8] leading-tight">
                    • {project}
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-[#1e293b] bg-[#08090b] p-3">
              <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#475569] mb-2">What I Deliver</div>
              <div className="space-y-1.5">
                {item.learned.slice(0, 4).map((point) => (
                  <div key={point} className="text-[11px] text-[#94a3b8] leading-tight">
                    • {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer / Interaction Hint */}
      <div className="mt-auto pt-4 border-t border-[#1e293b]/50 relative z-10 flex items-center justify-between">
        <div className="flex -space-x-1">
           {[1, 2, 3].map(i => (
             <div key={i} className="w-1.5 h-1.5 rounded-full border border-[#1e293b]" style={{ backgroundColor: showDetail ? item.color : '#1e293b' }} />
           ))}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setDetailPinned((p) => !p);
          }}
          className="relative z-20 flex min-h-[2.5rem] cursor-pointer items-center gap-2 text-left text-[10px] font-mono uppercase tracking-widest text-[#475569] transition-colors group-hover:text-white active:text-white touch-manipulation"
        >
          {detailPinned ? "Close" : "View detail"}
          <ArrowRight size={10} className={detailPinned ? "rotate-180 transition-transform" : "group-hover:translate-x-1 transition-transform"} />
        </button>
      </div>

      {/* Hover / tap overlay with deeper details */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showDetail ? 1 : 0 }}
        className={`absolute inset-0 z-20 flex flex-col bg-[#0c0e12]/95 p-4 backdrop-blur-sm sm:p-6 ${overlayPointerEvents}`}
        onClick={
          detailPinned
            ? (e) => {
                if (e.target === e.currentTarget) setDetailPinned(false);
              }
            : undefined
        }
      >
        {detailPinned ? (
          <button
            type="button"
            onClick={() => setDetailPinned(false)}
            className="absolute right-2 top-2 z-30 flex min-h-9 min-w-9 items-center justify-center border border-[#334155] bg-[#0c0e12] text-lg leading-none text-white/90 active:bg-[#1e293b] sm:right-3 sm:top-3"
            aria-label="Close details"
          >
            ×
          </button>
        ) : null}
        <div className="mb-4">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#FF7410] mb-2">Key Outcomes</div>
          <div className="space-y-2">
            {item.learned.slice(0, 3).map(l => (
              <div key={l} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-[11px] text-[#94a3b8] leading-tight">{l}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-1">Clients / Context</div>
          <div className="text-[11px] text-[#64748b] truncate">
            {item.clients.length ? item.clients.join(" · ") : "Product-based company · internal product team"}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setOverflow(0);
      return;
    }

    const updateOverflow = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        const viewportHeight = window.innerHeight;
        // Subtract 64px for top padding/index strip safety and add a small buffer
        const extra = Math.max(0, contentHeight - viewportHeight + 120); 
        setOverflow(extra);
      }
    };

    updateOverflow();
    window.addEventListener("resize", updateOverflow);
    return () => window.removeEventListener("resize", updateOverflow);
  }, [isDesktop]);

  /* ── Internal Content Scroll ── */
  // The content shifts upwards as the user scrolls within the pinned area
  const contentY = useTransform(scrollYProgress, [0, 0.75], [0, -overflow]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-0"
      style={{ height: isDesktop ? "350vh" : "auto" }}
    >
      
      {/* Sticky container ensures Bento stays 'fixed' while Works wipes over it */}
      <div className={isDesktop ? "sticky top-0 h-screen overflow-hidden" : "relative"}>
        
        {/* Index strip stays at top */}
        <motion.div
          className="border-b border-[#1e293b] bg-[#08090b]/80 backdrop-blur-sm relative z-30"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569]">
            <span className="flex items-center gap-2">
              <IdentificationCard size={14} /> Index · 01 — Career Bento
            </span>
            <span style={{ color: "rgba(255,116,16,0.7)" }}>Scroll to Explore Full Journey</span>
          </div>
        </motion.div>

        {/* This container moves locally */}
        <motion.div 
          ref={contentRef}
          style={isDesktop ? { y: contentY } : undefined}
          className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
        >
          {/* Intro Header */}
          <motion.div
            className="max-w-2xl mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF7410] mb-4">Journey Map</p>
            <h2 className="font-title text-4xl sm:text-5xl font-black text-white leading-[1.1] mb-6">
              Designing experiences that <span className="neon-text">move people</span>, building systems that scale.
            </h2>
            <p className="font-description text-lg text-[#94a3b8] leading-relaxed">
              From enterprise ecommerce and SaaS products to hyper-local digital experiences, my journey has centered on practical UX thinking, clear outcomes, and people-first execution.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {timeline.map((item, i) => (
              <BentoCard key={i} item={item} index={i} />
            ))}

            {/* Highlights */}
            <motion.div
              className="lg:col-span-1 border border-[#1e293b] bg-[#08090b] p-6 flex flex-col justify-center gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {highlights.map((h, i) => (
                 <div key={i} className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#1e293b]/30 flex items-center justify-center text-[#FF7410]">
                     <h.icon size={20} />
                   </div>
                   <div>
                     <div className="text-sm font-title font-bold text-white">{h.label}</div>
                     <div className="text-[10px] text-[#475569] uppercase tracking-wider">{h.sub}</div>
                   </div>
                 </div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
