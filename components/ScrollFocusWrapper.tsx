"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollFocusWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  isFirst?: boolean;
  isLast?: boolean;
  disabled?: boolean;
  maxBlur?: number;
  minOpacity?: number;
}

export default function ScrollFocusWrapper({
  children,
  id,
  className = "",
  isFirst = false,
  isLast = false,
  disabled = false,
  maxBlur = 3.5,
  minOpacity = 0.68,
}: ScrollFocusWrapperProps) {
  // If disabled (e.g. Selected Work), render standard container without any useScroll hook
  if (disabled) {
    return (
      <div id={id} className={`w-full ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <ActiveScrollFocusItem
      id={id}
      className={className}
      isFirst={isFirst}
      isLast={isLast}
      maxBlur={maxBlur}
      minOpacity={minOpacity}
    >
      {children}
    </ActiveScrollFocusItem>
  );
}

function ActiveScrollFocusItem({
  children,
  id,
  className = "",
  isFirst = false,
  isLast = false,
  maxBlur = 3.5,
  minOpacity = 0.68,
}: Omit<ScrollFocusWrapperProps, "disabled">) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isFirst
      ? ["start start", "end start"]
      : isLast
      ? ["start end", "end end"]
      : ["start end", "end start"],
  });

  // Calculate blur and opacity mappings
  const blurRangeInput = isFirst
    ? [0, 0.45, 0.85, 1]
    : isLast
    ? [0, 0.4, 1]
    : [0, 0.22, 0.78, 1];

  const blurRangeOutput = isFirst
    ? [0, 0, maxBlur, maxBlur]
    : isLast
    ? [maxBlur, 0, 0]
    : [maxBlur, 0, 0, maxBlur];

  const opacityRangeInput = isFirst
    ? [0, 0.45, 0.85, 1]
    : isLast
    ? [0, 0.4, 1]
    : [0, 0.22, 0.78, 1];

  const opacityRangeOutput = isFirst
    ? [1, 1, minOpacity, minOpacity]
    : isLast
    ? [minOpacity, 1, 1]
    : [minOpacity, 1, 1, minOpacity];

  const rawBlur = useTransform(scrollYProgress, blurRangeInput, blurRangeOutput);
  const opacity = useTransform(scrollYProgress, opacityRangeInput, opacityRangeOutput);

  // Performance optimization: set filter to "none" when in focus (val <= 0.2px)
  const filter = useTransform(rawBlur, (val) => {
    if (!mounted || val <= 0.2) return "none";
    return `blur(${val.toFixed(1)}px)`;
  });

  return (
    <motion.div
      ref={containerRef}
      id={id}
      style={{
        filter: mounted ? filter : "none",
        opacity: mounted ? opacity : 1,
      }}
      className={`w-full transition-[filter,opacity] duration-300 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
}
