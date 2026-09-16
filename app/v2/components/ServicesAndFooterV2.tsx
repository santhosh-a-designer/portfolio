"use client";

import React, { useState, useRef, useEffect, type FormEvent } from "react";
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
  LinkedinLogo,
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
    title: "UX & PRODUCT DESIGN",
    subtitle: "Human-Centered Interface & Experience Architecture",
    description: "Translating complex user needs and behavioral psychology into clear user flows, robust design systems, and thoroughly validated interfaces.",
    tools: [
      "User Research",
      "UX Laws",
      "Information Architecture",
      "User Flow",
      "Wireframing & Prototyping",
      "Design Systems",
      "Usability Testing",
    ],
  },
  {
    num: "02",
    title: "WEB DEVELOPMENT",
    subtitle: "Modern Frontend & Scalable Systems Engineering",
    description: "Writing modular, performant codebases across frontend frameworks, enterprise web technologies, relational databases, and REST APIs.",
    tools: [
      "HTML",
      "CSS",
      "React JS",
      "Java",
      "JEE",
      "JQuery",
      "SQL",
      "REST APIs",
    ],
  },
  {
    num: "03",
    title: "TOOLS & PLATFORMS",
    subtitle: "High-Velocity Design & Engineering Stack",
    description: "Leveraging cutting-edge design tools, AI-powered IDEs, advanced animation libraries, version control, and CMS platforms.",
    tools: [
      "Figma",
      "Cursor",
      "Git",
      "Framer Motion",
      "Wordpress",
      "AI Editing Tools",
      "Supabase",
      "Bright Data",
      "Render",
    ],
  },
  {
    num: "04",
    title: "SOFT SKILLS & LEADERSHIP",
    subtitle: "Collaborative Delivery & Product Ownership",
    description: "Driving seamless cross-disciplinary alignment between design and engineering, mentoring teams, and leading agile delivery.",
    tools: [
      "Cross-functional Leadership",
      "Mentorship",
      "Client Communication",
      "Agile",
    ],
  },
];

