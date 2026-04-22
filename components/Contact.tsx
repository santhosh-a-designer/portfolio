"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { EnvelopeSimple, CheckCircle, ArrowSquareOut, PaperPlaneRight, WarningCircle } from "@phosphor-icons/react";

const VP = { once: true, amount: 0.2 } as const;
const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
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
    setSubmitState("idle");
    setErrorText("");

    try {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Hi Simon,\n\n${form.project}\n\nThanks.`
      );
      const to = encodeURIComponent("santhosh.a.designer@gmail.com");
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
      window.location.assign(gmailComposeUrl);

      setSubmitState("success");
      setForm({ name: "", email: "", project: "" });
      setTimeout(() => setSubmitState("idle"), 3200);
    } catch (error) {
      setSubmitState("error");
      setErrorText(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative">
      {/* Section index strip */}
      <motion.div
        className="border-b border-[#1e293b] bg-[#08090b]/60"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.5, ease }}
      >
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569]">
          <span>Index · 06 — Contact</span>
          <div className="flex items-center gap-2">
            <div className="status-dot" />
            <span style={{ color: "rgba(255,116,16,0.8)" }}>Available · &lt;24h response</span>
          </div>
        </div>
      </motion.div>

      <div className="py-20 max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.8, ease }}
          className="mb-14"
        >
          <p className="section-tag mb-4">06 / Contact</p>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-white leading-tight">
            Have a problem worth{" "}
            <span className="neon-text">solving?</span>
          </h2>
        </motion.div>

        {/* Contact panel */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ delay: 0.1, duration: 0.8, ease }}
          className="border border-[#1e293b] overflow-hidden bg-[#0c0e12]"
        >
          <p className="px-5 pt-5 text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569] sm:px-7 sm:pt-6">
            Get in touch
          </p>
          <div className="mt-3 grid grid-cols-1 border-b border-[#1e293b] sm:mt-4 md:grid-cols-2">
            <button
              onClick={copyEmail}
              className="flex w-full items-start gap-3 border-b border-[#1e293b] p-5 text-left transition-colors hover:bg-[#FF7410]/5 group sm:gap-4 sm:p-6 md:border-b-0 md:border-r"
            >
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center"
                style={{ background: "rgba(255,116,16,0.1)", border: "1px solid rgba(255,116,16,0.22)" }}
              >
                {copied ? (
                  <CheckCircle size={18} style={{ color: "#FF7410" }} />
                ) : (
                  <EnvelopeSimple size={18} style={{ color: "#FF7410" }} />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-0.5 text-[10px] font-mono uppercase tracking-widest text-[#475569] sm:mb-1">Email</div>
                <div className="text-sm font-semibold text-white transition-colors group-hover:text-[#FF7410]">
                  santhosh.a.designer@gmail.com
                </div>
                <div className="mt-0.5 text-[11px] text-[#475569]">
                  {copied ? "✓ Copied to clipboard" : "Click to copy"}
                </div>
              </div>
            </button>
            <a
              href="https://linkedin.com/in/santhosh-designer"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-start gap-3 p-5 transition-colors hover:bg-[#FF7410]/5 sm:gap-4 sm:p-6"
            >
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center"
                style={{ background: "rgba(255,116,16,0.08)", border: "1px solid rgba(255,116,16,0.18)" }}
              >
                <ArrowSquareOut size={18} style={{ color: "#FF7410" }} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-0.5 text-[10px] font-mono uppercase tracking-widest text-[#475569] sm:mb-1">LinkedIn</div>
                <div className="text-sm font-semibold text-white transition-colors group-hover:text-[#FF7410]">santhosh-designer</div>
                <div className="mt-0.5 text-[11px] text-[#475569]">3K+ followers · Open to connect</div>
              </div>
            </a>
          </div>

          <div className="p-5 sm:p-7">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-4">Quick Project Brief</p>
            <form onSubmit={handleFormSubmit} className="grid gap-3 sm:gap-4">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <label className="block">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#475569] mb-2 block">Name</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full px-3 py-2.5 text-sm bg-[#08090b] border border-[#1e293b] text-[#e8edf2] placeholder:text-[#475569] focus:outline-none focus:border-[#FF7410]/55"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#475569] mb-2 block">Email</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2.5 text-sm bg-[#08090b] border border-[#1e293b] text-[#e8edf2] placeholder:text-[#475569] focus:outline-none focus:border-[#FF7410]/55"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#475569] mb-2 block">Project Brief</span>
                <textarea
                  required
                  rows={4}
                  value={form.project}
                  onChange={(e) => setForm((prev) => ({ ...prev, project: e.target.value }))}
                  placeholder="Tell me what you're building and where you need help..."
                  className="w-full px-3 py-2.5 text-sm resize-y min-h-[110px] bg-[#08090b] border border-[#1e293b] text-[#e8edf2] placeholder:text-[#475569] focus:outline-none focus:border-[#FF7410]/55"
                />
              </label>

              <button
                type="submit"
                disabled={submitState === "sending"}
                className="mt-1 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#0a0908] bg-[#FF7410] hover:bg-[#FF8C30] transition-colors"
              >
                {submitState === "sending" ? "Sending..." : "Send Brief"}
                {submitState === "sending" ? (
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-[#0a0908]/40 border-t-[#0a0908] animate-spin" />
                ) : (
                  <PaperPlaneRight size={16} weight="bold" />
                )}
              </button>

              <AnimatePresence mode="wait">
                {submitState === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="inline-flex items-center gap-2 rounded-sm border border-emerald-500/35 bg-emerald-500/10 px-3 py-2 text-[11px] font-mono uppercase tracking-[0.12em] text-emerald-300"
                  >
                    <CheckCircle size={16} weight="fill" className="text-emerald-400" />
                    Successfully sent
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {submitState === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="inline-flex items-start gap-2 max-w-xl border border-[#FF7410]/45 bg-[#0a0c10] px-3 py-2 text-[11px] text-[#f4b184]"
                  >
                    <WarningCircle size={14} weight="fill" className="text-[#FF7410] mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{errorText}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>

        {/* Availability note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ delay: 0.3, duration: 0.6, ease }}
          className="mt-6 flex items-center gap-3 text-[11px] text-[#334155] font-mono"
        >
          <div className="status-dot" />
          <span>Responds within 24 hours · Based in Chennai, India · Available globally</span>
        </motion.div>
      </div>
    </section>
  );
}
