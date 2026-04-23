"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Stack, Swatches } from "@phosphor-icons/react";

const VP = { once: true, amount: 0.08 } as const;
const spring = { type: "spring" as const, stiffness: 55, damping: 18, mass: 1.1 };

const blocks = [
  {
    title: "Small projects — case-study style",
    body:
      "We’ll showcase compact work the same way we treat full case studies: several small projects grouped into a single block, so each strip tells a clear story without losing the detail.",
    accent: "#FF7410",
    href: "/#works",
    viewLabel: "View work",
    chip: "Product & UX",
    Icon: Stack,
  },
  {
    title: "Graphic design",
    body:
      "Poster design, logos, and business cards we’ve shipped for different clients — print-first and brand touchpoints beyond product UI.",
    accent: "#E07010",
    href: "/#contact",
    viewLabel: "View",
    chip: "Print & brand",
    Icon: Swatches,
  },
] as const;

export default function ProjectSnippets() {
  return (
    <section
      id="snippets"
      className="relative z-10 border-t border-[#1e293b] bg-[#08090b]"
    >
      <div className="border-b border-[#1e293b] px-5 py-2 sm:px-7 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-[9px] font-mono uppercase tracking-[0.2em] sm:text-[10px]">
          <span className="text-[#475569]">Index · 02.1 — Project snippets</span>
          <span className="text-[#475569]">2 areas</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-7 sm:py-12 md:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ ...spring }}
          className="mb-8"
        >
          <p className="mb-2 text-[9px] font-mono uppercase tracking-[0.24em] text-[#64748b] sm:text-[10px]">
            02.1 / Project snippets
          </p>
          <h2 className="font-title text-xl font-black leading-tight text-[#f8fafc] sm:text-2xl md:text-3xl">Project snippets</h2>
        </motion.header>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {blocks.map((b, i) => {
            const Icon = b.Icon;
            return (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 48, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={VP}
                transition={{ ...spring, delay: i * 0.06 }}
                className="group relative flex min-h-[15rem] flex-col overflow-hidden border border-[#1e293b] bg-[#0c1014] shadow-[0_4px_0_0_rgba(0,0,0,0.2)] transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-[#334155] hover:shadow-[0_20px_48px_-24px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)]"
              >
                {/* Accent glow + noise grid */}
                <div
                  className="pointer-events-none absolute -right-12 -top-10 h-40 w-40 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: b.accent }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, ${b.accent}18 0.5px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent to-45%"
                  aria-hidden
                />

                <div className="relative h-[3px] w-full shrink-0" style={{ background: b.accent }} />
                <div
                  className="relative h-px w-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${b.accent}80, transparent)`,
                  }}
                  aria-hidden
                />

                <div className="relative z-[1] flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <span
                      className="inline-flex items-center border px-2 py-1 text-[9px] font-mono font-semibold uppercase tracking-[0.12em] text-[#94a3b8]"
                      style={{
                        borderColor: `${b.accent}45`,
                        background: `color-mix(in srgb, ${b.accent} 12%, #0c1014)`,
                        color: `color-mix(in srgb, ${b.accent} 70%, #e2e8f0)`,
                      }}
                    >
                      {b.chip}
                    </span>
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#1e293b] transition-colors duration-300 group-hover:border-[#334155]"
                      style={{
                        background: `color-mix(in srgb, ${b.accent} 14%, #08090b)`,
                        boxShadow: `inset 0 0 0 1px ${b.accent}22`,
                      }}
                    >
                      <Icon size={20} style={{ color: b.accent }} weight="duotone" aria-hidden />
                    </div>
                  </div>

                  <h3 className="font-title text-lg font-bold leading-snug text-[#f1f5f9] sm:text-xl">{b.title}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#94a3b8]">{b.body}</p>

                  <div className="mt-6 border-t border-[#1e293b] pt-5">
                    <Link
                      href={b.href}
                      scroll
                      className="inline-flex w-full items-center justify-between gap-3 border border-[#1e293b] bg-[#08090b] px-4 py-3 text-left text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#e2e8f0] transition-all duration-300 hover:border-[#334155] sm:w-auto"
                      style={{
                        boxShadow: `inset 0 0 0 1px ${b.accent}15, 0 8px 20px -12px ${b.accent}55`,
                      }}
                    >
                      <span className="min-w-0" style={{ color: b.accent }}>
                        {b.viewLabel}
                      </span>
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#1e293b] transition-transform duration-300 group-hover:translate-x-0.5"
                        style={{ background: `${b.accent}10`, borderColor: `${b.accent}30` }}
                      >
                        <ArrowRight size={16} weight="bold" style={{ color: b.accent }} aria-hidden />
                      </span>
                    </Link>
                    <p className="mt-2 text-[10px] text-[#64748b]">
                      {b.href === "/#works" ? "Jump to case studies you can read today." : "Open contact — we’ll line up a graphic brief."}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
