"use client";

import { useState } from "react";
import SkeletonImage from "@/components/SkeletonImage";
import HighlightText from "./HighlightText";
import {
  tableauCopy,
  tableauHighlights,
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
      <div className="p-4 sm:p-8 md:p-10">{children}</div>
    </section>
  );
}

/** Hidden when the screenshot asset is missing or fails to load. */
export default function TableauSection({ num = "05" }: { num?: string }) {
  const [assetMissing, setAssetMissing] = useState(false);

  if (assetMissing) return null;

  return (
    <SectionWindow num={num} title="Ops visibility · Tableau">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        <div className="space-y-5 min-w-0">
          <p className="text-sm text-zinc-700 leading-relaxed">
            <HighlightText text={tableauCopy} />
          </p>
          <ul className="space-y-4">
            {tableauHighlights.map((item) => (
              <li
                key={item.id}
                className="border-2 border-black bg-[#FAF9F5] p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <p className="font-mono text-[10px] font-black uppercase tracking-wider text-[#FF462D] mb-1.5">
                  {item.label}
                </p>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  <HighlightText text={item.body} />
                </p>
              </li>
            ))}
          </ul>
          <span className="inline-block px-2.5 py-1 bg-[#FAED00] border-2 border-black font-mono text-[10px] font-black uppercase tracking-wide shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Tableau · Supabase-fed exports
          </span>
        </div>

        <figure className="min-w-0 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <SkeletonImage
            src={tableauScreenshotSrc}
            alt="Tableau dashboard — meals and dishes by order rupees"
            loading="lazy"
            className="w-full min-h-[280px] sm:min-h-[360px]"
            imgClassName="block w-full h-auto object-contain object-center p-2 sm:p-3"
            imgStyle={{ height: "auto", width: "100%" }}
            onError={() => setAssetMissing(true)}
          />
          <figcaption className="px-3 py-2 border-t-2 border-black bg-[#E2E8F0] font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-zinc-600 text-center">
            Live export · meals + top dishes by rupees
          </figcaption>
        </figure>
      </div>
    </SectionWindow>
  );
}
