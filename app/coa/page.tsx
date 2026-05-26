import React from "react";
import Image from "next/image";
import Link from "next/link";
import { productCOAs } from "./coaData";

export default function COAPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <div className="bg-[#0F172A] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl mb-6 tracking-tight">
            Certificates of Analysis (COAs)
          </h1>
          <p className="text-lg md:text-xl text-[#CBD5E1] max-w-3xl mx-auto">
            View our independent 3rd-party HPLC testing results to verify &gt;99% purity.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCOAs.map((coa) => (
            <div key={coa.name} className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] overflow-hidden flex flex-col">
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
              <div className="p-4 bg-white border-t border-[#E2E8F0]">
                <a 
                  href={coa.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-[#2563EB] text-white rounded font-medium hover:bg-[#1D4ED8] transition-colors"
                >
                  View Full Image
                </a>
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
  );
}
