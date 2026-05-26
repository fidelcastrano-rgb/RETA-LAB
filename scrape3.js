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

      let price = 0;
      let ldJsonMatch = pageHtml.match(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/s);
      if (ldJsonMatch) {
        try {
          const schema = JSON.parse(ldJsonMatch[1]);
          const graph = schema['@graph'] || (Array.isArray(schema) ? schema : [schema]);
          for (const item of graph) {
            if (item['@type'] === 'Product' && item.offers && item.offers.length > 0) {
              price = parseFloat(item.offers[0].price);
              break;
            }
          }
        } catch(e) {}
      }

      if (price === 0) {
        let metaPrice = pageHtml.match(/<meta property="product:price:amount" content="([\d\.]+)"/);
        if (metaPrice) price = parseFloat(metaPrice[1]);
      }
      
      if (price === 0) {
         let priceMatch = pageHtml.match(/<p class="price".*?>(.*?)<\/p>/s);
         if (priceMatch) {
            let clean = priceMatch[1].replace(/&#0?36;/g, '').replace(/<[^>]+>/g, '');
            let nums = clean.match(/\d+[\.,]?\d*/);
            if (nums) price = parseFloat(nums[0]);
         }
      }

      let descMatch = pageHtml.match(/<meta property="og:description" content="(.*?)"/);
      let desc = descMatch ? descMatch[1].replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/\[&hellip;\]/g, '...') : '';
      
      let imgMatch = pageHtml.match(/<meta property="og:image" content="(.*?)"/);
      let image = imgMatch ? imgMatch[1] : '';

      // apply 40% discount, converting logic assumes mostly USD mapping as numbers right now
      let discountedPrice = Number((price * 0.6).toFixed(2));
      
      let slug = title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

      results.push({ slug, title, originalPrice: price, price: discountedPrice, description: desc, image });
    } catch (e) {
      console.error(e);
    }
  }
  
  fs.writeFileSync('scraped3.json', JSON.stringify(results, null, 2));
}

scrape();
