import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Research Blog | RETA LAB UK',
  description: 'Guides, research comparisons, and updates on peptides like Retatrutide and Tirzepatide.',
};

export default function BlogListingPage() {
  return (
    <>
      <div className="bg-[#1D4ED8] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Peptide Research Hub</h1>
          <p className="text-lg text-[#CBD5E1]">Stay updated with the latest in compound sourcing and analysis.</p>
        </div>
      </div>

      <div className="bg-[#F8FAFC] py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {blogPosts.map(post => (
               <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white border border-[#CBD5E1] rounded shadow-sm hover:shadow-md transition-shadow group flex flex-col overflow-hidden">
                 <div className="relative aspect-video bg-[#EEF2F7] overflow-hidden">
                    <Image src={post.heroImage} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                 </div>
                 <div className="p-6 flex-1 flex flex-col">
                   <div className="flex justify-between items-center mb-3">
                     <span className="text-xs bg-[#EEF2F7] text-[#2563EB] font-bold px-2 py-1 rounded">{post.category}</span>
                     <span className="text-xs text-[#475569]">{post.date}</span>
                   </div>
                   <h2 className="font-heading font-bold text-[#0F172A] text-xl mb-3 group-hover:text-[#2563EB] transition-colors">{post.title}</h2>
                   <p className="text-[#475569] text-sm mb-4 flex-1">{post.excerpt}</p>
                   <span className="text-[#FF6B1A] font-bold text-sm">Read Article →</span>
                 </div>
               </Link>
             ))}
           </div>
        </div>
      </div>
    </>
  );
}
