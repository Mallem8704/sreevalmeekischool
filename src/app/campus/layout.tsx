import type { Metadata } from 'next';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Campus & Modern Facilities | Sree Valmeeki School Kadiri',
  description: 'Explore Sree Valmeeki School campus in Kadiri featuring digital smart boards, science labs, sports grounds, yoga courtyard, and a dedicated school bus fleet.',
  alternates: {
    canonical: 'https://www.sreevalmeekischool.in/campus',
  },
  openGraph: {
    title: 'Campus & Modern Facilities | Sree Valmeeki School Kadiri',
    description: 'Explore Sree Valmeeki School campus in Kadiri featuring digital smart boards, science labs, sports grounds, yoga courtyard, and a dedicated school bus fleet.',
    url: 'https://www.sreevalmeekischool.in/campus',
    siteName: 'Sree Valmeeki E.M School',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/campus/campus_drone_aerial.jpg', width: 1200, height: 630, alt: 'Sree Valmeeki School Campus Aerial View' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campus & Modern Facilities | Sree Valmeeki School Kadiri',
    description: 'Explore Sree Valmeeki School campus in Kadiri featuring digital smart boards, science labs, sports grounds, yoga courtyard, and a dedicated school bus fleet.',
  },
};

export default function CampusLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = getBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Campus Life', url: '/campus' },
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
