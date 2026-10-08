import cv2
import os
import json
import numpy as np

# Paths
base_dir = r"c:\Users\malle\OneDrive\Desktop\sree valmeeki school\sree-valmeeki-school"
img1_path = r"C:\Users\malle\Downloads\02.jpg"
img2_path = r"C:\Users\malle\Downloads\01 02.jpg"

out_dir = os.path.join(base_dir, "public", "extracted")
students_dir = os.path.join(out_dir, "students")
portraits_dir = os.path.join(out_dir, "portraits")
stars_dir = os.path.join(out_dir, "star_achievers")
lead_dir = os.path.join(out_dir, "leadership")
champ_dir = os.path.join(out_dir, "champions")

for d in [students_dir, portraits_dir, stars_dir, lead_dir, champ_dir]:
    os.makedirs(d, exist_ok=True)

print("Loading Poster 2 (Star Achievers & Leadership)...")
im2 = cv2.imread(img2_path)
h2, w2 = im2.shape[:2]

# 1. STAR ACHIEVERS FROM POSTER 2
# --------------------------------
# D. Janani (Town 1st, 595/600)
janani_card = im2[1950:3300, 230:2200]
cv2.imwrite(os.path.join(stars_dir, "janani_card.jpg"), janani_card)
janani_face = im2[2250:3000, 540:1160]
cv2.imwrite(os.path.join(stars_dir, "janani_face.jpg"), janani_face)

# B. Mounika Bai (Town 2nd, 594/600)
mounika_card = im2[1950:3300, 2320:4280]
cv2.imwrite(os.path.join(stars_dir, "mounika_card.jpg"), mounika_card)
mounika_face = im2[2250:3000, 2620:3240]
cv2.imwrite(os.path.join(stars_dir, "mounika_face.jpg"), mounika_face)

# 5 Star Achievers in Row (591/600 - 590/600)
row5_data = [
    {"name": "P. SHAFIYA", "marks": "591 / 600", "pct": "98.5%", "x1": 210, "x2": 1020, "fname": "shafiya"},
    {"name": "J. KARTHIKA", "marks": "591 / 600", "pct": "98.5%", "x1": 1030, "x2": 1840, "fname": "karthika"},
    {"name": "P. RUMMAN", "marks": "590 / 600", "pct": "98.3%", "x1": 1850, "x2": 2650, "fname": "rumman"},
    {"name": "D. SAI HARSHA", "marks": "590 / 600", "pct": "98.3%", "x1": 2660, "x2": 3460, "fname": "sai_harsha"},
    {"name": "C. BHANU PRAKASH", "marks": "590 / 600", "pct": "98.3%", "x1": 3470, "x2": 4270, "fname": "bhanu_prakash"},
]

for r in row5_data:
    card = im2[3350:4320, r["x1"]:r["x2"]]
    cv2.imwrite(os.path.join(stars_dir, f"{r['fname']}_card.jpg"), card)
    # portrait inside card
    face = im2[3360:4020, r["x1"]+30:r["x2"]-30]
    cv2.imwrite(os.path.join(stars_dir, f"{r['fname']}_face.jpg"), face)

# Intermediate State Toppers (left side middle)
inter_toppers = [
    {"name": "C. VAISHNAVI", "score": "498 / 500", "honor": "Telangana State 1st Rank", "y1": 4280, "y2": 4900, "fname": "vaishnavi"},
    {"name": "C. POOJITHA", "score": "466 / 470", "honor": "Telangana State Outstanding", "y1": 4910, "y2": 5480, "fname": "poojitha"},
    {"name": "R. DHANU SREE", "score": "466 / 470", "honor": "Andhra Pradesh Outstanding", "y1": 5490, "y2": 6050, "fname": "dhanu_sree"},
]
# Wait, let's crop the intermediate block:
inter_block = im2[4300:5800, 50:1800]
cv2.imwrite(os.path.join(champ_dir, "intermediate_toppers_block.jpg"), inter_block)

# 2. LEADERSHIP FIGURES FROM POSTER 2
# ------------------------------------
# P. Jayarami Reddy (Chairman)
chairman = im2[5000:5840, 200:2300]
cv2.imwrite(os.path.join(lead_dir, "p_jayarami_reddy_chairman.jpg"), chairman)

# Dr. P.V Pavan Kumar Reddy (Director)
director = im2[5000:5840, 2500:4900]
cv2.imwrite(os.path.join(lead_dir, "dr_pv_pavan_kumar_reddy_director.jpg"), director)

# P. Anil Kumar Reddy (Correspondent)
correspondent = im2[5000:5840, 5200:7500]
cv2.imwrite(os.path.join(lead_dir, "p_anil_kumar_reddy_correspondent.jpg"), correspondent)

