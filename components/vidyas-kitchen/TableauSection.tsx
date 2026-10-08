"use client";

import Image from "next/image";
import { useState } from "react";
import {
  showTableauSection,
  tableauCopy,
  tableauScreenshotSrc,
} from "@/lib/vidyasKitchenCaseStudyContent";

function SectionWindow({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <div className="h-10 sm:h-11 px-3 sm:px-4 bg-[#E2E8F0] border-b-2 border-black flex items-center gap-2 font-mono text-xs select-none">
        <span className="px-2 py-0.5 bg-[#FF462D] text-white font-bold text-[10px]">{num}</span>
        <span className="font-bold text-black uppercase tracking-wider truncate">{title}</span>
      </div>
      <div className="p-6 sm:p-8 md:p-10">{children}</div>
    </section>
  );
}

/** Always shows the section — image slot fills when file exists and flag is on. */
export default function TableauSection({ num = "06" }: { num?: string }) {
  const [imageOk, setImageOk] = useState(false);

  return (
    <SectionWindow num={num} title="Ops visibility · Tableau">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          <p className="text-sm text-zinc-700 leading-relaxed">{tableauCopy}</p>
          <span className="inline-block px-2 py-1 bg-zinc-100 border border-black font-mono text-[10px] font-bold uppercase">
            Basic Tableau · Supabase-fed exports
          </span>
        </div>

        <div className="aspect-video border-2 border-black overflow-hidden bg-zinc-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
          {showTableauSection && (
            <Image
              src={tableauScreenshotSrc}
              alt="Tableau dashboard for meal and dish revenue"
              fill
              loading="lazy"
              className={`object-cover object-top transition-opacity duration-300 ${imageOk ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImageOk(true)}
              onError={() => setImageOk(false)}
            />
          )}
          {(!showTableauSection || !imageOk) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-zinc-400 m-3 bg-white">
              <p className="font-mono font-black text-sm uppercase text-zinc-500 mb-1">
                Tableau dashboard slot
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Meal &amp; dish revenue — breakfast vs dinner, top gravies vs quiet ones
              </p>
              <code className="text-[10px] font-mono bg-zinc-50 px-2 py-1 border border-zinc-300 text-zinc-600">
                public/case-studies/vidyas-kitchen/tableau-screenshot.png
              </code>
              <p className="text-[10px] font-mono text-zinc-400 mt-3 uppercase">
                Set showTableauSection = true in content file when ready
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionWindow>
  );
}
