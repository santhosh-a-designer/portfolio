"use client";

import { CaretDown, CaretRight } from "@phosphor-icons/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { VidyasArchNode, VidyasTerminalLine } from "@/lib/vidyasKitchenCaseStudyContent";

const TONE_CLASS: Record<NonNullable<VidyasTerminalLine["tone"]>, string> = {
  comment: "text-[#6A9955]",
  keyword: "text-[#569CD6]",
  string: "text-[#CE9178]",
  muted: "text-[#858585]",
  accent: "text-[#4EC9B0]",
  default: "text-[#D4D4D4]",
  heading: "text-[#DCDCAA]",
};

type FlatRow = {
  node: VidyasArchNode;
  depth: number;
  isLast: boolean;
  parentPath: boolean[];
};

function flattenTree(
  nodes: VidyasArchNode[],
  openIds: Set<string>,
  depth = 0,
  parentPath: boolean[] = []
): FlatRow[] {
  const rows: FlatRow[] = [];
  nodes.forEach((node, index) => {
    const isLast = index === nodes.length - 1;
    rows.push({ node, depth, isLast, parentPath });
    if (node.kind === "folder" && openIds.has(node.id) && node.children?.length) {
      rows.push(
        ...flattenTree(node.children, openIds, depth + 1, [...parentPath, !isLast])
      );
    }
  });
  return rows;
}

function collectOpenIds(nodes: VidyasArchNode[]): Set<string> {
  const ids = new Set<string>();
  const walk = (list: VidyasArchNode[]) => {
    for (const n of list) {
      if (n.kind === "folder") {
        ids.add(n.id);
        if (n.children) walk(n.children);
      }
    }
  };
  walk(nodes);
  return ids;
}

function findNodeById(node: VidyasArchNode | undefined, id: string): VidyasArchNode | null {
  if (!node) return null;
  if (node.id === id) return node;
  for (const child of node.children ?? []) {
    const found = findNodeById(child, id);
    if (found) return found;
  }
  return null;
}

function useTypewriter(text: string, active: boolean, speed = 18) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(text.length);
      return;
    }
    if (count >= text.length) return;
    const id = window.setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(id);
  }, [active, text, count, speed]);

  return active ? text.slice(0, count) : text;
}

function TreeGuides({
  depth,
  isLast,
  parentPath,
}: {
  depth: number;
  isLast: boolean;
  parentPath: boolean[];
}) {
  if (depth === 0) return null;
  const indent = 16;

  return (
    <>
      {parentPath.map((showLine, i) =>
        showLine ? (
          <span
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-[#424242]"
            style={{ left: 10 + i * indent }}
          />
        ) : null
      )}
      <span
        className="absolute top-[11px] h-px bg-[#424242]"
        style={{ left: 10 + (depth - 1) * indent, width: 10 }}
      />
      {!isLast && (
        <span
          className="absolute top-[11px] bottom-0 w-px bg-[#424242]"
          style={{ left: 10 + (depth - 1) * indent }}
        />
      )}
    </>
  );
}

function TsBadge() {
  return (
    <span className="shrink-0 w-[18px] h-[18px] rounded-sm bg-[#3178c6] text-white text-[9px] font-bold flex items-center justify-center leading-none">
      TS
    </span>
  );
}

function SqlBadge() {
  return (
    <span className="shrink-0 w-[18px] h-[18px] rounded-sm bg-[#e38c00] text-white text-[8px] font-bold flex items-center justify-center leading-none">
      SQL
    </span>
  );
}

function MdBadge() {
  return (
    <span className="shrink-0 w-[18px] h-[18px] rounded-sm bg-[#519aba] text-white text-[8px] font-bold flex items-center justify-center leading-none">
      MD
    </span>
  );
}

function TreeRow({
  row,
  isSelected,
  isOpen,
  onSelect,
  onToggle,
}: {
  row: FlatRow;
  isSelected: boolean;
  isOpen: boolean;
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
}) {
  const { node, depth, isLast, parentPath } = row;
  const isFolder = node.kind === "folder";

  return (
    <div
      className={`relative flex items-center gap-1 h-[22px] pr-2 cursor-pointer ${
        isSelected ? "bg-[#04395e]" : "hover:bg-[#2a2d2e]"
      }`}
      style={{ paddingLeft: 8 + depth * 16 }}
      onClick={() => {
        if (isFolder) onToggle(node.id);
        else onSelect(node.id);
      }}
      role="treeitem"
      aria-expanded={isFolder ? isOpen : undefined}
    >
      <TreeGuides depth={depth} isLast={isLast} parentPath={parentPath} />
      {isFolder ? (
        isOpen ? (
          <CaretDown weight="fill" className="w-3 h-3 text-[#c5c5c5] shrink-0" />
        ) : (
          <CaretRight weight="fill" className="w-3 h-3 text-[#c5c5c5] shrink-0" />
        )
      ) : (
        <span className="w-3 shrink-0" />
      )}
      {!isFolder &&
        (node.name.endsWith(".sql") ? (
          <SqlBadge />
        ) : node.name.endsWith(".md") ? (
          <MdBadge />
        ) : (
          <TsBadge />
        ))}
      <span
        className={`text-[13px] truncate ${isSelected ? "text-white" : "text-[#cccccc]"} ${
          isFolder ? "font-normal" : "pl-1"
        }`}
      >
        {node.name}
      </span>
    </div>
  );
}

function TypedLine({ line, active }: { line: VidyasTerminalLine; active: boolean }) {
  const display = useTypewriter(line.text, active, 12);
  return <span className={TONE_CLASS[line.tone ?? "default"]}>{display}</span>;
}

function EditorPanel({
  node,
  typing,
}: {
  node: VidyasArchNode | null;
  typing: boolean;
}) {
  const lines = node?.preview ?? [];
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    setLineCount(0);
  }, [node?.id]);

  useEffect(() => {
    if (!typing || !node) return;
    if (lineCount >= lines.length) return;
    const id = window.setTimeout(() => setLineCount((c) => c + 1), 220);
    return () => clearTimeout(id);
  }, [typing, node, lines.length, lineCount]);

  const filename = node?.name ?? "welcome.md";

  return (
    <div className="flex flex-col min-h-[280px] bg-[#1e1e1e] border-l border-[#3c3c3c]">
      <div className="flex items-center gap-1 px-2 py-1.5 bg-[#252526] border-b border-[#3c3c3c] overflow-x-auto">
        <span className="px-3 py-1 bg-[#1e1e1e] text-[#cccccc] text-[11px] border-t-2 border-[#007acc] whitespace-nowrap">
          {filename}
        </span>
      </div>
      <div className="flex-1 p-4 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto">
        {!node && <p className="text-[#858585]">Select a file in the explorer →</p>}
        {lines.slice(0, lineCount).map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words">
            <span className="text-[#858585] select-none mr-3">{String(i + 1).padStart(2, " ")}</span>
            <TypedLine line={line} active={typing && i === lineCount - 1} />
          </div>
        ))}
        {typing && lineCount < lines.length && (
          <span className="inline-block w-2 h-3.5 bg-[#AEAFAD] animate-pulse ml-8 align-middle" aria-hidden />
        )}
      </div>
    </div>
  );
}

