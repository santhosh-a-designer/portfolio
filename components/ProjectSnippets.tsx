"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

type Snippet = {
  slug: string;
  project: string;
  company: string;
  tag: string;
  status: "shipped" | "live" | "in-progress";
  tagline: string;
  highlights: string[];
  colors: { hex: string; name: string }[];
  outcome: string;
  accent: string;
};

const snippets: Snippet[] = [
  {
    slug: "parla-show-and-sell",
    project: "Show & Sell",
    company: "Parla Retail",
    tag: "Enterprise · Ecommerce",
    status: "shipped",
    tagline: "CTA-led selling from first tap to in-call checkout.",
    highlights: ["Show Preview mode", "QR product scan on call", "Auto call-link on confirm", "In-call order flow"],
    colors: [
      { hex: "#2DC8E8", name: "Parla teal" },
      { hex: "#1976D2", name: "Sky blue" },
      { hex: "#E91E8C", name: "Show & Sell pink" },
      { hex: "#FFFFFF", name: "White canvas" },
    ],
    outcome: "US retail clients responded well. Scheduler reduced booking drop-off.",
    accent: "#2DC8E8",
  },
  {
    slug: "vidyas-kitchen-pwa",
    project: "Vidya's Kitchen",
    company: "Home Catering · Sivakasi",
    tag: "PWA · WhatsApp · Hyper-local",
    status: "in-progress",
    tagline: "Home catering that feels like a product, not a PDF.",
    highlights: ["WhatsApp bot order flow", "Installable PWA", "Ops dashboard", "Driver handoff view"],
    colors: [
      { hex: "#CC1C1C", name: "Brand red" },
      { hex: "#25D366", name: "WhatsApp green" },
      { hex: "#1a1a1a", name: "Dark canvas" },
      { hex: "#FFFFFF", name: "White text" },
    ],
    outcome: "First premium home-catering stack in Sivakasi. ~80% live.",
    accent: "#CC1C1C",
  },
  {
    slug: "ezra-mentor-dashboard",
    project: "Ezra Dashboard",
    company: "FITA Academy",
    tag: "EdTech · Automation",
    status: "live",
    tagline: "Attendance and pay in one system mentors actually trust.",
    highlights: ["Ezra bot intake", "Batch-end nudge", "Gmail payment handoff", "Student hours view"],
    colors: [
      { hex: "#06B6D4", name: "Teal / cyan" },
      { hex: "#4ADE80", name: "Batch green" },
      { hex: "#F59E0B", name: "Earnings amber" },
      { hex: "#EF4444", name: "Warning red" },
    ],
    outcome: "₹50k in paid pilots from 5 mentors. Academy-wide buy in discussion.",
    accent: "#06B6D4",
  },
];

const statusLabel: Record<Snippet["status"], string> = {
  shipped: "Shipped",
  live: "Live",
  "in-progress": "In progress",
};

const VP = { once: true, amount: 0.08 } as const;
const spring = { type: "spring" as const, stiffness: 55, damping: 18, mass: 1.1 };

export default function ProjectSnippets() {
  return (
    <section
      id="snippets"
      className="relative z-10 border-t border-[#1e293b] bg-[#08090b]"
    >
      {/* index strip */}
      <div className="border-b border-[#1e293b] px-5 py-2 sm:px-7 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-[9px] font-mono uppercase tracking-[0.2em] sm:text-[10px]">
          <span className="text-[#475569]">Index · 02.1 — Project snippets</span>
          <span className="text-[#475569]">{snippets.length} projects</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-7 sm:py-12 md:px-8 lg:px-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ ...spring }}
          className="mb-8"
        >
          <p className="mb-2 text-[9px] font-mono uppercase tracking-[0.24em] text-[#64748b] sm:text-[10px]">
            02.1 / Project snippets
          </p>
          <h2 className="font-title text-xl font-black leading-tight text-[#f8fafc] sm:text-2xl md:text-3xl">
            Design at a glance
          </h2>
          <p className="mt-2 max-w-[52ch] text-[13px] leading-relaxed text-[#64748b]">
            Key design decisions, palette, and outcomes from each project — before you go deep.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {snippets.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 56, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={VP}
              transition={{ ...spring, delay: i * 0.07 }}
            >
              <div className="group flex h-full flex-col border border-[#1e293b] bg-[#0c1014] transition-colors hover:border-[#334155]">
                {/* accent bar */}
                <div className="h-[3px] w-full" style={{ background: s.accent }} />

                {/* header */}
                <div className="flex items-start justify-between gap-2 px-4 pt-4 pb-3">
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-[0.18em] text-[#64748b]">{s.tag}</p>
                    <h3 className="mt-0.5 font-title text-[15px] font-bold leading-snug text-[#f1f5f9]">
                      {s.project}
                    </h3>
                    <p className="text-[11px] font-medium" style={{ color: s.accent }}>
                      {s.company}
                    </p>
                  </div>
                  <span
                    className="shrink-0 rounded-none px-1.5 py-0.5 text-[7px] font-mono font-semibold uppercase tracking-widest"
                    style={{ color: s.accent, background: `${s.accent}0f`, border: `1px solid ${s.accent}35` }}
                  >
                    {statusLabel[s.status]}
                  </span>
                </div>

                {/* tagline */}
                <p className="border-t border-[#1e293b] px-4 py-3 text-[13px] leading-relaxed text-[#94a3b8]">
                  {s.tagline}
                </p>

                {/* highlights */}
                <div className="border-t border-[#1e293b] px-4 py-3">
                  <p className="mb-2 text-[9px] font-mono uppercase tracking-[0.14em] text-[#475569]">
                    Design highlights
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.highlights.map((h) => (
                      <span
                        key={h}
                        className="border border-[#1e293b] bg-[#08090b] px-2 py-0.5 text-[10px] font-mono text-[#64748b]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* color palette */}
                <div className="border-t border-[#1e293b] px-4 py-3">
                  <p className="mb-2 text-[9px] font-mono uppercase tracking-[0.14em] text-[#475569]">Palette</p>
                  <div className="flex gap-2">
                    {s.colors.map((c) => (
                      <div key={c.hex} className="flex flex-col items-center gap-1">
                        <div
                          className="h-6 w-6 border border-[#1e293b]"
                          style={{ background: c.hex }}
                          title={c.name}
                        />
                        <span className="text-[8px] font-mono text-[#475569]">{c.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* outcome */}
                <div className="flex-1 border-t border-[#1e293b] px-4 py-3">
                  <p className="mb-1 text-[9px] font-mono uppercase tracking-[0.14em] text-[#475569]">Outcome</p>
                  <p className="text-[12px] leading-relaxed text-[#cbd5e1]">{s.outcome}</p>
                </div>

                {/* CTA */}
                <Link
                  href={`/case-studies/${s.slug}`}
                  className="flex items-center justify-between border-t px-4 py-3 text-[11px] font-mono font-semibold uppercase tracking-[0.14em] transition-colors"
                  style={{
                    borderColor: `${s.accent}20`,
                    color: s.accent,
                    background: `${s.accent}06`,
                  }}
                >
                  Full case study
                  <ArrowUpRight size={13} aria-hidden />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
