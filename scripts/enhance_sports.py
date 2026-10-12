import os
import cv2
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

user_folder = r"C:\Users\malle\.gemini\antigravity\brain\69dbf08b-9995-44dc-85e9-ac4dca234bdb\.user_uploaded"
output_dir = r"public\images\sports"
os.makedirs(output_dir, exist_ok=True)

images_meta = [
    {
        "src": "media_1791777222103.jpg",
        "out": "futsal_state_champions.jpg",
        "watermark": False,
        "target_w": 1440
    },
    {
        "src": "media_1791777256490.jpg",
        "out": "valmeeki_boys_champions_2019.jpg",
        "watermark": True,
        "target_w": 1440
    },
    {
        "src": "media_1791777120425.jpg",
        "out": "valmeeki_girls_champions_2019.jpg",
        "watermark": False,
        "target_w": 1440
    },
    {
        "src": "media_1791777105858.png",
        "out": "girls_kho_kho_tournament.jpg",
        "watermark": True,
        "target_w": 1440
    },
    {
        "src": "media_1791777090865.jpg",
        "out": "relay_sprint_champions.jpg",
        "watermark": True,
        "target_w": 1440
    },
    {
        "src": "media_1791777048629.jpg",
        "out": "athletics_gold_podium_presentation.jpg",
        "watermark": True,
        "target_w": 1440
    },
    {
        "src": "media_1791777139318.jpg",
        "out": "athletics_podium_ceremony.jpg",
        "watermark": True,
        "target_w": 1080  # portrait orientation (720x960)
    },
    {
        "src": "media_1791777269954.jpg",
        "out": "athletics_podium_presentation_ceremony.jpg",
        "watermark": True,
        "target_w": 1440
    }
]

def inpaint_bottom_left_watermark(img):
    h, w = img.shape[:2]
    # Watermark region is in the bottom 11% height and left 35% width
    y1, y2 = int(h * 0.89), h
    x1, x2 = 0, int(w * 0.35)
    
    crop = img[y1:y2, x1:x2]
    gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    
    # Bright white text/logos of Vivo camera watermark
    _, mask = cv2.threshold(gray, 215, 255, cv2.THRESH_BINARY)
    
    # Dilate mask slightly to cleanly encompass anti-aliased font edges
    kernel = np.ones((3, 3), np.uint8)
    mask = cv2.dilate(mask, kernel, iterations=2)
    
    # Inpaint using Telea fast marching method
    inpainted_crop = cv2.inpaint(crop, mask, inpaintRadius=4, flags=cv2.INPAINT_TELEA)
    
    res = img.copy()
    res[y1:y2, x1:x2] = inpainted_crop
    return res

for item in images_meta:
    src_path = os.path.join(user_folder, item["src"])
    out_path = os.path.join(output_dir, item["out"])
    
    img_bgr = cv2.imread(src_path)
    if img_bgr is None:
        print("Error reading:", src_path)
        continue
    
    # 1. Watermark removal if needed
    if item["watermark"]:
        img_bgr = inpaint_bottom_left_watermark(img_bgr)
        
    # 2. Convert BGR to RGB for PIL processing
    img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB)
    pil_img = Image.fromarray(img_rgb)
    
    # 3. Enhance color vibrance (1.12x)
    color_enhancer = ImageEnhance.Color(pil_img)
    pil_img = color_enhancer.enhance(1.12)
    
    # 4. Enhance contrast (1.08x)
    contrast_enhancer = ImageEnhance.Contrast(pil_img)
    pil_img = contrast_enhancer.enhance(1.08)
    
    # 5. Apply subtle unsharp mask sharpening
    pil_img = pil_img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=115, threshold=3))
    
    # 6. High-quality upscale with Lanczos
    orig_w, orig_h = pil_img.size
    target_w = item["target_w"]
    target_h = int(orig_h * (target_w / orig_w))
    pil_img = pil_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # 7. Save as optimized progressive JPEG
    pil_img.save(out_path, "JPEG", quality=92, optimize=True, progressive=True)
    print("Successfully processed:", item["out"], f"({target_w}x{target_h})")

print("All 8 sports images successfully enhanced and saved to public/images/sports!")
