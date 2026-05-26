const fs = require('fs');

const scrapedData = JSON.parse(fs.readFileSync('alluviScraped.json', 'utf8'));

let currentData = fs.readFileSync('lib/data.ts', 'utf8');

let newProducts = scrapedData.map(p => {
  return `  {
    slug: "${p.slug}",
    name: "${p.name}",
    tag: "${p.tag}",
    description: ${JSON.stringify(p.description)},
    image: "${p.image}",
    coaUrl: "${p.coaUrl}",
    variants: [
${p.variants.map((v, i) => `      { id: "var_${i}", name: "${v.name}", price: ${v.price}, savingsLabel: "" }`).join(',\n')}
    ],
    packageContents: "Pre-calibrated research device.",
    storage: "Store as per manufacturer guidelines.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  }`;
}).join(',\n');

currentData = currentData.replace('export const products: Product[] = [', `export const products: Product[] = [\n${newProducts},`);

fs.writeFileSync('lib/data.ts', currentData);
console.log('Updated lib/data.ts');
