"use client";

import { useState } from "react";
import { FilePdf, ArrowSquareOut, Sparkle, Eye, Palette, TextAa, Cube } from "@phosphor-icons/react";
import Image from "next/image";
import type { DesignSystemPdfMeta } from "@/lib/designSystemPdfMeta";
import { outfitVk } from "@/lib/fonts/outfitVk";
import { vidyasDesignSystem, type VidyasDesignSurface } from "@/lib/vidyasKitchenCaseStudyContent";
import VidyasDesignSystemModal from "./VidyasDesignSystemModal";
import HighlightText from "./HighlightText";

type Props = {
  pdfMeta: DesignSystemPdfMeta;
};

export default function DesignSystemSection({ pdfMeta }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSurfaceId, setActiveSurfaceId] = useState<VidyasDesignSurface["id"]>("customer");
  const mb = pdfMeta.bytes / (1024 * 1024);

  const openModalWithSurface = (id: VidyasDesignSurface["id"]) => {
    setActiveSurfaceId(id);
    setModalOpen(true);
  };

  return (
    <div className={`${outfitVk.className} space-y-6`}>
      <VidyasDesignSystemModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        pdfMeta={pdfMeta}
        initialSurfaceId={activeSurfaceId}
      />

      <p className="max-w-3xl text-sm leading-relaxed text-zinc-700">
        <HighlightText text={vidyasDesignSystem.intro} />
      </p>

      {/* Main Showcase Banner Card */}
      <div className="border-2 border-black bg-white p-5 sm:p-7 shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] relative overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b-2 border-black">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-[#FF462D]" />
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#FF462D]">
                SYSTEM SPECIFICATION · v2.1
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase font-mono tracking-tight text-black">
              Multi-Surface Design System
            </h3>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 bg-zinc-100 border border-black font-mono text-[10px] font-bold uppercase text-zinc-700">
              4 SURFACES
            </span>
            <span className="px-2.5 py-1 bg-zinc-100 border border-black font-mono text-[10px] font-bold uppercase text-zinc-700">
              OUTFIT FONT
            </span>
            <span className="px-2.5 py-1 bg-[#00C16A]/15 border border-[#00C16A] font-mono text-[10px] font-black uppercase text-emerald-800">
              WCAG AAA / AA
            </span>
          </div>
        </div>

        {/* 4 Surface Quick-Entry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {vidyasDesignSystem.surfaces.map((surface, idx) => (
            <button
              key={surface.id}
              type="button"
              onClick={() => openModalWithSurface(surface.id)}
              className="p-3.5 bg-zinc-50 hover:bg-zinc-100 border-2 border-black shadow-[2px_2px_0_0_#000] text-left transition-all active:translate-x-0.5 active:translate-y-0.5 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-black uppercase text-zinc-500">
                    0{idx + 1}.
                  </span>
                  <div className="flex gap-1">
                    {surface.swatches.slice(0, 3).map((sw) => (
                      <span
                        key={sw.token}
                        className="w-3.5 h-3.5 rounded-full border border-black"
                        style={{ backgroundColor: sw.hex }}
                      />
                    ))}
                  </div>
                </div>
                <h4 className="font-mono text-sm font-black uppercase text-black group-hover:text-[#FF462D] transition-colors">
                  {surface.tabLabel}
                </h4>
                <p className="text-[11px] text-zinc-600 line-clamp-2 mt-1 leading-snug">
                  {surface.caption}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between text-[10px] font-mono font-bold text-black group-hover:underline">
                <span>VIEW SPEC</span>
                <ArrowSquareOut size={13} weight="bold" />
              </div>
            </button>
          ))}
        </div>

        {/* Core Token Highlight Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-3 bg-zinc-50 border border-black font-mono text-[10px]">
          <div className="flex items-center gap-2">
            <Palette size={16} weight="bold" className="text-[#BD2320]" />
            <div>
              <span className="text-zinc-500 block">PRIMARY RED</span>
              <span className="font-black text-black">#BD2320</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TextAa size={16} weight="bold" className="text-black" />
            <div>
              <span className="text-zinc-500 block">TYPE SCALE</span>
              <span className="font-black text-black">Outfit 500-900</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Cube size={16} weight="bold" className="text-zinc-700" />
            <div>
              <span className="text-zinc-500 block">MIN TOUCH TARGET</span>
              <span className="font-black text-black">48px - 56px</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sparkle size={16} weight="fill" className="text-[#00C16A]" />
            <div>
              <span className="text-zinc-500 block">CONTRAST</span>
              <span className="font-black text-black">AA/AAA Compliant</span>
            </div>
          </div>
        </div>

        {/* Interactive Action Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t-2 border-black">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="px-5 sm:px-6 py-3.5 bg-[#FAED00] hover:bg-[#faed00]/90 text-black border-2 border-black font-mono font-black text-xs uppercase tracking-wider shadow-[3px_3px_0_0_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer scanline-btn"
          >
            <Sparkle weight="fill" size={16} />
            <span>EXPLORE INTERACTIVE DESIGN SYSTEM MODAL ↗</span>
          </button>

          <a
            href={pdfMeta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-white hover:bg-zinc-100 text-black border-2 border-black font-mono font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0_0_#000] transition-colors flex items-center justify-center gap-2"
          >
            <FilePdf weight="bold" size={16} />
            <span>DOWNLOAD SPEC (PDF {mb.toFixed(1)} MB · 18 PGS)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
