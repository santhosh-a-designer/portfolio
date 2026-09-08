import React from "react";
import Link from "next/link";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";

export default function HeaderV2() {
  const navItems = [
    { label: "WORK", href: "#work" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "MENTORSHIP", href: "#mentorship" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="w-full bg-[#F4F4F0] border-b-2 border-black sticky top-0 z-50">
      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black flex items-stretch min-h-[56px] md:min-h-[64px] bg-white">
        {/* Logo / Brand Name */}
        <div className="flex items-center px-4 sm:px-6 md:px-8 border-r-2 border-black bg-white hover:bg-zinc-50 transition-colors">
          <Link href="/v2" className="inline-block">
            <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight uppercase text-black font-sans select-none block leading-none">
              SIMON SANTHOSH
            </span>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-stretch flex-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex-1 flex items-center justify-center px-3 lg:px-6 border-r-2 border-black text-xs md:text-sm font-black tracking-wider uppercase text-black bg-white hover:bg-black hover:text-white transition-colors select-none text-center"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Download Resume - Highlight Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 px-5 sm:px-7 md:px-8 bg-[#FAED00] border-l-2 md:border-l-0 border-black hover:bg-[#ffe600] active:bg-[#e6d000] text-black font-black text-xs md:text-sm tracking-wider uppercase transition-colors ml-auto select-none group"
        >
          <span className="leading-tight text-left">
            DOWNLOAD<br />RESUME
          </span>
          <DownloadSimple
            weight="bold"
            className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-y-0.5 shrink-0 stroke-[3px]"
          />
        </a>
      </div>

      {/* Mobile Secondary Navigation Row (for smaller screens) */}
      <div className="flex md:hidden w-full overflow-x-auto border-t-2 border-black bg-white scrollbar-none">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex-1 min-w-[75px] py-2.5 px-2 flex items-center justify-center border-r-2 last:border-r-0 border-black text-[11px] font-black tracking-wider uppercase text-black hover:bg-black hover:text-white transition-colors text-center whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
