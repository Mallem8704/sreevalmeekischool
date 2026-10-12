import os
import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

user_folder = r"C:\Users\malle\.gemini\antigravity\brain\69dbf08b-9995-44dc-85e9-ac4dca234bdb\.user_uploaded"
output_dir = r"public\images\sports"
os.makedirs(output_dir, exist_ok=True)

images_meta = [
    {
        "src": "media_1791779425579.jpg",
        "out": "girinath_reddy_ranji_cricket_action.jpg",
        "target_w": 1200
    },
    {
        "src": "media_1791779433387.jpg",
        "out": "girinath_reddy_with_ms_dhoni.jpg",
        "target_w": 1200
    },
    {
        "src": "media_1791779493722.jpg",
        "out": "girinath_reddy_with_virat_kohli.jpg",
        "target_w": 1200
    },
    {
        "src": "media_1791779504382.jpg",
        "out": "valmeeki_all_round_championship_girls_boys.jpg",
        "target_w": 1440
    },
    {
        "src": "media_1791779512784.jpg",
        "out": "valmeeki_all_round_championship_grand_celebration.jpg",
        "target_w": 1440
    }
]

for item in images_meta:
    src_path = os.path.join(user_folder, item["src"])
    out_path = os.path.join(output_dir, item["out"])
    
    img_bgr = cv2.imread(src_path)
    if img_bgr is None:
        print("Error reading:", src_path)
        continue
    
    # 1. Convert BGR to RGB for PIL processing
    img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(img_rgb)
    
    # 2. Enhance color vibrance (1.12x)
    color_enhancer = ImageEnhance.Color(pil_img)
    pil_img = color_enhancer.enhance(1.12)
    
    # 3. Enhance contrast (1.08x)
    contrast_enhancer = ImageEnhance.Contrast(pil_img)
    pil_img = contrast_enhancer.enhance(1.08)
    
    # 4. Apply subtle unsharp mask sharpening
    pil_img = pil_img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=115, threshold=3))
    
    # 5. High-quality upscale with Lanczos
    orig_w, orig_h = pil_img.size
    target_w = item["target_w"]
    target_h = int(orig_h * (target_w / orig_w))
    pil_img = pil_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # 6. Save as optimized progressive JPEG
    pil_img.save(out_path, "JPEG", quality=92, optimize=True, progressive=True)
    print("Successfully processed:", item["out"], f"({target_w}x{target_h})")

print("All 5 photos successfully enhanced and saved to public/images/sports!")
