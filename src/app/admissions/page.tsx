import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'Admissions | Sree Valmeeki High School',
  description: 'Apply for admission to Sree Valmeeki High School for the 2026-27 academic year.',
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-[family-name:var(--font-body)]">
      <ScrollProgress />
      <Header />
      
      <section className="relative h-[50vh] bg-[#0A1628] flex items-center justify-center text-center px-4 pt-20">
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">Admissions 2026-27</h1>
          <p className="text-lg md:text-xl text-slate-300">Join our legacy of excellence</p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-8 text-[#0A1628] text-center">Admission Process</h2>
        
        <div className="space-y-6 mb-16">
          {[
            { step: '1', title: 'Submit Enquiry', desc: 'Fill out the online admission enquiry form below.' },
            { step: '2', title: 'Campus Visit', desc: 'Schedule a visit to tour our facilities and interact with the faculty.' },
            { step: '3', title: 'Assessment', desc: 'A basic readiness assessment for the applied grade.' },
            { step: '4', title: 'Enrollment', desc: 'Complete the necessary documentation and secure admission.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 shrink-0 bg-[#0A1628] text-[#D4A853] font-bold rounded-full flex items-center justify-center text-xl">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-6 text-[#0A1628]">Admission Enquiry Form</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Student Name</label>
                <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none" placeholder="Enter full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Grade Applying For</label>
                <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none">
                  <option>Select Grade</option>
                  <option>Nursery - UKG</option>
                  <option>Grade 1 - 5</option>
                  <option>Grade 6 - 8</option>
                  <option>Grade 9 - 10</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Parent/Guardian Name</label>
                <input type="text" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none" placeholder="Enter parent name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Contact Number</label>
                <input type="tel" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none" placeholder="Enter mobile number" />
              </div>
            </div>
            <button type="button" className="w-full bg-[#1E3A8A] text-white font-bold py-4 rounded-lg hover:bg-[#0A1628] transition-colors">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
