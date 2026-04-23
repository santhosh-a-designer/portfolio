"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Lightning, GlobeHemisphereWest, DeviceMobile, Robot } from "@phosphor-icons/react";

type Project = {
  id: number;
  index: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  stats: { value: string; label: string }[];
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  accentColor: string;
  status: "shipped" | "live" | "in-progress";
  slug: string;
};

const projects: Project[] = [
  {
    id: 1,
    index: "01",
    tag: "Enterprise · Ecommerce",
    title: "Show & Sell + Customer Scheduler",
    subtitle: "Parla Retail",
    description:
      "CTA-led selling for ecommerce: booking, video-call assisted sales, call-link automation, and in-call checkout. The scheduler is tuned for US retail so shoppers and store teams can move from interest to order without added friction.",
    stats: [
      { value: "US", label: "Primary market" },
      { value: "CTA", label: "Entry" },
      { value: "Video", label: "Assisted sales" },
      { value: "Shipped", label: "Status" },
    ],
    icon: GlobeHemisphereWest,
    accentColor: "#2DC8E8",
    status: "shipped",
    slug: "parla-show-and-sell",
  },
  {
    id: 2,
    index: "02",
    tag: "EdTech · Automation",
    title: "Ezra Dashboard",
    subtitle: "FITA Academy — mentors & students",
    description:
      "One system for attendance, hours, and pay: the Ezra bot powers a mentor dashboard, students see their own progress, and automations nudge at batch end with Gmail handoffs. Built for my FITA batches, with paid pilots and an academy path in motion.",
    stats: [
      { value: "FITA", label: "Academy" },
      { value: "₹50k", label: "Pilot rev." },
      { value: "5", label: "Mentors" },
      { value: "Live", label: "Build" },
    ],
    icon: Robot,
    accentColor: "#2563EB",
    status: "live",
    slug: "ezra-mentor-dashboard",
  },
  {
    id: 3,
    index: "03",
    tag: "PWA · WhatsApp · Hyper-local",
    title: "Vidya's Kitchen",
    subtitle: "Home Catering — Sivakasi",
    description:
      "A local home-catering stack: premium PWA, WhatsApp bot orders, Razorpay checkout, and an ops dashboard, with IG and video ads feeding leads into chat. ~80% TypeScript and React, with the full product designed and shipped—not only the interface layer.",
    stats: [
      { value: "WA", label: "Orders" },
      { value: "PWA", label: "Customer" },
      { value: "~80%", label: "Built" },
      { value: "TS", label: "Stack" },
    ],
    icon: DeviceMobile,
    accentColor: "#CC1C1C",
    status: "in-progress",
    slug: "vidyas-kitchen-pwa",
  },
  {
    id: 4,
    index: "04",
    tag: "AI · Commerce",
    title: "CEaSS",
    subtitle: "Community-Enabled Autonomous Sales",
    description:
      "AI-assisted commerce for pet products: community discovery, light storefronts, and automation that moves micro-sellers from browse to buy with less overhead. The product is aimed at how small sellers and buyers actually transact in chat and on social, not a generic big-box flow.",
    stats: [
      { value: "AI", label: "Automation" },
      { value: "Community", label: "Discovery" },
      { value: "Dev", label: "Status" },
      { value: "1", label: "Niche" },
    ],
    icon: Lightning,
    accentColor: "#F97316",
    status: "in-progress",
    slug: "ceass-pet-ecommerce",
  },
];

const statusLabel: Record<Project["status"], string> = {
  shipped: "Shipped",
  live: "Live",
  "in-progress": "In progress",
};

const cardSpring = { type: "spring" as const, stiffness: 80, damping: 18, mass: 0.9 };

