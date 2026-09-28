#!/usr/bin/env python3
"""
Regenerates assets/img/dither-fade.png, the pixelated random-dither texture
used by .content-fade (video-grid <-> content transitions, see custom.scss).

Run this any time --global-bg-color changes in assets/css/custom.scss, so the
dither pixels keep matching the page background. By default it reads that
color straight out of custom.scss; pass a hex color to override it.

Usage:
    python3 _scripts/generate-dither-fade.py            # auto-detect from custom.scss
    python3 _scripts/generate-dither-fade.py "#261e2e"  # explicit fill color

Requires: pip install pillow
"""

import random
import re
import sys
from pathlib import Path

from PIL import Image

REPO_ROOT = Path(__file__).resolve().parent.parent
CUSTOM_SCSS = REPO_ROOT / "assets" / "css" / "custom.scss"
OUTPUT_PATH = REPO_ROOT / "assets" / "img" / "dither-fade.png"

# --- tunables (keep in sync with --content-fade-height / --content-fade-tile
#     in custom.scss if you change these) ---
PIXEL = 1            # size of one dither "cell" in real px
ROWS = 34            # logical dither rows -> image height = ROWS * PIXEL
WIDTH_CELLS = 64      # wide tile so the random pattern doesn't visibly repeat
WHITE_BOOST = 2.0     # >1.0 forces a flat, fully-opaque band near the solid
                      # end (no dithering at all there) — harmless against a
                      # flat background, but under a blend mode (e.g.
                      # mix-blend-mode on .content-fade/#navbar) that flat
                      # block reads as a solid dark bar instead of a fade.
                      # Keep at 1.0 unless nothing in the fade's stacking
                      # context uses a blend mode.
SEED = 42             # keep the pattern stable across regenerations


def detect_bg_color():
    text = CUSTOM_SCSS.read_text()
    match = re.search(r"--global-bg-color:\s*#([0-9a-fA-F]{8}|[0-9a-fA-F]{6})", text)
    if not match:
        sys.exit(
            "Could not find --global-bg-color in custom.scss; "
            "pass a hex color explicitly, e.g. generate-dither-fade.py '#121212'"
        )
    return match.group(1)


def hex_to_rgba(hex_str):
    """6-digit hex -> (r,g,b,255); 8-digit hex (RRGGBBAA) -> (r,g,b,a)."""
    hex_str = hex_str.lstrip("#")
    r, g, b = (int(hex_str[i : i + 2], 16) for i in (0, 2, 4))
    a = int(hex_str[6:8], 16) if len(hex_str) == 8 else 255
    return (r, g, b, a)


def main():
    hex_color = sys.argv[1] if len(sys.argv) > 1 else detect_bg_color()
    r, g_, b, max_alpha = hex_to_rgba(hex_color)
    fill = (r, g_, b)

    height = ROWS * PIXEL
    width = WIDTH_CELLS * PIXEL

    random.seed(SEED)
    img = Image.new("RGBA", (width, height), fill + (0,))
    px = img.load()

    for row in range(ROWS):
        # gradient value 0..1 across the strip, top->bottom (0=transparent, 1=opaque)
        g = min(1.0, ((row + 0.5) / ROWS) * WHITE_BOOST)
        for col in range(WIDTH_CELLS):
            # "on" pixels use --global-bg-color's own alpha (max_alpha) rather
            # than a hardcoded 255, so they match the solid backdrop's
            # transparency exactly instead of looking more opaque than it.
            alpha = max_alpha if g > random.random() else 0
            for dy in range(PIXEL):
                y = row * PIXEL + dy
                for dx in range(PIXEL):
                    x = col * PIXEL + dx
                    px[x, y] = fill + (alpha,)

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUTPUT_PATH)
    print(
        f"wrote {OUTPUT_PATH} ({width}x{height}) using fill #{hex_color} "
        f"(alpha {max_alpha}/255)"
    )


if __name__ == "__main__":
    main()