type Props = {
  tree: VidyasArchNode[];
};

export default function ArchitectureExplorer({ tree }: Props) {
  const root = tree[0];
  const ref = useRef<HTMLDivElement>(null);
  const allOpenIds = useMemo(() => collectOpenIds(tree), [tree]);

  const [openIds, setOpenIds] = useState<Set<string>>(() => collectOpenIds(tree));
  const [selectedId, setSelectedId] = useState<string | null>("flow");

  const displayRows = useMemo(() => flattenTree(tree, openIds), [tree, openIds]);

  const toggleFolder = useCallback((id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const expandAll = useCallback(() => {
    setOpenIds(allOpenIds);
  }, [allOpenIds]);

  const collapseAll = useCallback(() => {
    setOpenIds(new Set(["root"]));
  }, []);

  const selectedNode: VidyasArchNode | null =
    (selectedId ? findNodeById(root, selectedId) : null) ??
    (selectedId ? displayRows.find((r) => r.node.id === selectedId)?.node ?? null : null);

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
        <h3 className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-sm bg-[#3178c6]" />
          Project structure · conceptual
        </h3>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={expandAll}
            className="px-2.5 py-1 bg-white border-2 border-black font-mono text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FAED00] transition-colors"
          >
            Expand all
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="px-2.5 py-1 bg-white border-2 border-black font-mono text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FAED00] transition-colors"
          >
            Collapse all
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="rounded border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-[#323233] border-b border-[#3c3c3c]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28CA42]" />
          <span className="ml-2 text-[#cccccc] text-[10px] font-mono">vidyas-kitchen — VS Code</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(220px,38%)_1fr] min-h-[320px]">
          <div className="bg-[#252526] border-b md:border-b-0 md:border-r border-[#3c3c3c] flex flex-col max-h-[420px]">
            <p className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#bbbbbb] shrink-0">
              Explorer
            </p>
            <div className="flex-1 overflow-y-auto py-1 select-none" role="tree">
              {displayRows.map((row) => (
                <TreeRow
                  key={row.node.id}
                  row={row}
                  isSelected={selectedId === row.node.id}
                  isOpen={openIds.has(row.node.id)}
                  onSelect={setSelectedId}
                  onToggle={toggleFolder}
                />
              ))}
            </div>
          </div>

          <EditorPanel node={selectedNode} typing={!!selectedId} />
        </div>

        <div className="px-4 py-2 bg-[#FAED00] border-t-2 border-black font-mono text-[10px] font-bold uppercase tracking-wide">
          Click folders to expand · click files to preview · not the real repo layout
        </div>
      </div>
    </div>
  );
}
