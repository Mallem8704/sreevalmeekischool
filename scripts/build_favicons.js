const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function buildAll() {
  const svgPath = path.join(__dirname, '../public/images/logo/valmeeki_emblem.svg');
  const svgBuffer = fs.readFileSync(svgPath);

  // High-res master 1024x1024
  const master1024 = await sharp(svgBuffer, { density: 300 })
    .resize(1024, 1024)
    .png()
    .toFile(path.join(__dirname, '../public/logo.png'));
  console.log('Created public/logo.png', master1024);

  // Android Chrome 512x512
  await sharp(svgBuffer, { density: 300 })
    .resize(512, 512)
    .png()
    .toFile(path.join(__dirname, '../public/android-chrome-512x512.png'));
  console.log('Created public/android-chrome-512x512.png');

  // Android Chrome 192x192
  await sharp(svgBuffer, { density: 300 })
    .resize(192, 192)
    .png()
    .toFile(path.join(__dirname, '../public/android-chrome-192x192.png'));
  console.log('Created public/android-chrome-192x192.png');

  // Apple Touch Icon 180x180
  await sharp(svgBuffer, { density: 300 })
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));
  console.log('Created public/apple-touch-icon.png');

  // Favicon 48x48
  await sharp(svgBuffer, { density: 300 })
    .resize(48, 48)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-48x48.png'));
  console.log('Created public/favicon-48x48.png');

  // Favicon 32x32
  await sharp(svgBuffer, { density: 300 })
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-32x32.png'));
  console.log('Created public/favicon-32x32.png');

  // Favicon 16x16
  await sharp(svgBuffer, { density: 300 })
    .resize(16, 16)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-16x16.png'));
  console.log('Created public/favicon-16x16.png');
}

buildAll().catch(err => {
  console.error('Build error:', err);
  process.exit(1);
});