function WorkProjectCard({
  project,
  i,
  borderClass,
}: {
  project: Project;
  i: number;
  borderClass: string;
}) {
  const Icon = project.icon;
  const [labelPos, setLabelPos] = useState<{ x: number; y: number } | null>(null);
  const isCeass = project.slug === "ceass-pet-ecommerce";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ ...cardSpring, delay: i * 0.09 }}
      className={`relative flex min-h-[17rem] flex-col bg-[#faf6f0] ${borderClass}`}
    >
      <Link
        href={`/case-studies/${project.slug}`}
        className="absolute inset-0 z-[2] block cursor-none max-sm:cursor-pointer"
        aria-label={isCeass ? `${project.title} — in progress` : `View case study: ${project.title}`}
        onMouseMove={(e) => setLabelPos({ x: e.clientX, y: e.clientY })}
        onMouseLeave={() => setLabelPos(null)}
      >
        <span className="sr-only">
          {isCeass ? "In progress — " : "View case study — "}
          {project.title}
        </span>
      </Link>

      {labelPos && (
        <div
          className="pointer-events-none fixed z-[200] max-sm:hidden"
          style={{ left: labelPos.x, top: labelPos.y, transform: "translate(14px, 14px)" }}
          aria-hidden
        >
          <span className="inline-block border border-[#1a1510] bg-[#1a1510] px-2.5 py-1.5 text-[8px] font-mono font-bold uppercase tracking-[0.12em] text-white">
            {isCeass ? "In progress" : "View case study"}
          </span>
        </div>
      )}

      {/* watermark index */}
      <div
        className="pointer-events-none absolute right-2 top-1 select-none font-title text-4xl font-black leading-none"
        style={{ color: project.accentColor, opacity: 0.07 }}
        aria-hidden
      >
        {project.index}
      </div>

      <div className="relative z-[1] flex flex-1 flex-col p-5 pointer-events-none sm:p-6">
        {/* header row */}
        <div className="mb-3 flex items-start justify-between gap-2">
          <div
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center"
            style={{ background: `${project.accentColor}12`, border: `1px solid ${project.accentColor}30` }}
          >
            <Icon size={18} style={{ color: project.accentColor }} />
          </div>
          <span
            className="shrink-0 px-2 py-0.5 text-[7px] font-mono font-semibold uppercase tracking-widest sm:text-[8px]"
            style={{
              color: project.accentColor,
              background: `${project.accentColor}0f`,
              border: `1px solid ${project.accentColor}35`,
            }}
          >
            {statusLabel[project.status]}
          </span>
        </div>

        <p className="mb-0.5 text-[8px] font-mono uppercase leading-tight tracking-[0.15em] text-[#9a8a7a]">
          {project.tag}
        </p>
        <h3 className="font-title text-sm font-black leading-snug text-[#130e08] sm:text-base">
          {project.title}
        </h3>
        <p className="mt-1 mb-3 text-[11px] font-medium leading-snug sm:text-[12px]" style={{ color: project.accentColor }}>
          {project.subtitle}
        </p>
        <p className="mb-4 flex-1 line-clamp-3 text-[10px] leading-relaxed text-[#5a4a3d] sm:text-[11px]">
          {project.description}
        </p>

        {/* stats bar */}
        <div
          className="mt-auto grid shrink-0 grid-cols-2 gap-px sm:grid-cols-4"
          style={{ background: `${project.accentColor}2e`, boxShadow: `inset 0 0 0 1px ${project.accentColor}40` }}
        >
          {project.stats.map((stat, j) => (
            <div
              key={j}
              className="px-2 py-2.5 text-center"
              style={{ background: `color-mix(in srgb, ${project.accentColor} 7%, #faf6f0)` }}
            >
              <p className="font-title text-[11px] font-black leading-tight text-[#130e08] sm:text-[12px]">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[7px] font-mono uppercase leading-tight tracking-wider text-[#6b5d4d] sm:text-[8px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /**
   * Scroll-driven slide-up: Works wipes over the sticky About section.
   * offset ["start end", "start start"] → progress 0 when section top enters from below,
   * progress 1 when section top reaches viewport top.
   * We only animate y for the first 40% of that travel so it feels instant, not sluggish.
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  const sectionY = useTransform(scrollYProgress, [0, 0.4], [56, 0]);

  return (
    <motion.section
      id="works"
      ref={sectionRef}
      style={{ y: sectionY }}
      /**
       * Desktop: negative top margin overlaps with About's sticky zone — Works slides over it.
       * Mobile: normal block flow, no overlap.
       */
      className="relative z-10 bg-white max-md:border-t max-md:border-[#e2e8f0] max-md:scroll-mt-20 md:mt-[-100vh]"
    >
      {/* index strip */}
      <div className="border-b border-[#e2e8f0] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 text-[9px] font-mono uppercase tracking-[0.2em] sm:px-7 sm:text-[10px] md:px-8 lg:px-10">
          <span className="text-[#94a3b8]">Index · 02 — Works</span>
          <span style={{ color: "rgba(255,116,16,0.9)" }}>
            {projects.length} projects — {projects.filter((p) => p.status !== "in-progress").length} shipped
          </span>
        </div>
      </div>

      {/* heading + grid */}
      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-7 sm:py-10 md:px-8 md:pt-8 md:pb-10 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.05 }}
          className="mb-6 sm:mb-8"
        >
          <p className="mb-2 text-[9px] font-mono uppercase tracking-[0.24em] text-[#FF7410] sm:text-[10px]">
            02 / Selected works
          </p>
          <h2 className="font-title text-2xl font-black leading-tight text-[#0a0908] sm:text-3xl md:text-4xl">
            Problems solved,{" "}
            <span style={{ color: "#FF7410" }}>products shipped</span>
          </h2>
        </motion.div>

        <div className="grid w-full auto-rows-auto grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-0 md:overflow-hidden md:border md:border-[#e2e8f0] md:shadow-[0_8px_40px_-16px_rgba(0,0,0,0.12)]">
          {projects.map((project, i) => {
            const borderClass =
              i === 0
                ? "md:border-b md:border-r border-[#e3d8ce]"
                : i === 1
                  ? "md:border-b border-[#e3d8ce]"
                  : i === 2
                    ? "md:border-r border-[#e3d8ce]"
                    : "";
            return (
              <WorkProjectCard key={project.id} project={project} i={i} borderClass={borderClass} />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
