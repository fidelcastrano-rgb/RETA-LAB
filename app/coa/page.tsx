import React from "react";
import Image from "next/image";
import Link from "next/link";
import { productCOAs } from "./coaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Certificates of Analysis (COAs) | RETA LAB UK',
  description: 'Verify the quality and purity of our research peptides. Access our independent third-party HPLC testing results / Certificates of Analysis.',
  alternates: {
    canonical: 'https://reta-lab.co.uk/coa',
  },
};

export default function COAPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://reta-lab.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Certificates of Analysis",
        "item": "https://reta-lab.co.uk/coa"
      }
    ]
  };

  const slugMap: Record<string, string> = {
    "Retatrutide": "retatrutide-10mg",
    "GHK-Cu 70mg": "ghk-cu-70mg",
    "SS-31 50mg": "ss-31-50mg"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-[#F8FAFC]">
        <div className="bg-[#0F172A] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="text-xs md:text-sm font-semibold text-blue-200 mb-4 tracking-wide uppercase flex justify-center items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">COA Hub</span>
            </nav>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-6 tracking-tight">
              Certificates of Analysis (COAs)
            </h1>
            <p className="text-lg md:text-xl text-[#CBD5E1] max-w-3xl mx-auto">
              View our independent 3rd-party HPLC testing results to verify &gt;99% purity.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold font-heading text-[#0F172A] mb-8 border-b border-[#CBD5E1] pb-4">Verified Batch HPLC Test Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {productCOAs.map((coa) => (
              <div key={coa.name} className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] overflow-hidden flex flex-col animate-fade-inUnique">
                <div className="p-6 border-b border-[#E2E8F0]">
                  <h3 className="font-heading font-bold text-xl text-[#0F172A]">{coa.name}</h3>
                  <p className="text-sm text-[#64748B] mt-1">Batch: {coa.batch}</p>
                </div>
                <div className="bg-[#F1F5F9] p-4 flex-grow flex items-center justify-center relative min-h-[300px]">
                  <Image 
                    src={coa.image}
                    alt={`${coa.name} COA`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 bg-white border-t border-[#E2E8F0] space-y-2">
                  <a 
                    href={coa.image} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 bg-[#2563EB] text-white rounded font-medium hover:bg-[#1D4ED8] transition-colors"
                  >
                    View Full Image
                  </a>
                  {slugMap[coa.name] && (
                    <Link 
                      href={`/products/${slugMap[coa.name]}`}
                      className="block w-full text-center px-4 py-2 border border-[#FF6B1A] text-[#FF6B1A] rounded font-medium hover:bg-orange-50 transition-colors"
                    >
                      View Compound Product Page
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

        <div className="bg-[#EEF2F7] rounded-xl p-8 md:p-12 text-center border border-[#CBD5E1]">
          <h2 className="font-heading font-bold text-2xl text-[#0F172A] mb-4">
            More Testing In Progress
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto text-lg">
            We are currently conducting further independent HPLC testing for the remainder of our catalog. 
            The corresponding Certificates of Analysis will be uploaded here as soon as the testing is complete.
          </p>
        </div>
      </div>
    </main>
    </>
  );
}
