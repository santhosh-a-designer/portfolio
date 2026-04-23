"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden border-t border-[#1e293b] bg-[#08090b]"
    >
      <div className="pointer-events-none absolute inset-0 section-dot-grid opacity-25" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-24 w-64 rounded-full bg-[#FF7410] opacity-[0.06] blur-2xl" aria-hidden />
      {/* Top strip */}
      <div className="border-b border-[#1e293b]">
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#334155]">
          <span>simon.santhosh / 2026</span>
          <span>Chennai · India</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-7 h-7 flex items-center justify-center text-[#FF7410] text-[11px] font-bold font-mono"
            style={{ border: "1px solid rgba(255,116,16,0.4)", background: "rgba(255,116,16,0.06)" }}
          >
            SS
          </div>
          <span className="text-[12px] text-[#475569] font-mono">
            Designed & built by Simon Santhosh
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="status-dot" />
          <span className="text-[11px] text-[#475569] font-mono uppercase tracking-wider">Open to work</span>
        </div>
      </div>
    </motion.footer>
  );
}
