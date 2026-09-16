"use client";

import React, { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Minus,
  EnvelopeSimple,
  CheckCircle,
  ArrowSquareOut,
  PaperPlaneRight,
  WarningCircle,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
}

const services: ServiceItem[] = [
  {
    num: "01",
    title: "FULL DESIGN + DEV STACK",
    subtitle: "End-to-End Product Architecture",
    description: "Bridging user research, interactive design systems, component architecture, and production-grade fullstack web applications.",
    tools: ["Figma", "React", "Supabase", "TypeScript"],
  },
  {
    num: "02",
    title: "WEB DESIGN",
    subtitle: "Conversion-Led Interaction & Visual Systems",
    description: "High-fidelity UI mockups, responsive grid layouts, interactive design tokens, and user-tested conversion flows.",
    tools: ["UI Design", "Design Systems", "Prototyping", "User Research"],
  },
  {
    num: "03",
    title: "DEVELOPMENT",
    subtitle: "Scalable Fullstack & Frontend Engineering",
    description: "Performant Next.js & React engineering, relational databases, RESTful APIs, and responsive micro-interactions.",
    tools: ["React", "Python", "SQL", "Supabase", "REST APIs"],
  },
  {
    num: "04",
    title: "DIGITAL STRATEGY",
    subtitle: "Product Thinking & Strategic Alignment",
    description: "Roadmap prioritization, user journey mapping, conversion rate optimization, and transparent stakeholder communication.",
    tools: ["Product Thinking", "Roadmapping", "Client Communication"],
  },
];

