export const metadata = {
  title: 'Privacy Policy | RETA LAB UK',
  robots: 'noindex, nofollow' // as required by PDF spec
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold mb-8 text-[#0F172A]">Privacy Policy</h1>
        <div className="prose max-w-none text-[#475569]">
          <p>At RETA LAB UK, your privacy and discretion are paramount.</p>
          <h2>Data Collection</h2>
          <p>We only collect the minimum amount of data required to process and ship your orders. We do not sell your data to third parties.</p>
          <h2>Communication</h2>
          <p>If you contact us via WhatsApp, your phone number will be used solely to communicate regarding your current and future orders.</p>
          <h2>Cookies</h2>
          <p>We use local storage strictly to persist your shopping cart.</p>
        </div>
      </div>
    </div>
  );
}
