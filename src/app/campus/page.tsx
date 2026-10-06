import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'Campus Facilities | Sree Valmeeki High School',
  description: 'Explore our state-of-the-art campus and facilities.',
};

export default function CampusPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F3EE] font-[family-name:var(--font-body)]">
      <ScrollProgress />
      <Header />
      
      <section className="relative h-[50vh] bg-[#0A1628] flex items-center justify-center text-center px-4 pt-20">
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">Our Campus</h1>
          <p className="text-lg md:text-xl text-slate-300">A space designed for comprehensive learning</p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Smart Classrooms', desc: 'Digital boards and modern infrastructure for interactive learning.' },
            { title: 'Science Labs', desc: 'Well-equipped laboratories for Physics, Chemistry, and Biology.' },
            { title: 'Library', desc: 'Extensive collection of books, journals, and digital resources.' },
            { title: 'Computer Lab', desc: 'Latest technology ensuring digital literacy for all students.' },
            { title: 'Sports Ground', desc: 'Spacious ground for physical education and various sports.' },
            { title: 'Transport', desc: 'Safe and secure school bus service covering major routes.' },
          ].map((facility, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
                [Image: {facility.title}]
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">{facility.title}</h3>
                <p className="text-slate-600">{facility.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
