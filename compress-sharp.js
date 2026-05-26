const sharp = require('sharp');

sharp('public/retatrutide-hero.png')
  .resize(800) // reasonable resolution
  .webp({ quality: 30 }) // moderate quality
  .toFile('public/retatrutide-hero-small.webp')
  .then(info => {
    console.log("Success:", info.size / 1024, "KB");
  })
  .catch(err => {
    console.error(err);
  });
