const cheerio = require('cheerio');
const fs = require('fs');

async function scrape() {
  const urls = [
    "https://peptidelabuk.co.uk/product/buy-alluvi-retatrutide-40mg-x2-bundle/",
    "https://peptidelabuk.co.uk/product/buy-alluvi-retatrutide-20mg-pen/",
    "https://peptidelabuk.co.uk/product/alluvi-retatrutide-bpc-157-tb-500-40mg/",
    "https://peptidelabuk.co.uk/product/alluvi-glow-ghk-cu-bpc-157-tb-500-70mg/",
    "https://peptidelabuk.co.uk/product/alluvi-nad-1000mg/",
    "https://peptidelabuk.co.uk/product/alluvi-tirzepatide-40mg/",
    "https://peptidelabuk.co.uk/product/alluvi-retatrutide-40mg/",
    "https://peptidelabuk.co.uk/product/alluvi-tirzepatide-20mg/",
    "https://peptidelabuk.co.uk/product/alluvi-retatrutide-20mg-x2-bundle/"
  ];

  const results = [];

  for (const url of urls) {
    try {
      console.log("Scraping " + url);
      const res = await fetch(url);
      if (!res.ok) {
        console.log("Failed " + res.status);
        continue;
      }
      const text = await res.text();
      const $ = cheerio.load(text);
      
      const name = $('h1.product_title').text().trim() || $('h1').first().text().trim();
      let description = $('.woocommerce-product-details__short-description').text().trim();
      if (!description) {
        description = $('#tab-description').text().trim();
      }
      let image = $('.woocommerce-product-gallery__image a').first().attr('href');
      if (!image) {
          image = $('.woocommerce-product-gallery__image img').first().attr('src');
      }
      if (!image) {
          // fallback
          image = $('img').first().attr('src') || '';
      }
      
      // Look for variations
      const form = $('form.cart');
      const variablesData = form.attr('data-product_variations');
      let variants = [];
      if (variablesData) {
        try {
          const parsed = JSON.parse(variablesData);
          for (const v of parsed) {
            let varTitle = Object.values(v.attributes).join(' ');
            if (!varTitle) varTitle = "Variant";
            variants.push({
              name: varTitle,
              price: v.display_price,
            });
          }
        } catch(e) {}
      } else {
        // Simple product
        let priceText = $('p.price .amount bdi').first().text().trim();
        if(!priceText) priceText = $('p.price').text().trim();
        
        let priceNum = 0;
        if(priceText) {
             const m = priceText.match(/[\d\.]+/);
             if(m) priceNum = parseFloat(m[0]);
        }
        
        variants.push({
          name: '1 Item',
          price: priceNum || priceText || 0,
        });
      }
      
      let slug = url.split('/').filter(Boolean).pop();

      results.push({
        slug,
        name,
        tag: 'ALLUVI',
        description: description.replace(/\s+/g, ' '),
        image,
        coaUrl: '/coa/placeholder.pdf',
        variants
      });
    } catch (e) {
      console.error(e);
    }
  }

  fs.writeFileSync('alluviScraped.json', JSON.stringify(results, null, 2));
  console.log("Done");
}

scrape();
