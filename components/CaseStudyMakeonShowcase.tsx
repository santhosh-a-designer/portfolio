"use client";

import Image from "next/image";
import { CaseStudyScrollReveal } from "@/components/CaseStudyScrollReveal";
import { ArrowSquareOut, Cpu, Lock, Sparkle, Target, Trophy, Wrench } from "@phosphor-icons/react";

const SECTION_H2 = "text-[12px] font-mono uppercase tracking-[0.2em] text-[#FF7410]";

const BUILD_LOOP_MOVES = [
  {
    index: "00",
    name: "Arrival",
    cue: "Enter as a builder",
    learner: "Transitions from school passive mindset into a hands-on studio engineer.",
    mentor: "Sets the studio rhythm, introduces materials, and establishes session objectives.",
  },
  {
    index: "01",
    name: "Discover",
    cue: "Meet the problem",
    learner: "Encounters a real-world physical challenge before seeing any textbook solution.",
    mentor: "Asks rather than announces, connecting the challenge to core physics & math.",
  },
  {
    index: "02",
    name: "Design",
    cue: "Think before touching",
    learner: "Sketches concepts, calculates measurements, and plans material constraints.",
    mentor: "Reviews initial hypotheses and challenges structural assumptions.",
  },
  {
    index: "03",
    name: "Develop",
    cue: "Hands on the build",
    learner: "Cuts, joins, wires, and assembles the physical prototype in teams.",
    mentor: "Observes tool safety, workflow pace, and team collaboration dynamics.",
  },
  {
    index: "04",
    name: "Debug",
    cue: "Protect the struggle",
    learner: "Diagnoses failure points when the build does not balance, hold, or rotate.",
    mentor: "Resists solving the problem; guides root-cause inquiry with targeted questions.",
    highlight: true,
  },
  {
    index: "05",
    name: "Demo",
    cue: "Show it working",
    learner: "Tests prototype under stress, records load metrics, and demonstrates operation.",
    mentor: "Facilitates peer testing circles and quantifies performance improvements.",
  },
  {
    index: "06",
    name: "Document",
    cue: "Build the record",
    learner: "Logs design choices, formulas used, and reflection in their Builder Portfolio.",
    mentor: "Signs off on verified evidence of learning and conceptual mastery.",
  },
];

const AI_UPGRADE_FEATURES = [
  {
    title: "AI Mentor Socratic Co-Pilot",
    tag: "Agentic Guidance",
    icon: Cpu,
    description:
      "An intelligent in-studio assistant that listens to student problem descriptions during the 'Debug' stage and prompts mentors with calibrated Socratic questions—ensuring children discover answers through inquiry without facilitator micromanagement.",
    status: "In Development",
  },
  {
    title: "Multimodal Build-Evidence Vision Analyzer",
    tag: "Computer Vision",
    icon: Target,
    description:
      "Computer vision agents analyze uploaded photos of physical student bridge trusses, circuits, and gearboxes—automatically calculating angles, detecting structural weak spots, and generating instant diagnostic overlays.",
    status: "Prototype Tested",
  },
  {
    title: "Autonomous Learner Portfolio Engine",
    tag: "Auto-Documentation",
    icon: Trophy,
    description:
      "Synthesizes session notes, failure-improvement cycles, and test metrics into beautiful, parent-ready digital portfolios with verified skill micro-credentials and institutional progress reports.",
    status: "Upcoming Phase",
  },
  {
    title: "Interactive 3D Digital Twin Sandbox",
    tag: "Physics Simulation",
    icon: Wrench,
    description:
      "A browser-based WebGL simulation workspace allowing students to test stress loads, electrical continuity, and gear ratios in digital space before cutting physical materials.",
    status: "Roadmap Q3",
  },
];

