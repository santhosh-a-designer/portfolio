"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { EnvelopeSimple, CheckCircle, ArrowSquareOut } from "@phosphor-icons/react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("santhosh.a.designer@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" ref={ref} className="relative">
      {/* Section index strip */}
      <div className="border-b border-[#1e293b] bg-[#08090b]/60">
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569]">
          <span>Index · 06 — Contact</span>
          <div className="flex items-center gap-2">
            <div className="status-dot" />
            <span style={{ color: "rgba(255,116,16,0.8)" }}>Available · &lt;24h response</span>
          </div>
        </div>
      </div>

      <div className="py-20 max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <p className="section-tag mb-4">06 / Contact</p>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-white leading-tight">
            Have a problem worth{" "}
            <span className="neon-text">solving?</span>
          </h2>
        </motion.div>

        {/* Contact layout — single column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12, duration: 0.65 }}
          className="border border-[#1e293b] overflow-hidden"
        >
          {/* Email */}
          <button
            onClick={copyEmail}
            className="flex items-start gap-4 p-7 text-left border-b border-[#1e293b] hover:bg-[#FF7410]/5 transition-colors group w-full"
          >
            <div
              className="w-10 h-10 flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(255,116,16,0.1)", border: "1px solid rgba(255,116,16,0.22)" }}
            >
              {copied ? (
                <CheckCircle size={18} style={{ color: "#FF7410" }} />
              ) : (
                <EnvelopeSimple size={18} style={{ color: "#FF7410" }} />
              )}
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#475569] mb-1">Email</div>
              <div className="text-sm font-semibold text-white group-hover:text-[#FF7410] transition-colors">
                santhosh.a.designer@gmail.com
              </div>
              <div className="text-[11px] text-[#475569] mt-0.5">
                {copied ? "✓ Copied to clipboard" : "Click to copy"}
              </div>
            </div>
          </button>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/santhosh-designer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-7 border-b border-[#1e293b] hover:bg-[#FF7410]/5 transition-colors group"
          >
            <div
              className="w-10 h-10 flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(255,116,16,0.08)", border: "1px solid rgba(255,116,16,0.18)" }}
            >
              <ArrowSquareOut size={18} style={{ color: "#FF7410" }} />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#475569] mb-1">LinkedIn</div>
              <div className="text-sm font-semibold text-white group-hover:text-[#FF7410] transition-colors">
                santhosh-designer
              </div>
              <div className="text-[11px] text-[#475569] mt-0.5">3K+ followers · Open to connect</div>
            </div>
          </a>

          {/* Currently open to — full-width row list */}
          <div className="p-7 bg-[#0c0e12]">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-5">Currently Open To</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px border border-[#1e293b] overflow-hidden">
              {[
                "Freelance UX Design",
                "Full-time Product Designer",
                "Design System Consulting",
                "Figma → Code Projects",
                "Mentorship Collaborations",
                "Product Strategy",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-4 py-3 bg-[#08090b] hover:bg-[#FF7410]/5 transition-colors text-[13px] text-[#94a3b8] border-[#1e293b]"
                  style={{
                    borderRight: (i + 1) % 3 !== 0 ? "1px solid #1e293b" : "none",
                    borderBottom: i < 3 ? "1px solid #1e293b" : "none",
                  }}
                >
                  {item}
                  <span className="text-[#FF7410] text-xs ml-3 font-mono opacity-60">→</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Availability note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 flex items-center gap-3 text-[11px] text-[#334155] font-mono"
        >
          <div className="status-dot" />
          <span>Responds within 24 hours · Based in Chennai, India · Available globally</span>
        </motion.div>
      </div>
    </section>
  );
}
