export const metadata = {
  title: 'Contact Us | RETA LAB UK',
  description: 'Reach out to RETA LAB UK via WhatsApp or Email for wholesale inquiries.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-[calc(100vh-200px)] py-16">
      <div className="max-w-7xl mx-auto px-4">
         <h1 className="text-4xl font-heading font-bold text-[#0F172A] mb-12 text-center">Contact Reta Lab UK</h1>
         
         <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
           
           {/* Left */}
           <div className="space-y-6">
             <div className="bg-white border-2 border-[#10B981] p-8 rounded shadow-md relative">
               <div className="absolute top-0 right-0 bg-[#10B981] text-white text-xs font-bold px-3 py-1 rounded-bl">RECOMMENDED</div>
               <h2 className="text-2xl font-bold font-heading text-[#0F172A] mb-2">WhatsApp Ordering</h2>
               <p className="text-[#475569] mb-6">Fastest response times and secure order processing.</p>
               
               <a href="https://wa.me/447341056054" className="inline-block w-full text-center py-3 bg-[#25D366] text-white font-bold rounded hover:bg-opacity-90">
                 Message +44 7341 056054
               </a>
               
               <table className="w-full mt-6 text-sm text-[#475569]">
                 <tbody>
                   <tr className="border-b border-[#EEF2F7]">
                     <td className="py-2">Weekdays</td>
                     <td className="py-2 font-bold text-[#0F172A] text-right">&lt; 1 Hour</td>
                   </tr>
                   <tr>
                     <td className="py-2">Weekends</td>
                     <td className="py-2 font-bold text-[#0F172A] text-right">1-4 Hours</td>
                   </tr>
                 </tbody>
               </table>
             </div>

             <div className="bg-white border border-[#CBD5E1] p-8 rounded shadow-sm">
                <h2 className="text-2xl font-bold font-heading text-[#0F172A] mb-2">Email Wholesale</h2>
                <p className="text-[#475569] mb-4">For B2B orders or large volume laboratory supply.</p>
                <a href="mailto:sales@reta-lab.co.uk" className="text-[#2563EB] font-bold hover:underline">sales@reta-lab.co.uk</a>
             </div>

             <div className="bg-[#1D4ED8] text-white p-6 rounded">
                <h3 className="font-bold font-heading mb-2">4-Step Order Flow</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm text-[#CBD5E1]">
                  <li>Add items to cart</li>
                  <li>Submit to WhatsApp</li>
                  <li>Receive invoice & payment details</li>
                  <li>Next day tracked delivery</li>
                </ol>
             </div>
           </div>

           {/* Right */}
           <div className="space-y-6">
              <div className="bg-[#FF6B1A] bg-opacity-10 border border-[#FF6B1A] p-6 rounded">
                 <h3 className="text-[#FF6B1A] font-bold font-heading mb-2 text-xl">⚠️ No In-Store Collections</h3>
                 <p className="text-[#0F172A] text-sm">For security and privacy reasons, we operate out of closed distribution centers. Collection is strictly prohibited.</p>
              </div>

              <div className="bg-white p-6 border border-[#CBD5E1] rounded">
                <h3 className="font-bold font-heading text-[#0F172A] mb-4">Shipping Information</h3>
                <table className="w-full text-sm text-[#475569]">
                  <tbody>
                    <tr className="border-b border-[#EEF2F7]">
                      <td className="py-3">UK Special Delivery</td>
                      <td className="py-3 font-bold text-[#0F172A] text-right">Next Day (Order by 2PM)</td>
                    </tr>
                    <tr className="border-b border-[#EEF2F7]">
                      <td className="py-3">EU Tracked</td>
                      <td className="py-3 font-bold text-[#0F172A] text-right">3-5 Working Days</td>
                    </tr>
                    <tr>
                      <td className="py-3">Australia / Global</td>
                      <td className="py-3 font-bold text-[#0F172A] text-right">7-10 Working Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
           </div>

         </div>
      </div>
    </div>
  );
}
