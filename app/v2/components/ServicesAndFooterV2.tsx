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
  badge?: string;
  isStack?: boolean;
  description?: string;
}

const uxSkillsList = [
  "User Research", "Wireframing", "Prototyping",
  "Design Systems", "Usability Testing", "Information Architecture",
  "Cross-cultural UX", "Stakeholder Alignment"
];

const devSkillsList = [
  "HTML / CSS", "JavaScript", "React",
  "Next.js", "Tailwind CSS", "TypeScript",
  "Figma → Code", "Responsive Design"
];

const toolsList = [
  "Figma", "FigJam", "Framer", "Maze", "Hotjar",
  "Next.js", "React", "Tailwind CSS", "TypeScript",
  "Cursor IDE", "MCP Servers", "Vercel", "Git", "Jira"
];

const methodsList = [
  "Design Thinking", "Agile / Scrum", "Jobs-to-be-done",
  "Double Diamond", "User Story Mapping", "A/B Testing",
  "Info Architecture", "Cross-cultural UX"
];

const services: ServiceItem[] = [
  {
    num: "01",
    title: "FULL DESIGN + DEV STACK",
    badge: "CORE CAPABILITIES",
    isStack: true,
  },
  {
    num: "02",
    title: "WEB DESIGN",
    description: "Responsive layouts, conversion-focused wireframing, high-fidelity UI mockups, design tokens, and user experience craft.",
  },
  {
    num: "03",
    title: "DEVELOPMENT",
    description: "Clean frontend architecture with Next.js, React, TypeScript, performance optimizations, and fluid interactive animations.",
  },
  {
    num: "04",
    title: "DIGITAL STRATEGY",
    description: "Product discovery, user flow mapping, conversion rate optimization (CRO), GTM positioning, and scalable systems.",
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

  return (
    <section id="skills" className="w-full bg-[#F4F4F0] border-b-2 border-black scroll-mt-20">
      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black bg-white flex flex-col">
        
        {/* ─── Top Main Section: 4-Column Layout Exactly Matching Reference ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b-2 border-black">
          
          {/* Column 1: Yellow Square Box (2.5 / 12 cols) */}
          <div className="md:col-span-3 lg:col-span-3 bg-[#FAED00] border-b-2 md:border-b-0 md:border-r-2 border-black p-4 sm:p-8 md:p-10 flex items-center justify-center min-h-[60px] sm:min-h-[120px] md:min-h-[320px]">
          </div>

          {/* Column 2: "BUILT TO DISRUPT." + Summary + "READ OUR STORY ↗" (4 / 12 cols) */}
          <div className="md:col-span-4 lg:col-span-4 p-5 sm:p-8 md:p-10 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-black bg-white">
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-[0.95] font-sans mb-4 sm:mb-6">
                BUILT TO<br />DISRUPT.
              </h2>
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black leading-relaxed max-w-sm mb-5 sm:mb-6">
                WE COMBINE STRATEGY, DESIGN AND TECHNOLOGY TO CREATE DIGITAL EXPERIENCES THAT CHALLENGE THE ORDINARY AND DELIVER REAL IMPACT.
              </p>
            </div>

            <div>
              <Link
                href="#experience"
                className="inline-flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-wider text-black hover:text-[#FF462D] transition-colors group"
              >
                <span>READ OUR STORY</span>
                <ArrowUpRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Column 3: Narrow Vertical "OUR SERVICES →" Divider (1 / 12 cols) */}
          <div className="md:col-span-1 lg:col-span-1 hidden md:flex flex-col items-center justify-between py-8 px-1 border-r-2 border-black bg-white select-none">
            <span className="text-[11px] font-black tracking-[0.25em] uppercase text-black rotate-90 origin-center whitespace-nowrap mt-10">
              OUR SERVICES
            </span>
            <ArrowRight weight="bold" className="w-5 h-5 text-black mb-6" />
          </div>

          {/* Column 4: 4 Service Rows (4 / 12 cols) */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col divide-y-2 divide-black bg-white">
            {services.map((svc, idx) => {
              const isOpen = openIndex === idx;
              const isDev = svc.num === "03";

              return (
                <div key={svc.num} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => toggleService(idx)}
                    className="w-full px-5 py-5 sm:px-6 sm:py-6 flex items-center justify-between bg-white hover:bg-zinc-50 transition-colors text-left group min-h-[70px] sm:min-h-[80px]"
                  >
                    <div className="flex items-center gap-5 sm:gap-6">
                      <span className="text-xs sm:text-sm font-black tracking-wider text-black font-mono select-none">
                        {svc.num}
                      </span>
                      <span
                        className={`text-xs sm:text-sm md:text-base font-black uppercase tracking-tight transition-colors ${
                          isDev ? "text-[#FF462D]" : "text-black group-hover:text-[#FF462D]"
                        }`}
                      >
                        {svc.title}
                      </span>
                    </div>

                    <div
                      className={`w-6 h-6 flex items-center justify-center shrink-0 transition-colors ${
                        isDev ? "text-[#FF462D]" : "text-black group-hover:text-[#FF462D]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus weight="bold" className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Plus weight="bold" className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden bg-[#fafafa] border-t-2 border-black"
                      >
                        {svc.isStack ? (
                          <div className="p-5 sm:p-6 flex flex-col gap-6 text-black">
                            
                            {/* ✦ UX Design */}
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-[#FF462D] font-bold">✦</span>
                                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black font-sans">
                                  UX Design
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {uxSkillsList.map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-white border border-black text-black select-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* ⌥ Development */}
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-[#FF462D] font-bold">⌥</span>
                                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-black font-sans">
                                  Development
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {devSkillsList.map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[11px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-white border border-black text-black select-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Tools */}
                            <div>
                              <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-500 mb-2.5 font-mono">
                                Tools
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {toolsList.map((tool) => (
                                  <span
                                    key={tool}
                                    className="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 bg-zinc-100 border border-zinc-300 text-zinc-800"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Methods */}
                            <div>
                              <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-500 mb-2.5 font-mono">
                                Methods
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {methodsList.map((method) => (
                                  <span
                                    key={method}
                                    className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#FAED00]/30 border border-black text-black"
                                  >
                                    {method}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Vibe Coding ✦ */}
                            <div className="p-4 bg-[#FAED00] border-2 border-black flex flex-col gap-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                              <div className="text-[11px] font-black uppercase tracking-wider text-black flex items-center gap-1.5 font-mono">
                                <span>VIBE CODING</span>
                                <span>✦</span>
                              </div>
                              <p className="text-xs font-bold uppercase tracking-wide text-black leading-relaxed">
                                Using <strong className="font-black underline decoration-2">Cursor + MCP + Figma</strong> to ship pixel-perfect Next.js — faster than any traditional handoff.
                              </p>
                            </div>

                          </div>
                        ) : (
                          <p className="p-5 sm:p-6 pl-14 sm:pl-16 text-xs sm:text-sm font-semibold uppercase tracking-wide text-zinc-700 leading-relaxed">
                            {svc.description}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

        {/* ─── Enhanced & Extended Bottom Section: GET IN TOUCH + QUICK PROJECT BRIEF (Expanded Height) ─── */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 bg-white scroll-mt-20">
          
          {/* Left Column: Bold Red Box "LET'S CREATE SOMETHING DIFFERENT." + Direct Contact Cards */}
          <div className="lg:col-span-4 bg-[#FF462D] p-5 sm:p-8 md:p-10 flex flex-col justify-between border-b-2 lg:border-b-0 lg:border-r-2 border-black text-black">
            <div>
              <div className="flex items-center justify-end mb-6 sm:mb-8">
                <ArrowUpRight weight="bold" className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3px]" />
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-[1.0] font-sans mb-4 sm:mb-6 text-black">
                LET&apos;S CREATE<br />SOMETHING<br />DIFFERENT.
              </h3>

              <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-black/90 leading-relaxed mb-6 sm:mb-8">
                HAVE A PROJECT, CHALLENGE OR OPPORTUNITY? DROP ME A LINE AND LET&apos;S BUILD SOMETHING EXTRAORDINARY TOGETHER.
              </p>
            </div>

            {/* GET IN TOUCH Contact Cards in Brutalist Frame */}
            <div className="flex flex-col gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t-2 border-black">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-black">
                GET IN TOUCH
              </span>

              {/* Email Copy Card */}
              <button
                type="button"
                onClick={copyEmail}
                className="w-full p-3 sm:p-3.5 bg-white hover:bg-yellow-50 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-left flex items-center gap-2.5 sm:gap-3 transition-transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-none border border-black bg-[#FAED00] flex items-center justify-center shrink-0 text-black">
                  {copied ? (
                    <CheckCircle size={16} weight="fill" className="text-black" />
                  ) : (
                    <EnvelopeSimple size={16} weight="bold" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[8.5px] sm:text-[9px] font-mono uppercase tracking-widest text-zinc-600 block">
                    EMAIL
                  </span>
                  <span className="text-xs font-black text-black truncate block">
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
                className="w-full p-3 sm:p-3.5 bg-white hover:bg-yellow-50 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-left flex items-center gap-2.5 sm:gap-3 transition-transform active:translate-x-0.5 active:translate-y-0.5 group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-none border border-black bg-[#FAED00] flex items-center justify-center shrink-0 text-black">
                  <ArrowSquareOut size={16} weight="bold" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[8.5px] sm:text-[9px] font-mono uppercase tracking-widest text-zinc-600 block">
                    LINKEDIN
                  </span>
                  <span className="text-xs font-black text-black group-hover:underline truncate block">
                    santhosh-designer
                  </span>
                  <span className="text-[8.5px] sm:text-[9px] font-bold text-zinc-500 block">
                    3K+ followers · Open to connect
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Project Brief Form with Extended Height and Generous Width */}
          <div className="lg:col-span-8 p-5 sm:p-8 md:p-10 flex flex-col justify-between bg-white">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 mb-5 sm:mb-6 border-b-2 border-black gap-2">
                <div>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black font-sans block">
                    QUICK PROJECT BRIEF
                  </span>
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-zinc-500">
                    Fill in your details below for a prompt response within 24 hours.
                  </p>
                </div>

                {/* Follow Us Social Shortcuts */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-black uppercase tracking-wider text-black">
                  <span className="text-[10px] text-zinc-400 font-mono">FOLLOW:</span>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF462D] transition-colors">IG.</a>
                  <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF462D] transition-colors">BE.</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF462D] transition-colors">LI.</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF462D] transition-colors">TW.</a>
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
          </div>

        </div>

      </div>
    </section>
  );
}
