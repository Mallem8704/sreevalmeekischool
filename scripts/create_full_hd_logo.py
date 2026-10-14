import os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
import cv2

# ==============================================================================
# 1. CREATE MASTER VECTOR SVG (Infinite Full HD Clarity on all screens)
# ==============================================================================

svg_content = '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
  <defs>
    <!-- Vibrant Warm Orange Gradient -->
    <linearGradient id="valmeekiOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF7A00" />
      <stop offset="45%" stop-color="#FF5400" />
      <stop offset="100%" stop-color="#EA3A00" />
    </linearGradient>

    <!-- Vivid Emerald to Growth Green Gradient -->
    <linearGradient id="valmeekiGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22C55E" />
      <stop offset="40%" stop-color="#16A34A" />
      <stop offset="100%" stop-color="#15803D" />
    </linearGradient>

    <!-- Radiant Sunshine Gold Gradient -->
    <linearGradient id="valmeekiGold" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FEF08A" />
      <stop offset="35%" stop-color="#FACC15" />
      <stop offset="100%" stop-color="#EAB308" />
    </linearGradient>

    <!-- Subtle soft shadow -->
    <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000000" flood-opacity="0.10" />
    </filter>
  </defs>

  <g filter="url(#softGlow)">
    <!-- 1. ORANGE FOUNDATION PILLAR (Slanted book / pillar of learning) -->
    <rect x="124" y="90" width="82" height="330" rx="41" ry="41" 
          transform="rotate(-23 165 255)" 
          fill="url(#valmeekiOrange)" />

    <!-- 2. GOLDEN SUN / INTELLECT HEAD -->
    <ellipse cx="266" cy="116" rx="35" ry="60" fill="url(#valmeekiGold)" />

    <!-- 3. GREEN VICTORIOUS STUDENT / V-FIGURE -->
    <path d="M 466 66 
             C 474 72, 474 86, 464 96 
             L 378 178 
             C 328 226, 298 266, 292 298 
             C 334 316, 396 338, 466 364 
             C 476 368, 480 380, 474 390 
             C 468 400, 456 404, 444 398 
             C 362 362, 296 340, 240 338 
             C 192 336, 150 354, 118 392 
             C 108 404, 94 402, 88 392 
             C 82 382, 86 368, 98 356 
             C 134 316, 184 294, 238 290 
             C 246 256, 218 198, 182 146 
             L 142 88 
             C 134 76, 138 62, 150 56 
             C 162 50, 176 54, 184 66 
             L 226 128 
             C 256 172, 274 218, 272 254 
             C 292 216, 326 166, 372 120 
             L 448 64 
             C 454 60, 460 62, 466 66 Z" 
          fill="url(#valmeekiGreen)" />
  </g>
