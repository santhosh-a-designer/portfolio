"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ArrowDown } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  href: string;
  liveUrl?: string;
  isHighlight?: boolean;
  image?: string;
  mockupType: "parla" | "ezra" | "forma";
}

const clientLogos = [
  { name: "Makeon", src: "/clients/makeon-norm.png", widthClass: "w-36 sm:w-44 md:w-48", heightClass: "h-8 sm:h-9 md:h-10" },
  { name: "Parla", src: "/clients/parla-norm.png", widthClass: "w-36 sm:w-44 md:w-50", heightClass: "h-7 sm:h-8 md:h-9" },
  { name: "Nebraska Furniture Mart", src: "/clients/nfm-norm.png", widthClass: "w-36 sm:w-44 md:w-48", heightClass: "h-9 sm:h-10 md:h-12" },
  { name: "iRasus", src: "/clients/irasus-norm.png", widthClass: "w-36 sm:w-44 md:w-48", heightClass: "h-9 sm:h-10 md:h-12" },
  { name: "Intellemo", src: "/clients/intellemo-full.png", widthClass: "w-36 sm:w-44 md:w-48", heightClass: "h-9 sm:h-10 md:h-12" },
  { name: "We Two Pets", src: "/clients/wetwopets-norm.png", widthClass: "w-28 sm:w-34 md:w-38", heightClass: "h-9 sm:h-10 md:h-12" },
];

export default function SelectedWorkV2() {
  const [activeItem, setActiveItem] = useState<string>("02");

  const projects: ProjectItem[] = [
    {
      id: "01",
      num: "01",
      title: "SHOW & SELL",
      category: "ECOMMERCE / SCHEDULER",
      href: "/case-studies/parla-show-and-sell",
      image: "/case-studies/parla/Admin_Dashboard_Desktop.png",
      mockupType: "parla",
    },
    {
      id: "02",
      num: "02",
      title: "VIDYA'S KITCHEN",
      category: "PWA / WHATSAPP ORDERING",
      href: "/case-studies/vidyas-kitchen-pwa",
      liveUrl: "https://www.vidyaskitchenhome.com/",
      isHighlight: true,
      image: "/case-studies/vidyas-kitchen/VK-M-1.png",
      mockupType: "forma",
    },
    {
      id: "03",
      num: "03",
      title: "MAKEON BUILDER",
      category: "STEM / AI ECOSYSTEM",
      href: "/case-studies/makeon-builder-ecosystem",
      liveUrl: "https://makeon.build/",
      image: "/case-studies/makeon/makeon-hero-desktop.png",
      mockupType: "forma",
    },
  ];

  return (
    <section id="work" className="w-full bg-[#F4F4F0] border-b-2 border-black">
      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black bg-white">
        
        {/* Top Header Row of Selected Work: Clean White Loop Container with Uniform Logo Scaling */}
        <div className="border-b-2 border-black bg-white overflow-hidden flex items-center h-14 sm:h-20 md:h-24 relative">
          
          {/* Static Title Label with Separator */}
          <div className="px-3 sm:px-8 md:px-10 h-full flex items-center shrink-0 border-r-2 border-black bg-white z-10 select-none">
            <span className="text-[10px] sm:text-sm md:text-base font-black uppercase tracking-wider text-black whitespace-nowrap">
              CLIENTS &amp; COMPANIES
            </span>
          </div>

          {/* Smooth Continuous Looping Marquee with Uniform Visual Scaling Matching iRasus */}
          <div className="flex-1 overflow-hidden h-full flex items-center relative bg-white">
            <motion.div
              className="flex items-center gap-8 sm:gap-16 md:gap-20 shrink-0 pr-8 sm:pr-16 md:pr-20"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 22,
              }}
            >
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className="flex items-center justify-center shrink-0 h-full py-1.5 px-2 sm:py-2 sm:px-3"
                >
                  <div className={`relative ${logo.heightClass} ${logo.widthClass} flex items-center justify-center`}>
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain filter contrast-110"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Main 2-Column Content Grid: Left Sidebar + Right 3-Row Projects List */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: SELECTED WORK + Arrow Down */}
          <div className="lg:col-span-3 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-4 sm:p-8 md:p-10 flex flex-row lg:flex-col items-center lg:items-start justify-between bg-white">
            <div>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-black leading-tight lg:mb-6">
                SELECTED WORK
              </h2>
            </div>
            <ArrowDown weight="bold" className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </div>

          {/* Right Column: 3 Project Rows */}
          <div className="lg:col-span-9 flex flex-col divide-y-2 divide-black">
            {projects.map((item) => {
              const isSelected = activeItem === item.id;
              
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`grid grid-cols-1 md:grid-cols-12 cursor-pointer transition-colors duration-200 ${
                    isSelected ? "bg-[#FF462D] text-white" : "bg-white text-black hover:bg-zinc-50"
                  }`}
                >
                  {/* Big Number (01, 02, 03) */}
                  <div className={`md:col-span-3 p-4 sm:p-8 flex items-center justify-start border-b-2 md:border-b-0 md:border-r-2 ${
                    isSelected ? "border-black" : "border-black"
                  }`}>
                    <span className={`text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none font-sans select-none ${
                      isSelected ? "text-black" : "text-black"
                    }`}>
                      {item.num}
                    </span>
                  </div>

                  {/* Title & Category Info */}
                  <div className={`md:col-span-4 p-4 sm:p-8 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 ${
                    isSelected ? "border-black" : "border-black"
                  }`}>
                    <h3 className={`text-base sm:text-xl md:text-2xl font-black uppercase tracking-tight leading-snug mb-1.5 sm:mb-2 ${
                      isSelected ? "text-black" : "text-black"
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-[9.5px] sm:text-xs font-black uppercase tracking-wider ${
                      isSelected ? "text-black/80" : "text-zinc-600"
                    }`}>
                      {item.category}
                    </p>
                  </div>

                  {/* Mockup Card Display Frame */}
                  <div className="md:col-span-5 p-4 sm:p-6 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full aspect-[16/10] bg-black border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group">
                      {item.image ? (
                        <div className="relative w-full h-full bg-zinc-900">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover contrast-110 group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                          <Link
                            href={item.liveUrl || item.href}
                            target={item.liveUrl ? "_blank" : undefined}
                            rel={item.liveUrl ? "noopener noreferrer" : undefined}
                            onClick={(e) => e.stopPropagation()}
                            className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/80 hover:bg-black backdrop-blur-sm p-2 border border-white/20 transition-colors z-10"
                          >
                            <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider truncate">
                              {item.title}
                            </span>
                            <ArrowUpRight weight="bold" className="w-3.5 h-3.5 text-white shrink-0" />
                          </Link>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between text-white">
                          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                            {item.title}
                          </span>
                          <Link
                            href={item.liveUrl || item.href}
                            target={item.liveUrl ? "_blank" : undefined}
                            rel={item.liveUrl ? "noopener noreferrer" : undefined}
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs font-black uppercase text-[#FAED00] hover:underline"
                          >
                            {item.liveUrl ? "VISIT LIVE SITE ↗" : "VIEW CASE STUDY ↗"}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
