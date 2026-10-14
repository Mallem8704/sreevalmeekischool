"""
Enhance Achievers, Leadership, Founder, and Foundation portraits and badges to Full HD.
Executes high-quality Lanczos resampling, face-safe sharpening, clarity/contrast enhancement,
and lossless/high-quality output saving (quality=95 for JPEG, optimize=True for PNG).
"""
import os
import sys
from PIL import Image, ImageFilter, ImageEnhance

# Directories to process
TARGET_DIRS = [
    r"public\extracted\star_achievers",
    r"public\images\leadership",
    r"public\images\founder",
    r"public\images\foundation"
]

BADGE_KEYWORDS = ["badge", "logo"]

def is_badge(filepath):
    filename = os.path.basename(filepath).lower()
    return any(k in filename for k in BADGE_KEYWORDS)

def enhance_image(filepath, backup_base=r"_backup_images_pre_hd"):
    # Read from backup to always preserve pure original data source
    rel_path = os.path.relpath(filepath)
    src_path = os.path.join(backup_base, rel_path)
    if not os.path.exists(src_path):
        src_path = filepath
        
    with Image.open(src_path) as orig_img:
        orig_w, orig_h = orig_img.size
        orig_mode = orig_img.mode
        ext = os.path.splitext(filepath)[1].lower()
        
        badge_mode = is_badge(filepath)
        is_document = "document" in os.path.basename(filepath).lower()
        
        # 1. Determine Upscaling factor: ensure min dimension >= 1200px (or target 1600px max)
        min_dim = min(orig_w, orig_h)
        target_min_dim = 1200
        
        if min_dim >= target_min_dim:
            # Already Full HD (e.g., 1970x1350 card)
            scale = 1.0
        else:
            scale = max(2.0, target_min_dim / float(min_dim))
            
        new_w = int(round(orig_w * scale))
        new_h = int(round(orig_h * scale))
        
        # Lanczos Resampling
        if scale > 1.0:
            resized_img = orig_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        else:
            resized_img = orig_img.copy()
            
        if badge_mode:
            # Badges and Logos: sharpen text and gold highlights so numbers and letters are crystal clear
            # Unsharp mask tailored for graphics & text
            sharpened = resized_img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=160, threshold=1))
            # Contrast enhancement
            contrasted = ImageEnhance.Contrast(sharpened).enhance(1.12)
            # Crisp text sharpness
            crisp = ImageEnhance.Sharpness(contrasted).enhance(1.30)
            # Vivid gold colors
            final_img = ImageEnhance.Color(crisp).enhance(1.06)
            profile_type = "BADGE / LOGO"
        elif is_document:
            # Historical document: crisp text clarity and contrast
            sharpened = resized_img.filter(ImageFilter.UnsharpMask(radius=1.5, percent=140, threshold=2))
            contrasted = ImageEnhance.Contrast(sharpened).enhance(1.10)
            final_img = ImageEnhance.Sharpness(contrasted).enhance(1.20)
            profile_type = "HISTORICAL DOCUMENT"
        else:
            # Portraits & Cards:
            # 2. Subtle face-safe sharpening: ImageFilter.UnsharpMask(radius=1.5, percent=120, threshold=2)
            sharpened = resized_img.filter(ImageFilter.UnsharpMask(radius=1.5, percent=120, threshold=2))
            # 3. Enhance clarity and contrast subtly preserving natural skin tones:
            # Contrast(img).enhance(1.05), Sharpness(img).enhance(1.1)
            contrasted = ImageEnhance.Contrast(sharpened).enhance(1.05)
            final_img = ImageEnhance.Sharpness(contrasted).enhance(1.10)
            profile_type = "PORTRAIT / ACHIEVER"
            
        # Ensure mode consistency
        if ext in ['.jpg', '.jpeg']:
            if final_img.mode != 'RGB':
                final_img = final_img.convert('RGB')
            final_img.save(filepath, format='JPEG', quality=95, optimize=True)
        elif ext == '.png':
            final_img.save(filepath, format='PNG', optimize=True)
        elif ext == '.webp':
            final_img.save(filepath, format='WEBP', quality=95)
        else:
            final_img.save(filepath)
            
        final_w, final_h = final_img.size
        final_size_kb = os.path.getsize(filepath) / 1024.0
        
        return {
            "file": os.path.basename(filepath),
            "dir": os.path.dirname(filepath),
            "orig_size": f"{orig_w}x{orig_h}",
            "new_size": f"{final_w}x{final_h}",
            "orig_mode": orig_mode,
            "final_mode": final_img.mode,
            "file_size_kb": f"{final_size_kb:.1f} KB",
            "profile": profile_type
        }

def main():
    results = []
    print("=" * 80)
    print("STARTING FULL HD ENHANCEMENT FOR SREE VALMEEKI SCHOOL PORTRAITS & ASSETS")
    print("=" * 80)
    
    for d in TARGET_DIRS:
        if not os.path.exists(d):
            print(f"Directory missing: {d}")
            continue
        print(f"\nProcessing directory: {d}")
        for fname in sorted(os.listdir(d)):
            ext = os.path.splitext(fname)[1].lower()
            if ext in ['.jpg', '.jpeg', '.png', '.webp']:
                fpath = os.path.join(d, fname)
                res = enhance_image(fpath)
                results.append(res)
                print(f" -> [{res['profile']}] {res['file']:45} | {res['orig_size']:10} -> {res['new_size']:10} | {res['file_size_kb']}")

    print("\n" + "=" * 80)
    print(f"ENHANCEMENT COMPLETE! Successfully processed {len(results)} images to Full HD.")
    print("=" * 80)

if __name__ == "__main__":
    main()
