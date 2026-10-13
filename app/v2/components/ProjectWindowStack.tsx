"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Terminal } from "@phosphor-icons/react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from "framer-motion";

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  badge?: string;
  href: string;
  liveUrl?: string;
  isHighlight?: boolean;
  image?: string;
  mockupType: "parla" | "ezra" | "forma";
  techStack?: string[];
  description?: React.ReactNode;
}



function VidyasKitchenDualDeviceMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  // Detect pointer device to disable tilt on touch devices
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsPointerFine(window.matchMedia("(pointer: fine)").matches);
    }
  }, []);

  // Raw MotionValues for cursor position & normalized offset
  const cursorX = useMotionValue(300);
  const cursorY = useMotionValue(180);
  const mouseNormX = useMotionValue(0);
  const mouseNormY = useMotionValue(0);

  // Smooth springs for fluid, non-jittery movement
  const springConfig = { stiffness: 180, damping: 24 };
  const smoothCursorX = useSpring(cursorX, { stiffness: 220, damping: 28 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 220, damping: 28 });
  const smoothNormX = useSpring(mouseNormX, springConfig);
  const smoothNormY = useSpring(mouseNormY, springConfig);

  // Background dot-grid parallax (2-3px shift opposite to mouse)
  const gridX = useTransform(smoothNormX, [-1, 1], [3.5, -3.5]);
  const gridY = useTransform(smoothNormY, [-1, 1], [3.5, -3.5]);

  // Phone 3D tilt: max 7-8 deg tilt with slight Y rotation & X pitch
  const phoneRotateX = useTransform(smoothNormY, [-1, 1], [7, -7]);
  const phoneRotateY = useTransform(smoothNormX, [-1, 1], [-8, 8]);
  const phoneShadowX = useTransform(smoothNormX, [-1, 1], [-7, 7]);

  // Laptop 3D tilt: calmer, heavier feel (max 4-5 deg tilt)
  const laptopRotateX = useTransform(smoothNormY, [-1, 1], [4, -4]);
  const laptopRotateY = useTransform(smoothNormX, [-1, 1], [-5, 5]);
  const laptopShadowX = useTransform(smoothNormX, [-1, 1], [-9, 9]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointerFine || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursorX.set(x);
    cursorY.set(y);

    // Normalized coordinates from center: -1 to +1
    const nX = ((x / rect.width) - 0.5) * 2;
    const nY = ((y / rect.height) - 0.5) * 2;
    mouseNormX.set(nX);
    mouseNormY.set(nY);
  };

  const handleMouseEnter = () => {
    if (isPointerFine) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseNormX.set(0);
    mouseNormY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full min-h-[270px] sm:min-h-[310px] md:min-h-[350px] lg:max-h-[440px] bg-[#12100E] border-2 border-black p-3 sm:p-5 flex flex-col justify-center items-center relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] select-none"
    >
      
      {/* ─── Layer 1: Warm Kitchen Dark Gradient Base ─── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1714] via-[#12100E] to-[#0D0B0A]" />

      {/* ─── Layer 2: Subtle Warm Kitchen Light Falloff (Window / Hearth Warmth) ─── */}
      <div className="absolute -top-12 -right-12 w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.12)_0%,rgba(180,83,9,0.04)_50%,transparent_75%)] blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-10 w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,rgba(189,35,32,0.09)_0%,transparent_70%)] blur-2xl pointer-events-none" />

      {/* ─── Layer 3: Interactive Mouse-Following Radial Hearth Glow ─── */}
      {isPointerFine && (
        <motion.div
          className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-300 z-0"
          style={{
            left: smoothCursorX,
            top: smoothCursorY,
            opacity: isHovered ? 0.22 : 0,
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, rgba(217, 119, 6, 0.14) 45%, transparent 70%)",
            filter: "blur(38px)",
          }}
        />
      )}

      {/* ─── Layer 4: Organic Kitchen Steam Wisps (Soft, Low-Opacity) ─── */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <filter id="vkSteamBlur"><feGaussianBlur stdDeviation="8" /></filter>
        <path d="M 60,340 Q 110,210 75,130 T 120,30" stroke="#FDE68A" strokeWidth="28" fill="none" filter="url(#vkSteamBlur)" />
        <path d="M 230,350 Q 275,230 240,150 T 280,40" stroke="#FED7AA" strokeWidth="32" fill="none" filter="url(#vkSteamBlur)" />
        <path d="M 490,340 Q 460,220 500,140 T 480,30" stroke="#FDE68A" strokeWidth="26" fill="none" filter="url(#vkSteamBlur)" />
      </svg>

      {/* ─── Layer 5: Fine Technical Blueprint Grid with Subtle Parallax ─── */}
      <motion.div 
        className="absolute inset-[-12px] opacity-[0.055] pointer-events-none z-0"
        style={{
          x: isPointerFine ? gridX : 0,
          y: isPointerFine ? gridY : 0,
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* ─── Layer 6: Soft Ambient Depth Glow behind both devices ─── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[88%] h-[65%] bg-gradient-to-r from-amber-500/10 via-orange-400/8 to-amber-200/5 blur-[55px] pointer-events-none rounded-full z-0" />

      {/* ─── Devices Composition: Matched Visual Scale & Grounded Plane ─── */}
      <div className="relative z-10 w-full flex flex-row items-end justify-center gap-3 sm:gap-5 md:gap-6 max-w-[680px] mx-auto pb-7 sm:pb-9">
        
        {/* ─── LEFT: iPhone / Mobile Mockup (Scaled up, Straight-on Elevation + 3D Tilt) ─── */}
        <div className="relative w-[30%] sm:w-[29%] max-w-[155px] shrink-0">
          
          {/* Reactive Multi-tier Phone Ground Shadow (shifts opposite to mouse) */}
          <motion.div
            style={{ x: isPointerFine ? phoneShadowX : 0 }}
            className="absolute -bottom-2 left-[12%] right-[12%] h-[6px] bg-black/85 rounded-full blur-[4px] pointer-events-none"
          />
          <motion.div
            style={{ x: isPointerFine ? phoneShadowX : 0 }}
            className="absolute -bottom-3.5 left-[6%] right-[6%] h-[10px] bg-black/50 rounded-full blur-[8px] pointer-events-none"
          />

          {/* iPhone Silver Chassis with 3D Tilt */}
          <motion.div
            style={{
              rotateX: isPointerFine ? phoneRotateX : 0,
              rotateY: isPointerFine ? phoneRotateY : 0,
              transformPerspective: 800,
              transformStyle: "preserve-3d",
              willChange: isHovered ? "transform" : "auto",
            }}
            className="relative bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] p-[2.5px] sm:p-[3.5px] rounded-[18px] sm:rounded-[22px] border-[1.5px] sm:border-[2px] border-[#64748B] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_8px_20px_rgba(0,0,0,0.6)]"
          >
            {/* Screen Bezel & Container displaying user's real Browse Menu screenshot */}
            <div className="relative w-full aspect-[470/1024] bg-white rounded-[15px] sm:rounded-[18px] overflow-hidden border border-black/80">
              <div className="skeleton-shine absolute inset-0" aria-hidden />
              <Image
                src="/case-studies/vidyas-kitchen/vk-mobile-browse.webp"
                alt="Vidya's Kitchen Browse Menu Mobile App"
                fill
                sizes="(max-width: 640px) 160px, 220px"
                className="object-cover object-top filter contrast-[1.02]"
                priority
              />

              {/* Gloss Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Badge: HOMEPAGE (Completely Static — anchored to bottom, outside tilt) */}
          <div className="absolute -bottom-2 sm:-bottom-2.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-[#FAED00] text-black font-mono font-black text-[7px] sm:text-[8px] uppercase tracking-wider border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap z-20 pointer-events-none">
            HOMEPAGE
          </div>
        </div>

        {/* ─── RIGHT: MacBook / Desktop Mockup (Proportionally Matched with Deep Ground Shadow + 3D Tilt) ─── */}
        <div className="relative w-[72%] sm:w-[73%] max-w-[445px] shrink-0">
          
          {/* Reactive Ground Shadows beneath laptop base (shift opposite to light) */}
          <motion.div
            style={{ x: isPointerFine ? laptopShadowX : 0 }}
            className="absolute -bottom-1.5 left-[6%] right-[6%] h-[7px] sm:h-[9px] bg-black/95 rounded-full blur-[4px] sm:blur-[5px] pointer-events-none"
          />
          <motion.div
            style={{ x: isPointerFine ? laptopShadowX : 0 }}
            className="absolute -bottom-3.5 left-[3%] right-[3%] h-[12px] sm:h-[16px] bg-black/60 rounded-full blur-[10px] sm:blur-[14px] pointer-events-none"
          />
          <motion.div
            style={{ x: isPointerFine ? laptopShadowX : 0 }}
            className="absolute -bottom-6 left-[8%] right-[8%] h-[18px] sm:h-[22px] bg-black/30 rounded-full blur-[20px] sm:blur-[26px] pointer-events-none"
          />

          {/* Laptop 3D Tilt Wrapper */}
          <motion.div
            style={{
              rotateX: isPointerFine ? laptopRotateX : 0,
              rotateY: isPointerFine ? laptopRotateY : 0,
              transformPerspective: 1000,
              transformStyle: "preserve-3d",
              willChange: isHovered ? "transform" : "auto",
            }}
          >
            {/* MacBook Top Lid Display in Silver Anodized Finish */}
            <div className="relative bg-gradient-to-b from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1] p-[4px] sm:p-[6px] rounded-t-[12px] sm:rounded-t-[16px] border-[2px] border-b-0 border-[#94A3B8] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
              
              {/* Top Webcam Notch / Bezel */}
              <div className="absolute top-[3.5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full flex items-center justify-center z-20">
                <div className="w-1 h-1 rounded-full bg-[#18181b] border border-[#64748b]" />
              </div>

              {/* Laptop Screen Display */}
              <div className="relative w-full aspect-[3200/1742] bg-[#0A0D12] rounded-t-[8px] sm:rounded-t-[11px] overflow-hidden border border-black flex items-center justify-center">
                <div className="skeleton-shine absolute inset-0" aria-hidden />
                <Image
                  src="/case-studies/vidyas-kitchen/dashboard/orders-board.webp"
                  alt="Vidya's Kitchen Admin Order Management Dashboard"
                  fill
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 550px"
                  className="object-contain filter contrast-[1.02]"
                  priority
                />
                {/* Screen Glare Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* MacBook Base Keyboard Chassis & Notch Lip in Silver Aluminum */}
            <div className="relative w-[106%] -left-[3%] h-[8px] sm:h-[10px] bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-[5px] border-[2px] border-[#94A3B8] shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex justify-center">
              {/* Display Open Thumb Groove */}
              <div className="w-14 sm:w-20 h-[3px] bg-[#64748B]/60 rounded-b-sm border-t border-white/40" />
            </div>
          </motion.div>

          {/* Badge: ADMIN DASHBOARD (Completely Static — outside tilt wrapper) */}
          <div className="absolute -bottom-2 sm:-bottom-2.5 right-3 sm:right-6 px-1.5 py-0.5 bg-[#FAED00] text-black font-mono font-black text-[7.5px] sm:text-[8.5px] uppercase tracking-wider border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap z-20 pointer-events-none">
            ADMIN DASHBOARD
          </div>
        </div>

      </div>

      {/* Floating Link Pill Overlay — Completely Static, Stays above the device visual */}
      <Link
        href="https://www.vidyaskitchenhome.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between bg-black/90 hover:bg-black backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 border border-white/20 transition-all text-white font-mono text-[10px] sm:text-xs z-30 shadow-lg"
      >
        <span className="font-bold uppercase tracking-wider truncate">
          VIDYA&apos;S KITCHEN // PWA / DASHBOARD / WHATSAPP BOT
        </span>
        <ArrowUpRight weight="bold" className="w-3.5 h-3.5 shrink-0 text-[#FAED00]" />
      </Link>
    </div>
  );
}

interface LaptopOnlyMockupProps {
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  linkHref: string;
  linkLabel: string;
  accentColor?: string;
  glowColor?: string;
  gradientFrom?: string;
}

function LaptopOnlyDeviceMockup({
  imageSrc,
  imageAlt,
  badgeText,
  linkHref,
  linkLabel,
  accentColor = "#FF462D",
  glowColor = "rgba(255, 70, 45, 0.28)",
  gradientFrom = "#181416",
}: LaptopOnlyMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsPointerFine(window.matchMedia("(pointer: fine)").matches);
    }
  }, []);

  const cursorX = useMotionValue(320);
  const cursorY = useMotionValue(180);
  const mouseNormX = useMotionValue(0);
  const mouseNormY = useMotionValue(0);

  const springConfig = { stiffness: 180, damping: 24 };
  const smoothCursorX = useSpring(cursorX, { stiffness: 220, damping: 28 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 220, damping: 28 });
  const smoothNormX = useSpring(mouseNormX, springConfig);
  const smoothNormY = useSpring(mouseNormY, springConfig);

  const gridX = useTransform(smoothNormX, [-1, 1], [3.5, -3.5]);
  const gridY = useTransform(smoothNormY, [-1, 1], [3.5, -3.5]);

  const laptopRotateX = useTransform(smoothNormY, [-1, 1], [5, -5]);
  const laptopRotateY = useTransform(smoothNormX, [-1, 1], [-6, 6]);
  const laptopShadowX = useTransform(smoothNormX, [-1, 1], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointerFine || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursorX.set(x);
    cursorY.set(y);

    const nX = ((x / rect.width) - 0.5) * 2;
    const nY = ((y / rect.height) - 0.5) * 2;
    mouseNormX.set(nX);
    mouseNormY.set(nY);
  };

  const handleMouseEnter = () => {
    if (isPointerFine) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseNormX.set(0);
    mouseNormY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full min-h-[270px] sm:min-h-[310px] md:min-h-[350px] lg:max-h-[440px] bg-[#12100E] border-2 border-black p-3 sm:p-5 flex flex-col justify-center items-center relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] select-none"
    >
      {/* Layer 1: Dark Slate Gradient Base */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1A1817] via-[#12100E] to-[#0A0908]"
        style={{ backgroundImage: `linear-gradient(135deg, ${gradientFrom} 0%, #12100E 50%, #0A0908 100%)` }}
      />

      {/* Layer 2: Subtle Ambient Light Falloff */}
      <div
        className="absolute -top-12 -right-12 w-[340px] h-[340px] rounded-full blur-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
      />

      {/* Layer 3: Interactive Mouse-Following Radial Glow */}
      {isPointerFine && (
        <motion.div
          className="absolute w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-300 z-0"
          style={{
            left: smoothCursorX,
            top: smoothCursorY,
            opacity: isHovered ? 0.25 : 0,
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            filter: "blur(36px)",
          }}
        />
      )}

      {/* Layer 4: Fine Technical Blueprint Grid with Parallax */}
      <motion.div
        className="absolute inset-[-12px] opacity-[0.055] pointer-events-none z-0"
        style={{
          x: isPointerFine ? gridX : 0,
          y: isPointerFine ? gridY : 0,
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Layer 5: Soft Ambient Depth Glow behind laptop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[85%] h-[65%] blur-[55px] pointer-events-none rounded-full z-0 opacity-20"
        style={{ background: accentColor }}
      />

      {/* ─── MacBook Desktop Mockup (Centered, Standalone & Prominent) ─── */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center max-w-[560px] mx-auto pb-7 sm:pb-9">
        <div className="relative w-[90%] sm:w-[88%] md:w-[86%] max-w-[510px]">
          
          {/* Reactive Multi-tier Ground Shadows */}
          <motion.div
            style={{ x: isPointerFine ? laptopShadowX : 0 }}
            className="absolute -bottom-1.5 left-[6%] right-[6%] h-[8px] sm:h-[10px] bg-black/95 rounded-full blur-[4px] sm:blur-[6px] pointer-events-none"
          />
          <motion.div
            style={{ x: isPointerFine ? laptopShadowX : 0 }}
            className="absolute -bottom-4 left-[3%] right-[3%] h-[14px] sm:h-[18px] bg-black/60 rounded-full blur-[10px] sm:blur-[16px] pointer-events-none"
          />
          <motion.div
            style={{ x: isPointerFine ? laptopShadowX : 0 }}
            className="absolute -bottom-7 left-[8%] right-[8%] h-[20px] sm:h-[26px] bg-black/35 rounded-full blur-[22px] sm:blur-[30px] pointer-events-none"
          />

          {/* Laptop 3D Tilt Wrapper */}
          <motion.div
            style={{
              rotateX: isPointerFine ? laptopRotateX : 0,
              rotateY: isPointerFine ? laptopRotateY : 0,
              transformPerspective: 1000,
              transformStyle: "preserve-3d",
              willChange: isHovered ? "transform" : "auto",
            }}
          >
            {/* MacBook Top Lid Display in Silver Anodized Finish */}
            <div className="relative bg-gradient-to-b from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E1] p-[4px] sm:p-[6px] rounded-t-[12px] sm:rounded-t-[16px] border-[2px] border-b-0 border-[#94A3B8] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
              
              {/* Top Webcam Notch / Bezel */}
              <div className="absolute top-[3.5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full flex items-center justify-center z-20">
                <div className="w-1 h-1 rounded-full bg-[#18181b] border border-[#64748b]" />
              </div>

              {/* Laptop Screen Display */}
              <div className="relative w-full aspect-[951/570] bg-[#0A0D12] rounded-t-[8px] sm:rounded-t-[11px] overflow-hidden border border-black flex items-center justify-center">
                <div className="skeleton-shine absolute inset-0" aria-hidden />
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 640px) 360px, (max-width: 1024px) 520px, 600px"
                  className="object-contain filter contrast-[1.02]"
                  priority
                />
                {/* Screen Glare Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* MacBook Base Keyboard Chassis & Notch Lip in Silver Aluminum */}
            <div className="relative w-[106%] -left-[3%] h-[8px] sm:h-[10px] bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-[5px] border-[2px] border-[#94A3B8] shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex justify-center">
              {/* Display Open Thumb Groove */}
              <div className="w-16 sm:w-24 h-[3px] bg-[#64748B]/60 rounded-b-sm border-t border-white/40" />
            </div>
          </motion.div>

          {/* Badge (Static anchor) */}
          <div className="absolute -bottom-2 sm:-bottom-2.5 right-3 sm:right-6 px-1.5 py-0.5 bg-[#FAED00] text-black font-mono font-black text-[7.5px] sm:text-[8.5px] uppercase tracking-wider border border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap z-20 pointer-events-none">
            {badgeText}
          </div>
        </div>
      </div>

      {/* Floating Link Pill Overlay — Completely Static, Stays above the device visual */}
      <Link
        href={linkHref}
        target={linkHref.startsWith("http") ? "_blank" : undefined}
        rel={linkHref.startsWith("http") ? "noopener noreferrer" : undefined}
        className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between bg-black/90 hover:bg-black backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 border border-white/20 transition-all text-white font-mono text-[10px] sm:text-xs z-30 shadow-lg"
      >
        <span className="font-bold uppercase tracking-wider truncate">
          {linkLabel}
        </span>
        <ArrowUpRight weight="bold" className="w-3.5 h-3.5 shrink-0 text-[#FAED00]" />
      </Link>
    </div>
  );
}
function WindowCard({
  item,
  index,
  total,
  scrollYProgress,
}: {
  item: ProjectItem;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isVidyasKitchen =
    item.title.toUpperCase().includes("VIDYA") || item.href.includes("vidyas-kitchen");

  // Sticky top docking offset: 28px per card for stacked window tabs
  const stickyTop = `calc(var(--site-header) + ${index * 28}px)`;

  // Individual card focus range: when subsequent cards stack on top, slightly blur the lower card
  const cardStart = index / total;
  const cardEnd = (index + 1) / total;
  const cardCovered = Math.min(1, cardEnd + 0.1);

  const cardBlur = useTransform(
    scrollYProgress,
    [0, cardStart, cardEnd, cardCovered],
    [0, 0, 0, index === total - 1 ? 0 : 3.5]
  );
  const cardFilter = useTransform(cardBlur, (val) => (val <= 0.2 ? "none" : `blur(${val.toFixed(1)}px)`));

  return (
    <div
      className="sticky w-full mb-8 sm:mb-16 last:mb-0"
      style={{
        top: stickyTop,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{ filter: cardFilter }}
        className="w-full h-auto lg:h-[530px] flex flex-col bg-white border-2 border-black shadow-[0px_10px_25px_rgba(0,0,0,0.1),4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[0px_10px_25px_rgba(0,0,0,0.1),6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative z-10 transition-[filter] duration-200"
      >
        {/* ─── Browser / Window Titlebar Header ─── */}
        <div className="h-[38px] sm:h-[42px] shrink-0 px-2.5 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center justify-between font-mono text-xs select-none gap-2">
          {/* Left: Window Dots + Instance identifier */}
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F56] border border-black/40" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E] border border-black/40" />
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27C93F] border border-black/40" />
            </div>
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-black ml-1 sm:ml-2 truncate max-w-[140px] sm:max-w-[220px] md:max-w-none">
              WIN_{item.num} // {item.title}
            </span>
          </div>

          {/* Right side: Category badge (on larger screens) + Action link */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden sm:inline-block px-2.5 py-0.5 bg-black text-[#FAED00] font-black text-[9px] uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {item.badge || item.category}
            </div>

            <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10px]">
              {item.liveUrl && (
                <span className="hidden md:inline-flex items-center gap-1 text-emerald-700 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  PROD
                </span>
              )}
              <Link
                href={item.liveUrl || item.href}
                target={item.liveUrl ? "_blank" : undefined}
                rel={item.liveUrl ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 text-black font-black uppercase hover:text-[#FF462D] transition-colors py-0.5 px-1.5 sm:px-0 bg-black/5 sm:bg-transparent rounded sm:rounded-none"
              >
                <span>{item.liveUrl ? "LIVE" : "CASE STUDY"}</span>
                <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Window Body: Uniform Height 12-Column Layout ─── */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 bg-white overflow-hidden">
          
          {/* Left: Big Monospace Number & Details */}
          <div className="lg:col-span-5 p-4 sm:p-6 lg:p-7 flex flex-col justify-between h-full min-h-0 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white overflow-y-auto">
            <div>
              {/* Monospace Project Index */}
              <div className="flex items-baseline justify-between mb-1 sm:mb-2 font-mono">
                <span className="text-4xl min-[360px]:text-5xl sm:text-6xl font-black tracking-tighter leading-none text-black select-none">
                  {item.num}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                  CASE_FILE // {item.num} OF 03
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl min-[360px]:text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-sans leading-tight mb-1 sm:mb-1.5">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-sm font-bold uppercase tracking-wide text-[#FF462D] font-mono mb-2.5 sm:mb-3.5">
                {item.category}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm font-sans text-zinc-700 leading-relaxed uppercase mb-3.5 sm:mb-5 font-semibold">
                {item.description}
              </p>

              {/* Tech Stack Chips */}
              {item.techStack && (
                <div>
                  <span className="text-[8.5px] sm:text-[9px] font-mono uppercase text-zinc-400 block mb-1.5 font-bold">TECH SPEC:</span>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 bg-black text-white uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons at bottom of info panel */}
            <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 shrink-0">
              <Link
                href={item.liveUrl || item.href}
                target={item.liveUrl ? "_blank" : undefined}
                rel={item.liveUrl ? "noopener noreferrer" : undefined}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-[#FF462D] text-white hover:bg-black font-mono font-black text-[11px] sm:text-xs uppercase tracking-wider border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center scanline-btn"
              >
                <span>{item.liveUrl ? "OPEN LIVE PRODUCT" : "VIEW CASE STUDY"}</span>
                <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
              </Link>

              {item.liveUrl ? (
                <Link
                  href={item.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 bg-[#FAED00] text-black hover:bg-[#ffe600] font-mono font-black text-[11px] sm:text-xs uppercase tracking-wider border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center scanline-btn scanline-btn-light"
                >
                  <span>READ CASE STUDY</span>
                  <ArrowUpRight weight="bold" className="w-3.5 h-3.5" />
                </Link>
              ) : null}
            </div>
          </div>

          {/* Right: Interactive Mockup Visual */}
          <div className="lg:col-span-7 p-3 sm:p-5 lg:p-7 bg-[#F8F9FA] flex flex-col justify-center items-center relative overflow-hidden h-full min-h-0">
            {isVidyasKitchen ? (
              <div className="w-full h-full flex items-center justify-center">
                <VidyasKitchenDualDeviceMockup />
              </div>
            ) : item.num === "02" ? (
              <div className="w-full h-full flex items-center justify-center">
                <LaptopOnlyDeviceMockup
                  imageSrc="/case-studies/parla/parla-dashboard-mockup.webp"
                  imageAlt="Parla Retail Admin Management & Call Scheduling Dashboard"
                  badgeText="ADMIN DASHBOARD"
                  linkHref="/case-studies/parla-show-and-sell"
                  linkLabel="SHOW & SELL // ECOMMERCE / SCHEDULER"
                  accentColor="#FF462D"
                  glowColor="rgba(255, 70, 45, 0.28)"
                  gradientFrom="#1E1412"
                />
              </div>
            ) : item.num === "03" ? (
              <div className="w-full h-full flex items-center justify-center">
                <LaptopOnlyDeviceMockup
                  imageSrc="/case-studies/we-two-pets/wetwo-hero-mockup.webp"
                  imageAlt="We Two Pets Intentional Pet Care Storefront Hero"
                  badgeText="STOREFRONT HERO"
                  linkHref="https://www.wetwopets.com/"
                  linkLabel="WE TWO PETS // PET COMMERCE"
                  accentColor="#00C16A"
                  glowColor="rgba(0, 193, 106, 0.24)"
                  gradientFrom="#101A15"
                />
              </div>
            ) : (
              <div className="w-full h-full min-h-[190px] sm:min-h-[260px] md:min-h-[300px] lg:max-h-[420px] aspect-[16/10] relative bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group/mockup flex items-center justify-center">
                {item.image ? (
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 700px"
                      className="object-contain object-center brightness-[1.03] contrast-[1.01] group-hover/mockup:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    
                    {/* Floating Link Pill Overlay */}
                    <Link
                      href={item.liveUrl || item.href}
                      target={item.liveUrl ? "_blank" : undefined}
                      rel={item.liveUrl ? "noopener noreferrer" : undefined}
                      className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between bg-black/85 hover:bg-black backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 border border-white/20 transition-all text-white font-mono text-[10px] sm:text-xs z-10"
                    >
                      <span className="font-bold uppercase tracking-wider truncate">
                        {item.title} // {item.category}
                      </span>
                      <ArrowUpRight weight="bold" className="w-3.5 h-3.5 shrink-0 text-[#FAED00]" />
                    </Link>
                  </>
                ) : (
                  <div className="w-full h-full bg-zinc-900 p-4 sm:p-6 flex flex-col justify-between text-white font-mono">
                    <span className="text-xs uppercase tracking-widest text-zinc-400">
                      {item.title}
                    </span>
                    <Link
                      href={item.liveUrl || item.href}
                      target={item.liveUrl ? "_blank" : undefined}
                      rel={item.liveUrl ? "noopener noreferrer" : undefined}
                      className="text-xs font-black uppercase text-[#FAED00] hover:underline"
                    >
                      VISIT LIVE SITE ↗
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </motion.div>
    </div>
  );
}

// Master Stacking Controller
export default function ProjectWindowStack({ projects }: { projects: ProjectItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const stackScrollPad = Math.max(0, projects.length - 1) * 28 + 24;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[1320px] mx-auto p-4 sm:p-6 md:p-8 lg:p-10 pb-4 sm:pb-6"
      style={{ paddingBottom: `${stackScrollPad}px` }}
    >
      {projects.map((project, idx) => (
        <WindowCard
          key={project.id}
          item={project}
          index={idx}
          total={projects.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

