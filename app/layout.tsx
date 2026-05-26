import type {Metadata} from 'next';
import './globals.css';
import { spaceGrotesk, dmSans } from '@/lib/fonts';
import { OrderProvider } from '@/components/OrderContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { OrderBuilder } from '@/components/OrderBuilder';

export const metadata: Metadata = {
  title: 'RETA LAB UK | UK\'s Most Trusted Research Peptide Wholesaler',
  description: 'Premium quality research peptides including Retatrutide, Tirzepatide, and Semaglutide. >99% purity with independent COA verification.',
  keywords: 'Retatrutide UK, buy retatrutide uk, retatrutide peptide, research peptides UK, buy tirzepatide, buy semaglutide',
  metadataBase: new URL('https://reta-lab.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RETA LAB UK | Research Peptides',
    description: 'UK\'s Most Trusted Research Peptide Wholesaler and Retailer',
    siteName: 'RETA LAB UK',
    images: [
      {
        url: 'https://picsum.photos/seed/ogimage/1200/630',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F172A',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <meta name="google-site-verification" content="GSC-VERIFICATION-TAG" />
      </head>
      <body className="flex flex-col min-h-screen font-body antialiased" suppressHydrationWarning>
        <OrderProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <WhatsAppFloat />
          <OrderBuilder />
          <Footer />
        </OrderProvider>
      </body>
    </html>
  );
}
