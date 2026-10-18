import type { Metadata } from 'next';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'School Events & Celebrations | Sree Valmeeki School Kadiri',
  description: 'Discover annual days, cultural celebrations, sports championships, and science fairs celebrated by students and faculty at Sree Valmeeki E.M School Kadiri.',
  alternates: {
    canonical: 'https://www.sreevalmeekischool.in/events',
  },
  openGraph: {
    title: 'School Events & Celebrations | Sree Valmeeki School Kadiri',
    description: 'Discover annual days, cultural celebrations, sports championships, and science fairs celebrated by students and faculty at Sree Valmeeki E.M School Kadiri.',
    url: 'https://www.sreevalmeekischool.in/events',
    siteName: 'Sree Valmeeki E.M School',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/school/school-event-4.jpg', width: 1200, height: 630, alt: 'Sree Valmeeki Events' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Events & Celebrations | Sree Valmeeki School Kadiri',
    description: 'Discover annual days, cultural celebrations, sports championships, and science fairs celebrated by students and faculty at Sree Valmeeki E.M School Kadiri.',
  },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = getBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Events', url: '/events' },
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
