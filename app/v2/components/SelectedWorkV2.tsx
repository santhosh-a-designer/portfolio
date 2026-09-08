"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ArrowDown } from "@phosphor-icons/react";

interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  href: string;
  isHighlight?: boolean;
  image?: string;
  mockupType: "parla" | "ezra" | "forma";
}

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
      title: "EZRA DASHBOARD",
      category: "EDTECH / AUTOMATION",
      href: "/case-studies/ezra-mentor-dashboard",
      isHighlight: true,
      image: "/case-studies/parla/Messages_Desktop.png",
      mockupType: "ezra",
    },
    {
      id: "03",
      num: "03",
      title: "MAKEON BUILDER",
      category: "STEM / AI ECOSYSTEM",
      href: "/case-studies/makeon-builder-ecosystem",
      image: "/case-studies/parla/CRM_Order.png",
      mockupType: "forma",
    },
  ];

  return (
    <section id="work" className="w-full bg-[#F4F4F0] border-b-2 border-black">
      <div className="w-full max-w-[1440px] mx-auto border-x-0 sm:border-x-2 border-black bg-white">
        
        {/* Top Header Row of Selected Work */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b-2 border-black">
          
          {/* Year Box */}
          <div className="lg:col-span-1 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-4 flex items-center justify-center bg-white">
            <span className="text-xs sm:text-sm font-black text-black tracking-widest font-mono select-none">
              (2026)
            </span>
          </div>

          {/* Statement Banner */}
          <div className="lg:col-span-8 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-4 sm:px-8 flex items-center justify-between bg-white">
            <p className="text-xs sm:text-sm md:text-base font-black uppercase tracking-tight text-black leading-snug">
              WE DON&apos;T FOLLOW TRENDS.<br />
              WE SET DIRECTIONS.
            </p>
            <ArrowRight weight="bold" className="w-5 h-5 md:w-6 md:h-6 text-black hidden sm:block shrink-0" />
          </div>

          {/* Available for New Projects Yellow Badge */}
          <div className="lg:col-span-3 bg-[#FAED00] p-4 sm:px-6 flex items-center justify-between">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-black leading-tight">
              AVAILABLE<br />FOR NEW<br />PROJECTS
            </span>
            <div className="w-4 h-4 rounded-full bg-black shrink-0" />
          </div>
        </div>

        {/* Main 2-Column Content Grid: Left Sidebar + Right 3-Row Projects List */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: SELECTED WORK + Arrow Down + SEE ALL WORK */}
          <div className="lg:col-span-3 border-b-2 lg:border-b-0 lg:border-r-2 border-black p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-white">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-black leading-tight mb-6">
                SELECTED<br />WORK
              </h2>
              <ArrowDown weight="bold" className="w-6 h-6 text-black mb-8" />
            </div>

            <div className="pt-8">
              <Link
                href="/case-studies/parla-show-and-sell"
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-black tracking-wider uppercase text-black hover:text-[#FF462D] transition-colors group"
              >
                <span>SEE ALL WORK</span>
                <ArrowUpRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
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
                  <div className={`md:col-span-3 p-6 sm:p-8 flex items-center justify-center md:justify-start border-b-2 md:border-b-0 md:border-r-2 ${
                    isSelected ? "border-black" : "border-black"
                  }`}>
                    <span className={`text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none font-sans select-none ${
                      isSelected ? "text-black" : "text-black"
                    }`}>
                      {item.num}
                    </span>
                  </div>

                  {/* Title & Category Info */}
                  <div className={`md:col-span-4 p-6 sm:p-8 flex flex-col justify-center border-b-2 md:border-b-0 md:border-r-2 ${
                    isSelected ? "border-black" : "border-black"
                  }`}>
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight leading-snug mb-2 ${
                      isSelected ? "text-black" : "text-black"
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-[10px] sm:text-xs font-black uppercase tracking-wider ${
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
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/80 backdrop-blur-sm p-2 border border-white/20">
                            <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider truncate">
                              {item.title}
                            </span>
                            <ArrowUpRight weight="bold" className="w-3.5 h-3.5 text-white shrink-0" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between text-white">
                          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                            {item.title}
                          </span>
                          <span className="text-xs font-black uppercase text-[#FAED00]">
                            VIEW CASE STUDY ↗
                          </span>
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
