"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  /** Primary UI / brand color from each product’s case-study design system */
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

function WorkProjectCard({
  project,
  i,
  borderClass,
  contentTransition,
}: {
  project: Project;
  i: number;
  borderClass: string;
  contentTransition: { type: "spring"; stiffness: number; damping: number; mass: number };
}) {
  const Icon = project.icon;
  const [labelPos, setLabelPos] = useState<{ x: number; y: number } | null>(null);
  const isCeass = project.slug === "ceass-pet-ecommerce";
  const cursorHoverLabel = isCeass ? "In progress" : "View case study";
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ ...contentTransition, delay: 0.14 + i * 0.05 }}
      className={`relative flex h-auto min-h-[16.5rem] flex-col border-[#e3d8ce] bg-[#faf6f0] ${borderClass}`}
    >
      <Link
        href={`/case-studies/${project.slug}`}
        className="absolute inset-0 z-[2] block cursor-none max-sm:cursor-pointer"
        aria-label={isCeass ? `${project.title} — in progress` : `View case study: ${project.title}`}
        onMouseMove={(e) => {
          setLabelPos({ x: e.clientX, y: e.clientY });
        }}
        onMouseLeave={() => setLabelPos(null)}
      >
        <span className="sr-only">
          {isCeass ? "In progress — " : "View case study — "}
          {project.title}
        </span>
      </Link>

      {labelPos ? (
        <div
          className="pointer-events-none fixed z-[200] max-sm:hidden"
          style={{
            left: labelPos.x,
            top: labelPos.y,
            transform: "translate(14px, 14px)",
          }}
          aria-hidden
        >
          <span
            className="inline-block rounded-none border border-[#1a1510] bg-[#1a1510] px-2.5 py-1.5 text-[8px] font-mono font-bold uppercase tracking-[0.12em] text-white shadow-md"
            style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.12)" }}
          >
            {cursorHoverLabel}
          </span>
        </div>
      ) : null}

      <div
        className="pointer-events-none absolute right-2 top-1 font-title text-3xl font-black leading-none select-none sm:text-4xl"
        style={{ color: project.accentColor, opacity: 0.08 }}
        aria-hidden
      >
        {project.index}
      </div>

      <div className="relative z-[1] flex flex-col p-4 pointer-events-none sm:p-5 md:p-6">
        <div className="mb-2 flex items-start justify-between gap-2">
          <div
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-none"
            style={{
              background: `${project.accentColor}12`,
              border: `1px solid ${project.accentColor}30`,
            }}
          >
            <Icon size={17} style={{ color: project.accentColor }} />
          </div>
          <span
            className="shrink-0 rounded-none px-1.5 py-0.5 text-[7px] font-mono font-semibold uppercase tracking-widest sm:text-[8px]"
            style={{
              color: project.accentColor,
              background: `${project.accentColor}0f`,
              border: `1px solid ${project.accentColor}35`,
            }}
          >
            {statusLabel[project.status]}
          </span>
        </div>

        <p className="mb-0.5 text-[8px] font-mono uppercase leading-tight tracking-[0.15em] text-[#9a8a7a] sm:text-[9px]">
          {project.tag}
        </p>
        <h3 className="font-title text-sm font-black leading-snug text-[#130e08] sm:text-base md:leading-tight">
          {project.title}
        </h3>
        <p className="mb-3 mt-1 text-[11px] font-medium leading-snug sm:mb-3 sm:text-[12px]" style={{ color: project.accentColor }}>
          {project.subtitle}
        </p>

        <p className="mb-3 min-h-[4.6em] line-clamp-3 text-[10px] leading-[1.5] text-[#5a4a3d] sm:text-[11px] sm:leading-relaxed">
          {project.description}
        </p>

        <div
          className="grid shrink-0 grid-cols-2 gap-px self-stretch sm:grid-cols-4"
          style={{
            background: `${project.accentColor}2e`,
            boxShadow: `inset 0 0 0 1px ${project.accentColor}40`,
          }}
        >
          {project.stats.map((stat, j) => (
            <div
              key={j}
              className="min-w-0 px-2 py-2 text-center sm:px-2.5 sm:py-2.5"
              style={{
                background: `color-mix(in srgb, ${project.accentColor} 7%, #faf6f0)`,
              }}
            >
              <p className="font-title text-[11px] font-black leading-tight text-[#130e08] sm:text-[12px]">{stat.value}</p>
              <p className="mt-0.5 text-[7px] font-mono uppercase leading-tight tracking-wider text-[#6b5d4d] sm:mt-1 sm:text-[8px]">
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
  const contentTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 1,
  };

  return (
    <section
      id="works"
      className="relative z-10 min-h-[112vh] scroll-mt-24 border-t border-[#1e293b] bg-[#08090b]"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ ...contentTransition, delay: 0.06 }}
        className="border-b border-[#1e293b]"
        style={{ background: "rgba(8,9,11,0.94)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] sm:px-7 sm:text-[10px] md:px-8 lg:px-10">
          <span className="text-[#64748b]">Index · 02 — Works</span>
          <span className="text-[#FF7410]">
            {projects.length} projects — {projects.filter((p) => p.status !== "in-progress").length} shipped
          </span>
        </div>
      </motion.div>

      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-7 sm:py-9 md:px-8 md:pt-6 md:pb-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.28 }}
          transition={{ ...contentTransition, delay: 0.12 }}
          className="mb-4 sm:mb-6"
        >
          <p className="mb-1.5 text-[9px] font-mono uppercase tracking-[0.22em] text-[#c96010] sm:text-[10px] sm:tracking-[0.26em]">
            02 / Selected works
          </p>
          <h2 className="font-title text-2xl font-black leading-tight text-[#f8fafc] sm:text-3xl md:text-4xl">
            Problems solved, <span className="text-[#FF7410]">products shipped</span>
          </h2>
        </motion.div>

        <div className="grid w-full min-w-0 auto-rows-auto grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:grid-rows-[auto_auto] md:gap-0 md:overflow-hidden md:border md:border-[#334155] md:shadow-[0_10px_40px_-24px_rgba(0,0,0,0.65)]">
          {projects.map((project, i) => {
            const cellBorder =
              i === 0
                ? "md:border-b md:border-r border-[#e3d8ce]"
                : i === 1
                  ? "md:border-b border-[#e3d8ce]"
                  : i === 2
                    ? "md:border-r border-[#e3d8ce]"
                    : "";
            return (
              <WorkProjectCard
                key={project.id}
                project={project}
                i={i}
                contentTransition={contentTransition}
                borderClass={cellBorder}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