export default function CaseStudyMakeonShowcase() {
  return (
    <div className="space-y-14">
      {/* ─── Client Confidentiality / NDA Notice ─── */}
      <CaseStudyScrollReveal>
        <div className="border border-[#FF7410]/30 bg-[#FF7410]/[0.04] p-4 sm:p-5">
          <div className="flex items-start gap-3.5">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-[#FF7410]/40 bg-[#FF7410]/10 text-[#FF7410]">
              <Lock size={15} weight="bold" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF7410]">
                Confidentiality Notice · Client NDA
              </p>
              <h3 className="mt-1 font-title text-base font-bold text-[#f8fafc]">
                Proprietary Architecture &amp; Figma Source Protected
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[#94a3b8]">
                Detailed Figma source files, proprietary curriculum rubrics, and institutional partner roadmaps are strictly confidential under client non-disclosure agreements. The visual designs, information architecture, and pedagogical frameworks shown here represent high-level product case study documentation.
              </p>
            </div>
          </div>
        </div>
      </CaseStudyScrollReveal>

      {/* ─── Live Website Hook & Studio Imagery ─── */}
      <CaseStudyScrollReveal>
        <section aria-label="Makeon Studio & Platform Showcase">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF7410]">
                01 / Live Ecosystem
              </p>
              <h2 className="mt-1 font-title text-2xl font-black text-[#f8fafc] sm:text-3xl">
                Real Studios. Real Engineering. Visible Outcomes.
              </h2>
            </div>
            <a
              href="https://makeon.build"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start border border-[#FF7410] bg-[#FF7410] px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#0a0908] transition-all duration-200 hover:border-[#FF8C30] hover:bg-[#FF8C30]"
            >
              <span>Visit makeon.build</span>
              <ArrowSquareOut size={15} weight="bold" />
            </a>
          </div>

          <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-[#cbd5e1]">
            Makeon is structured around physical studio tables where learners test, measure, document, and iterate real prototypes. There is no front of the room—the facilitator orchestrates the session rhythm while the learner performs the engineering.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="relative overflow-hidden border border-[#1e293b] bg-[#0c1014]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/case-studies/makeon/student-bridge-studio.png"
                  alt="Students testing a handmade bridge prototype under real load in Makeon studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="border-t border-[#1e293b] p-3.5">
                <p className="text-[9px] font-mono uppercase tracking-[0.14em] text-[#FF7410]">Studio In Action</p>
                <p className="mt-1 text-[12px] text-[#cbd5e1]">Testing physical truss deflection &amp; load thresholds in real-time.</p>
              </div>
            </div>

            <div className="relative overflow-hidden border border-[#1e293b] bg-[#0c1014]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/case-studies/makeon/student-mentor-evidence.png"
                  alt="Student and mentor reviewing sketches, formulas, and verified build records"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="border-t border-[#1e293b] p-3.5">
                <p className="text-[9px] font-mono uppercase tracking-[0.14em] text-[#FF7410]">Evidence Verification</p>
                <p className="mt-1 text-[12px] text-[#cbd5e1]">Turning hands-on iterations into verifiable learner portfolio artifacts.</p>
              </div>
            </div>
          </div>
        </section>
      </CaseStudyScrollReveal>

      {/* ─── The 7-Move Build Loop Interactive Walkthrough ─── */}
      <CaseStudyScrollReveal>
        <section aria-label="The 7-Move Makeon Build Loop">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF7410]">
            02 / Pedagogical Architecture
          </p>
          <h2 className="mt-1 font-title text-2xl font-black text-[#f8fafc] sm:text-3xl">
            The 7-Move Build Loop: Systematic Engineering in Every Session
          </h2>
          <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-[#94a3b8]">
            Method is not left to chance—method is what Makeon teaches. Every single session compresses the lifecycle of a professional engineering project into seven repeatable beats.
          </p>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {BUILD_LOOP_MOVES.map((m) => (
              <div
                key={m.index}
                className={`flex flex-col border ${
                  m.highlight
                    ? "border-[#FF7410] bg-[#FF7410]/[0.06] shadow-[0_0_24px_rgba(255,116,16,0.12)]"
                    : "border-[#1e293b] bg-[#0c1014]"
                } p-4`}
              >
                <div className="flex items-center justify-between border-b border-[#1e293b] pb-2.5">
                  <span className={`font-mono text-base font-black ${m.highlight ? "text-[#FF7410]" : "text-[#64748b]"}`}>
                    {m.index}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.16em] text-[#cbd5e1]">
                    {m.cue}
                  </span>
                </div>
                <h3 className="mt-2.5 font-title text-lg font-bold text-[#f8fafc]">{m.name}</h3>

                <div className="mt-3 space-y-2.5 text-[11px] leading-relaxed">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#FF7410]">Learner Role:</span>
                    <p className="mt-0.5 text-[#cbd5e1]">{m.learner}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#64748b]">Mentor Role:</span>
                    <p className="mt-0.5 text-[#94a3b8]">{m.mentor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </CaseStudyScrollReveal>

      {/* ─── AI Agents & Next-Gen Platform Roadmap ─── */}
      <CaseStudyScrollReveal>
        <section className="border border-[#1e293b] bg-[#08090b] p-5 sm:p-7" aria-label="AI Agents Roadmap">
          <div className="flex items-center gap-2">
            <Sparkle size={16} className="text-[#FF7410]" weight="fill" />
            <p className={SECTION_H2}>Phase 2 · Active Build &amp; AI Roadmap</p>
          </div>
          <h2 className="mt-2 font-title text-2xl font-black text-[#f8fafc] sm:text-3xl">
            Upgrading Makeon with Intelligent AI Studio Agents
          </h2>
          <p className="mt-2.5 max-w-3xl text-[14px] leading-relaxed text-[#94a3b8]">
            Makeon is evolving from an institutional web hub into an AI-augmented studio environment. We are building specialized multi-agent systems designed to protect the learner struggle while scaling mentor diagnostic capacity.
          </p>

          <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
            {AI_UPGRADE_FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="flex flex-col border border-[#1e293b] bg-[#0c1014] p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex h-8 w-8 items-center justify-center border border-[#FF7410]/40 bg-[#FF7410]/10 text-[#FF7410]">
                      <Icon size={18} weight="bold" />
                    </div>
                    <span className="border border-[#334155] bg-[#111827] px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.14em] text-[#FF7410]">
                      {feat.status}
                    </span>
                  </div>
                  <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.14em] text-[#64748b]">
                    {feat.tag}
                  </p>
                  <h3 className="mt-1 font-title text-base font-bold text-[#f8fafc]">{feat.title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#94a3b8]">{feat.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </CaseStudyScrollReveal>
    </div>
  );
}
