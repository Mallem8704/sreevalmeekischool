import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'Achievements | Sree Valmeeki High School',
  description: 'Celebrating the academic and extracurricular achievements of our students.',
};

export default function AchievementsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF7] font-[family-name:var(--font-body)]">
      <ScrollProgress />
      <Header />
      
      <section className="relative h-[50vh] bg-[#0A1628] flex items-center justify-center text-center px-4 pt-20">
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">Our Achievements</h1>
          <p className="text-lg md:text-xl text-slate-300">Milestones of excellence and dedication</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto w-full flex-grow">
        <div className="bg-[#FFF9E6] border border-[#D4A853] text-[#B8860B] p-4 rounded-lg mb-12 text-center font-medium">
          Note: Achievement details will be updated from verified school records.
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { cat: 'Academic Excellence', title: '100% Board Results', desc: 'Consistent 100% pass percentage in SSC Board Exams.' },
            { cat: 'Sports', title: 'District Level Champions', desc: 'Winners of the inter-school district athletic meet.' },
            { cat: 'Olympiads', title: 'Gold Medalists', desc: 'Top ranks in national and international Olympiads.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#1E3A8A] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                {item.cat}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#0A1628] mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
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