</svg>
'''

os.makedirs('public/images/logo', exist_ok=True)
with open('public/images/logo/valmeeki_emblem.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

# ==============================================================================
# 2. RENDER MASTER SUPERSAMPLED CANVAS (4096x4096)
# ==============================================================================

size = 4096
s = 8

# Canvas 1: Orange Capsule (Flawless PIL rounded rectangle with rotation)
orange_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
orange_draw = ImageDraw.Draw(orange_img)

# Width 82*8 = 656, Height 330*8 = 2640, Radius 41*8 = 328
# Center (165*s, 255*s) = (1320, 2040)
cx, cy = int(165 * s), int(255 * s)
w, h, rad = int(82 * s), int(330 * s), int(41 * s)

x0 = cx - w // 2
y0 = cy - h // 2
x1 = cx + w // 2
y1 = cy + h // 2

# Draw vertical gradient into a temporary patch
grad_patch = np.zeros((h, w, 4), dtype=np.uint8)
y_factors = np.linspace(0, 1, h)[:, None]
c_top = np.array([255, 122, 0])  # #FF7A00
c_bot = np.array([234, 58, 0])   # #EA3A00
grad_rgb = (c_top * (1 - y_factors) + c_bot * y_factors).astype(np.uint8)

# Mask for rounded rect
mask_patch = Image.new('L', (w, h), 0)
mask_draw = ImageDraw.Draw(mask_patch)
mask_draw.rounded_rectangle([0, 0, w, h], radius=rad, fill=255)

patch_rgba = np.zeros((h, w, 4), dtype=np.uint8)
patch_rgba[:, :, :3] = grad_rgb[:, None, :]
patch_rgba[:, :, 3] = np.array(mask_patch)

patch_img = Image.fromarray(patch_rgba)
orange_img.paste(patch_img, (x0, y0), patch_img)

# Rotate orange capsule by -23 degrees around center (cx, cy)
orange_rotated = orange_img.rotate(23, resample=Image.Resampling.BICUBIC, center=(cx, cy))

# Canvas 2: Combined Master (Orange + Gold Head + Green Figure)
master = np.array(orange_rotated)

# 2. Golden Oval Head
head_center = (int(266 * s), int(116 * s))
head_axes = (int(35 * s), int(60 * s))
head_mask = np.zeros((size, size), dtype=np.uint8)
cv2.ellipse(head_mask, head_center, head_axes, 0, 0, 360, 255, -1, lineType=cv2.LINE_AA)

y_min = head_center[1] - head_axes[1]
y_max = head_center[1] + head_axes[1]
h_gold = max(y_max - y_min, 1)
y_indices = np.arange(size)
factors = np.clip((y_indices - y_min) / h_gold, 0, 1)

top_rgb = np.array([254, 240, 138])  # #FEF08A
bot_rgb = np.array([234, 179, 8])    # #EAB308
for c in range(3):
    grad_col = top_rgb[c] * (1 - factors) + bot_rgb[c] * factors
    master[:, :, c] = np.where(head_mask > 0, grad_col[:, None], master[:, :, c])
master[:, :, 3] = np.maximum(master[:, :, 3], head_mask)

# 3. Green Victorious Figure
def bezier_curve(p0, p1, p2, p3, n=60):
    t = np.linspace(0, 1, n)[:, None]
    return (1-t)**3 * p0 + 3*(1-t)**2*t * p1 + 3*(1-t)*t**2 * p2 + t**3 * p3

green_outline = []
green_outline.extend(bezier_curve(np.array([466, 66])*s, np.array([410, 120])*s, np.array([340, 200])*s, np.array([292, 298])*s))
green_outline.extend(bezier_curve(np.array([292, 298])*s, np.array([340, 318])*s, np.array([400, 338])*s, np.array([466, 364])*s))
green_outline.extend(bezier_curve(np.array([466, 364])*s, np.array([480, 380])*s, np.array([470, 400])*s, np.array([444, 398])*s))
green_outline.extend(bezier_curve(np.array([444, 398])*s, np.array([320, 342])*s, np.array([210, 340])*s, np.array([118, 392])*s))
green_outline.extend(bezier_curve(np.array([118, 392])*s, np.array([86, 404])*s, np.array([80, 372])*s, np.array([98, 356])*s))
green_outline.extend(bezier_curve(np.array([98, 356])*s, np.array([136, 318])*s, np.array([184, 296])*s, np.array([238, 290])*s))
green_outline.extend(bezier_curve(np.array([238, 290])*s, np.array([220, 230])*s, np.array([182, 146])*s, np.array([142, 88])*s))
green_outline.extend(bezier_curve(np.array([142, 88])*s, np.array([134, 64])*s, np.array([168, 52])*s, np.array([184, 66])*s))
green_outline.extend(bezier_curve(np.array([184, 66])*s, np.array([220, 126])*s, np.array([254, 180])*s, np.array([272, 254])*s))
green_outline.extend(bezier_curve(np.array([272, 254])*s, np.array([304, 190])*s, np.array([360, 130])*s, np.array([448, 64])*s))
green_outline.extend(bezier_curve(np.array([448, 64])*s, np.array([456, 56])*s, np.array([464, 58])*s, np.array([466, 66])*s))

green_poly = np.array(green_outline, dtype=np.int32)
green_mask = np.zeros((size, size), dtype=np.uint8)
cv2.fillPoly(green_mask, [green_poly], 255, lineType=cv2.LINE_AA)

y_min_g, y_max_g = np.min(green_poly[:, 1]), np.max(green_poly[:, 1])
h_green = max(y_max_g - y_min_g, 1)
y_factors_g = np.clip((y_indices - y_min_g) / h_green, 0, 1)

green_top = np.array([34, 197, 94])   # #22C55E
green_bot = np.array([21, 128, 61])   # #15803D
for c in range(3):
    grad_col = green_top[c] * (1 - y_factors_g) + green_bot[c] * y_factors_g
    master[:, :, c] = np.where(green_mask > 0, grad_col[:, None], master[:, :, c])
master[:, :, 3] = np.maximum(master[:, :, 3], green_mask)

final_img = Image.fromarray(master)

# Generate multi-scale Full HD exports
hd_2048 = final_img.resize((2048, 2048), Image.Resampling.LANCZOS)
hd_1024 = final_img.resize((1024, 1024), Image.Resampling.LANCZOS)
hd_512  = final_img.resize((512, 512), Image.Resampling.LANCZOS)

hd_2048.save('public/images/logo/valmeeki_emblem_2048.png', 'PNG', optimize=True)
hd_1024.save('public/images/logo/valmeeki_emblem_v3.png', 'PNG', optimize=True)
hd_1024.save('public/images/logo/valmeeki_emblem.png', 'PNG', optimize=True)
hd_1024.save('public/images/logo/valmeeki_emblem_transparent.png', 'PNG', optimize=True)
hd_512.save('public/images/logo/valmeeki_emblem_512.png', 'PNG', optimize=True)
hd_1024.save('public/logo.png', 'PNG', optimize=True)

print("Master Full HD Logo generated successfully across all formats (SVG + 2048px + 1024px)!")
