import type { Metadata } from 'next';
import { getBreadcrumbJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Academic Curriculum & Programs | Sree Valmeeki Kadiri',
  description: 'Discover academic programs from Nursery to Class 10 at Sree Valmeeki School Kadiri, featuring concept-first learning, IIT foundation, and Olympiad mentoring.',
  alternates: {
    canonical: 'https://www.sreevalmeekischool.in/academics',
  },
  openGraph: {
    title: 'Academic Curriculum & Programs | Sree Valmeeki Kadiri',
    description: 'Discover academic programs from Nursery to Class 10 at Sree Valmeeki School Kadiri, featuring concept-first learning, IIT foundation, and Olympiad mentoring.',
    url: 'https://www.sreevalmeekischool.in/academics',
    siteName: 'Sree Valmeeki E.M School',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/campus/digital_classroom.jpg', width: 1200, height: 630, alt: 'Sree Valmeeki Interactive Classrooms' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academic Curriculum & Programs | Sree Valmeeki Kadiri',
    description: 'Discover academic programs from Nursery to Class 10 at Sree Valmeeki School Kadiri, featuring concept-first learning, IIT foundation, and Olympiad mentoring.',
  },
};

export default function AcademicsLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = getBreadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Academics', url: '/academics' },
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
