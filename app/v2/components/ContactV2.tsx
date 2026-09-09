"use client";

import React, { useState, type FormEvent } from "react";
import { EnvelopeSimple, CheckCircle, ArrowSquareOut, PaperPlaneRight, WarningCircle } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactV2() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText("santhosh.a.designer@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("sending");
    setErrorText("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitState("error");
        setErrorText(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitState("success");
      setForm({ name: "", email: "", project: "" });
      setTimeout(() => setSubmitState("idle"), 3200);
    } catch {
      setSubmitState("error");
      setErrorText("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="w-full bg-[#08090b] text-white py-20 px-4 sm:px-6 relative overflow-hidden border-t-2 border-black">
      {/* Background ambient lighting and blueprint dot grid */}
      <div className="pointer-events-none absolute inset-0 section-dot-grid opacity-25" aria-hidden />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#FF7410] opacity-[0.06] blur-3xl" aria-hidden />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Title with Neon Orange Accent */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-sans tracking-tight">
            Have a problem worth <span className="text-[#FF7410] drop-shadow-[0_0_20px_rgba(255,116,16,0.6)]">solving?</span>
          </h2>
        </div>

        {/* Contact Container Box matching Image 2 */}
        <div className="border border-[#1e293b] bg-[#0c0e12] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          
          {/* GET IN TOUCH EYEBROW */}
          <div className="px-6 pt-6 pb-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#64748b]">
              GET IN TOUCH
            </span>
          </div>

          {/* Top 2-Column Row: EMAIL + LINKEDIN */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1e293b] p-4 sm:p-6 gap-4">
            
            {/* Email Card (with light blue outline highlight as shown in reference) */}
            <button
              type="button"
              onClick={copyEmail}
              className="flex items-center gap-4 p-4 rounded bg-[#08090b] border-2 border-[#38bdf8]/80 text-left transition-all hover:bg-[#0f172a] group"
            >
              <div className="w-10 h-10 rounded border border-[#FF7410]/30 bg-[#FF7410]/10 flex items-center justify-center shrink-0 text-[#FF7410]">
                {copied ? (
                  <CheckCircle size={20} weight="fill" className="text-emerald-400" />
                ) : (
                  <EnvelopeSimple size={20} weight="bold" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748b] block mb-0.5">
                  EMAIL
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#FF7410] truncate block">
                  santhosh.a.designer@gmail.com
                </span>
                <span className="text-[10px] text-[#475569] block mt-0.5">
                  {copied ? "✓ Copied to clipboard" : "Click to copy"}
                </span>
              </div>
            </button>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/santhosh-designer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded bg-[#08090b] border border-[#1e293b] text-left transition-all hover:border-[#FF7410]/40 hover:bg-[#0f172a] group"
            >
              <div className="w-10 h-10 rounded border border-[#FF7410]/30 bg-[#FF7410]/10 flex items-center justify-center shrink-0 text-[#FF7410]">
                <ArrowSquareOut size={20} weight="bold" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748b] block mb-0.5">
                  LINKEDIN
                </span>
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF7410] transition-colors truncate block">
                  santhosh-designer
                </span>
                <span className="text-[10px] text-[#475569] block mt-0.5">
                  3K+ followers · Open to connect
                </span>
              </div>
            </a>

          </div>

          {/* Bottom Section: QUICK PROJECT BRIEF FORM */}
          <div className="p-6 sm:p-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#64748b] block mb-4">
              QUICK PROJECT BRIEF
            </span>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#64748b] block mb-1.5">
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#08090b] border border-[#1e293b] rounded text-sm text-white placeholder:text-[#334155] focus:outline-none focus:border-[#FF7410]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest text-[#64748b] block mb-1.5">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#08090b] border border-[#1e293b] rounded text-sm text-white placeholder:text-[#334155] focus:outline-none focus:border-[#FF7410]/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-[#64748b] block mb-1.5">
                  PROJECT BRIEF
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me what you're building and where you need help..."
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#08090b] border border-[#1e293b] rounded text-sm text-white placeholder:text-[#334155] focus:outline-none focus:border-[#FF7410]/60 transition-colors resize-y min-h-[100px]"
                />
              </div>

              <button
                type="submit"
                disabled={submitState === "sending"}
                className="w-full py-3.5 px-6 rounded bg-[#FF7410] hover:bg-[#ff852e] text-black font-mono font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(255,116,16,0.3)] disabled:opacity-60 cursor-pointer"
              >
                <span>{submitState === "sending" ? "SENDING BRIEF..." : "SEND BRIEF"}</span>
                {submitState === "sending" ? (
                  <span className="w-4 h-4 rounded-full border-2 border-black/40 border-t-black animate-spin" />
                ) : (
                  <PaperPlaneRight size={16} weight="bold" />
                )}
              </button>

              <AnimatePresence>
                {submitState === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2"
                  >
                    <CheckCircle size={16} weight="fill" />
                    <span>Your brief has been sent successfully! I will respond within 24 hours.</span>
                  </motion.div>
                )}
                {submitState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono flex items-center gap-2"
                  >
                    <WarningCircle size={16} weight="fill" />
                    <span>{errorText}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
