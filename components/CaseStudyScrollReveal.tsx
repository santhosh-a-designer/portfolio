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
  const reduce = useReducedMotion();

  if (reduce) {
    return staticShell(tag, className, children);
  }

  const Motion = motionTag[tag];
  return (
    <Motion
      ref={containerRef as any}
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 32, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ delay, type: "spring", stiffness: 60, damping: 20 }}
      {...(rest as object)}
    >
      {children}
    </Motion>
  );
}
