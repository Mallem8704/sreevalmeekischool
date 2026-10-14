import os
import shutil
import json
import cv2
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance

TARGET_IMAGES = [
    # 1. School Events (12)
    'public/images/school/school-event-1.jpg',
    'public/images/school/school-event-2.jpg',
    'public/images/school/school-event-3.jpg',
    'public/images/school/school-event-4.jpg',
    'public/images/school/school-event-5.jpg',
    'public/images/school/school-event-6.jpg',
    'public/images/school/school-event-7.jpg',
    'public/images/school/school-event-8.jpg',
    'public/images/school/school-event-9.jpg',
    'public/images/school/school-event-10.jpg',
    'public/images/school/school-event-11.jpg',
    'public/images/school/school-event-12.jpg',
    # 2. Sports (18)
    'public/images/sports/aca_inter_school_cricket_champions.jpg',
    'public/images/sports/ap_state_u13_futsal_championship_2019.jpg',
    'public/images/sports/athletics_gold_podium_presentation.jpg',
    'public/images/sports/athletics_podium_ceremony.jpg',
    'public/images/sports/athletics_podium_presentation_ceremony.jpg',
    'public/images/sports/cricket_match_pitch_umpire_toss.jpg',
    'public/images/sports/futsal_state_champions.jpg',
    'public/images/sports/girinath_reddy_ranji_cricket_action.jpg',
    'public/images/sports/girinath_reddy_with_ms_dhoni.jpg',
    'public/images/sports/girinath_reddy_with_virat_kohli.jpg',
    'public/images/sports/girls_kho_kho_tournament.jpg',
    'public/images/sports/relay_sprint_champions.jpg',
    'public/images/sports/sports_trophy_winners_felicitation.jpg',
    'public/images/sports/valmeeki_all_round_championship_girls_boys.jpg',
    'public/images/sports/valmeeki_all_round_championship_grand_celebration.jpg',
    'public/images/sports/valmeeki_boys_champions_2019.jpg',
    'public/images/sports/valmeeki_cricket_squad_field_celebration.jpg',
    'public/images/sports/valmeeki_girls_champions_2019.jpg',
    # 3. Academic Systems (6)
    'public/images/academic_systems/system_01_foundations.jpg',
    'public/images/academic_systems/system_02_faculty.jpg',
    'public/images/academic_systems/system_03_iit_foundation.jpg',
    'public/images/academic_systems/system_04_olympiad.jpg',
    'public/images/academic_systems/system_05_spoken_english.jpg',
    'public/images/academic_systems/system_06_discipline.jpg',
    # 4. Learning Flow (5)
    'public/images/learning/step_01_understand.jpg',
    'public/images/learning/step_02_practice.jpg',
    'public/images/learning/step_03_explore.jpg',
    'public/images/learning/step_04_improve.jpg',
    'public/images/learning/step_05_achieve.jpg',
    # 5. Achievements (2)
    'public/images/achievements/ssc_2026_felicitation_ceremony.jpg',
    'public/images/achievements/ssc_2026_felicitation_hero.jpg'
]

BACKUP_ROOT = 'public/images_backup'

def get_laplacian_variance(image_path):
    gray = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    if gray is None:
        return 0.0
    return float(cv2.Laplacian(gray, cv2.CV_64F).var())

def main():
    print("=" * 100)
    print("STARTING FULL HD ENHANCEMENT FOR EVENTS, SPORTS, ACADEMIC SYSTEMS & ACHIEVEMENTS")
    print("=" * 100)

    results = []

    for idx, rel_path in enumerate(TARGET_IMAGES, 1):
        if not os.path.exists(rel_path):
            print(f"[{idx:02d}/43] [ERROR] File not found: {rel_path}")
            continue

        # 1. Backup original image if not already backed up
        backup_path = os.path.join(BACKUP_ROOT, rel_path.replace('public/images/', ''))
        os.makedirs(os.path.dirname(backup_path), exist_ok=True)
        if not os.path.exists(backup_path):
            shutil.copy2(rel_path, backup_path)
            print(f"Backed up: {rel_path} -> {backup_path}")

        # 2. Before metrics
        with Image.open(backup_path) as orig_pil:
            orig_w, orig_h = orig_pil.size
        orig_size_kb = os.path.getsize(backup_path) / 1024.0
        before_lap_var = get_laplacian_variance(backup_path)

        # 3. Load image for processing
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

        # 5. Apply unsharp masking (radius=2, percent=135, threshold=3)
        img = img.filter(ImageFilter.UnsharpMask(radius=2, percent=135, threshold=3))

        # 6. Enhance contrast (1.06)
        img = ImageEnhance.Contrast(img).enhance(1.06)

        # 7. Enhance vibrancy / color (1.05)
        img = ImageEnhance.Color(img).enhance(1.05)

        # 8. Save with high quality (quality=95, subsampling=0)
        img.save(rel_path, format="JPEG", quality=95, subsampling=0)

        # 9. Verify readability
        with Image.open(rel_path) as verified_pil:
            verified_pil.verify()

        # 10. After metrics
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

        print(f"[{idx:02d}/43] Enhanced: {os.path.basename(rel_path):<45} | {orig_w}x{orig_h} -> {after_w}x{after_h} | Sharpness: {before_lap_var:.1f} -> {after_lap_var:.1f} (+{sharpness_change:.1f}%)")

    # Update metadata.json for school events if it exists
    metadata_path = 'public/images/school/metadata.json'
    if os.path.exists(metadata_path):
        try:
            with open(metadata_path, 'r', encoding='utf-8') as f:
                meta = json.load(f)
            for item in meta:
                fp = os.path.join('public', item['file'].lstrip('/'))
                if os.path.exists(fp):
                    item['size'] = os.path.getsize(fp)
            with open(metadata_path, 'w', encoding='utf-8') as f:
                json.dump(meta, f, indent=2)
            print("Updated public/images/school/metadata.json with new file sizes.")
        except Exception as e:
            print(f"Notice: metadata.json update skipped: {e}")

    # Summary table
    print("\n" + "=" * 125)
    print(f"{'#':<3} | {'Image Filename':<45} | {'Before Res':<11} | {'After Res (HD)':<14} | {'Size KB':<18} | {'Sharpness (Laplacian)':<24}")
    print("-" * 125)
    for r in results:
        fname = os.path.basename(r['path'])
        size_str = f"{r['before_size']:.0f}K -> {r['after_size']:.0f}K"
        lap_str = f"{r['before_lap']:.1f} -> {r['after_lap']:.1f} (+{r['sharpness_gain']:.1f}%)"
        print(f"{r['index']:<3} | {fname:<45} | {r['before_res']:<11} | {r['after_res']:<14} | {size_str:<18} | {lap_str:<24}")
    print("=" * 125)
    print(f"Total processed: {len(results)}/43 images successfully enhanced into Full HD quality!")

if __name__ == '__main__':
    main()
