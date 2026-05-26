import Image from "next/image";
import Link from "next/link";
import { products, faqs, blogPosts } from "@/lib/data";
import { SeoContent } from "@/components/SeoContent";

export default function Homepage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RETA LAB UK",
    "url": "https://reta-lab.co.uk",
    "logo": "https://picsum.photos/seed/logo/200/50",
    "description": "UK's Most Trusted Research Peptide Wholesaler and Retailer",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* 1. Notice/announcement bar */}
      <div className="bg-[#FF6B1A] text-white text-xs font-bold py-2 overflow-hidden whitespace-nowrap relative flex">
        <div className="animate-marquee inline-block whitespace-nowrap min-w-full">
          <span className="mx-4">&bull; SAME DAY DISPATCH BEFORE 2PM UK TIME</span>
          <span className="mx-4">&bull; OVER 10,000 SUCCESSFUL DELIVERIES</span>
          <span className="mx-4">&bull; INDEPENDENT 3RD PARTY HPLC TESTED</span>
          <span className="mx-4">&bull; GUARANTEED &gt;99% PURITY</span>
          <span className="mx-4">&bull; SAME DAY DISPATCH BEFORE 2PM UK TIME</span>
          <span className="mx-4">&bull; OVER 10,000 SUCCESSFUL DELIVERIES</span>
          <span className="mx-4">&bull; INDEPENDENT 3RD PARTY HPLC TESTED</span>
          <span className="mx-4">&bull; GUARANTEED &gt;99% PURITY</span>
        </div>
      </div>

      {/* 3. Hero Section */}
      <section className="relative bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-screen">
           <Image
            src="/alluvi-retatrutide.png"
            alt="Alluvi Retatrutide Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-48 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight leading-tight max-w-5xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
              Clinical Grade <span className="text-[#2563EB] drop-shadow-lg">Research Peptides</span> Delivered UK Wide
            </h1>
            <p className="text-[#CBD5E1] text-lg md:text-xl mb-10 max-w-3xl drop-shadow-md">
              Buy Retatrutide, Tirzepatide, and Semaglutide with absolute confidence. Independent UK HPLC tested, &gt;99% purity guaranteed. Wholesale and retail supply.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Link href="/products" className="w-full sm:w-auto px-8 py-3 bg-[#FF6B1A] text-white rounded font-bold hover:bg-opacity-90 transition-opacity text-center text-lg">
                View All Peptides
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-3 bg-transparent border border-[#CBD5E1] text-[#CBD5E1] rounded font-bold hover:bg-[#EEF2F7] hover:text-[#0F172A] transition-colors text-center text-lg">
                Contact Wholesale
              </Link>
            </div>
            <div className="mt-12 flex justify-center gap-4">
              <div className="flex items-center gap-2 bg-[#0F172A]/60 px-4 py-2 rounded border border-[#CBD5E1]/30 text-sm md:text-base font-medium text-white shadow-lg backdrop-blur-md">
                 <span className="text-[#10B981] font-bold drop-shadow">✔</span> HPLC Tested
              </div>
              <div className="flex items-center gap-2 bg-[#0F172A]/60 px-4 py-2 rounded border border-[#CBD5E1]/30 text-sm md:text-base font-medium text-white shadow-lg backdrop-blur-md">
                 <span className="text-[#10B981] font-bold drop-shadow">✔</span> GMP Verified
              </div>
            </div>
        </div>
      </section>

      {/* 4. Horizontal Scroll Strip (Features) */}
      <section className="bg-[#EEF2F7] py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex gap-8 justify-between items-center text-[#475569] font-medium text-sm md:text-base flex-wrap">
          <div className="flex items-center gap-2 px-4"><span className="text-[#2563EB] text-xl">♦</span> Next Day UK Delivery</div>
          <div className="flex items-center gap-2 px-4"><span className="text-[#2563EB] text-xl">♦</span> Independent COAs Available</div>
          <div className="flex items-center gap-2 px-4"><span className="text-[#2563EB] text-xl">♦</span> No Under-Dosing Guarantee</div>
          <div className="flex items-center gap-2 px-4"><span className="text-[#2563EB] text-xl">♦</span> Secure Payments</div>
        </div>
      </section>

      {/* 5. Features/Precision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded overflow-hidden shadow-lg border border-[#CBD5E1]">
            <Image
              src="/precision-lab-small.webp"
              alt="Precision Laboratory Testing HPLC AI Visualization"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-[#0F172A]">Uncompromising Analytical Precision</h2>
            <p className="text-[#475569] mb-4 text-lg">
              We understand that the validity of your research depends entirely on the quality of your compounds. That is why Reta Lab UK submits every batch to rigorous independent third-party analysis.
            </p>
            <ul className="space-y-4 text-[#475569] mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold mt-1">✓</span>
                <div>
                  <strong className="block text-[#0F172A]">HPLC Specificity above 99%</strong>
                  Mass Spectrometry results available per batch ID.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold mt-1">✓</span>
                <div>
                  <strong className="block text-[#0F172A]">Temperature Controlled</strong>
                  Cold chain supply protocols for maximum molecular stability.
                </div>
              </li>
            </ul>
            <Link href="/about" className="text-[#2563EB] font-bold hover:underline inline-flex items-center gap-2">
              Learn about our standards →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Products Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-[#0F172A]">Shop Research Peptides</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">Select from our highest purity clinical-grade peptides, available for immediate dispatch across the UK.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 12).map((product) => {
              const startingPrice = product.variants && product.variants.length > 0 
                ? Math.min(...product.variants.map(v => v.price)) 
                : null;
              return (
                <div key={product.slug} className="bg-white rounded border border-[#CBD5E1] shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                  <Link href={`/products/${product.slug}`} className="block relative aspect-square bg-[#EEF2F7]">
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-10 bg-[#FF6B1A] text-white text-xs font-bold px-3 py-1 rounded">
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
                    <div className="mb-2">
                      <Link href={`/products/${product.slug}`} className="block">
                        <h3 className="text-xl font-heading font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors line-clamp-1">{product.name}</h3>
                      </Link>
                    </div>
                    
                    <div className="flex justify-between items-center mb-3">
                      {startingPrice !== null && (
                        <span className="text-lg font-extrabold text-[#10B981]">
                          {product.variants.length > 1 ? `From £${startingPrice}` : `£${startingPrice}`}
                        </span>
                      )}
                      <span className="text-xs font-semibold bg-[#F1F5F9] text-[#475569] px-2 py-0.5 rounded border border-[#E2E8F0]">
                        {product.tag}
                      </span>
                    </div>

                    <p className="text-sm text-[#475569] mb-4 pb-4 border-b border-[#EEF2F7] line-clamp-2 md:line-clamp-3">
                      {product.description}
                    </p>
                    
                    <div className="mt-auto flex justify-center">
                      <Link 
                        href={`/products/${product.slug}`}
                        className="w-full text-center py-2.5 bg-[#2563EB] text-white font-bold rounded hover:bg-[#1D4ED8] transition-colors"
                      >
                        View Details & Order
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Proven Data / Stats Section */}
      <section className="bg-[#0F172A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[rgba(255,255,255,0.1)]">
          <div className="px-4">
            <div className="text-4xl font-heading font-bold text-[#FF6B1A] mb-2">&gt;99%</div>
            <div className="text-sm text-[#CBD5E1]">HPLC Purity Average</div>
          </div>
          <div className="px-4">
            <div className="text-4xl font-heading font-bold text-[#FF6B1A] mb-2">10k+</div>
            <div className="text-sm text-[#CBD5E1]">Orders Fulfilled</div>
          </div>
          <div className="px-4">
            <div className="text-4xl font-heading font-bold text-[#FF6B1A] mb-2">24h</div>
            <div className="text-sm text-[#CBD5E1]">Dispatch Time</div>
          </div>
          <div className="px-4">
            <div className="text-4xl font-heading font-bold text-[#FF6B1A] mb-2">3</div>
            <div className="text-sm text-[#CBD5E1]">Independent Labs</div>
          </div>
        </div>
      </section>

      {/* 11. FAQ / Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4 text-[#0F172A]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.slice(0, 5).map((faq, index) => (
              <details key={index} className="group border border-[#CBD5E1] rounded bg-[#F8FAFC]">
                <summary className="font-bold font-heading p-4 cursor-pointer text-[#0F172A] marker:text-[#2563EB] hover:text-[#2563EB] transition-colors">
                  {faq.question}
                </summary>
                <div className="p-4 pt-0 text-[#475569] border-t border-[#EEF2F7]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-[#2563EB] font-bold hover:underline">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="py-20 bg-[#EEF2F7] relative border-t border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6 text-[#0F172A]">Ready to advance your research?</h2>
          <p className="text-[#475569] mb-8 text-lg">
            Ensure the integrity of your studies with UK&apos;s most rigorously tested peptide supply.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/products" className="px-8 py-4 bg-[#FF6B1A] text-white rounded font-bold hover:bg-opacity-90 transition-opacity shadow-lg">
              View Product Catalogue
            </Link>
          </div>
        </div>
      </section>

      <SeoContent />
    </>
  );
}
