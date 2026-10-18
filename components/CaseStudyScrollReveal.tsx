"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode, ComponentProps } from "react";

const VIEWPORT = { once: true, amount: 0.03 } as const;

const motionTag = {
  div: motion.div,
  section: motion.section,
  header: motion.header,
  article: motion.article,
} as const;

type Tag = keyof typeof motionTag;

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
} & Omit<ComponentProps<"div">, "children" | "className">;

function staticShell(tag: Tag, className: string | undefined, children: ReactNode) {
  switch (tag) {
    case "header":
      return <header className={className}>{children}</header>;
    case "section":
      return <section className={className}>{children}</section>;
    case "article":
      return <article className={className}>{children}</article>;
    default:
      return <div className={className}>{children}</div>;
  }
}

export function CaseStudyScrollReveal({ children, className = "", delay = 0, as: tag = "div", ...rest }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawBlur = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [5.5, 0, 0, 5.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0.55, 1, 1, 0.55]);

  const filter = useTransform(rawBlur, (val) => {
    if (isMobile || !mounted || reduce || val <= 0.25) return "none";
    return `blur(${val.toFixed(1)}px)`;
  });

  if (reduce) {
    return staticShell(tag, className, children);
  }

  const Motion = motionTag[tag];
  return (
    <Motion
      ref={containerRef as any}
      className={`w-full ${isMobile ? "" : "transition-[filter,opacity] duration-300 ease-out will-change-[filter,opacity]"} ${className}`}
      initial={{ opacity: 0, y: 48, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ delay, type: "spring", stiffness: 60, damping: 20 }}
      style={{
        filter: isMobile ? "none" : (mounted ? filter : "none"),
        opacity: isMobile ? 1 : (mounted ? opacity : 1),
      }}
      {...(rest as object)}
    >
      {children}
    </Motion>
  );
}
