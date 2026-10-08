import type { VidyasStackItem } from "@/lib/vidyasKitchenCaseStudyContent";
import TechIcon from "./TechIcon";

function StackGroup({ title, items, accent }: { title: string; items: VidyasStackItem[]; accent: string }) {
  return (
    <div>
      <h3 className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-3 flex items-center gap-2">
        <span className={`w-2 h-2 rounded-sm ${accent}`} />
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item.name}
            className="inline-flex items-center gap-2 px-3 py-2 bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow"
          >
            <TechIcon slug={item.icon} />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wide text-zinc-800">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type Props = {
  skills: VidyasStackItem[];
  tools: VidyasStackItem[];
};

export default function StackToolsSkills({ skills, tools }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <StackGroup title="Skills" items={skills} accent="bg-[#FAED00]" />
      <StackGroup title="Tools" items={tools} accent="bg-[#FF462D]" />
    </div>
  );
}
