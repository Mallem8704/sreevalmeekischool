import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'Academics | Sree Valmeeki High School',
  description: 'Explore our academic programs from Nursery to 10th grade.',
};

export default function AcademicsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF7] font-[family-name:var(--font-body)]">
      <ScrollProgress />
      <Header />
      
      <section className="relative h-[50vh] bg-[#0A1628] flex items-center justify-center text-center px-4 pt-20">
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">Academic Programs</h1>
          <p className="text-lg md:text-xl text-slate-300">Nurturing minds for a brighter tomorrow</p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-10 text-[#0A1628] text-center">Learning Stages</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { stage: 'Pre-Primary', grades: 'Nursery - UKG', desc: 'Foundational learning through play and exploration.' },
            { stage: 'Primary', grades: 'Grades 1 - 5', desc: 'Building core competencies in literacy and numeracy.' },
            { stage: 'Middle', grades: 'Grades 6 - 8', desc: 'Developing critical thinking and subject knowledge.' },
            { stage: 'High School', grades: 'Grades 9 - 10', desc: 'Preparing for board exams and future pathways.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-[#D4A853] transition-colors group">
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">{item.stage}</h3>
              <p className="text-[#C49A3C] font-semibold mb-4">{item.grades}</p>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0A1628] p-10 rounded-2xl text-white">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">IIT Foundation</h3>
            <p className="mb-6 text-slate-300">Specialized coaching integrated with the regular curriculum to prepare students for competitive exams.</p>
            <a href="/academics/iit-foundation" className="text-[#D4A853] hover:text-white font-semibold underline underline-offset-4 transition-colors">
              Learn More &rarr;
            </a>
          </div>
          <div className="bg-[#1E3A8A] p-10 rounded-2xl text-white">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">Spoken English</h3>
            <p className="text-slate-300">Dedicated focus on communication skills to build confidence and fluency in English from an early age.</p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
