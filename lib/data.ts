import { Product, BlogPost, FAQ } from "./types";

const rawProducts: Product[] = [
  {
    slug: "buy-alluvi-retatrutide-40mg-x2-bundle",
    name: "Alluvi Retatrutide 40mg ×2 Bundle",
    tag: "ALLUVI",
    description: "Alluvi Retatrutide 40mg ×2 Bundle includes two pre-calibrated research devices designed for precision, consistency, and extended laboratory use. Ready-to-use with no preparation required, making it ideal for high-volume and multi-phase research workflows.",
    image: "/alluvi-buy-alluvi-retatrutide-40mg-x2-bundle.webp",
    coaUrl: "/coa/placeholder.pdf",
    variants: [
      { id: "var_0", name: "1 Item", price: 315, savingsLabel: "" }
    ],
    packageContents: "Pre-calibrated research device.",
    storage: "Store as per manufacturer guidelines.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "buy-alluvi-retatrutide-20mg-pen",
    name: "Alluvi Retatrutide 20mg (R&D)",
    tag: "ALLUVI",
    description: "Alluvi Retatrutide 20mg is a pre-calibrated research device designed for precision and convenience in laboratory settings. Ready-to-use with no preparation required, ensuring consistent and efficient experimental use. Approved for human use.",
    image: "/alluvi-buy-alluvi-retatrutide-20mg-pen.webp",
    coaUrl: "/coa/placeholder.pdf",
    variants: [
      { id: "var_0", name: "1 Item", price: 100, savingsLabel: "" }
    ],
    packageContents: "Pre-calibrated research device.",
    storage: "Store as per manufacturer guidelines.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "alluvi-retatrutide-bpc-157-tb-500-40mg",
    name: "Alluvi Retatrutide BPC-157 & TB-500 40mg",
    tag: "ALLUVI",
    description: "Alluvi Retatrutide BPC-157 & TB-500 40mg is a ready-to-use research pen combining three advanced peptides in a pre-measured laboratory formulation. Designed strictly for research purposes, this prefilled device offers precision handling, consistency, and convenience for controlled experimental settings across the UK and Europe.",
    image: "/alluvi-alluvi-retatrutide-bpc-157-tb-500-40mg.webp",
    coaUrl: "/coa/placeholder.pdf",
    variants: [
      { id: "var_0", name: "1 Item", price: 139.99, savingsLabel: "" }
    ],
    packageContents: "Pre-calibrated research device.",
    storage: "Store as per manufacturer guidelines.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "alluvi-glow-ghk-cu-bpc-157-tb-500-70mg",
    name: "Alluvi Glow GHK-Cu – BPC-157 & TB-500 70mg",
    tag: "ALLUVI",
    description: "Alluvi Glow GHK-Cu – BPC-157 & TB-500 70mg is a pre-calibrated research peptide blend developed for laboratory and in-vitro research purposes only. This advanced 70mg research formula combines three widely studied peptides in a ready-made research device, manufactured to high analytical standards and supplied exclusively for R&D use within the UK and Europe.",
    image: "/alluvi-alluvi-glow-ghk-cu-bpc-157-tb-500-70mg.webp",
    coaUrl: "/coa/placeholder.pdf",
    variants: [
      { id: "var_0", name: "1 Item", price: 89.99, savingsLabel: "" }
    ],
    packageContents: "Pre-calibrated research device.",
    storage: "Store as per manufacturer guidelines.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "alluvi-nad-1000mg",
    name: "Alluvi NAD+ 1000mg",
    tag: "ALLUVI",
    description: "Alluvi NAD+ 1000mg is a high-purity research compound supplied in a pre-calibrated research format for laboratory and in-vitro use only. Designed for controlled scientific investigation, this premium 1000mg NAD+ formulation is available across the UK and Europe exclusively for R&D purposes.",
    image: "/alluvi-alluvi-nad-1000mg.webp",
    coaUrl: "/coa/placeholder.pdf",
    variants: [
      { id: "var_0", name: "1 Item", price: 169.99, savingsLabel: "" }
    ],
    packageContents: "Pre-calibrated research device.",
    storage: "Store as per manufacturer guidelines.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "alluvi-tirzepatide-40mg",
    name: "Alluvi Tirzepatide 40mg",
    tag: "ALLUVI",
    description: "Alluvi Tirzepatide 40mg R&D Only is a high-purity, pre-calibrated research pen designed exclusively for laboratory and analytical research applications. Manufactured to strict quality standards and distributed across the UK and Europe, this ready-to-use research device ensures precision handling, consistency, and controlled laboratory study use. For research purposes only.",
    image: "/alluvi-alluvi-tirzepatide-40mg.webp",
    coaUrl: "/coa/placeholder.pdf",
    variants: [
      { id: "var_0", name: "1 Item", price: 119.99, savingsLabel: "" }
    ],
    packageContents: "Pre-calibrated research device.",
    storage: "Store as per manufacturer guidelines.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "alluvi-retatrutide-40mg",
    name: "Alluvi Retatrutide 40mg",
    tag: "ALLUVI",
    description: "Alluvi Retatrutide 40mg R&D Only is a high-purity, pre-calibrated research pen designed exclusively for laboratory and analytical research applications. Supplied across the UK and Europe, this ready-to-use research device ensures precision handling, structured laboratory testing, and reliable research consistency. For laboratory research use only.",
    image: "/alluvi-alluvi-retatrutide-40mg.webp",
    coaUrl: "/coa/placeholder.pdf",
    variants: [
      { id: "var_0", name: "1 Item", price: 189.99, savingsLabel: "" }
    ],
    packageContents: "Pre-calibrated research device.",
    storage: "Store as per manufacturer guidelines.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "alluvi-tirzepatide-20mg",
    name: "Alluvi Tirzepatide 20mg",
    tag: "ALLUVI",
    description: "Alluvi Tirzepatide 20mg R&D Only is a high-purity, pre-calibrated research pen designed exclusively for laboratory and analytical research use. Supplied across the UK and Europe, this ready-made research device ensures precision handling, structured testing, and consistent batch performance. For research purposes only.",
    image: "/alluvi-alluvi-tirzepatide-20mg.webp",
    coaUrl: "/coa/placeholder.pdf",
    variants: [
      { id: "var_0", name: "1 Item", price: 79.99, savingsLabel: "" }
    ],
    packageContents: "Pre-calibrated research device.",
    storage: "Store as per manufacturer guidelines.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "alluvi-retatrutide-20mg-x2-bundle",
    name: "Alluvi Retatrutide 20mg ×2 Bundle",
    tag: "ALLUVI",
    description: "Alluvi Retatrutide 20mg ×2 Bundle provides two pre-calibrated 20mg research pens designed exclusively for laboratory and analytical research use. Ideal for structured testing and extended research protocols, this bundle ensures batch consistency, secure packaging, and UK & EU supply. For research purposes only.",
    image: "/alluvi-alluvi-retatrutide-20mg-x2-bundle.webp",
    coaUrl: "/coa/placeholder.pdf",
    variants: [
      { id: "var_0", name: "1 Item", price: 199.99, savingsLabel: "" }
    ],
    packageContents: "Pre-calibrated research device.",
    storage: "Store as per manufacturer guidelines.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "tirzepatide-10mg",
    name: "Tirzepatide 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure Tirzepatide. Tirzepatide (brand names Mounjaro, Zepbound) is a double glucagon hormone receptor agonist (GLP-1 and GIP receptors), making it more effective for body fat mass reduction than its predecessor Semaglutide by targeting further receptors.",
    image: "https://growthguys.is/wp-content/uploads/Tirz-10-Red-1024x930.jpg",
    coaUrl: "/coa/tirzepatide-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 20, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 90, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "tb-500-5mg",
    name: "TB-500 5mg",
    tag: "PEPTIDE",
    description: "Each vial contains 5mg of highly pure TB-500. TB-500 (TB-4, short for Thymosin β4) is a naturally-occurring peptide that plays a vital role in the repair and regeneration of injured cells and tissues by promoting cell migration, forming new blood vessels and regenerating the tissue as well as decreasing the number of myofibroblasts in wounds, ...",
    image: "https://growthguys.is/wp-content/uploads/TB500-Purple-1024x930.jpg",
    coaUrl: "/coa/tb-500-5mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 13, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 55, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "semaglutide-5mg",
    name: "Semaglutide 5mg",
    tag: "PEPTIDE",
    description: "Each vial contains 5mg of highly pure Semaglutide. Semaglutide (brand names Ozempic, Wegovy) is used for weight loss, to lower blood sugar levels, and to reduce the risk of major cardiovascular events such as heart attack or stroke in certain patients. It is a GLP-1 agonist to be administered subcutaneously once a week that works ...",
    image: "https://growthguys.is/wp-content/uploads/Sema-Blue-1024x930.jpg",
    coaUrl: "/coa/semaglutide-5mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "retatrutide-10mg",
    name: "Retatrutide 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure Retatrutide. Retatrutide is classified as a triple glucagon hormone receptor agonist (GLP-1, GIP, and GCGR receptors), making it more effective for body fat mass reduction than its predecessor Semaglutide by targeting further receptors.",
    image: "https://growthguys.is/wp-content/uploads/R10-Red-1024x930.jpg",
    coaUrl: "/coa/retatrutide.png",
    variants: [
      { id: "1v", name: "1x Vial", price: 30, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 140, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "hcg-7-000iu",
    name: "hCG 7,000iu",
    tag: "PEPTIDE",
    description: "Each vial contains 7,000iu of highly pure Human Chorionic Gonadotropin (hCG). Human chorionic gonadotropin (HCG) is prescribed for men to address the symptoms of hypogonadism, such as low testosterone and infertility. When testosterone is introduced exogenously such as during TRT, HCG helps to maintain fertility, testicular and penis size, cognitive function, and libido.",
    image: "https://growthguys.is/wp-content/uploads/hCG-7000iu-Pink-1024x930.jpg",
    coaUrl: "/coa/hcg-7-000iu.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 13, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 55, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "bpc-157-5mg",
    name: "BPC-157 5mg",
    tag: "PEPTIDE",
    description: "Each vial contains 5mg of highly pure BPC-157. BPC-157, short for Body Protection Compound 157, is a chain of fifteen amino acids with various mechanisms of action, including activating cells involved in tissue repair, including muscles, tendons, ligaments and the gastrointestinal tract, stimulating the synthesis of growth factors, and inhibiting inflammation.",
    image: "https://growthguys.is/wp-content/uploads/BPC5-Green-1-1024x930.jpg",
    coaUrl: "/coa/bpc-157-5mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 13, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 55, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "hcg-14-000iu",
    name: "hCG 14,000iu",
    tag: "PEPTIDE",
    description: "Each vial contains 14,000iu of highly pure Human Chorionic Gonadotropin (hCG). Human chorionic gonadotropin (HCG) is prescribed for men to address the symptoms of hypogonadism, such as low testosterone and infertility. When testosterone is introduced exogenously such as during TRT, HCG helps to maintain fertility, testicular and penis size, cognitive function, and libido.",
    image: "https://growthguys.is/wp-content/uploads/hCG-14000iu-Light-Blue-1024x930.jpg",
    coaUrl: "/coa/hcg-14-000iu.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 24, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 110, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "bpc-157-10mg",
    name: "BPC-157 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure BPC-157. BPC-157, short for Body Protection Compound 157, is a chain of fifteen amino acids with various mechanisms of action, including activating cells involved in tissue repair, including muscles, tendons, ligaments and the gastrointestinal tract, stimulating the synthesis of growth factors, and inhibiting inflammation.",
    image: "https://growthguys.is/wp-content/uploads/BPC-157-10mg-purple-1024x930.jpg",
    coaUrl: "/coa/bpc-157-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 24, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 110, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "bpc-157-tb-500-8220-healing-blend-8221-6mg-6mg",
    name: "BPC-157 / TB-500 &#8220;Healing Blend&#8221; 6mg/6mg",
    tag: "PEPTIDE",
    description: "Each vial contains 6mg of BPC-157 and 6mg of TB-500. Our “Healing Blend” combines BPC-157 and TB-500 (TB-4) at an ideal 1:1 ratio that takes advantage of their synergistic healing effects when used in conjunction. BPC-157, short for Body Protection Compound 157, is a chain of fifteen amino acids with various mechanisms of action, including ...",
    image: "https://growthguys.is/wp-content/uploads/Healing-6-6-White-1024x930.jpg",
    coaUrl: "/coa/bpc-157-tb-500-8220-healing-blend-8221-6mg-6mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 24, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 110, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "tesamorelin-10mg",
    name: "Tesamorelin 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure Tesamorelin. Tesamorelin is a synthetic peptide that acts as a growth hormone-releasing hormone (GHRH) analog. It is primarily used to reduce abdominal fat in HIV-infected patients with lipodystrophy, a condition characterized by abnormal fat distribution. By stimulating the release of growth hormone, tesamorelin helps improve body composition and ...",
    image: "https://growthguys.is/wp-content/uploads/Tesa-10-Purple-1024x930.jpg",
    coaUrl: "/coa/tesamorelin-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 30, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 140, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "cagrilintide-10mg",
    name: "Cagrilintide 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure Cagrilintide. Cagrilintide is a novel peptide developed as a treatment for obesity and weight management. It is a dual agonist that targets both the GLP-1 (glucagon-like peptide-1) and the amylin receptor, which helps to regulate appetite and glucose metabolism. By enhancing feelings of fullness and reducing hunger, cagrilintide ...",
    image: "https://growthguys.is/wp-content/uploads/Cagri-Red-1024x930.jpg",
    coaUrl: "/coa/cagrilintide-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 34, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 160, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "survodutide-10mg",
    name: "Survodutide 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure Survodutide. Survodutide is a peptide drug that acts as a dual agonist for GLP-1 (glucagon-like peptide-1) and GIP (gastric inhibitory polypeptide) receptors. It is being studied primarily for its potential in treating obesity and type 2 diabetes by helping to regulate appetite, enhance satiety, and improve glucose control. ...",
    image: "https://growthguys.is/wp-content/uploads/Survo-1024x930.jpg",
    coaUrl: "/coa/survodutide-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 34, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 160, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "melanotan-2-10mg",
    name: "Melanotan-2 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure Melanotan-2. Melanotan 2 is a synthetic analog of the naturally occurring melanocyte-stimulating hormone (MSH). It is primarily used to stimulate melanin production in the skin, leading to tanning without the need for sun exposure. Additionally, melanotan 2 has been studied for its potential effects on appetite suppression and ...",
    image: "https://growthguys.is/wp-content/uploads/MT-2-Yellow-1024x930.jpg",
    coaUrl: "/coa/melanotan-2-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 13, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 55, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "igf-1-lr3-1mg",
    name: "IGF-1 LR3 1mg",
    tag: "PEPTIDE",
    description: "IGF-1 LR3 (Insulin-like Growth Factor 1 Long Arg3) is a synthetic form of IGF-1, a protein that plays a key role in growth, development, and cellular repair. It's similar to the naturally occurring IGF-1 in your body but has a longer half-life due to a modification in its structure—specifically, the substitution of the amino acid ...",
    image: "https://growthguys.is/wp-content/uploads/IGF-1-LR3-Orange-1024x930.jpg",
    coaUrl: "/coa/igf-1-lr3-1mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 25, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 115, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "pt-141-10mg",
    name: "PT-141 10mg",
    tag: "PEPTIDE",
    description: "PT-141 (Bremelanotide) is a peptide used to treat sexual dysfunction. FDA-approved as Vyleesi, it treats hypoactive sexual desire disorder (HSDD) in women and is also studied for erectile dysfunction (ED). Unlike Viagra, it works by stimulating the melanocortin system in the brain to enhance arousal. Administered via injection, effects start within 30-60 minutes and last ...",
    image: "https://growthguys.is/wp-content/uploads/PT-141-1024x930.jpg",
    coaUrl: "/coa/pt-141-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "ipamorelin-10mg",
    name: "Ipamorelin 10mg",
    tag: "PEPTIDE",
    description: "Ipamorelin is a growth hormone secretagogue (GHS) and selective ghrelin receptor agonist that stimulates the release of growth hormone (GH). It is often used for anti-aging, muscle growth, fat loss, and recovery. Key Benefits: Increases Growth Hormone naturally without raising cortisol or prolactin. Enhances Muscle Growth & Recovery by promoting protein synthesis. Supports Fat Loss ...",
    image: "https://growthguys.is/wp-content/uploads/Ipamorelin-10mg-Pink-1024x930.jpg",
    coaUrl: "/coa/ipamorelin-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 24, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 110, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "epitalon-10mg",
    name: "Epitalon 10mg",
    tag: "PEPTIDE",
    description: "Epitalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) known for its potential anti-aging and telomere-lengthening effects. It was developed based on the natural epithalamin peptide produced in the pineal gland. Key Benefits: Promotes Longevity: May extend telomere length, slowing cellular aging. Enhances Sleep & Circadian Rhythms: Regulates melatonin production. Boosts Immune Function: Supports overall health and resilience. ...",
    image: "https://growthguys.is/wp-content/uploads/Epitalon-Orange-1024x930.jpg",
    coaUrl: "/coa/epitalon-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 13, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 55, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "cjc-1295-with-dac-12-5mg",
    name: "CJC-1295 with DAC 12.5mg",
    tag: "PEPTIDE",
    description: "CJC-1295 with DAC is a synthetic growth hormone-releasing hormone (GHRH) analog that increases growth hormone (GH) and IGF-1 levels for muscle growth, fat loss, and anti-aging benefits. The DAC (Drug Affinity Complex) extends its half-life, allowing weekly dosing instead of frequent injections. Key Benefits: Increases Growth Hormone & IGF-1 for muscle growth and fat loss. ...",
    image: "https://growthguys.is/wp-content/uploads/CJC-DAC-GREY-1024x930.jpg",
    coaUrl: "/coa/cjc-1295-with-dac-12-5mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 34, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 160, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "glow-blend-50mg",
    name: "GLOW Blend 50mg",
    tag: "PEPTIDE",
    description: "The GLOW Protocol Peptide Blend is a synergistic combination of three peptides: GHK-Cu, TB-500, and BPC-157. This blend is designed to enhance regenerative processes and support systemic recovery. Components: GHK-Cu (Copper Peptide): A tripeptide that binds copper ions, known for its role in promoting collagen production and skin regeneration. TB-500 (Thymosin Beta-4 Fragment): A synthetic ...",
    image: "https://growthguys.is/wp-content/uploads/GLOW-White-1024x930.jpg",
    coaUrl: "/coa/glow-blend-50mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 29, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 135, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "cjc-1295-no-dac-ipamorelin-blend",
    name: "CJC-1295 no DAC + Ipamorelin Blend",
    tag: "PEPTIDE",
    description: "Each vial contains 5mg of EACH CJC-1295 no DAC + Ipamorelin in lyophilized form. CJC-1295 is a synthetic growth hormone-releasing hormone (GHRH) analog designed to increase growth hormone (GH) and IGF-1 levels for muscle growth, fat loss, anti-aging, and recovery. It stimulates the pituitary gland to produce GH, mimicking the body's natural process. CJC-1295 without ...",
    image: "https://growthguys.is/wp-content/uploads/CJC-IPA-Green-1024x930.jpg",
    coaUrl: "/coa/cjc-1295-no-dac-ipamorelin-blend.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 25, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 115, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "sermorelin-10mg",
    name: "Sermorelin 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure Sermorelin. Sermorelin is a synthetic peptide that stimulates the release of growth hormone (GH) from the pituitary gland. It is a growth hormone-releasing hormone (GHRH) analog, meaning it mimics the natural GHRH produced by the hypothalamus. Sermorelin itself does not contain growth hormone but encourages the body to ...",
    image: "https://growthguys.is/wp-content/uploads/Sermorelin-Green-1024x930.jpg",
    coaUrl: "/coa/sermorelin-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 25, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 115, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "tb-500-10mg",
    name: "TB-500 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure TB-500. TB-500 (TB-4, short for Thymosin β4) is a naturally-occurring peptide that plays a vital role in the repair and regeneration of injured cells and tissues by promoting cell migration, forming new blood vessels and regenerating the tissue as well as decreasing the number of myofibroblasts in wounds, ...",
    image: "https://growthguys.is/wp-content/uploads/TB-500-10mg-Pink-1024x930.jpg",
    coaUrl: "/coa/tb-500-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 24, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 110, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "ghk-cu-70mg",
    name: "GHK-Cu 70mg",
    tag: "PEPTIDE",
    description: "GHK-Cu Copper Peptide – Skin Regeneration & Anti-Aging Powerhouse Rediscover youthful skin with GHK-Cu (Copper Tripeptide-1), a naturally occurring peptide renowned for its regenerative and anti-aging properties. This potent compound combines the tripeptide GHK (glycyl-L-histidyl-L-lysine) with a copper ion, creating a biologically active molecule that supports skin health, hair growth, and tissue repair. Key Benefits: ...",
    image: "https://growthguys.is/wp-content/uploads/GHK-Cu-70mg-Green-1024x928.jpg",
    coaUrl: "/coa/ghk-cu-70mg.png",
    variants: [
      { id: "1v", name: "1x Vial", price: 13, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 55, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "mots-c-10mg",
    name: "MOTS-C 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure MOTS-C. MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA Type-c) is a mitochondrial-derived peptide consisting of 16 amino acids. It plays a key role in cellular metabolism and energy homeostasis, acting through pathways related to insulin sensitivity, glucose metabolism, and stress response.",
    image: "https://growthguys.is/wp-content/uploads/MOTS-C-Pink-1024x930.jpg",
    coaUrl: "/coa/mots-c-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 13, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 55, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "ss-31-50mg",
    name: "SS-31 50mg",
    tag: "PEPTIDE",
    description: "Each vial contains 50mg of highly pure SS-31. SS-31 (also known as Elamipretide) is a synthetic tetrapeptide (D-Arg-Dmt-Lys-Phe-NH₂) known for its unique mitochondrial-targeting properties. SS-31 selectively binds to cardiolipin within the inner mitochondrial membrane, helping to stabilize mitochondrial structure and improve bioenergetics. Its antioxidant and cell-protective actions have made it a key molecule in mitochondrial ...",
    image: "https://growthguys.is/wp-content/uploads/SS-31-Green-1024x930.jpg",
    coaUrl: "/coa/ss-31-50mg.png",
    variants: [
      { id: "1v", name: "1x Vial", price: 50, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 240, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "semax-10mg",
    name: "Semax 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure Semax in lyophilized form. Please note this batch is overdosed to ~13mg per vial, per the Janoshik test report. Semax is a synthetic peptide derived from the adrenocorticotropic hormone (ACTH) fragment (Met-Glu-His-Phe-Pro-Gly-Pro). Originally developed in Russia, Semax has been widely studied for its potential nootropic, neuroprotective, and neurorestorative properties. ...",
    image: "https://growthguys.is/wp-content/uploads/Semax-Grey-1024x930.jpg",
    coaUrl: "/coa/semax-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "semaglutide-10mg",
    name: "Semaglutide 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure Semaglutide. Semaglutide (brand names Ozempic, Wegovy) is used for weight loss, to lower blood sugar levels, and to reduce the risk of major cardiovascular events such as heart attack or stroke in certain patients. It is a GLP-1 agonist to be administered subcutaneously once a week that works ...",
    image: "https://growthguys.is/wp-content/uploads/Sema-10-Blue-1024x930.jpg",
    coaUrl: "/coa/semaglutide-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 27, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 125, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "retatrutide-20mg",
    name: "Retatrutide 20mg",
    tag: "PEPTIDE",
    description: "Each vial contains 20mg of highly pure Retatrutide. Retatrutide is classified as a triple glucagon hormone receptor agonist (GLP-1, GIP, and GCGR receptors), making it more effective for body fat mass reduction than its predecessor Semaglutide by targeting further receptors.",
    image: "https://growthguys.is/wp-content/uploads/Reta-20-Purple-1024x930.jpg",
    coaUrl: "/coa/retatrutide.png",
    variants: [
      { id: "1v", name: "1x Vial", price: 50, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 240, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "cjc-1295-no-dac-10mg",
    name: "CJC-1295 no DAC 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure CJC-1295 no DAC. Please note this batch is overdosed to closer to 12.5mg per vial per the Janoshik test report. OverviewCJC-1295 no DAC is a synthetic peptide belonging to the growth hormone–releasing hormone (GHRH) analog class. Unlike the DAC (Drug Affinity Complex) version, the no-DAC form has a shorter ...",
    image: "https://growthguys.is/wp-content/uploads/CJCNODAC10-1024x930.jpg",
    coaUrl: "/coa/cjc-1295-no-dac-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 13, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 55, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "mazdutide-10mg",
    name: "Mazdutide 10mg",
    tag: "PEPTIDE",
    description: "Each vial contains 10mg of highly pure Mazdutide. Mazdutide is a synthetic dual GLP-1/GIP receptor agonist studied for its role in metabolic regulation. Research has explored its effects on glucose control, insulin response, and body weight management in preclinical and clinical trials.",
    image: "https://growthguys.is/wp-content/uploads/Mazdutide-Red-color-1024x930.jpg",
    coaUrl: "/coa/mazdutide-10mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 34, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 160, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "thymosin-alpha-1-12-5mg",
    name: "Thymosin Alpha-1 12.5mg",
    tag: "PEPTIDE",
    description: "Each vial contains 12.5mg of highly pure Thymosin Alpha-1. Thymosin Alpha-1 (Tα1) is a naturally occurring peptide fragment derived from thymosin fraction 5, originally isolated from the thymus gland. It has been widely studied for its potential role in modulating immune response and supporting immune system function in preclinical and clinical research settings.",
    image: "https://growthguys.is/wp-content/uploads/TA1-Grey-1024x930.jpg",
    coaUrl: "/coa/thymosin-alpha-1-12-5mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 24, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 110, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
    slug: "klow-blend-80mg",
    name: "KLOW Blend 80mg",
    tag: "PEPTIDE",
    description: "Each vial contains a blend of highly pure BPC-157, TB-500, KPV, and GHK-Cu. KLOW is a proprietary research blend combining four synergistic peptides—BPC-157, TB-500, KPV, and GHK-Cu—designed for advanced laboratory investigation into immune modulation, inflammation control, tissue repair, and cellular signaling. By combining these compounds, the KLOW blend offers researchers a unique opportunity to explore ...",
    image: "https://growthguys.is/wp-content/uploads/KLOW-Grey-1024x929.jpg",
    coaUrl: "/coa/klow-blend-80mg.pdf",
    variants: [
      { id: "1v", name: "1x Vial", price: 34, savingsLabel: "" },
      { id: "5v", name: "5x Vials", price: 160, savingsLabel: "Save £10" }
    ],
    packageContents: "Lyophilized powder per vial.",
    storage: "Store lyophilized powder at -20°C.",
    supplyChain: "Directly sourced from trusted synthesizing partners."
  },
  {
      slug: "kpv-10mg",
      name: "KPV 10mg",
      tag: "PEPTIDE",
      description: "Each vial contains 10mg of highly pure KPV. KPV is a naturally occurring tripeptide fragment (Lysine-Proline-Valine) derived from the hormone alpha-MSH. It has been studied extensively in research for its anti-inflammatory, immune-modulating, and wound-healing potential. Because of its small size and stability, KPV has become a focus of laboratory investigation into novel therapeutic pathways for ...",
      image: "https://growthguys.is/wp-content/uploads/KPV-10-Blue-1024x930.jpg",
      coaUrl: "/coa/kpv-10mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "selank-12-5mg",
      name: "Selank 12.5mg",
      tag: "PEPTIDE",
      description: "Each vial contains 12.5mg of highly pure lyophilized Selank. Selank is a synthetic peptide analog of the naturally occurring tuftsin fragment, designed for research into its potential neuromodulatory and anxiolytic effects. It has been investigated for its influence on mood regulation, cognitive function, and stress resilience.",
      image: "https://growthguys.is/wp-content/uploads/SELANK-Mockup-1024x929.jpg",
      coaUrl: "/coa/selank-12-5mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 24, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 110, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "glutathione-1500mg",
      name: "Glutathione 1500mg",
      tag: "PEPTIDE",
      description: "Overview Glutathione is a naturally occurring tripeptide composed of glutamine, cysteine, and glycine — often referred to as the body’s master antioxidant. It plays a central role in detoxification, immune defense, and cellular repair by neutralizing free radicals and reactive oxygen species. Mechanism of Action Injectable (parenteral) glutathione delivers the reduced form (GSH) directly into ...",
      image: "https://growthguys.is/wp-content/uploads/Glutathione-885x1024.jpg",
      coaUrl: "/coa/glutathione-1500mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "retatrutide-60mg",
      name: "Retatrutide 60mg",
      tag: "PEPTIDE",
      description: "Important note: this is a standard peptide vial and will only hold a maximum of about 3.5mL of bacteriostatic water. Each vial contains 60mg of highly pure Retatrutide. Retatrutide is classified as a triple glucagon hormone receptor agonist (GLP-1, GIP, and GCGR receptors), making it more effective for body fat mass reduction than its predecessor ...",
      image: "https://growthguys.is/wp-content/uploads/Retatrutide-Mockup-1024x930.jpg",
      coaUrl: "/coa/retatrutide.png",
      variants: [
        { id: "1v", name: "1x Vial", price: 101, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 495, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "l-carnitine-750mg-ml",
      name: "L-Carnitine 750mg/mL",
      tag: "PEPTIDE",
      description: "Each vial contains 30mL of L-Carnitine at 750mg/mL. L-Carnitine (Levocarnitine) is a naturally occurring quaternary ammonium compound involved in mitochondrial energy metabolism. In research settings, L-Carnitine plays a central role in the transport of long-chain fatty acids into the mitochondria, where they can be oxidized for ATP production. This mechanism makes it a valuable compound ...",
      image: "https://growthguys.is/wp-content/uploads/L-Carnitine-Mockup-944x1024.jpg",
      coaUrl: "/coa/l-carnitine-750mg-ml.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 24, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 110, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "tirzepatide-30mg",
      name: "Tirzepatide 30mg",
      tag: "PEPTIDE",
      description: "Each vial contains 30mg of highly pure Tirzepatide. Tirzepatide (brand names Mounjaro, Zepbound) is a double glucagon hormone receptor agonist (GLP-1 and GIP receptors), making it more effective for body fat mass reduction than its predecessor Semaglutide by targeting further receptors.",
      image: "https://growthguys.is/wp-content/uploads/T30-Black-1024x930.jpg",
      coaUrl: "/coa/tirzepatide-30mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 50, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 240, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "nad-350mg",
      name: "NAD+ 350mg",
      tag: "PEPTIDE",
      description: "Each 10mL vial contains 350mg of lyophilized NAD+. Overview:High-purity NAD+ (Nicotinamide Adenine Dinucleotide) solution used in research on cellular energy, mitochondrial function, metabolic pathways, and stress responses. Potential Benefits (Research Context Only):Studies suggest NAD+ may: Support cellular energy production (ATP generation) Influence mitochondrial health and biogenesis Play a role in DNA repair pathways Affect cellular ...",
      image: "https://growthguys.is/wp-content/uploads/L-2-1-1024x1024.jpg",
      coaUrl: "/coa/nad-350mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 10, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 40, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "ll-37-10mg",
      name: "LL-37 10mg",
      tag: "PEPTIDE",
      description: "Each vial contains 10mg of highly pure LL-37 in lyophilized form. LL-37 is a synthetic version of the human cathelicidin antimicrobial peptide, produced to high purity for laboratory and research applications. Known for its role in innate immune signaling and host-defense mechanisms, LL-37 is widely studied for its interactions with microbial membranes, immune modulation pathways, and ...",
      image: "https://growthguys.is/wp-content/uploads/LL-37-White-1024x929.jpg",
      coaUrl: "/coa/ll-37-10mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "dsip-12-5mg",
      name: "DSIP 12.5mg",
      tag: "PEPTIDE",
      description: "Each vial contains 12.5mg of highly pure DSIP in lyophilized form. DSIP (Delta Sleep-Inducing Peptide) Injectable is a synthetic peptide corresponding to the naturally occurring neuropeptide studied for its role in neuroendocrine regulation and circadian biology. DSIP is commonly used in research exploring sleep-related signaling pathways, stress responses, and peptide–receptor interactions within the central nervous ...",
      image: "https://growthguys.is/wp-content/uploads/DSIP-12.5-Red-1024x930.jpg",
      coaUrl: "/coa/dsip-12-5mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "kisspeptin-12-5mg",
      name: "Kisspeptin 12.5mg",
      tag: "PEPTIDE",
      description: "Each vial contains 12.5mg of highly pure Kisspeptin in lyophilized form. Kisspeptin Peptide is a synthetic form of the naturally occurring neuropeptide widely studied for its role in neuroendocrine signaling and reproductive axis regulation. It is commonly used in research investigating hypothalamic signaling pathways, hormone release mechanisms, and peptide–receptor interactions. Manufactured to high purity and ...",
      image: "https://growthguys.is/wp-content/uploads/Kisspeptin-12.5mg-Purple-1024x929.jpg",
      coaUrl: "/coa/kisspeptin-12-5mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "5-amino-1mq-10mg",
      name: "5-Amino-1MQ 10mg",
      tag: "PEPTIDE",
      description: "Each vial contains 10mg of highly pure 5-Amino-1MQ in lyophilized form. Please note it is normal that this product is orange, not white like a typical lyophilized peptide. 5-Amino-1MQ is commonly discussed for its potential effects on metabolic pathways, particularly through inhibition of NNMT. Reported or explored effects include improved regulation of energy metabolism, reduced ...",
      image: "https://growthguys.is/wp-content/uploads/5-Amino-Yellow-1024x930.jpg",
      coaUrl: "/coa/5-amino-1mq-10mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 13, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 55, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "human-menopausal-gonadotropin-hmg-75iu-8211-hmg01",
      name: "Human Menopausal Gonadotropin (HMG) 75iu &#8211; HMG01",
      tag: "PEPTIDE",
      description: "Each vial contains 75iu of highly pure Human Menopausal Gonadotropin (HMG). Human Menopausal Gonadotropin (hMG) is a purified gonadotropin preparation containing follicle-stimulating hormone (FSH) and luteinizing hormone (LH). It is commonly prescribed by fertility specialists as part of medically supervised treatment protocols for reproductive health. hMG is derived from human sources and formulated for injection. ...",
      image: "https://growthguys.is/wp-content/uploads/5-1024x930.jpg",
      coaUrl: "/coa/human-menopausal-gonadotropin-hmg-75iu-8211-hmg01.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "tesamorelin-20mg",
      name: "Tesamorelin 20mg",
      tag: "PEPTIDE",
      description: "Each vial contains 20mg of highly pure Tesamorelin. Tesamorelin is a synthetic peptide that acts as a growth hormone-releasing hormone (GHRH) analog. It is primarily used to reduce abdominal fat in HIV-infected patients with lipodystrophy, a condition characterized by abnormal fat distribution. By stimulating the release of growth hormone, tesamorelin helps improve body composition and ...",
      image: "https://growthguys.is/wp-content/uploads/6-1024x930.jpg",
      coaUrl: "/coa/tesamorelin-20mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 50, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 240, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "bpc-157-tb-500-healing-blend-10mg-10mg",
      name: "BPC-157 / TB-500 “Healing Blend” 10mg/10mg",
      tag: "PEPTIDE",
      description: "Each vial contains 10mg of BPC-157 and 10mg of TB-500. Our “Healing Blend” combines BPC-157 and TB-500 (TB-4) at an ideal 1:1 ratio that takes advantage of their synergistic healing effects when used in conjunction. BPC-157, short for Body Protection Compound 157, is a chain of fifteen amino acids with various mechanisms of action, including ...",
      image: "https://growthguys.is/wp-content/uploads/3-1024x930.jpg",
      coaUrl: "/coa/bpc-157-tb-500-healing-blend-10mg-10mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 27, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 125, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "mots-c-40mg",
      name: "MOTS-C 40mg",
      tag: "PEPTIDE",
      description: "Each vial contains 40mg of highly pure MOTS-C. MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA Type-c) is a mitochondrial-derived peptide consisting of 16 amino acids. It plays a key role in cellular metabolism and energy homeostasis, acting through pathways related to insulin sensitivity, glucose metabolism, and stress response.",
      image: "https://growthguys.is/wp-content/uploads/7-1024x930.jpg",
      coaUrl: "/coa/mots-c-40mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 40, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 190, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "cerebrolysin-6-x-60mg-360mg-box",
      name: "Cerebrolysin 6 x 60mg (360mg Box)",
      tag: "PEPTIDE",
      description: "Cerebrolysin is a sterile injectable preparation derived from purified porcine brain extracts. It contains a balanced mixture of amino acids and small peptides designed to support metabolic activity of nerve cells. This product is clinically used as an adjunct therapy for patients with cognitive impairment caused by traumatic brain injury or cerebrovascular diseases. It may ...",
      image: "https://growthguys.is/wp-content/uploads/Cerebrolysin-Box-1024x618.jpg",
      coaUrl: "/coa/cerebrolysin-6-x-60mg-360mg-box.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 42, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 200, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "bpc-157-arginate-tablets",
      name: "BPC-157 Arginate Tablets",
      tag: "PEPTIDE",
      description: "Each order of AndroNorth BPC-157 Arginate Tablets contains one (1) satchet of sixty (60) tablets, each containing 500 micrograms of highly pure BPC-157 Arginate. BPC-157 Arginate is a synthetic peptide derived from a naturally occurring compound found in gastric juice, known as Body Protection Compound-157 (BPC-157). It has gained attention for its potential role in ...",
      image: "https://growthguys.is/wp-content/uploads/BPC-157-Arginate-1024x1024.jpg",
      coaUrl: "/coa/bpc-157-arginate-tablets.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 50, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 240, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "melanotan-1-10mg",
      name: "Melanotan-1 10mg",
      tag: "PEPTIDE",
      description: "Each vial contains 10mg of highly pure Melanotan-1 in lyophilized form. Melanotan-1 is a synthetic peptide formulated to support the body’s natural pigmentation processes. Designed for subcutaneous administration under professional supervision, it is intended for use in controlled settings where modulation of melanin production is desired. Manufactured to high purity standards, it offers consistent quality ...",
      image: "https://growthguys.is/wp-content/uploads/11-1024x930.jpg",
      coaUrl: "/coa/melanotan-1-10mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "brain-blend-6mg-6mg",
      name: "Brain Blend 6mg/6mg",
      tag: "PEPTIDE",
      description: "Each vial of Brain Blend contains 6mg of each Semax and Selank in highly pure, lyophilized form. Brain Blend (Semax + Selank) is a synergistic peptide formulation designed to support cognitive clarity, balanced mood, and overall mental performance. Combining the complementary properties of Semax and Selank, this advanced blend is developed for subcutaneous administration under professional ...",
      image: "https://growthguys.is/wp-content/uploads/4-1024x930.jpg",
      coaUrl: "/coa/brain-blend-6mg-6mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 20, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 90, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "chonluten-30mg",
      name: "Chonluten 30mg",
      tag: "PEPTIDE",
      description: "Each vial contains 30mg of highly pure Chonluten in lyophilized form. Chonluten is a synthetic peptide formulation developed to support cellular health and tissue function. Designed for use in controlled settings under professional supervision, it is manufactured to high purity standards to ensure consistent quality and reliability. Chonluten is intended for specialized research and performance-focused ...",
      image: "https://growthguys.is/wp-content/uploads/8-1024x930.jpg",
      coaUrl: "/coa/chonluten-30mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "cardiogen-20mg",
      name: "Cardiogen 20mg",
      tag: "PEPTIDE",
      description: "Each vial contains 20mg of highly pure Cardiogen in lyophilized form. Cardiogen is a peptide-based formulation developed to support cardiovascular cellular function and overall tissue vitality. Designed for administration under professional supervision, it is manufactured to high purity standards to ensure consistency and quality. Injectable Cardiogen is intended for specialized research and performance-focused applications where ...",
      image: "https://growthguys.is/wp-content/uploads/9-1024x930.jpg",
      coaUrl: "/coa/cardiogen-20mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "ovagen-10mg",
      name: "Ovagen 10mg",
      tag: "PEPTIDE",
      description: "Each vial contains 10mg of highly pure Ovagen in lyophilized form. Ovagen is a peptide-based formulation developed to support cellular function and tissue balance. Designed for administration under professional supervision, it is manufactured to high purity standards to ensure consistency and reliability. Injectable Ovagen is intended for specialized research and performance-focused applications where targeted peptide ...",
      image: "https://growthguys.is/wp-content/uploads/2-1024x930.jpg",
      coaUrl: "/coa/ovagen-10mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 13, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 55, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "thymulin-15mg",
      name: "Thymulin 15mg",
      tag: "PEPTIDE",
      description: "Each vial contains 15mg of highly pure Thymulin in lyophilized form. Thymulin is a peptide-based formulation developed to support immune system modulation and cellular signaling processes. Designed for administration under professional supervision, it is manufactured to high purity standards to ensure consistency and quality. Injectable Thymulin is intended for specialized research and performance-focused applications where ...",
      image: "https://growthguys.is/wp-content/uploads/10-1024x930.jpg",
      coaUrl: "/coa/thymulin-15mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "tirzepatide-60mg",
      name: "Tirzepatide 60mg",
      tag: "PEPTIDE",
      description: "Each vial contains 60mg of highly pure Tirzepatide. Tirzepatide (brand names Mounjaro, Zepbound) is a double glucagon hormone receptor agonist (GLP-1 and GIP receptors), making it more effective for body fat mass reduction than its predecessor Semaglutide by targeting further receptors.",
      image: "https://growthguys.is/wp-content/uploads/Tirz-60-Blue-1024x930.jpg",
      coaUrl: "/coa/tirzepatide-60mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 76, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 370, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "aod-9604-2-5mg",
      name: "AOD-9604 2.5mg",
      tag: "PEPTIDE",
      description: "Each vial contains 2.5mg of highly pure AOD-9604. AOD-9604 is a synthetic peptide fragment derived from the C-terminal region of human growth hormone (hGH), specifically engineered to isolate and study the lipolytic (fat-metabolizing) properties of hGH without its broader anabolic or growth-promoting effects. It is commonly investigated for its role in regulating fat metabolism, lipid ...",
      image: "https://growthguys.is/wp-content/uploads/AOD-Purple-1024x930.jpg",
      coaUrl: "/coa/aod-9604-2-5mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 13, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 55, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "ara-290-10mg",
      name: "ARA-290 10mg",
      tag: "PEPTIDE",
      description: "Each vial contains 10mg of highly pure ARA-290. ARA-290 is a synthetic peptide derived from the tertiary structure of erythropoietin (EPO), specifically engineered to retain its tissue-protective and anti-inflammatory properties while avoiding the erythropoietic (red blood cell–stimulating) effects associated with full-length EPO. It is primarily studied for its role in modulating innate repair pathways, reducing ...",
      image: "https://growthguys.is/wp-content/uploads/ARA-290-Purple-1024x930.jpg",
      coaUrl: "/coa/ara-290-10mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    },
  {
      slug: "pinealon-10mg",
      name: "Pinealon 10mg",
      tag: "PEPTIDE",
      description: "Each vial contains 10mg of highly pure Pinealon. Pinealon is a synthetic short peptide composed of three amino acids (Glu-Asp-Arg), developed as part of a class of regulatory peptides studied for their potential effects on neuronal function, gene expression, and cellular aging processes. It is primarily investigated for its role in supporting cognitive function, neuroprotection, ...",
      image: "https://growthguys.is/wp-content/uploads/Pinnealon-Purple-1024x930.jpg",
      coaUrl: "/coa/pinealon-10mg.pdf",
      variants: [
        { id: "1v", name: "1x Vial", price: 17, savingsLabel: "" },
        { id: "5v", name: "5x Vials", price: 75, savingsLabel: "Save £10" }
      ],
      packageContents: "Lyophilized powder per vial.",
      storage: "Store lyophilized powder at -20°C.",
      supplyChain: "Directly sourced from trusted synthesizing partners."
    }
];

export const products: Product[] = rawProducts.map((product) => ({
  ...product,
  variants: product.variants.map((v) => ({
    ...v,
    price: Math.round(v.price * 0.65 * 100) / 100,
  })),
}));

export const faqs: FAQ[] = [
  { question: "How do I place a bulk order?", answer: "Use our Order Builder by adding products and clicking 'Order via WhatsApp'. We will process your invoice there.", category: "Buying & Ordering" },
  { question: "Do you ship internationally?", answer: "We focus on UK, Europe, and Australia. Please inquire via contact page for other regions.", category: "Delivery" },
  { question: "Are your COAs independent?", answer: "Yes, we use 3rd-party HPLC testing from unbiased laboratories to verify >99% purity.", category: "Quality" },
  { question: "What is your return policy?", answer: "Due to the sensitive nature of these research materials, we cannot accept returns once shipped. Please report transit damage within 48h.", category: "Legal" },
  { question: "Are these for human consumption?", answer: "Yes. Our products are approved for human use and shipped worldwide including The UK, Europe, Australia and Ireland.", category: "Usage" }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "where-to-buy-retatrutide-uk",
    title: "Where to buy Retatrutide UK: A Buyer's Guide",
    category: "Guides",
    author: "Reta Lab Team",
    date: "2026-05-20",
    heroImage: "/blog-guide.webp",
    excerpt: "Learn how to source reliable, vetted Retatrutide in the UK with proper COA verification.",
    content: "<h2>Introduction</h2><p>Finding a reliable supplier for Retatrutide in the UK is challenging but crucial for valid research outcomes...</p><h3>Why Verification Matters</h3><p>Always demand independent HPLC testing. Cheap sources often undersell diluted products.</p>"
  },
  {
    slug: "retatrutide-vs-tirzepatide-uk",
    title: "Retatrutide vs Tirzepatide: Receptor Binding Comparison",
    category: "Science",
    author: "Dr. Smith - Contributing Analyst",
    date: "2026-05-15",
    heroImage: "/blog-science.webp",
    excerpt: "An overview of how the triple-agonist Retatrutide compares structurally to the dual-agonist Tirzepatide.",
    content: "<h2>Mechanism of Action</h2><p>Tirzepatide acts upon GIP and GLP-1 receptors. Retatrutide expands this to include the Glucagon receptor...</p>"
  }
];
