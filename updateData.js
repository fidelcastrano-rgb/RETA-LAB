const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scraped4.json', 'utf8'));

let productsCode = `export const products: Product[] = [\n`;

data.forEach((item, index) => {
  productsCode += `  {
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
  if (index < data.length - 1) productsCode += `,\n`;
  else productsCode += `\n`;
});

productsCode += `];`;

let oldCode = fs.readFileSync('lib/data.ts', 'utf8');
let newCode = oldCode.replace(/export const products: Product\[\] = \[([\s\S]*?)\];/, productsCode);

fs.writeFileSync('lib/data.ts', newCode);
console.log('Successfully updated lib/data.ts');
