import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Research Peptides Catalogue | RETA LAB UK',
  description: 'Shop our premium catalogue of research peptides including Retatrutide, Tirzepatide, and Semaglutide. Buy online in the UK.',
  alternates: {
    canonical: 'https://reta-lab.co.uk/products',
  },
};

export default function ProductsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://reta-lab.co.uk/products/${p.slug}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="bg-[#1D4ED8] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Research Peptides Catalogue</h1>
          <p className="text-lg text-[#CBD5E1] max-w-2xl mx-auto">
            Explore our range of highest-purity, independently tested lyophylised peptides. Ready for overnight UK dispatch.
          </p>
        </div>
      </div>

      {/* Filter bar mock */}
      <div className="sticky top-16 z-30 bg-white border-b border-[#CBD5E1] py-4 shadow-sm">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-4 overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
            <button className="px-4 py-1.5 rounded-full bg-[#2563EB] text-white text-sm font-bold whitespace-nowrap">All Products</button>
            <button className="px-4 py-1.5 rounded-full bg-[#EEF2F7] text-[#475569] text-sm font-bold hover:bg-[#CBD5E1] whitespace-nowrap transition-colors">GLP-1 Agonists</button>
            <button className="px-4 py-1.5 rounded-full bg-[#EEF2F7] text-[#475569] text-sm font-bold hover:bg-[#CBD5E1] whitespace-nowrap transition-colors">GIP/GLP-1/GCGR</button>
         </div>
      </div>

      <div className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Available Research Peptide Compounds Catalogue</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.slug} className="bg-white rounded border border-[#CBD5E1] shadow-sm flex flex-col overflow-hidden">
                <Link href={`/products/${product.slug}`} className="block relative aspect-square bg-[#EEF2F7]">
                  {product.badge && (
                     <div className="absolute top-4 left-4 z-10 bg-[#FF6B1A] text-white text-xs font-bold px-3 py-1 rounded shadow-md">
                       {product.badge}
                     </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover p-8 mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center opacity-10 mix-blend-multiply">
                    <Image src="/logo.png" alt="Watermark" fill className="object-contain p-12" />
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex gap-2 mb-3">
                     <span className="text-xs bg-[#EEF2F7] text-[#475569] px-2 py-1 rounded font-medium border border-[#CBD5E1]">{product.tag}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-2">{product.name}</h3>
                  <p className="text-sm text-[#475569] mb-4 pb-4 border-b border-[#EEF2F7] flex-1">
                    {product.description}
                  </p>
                  
                  <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded p-3 mb-4 flex justify-between items-center">
                    <span className="text-xs font-bold text-[#475569]">Purity Assured</span>
                    <Link href={product.coaUrl} className="text-[#2563EB] text-xs font-bold hover:underline flex items-center gap-1">
                      View COA
                    </Link>
                  </div>

                  <Link 
                    href={`/products/${product.slug}`}
                    className="w-full text-center py-3 bg-[#FF6B1A] text-white font-bold rounded hover:bg-opacity-90 transition-opacity"
                  >
                    View Packages & Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
