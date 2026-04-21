"use client";

import { motion } from "framer-motion";
import { GraduationCap, UsersThree } from "@phosphor-icons/react";

const cards = [
  {
    icon: GraduationCap,
    title: "UX Mentor",
    org: "FITA Academy",
    description: "Mentoring aspiring UX designers — workshops, portfolio reviews, career transitions, and design thinking from first principles.",
    stats: [
      { value: "100+", label: "Students" },
      { value: "20+", label: "Placed" },
      { value: "Active", label: "Status" },
    ],
    color: "#FF7410",
  },
  {
    icon: UsersThree,
    title: "Community Lead",
    org: "The Pixel Society",
    description: "Building a design community for knowledge-sharing, peer feedback, and collaborative growth for designers across Chennai.",
    stats: [
      { value: "Growing", label: "Community" },
      { value: "Chennai", label: "Reach" },
      { value: "Active", label: "Status" },
    ],
    color: "#CC5A0C",
  },
];

const VP = { once: true, amount: 0.25 } as const;
const ease = [0.22, 1, 0.36, 1] as const;

export default function Mentorship() {
  return (
    <section id="mentorship" className="relative">
      {/* Section index strip */}
      <motion.div
        className="border-b border-[#1e293b] bg-[#08090b]/60"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VP}
        transition={{ duration: 0.5, ease }}
      >
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569]">
          <span>Index · 04 — Mentorship</span>
          <span className="text-[#FF7410]/70">Community · Teaching · Growth</span>
        </div>
      </motion.div>

      <div className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          {/* Left: heading + quote */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.8, ease }}
          >
            <p className="section-tag mb-4">04 / Mentorship</p>
            <h2 className="font-title text-4xl sm:text-5xl font-black text-white leading-tight mb-8">
              Giving back to the{" "}
              <span className="neon-text">community</span>
            </h2>

            <blockquote
              className="p-6 text-base text-[#94a3b8] italic leading-relaxed"
              style={{ borderLeft: "3px solid #FF7410", background: "rgba(255,116,16,0.05)" }}
            >
              &ldquo;Five years ago, I stood unknown — no map, no credibility, only hunger. By God&apos;s blessings, I turned passion into purpose: designing with care, and developing what I design so people can use it better every day.&rdquo;
              <div className="mt-3 text-[11px] font-mono text-[#475569] not-italic uppercase tracking-widest">— Simon Santhosh</div>
            </blockquote>
          </motion.div>

          {/* Right: cards */}
          <div className="space-y-px border border-[#1e293b] overflow-hidden">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 48 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ delay: i * 0.15, duration: 0.75, ease }}
                  className="p-7 bg-[#0c0e12]"
                  style={{ borderBottom: i === 0 ? "1px solid #1e293b" : "none" }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0"
                      style={{ background: `${card.color}14`, border: `1px solid ${card.color}28` }}
                    >
                      <Icon size={18} style={{ color: card.color }} />
                    </div>
                    <div>
                      <div className="font-title font-bold text-white text-base">{card.title}</div>
                      <div className="text-[11px] font-mono uppercase tracking-wider mt-0.5" style={{ color: card.color }}>{card.org}</div>
                    </div>
                  </div>

                  <p className="text-[13px] text-[#64748b] leading-relaxed mb-6">{card.description}</p>

                  <div className="grid grid-cols-3 gap-px border border-[#1e293b] overflow-hidden">
                    {card.stats.map((stat, j) => (
                      <div
                        key={j}
                        className="px-4 py-3 text-center bg-[#08090b]"
                        style={{ borderRight: j < 2 ? "1px solid #1e293b" : "none" }}
                      >
                        <div className="text-base font-black font-title" style={{ color: card.color }}>{stat.value}</div>
                        <div className="text-[9px] text-[#475569] uppercase tracking-wider mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
