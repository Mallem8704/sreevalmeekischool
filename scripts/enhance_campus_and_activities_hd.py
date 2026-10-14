import os
import shutil
import cv2
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

TARGET_IMAGES = [
    # Campus images (17)
    'public/images/campus/campus_drone_aerial.jpg',
    'public/images/campus/playground_drone_aerial.jpg',
    'public/images/campus/high_school_10th_block.jpg',
    'public/images/campus/techno_block_entrance.jpg',
    'public/images/campus/techno_block_wide.jpg',
    'public/images/campus/olympiad_block_corridor.jpg',
    'public/images/campus/smart_learning_panel.jpg',
    'public/images/campus/digital_classroom.jpg',
    'public/images/campus/science_lab_faculty.jpg',
    'public/images/campus/classroom_interaction.jpg',
    'public/images/campus/transport_fleet_buses.jpg',
    'public/images/campus/transport_buses_angle.jpg',
    'public/images/campus/poster_school_bus.jpg',
    'public/images/campus/school_entrance_gate.jpg',
    'public/images/campus/sports_cricket_ground.jpg',
    'public/images/campus/yoga_assembly.jpg',
    'public/images/campus/cultural_dance_stage.jpg',
    # Activity images (5)
    'public/images/activities/agricultural_nursery_field_study.jpg',
    'public/images/activities/annual_day_stage_performance_pyramid.jpg',
    'public/images/activities/botany_plant_science_investigation.jpg',
    'public/images/activities/horticulture_greenhouse_learning.jpg',
    'public/images/activities/telugu_bhasha_dinotsavam_celebration.jpg'
]

BACKUP_ROOT = 'public/images_backup'

def get_laplacian_variance(image_path):
    gray = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    if gray is None:
        return 0.0
    return float(cv2.Laplacian(gray, cv2.CV_64F).var())

def main():
    print("=" * 90)
    print("STARTING FULL HD ENHANCEMENT FOR CAMPUS & ACTIVITIES IMAGES")
    print("=" * 90)
    
    # Ensure backup directory exists
    os.makedirs(os.path.join(BACKUP_ROOT, 'campus'), exist_ok=True)
    os.makedirs(os.path.join(BACKUP_ROOT, 'activities'), exist_ok=True)

    results = []

    for idx, rel_path in enumerate(TARGET_IMAGES, 1):
        if not os.path.exists(rel_path):
            print(f"[MISSING] {rel_path} does not exist!")
            continue

        # 1. Backup original image if not already backed up
        backup_path = os.path.join(BACKUP_ROOT, rel_path.replace('public/images/', ''))
        os.makedirs(os.path.dirname(backup_path), exist_ok=True)
        if not os.path.exists(backup_path):
            shutil.copy2(rel_path, backup_path)
            print(f"Backed up {rel_path} -> {backup_path}")

        # 2. Measure before metrics
        with Image.open(backup_path) as orig_pil:
            orig_w, orig_h = orig_pil.size
            orig_mode = orig_pil.mode
        
        orig_size_kb = os.path.getsize(backup_path) / 1024.0
        before_lap_var = get_laplacian_variance(backup_path)

        # 3. Open image for processing
        img = Image.open(backup_path)
        if img.mode != 'RGB':
            img = img.convert('RGB')

        # 4. Upscale using Lanczos if longest edge < 1920px
        longest_edge = max(orig_w, orig_h)
        if longest_edge < 1920:
            scale = 1920.0 / longest_edge
            target_w = int(round(orig_w * scale))
            target_h = int(round(orig_h * scale))
            img = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        else:
            target_w, target_h = orig_w, orig_h

        # 5. Smart unsharp masking for crisp details
        # brings out architectural lines, classroom boards, signboards, leaves, bus details
        img = img.filter(ImageFilter.UnsharpMask(radius=2, percent=140, threshold=3))

        # 6. Contrast enhancement (1.06x)
        img = ImageEnhance.Contrast(img).enhance(1.06)

        # 7. Sharpness enhancement (1.15x)
        img = ImageEnhance.Sharpness(img).enhance(1.15)

        # 8. Save with high quality (quality=95, subsampling=0)
        img.save(rel_path, format="JPEG", quality=95, subsampling=0)

        # 9. Verify readability and measure after metrics
        with Image.open(rel_path) as verified_pil:
            verified_pil.verify()
        
        # Re-open after verify() to get properties
        after_img = Image.open(rel_path)
        after_w, after_h = after_img.size
        after_size_kb = os.path.getsize(rel_path) / 1024.0
        after_lap_var = get_laplacian_variance(rel_path)

        sharpness_change = ((after_lap_var - before_lap_var) / before_lap_var * 100.0) if before_lap_var > 0 else 0.0

        results.append({
            'index': idx,
            'path': rel_path,
            'before_res': f"{orig_w}x{orig_h}",
            'after_res': f"{after_w}x{after_h}",
            'before_size': orig_size_kb,
            'after_size': after_size_kb,
            'before_lap': before_lap_var,
            'after_lap': after_lap_var,
            'sharpness_gain': sharpness_change
        })

        print(f"[{idx:02d}/22] Enhanced: {os.path.basename(rel_path)}")
        print(f"       Res: {orig_w}x{orig_h} -> {after_w}x{after_h} | Sharpness: {before_lap_var:.1f} -> {after_lap_var:.1f} (+{sharpness_change:.1f}%)")

    print("\n" + "=" * 115)
    print(f"{'#':<3} | {'Image Filename':<40} | {'Before Res':<11} | {'After Res (HD)':<14} | {'Size KB':<15} | {'Sharpness (Laplacian)':<22}")
    print("-" * 115)
    for r in results:
        fname = os.path.basename(r['path'])
        size_str = f"{r['before_size']:.0f}K -> {r['after_size']:.0f}K"
        lap_str = f"{r['before_lap']:.1f} -> {r['after_lap']:.1f} (+{r['sharpness_gain']:.1f}%)"
        print(f"{r['index']:<3} | {fname:<40} | {r['before_res']:<11} | {r['after_res']:<14} | {size_str:<15} | {lap_str:<22}")
    print("=" * 115)
    print(f"Total processed: {len(results)}/22 images successfully enhanced into Full HD quality!")

if __name__ == '__main__':
    main()
