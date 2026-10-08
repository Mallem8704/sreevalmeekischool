import cv2
import os
import json
import numpy as np

base_dir = r"c:\Users\malle\OneDrive\Desktop\sree valmeeki school\sree-valmeeki-school"
img1_path = r"C:\Users\malle\Downloads\02.jpg"
img2_path = r"C:\Users\malle\Downloads\01 02.jpg"

portraits_dir = os.path.join(base_dir, "public", "extracted", "portraits")
stars_dir = os.path.join(base_dir, "public", "extracted", "star_achievers")
champ_dir = os.path.join(base_dir, "public", "extracted", "champions")

os.makedirs(portraits_dir, exist_ok=True)
os.makedirs(stars_dir, exist_ok=True)
os.makedirs(champ_dir, exist_ok=True)

# =========================================================================
# 1. POSTER 2: STAR ACHIEVERS PERSON CROPS
# =========================================================================
print("Extracting pure person portraits from Poster 2...")
im2 = cv2.imread(img2_path)

# D. Janani (Town 1st, 595/600)
janani_person = im2[2275:2960, 575:1060]
cv2.imwrite(os.path.join(stars_dir, "janani_pure_person.jpg"), janani_person, [cv2.IMWRITE_JPEG_QUALITY, 95])
cv2.imwrite(os.path.join(stars_dir, "janani_face.jpg"), janani_person, [cv2.IMWRITE_JPEG_QUALITY, 95])

# B. Mounika Bai (Town 2nd, 594/600)
mounika_person = im2[2275:2960, 2650:3135]
cv2.imwrite(os.path.join(stars_dir, "mounika_pure_person.jpg"), mounika_person, [cv2.IMWRITE_JPEG_QUALITY, 95])
cv2.imwrite(os.path.join(stars_dir, "mounika_face.jpg"), mounika_person, [cv2.IMWRITE_JPEG_QUALITY, 95])

# 5 Star Achievers in Row (591/600 - 590/600)
row5 = [
    {"name": "shafiya", "x1": 210, "x2": 1020},
    {"name": "karthika", "x1": 1030, "x2": 1840},
    {"name": "rumman", "x1": 1850, "x2": 2650},
    {"name": "sai_harsha", "x1": 2660, "x2": 3460},
    {"name": "bhanu_prakash", "x1": 3470, "x2": 4270},
]

for item in row5:
    card = im2[3350:4320, item["x1"]:item["x2"]]
    # The pure student photo inside the card
    person = card[40:570, 80:730]
    out_path = os.path.join(stars_dir, item["name"] + "_pure_person.jpg")
    out_face = os.path.join(stars_dir, item["name"] + "_face.jpg")
    cv2.imwrite(out_path, person, [cv2.IMWRITE_JPEG_QUALITY, 95])
    cv2.imwrite(out_face, person, [cv2.IMWRITE_JPEG_QUALITY, 95])

print("Star achievers pure person portraits saved!")

# =========================================================================
# 2. POSTER 1: ALL 200 STUDENT PERSON CROPS (10 ROWS x 20 COLS)
# =========================================================================
print("Extracting pure person portraits from Poster 1 (All 200 students)...")
im1 = cv2.imread(img1_path)

card_w = 396
card_h = 566

count = 0
for r in range(10):
    y = int(61 + r * 574.888)
    for c in range(20):
        x = int(33 + c * 410.105)
        card = im1[y:y+card_h, x:x+card_w]
        
        # Crop ONLY the student person portrait inside the photo box:
        # Avoids borders at y=20 and y=385, x=17 and x=380
        person = card[25:380, 25:370]
        
        # Save as person_r{r}_c{c}.jpg and portrait_r{r}_c{c}.jpg
        person_filename = f"person_r{r}_c{c}.jpg"
        person_path = os.path.join(portraits_dir, person_filename)
        cv2.imwrite(person_path, person, [cv2.IMWRITE_JPEG_QUALITY, 92])
        
        portrait_filename = f"portrait_r{r}_c{c}.jpg"
        portrait_path = os.path.join(portraits_dir, portrait_filename)
        cv2.imwrite(portrait_path, person, [cv2.IMWRITE_JPEG_QUALITY, 92])
        
        count += 1

print(f"Successfully extracted {count} pure person portraits from Poster 1!")
