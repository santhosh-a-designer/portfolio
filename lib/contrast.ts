/** WCAG 2.x relative luminance contrast ratio (6-digit hex). */
export function contrastRatio(fgHex: string, bgHex: string): number {
  const lin = (hex: string) => {
    const n = hex.replace("#", "");
    const full = n.length === 3 ? n.split("").map((c) => c + c).join("") : n.slice(0, 6);
    return [0, 2, 4].map((i) => {
      const c = parseInt(full.slice(i, i + 2), 16) / 255;
      return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
  };
  const L = (hex: string) => {
    const [r, g, b] = lin(hex);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const fg = L(fgHex);
  const bg = L(bgHex);
  const hi = Math.max(fg, bg);
  const lo = Math.min(fg, bg);
  return (hi + 0.05) / (lo + 0.05);
}

export function isLargeText(fontSizePx: number, fontWeight: number): boolean {
  if (fontSizePx >= 24 && fontWeight < 700) return true;
  if (fontSizePx >= 18.66 && fontWeight >= 700) return true;
  return false;
}

export function contrastGrade(
  fgHex: string,
  bgHex: string,
  fontSizePx: number,
  fontWeight: number,
): string {
  const r = contrastRatio(fgHex, bgHex);
  const large = isLargeText(fontSizePx, fontWeight);
  if (r >= 7) return `${r.toFixed(2)}:1 · AAA`;
  if (r >= 4.5) return `${r.toFixed(2)}:1 · AA`;
  if (large && r >= 3) return `${r.toFixed(2)}:1 · AA large`;
  return `${r.toFixed(2)}:1 · below AA`;
}
