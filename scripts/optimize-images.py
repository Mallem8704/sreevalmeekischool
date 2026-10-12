import os
from PIL import Image

PUBLIC_DIR = os.path.abspath('public')
MAX_WIDTH = 2200
JPEG_QUALITY = 84
WEBP_QUALITY = 82

print(f"Scanning {PUBLIC_DIR}...")
total_before = 0
total_after = 0
optimized_count = 0

for root, _, files in os.walk(PUBLIC_DIR):
    for file in files:
        ext = os.path.splitext(file)[1].lower()
        if ext in ('.jpg', '.jpeg', '.png'):
            path = os.path.join(root, file)
            size_before = os.path.getsize(path)
            total_before += size_before

            # Skip small files under 200KB unless dimensions are enormous
            try:
                with Image.open(path) as img:
                    orig_w, orig_h = img.size
                    format_name = img.format
                    needs_resize = orig_w > MAX_WIDTH or orig_h > MAX_WIDTH
                    is_large = size_before > 250 * 1024

                    if needs_resize or is_large:
                        # Copy or convert mode
                        has_alpha = 'A' in img.getbands() or img.mode in ('RGBA', 'LA')
                        
                        # Resize if excessively large dimension
                        if needs_resize:
                            ratio = min(MAX_WIDTH / orig_w, MAX_WIDTH / orig_h)
                            new_size = (int(orig_w * ratio), int(orig_h * ratio))
                            img = img.resize(new_size, Image.Resampling.LANCZOS)
                        
                        temp_path = path + '.tmp'
                        if ext in ('.jpg', '.jpeg'):
                            rgb_img = img.convert('RGB')
                            rgb_img.save(temp_path, 'JPEG', quality=JPEG_QUALITY, optimize=True, progressive=True)
                        elif ext == '.png':
                            if not has_alpha:
                                rgb_img = img.convert('RGB')
                                rgb_img.save(temp_path, 'JPEG', quality=JPEG_QUALITY, optimize=True, progressive=True)
                                # Only replace if significantly smaller and preserves compatibility, or optimize PNG
                                # Better to keep original extension as PNG
                                img.save(temp_path, 'PNG', optimize=True)
                            else:
                                img.save(temp_path, 'PNG', optimize=True)
                        
                        size_after = os.path.getsize(temp_path)
                        if size_after < size_before:
                            os.replace(temp_path, path)
                            saved = (size_before - size_after) / 1024
                            print(f"[OPTIMIZED] {os.path.relpath(path, PUBLIC_DIR)}: {size_before/1024:.1f}KB -> {size_after/1024:.1f}KB (-{saved:.1f}KB)")
                            total_after += size_after
                            optimized_count += 1
                        else:
                            if os.path.exists(temp_path):
                                os.remove(temp_path)
                            total_after += size_before
                    else:
                        total_after += size_before
            except Exception as e:
                print(f"[SKIP] {file}: {e}")
                total_after += size_before

print("=" * 60)
print(f"Total files optimized: {optimized_count}")
print(f"Total image size before: {total_before / (1024*1024):.2f} MB")
print(f"Total image size after:  {total_after / (1024*1024):.2f} MB")
print(f"Total image savings:     {(total_before - total_after) / (1024*1024):.2f} MB")