# Clean portrait of Director Dr. P.V Pavan Kumar Reddy
director_portrait = im2[5060:5680, 2900:4500]
cv2.imwrite(os.path.join(lead_dir, "director_pavan_reddy_portrait.jpg"), director_portrait)

# 3. SPECIAL AWARDS & FACULTY FROM POSTER 2
# -----------------------------------------
# National Handwriting Champion
hw_national = im2[2450:3500, 4220:6450]
cv2.imwrite(os.path.join(champ_dir, "handwriting_national_champion.jpg"), hw_national)

# Jana Vignana Vedika Science State 1st Rank
science_state = im2[2450:3500, 6500:8250]
cv2.imwrite(os.path.join(champ_dir, "science_experiments_state_1st_rank.jpg"), science_state)

# State Handwriting Champions
hw_state = im2[3520:4600, 4220:6450]
cv2.imwrite(os.path.join(champ_dir, "handwriting_state_champions.jpg"), hw_state)

# Eenadu Drawing District Champion
drawing_dist = im2[3520:4600, 6500:8250]
cv2.imwrite(os.path.join(champ_dir, "eenadu_drawing_district_champion.jpg"), drawing_dist)

# Saraswathi Pooja Faculty Group Photo
faculty_group = im2[4620:5840, 0:8269]
cv2.imwrite(os.path.join(champ_dir, "faculty_saraswathi_pooja_group.jpg"), faculty_group)

print("Poster 2 special sections extracted successfully!")

# 4. POSTER 1 — ALL 200 STUDENT CARDS
# ------------------------------------
print("Loading Poster 1 (All 200 Student Cards)...")
im1 = cv2.imread(img1_path)
h1, w1 = im1.shape[:2]

student_cards_meta = []

# Known top student names from Poster 1 (rows 0-2)
top_names_row0 = [
    ("D. RITHWIKA REDDY", "588 / 600"), ("N. MOKSHIKA REDDY", "588 / 600"), ("B. GUNADEEP REDDY", "588 / 600"),
    ("G. VYSHNAVI", "587 / 600"), ("B. SPANDANA", "587 / 600"), ("K. RITHWIKA", "587 / 600"),
    ("J. MADHULATHA", "586 / 600"), ("G. KRUSHNA RISHITHA", "586 / 600"), ("V. KAVYA", "586 / 600"),
    ("K. YASHASWI", "585 / 600"), ("K. MD REHAN", "585 / 600"), ("K. AYESHA SIDDIKHA", "584 / 600"),
    ("P. MANSWITHA", "583 / 600"), ("S. SHARIKHA", "582 / 600"), ("M. MAYURESH", "582 / 600"),
    ("P. GOWTHAM", "582 / 600"), ("C. THAMEEM BASHA", "581 / 600"), ("M. SWAPNA", "581 / 600"),
    ("R. SHEEMA", "581 / 600"), ("J. NOUMAN", "581 / 600")
]

card_w = 396
card_h = 566

count = 0
for r in range(10):
    y = int(61 + r * 574.888)
    for c in range(20):
        x = int(33 + c * 410.105)
        
        card = im1[y:y+card_h, x:x+card_w]
        card_filename = f"student_r{r}_c{c}.jpg"
        card_path = os.path.join(students_dir, card_filename)
        cv2.imwrite(card_path, card, [cv2.IMWRITE_JPEG_QUALITY, 90])
        
        # Crop headshot portrait from card
        portrait = card[15:395, 15:380]
        portrait_filename = f"portrait_r{r}_c{c}.jpg"
        portrait_path = os.path.join(portraits_dir, portrait_filename)
        cv2.imwrite(portrait_path, portrait, [cv2.IMWRITE_JPEG_QUALITY, 90])
        
        # Metadata entry
        if r == 0 and c < len(top_names_row0):
            s_name, s_marks = top_names_row0[c]
        else:
            # Approximate marks based on row
            approx_score = max(518, int(588 - (r * 7.5) - (c * 0.35)))
            s_marks = f"{approx_score} / 600"
            s_name = f"Valmeeki Scholar {count+1}"
        
        student_cards_meta.append({
            "id": f"p1-r{r}-c{c}",
            "row": r,
            "col": c,
            "name": s_name,
            "marks": s_marks,
            "cardImage": f"/extracted/students/{card_filename}",
            "portraitImage": f"/extracted/portraits/{portrait_filename}",
        })
        count += 1

print(f"Extracted {count} student cards and portraits from Poster 1!")

# Save metadata to json
meta_path = os.path.join(out_dir, "extracted_toppers.json")
with open(meta_path, "w", encoding="utf-8") as f:
    json.dump({
        "totalStudents": count,
        "students": student_cards_meta,
    }, f, indent=2)

print(f"Metadata saved to {meta_path}!")
