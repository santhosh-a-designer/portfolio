"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Daniel Forbes",
    role: "Manager · Parla Retail",
    location: "UK",
    avatar: "DF",
    color: "#FF7410",
    headline: "Reliable, creative, and thoughtful in every way",
    text: "He quickly proved himself to be reliable, creative, and thoughtful in his approach to design. His work always balanced good design with practical implementation, making it easy for developers and product managers to move projects forward. He was a supportive teammate — open to feedback, collaborative, and always positive to work with.",
    highlight: "reliable, creative, and thoughtful",
  },
  {
    name: "Raju Kumar",
    role: "Designer · Direct Report",
    location: "India",
    avatar: "RK",
    color: "#E06010",
    headline: "A visionary leader who consistently elevates",
    text: "Reporting directly to Santhosh was an absolute privilege. His positive mindset and exceptional design skills have been a constant source of inspiration. Santhosh is a visionary leader who consistently elevates our projects. His strategic use of UX methodologies has set a new standard for our product's success.",
    highlight: "visionary leader who consistently elevates",
  },
  {
    name: "Ahobilesan Gurumurthy",
    role: "Senior Software Developer · Parla Retail",
    location: "UK",
    avatar: "AG",
    color: "#FF7410",
    headline: "Bridges the gap between design and development effortlessly",
    text: "Working alongside Santhosh has been exceptional. His designs are not just beautiful, they are developer-friendly and thoughtful. He bridges the gap between design and development effortlessly, always considering technical constraints while maintaining creative excellence. His collaborative approach and clear communication made our workflow seamless. Santhosh truly understands how to create designs that developers love to implement.",
    highlight: "developer-friendly and thoughtful",
  },
  {
    name: "Chandresh Kamal",
    role: "Vice President · Intellemo.AI",
    location: "India",
    avatar: "CK",
    color: "#E06010",
    headline: "His impact on our revenue growth has been profound",
    text: "Honouring Santhosh, our exceptional UX Designer! In just a year, he has revolutionised our approach with rapid design, innovative ideas, and user-centric solutions. His impact on our revenue growth has been profound, solidifying his position as a key player in our success story. Additionally, his exceptional communication skills and ability to translate ideas into tangible results make him an invaluable asset to any team.",
    highlight: "impact on our revenue growth has been profound",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="testimonials" ref={ref} className="relative">
      {/* Section index strip */}
      <div className="border-b border-[#1e293b] bg-[#08090b]/60">
        <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#475569]">
          <span>Index · 05 — Reviews</span>
          <span style={{ color: "rgba(255,116,16,0.7)" }}>4 Reviews · LinkedIn Verified</span>
        </div>
      </div>

      <div className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <p className="section-tag mb-4">05 / Reviews</p>
          <h2 className="font-title text-4xl sm:text-5xl font-black text-white leading-tight">
            What colleagues{" "}
            <span className="neon-text">say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px border border-[#1e293b] overflow-hidden">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col p-8 bg-[#0c0e12] hover:bg-[#FF7410]/5 transition-colors"
              style={{
                borderRight: i % 2 === 0 ? "1px solid #1e293b" : "none",
                borderBottom: i < 2 ? "1px solid #1e293b" : "none",
              }}
            >
              <Quotes size={28} className="mb-4 flex-shrink-0" style={{ color: t.color, opacity: 0.5 }} />

              <p className="font-title text-base font-bold text-white mb-4 leading-snug">
                &ldquo;{t.headline}&rdquo;
              </p>

              <p className="text-[13px] text-[#94a3b8] leading-relaxed flex-1 mb-8">
                {t.text.split(t.highlight).map((part, j) =>
                  j === 0 ? (
                    <span key={j}>{part}</span>
                  ) : (
                    <span key={j}>
                      <strong className="text-white font-semibold">{t.highlight}</strong>
                      {part}
                    </span>
                  )
                )}
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-[#1e293b]">
                <div
                  className="w-9 h-9 flex items-center justify-center text-xs font-bold font-mono flex-shrink-0"
                  style={{
                    background: `${t.color}14`,
                    border: `1px solid ${t.color}30`,
                    color: t.color,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-[10px] font-mono text-[#475569] uppercase tracking-wider">{t.role} · {t.location}</div>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <div key={s} className="w-1.5 h-1.5" style={{ backgroundColor: t.color, opacity: 0.65 }} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
