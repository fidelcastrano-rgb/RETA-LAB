import { Metadata } from 'next';
import { faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | RETA LAB UK',
  description: 'Find answers on Ordering, Shipping, Product Quality, and Legal parameters at Reta Lab UK.',
};

export default function FAQPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="bg-[#1D4ED8] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-[#CBD5E1]">Everything you need to know about placing an order and product handling.</p>
        </div>
      </div>

      <div className="py-16 bg-[#F8FAFC] min-h-[500px]">
        <div className="max-w-4xl mx-auto px-4">
           {/* To keep JS minimal, we'll just list them out with details/summary which requires 0 JS */}
           <div className="space-y-6">
              {['Buying & Ordering', 'Delivery', 'Quality', 'Legal', 'Usage'].map(category => (
                <div key={category} className="mb-8">
                  <h2 className="text-2xl font-bold font-heading text-[#0F172A] mb-4 border-b border-[#CBD5E1] pb-2">{category}</h2>
                  <div className="space-y-3">
                    {faqs.filter(f => f.category === category).map((faq, i) => (
                      <details key={i} className="group bg-white border border-[#CBD5E1] rounded shadow-sm">
                        <summary className="font-bold font-heading p-4 cursor-pointer text-[#0F172A] marker:text-[#2563EB] hover:text-[#2563EB] transition-colors">
                          {faq.question}
                        </summary>
                        <div className="p-4 pt-0 text-[#475569] border-t border-[#EEF2F7]">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                    {faqs.filter(f => f.category === category).length === 0 && (
                      <div className="text-sm text-[#475569] italic p-4">No questions explicitly categorized here yet. Let us know if you have one.</div>
                    )}
                  </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </>
  );
}