export default function ServicesAndFooterV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");
  const yellowBoxRef = useRef<HTMLDivElement>(null);
  const errorTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
    };
  }, []);

  const updateFormField = (field: "name" | "email" | "project", value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (submitState === "error") {
      if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
      setSubmitState("idle");
      setErrorText("");
    }
  };

  const scrollToYellowBox = () => {
    if (!yellowBoxRef.current) return;
    const headerHeight = window.innerWidth < 768 ? 100 : 70;
    const elementPosition = yellowBoxRef.current.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight - 12;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });
  };

  const toggleService = (idx: number) => {
    const isOpening = openIndex !== idx;
    const nextIndex = isOpening ? idx : null;

    setOpenIndex(nextIndex);

    // Only scroll if OPENING an item; do NOT scroll when closing
    if (isOpening) {
      requestAnimationFrame(() => {
        setTimeout(scrollToYellowBox, 50);
      });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("santhosh.a.designer@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
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
        if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
        errorTimeoutRef.current = setTimeout(() => {
          setSubmitState("idle");
          setErrorText("");
        }, 4000);
        return;
      }

      setSubmitState("success");
      setForm({ name: "", email: "", project: "" });
      setTimeout(() => setSubmitState("idle"), 3500);
    } catch {
      setSubmitState("error");
      setErrorText("Network error. Please check your connection and try again.");
      if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
      errorTimeoutRef.current = setTimeout(() => {
        setSubmitState("idle");
        setErrorText("");
      }, 4000);
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
            ref={yellowBoxRef}
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
                      <span>4 SPECIALIZED DISCIPLINES · 28 CORE SKILLS</span>
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
                      <span className="px-2 min-[360px]:px-2.5 py-0.5 bg-black text-[#0FE0E3] font-mono text-[9px] sm:text-[10px] font-black uppercase border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
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

          {/* Column 3: Narrow Vertical "CORE CAPABILITIES →" Divider (1 / 12 cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="md:col-span-1 lg:col-span-1 hidden md:flex flex-col items-center justify-between py-10 px-1 border-r-2 border-black bg-white select-none"
          >
            <div className="flex-1 flex items-center justify-center w-full min-h-[200px]">
              <span className="text-[11px] font-black tracking-[0.25em] uppercase text-black rotate-90 whitespace-nowrap select-none">
                CORE CAPABILITIES
              </span>
            </div>
            <ArrowRight weight="bold" className="w-5 h-5 text-black mb-4 shrink-0" />
          </motion.div>

          {/* Column 4: 4 Service Rows with Highlighted Active State, Rotating Icon, and In-Accordion Pill Tags (4 / 12 cols) */}
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
                    onMouseEnter={() => setOpenIndex(idx)}
                    className={`w-full px-4 py-4 sm:px-6 sm:py-6 flex items-center justify-between text-left group min-h-[64px] sm:min-h-[76px] md:min-h-[88px] transition-all cursor-pointer select-none ${
                      isOpen
                        ? "bg-[#0FE0E3] text-black shadow-inner"
                        : "bg-white hover:bg-zinc-50 text-black"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-5">
                      <span className={`text-xs sm:text-sm font-black tracking-wider font-mono select-none ${
                        isOpen ? "text-black font-bold" : "text-zinc-500"
                      }`}>
                        {svc.num}
                      </span>
                      <span
                        className={`text-xs min-[360px]:text-sm md:text-base font-black uppercase tracking-tight transition-colors ${
                          isOpen ? "text-black underline underline-offset-4 decoration-2 decoration-black" : "text-black group-hover:text-[#FF462D]"
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
                          ? "border-black bg-black text-[#0FE0E3]"
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

        {/* ─── Mentorship Section (Academic & Community Impact) ─── */}
        <div id="mentorship" className="w-full border-b-2 border-black bg-white scroll-mt-20 flex flex-col">
          {/* Header Banner */}
          <div className="p-6 sm:p-8 md:p-10 border-b-2 border-black bg-[#F4F4F0] flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-[#FF462D] inline-block" />
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-black">
                  // ACADEMIC &amp; COMMUNITY IMPACT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black leading-none font-mono">
                MENTORSHIP
              </h2>
              <p className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-700 max-w-xl font-sans">
                2+ years mentoring the next wave of designers and developers at{" "}
                <span className="text-black font-black underline decoration-2 decoration-[#FF462D]">
                  FITA Academy
                </span>
                .
              </p>
            </div>

            {/* Teaching Philosophy Quote Card */}
            <div className="p-4 sm:p-5 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-md">
              <span className="text-[9px] font-mono font-black uppercase tracking-widest text-[#FF462D] block mb-1">
                // TEACHING PHILOSOPHY
              </span>
              <p className="text-xs sm:text-sm font-bold italic text-black font-sans leading-relaxed">
                &ldquo;The best design lesson is a real problem with real stakes.&rdquo;
              </p>
            </div>
          </div>

          {/* Mentorship Stats & Disciplines Grid (Brutalist Bordered Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black border-black bg-white">
            {/* Box 1: 100+ Students Mentored */}
            <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-zinc-50 transition-colors group">
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block mb-2">
                  // STAT_01
                </span>
                <div className="text-4xl sm:text-5xl font-black text-[#FF462D] font-mono tracking-tight group-hover:scale-105 transition-transform origin-left">
                  100+
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-200">
                <span className="text-xs font-black uppercase tracking-wider text-black font-mono block">
                  STUDENTS MENTORED
                </span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase mt-0.5 block font-sans">
                  One-on-one reviews &amp; cohort guidance
                </span>
              </div>
            </div>

            {/* Box 2: 2+ Years Teaching Experience */}
            <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-zinc-50 transition-colors group">
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block mb-2">
                  // STAT_02
                </span>
                <div className="text-4xl sm:text-5xl font-black text-black font-mono tracking-tight group-hover:scale-105 transition-transform origin-left">
                  2+ <span className="text-2xl text-[#FF462D]">YRS</span>
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-200">
                <span className="text-xs font-black uppercase tracking-wider text-black font-mono block">
                  TEACHING EXPERIENCE
                </span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase mt-0.5 block font-sans">
                  FITA Academy faculty &amp; curriculum
                </span>
              </div>
            </div>

            {/* Box 3: College Workshops Conducted */}
            <div className="p-6 sm:p-8 flex flex-col justify-between hover:bg-zinc-50 transition-colors group">
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400 block mb-2">
                  // STAT_03
                </span>
                <div className="text-3xl sm:text-4xl lg:text-[34px] font-black text-black font-mono tracking-tight group-hover:scale-105 transition-transform origin-left leading-tight">
                  WORKSHOPS
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-zinc-200">
                <span className="text-xs font-black uppercase tracking-wider text-black font-mono block">
                  COLLEGE SESSIONS CONDUCTED
                </span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase mt-0.5 block font-sans">
                  Hands-on UX/UI &amp; code bootcamps
                </span>
              </div>
            </div>

            {/* Box 4: Placement Track Record (Highlighted Yellow Accent) */}
            <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#FAED00] hover:bg-[#FAED00]/95 transition-colors group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-black/70">
                    // OUTCOME
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-[28px] font-black text-black font-mono tracking-tight leading-tight">
                  PLACED IN TECH
                </div>
              </div>
              <div className="mt-6 pt-3 border-t border-black/20">
                <span className="text-xs font-black uppercase tracking-wider text-black font-mono block">
                  STUDENTS HIRED INTO COMPANIES
                </span>
                <span className="text-[10px] font-bold text-black/80 uppercase mt-0.5 block font-sans">
                  Product design &amp; engineering roles
                </span>
              </div>
            </div>
          </div>

          {/* Subjects Taught Strip */}
          <div className="p-5 sm:p-6 bg-white border-t-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-black uppercase tracking-wider text-black">
                CORE SUBJECTS TAUGHT:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1.5 bg-black text-white uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(250,237,0,1)]">
                FULL STACK DEVELOPMENT
              </span>
              <span className="text-xs font-mono font-bold px-3 py-1.5 bg-black text-[#FAED00] uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(255,70,45,1)]">
                AI DATA SCIENCE
              </span>
              <span className="text-xs font-mono font-bold px-3 py-1.5 bg-black text-white uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(250,237,0,1)]">
                UX/UI DESIGN
              </span>
            </div>
          </div>
        </div>

        {/* ─── Enhanced & Extended Bottom Section: GET IN TOUCH + QUICK PROJECT BRIEF (Expanded Height) ─── */}
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
                className="w-full p-2.5 sm:p-3.5 bg-white hover:bg-yellow-50 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-left flex items-center justify-between gap-2.5 sm:gap-3 transition-all active:translate-x-0.5 active:translate-y-0.5 group font-mono cursor-pointer"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-none border border-black bg-[#FAED00] flex items-center justify-center shrink-0 text-black group-hover:scale-105 transition-transform">
                    <LinkedinLogo size={18} weight="bold" />
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
                </div>
                <div className="text-black group-hover:text-[#FF462D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 pr-1">
                  <ArrowSquareOut size={16} weight="bold" />
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
                      onChange={(e) => updateFormField("name", e.target.value)}
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
                      onChange={(e) => updateFormField("email", e.target.value)}
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
                    onChange={(e) => updateFormField("project", e.target.value)}
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

                  <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-bold text-zinc-600">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C16A] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00C16A] shadow-[0_0_8px_2px_rgba(0,193,106,0.7)]" />
                    </span>
                    <span>Responds within 24 hours</span>
                  </div>
                </div>

                <AnimatePresence>
                  {submitState === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
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
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 bg-rose-100 border-2 border-rose-600 text-rose-900 text-xs font-bold uppercase tracking-wider flex items-center justify-between gap-3 shadow-[3px_3px_0px_0px_rgba(225,29,72,0.15)]"
                    >
                      <div className="flex items-center gap-2">
                        <WarningCircle size={18} weight="fill" className="shrink-0" />
                        <span>{errorText}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
                          setSubmitState("idle");
                          setErrorText("");
                        }}
                        className="text-[10px] font-mono font-black text-rose-800 hover:text-rose-950 uppercase cursor-pointer underline underline-offset-2 shrink-0 px-1"
                      >
                        [DISMISS ×]
                      </button>
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
