"use client";

import HighlightText from "./HighlightText";
import type { VidyasChallenge } from "@/lib/vidyasKitchenCaseStudyContent";

function ChallengeBlock({ text, label }: { text: string; label: string }) {
  return (
    <p className="text-zinc-800 leading-relaxed">
      <span className="font-mono text-[10px] font-black uppercase text-zinc-400 block mb-1">{label}</span>
      <HighlightText text={text} />
    </p>
  );
}

function ChallengeWindowCard({ challenge, index }: { challenge: VidyasChallenge; index: number }) {
  const stickyTop = `calc(var(--site-header) + ${index * 28}px)`;

  return (
    <div
      className="sticky mb-8 w-full last:mb-0 sm:mb-16"
      style={{
        top: stickyTop,
        zIndex: index + 10,
      }}
    >
      <article className="overflow-hidden border-2 border-black bg-[#FAF9F5] shadow-[0px_10px_25px_rgba(0,0,0,0.08),4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[0px_10px_25px_rgba(0,0,0,0.08),6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex h-[38px] items-center justify-between gap-2 border-b-2 border-black bg-[#E2E8F0] px-2.5 sm:h-[42px] sm:px-4 font-mono text-xs select-none">
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
            <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
              <span className="h-2 w-2 rounded-full border border-black/40 bg-[#FF5F56] sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full border border-black/40 bg-[#FFBD2E] sm:h-2.5 sm:w-2.5" />
              <span className="h-2 w-2 rounded-full border border-black/40 bg-[#27C93F] sm:h-2.5 sm:w-2.5" />
            </div>
            <span className="ml-1 truncate text-[9px] font-black uppercase tracking-wider text-black sm:ml-2 sm:text-[10px]">
              CHAL_{challenge.id} // {challenge.title}
            </span>
          </div>
          <span className="shrink-0 border border-black bg-[#0FE0E3] px-2 py-0.5 text-[9px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {challenge.surface}
          </span>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <p className="border-l-4 border-[#FF462D] pl-3 text-sm font-bold leading-snug text-[#FF462D]">
            <HighlightText text={challenge.stake} />
          </p>
          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            <div className="space-y-3">
              <ChallengeBlock label="What happened" text={challenge.happened} />
              <ChallengeBlock label="Why it was hard" text={challenge.whyHard} />
              {challenge.triedFirst ? (
                <ChallengeBlock label="First try · failed" text={challenge.triedFirst} />
              ) : null}
            </div>
            <div className="space-y-3 border-2 border-black bg-white p-4">
              <ChallengeBlock label="What worked" text={challenge.worked} />
              <ChallengeBlock label="Outcome" text={challenge.outcome} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

type Props = {
  challenges: VidyasChallenge[];
};

/** Same sticky window pattern as Selected Work — no negative margins, no extra gray pad. */
export default function ChallengeWindowStack({ challenges }: Props) {
  return (
    <div className="relative w-full rounded-sm bg-[#F4F4F0] p-3 sm:p-5 md:p-6">
      {challenges.map((challenge, index) => (
        <ChallengeWindowCard key={challenge.id} challenge={challenge} index={index} />
      ))}
    </div>
  );
}
