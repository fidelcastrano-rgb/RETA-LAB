export const metadata = {
  title: 'Terms of Use | RETA LAB UK',
  robots: 'noindex, nofollow' // as required by PDF spec
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold mb-8 text-[#0F172A]">Terms of Use</h1>
        <div className="prose max-w-none text-[#475569]">
          <p className="font-bold underline mb-4 text-[#FF6B1A]">DISCLAIMER: NOT FOR HUMAN CONSUMPTION</p>
          <p>By purchasing from RETA LAB UK, you agree to the following terms and conditions. All products listed on this website are strictly for laboratory research and analytical purposes only.</p>
          <h2>1. Use of Products</h2>
          <p>The compounds sold are not intended to be used as food additives, drugs, cosmetics, household chemicals, or other inappropriate applications. You must be a qualified researcher to purchase.</p>
          <h2>2. Liability</h2>
          <p>RETA LAB UK is not liable for any damages that may be caused by negligence, abuse, or any other unforeseen matter related to our products.</p>
          <h2>3. Shipping & Returns</h2>
          <p>Due to product degradation risks, we do not accept returns. All sales are final. If an item arrives damaged, you must contact us within 48 hours with photographic evidence.</p>
        </div>
      </div>
    </div>
  );
}
