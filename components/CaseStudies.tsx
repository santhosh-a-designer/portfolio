"use client";

import { motion } from "framer-motion";
import { Sparkle, Target, Lightning, TrendUp } from "@phosphor-icons/react";

const VP = { once: true, amount: 0.2 } as const;
const ease = [0.22, 1, 0.36, 1] as const;

type CaseStudy = {
  id: string;
  project: string;
  story: string;
  situation: string;
  task: string;
  action: string[];
  result: string[];
  learnings: string[];
  screenSlots: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    project: "Parla Retail — Show & Sell + Customer Scheduler",
    story:
      "A simple CTA click turns an online shopper into a real-time, guided sales conversation.",
    situation:
      "Ecommerce stores needed a better way to connect customers with salespeople during high-intent moments, especially when shoppers needed live product guidance before purchase.",
    task:
      "Design an assisted-selling workflow that starts from a website CTA and supports booking, video-call consultation, and in-call checkout with minimal friction.",
    action: [
      "Studied US-market competitors to identify critical CTA and booking behavior patterns.",
      "Designed the CTA-first entry flow for store websites using Parla subscription integration.",
      "Created Customer Scheduler UX tailored to US client expectations for accessibility and data clarity.",
      "Structured appointment lifecycle controls: create, manage, reschedule, and delete.",
      "Mapped call-link generation flow so both customer and salesperson get seamless access.",
      "Supported product adoption with demo-video narratives and iterative refinements.",
    ],
    result: [
      "Positive US client response for scheduler usability and accessibility.",
      "Smoother customer-to-salesperson connection and reduced journey friction.",
      "Stronger assisted-selling outcomes via video calls and in-call ordering flow.",
      "Delivered a stable, consistent product after multi-round iteration.",
    ],
    learnings: [
      "CTA clarity can decide whether online intent becomes sales conversation.",
      "Scheduler structure matters more than visual polish in enterprise adoption.",
    ],
    screenSlots: [
      "CTA integration flow",
      "Customer Scheduler screens",
      "Appointment management states",
      "Show & Sell call + checkout journey",
    ],
  },
  {
    id: "02",
    project: "Ezra Dashboard — FITA Mentor Operations",
    story:
      "From scattered manual follow-ups to one operational surface mentors can trust.",
    situation:
      "Mentors needed visibility into attendance, progress, and earnings without jumping across multiple disconnected tools.",
    task:
      "Create a unified dashboard with faster decision flow and automation-led operations.",
    action: [
      "Designed core dashboard IA for attendance, progress tracking, and earnings visibility.",
      "Reduced repetitive actions into cleaner one-click operational paths.",
      "Built automation-first UX patterns around message and alert triggers.",
    ],
    result: [
      "Improved operational clarity for mentors and managers.",
      "Lowered routine coordination overhead across core workflows.",
    ],
    learnings: [
      "In ops products, hierarchy and action priority drive trust.",
    ],
    screenSlots: [
      "Dashboard overview",
      "Attendance module",
      "Earnings and batch tracking",
      "Automation trigger flow",
    ],
  },
  {
    id: "03",
    project: "Vidya's Kitchen — Hyper-local Catering PWA",
    story:
      "A lightweight experience designed for real people, not just perfect devices.",
    situation:
      "Hyper-local users needed a simpler catering booking experience with low friction and clear mobile-first behavior.",
    task:
      "Design and ship a minimal PWA flow that works smoothly for practical day-to-day usage.",
    action: [
      "Mapped a low-friction booking flow for mobile-first users.",
      "Prioritized clarity, speed, and readable UI patterns.",
      "Aligned UX with progressive enhancement and practical reliability.",
    ],
    result: [
      "Created a usable foundation for real-world local ordering behavior.",
      "Reduced complexity for first-time and low-tech users.",
    ],
    learnings: [
      "Simplicity is a performance strategy in local commerce.",
    ],
    screenSlots: [
      "Home + menu browsing",
      "Order and booking journey",
      "Mobile interaction states",
      "PWA-ready behavior snapshots",
    ],
  },
  {
    id: "04",
    project: "CEaSS — Pet Ecommerce with AI Agents",
    story:
      "A product vision where AI guidance reduces confusion and improves buying confidence.",
    situation:
      "Pet-product journeys can overwhelm users with choices and weak decision support.",
    task:
      "Build a product from UX analysis to development with AI-assisted selling pathways.",
    action: [
      "Defined end-to-end product architecture and core user journeys.",
      "Designed discovery-to-purchase flow with guided decision points.",
      "Structured AI agent touchpoints to support product selection and conversion.",
    ],
    result: [
      "Established a scalable product direction with clear differentiation.",
      "Created a strong base for phased build and launch execution.",
    ],
    learnings: [
      "AI in commerce works best when it supports decision timing, not just recommendations.",
    ],
    screenSlots: [
      "Flow architecture map",
      "Core commerce screens",
      "AI agent interaction moments",
      "Conversion checkpoints",
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative">
      <motion.div
        className="border-b border-[#1e293b] bg-[#08090b]/60"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.5, ease }}
      >
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569]">
          <span>Index · 02B — Case Studies</span>
          <span className="text-[#FF7410]/70">Story-led · STAR Format · Draft v1</span>
        </div>
      </motion.div>

      <div className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.8, ease }}
          className="mb-12"
        >
          <p className="section-tag mb-4">02B / Case Studies</p>
          <h2 className="font-title text-3xl sm:text-5xl font-black text-white leading-tight">
            Real problems,{" "}
            <span className="neon-text">real product outcomes</span>
          </h2>
          <p className="font-description text-sm sm:text-base text-[#94a3b8] mt-4 max-w-3xl leading-relaxed">
            Draft structure ready for final visuals. Each case follows Situation, Task, Action, and Result with focused storytelling.
          </p>
        </motion.div>

        <div className="space-y-4">
          {caseStudies.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ delay: index * 0.08, duration: 0.75, ease }}
              className="border border-[#1e293b] bg-[#0c0e12] overflow-hidden"
            >
              <div className="border-b border-[#1e293b] px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569]">
                  Case Study {item.id}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF7410]/80">
                  Draft
                </div>
              </div>

              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-px">
                <div className="p-4 sm:p-6 border-b lg:border-b-0 border-[#1e293b]">
                  <h3 className="font-title text-xl sm:text-2xl font-black text-white leading-tight">
                    {item.project}
                  </h3>
                  <p className="mt-3 text-sm text-[#c7d2e0] italic leading-relaxed">
                    "{item.story}"
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF7410] mb-2 flex items-center gap-2">
                        <Sparkle size={12} /> Situation
                      </p>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">{item.situation}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF7410] mb-2 flex items-center gap-2">
                        <Target size={12} /> Task
                      </p>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">{item.task}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF7410] mb-2 flex items-center gap-2">
                        <Lightning size={12} /> Action
                      </p>
                      <ul className="space-y-1.5">
                        {item.action.map((point) => (
                          <li key={point} className="text-sm text-[#94a3b8] leading-relaxed">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF7410] mb-2 flex items-center gap-2">
                        <TrendUp size={12} /> Result
                      </p>
                      <ul className="space-y-1.5">
                        {item.result.map((point) => (
                          <li key={point} className="text-sm text-[#94a3b8] leading-relaxed">
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-[#0a0c10]">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-3">
                    Screen Placeholders
                  </p>
                  <div className="grid gap-2">
                    {item.screenSlots.map((slot) => (
                      <div
                        key={slot}
                        className="border border-dashed border-[#334155] px-3 py-2 text-[11px] text-[#64748b]"
                      >
                        [Image] {slot}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-[#1e293b] pt-4">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569] mb-2">
                      Learnings
                    </p>
                    <ul className="space-y-1.5">
                      {item.learnings.map((point) => (
                        <li key={point} className="text-xs text-[#94a3b8] leading-relaxed">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
