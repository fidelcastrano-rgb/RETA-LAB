const sharp = require('sharp');
const fs = require('fs');

sharp('./src/assets/images/precision_lab_bg_1779768788889.png')
  .resize(800) // sharp resolution for modern screens
  .webp({ quality: 75 }) // high quality, compressed WebP format
  .toFile('public/precision-lab-small.webp')
  .then(info => {
    const sizeKb = info.size / 1024;
    const msg = `Success: ${sizeKb.toFixed(2)} KB`;
    console.log(msg);
    fs.writeFileSync('image-size-check.txt', msg);
  })
  .catch(err => {
    console.error(err);
    fs.writeFileSync('image-size-check.txt', 'Error: ' + err.message);
  });
