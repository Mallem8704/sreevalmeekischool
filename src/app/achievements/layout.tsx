import type { Metadata } from 'next';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'SSC Results & Achievements | Sree Valmeeki School Kadiri',
  description: 'Explore verified SSC board results, town 1st rankers, subject centum scores, and sports achievements across 28 years of distinction at Sree Valmeeki Kadiri.',
  alternates: {
    canonical: 'https://www.sreevalmeekischool.in/achievements',
  },
  openGraph: {
    title: 'SSC Results & Achievements | Sree Valmeeki School Kadiri',
    description: 'Explore verified SSC board results, town 1st rankers, subject centum scores, and sports achievements across 28 years of distinction at Sree Valmeeki Kadiri.',
    url: 'https://www.sreevalmeekischool.in/achievements',
    siteName: 'Sree Valmeeki E.M School',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/pamphlets/pamphlet_2025_26_front.jpg', width: 1200, height: 630, alt: 'Sree Valmeeki SSC Board Results' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSC Results & Achievements | Sree Valmeeki School Kadiri',
    description: 'Explore verified SSC board results, town 1st rankers, subject centum scores, and sports achievements across 28 years of distinction at Sree Valmeeki Kadiri.',
  },
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = getBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Achievements & Results', url: '/achievements' },
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
