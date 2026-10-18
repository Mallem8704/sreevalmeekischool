import type { Metadata } from 'next';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Admissions Open 2027–28 | Sree Valmeeki School Kadiri',
  description: 'Apply for admissions 2027–28 at Sree Valmeeki E.M School Kadiri. Nursery to Class 10 English medium education with smart classrooms and dedicated transport.',
  alternates: {
    canonical: 'https://www.sreevalmeekischool.in/admissions',
  },
  openGraph: {
    title: 'Admissions Open 2027–28 | Sree Valmeeki School Kadiri',
    description: 'Apply for admissions 2027–28 at Sree Valmeeki E.M School Kadiri. Nursery to Class 10 English medium education with smart classrooms and dedicated transport.',
    url: 'https://www.sreevalmeekischool.in/admissions',
    siteName: 'Sree Valmeeki E.M School',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/campus/school_entrance_gate.jpg', width: 1200, height: 630, alt: 'Sree Valmeeki Admissions Open' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admissions Open 2027–28 | Sree Valmeeki School Kadiri',
    description: 'Apply for admissions 2027–28 at Sree Valmeeki E.M School Kadiri. Nursery to Class 10 English medium education with smart classrooms and dedicated transport.',
  },
};

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = getBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Admissions', url: '/admissions' },
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
