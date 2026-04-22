import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUp, StackSimple } from "@phosphor-icons/react/dist/ssr";
import type { CaseStudy } from "@/lib/caseStudies";

const cell = "flex min-h-[8.5rem] flex-col justify-center px-4 py-5 sm:min-h-[9rem] sm:px-6 sm:py-6";

export default function CaseStudyArticleFooter({
  prev,
  next,
}: {
  prev: CaseStudy | null;
  next: CaseStudy | null;
}) {
  return (
    <nav className="mt-16 border-t border-[#1e293b] pt-10" aria-label="Case study navigation">
      <div className="overflow-hidden rounded-none border border-[#1e293b] bg-[#0c1014] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
        <div className="grid grid-cols-1 divide-y divide-[#1e293b] md:grid-cols-[1fr_auto_1fr] md:divide-x md:divide-y-0">
          {/* Previous */}
          <div className={`${cell} min-w-0`}>
            {prev ? (
              <Link
                href={`/case-studies/${prev.slug}`}
                className="group -m-1 flex h-full min-h-0 flex-col justify-center gap-2 rounded-none p-1 text-left transition-colors hover:bg-[#FF7410]/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7410]/50"
              >
                <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-[#64748b]">Previous</span>
                <span className="font-title text-[15px] font-bold leading-snug text-[#f1f5f9] group-hover:text-[#FF7410] sm:text-base">
                  <span className="inline-flex items-start gap-2">
                    <ArrowLeft
                      className="mt-0.5 flex-shrink-0 text-[#64748b] transition-colors group-hover:text-[#FF7410]"
                      size={18}
                      weight="bold"
                      aria-hidden
                    />
                    <span className="min-w-0 line-clamp-3">{prev.project}</span>
                  </span>
                </span>
              </Link>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-none border border-[#334155] bg-[#111827] text-[#64748b]"
                  aria-hidden
                >
                  <StackSimple size={18} weight="duotone" />
                </div>
                <p className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-[#64748b]">Start of the series</p>
                <p className="max-w-[16ch] text-[12px] leading-relaxed text-[#94a3b8]">This is the first case study in the list.</p>
              </div>
            )}
          </div>

          {/* Center actions */}
          <div
            className={`flex min-h-0 flex-col items-stretch justify-center gap-2.5 border-[#1e293b] bg-[#08090b]/80 px-4 py-5 sm:px-5 md:min-w-[11.5rem] md:border-x md:bg-[#08090b]/60`}
          >
            <a
              href="#case-study-top"
              className="inline-flex w-full items-center justify-center gap-2 rounded-none border border-[#334155] bg-transparent px-3 py-2.5 text-center text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-[#94a3b8] transition hover:border-[#FF7410]/60 hover:text-[#FF7410] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7410]/40"
            >
              <ArrowUp size={15} className="flex-shrink-0 opacity-80" aria-hidden />
              Top
            </a>
          </div>

          {/* Next */}
          <div className={`${cell} min-w-0`}>
            {next ? (
              <Link
                href={`/case-studies/${next.slug}`}
                className="group -m-1 flex h-full min-h-0 flex-col items-end justify-center gap-2 rounded-none p-1 text-right transition-colors hover:bg-[#FF7410]/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7410]/50"
              >
                <span className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-[#64748b]">Next</span>
                <span className="font-title text-[15px] font-bold leading-snug text-[#f1f5f9] group-hover:text-[#FF7410] sm:text-base">
                  <span className="inline-flex items-start justify-end gap-2 text-right">
                    <span className="min-w-0 line-clamp-3">{next.project}</span>
                    <ArrowRight
                      className="mt-0.5 flex-shrink-0 text-[#64748b] transition-colors group-hover:text-[#FF7410]"
                      size={18}
                      weight="bold"
                      aria-hidden
                    />
                  </span>
                </span>
              </Link>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 text-center md:items-end md:text-right">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-none border border-[#334155] bg-[#111827] text-[#64748b] md:mr-0"
                  aria-hidden
                >
                  <StackSimple size={18} weight="duotone" className="rotate-180" />
                </div>
                <p className="text-[9px] font-mono font-semibold uppercase tracking-[0.2em] text-[#64748b]">End of the series</p>
                <p className="max-w-[16ch] text-[12px] leading-relaxed text-[#94a3b8] md:ml-auto">You are viewing the latest case study.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
