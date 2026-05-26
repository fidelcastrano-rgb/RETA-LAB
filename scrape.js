const https = require('https');

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
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
      const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
      
      let priceMatch = pageHtml.match(/<p class="price".*?>(.*?)<\/p>/s);
      let priceStr = priceMatch ? priceMatch[1] : '';
      let priceNums = priceStr.match(/\d+[\.,]?\d*/g);
      let price = priceNums ? parseFloat(priceNums[0]) : 0;
      
      let descMatch = pageHtml.match(/<meta property="og:description" content="(.*?)"/);
      let desc = descMatch ? descMatch[1] : '';
      
      let imgMatch = pageHtml.match(/<meta property="og:image" content="(.*?)"/);
      let image = imgMatch ? imgMatch[1] : '';

      results.push({ title, price, description: desc, image });
    } catch (e) {
      console.error(e);
    }
  }
  
  const fs = require('fs');
  fs.writeFileSync('scraped.json', JSON.stringify(results, null, 2));
}

scrape();
