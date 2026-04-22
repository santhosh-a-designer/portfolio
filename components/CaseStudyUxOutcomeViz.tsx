import type { CaseStudy } from "@/lib/caseStudies";

const ACCENT = ["#c96010", "#b87a2d", "#c7893d", "#d4884a"] as const;

type OutcomeItem = { label: string; value: number };

function donutBackground(items: OutcomeItem[]) {
  const total = items.reduce((s, i) => s + i.value, 0);
  if (total <= 0) return "conic-gradient(#e5dccf 0deg 360deg)";
  let deg = 0;
  const stops: string[] = [];
  items.forEach((it, i) => {
    const span = (it.value / total) * 360;
    const end = deg + span;
    stops.push(`${ACCENT[i % ACCENT.length]} ${deg}deg ${end}deg`);
    deg = end;
  });
  return `conic-gradient(from -90deg, ${stops.join(", ")})`;
}

export default function CaseStudyUxOutcomeViz({ study }: { study: CaseStudy }) {
  const v = study.artifacts?.uxOutcomeViz;
  if (!v?.items.length) return null;

  const avg = v.items.reduce((s, i) => s + i.value, 0) / v.items.length;
  const avgLabel = Number.isInteger(avg) ? String(avg) : avg.toFixed(1);

  return (
    <section className="mt-10 border border-[#e7ddcf] bg-white p-4 sm:p-6">
      <h2 className="text-[12px] font-mono uppercase tracking-[0.2em] text-[#b45d14]">{v.title}</h2>
      {v.blurb ? <p className="mt-2 text-[13px] leading-relaxed text-[#5d5145]">{v.blurb}</p> : null}

      {v.style === "donut" ? (
        <div className="mt-6 flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
          <div
            className="relative h-[200px] w-[200px] shrink-0"
            role="img"
            aria-label={`UX outcome share across ${v.items.length} areas. Average ${avgLabel} of 10.`}
          >
            <div
              className="h-full w-full rounded-full"
              style={{ background: donutBackground(v.items) }}
            />
            <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(201,96,16,0.12)]">
              <span className="font-title text-3xl font-black tabular-nums text-[#c96010]">{avgLabel}</span>
              <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#8a7460]">/ 10 avg</span>
            </div>
          </div>
          <ul className="flex w-full max-w-sm flex-col gap-2.5" role="list">
            {v.items.map((row, i) => (
              <li key={row.label} className="flex items-center gap-2.5 text-[13px] text-[#3f352b]">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-sm"
                  style={{ backgroundColor: ACCENT[i % ACCENT.length] }}
                  aria-hidden
                />
                <span className="min-w-0 flex-1 leading-snug">{row.label}</span>
                <span className="shrink-0 font-mono text-[12px] tabular-nums text-[#6b5a4a]">{row.value}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-5 max-w-md space-y-3">
          {v.items.map((row, i) => (
            <div key={row.label}>
              <div className="flex justify-between gap-2 text-[12px] text-[#3f352b]">
                <span className="min-w-0 leading-snug">{row.label}</span>
                <span className="shrink-0 font-mono tabular-nums text-[#6b5a4a]">{row.value}/10</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full bg-[#eee4d8]">
                <div
                  className="h-full"
                  style={{
                    width: `${Math.min(100, Math.max(0, row.value * 10))}%`,
                    backgroundColor: ACCENT[i % ACCENT.length],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
