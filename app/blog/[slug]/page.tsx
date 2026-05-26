import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) return {};
  
  return {
    title: `${post.title} | RETA LAB UK`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.heroImage,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="bg-[#F8FAFC] pb-24">
         <div className="max-w-4xl mx-auto px-4 pt-12 pb-8">
            <Link href="/blog" className="text-[#2563EB] font-bold text-sm mb-8 inline-block hover:underline">← Back to Research Hub</Link>
            
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs bg-[#2563EB] text-white font-bold px-3 py-1 rounded">{post.category}</span>
              <span className="text-sm text-[#475569]">{post.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#0F172A] mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="text-[#475569] text-sm mb-12 flex items-center gap-2">
               By <strong className="text-[#0F172A]">{post.author}</strong> | 
               <span className="italic">Disclaimer: Analytical purposes only</span>
            </div>

            <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-12 shadow-md border border-[#CBD5E1]">
               <Image src={post.heroImage} alt={post.title} fill sizes="(max-width: 896px) 100vw, 896px" className="object-cover" priority referrerPolicy="no-referrer" />
            </div>

            <div className="prose prose-lg max-w-none text-[#0F172A] mb-16" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* CTAs */}
            <div className="bg-[#0F172A] text-white p-8 rounded-lg shadow-xl text-center">
               <h3 className="text-2xl font-heading font-bold mb-4">Advance Your Research Today</h3>
               <p className="text-[#CBD5E1] mb-6">Access UK&apos;s highest purity, independently verified peptides.</p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="https://wa.me/447341056054" className="px-6 py-3 bg-[#25D366] text-white rounded font-bold hover:bg-opacity-90">Order via WhatsApp</a>
                  <Link href="/products" className="px-6 py-3 bg-[#EEF2F7] text-[#0F172A] rounded font-bold hover:bg-[#CBD5E1]">View Products</Link>
               </div>
            </div>
         </div>
      </div>
    </>
  );
}
