import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'IIT Foundation | Sree Valmeeki High School',
  description: 'Specialized IIT Foundation program integrated with the academic curriculum.',
};

export default function IITFoundationPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-[family-name:var(--font-body)]">
      <ScrollProgress />
      <Header />
      
      <section className="relative h-[50vh] bg-[#0A1628] flex items-center justify-center text-center px-4 pt-20">
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">IIT Foundation</h1>
          <p className="text-lg md:text-xl text-slate-300">Building a strong base for future competitive exams</p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto w-full">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 mb-12">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-6 text-[#1E3A8A]">Program Overview</h2>
          <p className="text-slate-700 leading-relaxed text-lg mb-8">
            Our IIT Foundation program is designed to provide students with a deeper understanding of Mathematics, Physics, and Chemistry. 
            By introducing advanced concepts at an early stage, we aim to develop analytical and problem-solving skills necessary for various competitive exams like JEE, NEET, and Olympiads.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {['Mathematics', 'Physics', 'Chemistry'].map((subject) => (
              <div key={subject} className="bg-[#F5F3EE] p-6 rounded-xl text-center border-t-4 border-[#D4A853]">
                <h3 className="font-bold text-[#0A1628] text-xl mb-2">{subject}</h3>
                <p className="text-sm text-slate-600">Advanced problem solving and conceptual clarity.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-[#0A1628] rounded-3xl p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-6">Start Your Journey</h2>
          <p className="mb-8 text-slate-300 max-w-2xl mx-auto">Equip your child with the skills to excel in future competitive arenas.</p>
          <a href="/admissions" className="inline-block bg-[#D4A853] text-[#0A1628] font-bold py-3 px-8 rounded-full hover:bg-[#C49A3C] transition-colors">
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
