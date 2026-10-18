import os
import subprocess
from PIL import Image

def run():
    print("=== Step 1: Generating Master Academic Crest SVG ===")
    from generate_favicons import generate_academic_emblem_svg
    svg_content = generate_academic_emblem_svg()
    
    svg_path = os.path.abspath("public/images/logo/valmeeki_emblem.svg")
    os.makedirs(os.path.dirname(svg_path), exist_ok=True)
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Master SVG saved to: {svg_path}")

    print("\n=== Step 2: Rendering PNG Assets with Sharp ===")
    # Run node scripts/build_favicons.js
    node_res = subprocess.run(["node", "scripts/build_favicons.js"], capture_output=True, text=True)
    print("Node output:", node_res.stdout)
    if node_res.returncode != 0:
        print("Node error:", node_res.stderr)
        raise RuntimeError("Sharp build failed")

    print("\n=== Step 3: Generating Multi-Resolution ICO Files ===")
    # Load 1024x1024 master logo
    master_img = Image.open("public/logo.png").convert("RGBA")
    
    ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    
    # Save to public/favicon.ico
    public_ico_path = "public/favicon.ico"
    master_img.save(public_ico_path, format="ICO", sizes=ico_sizes)
    print(f"Saved {public_ico_path} with sizes: {ico_sizes}")

    # Save to src/app/favicon.ico
    src_app_ico_path = "src/app/favicon.ico"
    master_img.save(src_app_ico_path, format="ICO", sizes=ico_sizes)
    print(f"Saved {src_app_ico_path} with sizes: {ico_sizes}")

    # Verify both ICOs
    for p in [public_ico_path, src_app_ico_path]:
        im = Image.open(p)
        info_sizes = getattr(im, 'info', {}).get('sizes')
        print(f"Verified {p}: {info_sizes}, file size: {os.path.getsize(p)} bytes")

    print("\n=== Step 4: Updating Secondary Logo Files for Consistency ===")
    # 2048px
    im_2048 = master_img.resize((2048, 2048), Image.Resampling.LANCZOS)
    im_2048.save("public/images/logo/valmeeki_emblem_2048.png", "PNG", optimize=True)
    
    # 1024px
    master_img.save("public/images/logo/valmeeki_emblem.png", "PNG", optimize=True)
    master_img.save("public/images/logo/valmeeki_emblem_transparent.png", "PNG", optimize=True)
    master_img.save("public/images/logo/valmeeki_emblem_v3.png", "PNG", optimize=True)

    # 512px
    im_512 = master_img.resize((512, 512), Image.Resampling.LANCZOS)
    im_512.save("public/images/logo/valmeeki_emblem_512.png", "PNG", optimize=True)

    # 256px
    im_256 = master_img.resize((256, 256), Image.Resampling.LANCZOS)
    im_256.save("public/logo-256.png", "PNG", optimize=True)
    im_256.save("public/logo-clean.png", "PNG", optimize=True)
    im_256.save("public/images/logo/valmeeki_emblem_v2_256.png", "PNG", optimize=True)

    print("\n=== Step 5: Generating public/site.webmanifest ===")
    manifest_content = '''{
  "name": "Sree Valmeeki High School",
  "short_name": "Valmeeki",
  "description": "Sree Valmeeki E.M School – Nursery to 10th Class | English Medium School in Kadiri",
  "icons": [
    {
      "src": "/favicon-16x16.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "/favicon-32x32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "/favicon-48x48.png",
      "sizes": "48x48",
      "type": "image/png"
    },
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#0A1628",
  "background_color": "#FDFBF7",
  "display": "standalone",
  "start_url": "/"
}
'''
    with open("public/site.webmanifest", "w", encoding="utf-8") as f:
        f.write(manifest_content)
    print("Saved public/site.webmanifest")

    print("\nAll brand and favicon assets built successfully!")

if __name__ == '__main__':
    run()
