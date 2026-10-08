import fs from "node:fs";
import path from "node:path";

export type DesignSystemPdfMeta = {
  available: boolean;
  href: string;
  bytes: number;
  pages: number | null;
  version: string | null;
  dateLabel: string | null;
  previews: { src: string; alt: string }[];
};

const PDF_HREF = "/case-studies/vidyas-kitchen/design-system.pdf";
const PDF_PATH = path.join(process.cwd(), "public/case-studies/vidyas-kitchen/design-system.pdf");
const PREVIEW_DIR = path.join(process.cwd(), "public/case-studies/vidyas-kitchen");

function countPdfPages(buffer: Buffer): number | null {
  const text = buffer.toString("latin1");
  const countMatch = text.match(/\/Type\s*\/Pages[\s\S]*?\/Count\s+(\d+)/);
  if (countMatch) return Number(countMatch[1]);
  const pageMatches = text.match(/\/Type\s*\/Page\b/g);
  return pageMatches?.length ?? null;
}

function parsePdfLabels(buffer: Buffer): { version: string | null; dateLabel: string | null } {
  const raw = buffer.toString("latin1");
  const version = raw.match(/UI design system · (\d+\.\d+)/)?.[1] ?? raw.match(/\b2\.\d\b/)?.[0] ?? null;
  const dateLabel =
    raw.match(/Generated (\d{1,2} Oct \d{4})/)?.[1] ??
    raw.match(/(\d{1,2} Oct \d{4})/)?.[1] ??
    null;
  return { version, dateLabel };
}

export function getDesignSystemPdfMeta(): DesignSystemPdfMeta {
  if (!fs.existsSync(PDF_PATH)) {
    return {
      available: false,
      href: PDF_HREF,
      bytes: 0,
      pages: null,
      version: null,
      dateLabel: null,
      previews: [],
    };
  }

  const buffer = fs.readFileSync(PDF_PATH);
  const { version, dateLabel } = parsePdfLabels(buffer);
  const previews: { src: string; alt: string }[] = [];

  for (const [base, alt] of [
    ["design-system-preview-1", "Design system PDF — cover"],
    ["design-system-preview-2", "Design system PDF — components"],
  ] as const) {
    const webp = `${base}.webp`;
    const png = `${base}.png`;
    if (fs.existsSync(path.join(PREVIEW_DIR, webp))) {
      previews.push({ src: `/case-studies/vidyas-kitchen/${webp}`, alt });
    } else if (fs.existsSync(path.join(PREVIEW_DIR, png))) {
      previews.push({ src: `/case-studies/vidyas-kitchen/${png}`, alt });
    }
  }

  return {
    available: true,
    href: PDF_HREF,
    bytes: buffer.length,
    pages: countPdfPages(buffer),
    version,
    dateLabel,
    previews,
  };
}
