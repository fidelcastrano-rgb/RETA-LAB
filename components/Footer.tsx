import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 border-t border-[#1D4ED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="Reta Lab UK Logo" width={40} height={40} className="object-contain" priority />
              <h3 className="font-heading font-bold text-xl">RETA LAB UK</h3>
            </div>
            <p className="text-[#CBD5E1] text-sm mb-4">
              UK&apos;s Most Trusted Research Peptide Wholesaler and Retailer. Elevating global research standards.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-[#EEF2F7]">Products</h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li><Link href="/products" className="hover:text-white transition-colors">All Peptides</Link></li>
              <li><Link href="/products/retatrutide-10mg" className="hover:text-white transition-colors">Retatrutide</Link></li>
              <li><Link href="/products/tirzepatide-15mg" className="hover:text-white transition-colors">Tirzepatide</Link></li>
              <li><Link href="/products/semaglutide-10mg" className="hover:text-white transition-colors">Semaglutide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-[#EEF2F7]">Research</h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li><Link href="/blog/where-to-buy-retatrutide-uk" className="hover:text-white transition-colors">Buying Guide</Link></li>
              <li><Link href="/blog/retatrutide-vs-tirzepatide-uk" className="hover:text-white transition-colors">Reta vs Tirz</Link></li>
              <li><Link href="/coa" className="hover:text-white transition-colors">Certificates of Analysis</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4 text-[#EEF2F7]">Company</h4>
            <ul className="space-y-2 text-sm text-[#CBD5E1]">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] text-xs text-[#CBD5E1] text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} RETA LAB UK. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-medium text-[rgba(255,255,255,0.5)]">
            We ship to The UK, Europe, Australia and Ireland. All products are approved for human use.
          </p>
        </div>
      </div>
    </footer>
  );
}
