"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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
  showContent,
  i,
  borderClass,
  contentTransition,
}: {
  project: Project;
  showContent: boolean;
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
      initial={{ opacity: 0, y: 20 }}
      animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ ...contentTransition, delay: 0.28 + i * 0.05 }}
      className={`relative flex h-auto min-h-0 flex-col border-[#e3d8ce] bg-white ${borderClass}`}
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

      <div className="relative z-[1] flex flex-col p-3 pointer-events-none sm:p-3.5 md:p-4">
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

        <p className="mb-0.5 text-[7px] font-mono uppercase leading-tight tracking-[0.15em] text-[#9a8a7a] sm:text-[8px]">
          {project.tag}
        </p>
        <h3 className="font-title text-xs font-black leading-snug text-[#130e08] sm:text-sm md:leading-tight">
          {project.title}
        </h3>
        <p className="mb-2 mt-0.5 text-[10px] font-medium leading-snug sm:mb-2.5 sm:text-[11px]" style={{ color: project.accentColor }}>
          {project.subtitle}
        </p>

        <p className="mb-2 min-h-[4.2em] line-clamp-3 text-[9px] leading-[1.5] text-[#5a4a3d] sm:text-[10px] sm:leading-relaxed">
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const curtainY = useTransform(scrollYProgress, [0.45, 0.7], ["100%", "0%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (v > 0.75) setShowContent(true);
    else if (v < 0.72) setShowContent(false);
  });

  const contentTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 20,
    mass: 1,
  };

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative z-10 max-md:scroll-mt-24 max-md:border-t max-md:border-[#1e293b] md:mt-[-100vh] md:h-[200vh] md:scroll-mt-0"
    >
      {/* Mobile: full-page scroll only — no sticky, no inner overflow (prevents scroll trap with Lenis) */}
      <div className="block bg-[#f5f0eb] md:hidden">
        <div className="border-b border-[#e0d5c8] px-5 py-2 sm:px-7">
          <div className="mx-auto flex max-w-6xl items-center justify-between text-[9px] font-mono uppercase tracking-[0.2em] sm:text-[10px]">
            <span className="text-[#a89880]">Index · 02 — Works</span>
            <span className="text-[#c96010]">
              {projects.length} projects — {projects.filter((p) => p.status !== "in-progress").length} shipped
            </span>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:gap-5 sm:px-7 sm:py-6">
          <div>
            <p className="mb-1.5 text-[9px] font-mono uppercase tracking-[0.22em] text-[#c96010] sm:mb-2 sm:text-[10px] sm:tracking-[0.26em]">
              02 / Selected works
            </p>
            <h2 className="font-title text-xl font-black leading-tight text-[#130e08] sm:text-2xl">
              Problems solved, <span className="text-[#FF7410]">products shipped</span>
            </h2>
          </div>
          <div className="grid w-full min-w-0 auto-rows-auto grid-cols-1 gap-3 sm:gap-4">
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
                  showContent
                  i={i}
                  contentTransition={contentTransition}
                  borderClass={cellBorder}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop: parallax + sticky (unchanged behavior) */}
      <div className="pointer-events-none hidden md:sticky md:top-[5.75rem] md:flex md:h-[calc(100vh-5.75rem)] md:max-h-[calc(100vh-5.75rem)] md:min-h-0 md:w-full md:flex-col md:overflow-hidden">
        <div className="absolute inset-0 bg-transparent" />

        <motion.div
          className="absolute inset-x-0 bottom-0 z-0 pointer-events-auto"
          style={{ top: 0, y: curtainY, background: "#f5f0eb" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ ...contentTransition, delay: 0.08 }}
          className="relative z-20 flex-shrink-0 border-b border-[#e0d5c8] pointer-events-auto"
          style={{ background: showContent ? "rgba(245,240,235,0.97)" : "transparent" }}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] sm:px-7 sm:text-[10px] sm:py-2 md:px-8 lg:px-10">
            <span className="text-[#a89880]">Index · 02 — Works</span>
            <span className="text-[#c96010]">
              {projects.length} projects — {projects.filter((p) => p.status !== "in-progress").length} shipped
            </span>
          </div>
        </motion.div>

        <div className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto overscroll-y-contain pointer-events-auto">
          <div className="mx-auto flex w-full min-h-0 min-w-0 max-w-6xl flex-1 flex-col justify-start gap-4 px-5 py-4 sm:gap-5 sm:px-7 sm:py-5 md:justify-center md:gap-6 md:px-8 md:py-4 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ ...contentTransition, delay: 0.16 }}
              className="w-full flex-shrink-0"
            >
              <p className="mb-1.5 text-[9px] font-mono uppercase tracking-[0.22em] text-[#c96010] sm:mb-2 sm:text-[10px] sm:tracking-[0.26em]">
                02 / Selected works
              </p>
              <h2 className="font-title text-xl font-black leading-tight text-[#130e08] sm:text-2xl md:text-3xl">
                Problems solved, <span className="text-[#FF7410]">products shipped</span>
              </h2>
            </motion.div>

            <div className="w-full min-w-0 shrink-0">
              <div className="grid w-full min-w-0 auto-rows-auto grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:grid-rows-[auto_auto] md:items-start md:gap-0 md:overflow-hidden md:rounded-none md:border md:border-[#d0c3b6] md:shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
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
                      showContent={showContent}
                      i={i}
                      contentTransition={contentTransition}
                      borderClass={cellBorder}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
