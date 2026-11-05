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
  maxBlur = 5.5,
  minOpacity = 0.55,
}: ScrollFocusWrapperProps) {
  // If disabled, render standard container without any useScroll hook
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
  maxBlur = 5.5,
  minOpacity = 0.55,
}: Omit<ScrollFocusWrapperProps, "disabled">) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    offset: isFirst
      ? ["start start", "end start"]
      : isLast
      ? ["start end", "end end"]
      : ["start end", "end start"],
  });

  return (
    <div
      ref={containerRef}
      id={id}
      className={`w-full ${className}`}
    >
      {children}
    </div>
  );
}
