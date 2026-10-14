import os
import cv2
import numpy as np
from PIL import Image

images = [
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
    'public/images/activities/agricultural_nursery_field_study.jpg',
    'public/images/activities/annual_day_stage_performance_pyramid.jpg',
    'public/images/activities/botany_plant_science_investigation.jpg',
    'public/images/activities/horticulture_greenhouse_learning.jpg',
    'public/images/activities/telugu_bhasha_dinotsavam_celebration.jpg'
]

print(f"{'Idx':<3} | {'Path':<55} | {'Dimensions':<12} | {'Size':<10} | {'Laplacian Var':<14}")
print("-" * 105)
for i, path in enumerate(images, 1):
    if not os.path.exists(path):
        print(f"{i:<3} | {path:<55} | NOT FOUND")
        continue
    img = Image.open(path)
    w, h = img.size
    size_kb = os.path.getsize(path) / 1024
    cv_img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
    lap_var = cv2.Laplacian(cv_img, cv2.CV_64F).var() if cv_img is not None else 0.0
    print(f"{i:<3} | {path:<55} | {w}x{h:<8} | {size_kb:>7.1f} KB | {lap_var:>14.2f}")
