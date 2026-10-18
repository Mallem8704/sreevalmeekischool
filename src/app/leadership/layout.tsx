import type { Metadata } from 'next';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'School Leadership & Vision | Sree Valmeeki School Kadiri',
  description: 'Meet the visionary leaders of Sree Valmeeki School Kadiri: Founder Sri P. Jayarami Reddy (Retired MEO), Director Dr. Pavan Kumar, and Correspondent Anil Kumar.',
  alternates: {
    canonical: 'https://www.sreevalmeekischool.in/leadership',
  },
  openGraph: {
    title: 'School Leadership & Vision | Sree Valmeeki School Kadiri',
    description: 'Meet the visionary leaders of Sree Valmeeki School Kadiri: Founder Sri P. Jayarami Reddy (Retired MEO), Director Dr. Pavan Kumar, and Correspondent Anil Kumar.',
    url: 'https://www.sreevalmeekischool.in/leadership',
    siteName: 'Sree Valmeeki E.M School',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/leadership/founder_jaya_rami_reddy.png', width: 1200, height: 630, alt: 'Sree Valmeeki Leadership' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School Leadership & Vision | Sree Valmeeki School Kadiri',
    description: 'Meet the visionary leaders of Sree Valmeeki School Kadiri: Founder Sri P. Jayarami Reddy (Retired MEO), Director Dr. Pavan Kumar, and Correspondent Anil Kumar.',
  },
};

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = getBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Leadership', url: '/leadership' },
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
