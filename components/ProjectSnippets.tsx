"use client";

import { motion } from "framer-motion";

const VP = { once: true, amount: 0.08 } as const;
const spring = { type: "spring" as const, stiffness: 55, damping: 18, mass: 1.1 };

const blocks = [
  {
    title: "Small projects — case-study style",
    body:
      "We’ll showcase compact work the same way we treat full case studies: several small projects grouped into a single block, so each strip tells a clear story without losing the detail.",
    accent: "#FF7410",
  },
  {
    title: "Graphic design",
    body:
      "Poster design, logos, and business cards we’ve shipped for different clients — print-first and brand touchpoints beyond product UI.",
    accent: "#E07010",
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

        <div className="grid gap-4 md:grid-cols-2">
          {blocks.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 48, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={VP}
              transition={{ ...spring, delay: i * 0.06 }}
              className="flex min-h-[12rem] flex-col border border-[#1e293b] bg-[#0c1014] transition-colors hover:border-[#334155]"
            >
              <div className="h-[3px] w-full" style={{ background: b.accent }} />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-title text-lg font-bold leading-snug text-[#f1f5f9] sm:text-xl">{b.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#94a3b8]">{b.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
