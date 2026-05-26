const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const products = [
  {
    slug: "buy-alluvi-retatrutide-40mg-x2-bundle",
    url: "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/Retatrutide-40mg-RD-Only-X-2.png"
  },
  {
    slug: "buy-alluvi-retatrutide-20mg-pen",
    url: "https://peptidelabuk.co.uk/wp-content/uploads/2026/04/68c153351d1a646053b66e98_Retatrutide-5MG-With-Pen-1-scaled.jpg"
  },
  {
    slug: "alluvi-retatrutide-bpc-157-tb-500-40mg",
    url: "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Alluvi-Retatrutide-BPC-157-TB-500.png"
  },
  {
    slug: "alluvi-glow-ghk-cu-bpc-157-tb-500-70mg",
    url: "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Alluvi-Glow-GHK-Cu-–-BPC-157-TB-500-70mg.png"
  },
  {
    slug: "alluvi-nad-1000mg",
    url: "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Alluvi-NAD-1000mg.png"
  },
  {
    slug: "alluvi-tirzepatide-40mg",
    url: "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Alluvi-Tirzepatide-40mg.png"
  },
  {
    slug: "alluvi-retatrutide-40mg",
    url: "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Retatrutide-40mg-RD-Only-alluvii-1536x1026-1.png"
  },
  {
    slug: "alluvi-tirzepatide-20mg",
    url: "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Alluvi-Tirzepatide-20mg.png"
  },
  {
    slug: "alluvi-retatrutide-20mg-x2-bundle",
    url: "https://peptidelabuk.co.uk/wp-content/uploads/2026/02/Alluvi-Retatrutide-20mg-×2-Bundle.png"
  }
];

async function downloadAndCompress() {
  console.log("Starting download of Alluvi images...");

  for (const item of products) {
    const filename = `alluvi-${item.slug}.webp`;
    const outputPath = path.join(__dirname, 'public', filename);

    try {
      // Decode and recode URI parts to handle spaces and special chars safely
      const encodedUrl = encodeURI(item.url);
      console.log(`Fetching: ${encodedUrl}`);

      const response = await fetch(encodedUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Compress and resize
      await sharp(buffer)
        .resize(800, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      console.log(`Saved: public/${filename} (${(stats.size / 1024).toFixed(2)} KB)`);
    } catch (e) {
      console.error(`Failed for ${item.slug}: ${e.message}. Using fallback layout illustration.`);
      
      // Save a fallback placeholder of the product using sharp if fetch fails
      try {
        await sharp({
          create: {
            width: 800,
            height: 800,
            channels: 4,
            background: { r: 248, g: 250, b: 252, alpha: 1 } // slate-50
          }
        })
        .composite([{
          // Draw a soft glowing gradient circle
          input: Buffer.from('<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">' +
            '<defs>' +
            '  <radialGradient id="grad" cx="50%" cy="50%" r="50%">' +
            '    <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.15" />' +
            '    <stop offset="100%" stop-color="#3B82F6" stop-opacity="0" />' +
            '  </radialGradient>' +
            '</defs>' +
            '<circle cx="400" cy="400" r="300" fill="url(#grad)" />' +
            '<text x="400" y="380" font-family="sans-serif" font-size="28" font-weight="bold" fill="#0F172A" text-anchor="middle">ALLUVI RESEARCH</text>' +
            `<text x="400" y="425" font-family="sans-serif" font-size="20" fill="#475569" text-anchor="middle">${item.slug.replace(/-/g, ' ').toUpperCase()}</text>` +
            '<text x="400" y="470" font-family="sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">HPLC Verified Compound &gt;99% Purity</text>' +
            '</svg>'),
          top: 0,
          left: 0
        }])
        .webp({ quality: 80 })
        .toFile(outputPath);
        
        console.log(`Saved Fallback Placeholder: public/${filename}`);
      } catch (errFallback) {
        console.error(`Fallback failed: ${errFallback.message}`);
      }
    }
  }

  console.log("Alluvi images download process complete.");
}

downloadAndCompress();
