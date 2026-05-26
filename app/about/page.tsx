import Image from "next/image";
import Link from 'next/link';

export const metadata = {
  title: 'About Us | RETA LAB UK',
  description: 'Learn about Reta Lab UK, the leading supplier of >99% purity research peptides. View our lab quality timelines and company story.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFC] pb-20">
      {/* 1. Hero */}
      <div className="relative bg-[#0F172A] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 hidden md:block">
           <Image src="https://picsum.photos/seed/about-bg/1920/1080" alt="Lab Wide" fill sizes="100vw" className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Setting the Standard in UK Peptide Supply</h1>
          <p className="text-xl text-[#CBD5E1] max-w-2xl mx-auto">
             Driven by analytical transparency and rigorous cold-chain logistics.
          </p>
        </div>
      </div>

      {/* 2. Stats Row */}
      <div className="bg-[#2563EB] text-white py-8 border-b-4 border-[#FF6B1A]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          <div><div className="text-3xl font-bold font-heading mb-1">2020</div><div className="text-sm">Established</div></div>
          <div><div className="text-3xl font-bold font-heading mb-1">&gt;99%</div><div className="text-sm">Purity Baseline</div></div>
          <div><div className="text-3xl font-bold font-heading mb-1">500k+</div><div className="text-sm">Vials Distributed</div></div>
          <div><div className="text-3xl font-bold font-heading mb-1">24h</div><div className="text-sm">Average Delivery</div></div>
        </div>
      </div>

      {/* 3. Our Story */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-[#0F172A] mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-[#475569]">
              <p>RETA LAB UK was founded to address a critical gap in the European research compound market: consistent, verifiable quality.</p>
              <p>For years, researchers dealt with fluctuating purities and counterfeit products. We built a supply chain focusing solely on established compounds like Retatrutide and Tirzepatide, enforcing strict 3rd-party HPLC testing on every single batch before it enters our system.</p>
              <p>We do not compromise. We do not underdose. We exist to provide the foundation of valid research data.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded border border-[#CBD5E1] shadow-lg">
             <div className="text-xs font-bold text-[#FF6B1A] mb-2 uppercase">Independent Data</div>
             <h3 className="text-2xl font-bold font-heading text-[#0F172A] mb-4">Sample COA Metrics</h3>
             <ul className="space-y-3 mb-6">
                <li className="flex justify-between border-b border-[#EEF2F7] pb-2 text-[#475569]"><span>Compound:</span> <strong className="text-[#0F172A]">Retatrutide Lyophilized</strong></li>
                <li className="flex justify-between border-b border-[#EEF2F7] pb-2 text-[#475569]"><span>Method:</span> <strong className="text-[#0F172A]">HPLC-MS</strong></li>
                <li className="flex justify-between border-b border-[#EEF2F7] pb-2 text-[#475569]"><span>Result:</span> <strong className="text-[#10B981]">99.4% Purity</strong></li>
                <li className="flex justify-between border-b border-[#EEF2F7] pb-2 text-[#475569]"><span>Impurity A:</span> <strong className="text-[#0F172A]">{"<"} 0.3%</strong></li>
             </ul>
             <Link href="/products" className="w-full block text-center py-2 bg-[#2563EB] text-white rounded font-bold">View Inventory</Link>
          </div>
        </div>
      </div>

      {/* 4. Values */}
      <div className="bg-white py-20 border-y border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-3xl font-bold font-heading text-center text-[#0F172A] mb-12">Core Principles</h2>
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {['Transparency', 'Purity', 'Discretion', 'Speed', 'Fair Pricing', 'Service'].map((val) => (
                <div key={val} className="p-6 bg-[#F8FAFC] border border-[#EEF2F7] rounded shadow-sm text-center">
                   <div className="w-12 h-12 bg-[#EEF2F7] border border-[#CBD5E1] rounded-full mx-auto mb-4 flex items-center justify-center text-[#2563EB] font-bold">✓</div>
                   <h3 className="text-xl font-bold font-heading text-[#0F172A] mb-2">{val}</h3>
                   <p className="text-sm text-[#475569]">Unwavering commitment to {val.toLowerCase()} across our entire operation.</p>
                </div>
             ))}
           </div>
        </div>
      </div>
      
    </div>
  );
}
