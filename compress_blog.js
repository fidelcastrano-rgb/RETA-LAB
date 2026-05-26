const sharp = require('sharp');

const imagesToCompress = [
  {
    input: './src/assets/images/buyers_guide_hero_1779769163254.png',
    output: './public/blog-guide.webp',
    width: 900,
    quality: 75
  },
  {
    input: './src/assets/images/receptor_comparison_1779769182574.png',
    output: './public/blog-science.webp',
    width: 900,
    quality: 75
  }
];

Promise.all(
  imagesToCompress.map(item => {
    return sharp(item.input)
      .resize(item.width)
      .webp({ quality: item.quality })
      .toFile(item.output)
      .then(info => {
        console.log(`Successfully compressed ${item.output}: ${(info.size / 1024).toFixed(2)} KB`);
      })
      .catch(err => {
        console.error(`Error compressing ${item.output}:`, err);
      });
  })
).then(() => {
  console.log("All blog images compressed successfully.");
});
