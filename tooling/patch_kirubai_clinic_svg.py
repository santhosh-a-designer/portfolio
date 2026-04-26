#!/usr/bin/env python3
"""
Add horizontal space between the white logo mark and the clinic name in
public/graphic-design/posters/New_Clinic_Board.svg (Figma/Illustrator export order).

Shifts the four header name paths by +36px in user space. Reads INPUT, writes
OUTPUT (does not modify input in place).

Usage:
  python3 tooling/patch_kirubai_clinic_svg.py
  python3 tooling/patch_kirubai_clinic_svg.py path/in.svg path/out.svg
"""
from __future__ import annotations

import sys
import xml.etree.ElementTree as ET

DX = 36
# Element order in the export we matched (0-based path indices in first <g>):
PATH_INDICES = (3, 4, 6, 11)


def main() -> int:
    src = (
        sys.argv[1]
        if len(sys.argv) > 1
        else "public/graphic-design/posters/New_Clinic_Board.svg"
    )
    dst = (
        sys.argv[2]
        if len(sys.argv) > 2
        else "public/graphic-design/posters/New_Clinic_Board.patched.svg"
    )
    tree = ET.parse(src)
    root = tree.getroot()
    g0 = list(root)[0]
    children = list(g0)
    for i in PATH_INDICES:
        el = children[i]
        if el.tag.split("}")[-1] != "path":
            print(f"warning: child {i} is not a <path>, skipping", file=sys.stderr)
            continue
        old = (el.get("transform") or "").strip()
        new_t = f"translate({DX},0) {old}".strip() if old else f"translate({DX},0)"
        el.set("transform", new_t)
    with open(dst, "wb") as f:
        tree.write(f, xml_declaration=True, encoding="utf-8", method="xml")
    print(f"Wrote {dst}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
