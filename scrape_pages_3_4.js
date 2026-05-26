const https = require('https');
const fs = require('fs');

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function decodeHtml(html) {
  return html.replace(/&#36;/g, '$').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
}

async function scrapePage(pageNum) {
  const html = await fetchHtml('https://growthguys.is/shop/categories/peptides/?product-page=' + pageNum);
  const urlsMatch = html.match(/href="(https:\/\/growthguys\.is\/shop\/[^/]+\/)"/g);
  let urls = urlsMatch ? urlsMatch.map(u => u.slice(6, -1)) : [];
  urls = [...new Set(urls)].filter(u => !u.includes('/categories/') && !u.includes('/cart') && !u.includes('/checkout'));

  console.log('Found product URLs for page', pageNum, ':', urls);

  const results = [];
  for (const url of urls) {
    try {
      const pageHtml = await fetchHtml(url);
      
      const titleMatch = pageHtml.match(/<h1[^>]*>(.*?)<\/h1>/);
      let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

      let priceMatch = pageHtml.match(/woocommerce-Price-amount.*?<\/span>([\d\.]+)/);
      let originalPrice = priceMatch ? parseFloat(priceMatch[1]) : 50;

      let descMatch = pageHtml.match(/<meta property="og:description" content="(.*?)"/);
      let desc = descMatch ? descMatch[1].replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/\[&hellip;\]/g, '...') : '';
      
      let imgMatch = pageHtml.match(/<meta property="og:image" content="(.*?)"/);
      let image = imgMatch ? imgMatch[1] : '';

      // conversion CAD -> GBP is ~0.56. Then reduce by 40% (x 0.6).
      // GBP_PRICE = CAD * 0.56 * 0.6 = CAD * 0.336
      let discountedPrice = Number((originalPrice * 0.56 * 0.6).toFixed(0));
      if (discountedPrice === 0) discountedPrice = 15;
      
      let slug = title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

      results.push({ slug, name: title, originalPrice, price: discountedPrice, description: desc, image });
    } catch (e) {
      console.error(e);
    }
  }
  return results;
}

async function scrapeAll() {
  const p3 = await scrapePage(3);
  const p4 = await scrapePage(4);
  const data = [...p3, ...p4];

  let productsCode = '';

  data.forEach((item, index) => {
    productsCode += `,\n  {
      slug: "${item.slug}",
      name: "${item.name}",
      tag: "PEPTIDE",
      description: ${JSON.stringify(item.description)},
      image: "${item.image}",
      coaUrl: "/coa/${item.slug}.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: ${item.price}, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: ${item.price * 5 - 10}, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    }`;
  });
  productsCode += `\n];`;

  let oldCode = fs.readFileSync('lib/data.ts', 'utf8');
  let newCode = oldCode.replace(/supplyChain: "Directly sourced from trusted synthesizing partners."\n  }\n\];/, 'supplyChain: "Directly sourced from trusted synthesizing partners."\n  }' + productsCode);
  fs.writeFileSync('lib/data.ts', newCode);
  console.log('Successfully updated lib/data.ts with pages 3 and 4!');
}

scrapeAll();
