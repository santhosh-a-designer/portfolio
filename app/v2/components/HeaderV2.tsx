"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DownloadSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import ResumeModal from "@/components/ResumeModal";

function NavItem({ label, href }: { label: string; href: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex-1 flex items-center justify-center px-3 lg:px-6 border-r-2 border-black text-xs md:text-sm font-black tracking-wider uppercase bg-white select-none text-center overflow-hidden group cursor-pointer"
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
    { label: "WORK", href: "#work" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "MENTORSHIP", href: "#mentorship" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-[#F4F4F0] border-b-2 border-black sticky top-0 z-50"
    >
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      
      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black flex items-stretch min-h-[50px] min-[360px]:min-h-[54px] md:min-h-[64px] bg-white">
        {/* Logo / Brand Name */}
        <div className="flex items-center px-3 min-[360px]:px-4 sm:px-6 md:px-8 border-r-0 md:border-r-2 border-black bg-white hover:bg-zinc-50 transition-colors flex-1 min-w-0">
          <Link href="/v2" className="inline-block truncate">
            <span className="text-[17px] min-[360px]:text-[19px] min-[400px]:text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase text-black font-sans select-none block leading-none truncate">
              SIMON SANTHOSH
            </span>
          </Link>
        </div>

        {/* Navigation Items with Slide-Fill Interaction */}
        <nav className="hidden md:flex items-stretch flex-1">
          {navItems.map((item) => (
            <NavItem key={item.label} label={item.label} href={item.href} />
          ))}
        </nav>

        {/* Download Resume - Highlight Button */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={() => setResumeOpen(true)}
          className="flex items-center justify-between gap-1.5 sm:gap-3 px-3 min-[360px]:px-4 sm:px-6 md:px-8 bg-[#FAED00] border-l-2 border-black hover:bg-[#ffe600] active:bg-[#e6d000] text-black font-black text-[9.5px] min-[360px]:text-[10.5px] sm:text-xs md:text-sm tracking-wider uppercase transition-colors select-none group cursor-pointer shrink-0"
        >
          <span className="leading-tight text-left">
            DOWNLOAD<br />RESUME
          </span>
          <DownloadSimple
            weight="bold"
            className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:translate-y-0.5 shrink-0 stroke-[3px]"
          />
        </motion.button>
      </div>

      {/* Mobile Secondary Navigation Row (320px–767px) */}
      <nav className="flex md:hidden w-full border-t-2 border-black bg-white overflow-x-hidden">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex-1 min-w-0 py-2 sm:py-2.5 px-0.5 min-[360px]:px-1 sm:px-2 flex items-center justify-center border-r-2 last:border-r-0 border-black text-[8.5px] min-[360px]:text-[9.5px] min-[400px]:text-[10px] sm:text-[11px] font-black tracking-wider uppercase text-black hover:bg-black hover:text-white active:bg-black active:text-[#FAED00] transition-colors text-center whitespace-nowrap select-none"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
