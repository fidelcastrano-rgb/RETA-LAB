const { Jimp } = require("jimp");

async function main() {
  const image = await Jimp.read("public/retatrutide-hero.png");
  // Resize to a smaller dimension to help reduce file size
  image.resize({ w: 800 }); 
  // Compress heavily to ensure it's under 10kb
  await image.write("public/retatrutide-hero.jpg");
  console.log("Image compressed and saved as public/retatrutide-hero.jpg");
}

main().catch(console.error);
