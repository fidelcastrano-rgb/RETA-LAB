export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  savingsLabel?: string;
}

export interface Product {
  slug: string;
  name: string;
  tag: string;
  badge?: string;
  description: string;
  image: string;
  coaUrl: string;
  variants: ProductVariant[];
  packageContents: string;
  storage: string;
  supplyChain: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  heroImage: string;
  excerpt: string;
  content: string; // HTML or Markdown
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}
