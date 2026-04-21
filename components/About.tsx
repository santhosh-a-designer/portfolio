"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  MapPin, Briefcase, Code, Users, 
  ArrowRight, IdentificationCard, GraduationCap 
} from "@phosphor-icons/react";

const timeline = [
  {
    year: "Oct 2025 – Present",
    role: "Freelance UX Designer & Dev",
    company: "Independent",
    color: "#FF7410",
    current: true,
    expertise: ["Product Design", "UX Research", "Next.js", "Tailwind CSS", "Framer Motion", "Figma", "MCP / AI Integration"],
    learned: ["End-to-end product delivery", "Client scoping", "Vibe coding workflows", "Shipping with modern stacks"],
    clients: ["Rettakili Brand, Sivakasi", "FITA Academy", "Personal Projects"],
    projects: ["Vidya's Kitchen (PWA)", "CEaSS Pet Platform", "EZRA Dashboard"],
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    year: "May 2024 – Sep 2025",
    role: "UX Designer",
    company: "Parla Retail (UK)",
    color: "#E06010",
    expertise: ["Cross-cultural UX", "Enterprise Dashboards", "Figma"],
    learned: ["US/UK market nuances", "Enterprise design systems"],
    clients: ["Parla Retail UK"],
    projects: ["Show & Sell Platform", "Retailer Dashboard"],
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    year: "Oct 2022 – Feb 2024",
    role: "Lead UX Designer",
    company: "Intellemo",
    color: "#B04C0A",
    expertise: ["Product Strategy", "Conversion Optimization", "Figma"],
    learned: ["Data-driven UX", "Leading design teams"],
    clients: ["Intellemo SaaS Users"],
    projects: ["Onboarding Redesign", "Analytics Dashboard"],
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    year: "Dec 2020 – Oct 2022",
    role: "UX Designer",
    company: "Iconic Dream Focus",
    color: "#7A3008",
    expertise: ["UI/UX Design", "Gov UX", "Mobile Design"],
    learned: ["Mobile-first design", "Healthcare UX"],
    clients: ["Tamil Nadu Government"],
    projects: ["DRMURS App (100K+ downloads)"],
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
  { icon: MapPin, label: "Chennai, India", sub: "Available globally" },
  { icon: Briefcase, label: "5+ Years", sub: "Product · SaaS · Govt" },
  { icon: Code, label: "UX + Code", sub: "Figma → Next.js" },
  { icon: Users, label: "100+ Mentored", sub: "20+ placements" },
];

function BentoCard({ item, index }: { item: typeof timeline[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group overflow-hidden border border-[#1e293b] bg-[#0c0e12] p-6 flex flex-col gap-4 ${item.span} transition-all duration-500 hover:border-[#FF7410]/30 hover:bg-[#0e1116]`}
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
        <h3 className="font-title text-xl font-black text-white leading-tight group-hover:text-[#FF7410] transition-colors">{item.role}</h3>
        <p className="text-sm font-medium mt-1 transition-colors" style={{ color: isHovered ? '#fff' : item.color }}>{item.company}</p>
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
      </div>

      {/* Footer / Interaction Hint */}
      <div className="mt-auto pt-4 border-t border-[#1e293b]/50 relative z-10 flex items-center justify-between">
        <div className="flex -space-x-1">
           {[1, 2, 3].map(i => (
             <div key={i} className="w-1.5 h-1.5 rounded-full border border-[#1e293b]" style={{ backgroundColor: isHovered ? item.color : '#1e293b' }} />
           ))}
        </div>
        <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-[#475569] group-hover:text-white transition-colors">
          View Detail <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Hover Overlay with deeper details */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-[#0c0e12]/95 backdrop-blur-sm p-6 z-20 flex flex-col pointer-events-none"
      >
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
          <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-1">Select Clients</div>
          <div className="text-[11px] text-[#64748b] truncate">{item.clients.join(" · ")}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
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
  }, []);

  /* ── Internal Content Scroll ── */
  // The content shifts upwards as the user scrolls within the pinned area
  const contentY = useTransform(scrollYProgress, [0, 0.75], [0, -overflow]);

  return (
    <section id="about" ref={sectionRef} className="relative z-0" style={{ height: "350vh" }}>
      
      {/* Sticky container ensures Bento stays 'fixed' while Works wipes over it */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
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
          style={{ y: contentY }}
          className="max-w-6xl mx-auto px-6 py-16"
        >
          {/* Intro Header */}
          <motion.div
            className="max-w-2xl mb-16"
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
              From government healthcare initiatives to hyper-local commerce apps, my career has been a pursuit of practical, visually stunning solutions.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

            {/* CTA / Education card */}
            <motion.div
              className="lg:col-span-1 border border-[#1e293b] bg-[#FF7410]/5 p-6 flex flex-col justify-center text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <GraduationCap size={32} className="mx-auto mb-4 text-[#FF7410]" />
              <h4 className="font-title text-lg font-black text-white mb-2">Constant Learner</h4>
              <p className="text-xs text-[#94a3b8] mb-4">Always expanding my toolkit with AI, Vibe Coding, and modern UX patterns.</p>
              <a href="mailto:santhosh.a.designer@gmail.com" className="text-[10px] font-mono uppercase tracking-widest text-[#FF7410] font-bold hover:underline">Get Full Resume</a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
