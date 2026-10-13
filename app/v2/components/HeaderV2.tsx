"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DownloadSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import ResumeModal from "@/components/ResumeModal";

function NavItem({
  label,
  href,
  borderRight = true,
}: {
  label: string;
  href: string;
  borderRight?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full h-full flex items-center justify-center px-2 sm:px-3 xl:px-4 ${
        borderRight ? "border-r-2" : "border-r-0"
      } border-black text-[11px] xl:text-[13px] font-black tracking-wider uppercase bg-white select-none text-center overflow-hidden group cursor-pointer whitespace-nowrap`}
    >
      {/* Background slide-fill that reveals automatically on hover/drag */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none origin-left z-0"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.38,
          ease: [0.25, 1, 0.5, 1], // fluid cubic-bezier easing for smooth slide-fill
        }}
      />

      {/* Text layer with smooth color transition */}
      <span
        className={`relative z-10 transition-colors duration-300 ease-out ${
          isHovered ? "text-white" : "text-black"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}

export default function HeaderV2() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const navItems = [
    { label: "WORK", short: "WORK", href: "#work" },
    { label: "EXPERIENCE", short: "EXP", href: "#experience" },
    { label: "SKILLS", short: "SKILLS", href: "#skills" },
    { label: "MENTORSHIP", short: "MENTOR", href: "#mentorship" },
    { label: "CONTACT", short: "CONTACT", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-[#F4F4F0] border-b-2 border-black sticky top-0 z-50 px-0 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      
      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black bg-white">
        {/* Desktop Header: 12-column Grid precisely matched to HeroV2 (7 cols Left / 5 cols Right) */}
        <div className="hidden lg:grid lg:grid-cols-12 min-h-[64px] items-stretch">
          {/* Left 7 Columns (Logo + WORK, EXPERIENCE, SKILLS, MENTORSHIP) */}
          <div className="lg:col-span-7 flex items-stretch border-r-2 border-black min-h-[64px]">
            {/* Logo / Brand Name - compact padding so the 4 menu items have maximum breathing room */}
            <div className="flex items-center px-3 xl:px-5 border-r-2 border-black bg-white hover:bg-zinc-50 transition-colors shrink-0">
              <Link href="/" className="inline-block">
                <span className="text-lg xl:text-2xl font-black tracking-tight uppercase text-black font-sans select-none block leading-none whitespace-nowrap">
                  SIMON SANTHOSH
                </span>
              </Link>
            </div>

            {/* Nav items 1-4 (Work, Experience, Skills, Mentorship) distributed in exact equal 4 quarters ending at the 7-col border */}
            <nav className="grid grid-cols-4 flex-1 min-w-0 items-stretch">
              {navItems.slice(0, 4).map((item, idx) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  borderRight={idx !== 3} // Mentorship is at idx 3; border-r-2 is provided once by the 7-col parent divider
                />
              ))}
            </nav>
          </div>

          {/* Right 5 Columns (CONTACT nav item + DOWNLOAD RESUME) */}
          <div className="lg:col-span-5 flex items-stretch min-h-[64px]">
            <nav className="flex items-stretch flex-1 min-w-0">
              <NavItem label={navItems[4].label} href={navItems[4].href} />
            </nav>

            {/* Download Resume Button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={() => setResumeOpen(true)}
              className="flex items-center justify-center gap-2 xl:gap-3 px-5 xl:px-8 bg-[#FAED00] border-0 hover:bg-[#ffe600] active:bg-[#e6d000] text-black font-black text-xs xl:text-sm tracking-wider uppercase transition-colors select-none group cursor-pointer shrink-0 scanline-btn scanline-btn-light"
            >
              <span className="leading-tight text-left whitespace-nowrap">
                DOWNLOAD RESUME
              </span>
              <DownloadSimple
                weight="bold"
                className="w-5 h-5 xl:w-6 xl:h-6 transition-transform group-hover:translate-y-0.5 shrink-0 stroke-[3px]"
              />
            </motion.button>
          </div>
        </div>

        {/* Tablet Header (md to lg) */}
        <div className="hidden md:flex lg:hidden items-stretch min-h-[60px]">
          <div className="flex items-center px-4 sm:px-6 border-r-2 border-black bg-white shrink-0">
            <Link href="/" className="inline-block">
              <span className="text-xl sm:text-2xl font-black tracking-tight uppercase text-black font-sans select-none block leading-none whitespace-nowrap">
                SIMON SANTHOSH
              </span>
            </Link>
          </div>
          <nav className="flex items-stretch flex-1 min-w-0">
            {navItems.map((item) => (
              <NavItem key={item.label} label={item.label} href={item.href} />
            ))}
          </nav>
          <motion.button
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={() => setResumeOpen(true)}
            className="flex items-center justify-center gap-2 px-4 sm:px-6 bg-[#FAED00] text-black font-black text-xs uppercase transition-colors select-none shrink-0 scanline-btn scanline-btn-light"
          >
            <span>RESUME</span>
            <DownloadSimple weight="bold" className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Mobile Header Top Row (< md) */}
        <div className="flex md:hidden items-stretch min-h-[50px] min-[360px]:min-h-[54px]">
          <div className="flex items-center px-3 min-[360px]:px-4 border-r-2 border-black bg-white shrink-0">
            <Link href="/" className="inline-block">
              <span className="text-[13px] min-[360px]:text-[16px] font-black tracking-tight uppercase text-black font-sans select-none block leading-none whitespace-nowrap">
                SIMON SANTHOSH
              </span>
            </Link>
          </div>
          <motion.button
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={() => setResumeOpen(true)}
            className="flex items-center justify-center gap-2 px-3 min-[360px]:px-4 bg-[#FAED00] text-black font-black text-[10px] min-[360px]:text-[11px] tracking-wider uppercase transition-colors select-none group cursor-pointer flex-1 scanline-btn scanline-btn-light"
          >
            <span className="leading-tight whitespace-nowrap">
              <span className="hidden min-[400px]:inline">DOWNLOAD </span>RESUME
            </span>
            <DownloadSimple weight="bold" className="w-4 h-4 transition-transform group-hover:translate-y-0.5 shrink-0 stroke-[3px]" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Secondary Navigation Row (320px–767px) */}
      <nav className="flex md:hidden w-full border-t-2 border-black bg-white overflow-x-hidden">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex-1 min-w-0 py-2 sm:py-2.5 px-0.5 flex items-center justify-center border-r-2 last:border-r-0 border-black text-[8px] min-[390px]:text-[9px] sm:text-[11px] font-black tracking-tight min-[390px]:tracking-wider uppercase text-black hover:bg-black hover:text-white active:bg-black active:text-[#FAED00] transition-colors text-center leading-none select-none"
          >
            <span className="min-[390px]:hidden">{item.short}</span>
            <span className="hidden min-[390px]:inline">{item.label}</span>
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
