"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Quotes, ArrowUpRight, LinkedinLogo } from "@phosphor-icons/react";
import { motion, useInView } from "framer-motion";
import ScrollFocusWrapper from "@/components/ScrollFocusWrapper";

export interface TestimonialItem {
  name: string;
  role: string;
  location: string;
  initials: string;
  headline: string;
  text: string;
  highlight: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Daniel Forbes",
    role: "Manager · Parla Retail",
    location: "UK",
    initials: "DF",
    headline: "Reliable, creative, and thoughtful in every way",
    text: "He quickly proved himself to be reliable, creative, and thoughtful in his approach to design. His work always balanced good design with practical implementation, making it easy for developers and product managers to move projects forward. He was a supportive teammate — open to feedback, collaborative, and always positive to work with.",
    highlight: "reliable, creative, and thoughtful",
  },
  {
    name: "Ahobilesan Gurumurthy",
    role: "Senior Software Developer · Parla Retail",
    location: "UK",
    initials: "AG",
    headline: "Bridges the gap between design and development effortlessly",
    text: "Working alongside Santhosh has been exceptional. His designs are not just beautiful, they are developer-friendly and thoughtful. He bridges the gap between design and development effortlessly, always considering technical constraints while maintaining creative excellence. His collaborative approach and clear communication made our workflow seamless.",
    highlight: "developer-friendly and thoughtful",
  },
  {
    name: "Raju Kumar",
    role: "Designer · Direct Report",
    location: "India",
    initials: "RK",
    headline: "A visionary leader who consistently elevates",
    text: "Reporting directly to Santhosh was an absolute privilege. His positive mindset and exceptional design skills have been a constant source of inspiration. Santhosh is a visionary leader who consistently elevates our projects. His strategic use of UX methodologies has set a new standard for our product's success.",
    highlight: "visionary leader who consistently elevates",
  },
  {
    name: "Chandresh Kamal",
    role: "Vice President · Intellemo.AI",
    location: "India",
    initials: "CK",
    headline: "His impact on our revenue growth has been profound",
    text: "Honouring Santhosh, our exceptional UX Designer! In just a year, he has revolutionised our approach with rapid design, innovative ideas, and user-centric solutions. His impact on our revenue growth has been profound, solidifying his position as a key player in our success story.",
    highlight: "impact on our revenue growth has been profound",
  },
];

export default function TestimonialsSectionV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  return (
    <ScrollFocusWrapper>
      <section
        id="recommendations"
        className="w-full bg-[#F4F4F0] scroll-mt-20 px-0 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      >
        <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black bg-white flex flex-col">
          {/* Section Header Banner */}
          <div className="p-6 sm:p-8 md:p-10 border-b-2 border-black bg-[#FAED00] flex flex-col md:flex-row md:items-center justify-between gap-4 select-none">
            <div>
              <div className="flex items-center gap-2 mb-1.5 font-mono">
                <span className="text-[10px] font-mono font-black text-black uppercase tracking-wider">
                  // SOCIAL_PROOF
                </span>
                <span className="text-black/40">/</span>
                <span className="text-[10px] font-mono text-black/75 uppercase tracking-wider font-bold">
                  VERIFIED PEER REVIEWS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black font-mono leading-none">
                RECOMMENDATIONS.
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/simon-santhosh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-black text-white hover:bg-zinc-800 transition-colors font-mono text-xs font-black uppercase tracking-wider border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <LinkedinLogo weight="fill" className="w-4 h-4 text-[#FAED00]" />
                <span>VIEW ALL ON LINKEDIN</span>
                <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Testimonials 2x2 Grid with Brutalist Borders */}
          <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 bg-white relative"
          >
            {testimonials.map((t, idx) => {
              const isEven = idx % 2 === 0;
              const isFirstRow = idx < 2;

              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`p-6 sm:p-8 md:p-9 flex flex-col justify-between group hover:bg-[#FAED00]/5 transition-colors relative ${
                    isEven ? "md:border-r-2 md:border-black" : ""
                  } ${isFirstRow ? "border-b-2 border-black" : "border-b-2 md:border-b-0 border-black"}`}
                >
                  <div>
                    {/* Header: Avatar Tag + Details + Location */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-black text-[#FAED00] font-mono font-black text-sm flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
                          {t.initials}
                        </div>
                        <div>
                          <div className="font-mono font-black text-sm sm:text-base text-black uppercase tracking-tight leading-tight">
                            {t.name}
                          </div>
                          <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wide font-sans">
                            {t.role}
                          </div>
                        </div>
                      </div>

                      <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-zinc-100 border border-black text-zinc-700 shrink-0">
                        {t.location}
                      </span>
                    </div>

                    {/* Headline banner */}
                    <div className="text-xs sm:text-sm font-black font-mono uppercase tracking-tight text-[#FF462D] mb-3 leading-snug">
                      &ldquo;{t.headline}&rdquo;
                    </div>

                    {/* Full Quote */}
                    <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed font-sans font-medium mb-6">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  {/* Footer Tag */}
                  <div className="pt-3 border-t border-black/10 flex items-center justify-between">
                    <span className="text-[9.5px] font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      VERIFIED RECOMMENDATION
                    </span>
                    <Quotes weight="fill" className="w-4 h-4 text-black/20 group-hover:text-black transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Bar: Trust Quote strip */}
          <div className="p-4 sm:p-5 bg-black text-white border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <span className="font-mono text-xs font-bold text-zinc-300">
              TRUSTED BY ENGINEERING MANAGERS, PRODUCT LEADERS &amp; JUNIOR DESIGNERS ALIKE.
            </span>
            <span className="font-mono text-[11px] text-[#FAED00] font-black uppercase tracking-wider">
              100% RECOMMENDATION RATE
            </span>
          </div>
        </div>
      </section>
    </ScrollFocusWrapper>
  );
}
