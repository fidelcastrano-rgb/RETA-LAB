import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { ProductOrderActions } from './ProductOrderActions';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);
  
  if (!product) return {};
  
  return {
    title: `Buy ${product.name} UK | RETA LAB UK`,
    description: `Purchase premium grade ${product.name}. >99% purity guaranteed. Research peptide wholesaler based in the UK. Next day dispatch.`,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | RETA LAB UK`,
      description: product.description,
      images: [{ url: product.image }],
    }
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) notFound();

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "RETA LAB UK"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": `https://reta-lab.co.uk/products/${product.slug}`,
      "priceCurrency": "GBP",
      "lowPrice": product.variants[0].price,
      "highPrice": product.variants[product.variants.length - 1].price,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="bg-[#F8FAFC] py-8 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <nav className="text-sm font-medium text-[#475569] mb-8">
             <Link href="/" className="hover:text-[#2563EB]">Home</Link> &gt; 
             <Link href="/products" className="hover:text-[#2563EB] ml-1">Products</Link> &gt; 
             <span className="text-[#0F172A] ml-1">{product.name}</span>
           </nav>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             
             {/* Left Column: Image */}
             <div>
                <div className="bg-white border text-center border-[#CBD5E1] rounded shadow-sm overflow-hidden mb-4 relative aspect-square">
                   {product.badge && (
                      <div className="absolute top-4 left-4 z-10 bg-[#FF6B1A] text-white text-xs font-bold px-3 py-1 rounded shadow-md">
                        {product.badge}
                      </div>
                   )}
                   <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-8 md:p-12 mix-blend-multiply"
                      priority
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center opacity-10 mix-blend-multiply">
                     <Image src="/logo.png" alt="Watermark" fill className="object-contain p-20" />
                   </div>
                </div>
                
                {/* Thumbnails (Mocked) */}
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="aspect-square bg-white border border-[#CBD5E1] relative rounded opacity-60 hover:opacity-100 cursor-not-allowed">
                       <Image src={product.image} fill sizes="(max-width: 768px) 33vw, 15vw" alt="Thumb" className="object-cover p-2" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
             </div>

             {/* Right Column: Info & Actions */}
             <div className="flex flex-col">
                <span className="text-[#2563EB] font-bold text-sm mb-2 uppercase tracking-wide">
                  {product.tag}
                </span>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#0F172A] mb-4">
                  {product.name}
                </h1>
                
                <div className="inline-block bg-[#10B981] bg-opacity-10 text-[#10B981] font-bold px-3 py-1 rounded text-sm mb-6 border border-[#10B981] w-max">
                  ● In Stock (Ready to dispatch)
                </div>

                <p className="text-[#475569] text-lg mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Client component for ordering */}
                <ProductOrderActions product={product} />

                <div className="mt-8 pt-8 border-t border-[#CBD5E1] grid grid-cols-2 gap-4">
                   <div className="border border-[#CBD5E1] border-l-4 border-l-[#FF6B1A] bg-white p-4 rounded text-sm text-[#475569]">
                     <strong className="block text-[#0F172A] mb-1">How Ordering Works</strong>
                     Add to builder, submit via WhatsApp or Email, receive custom invoice.
                   </div>
                   <div className="border border-[#CBD5E1] border-l-4 border-l-[#10B981] bg-white p-4 rounded text-sm text-[#475569]">
                     <strong className="block text-[#0F172A] mb-1">Safety Protocol</strong>
                     Cold chain maintained. Discreet, secure packaging.
                   </div>
                </div>

                <div className="mt-6 flex">
                  <a href={product.coaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#2563EB] font-bold text-sm bg-[#EEF2F7] px-4 py-2 border border-[#CBD5E1] rounded hover:bg-[#CBD5E1] transition-colors">
                    📄 View Verifiable COA
                  </a>
                </div>
             </div>
           </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-6 bg-[#F8FAFC] border border-[#EEF2F7] rounded">
               <h3 className="font-heading font-bold text-xl mb-3 text-[#0F172A]">Package Contents</h3>
               <p className="text-[#475569]">{product.packageContents}</p>
             </div>
             <div className="p-6 bg-[#F8FAFC] border border-[#EEF2F7] rounded">
               <h3 className="font-heading font-bold text-xl mb-3 text-[#0F172A]">Storage Options</h3>
               <p className="text-[#475569]">{product.storage}</p>
             </div>
             <div className="p-6 bg-[#F8FAFC] border border-[#EEF2F7] rounded">
               <h3 className="font-heading font-bold text-xl mb-3 text-[#0F172A]">Supply Chain</h3>
               <p className="text-[#475569]">{product.supplyChain}</p>
             </div>
           </div>
        </div>
      </div>
    </>
  );
}
