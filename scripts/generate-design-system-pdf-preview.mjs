/**
 * Renders PDF page thumbnails for the case study design-system block.
 * Requires poppler (pdftoppm). Skips quietly if PDF or pdftoppm is missing.
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PDF = path.join(ROOT, "public/case-studies/vidyas-kitchen/design-system.pdf");
const OUT_DIR = path.join(ROOT, "public/case-studies/vidyas-kitchen");

function hasPdftoppm() {
  const r = spawnSync("pdftoppm", ["-v"], { encoding: "utf8" });
  return r.status === 0 || r.stderr?.includes("pdftoppm") || r.stdout?.includes("pdftoppm");
}

function countPages(buffer) {
  const text = buffer.toString("latin1");
  const pageMatches = text.match(/\/Type\s*\/Page\b/g);
  if (pageMatches && pageMatches.length > 0) return pageMatches.length;
  const countMatches = [...text.matchAll(/\/Type\s*\/Pages[\s\S]*?\/Count\s+(\d+)/g)].map((m) => Number(m[1]));
  if (countMatches.length > 0) return Math.max(...countMatches);
  return null;
}

if (!fs.existsSync(PDF)) {
  process.exit(0);
}

if (!hasPdftoppm()) {
  console.warn("design-system preview: pdftoppm not found — skip thumbnails (install poppler)");
  process.exit(0);
}

const tmp = fs.mkdtempSync(path.join(OUT_DIR, ".pdf-preview-"));
try {
  const buf = fs.readFileSync(PDF);
  const totalPages = countPages(buf) || 6;
  const secondPage = Math.min(3, totalPages);
  for (const [page, outName] of [
    [1, "design-system-preview-1"],
    [secondPage, "design-system-preview-2"],
  ]) {
    for (const f of fs.readdirSync(tmp)) {
      if (f.endsWith(".png")) fs.unlinkSync(path.join(tmp, f));
    }
    execFileSync(
      "pdftoppm",
      ["-png", "-f", String(page), "-l", String(page), "-scale-to", "280", PDF, path.join(tmp, "page")],
      { stdio: "pipe" },
    );
    const png = fs.readdirSync(tmp).find((f) => f.startsWith("page") && f.endsWith(".png"));
    if (!png) continue;
    const src = path.join(tmp, png);
    const webpOut = path.join(OUT_DIR, `${outName}.webp`);
    try {
      execFileSync("cwebp", ["-q", "85", src, "-o", webpOut], { stdio: "pipe" });
    } catch {
      fs.copyFileSync(src, path.join(OUT_DIR, `${outName}.png`));
    }
  }
  const pages = countPages(buf);
  console.log(
    `design-system preview: wrote thumbnails${pages ? ` (${pages} pages in PDF)` : ""}`,
  );

  // Generate crisp resume preview image if PDF exists
  const RESUME_PDF = path.join(ROOT, "public/Santhosh-A-Resume.pdf");
  const RESUME_WEBP = path.join(ROOT, "public/resume-preview.webp");
  if (fs.existsSync(RESUME_PDF)) {
    try {
      execFileSync(
        "pdftoppm",
        ["-png", "-r", "220", "-f", "1", "-l", "1", RESUME_PDF, path.join(tmp, "resume")],
        { stdio: "pipe" },
      );
      const resumePng = fs.readdirSync(tmp).find((f) => f.startsWith("resume") && f.endsWith(".png"));
      if (resumePng) {
        const src = path.join(tmp, resumePng);
        try {
          execFileSync("cwebp", ["-q", "90", src, "-o", RESUME_WEBP], { stdio: "pipe" });
        } catch {
          fs.copyFileSync(src, path.join(ROOT, "public/resume-preview.png"));
        }
      }
    } catch (e) {
      // Quietly ignore if resume preview generation fails
    }
  }
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
