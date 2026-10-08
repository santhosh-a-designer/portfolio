import MobileScreen from "./MobileScreen";

type Side = {
  label: string;
  src: string;
  alt: string;
};

type Props = {
  title: string;
  note?: string;
  before: Side;
  after: Side;
};

export default function ScreenCompare({ title, note, before, after }: Props) {
  return (
    <div className="border-b-2 border-black bg-[#FAF9F5] px-6 py-8 sm:px-10">
      <p className="mb-1 text-center font-mono text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </p>
      {note && (
        <p className="mx-auto mb-6 max-w-lg text-center text-[11px] leading-relaxed text-zinc-500">
          {note}
        </p>
      )}

      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-10">
        <div className="flex flex-col items-center">
          <span className="mb-2 font-mono text-[9px] font-black uppercase tracking-wider text-zinc-500">
            {before.label}
          </span>
          <MobileScreen src={before.src} alt={before.alt} />
        </div>
        <div className="hidden font-mono text-2xl font-black text-zinc-300 sm:block" aria-hidden>
          →
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-2 border-2 border-black bg-[#FF462D] px-2 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {after.label}
          </span>
          <MobileScreen src={after.src} alt={after.alt} />
        </div>
      </div>
    </div>
  );
}
