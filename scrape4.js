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

async function scrape() {
  const html = await fetchHtml('https://growthguys.is/shop/categories/peptides/');
  const urlsMatch = html.match(/href="(https:\/\/growthguys\.is\/shop\/[^/]+\/)"/g);
  let urls = urlsMatch ? urlsMatch.map(u => u.slice(6, -1)) : [];
  urls = [...new Set(urls)].filter(u => !u.includes('/categories/') && !u.includes('/cart') && !u.includes('/checkout'));

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
  
  fs.writeFileSync('scraped4.json', JSON.stringify(results, null, 2));
}

scrape();
