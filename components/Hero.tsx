"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileDoc } from "@phosphor-icons/react";

/* Opacity stays at 1 so SSR + first paint are never a blank hero (opacity-0 was invisible until JS ran). */
const fadeUp = {
  hidden: { opacity: 1, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stats = [
  { value: "5+", label: "Years" },
  { value: "100K+", label: "Downloads" },
  { value: "100+", label: "Mentored" },
  { value: "3", label: "Shipped" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 140]);
  const contentY = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden blueprint-grid border-b border-[#1e293b] pt-[clamp(6.5rem,14vh,9rem)] pb-10 sm:pb-14">

      {/* Parallax glow */}
      <motion.div
        style={{
          y: bgY,
          background: "radial-gradient(ellipse 700px 500px at center, rgba(255,116,16,0.07) 0%, transparent 70%)",
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Corner marks */}
      <div className="absolute top-20 left-6 w-10 h-10 border-t-2 border-l-2 border-[#FF7410]/20" />
      <div className="absolute top-20 right-6 w-10 h-10 border-t-2 border-r-2 border-[#FF7410]/20" />
      <div className="absolute bottom-12 left-6 w-10 h-10 border-b-2 border-l-2 border-[#FF7410]/20" />
      <div className="absolute bottom-12 right-6 w-10 h-10 border-b-2 border-r-2 border-[#FF7410]/20" />

      {/* Watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-title font-black uppercase leading-none tracking-tighter opacity-[0.032]"
        style={{ fontSize: "clamp(3rem,16vw,13rem)", color: "#FF7410" }}
        aria-hidden
      >
        PORT_FOLIO
      </div>

      {/* Blueprint coords */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 1 }}
        className="absolute top-[4.5rem] left-14 text-[9px] font-mono uppercase tracking-widest hidden lg:block"
        style={{ color: "rgba(255,116,16,0.3)" }}
      >
        ux.portfolio / v2026
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 1 }}
        className="absolute top-[4.5rem] right-14 text-[9px] font-mono uppercase tracking-widest hidden lg:block"
        style={{ color: "rgba(255,116,16,0.3)" }}
      >
        chennai, india
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: contentY }} className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">

        {/* Available badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="flex justify-center mb-8">
          <div className="badge">
            <span className="status-dot" />
            Available for Freelance &amp; Full-time
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="font-title text-5xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tight text-white mb-5 leading-[1.05]"
        >
          Simon{" "}
          <span className="neon-text">Santhosh</span>
        </motion.h1>

        {/* Roles */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center justify-center gap-3 mb-6 flex-wrap"
        >
          {["UX Designer", "Vibe Coder", "Mentor"].map((role, i, arr) => (
            <span key={role} className="flex items-center gap-3">
              <span className="font-description text-base sm:text-lg text-[#64748b]">
                {role}
              </span>
              {i < arr.length - 1 && <span className="text-[#334155]">×</span>}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="font-description text-xl sm:text-2xl font-light text-white/85 mb-3 leading-relaxed"
        >
          I design experiences people{" "}
          <em className="neon-text not-italic font-medium">feel</em>
          {" "}— then build them.
        </motion.p>

        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="font-description text-sm text-[#64748b] max-w-lg mx-auto mb-10 leading-relaxed"
        >
          UX designer from Chennai focused on conversion-led products, practical systems, and clean handoffs.
        </motion.p>

        {/* Stats strip */}
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center justify-center gap-px border border-[#1e293b] overflow-hidden max-w-sm mx-auto mb-10"
        >
          {stats.map((s, i) => (
            <div key={s.label}
              className="flex-1 text-center py-3 px-2 bg-[#0c0e12]"
              style={{ borderRight: i < stats.length - 1 ? "1px solid #1e293b" : "none" }}
            >
              <div className="font-title text-lg font-black" style={{ color: "#FF7410" }}>{s.value}</div>
              <div className="text-[9px] text-[#475569] uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs — no LinkedIn */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" animate="show"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#works"
            className="group flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-[#0a0908] bg-[#FF7410] hover:bg-[#FF8C30] transition-colors active:scale-[0.98]"
          >
            View Work
            <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="mailto:santhosh.a.designer@gmail.com"
            className="flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#94a3b8] border border-[#334155] hover:border-[#FF7410]/50 hover:text-white transition-all active:scale-[0.98]"
          >
            Get Resume
            <FileDoc size={15} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
