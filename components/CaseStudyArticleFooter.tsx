import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUp } from "@phosphor-icons/react/dist/ssr";
import type { CaseStudy } from "@/lib/caseStudies";

export default function CaseStudyArticleFooter({
  prev,
  next,
}: {
  prev: CaseStudy | null;
  next: CaseStudy | null;
}) {
  return (
    <nav
      className="mt-14 border-t border-[#e7ddcf] pt-8"
      aria-label="Case study navigation"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-between sm:gap-3">
        <div className="min-w-0 sm:flex-1">
          {prev ? (
            <Link
              href={`/case-studies/${prev.slug}`}
              className="group flex min-w-0 flex-col rounded-sm border border-[#e7ddcf] bg-white p-3 shadow-sm transition-colors hover:border-[#d6b89a] hover:bg-[#fefcf9]"
            >
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8a7460]">Previous</span>
              <span className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-[#1f1a15] group-hover:text-[#c96010]">
                <ArrowLeft size={16} className="flex-shrink-0" aria-hidden />
                <span className="min-w-0 truncate">{prev.project}</span>
              </span>
            </Link>
          ) : (
            <div className="rounded-sm border border-dashed border-[#e0d5c8] bg-[#faf8f4] p-3 text-[13px] text-[#8a7d6f]">First case study</div>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:w-44 sm:flex-shrink-0 sm:items-stretch sm:justify-center">
          <Link
            href="/#works"
            className="inline-flex items-center justify-center gap-2 border border-[#e7ddcf] bg-white px-3 py-2.5 text-center text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-[#4d4136] shadow-sm transition-colors hover:border-[#c96010] hover:text-[#c96010]"
          >
            <ArrowLeft size={14} className="flex-shrink-0" aria-hidden />
            Back to works
          </Link>
          <a
            href="#case-study-top"
            className="inline-flex items-center justify-center gap-2 border border-[#ece4d8] bg-[#fbf7f0] px-3 py-2.5 text-center text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-[#6b5d4e] transition-colors hover:border-[#c96010] hover:text-[#c96010]"
          >
            <ArrowUp size={14} className="flex-shrink-0" aria-hidden />
            Top
          </a>
        </div>

        <div className="min-w-0 sm:flex-1 sm:text-right">
          {next ? (
            <Link
              href={`/case-studies/${next.slug}`}
              className="group flex min-w-0 flex-col items-end rounded-sm border border-[#e7ddcf] bg-white p-3 text-right shadow-sm transition-colors hover:border-[#d6b89a] hover:bg-[#fefcf9] sm:ml-auto"
            >
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8a7460]">Next</span>
              <span className="mt-1.5 flex items-center justify-end gap-2 text-sm font-semibold text-[#1f1a15] group-hover:text-[#c96010]">
                <span className="min-w-0 truncate">{next.project}</span>
                <ArrowRight size={16} className="flex-shrink-0" aria-hidden />
              </span>
            </Link>
          ) : (
            <div className="ml-auto w-full max-w-sm rounded-sm border border-dashed border-[#e0d5c8] bg-[#faf8f4] p-3 text-right text-[13px] text-[#8a7d6f] sm:ml-0 sm:ml-auto sm:w-auto">
              Latest case study
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
