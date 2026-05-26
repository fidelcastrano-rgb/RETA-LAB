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
      let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

      // Find price from WooCommerce forms or structured data
      let price = 0;
      let ldJsonMatch = pageHtml.match(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/s);
      if (ldJsonMatch) {
        try {
          const schema = JSON.parse(ldJsonMatch[1]);
          const graph = schema['@graph'] || (Array.isArray(schema) ? schema : [schema]);
          for (const item of graph) {
            if (item['@type'] === 'Product' && item.offers && item.offers.length > 0) {
              price = item.offers[0].price;
              break;
            }
          }
        } catch(e) {}
      }

      // If price is still 0, try to parse from meta tags
      if (price === 0) {
        let metaPrice = pageHtml.match(/<meta property="product:price:amount" content="([\d\.]+)"/);
        if (metaPrice) price = parseFloat(metaPrice[1]);
      }

      let descMatch = pageHtml.match(/<meta property="og:description" content="(.*?)"/);
      let desc = descMatch ? descMatch[1].replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/\[&hellip;\]/g, '...') : '';
      
      let imgMatch = pageHtml.match(/<meta property="og:image" content="(.*?)"/);
      let image = imgMatch ? imgMatch[1] : '';

      results.push({ url, title, price: Number(price) || 36, description: desc, image });
    } catch (e) {
      console.error(e);
    }
  }
  
  const fs = require('fs');
  fs.writeFileSync('scraped2.json', JSON.stringify(results, null, 2));
}

scrape();
