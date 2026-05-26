const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scraped_page2.json', 'utf8'));

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
console.log('Successfully updated lib/data.ts');