export default function ServicesAndFooterV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  const toggleService = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

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
      setTimeout(() => setSubmitState("idle"), 3500);
    } catch {
      setSubmitState("error");
      setErrorText("Network error. Please check your connection and try again.");
    }
  };

  const activeService = openIndex !== null ? services[openIndex] : null;

  return (
    <section id="skills" className="w-full bg-[#F4F4F0] border-b-2 border-black scroll-mt-20">
      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black bg-white flex flex-col">
        
        {/* ─── Top Main Section: Dynamic Left Yellow Panel + Divider + 4 Service Items ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-black bg-white">
          
          {/* Column 1 & 2 Combined: Dynamic Yellow Panel (7 / 12 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 lg:col-span-7 bg-[#FAED00] border-b-2 md:border-b-0 md:border-r-2 border-black p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] md:min-h-[440px] select-none relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {activeService === null ? (
                /* Default State: General Overview */
                <motion.div
                  key="default"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col justify-between h-full flex-1"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-black inline-block" />
                      <span className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-widest text-black">
                        // CAPABILITIES_OVERVIEW
                      </span>
                    </div>

                    <h2 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-black leading-[1.0] font-mono mb-3 sm:mb-5">
                      ENGINEERING<br />PRODUCT<br />EXPERIENCES.
                    </h2>

                    <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-black/90 leading-relaxed max-w-lg mb-4 sm:mb-6 font-sans">
                      BRIDGING END-TO-END PRODUCT DESIGN, INTERACTION ARCHITECTURE, AND PRODUCTION-READY FRONTEND CODE FOR VENTURES &amp; ENTERPRISES.
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t-2 border-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mt-4 sm:mt-6">
                    <div className="flex items-center gap-2 text-[10.5px] sm:text-xs font-black uppercase tracking-wider text-black font-mono">
                      <span className="text-[#FF462D] font-bold">✦</span>
                      <span>4 SPECIALIZED DISCIPLINES · 16 CORE SKILLS</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-black/70">
                      [SELECT A SERVICE ➔]
                    </span>
                  </div>
                </motion.div>
              ) : (
                /* Active State: Dynamic Service Skills & Tools View */
                <motion.div
                  key={activeService.num}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col justify-between h-full flex-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-black inline-block" />
                        <span className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-widest text-black">
                          // SERVICE_{activeService.num}_CAPABILITIES
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-black text-[#FAED00] font-mono text-[9px] sm:text-[10px] font-black uppercase border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        ACTIVE SERVICE
                      </span>
                    </div>

                    <h2 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black leading-[1.0] font-mono mb-1.5 sm:mb-2">
                      {activeService.num} // {activeService.title}
                    </h2>

                    <p className="text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wider text-black font-mono mb-2 sm:mb-3">
                      {activeService.subtitle}
                    </p>

                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wide text-black/85 leading-relaxed max-w-lg mb-4 sm:mb-6 font-sans">
                      {activeService.description}
                    </p>

                    {/* Skills / Tools Pills Grid */}
                    <div className="mt-2">
                      <span className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-widest text-black/70 block mb-2">
                        CORE TECHNOLOGIES &amp; METHODS:
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {activeService.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 min-[360px]:px-3.5 py-1 min-[360px]:py-1.5 bg-black text-white font-mono font-bold text-[10.5px] min-[360px]:text-xs sm:text-sm uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all select-none"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t-2 border-black/20 flex items-center justify-between mt-4 sm:mt-6">
                    <div className="flex items-center gap-2 text-[10.5px] sm:text-xs font-black uppercase tracking-wider text-black font-mono">
                      <span className="text-[#FF462D] font-bold">✦</span>
                      <span>{activeService.tools.length} CORE TOOLS ACTIVE</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(null)}
                      className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-wider text-black hover:text-[#FF462D] transition-colors underline underline-offset-2 cursor-pointer"
                    >
                      [RESET ×]
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Column 3: Narrow Vertical "OUR SERVICES →" Divider (1 / 12 cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="md:col-span-1 lg:col-span-1 hidden md:flex flex-col items-center justify-between py-8 px-1 border-r-2 border-black bg-white select-none"
          >
            <span className="text-[11px] font-black tracking-[0.25em] uppercase text-black rotate-90 origin-center whitespace-nowrap mt-10">
              OUR SERVICES
            </span>
            <ArrowRight weight="bold" className="w-5 h-5 text-black mb-6" />
          </motion.div>

          {/* Column 4: 4 Service Rows with Highlighted Active State and Rotating Icon (4 / 12 cols) */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col divide-y-2 divide-black bg-white">
            {services.map((svc, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={svc.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col flex-1"
                >
                  <button
                    type="button"
                    onClick={() => toggleService(idx)}
                    className={`w-full px-4 py-4 sm:px-6 sm:py-6 flex items-center justify-between text-left group min-h-[64px] sm:min-h-[76px] md:min-h-[88px] transition-all cursor-pointer select-none ${
                      isOpen
                        ? "bg-[#FAED00] text-black shadow-inner"
                        : "bg-white hover:bg-zinc-50 text-black"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-5">
                      <span className={`text-xs sm:text-sm font-black tracking-wider font-mono select-none ${
                        isOpen ? "text-black" : "text-zinc-500"
                      }`}>
                        {svc.num}
                      </span>
                      <span
                        className={`text-xs min-[360px]:text-sm md:text-base font-black uppercase tracking-tight transition-colors ${
                          isOpen ? "text-black underline underline-offset-4 decoration-2" : "text-black group-hover:text-[#FF462D]"
                        }`}
                      >
                        {svc.title}
                      </span>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0 border-2 transition-all ${
                        isOpen
                          ? "border-black bg-black text-[#FAED00]"
                          : "border-transparent text-black group-hover:text-[#FF462D]"
                      }`}
                    >
                      <Plus weight="bold" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                  </button>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ─── Enhanced & Extended Bottom Section: GET IN TOUCH + QUICK PROJECT BRIEF ─── */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 bg-white scroll-mt-20">
          
          {/* Left Column: Bold Red Box "LET'S CREATE SOMETHING DIFFERENT." + Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 bg-[#FF462D] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-black text-black"
          >
            <div>
              <div className="flex items-center justify-end mb-4 sm:mb-8">
                <ArrowUpRight weight="bold" className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3px]" />
              </div>

              <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-[1.0] font-mono mb-3 sm:mb-6 text-black">
                LET&apos;S CREATE<br />SOMETHING<br />DIFFERENT.
              </h3>

              <p className="text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wide text-black/90 leading-relaxed mb-5 sm:mb-8 font-sans">
                HAVE A PROJECT, CHALLENGE OR OPPORTUNITY? DROP ME A LINE AND LET&apos;S BUILD SOMETHING EXTRAORDINARY TOGETHER.
              </p>
            </div>

            {/* GET IN TOUCH Contact Cards in Brutalist Frame */}
            <div className="flex flex-col gap-2.5 sm:gap-3 pt-4 sm:pt-6 border-t-2 border-black">
              <span className="text-[9.5px] sm:text-[10px] font-mono font-black uppercase tracking-widest text-black">
                GET IN TOUCH
              </span>

              {/* Email Copy Card */}
              <button
                type="button"
                onClick={copyEmail}
                className="w-full p-2.5 sm:p-3.5 bg-white hover:bg-yellow-50 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-left flex items-center gap-2.5 sm:gap-3 transition-transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-none border border-black bg-[#FAED00] flex items-center justify-center shrink-0 text-black">
                  {copied ? (
                    <CheckCircle size={18} weight="fill" className="text-black" />
                  ) : (
                    <EnvelopeSimple size={18} weight="bold" />
                  )}
                </div>
                <div className="min-w-0 flex-1 font-mono">
                  <span className="text-[8.5px] sm:text-[9px] font-mono uppercase tracking-widest text-zinc-600 block">
                    EMAIL
                  </span>
                  <span className="text-[11px] sm:text-xs font-black text-black truncate block">
                    santhosh.a.designer@gmail.com
                  </span>
                  <span className="text-[8.5px] sm:text-[9px] font-bold text-zinc-500 block">
                    {copied ? "✓ Copied to clipboard" : "Click to copy"}
                  </span>
                </div>
              </button>

              {/* LinkedIn Connect Card */}
              <a
                href="https://linkedin.com/in/santhosh-designer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2.5 sm:p-3.5 bg-white hover:bg-yellow-50 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-left flex items-center gap-2.5 sm:gap-3 transition-transform active:translate-x-0.5 active:translate-y-0.5 group font-mono"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-none border border-black bg-[#FAED00] flex items-center justify-center shrink-0 text-black">
                  <ArrowSquareOut size={18} weight="bold" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[8.5px] sm:text-[9px] font-mono uppercase tracking-widest text-zinc-600 block">
                    LINKEDIN
                  </span>
                  <span className="text-[11px] sm:text-xs font-black text-black group-hover:underline truncate block">
                    santhosh-designer
                  </span>
                  <span className="text-[8.5px] sm:text-[9px] font-bold text-zinc-500 block">
                    3K+ followers · Open to connect
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Quick Project Brief Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-white"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 mb-4 sm:mb-6 border-b-2 border-black gap-2">
                <div>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black font-mono block">
                    QUICK PROJECT BRIEF
                  </span>
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-zinc-500 font-sans">
                    Fill in your details below for a prompt response within 24 hours.
                  </p>
                </div>
              </div>

              {/* Form inputs */}
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider text-black block mb-1.5 sm:mb-2">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#fafafa] border-2 border-black text-xs sm:text-sm font-bold text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider text-black block mb-1.5 sm:mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#fafafa] border-2 border-black text-xs sm:text-sm font-bold text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider text-black block mb-1.5 sm:mb-2">
                    PROJECT BRIEF *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me what you're building and where you need help..."
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#fafafa] border-2 border-black text-xs sm:text-sm font-bold text-black placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all resize-y min-h-[110px] sm:min-h-[140px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <button
                    type="submit"
                    disabled={submitState === "sending"}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-black hover:bg-zinc-800 active:bg-zinc-900 text-white font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(250,237,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer disabled:opacity-60"
                  >
                    <span>{submitState === "sending" ? "SENDING BRIEF..." : "SEND BRIEF"}</span>
                    {submitState === "sending" ? (
                      <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    ) : (
                      <PaperPlaneRight size={16} weight="bold" />
                    )}
                  </button>

                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-zinc-500 text-center sm:text-right">
                    ● Responds within 24 hours
                  </span>
                </div>

                <AnimatePresence>
                  {submitState === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-[#FAED00] border-2 border-black text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <CheckCircle size={18} weight="fill" />
                      <span>Your project brief has been sent successfully! I will get back to you shortly.</span>
                    </motion.div>
                  )}
                  {submitState === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-rose-100 border-2 border-rose-600 text-rose-900 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                    >
                      <WarningCircle size={18} weight="fill" />
                      <span>{errorText}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

        </div>

        {/* ─── Terminal Footer Strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border-t-2 border-black bg-[#0D1117] px-4 sm:px-8 md:px-10 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left"
        >
          <span className="font-mono text-[10.5px] sm:text-[11px] text-emerald-400 font-bold">
            santhosh@portfolio:~$
            <span className="terminal-prompt" />
          </span>
          <span className="font-mono text-[9.5px] sm:text-[10px] text-zinc-500 italic">
            <span className="text-[#FF462D] not-italic font-bold">/*</span> ALL RIGHTS RESERVED · {new Date().getFullYear()} <span className="text-[#FF462D] not-italic font-bold">*/</span>
          </span>
          <span className="font-mono text-[9.5px] sm:text-[10px] text-zinc-500">
            DESIGNED + BUILT BY <span className="text-[#FAED00] font-bold">SANTHOSH</span>
          </span>
        </motion.div>

      </div>
    </section>
  );
}
