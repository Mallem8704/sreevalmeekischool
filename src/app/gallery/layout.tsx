import type { Metadata } from 'next';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Photo Gallery & Campus Life | Sree Valmeeki School Kadiri',
  description: 'Browse authentic photos of school assemblies, science fairs, sports meets, annual day celebrations, and daily classroom moments at Sree Valmeeki School Kadiri.',
  alternates: {
    canonical: 'https://www.sreevalmeekischool.in/gallery',
  },
  openGraph: {
    title: 'Photo Gallery & Campus Life | Sree Valmeeki School Kadiri',
    description: 'Browse authentic photos of school assemblies, science fairs, sports meets, annual day celebrations, and daily classroom moments at Sree Valmeeki School Kadiri.',
    url: 'https://www.sreevalmeekischool.in/gallery',
    siteName: 'Sree Valmeeki E.M School',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/school/school-event-4.jpg', width: 1200, height: 630, alt: 'Sree Valmeeki Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Gallery & Campus Life | Sree Valmeeki School Kadiri',
    description: 'Browse authentic photos of school assemblies, science fairs, sports meets, annual day celebrations, and daily classroom moments at Sree Valmeeki School Kadiri.',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = getBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Gallery', url: '/gallery' },
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
