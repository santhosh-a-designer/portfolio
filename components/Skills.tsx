"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const uxSkills = [
  "User Research", "Wireframing", "Prototyping",
  "Design Systems", "Usability Testing", "Information Architecture",
  "Cross-cultural UX", "Stakeholder Alignment",
];

const devSkills = [
  "HTML / CSS", "JavaScript", "React",
  "Next.js", "Tailwind CSS", "TypeScript",
  "Figma → Code", "Responsive Design",
];

const tools = [
  "Figma", "FigJam", "Framer", "Maze", "Hotjar",
  "Next.js", "React", "Tailwind CSS", "TypeScript",
  "Cursor IDE", "MCP Servers", "Vercel", "Git", "Jira",
];

const methods = [
  "Design Thinking", "Agile / Scrum", "Jobs-to-be-done",
  "Double Diamond", "User Story Mapping", "A/B Testing",
  "Info Architecture", "Cross-cultural UX",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" ref={ref} className="relative">
      {/* Section index strip */}
      <div className="border-b border-[#1e293b] bg-[#08090b]/60">
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569]">
          <span>Index · 03 — Skills</span>
          <span style={{ color: "rgba(255,116,16,0.7)" }}>UX · Dev · Vibe Coding</span>
        </div>
      </div>

      <div className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <p className="section-tag mb-4">03 / Skills &amp; Tools</p>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-white leading-tight">
            Full{" "}
            <span className="neon-text">design + dev</span> stack
          </h2>
        </motion.div>

        {/* 3-col grid */}
        <div className="grid lg:grid-cols-3 gap-px border border-[#1e293b] overflow-hidden">

          {/* UX Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="p-8 bg-[#0c0e12]"
            style={{ borderRight: "1px solid #1e293b" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span style={{ color: "#FF7410" }}>✦</span>
              <h3 className="font-title font-bold text-white text-sm uppercase tracking-widest">UX Design</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {uxSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.15 + i * 0.045, duration: 0.3 }}
                  className="text-[12px] text-[#94a3b8] border border-[#1e293b] px-3 py-1.5 bg-[#08090b] hover:border-[#FF7410]/40 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Dev Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-8 bg-[#0c0e12]"
            style={{ borderRight: "1px solid #1e293b" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span style={{ color: "#FF7410" }}>⌥</span>
              <h3 className="font-title font-bold text-white text-sm uppercase tracking-widest">Development</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {devSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.25 + i * 0.045, duration: 0.3 }}
                  className="text-[12px] text-[#94a3b8] border border-[#1e293b] px-3 py-1.5 bg-[#08090b] hover:border-[#FF7410]/40 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools + Methods + Vibe coding */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-8 bg-[#0c0e12] flex flex-col gap-6"
          >
            {/* Tools */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-4">Tools</p>
              <div className="flex flex-wrap gap-1.5">
                {tools.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.35 + i * 0.035, duration: 0.3 }}
                    className="px-2.5 py-1 text-[10px] font-mono text-[#94a3b8] border border-[#1e293b] hover:border-[#FF7410]/40 hover:text-[#FF7410] transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Methods */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-4">Methods</p>
              <div className="flex flex-wrap gap-1.5">
                {methods.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
                    className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider"
                    style={{
                      color: "#FF7410",
                      border: "1px solid rgba(255,116,16,0.22)",
                      background: "rgba(255,116,16,0.06)",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Vibe coding callout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-auto p-5"
              style={{
                background: "linear-gradient(135deg, rgba(255,116,16,0.08), rgba(255,116,16,0.03))",
                border: "1px solid rgba(255,116,16,0.18)",
              }}
            >
              <div className="text-[10px] font-mono font-semibold uppercase tracking-widest mb-2" style={{ color: "#FF7410" }}>
                Vibe Coding ✦
              </div>
              <p className="text-[12px] text-[#64748b] leading-relaxed">
                Using <strong className="text-[#cbd5e1]">Cursor + MCP + Figma</strong> to ship pixel-perfect Next.js — faster than any traditional handoff.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
