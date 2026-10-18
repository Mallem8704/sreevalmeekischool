import type { Metadata } from 'next';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Sree Valmeeki School | Education & Character Kadiri',
  description: 'Founded in 1999 in Kadiri, Sree Valmeeki E.M School nurtures academic excellence, strong values, self-discipline, and confidence from Nursery through Class 10.',
  alternates: {
    canonical: 'https://www.sreevalmeekischool.in/about',
  },
  openGraph: {
    title: 'About Sree Valmeeki School | Education & Character Kadiri',
    description: 'Founded in 1999 in Kadiri, Sree Valmeeki E.M School nurtures academic excellence, strong values, self-discipline, and confidence from Nursery through Class 10.',
    url: 'https://www.sreevalmeekischool.in/about',
    siteName: 'Sree Valmeeki E.M School',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/campus/school_entrance_gate.jpg', width: 1200, height: 630, alt: 'Sree Valmeeki School Campus Gate' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Sree Valmeeki School | Education & Character Kadiri',
    description: 'Founded in 1999 in Kadiri, Sree Valmeeki E.M School nurtures academic excellence, strong values, self-discipline, and confidence from Nursery through Class 10.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = getBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {children}
    </>
  );
}
