import os

def generate_academic_emblem_svg():
    return '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
  <defs>
    <!-- Royal Navy Shield Background Gradient -->
    <linearGradient id="shieldNavy" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0E223E" />
      <stop offset="45%" stop-color="#0A1628" />
      <stop offset="100%" stop-color="#050B14" />
    </linearGradient>

    <!-- Metallic Royal Gold Linear -->
    <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE895" />
      <stop offset="20%" stop-color="#E6BF65" />
      <stop offset="48%" stop-color="#FCD34D" />
      <stop offset="75%" stop-color="#C59330" />
      <stop offset="100%" stop-color="#8F6317" />
    </linearGradient>

    <!-- Warm Radiant Highlight Gold -->
    <linearGradient id="goldBright" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFDF0" />
      <stop offset="30%" stop-color="#FDE047" />
      <stop offset="75%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>

    <!-- Torch Flame Outer Gradient -->
    <linearGradient id="flameOuter" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#D97706" />
      <stop offset="25%" stop-color="#F59E0B" />
      <stop offset="65%" stop-color="#FBBF24" />
      <stop offset="100%" stop-color="#FEF08A" />
    </linearGradient>

    <!-- Torch Flame Brilliant Core Glow -->
    <linearGradient id="flameCore" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#FDE047" />
      <stop offset="50%" stop-color="#FEF9C3" />
      <stop offset="100%" stop-color="#FFFFFF" />
    </linearGradient>

    <!-- Book Page Ivory Parchment Gradient -->
    <linearGradient id="bookPage" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ECE5D6" />
      <stop offset="16%" stop-color="#FAF8F2" />
      <stop offset="48%" stop-color="#FFFFFF" />
      <stop offset="50%" stop-color="#D8CFBD" />
      <stop offset="52%" stop-color="#FFFFFF" />
      <stop offset="84%" stop-color="#FAF8F2" />
      <stop offset="100%" stop-color="#ECE5D6" />
    </linearGradient>

    <!-- Soft Ambient Crest Shadow -->
    <filter id="crestShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000000" flood-opacity="0.30" />
    </filter>

    <!-- Golden Flame Glow -->
    <filter id="flameGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#FDE047" flood-opacity="0.6" />
    </filter>
  </defs>

  <g filter="url(#crestShadow)">
    <!-- 1. MASTER SHIELD BODY (Classic Oxford/Cambridge Curvature) -->
    <path d="M 104 36 
             H 408 
             C 434 36, 452 54, 452 80 
             V 268 
             C 452 364, 370 436, 256 474 
             C 142 436, 60 364, 60 268 
             V 80 
             C 60 54, 78 36, 104 36 Z" 
          fill="url(#shieldNavy)" 
          stroke="url(#goldMetallic)" 
          stroke-width="12" 
          stroke-linejoin="round" />

    <!-- Secondary Inset Gold Pinstripe (Dashed Filigree) -->
    <path d="M 112 50 
             H 400 
             C 424 50, 438 64, 438 86 
             V 264 
             C 438 350, 360 420, 256 456 
             C 152 420, 74 350, 74 264 
             V 86 
             C 74 64, 88 50, 112 50 Z" 
          fill="none" 
          stroke="url(#goldMetallic)" 
          stroke-width="2.5" 
          stroke-dasharray="6 4"
          opacity="0.75" />

    <!-- Third Inset Solid Gold Border -->
    <path d="M 120 62 
             H 392 
             C 412 62, 424 74, 424 92 
             V 258 
             C 424 338, 352 406, 256 440 
             C 160 406, 88 338, 88 258 
             V 92 
             C 88 74, 100 62, 120 62 Z" 
          fill="none" 
          stroke="url(#goldMetallic)" 
          stroke-width="1.75" 
          opacity="0.9" />

    <!-- 2. LAUREL WREATH OF ACADEMIC EXCELLENCE (Left & Right Flanks) -->
    <!-- Left Laurel Branch -->
    <g id="leftLaurel" fill="url(#goldMetallic)" stroke="#8F6317" stroke-width="0.75">
      <!-- Stem -->
      <path d="M 118 376 C 96 318, 97 232, 126 154 C 132 138, 142 122, 154 108" 
            fill="none" stroke="url(#goldMetallic)" stroke-width="3" stroke-linecap="round" />
      
      <!-- Leaf Pairs along stem -->
      <!-- Cluster 1 (Bottom) -->
      <path d="M 114 368 C 102 364, 94 350, 100 340 C 106 344, 114 354, 117 364 Z" />
      <path d="M 120 358 C 128 348, 140 344, 142 334 C 138 342, 128 352, 122 356 Z" />
      
      <!-- Cluster 2 -->
      <path d="M 104 330 C 90 324, 82 308, 90 296 C 97 302, 104 314, 107 326 Z" />
      <path d="M 110 316 C 120 306, 132 300, 134 288 C 128 298, 118 308, 112 314 Z" />

      <!-- Cluster 3 (Mid) -->
      <path d="M 98 284 C 84 276, 78 258, 86 246 C 94 252, 100 266, 102 278 Z" />
      <path d="M 106 270 C 116 258, 128 252, 130 240 C 124 250, 114 260, 108 266 Z" />

      <!-- Cluster 4 -->
      <path d="M 100 234 C 87 224, 82 206, 92 194 C 98 202, 104 216, 105 228 Z" />
      <path d="M 108 218 C 120 206, 130 198, 132 186 C 126 196, 116 208, 110 214 Z" />

      <!-- Cluster 5 (Upper) -->
      <path d="M 108 182 C 98 170, 96 152, 106 140 C 112 148, 116 162, 115 174 Z" />
      <path d="M 118 166 C 130 154, 140 144, 140 132 C 134 142, 126 154, 120 162 Z" />

      <!-- Cluster 6 (Top Tip) -->
      <path d="M 126 134 C 120 120, 122 102, 134 92 C 138 102, 138 116, 134 128 Z" />
      <path d="M 138 118 C 150 106, 160 94, 158 82 C 152 92, 144 104, 140 114 Z" />
      <!-- Crown Leaf -->
      <path d="M 154 104 C 160 92, 172 82, 178 74 C 174 86, 166 98, 156 104 Z" />
    </g>

    <!-- Right Laurel Branch (Mirrored via transform) -->
    <use href="#leftLaurel" transform="translate(512, 0) scale(-1, 1)" />

    <!-- 3. OPEN BOOK OF KNOWLEDGE (Parchment & Multi-page Tome) -->
    <!-- Book Base / Cover Rim in Deep Gold & Shadow -->
    <path d="M 256 364
             C 214 354, 162 344, 132 352
             L 128 344
             C 160 334, 216 344, 256 354
             C 296 344, 352 334, 384 344
             L 380 352
             C 350 344, 298 354, 256 364 Z"
          fill="#8F6317" stroke="#452B05" stroke-width="1.5" />

    <!-- Pages Block Depth (3D Page Thickness) -->
    <path d="M 132 352
             C 164 344, 216 354, 256 364
             C 296 354, 348 344, 380 352
             L 384 336
             C 350 326, 296 338, 256 348
             C 216 338, 162 326, 128 336 Z"
          fill="#DDD4BE" stroke="#C5B896" stroke-width="1" />

    <!-- Main Open Top Pages -->
    <path d="M 256 346
             C 218 334, 164 322, 130 332
             C 126 312, 126 294, 132 278
             C 168 268, 222 280, 256 292
             C 290 280, 344 268, 380 278
             C 386 294, 386 312, 382 332
             C 348 322, 294 334, 256 346 Z"
          fill="url(#bookPage)" 
          stroke="url(#goldMetallic)" 
          stroke-width="2.5" 
          stroke-linejoin="round" />

    <!-- Spine Centerfold Seam Shadow -->
    <path d="M 256 292 L 256 346" stroke="#8F6317" stroke-width="2.5" stroke-linecap="round" />

    <!-- Page Text Lines / Knowledge Engravings (Left Page) -->
    <path d="M 152 288 C 180 282, 214 290, 242 298" stroke="#B48328" stroke-width="1.75" stroke-linecap="round" opacity="0.75" />
    <path d="M 148 300 C 178 294, 214 302, 242 310" stroke="#B48328" stroke-width="1.75" stroke-linecap="round" opacity="0.75" />
    <path d="M 146 312 C 176 306, 214 314, 242 322" stroke="#B48328" stroke-width="1.75" stroke-linecap="round" opacity="0.75" />
    <path d="M 150 324 C 178 318, 212 326, 238 333" stroke="#B48328" stroke-width="1.75" stroke-linecap="round" opacity="0.75" />

    <!-- Page Text Lines (Right Page) -->
    <path d="M 270 298 C 298 290, 332 282, 360 288" stroke="#B48328" stroke-width="1.75" stroke-linecap="round" opacity="0.75" />
    <path d="M 270 310 C 298 302, 334 294, 364 300" stroke="#B48328" stroke-width="1.75" stroke-linecap="round" opacity="0.75" />
    <path d="M 270 322 C 298 314, 336 306, 366 312" stroke="#B48328" stroke-width="1.75" stroke-linecap="round" opacity="0.75" />
    <path d="M 274 333 C 300 326, 334 318, 362 324" stroke="#B48328" stroke-width="1.75" stroke-linecap="round" opacity="0.75" />

    <!-- Bookmark Ribbon Hanging From Spine Base -->
    <path d="M 252 346 
             L 252 384 
             L 256 380 
             L 260 384 
             L 260 346 Z" 
          fill="url(#goldBright)" 
          stroke="#8F6317" 
          stroke-width="1" />

    <!-- 4. TORCH OF WISDOM & LEARNING -->
    <g id="torch">
      <!-- Classical Fluted Stem -->
      <path d="M 249 244 
               L 253 294 
               L 259 294 
               L 263 244 Z" 
            fill="url(#goldBright)" 
            stroke="#8F6317" 
            stroke-width="1.5" />

      <!-- Horizontal Ribs on Torch Handle -->
      <line x1="250" y1="256" x2="262" y2="256" stroke="#8F6317" stroke-width="1.5" />
      <line x1="251" y1="268" x2="261" y2="268" stroke="#8F6317" stroke-width="1.5" />
      <line x1="252" y1="280" x2="260" y2="280" stroke="#8F6317" stroke-width="1.5" />

      <!-- Torch Brazier / Bowl Base -->
      <path d="M 242 244 
               C 242 248, 270 248, 270 244 
               L 274 230 
               C 278 228, 282 224, 284 218 
               L 228 218 
               C 230 224, 234 228, 238 230 Z" 
            fill="url(#goldBright)" 
            stroke="#8F6317" 
            stroke-width="2" 
            stroke-linejoin="round" />

      <!-- Brazier Rim Gallery Collar -->
      <rect x="224" y="212" width="64" height="6.5" rx="2" 
            fill="url(#goldBright)" 
            stroke="#8F6317" 
            stroke-width="1.5" />

      <!-- Outer Radiant Flame -->
      <path d="M 234 212
               C 224 194, 220 176, 232 160
               C 236 154, 242 150, 244 142
               C 246 134, 240 126, 244 114
               C 248 104, 256 92, 256 92
               C 256 92, 264 104, 268 114
               C 272 126, 266 134, 268 142
               C 270 150, 276 154, 280 160
               C 292 176, 288 194, 278 212
               C 268 210, 244 210, 234 212 Z"
            fill="url(#flameOuter)" 
            stroke="#EA580C" 
            stroke-width="1.5" 
            filter="url(#flameGlow)" />

      <!-- Flame Inner Brilliant Luminous Core -->
      <path d="M 242 212
               C 238 198, 238 186, 244 174
               C 248 166, 252 160, 252 148
               C 252 142, 256 126, 256 126
               C 256 126, 260 142, 260 148
               C 260 160, 264 166, 268 174
               C 274 186, 274 198, 270 212 Z"
            fill="url(#flameCore)" />
    </g>

    <!-- 5. RADIANT STARS OF EXCELLENCE (DISCIPLINE • KNOWLEDGE • CHARACTER) -->
    <!-- Center Prominent Star -->
    <g transform="translate(256, 74)">
      <!-- Light half facets -->
      <path d="M 0 -18 L 0 0 L 5 -5 Z" fill="#FFFDF0" />
      <path d="M 18 -4 L 0 0 L 8 5 Z" fill="#FFFDF0" />
      <path d="M 11 18 L 0 0 L 0 9 Z" fill="#FFFDF0" />
      <path d="M -11 18 L 0 0 L -8 5 Z" fill="#FFFDF0" />
      <path d="M -18 -4 L 0 0 L -5 -5 Z" fill="#FFFDF0" />
      <!-- Shadow half facets -->
      <path d="M 0 -18 L -5 -5 L 0 0 Z" fill="#D4A853" />
      <path d="M 18 -4 L 5 -5 L 0 0 Z" fill="#D4A853" />
      <path d="M 11 18 L 8 5 L 0 0 Z" fill="#D4A853" />
      <path d="M -11 18 L 0 9 L 0 0 Z" fill="#D4A853" />
      <path d="M -18 -4 L -8 5 L 0 0 Z" fill="#D4A853" />
      <polygon points="0,-18 5,-5 18,-4 8,5 11,18 0,9 -11,18 -8,5 -18,-4 -5,-5" 
               fill="none" stroke="#8F6317" stroke-width="0.75" />
    </g>

    <!-- Left Flanking Star -->
    <g transform="translate(194, 88) rotate(-14)">
      <polygon points="0,-12 3.5,-3.5 12,-2.5 5.5,3.5 7.5,12 0,6 -7.5,12 -5.5,3.5 -12,-2.5 -3.5,-3.5" 
               fill="url(#goldBright)" stroke="#8F6317" stroke-width="0.75" />
    </g>

    <!-- Right Flanking Star -->
    <g transform="translate(318, 88) rotate(14)">
      <polygon points="0,-12 3.5,-3.5 12,-2.5 5.5,3.5 7.5,12 0,6 -7.5,12 -5.5,3.5 -12,-2.5 -3.5,-3.5" 
               fill="url(#goldBright)" stroke="#8F6317" stroke-width="0.75" />
    </g>

    <!-- 6. FOUNDATION RIBBON SCROLL (EST. 1999) -->
    <g id="ribbonBanner">
      <!-- Ribbon Tails (Left Swallowtail) -->
      <path d="M 148 406 
               L 124 416 
               L 136 426 
               L 120 436 
               L 156 432 Z" 
            fill="#8F6317" stroke="#452B05" stroke-width="1" />

      <!-- Ribbon Tails (Right Swallowtail) -->
      <path d="M 364 406 
               L 388 416 
               L 376 426 
               L 392 436 
               L 356 432 Z" 
            fill="#8F6317" stroke="#452B05" stroke-width="1" />

      <!-- Main Ribbon Curved Body -->
      <path d="M 144 402 
               C 180 414, 220 418, 256 418 
               C 292 418, 332 414, 368 402 
               L 364 428 
               C 330 438, 292 442, 256 442 
               C 220 442, 182 438, 148 428 Z" 
            fill="url(#goldMetallic)" 
            stroke="#8F6317" 
            stroke-width="2" 
            stroke-linejoin="round" />

      <!-- Ribbon Highlight Line -->
      <path d="M 152 407 
               C 184 417, 220 421, 256 421 
               C 292 421, 328 417, 360 407" 
            fill="none" stroke="#FFFDF0" stroke-width="1" opacity="0.65" />

      <!-- Ribbon Inscription: EST. 1999 -->
      <text x="256" y="432" 
            text-anchor="middle" 
            font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Playfair Display', Georgia, serif" 
            font-size="15" 
            font-weight="900" 
            letter-spacing="3.5" 
            fill="#0A1628">EST. 1999</text>
    </g>

    <!-- Subtle Apex Jewel at Crest Bottom Tip -->
    <circle cx="256" cy="458" r="3.5" fill="url(#goldBright)" stroke="#8F6317" stroke-width="0.75" />
  </g>
</svg>
'''

if __name__ == '__main__':
    svg_content = generate_academic_emblem_svg()
    os.makedirs('public/images/logo', exist_ok=True)
    with open('public/images/logo/valmeeki_emblem.svg', 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print("Generated refined public/images/logo/valmeeki_emblem.svg")
