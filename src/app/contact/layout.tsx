import type { Metadata } from 'next';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Us & Campus Location | Sree Valmeeki Kadiri',
  description: 'Get in touch with Sree Valmeeki E.M School in Kadiri, Andhra Pradesh. Contact our admissions desk, call +91 94404 68838, or visit our Madanapalli Road campus.',
  alternates: {
    canonical: 'https://www.sreevalmeekischool.in/contact',
  },
  openGraph: {
    title: 'Contact Us & Campus Location | Sree Valmeeki Kadiri',
    description: 'Get in touch with Sree Valmeeki E.M School in Kadiri, Andhra Pradesh. Contact our admissions desk, call +91 94404 68838, or visit our Madanapalli Road campus.',
    url: 'https://www.sreevalmeekischool.in/contact',
    siteName: 'Sree Valmeeki E.M School',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/campus/school_entrance_gate.jpg', width: 1200, height: 630, alt: 'Contact Sree Valmeeki School' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & Campus Location | Sree Valmeeki Kadiri',
    description: 'Get in touch with Sree Valmeeki E.M School in Kadiri, Andhra Pradesh. Contact our admissions desk, call +91 94404 68838, or visit our Madanapalli Road campus.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = getBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
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
