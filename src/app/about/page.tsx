import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'About Us | Sree Valmeeki High School',
  description: 'Learn about the history, values, and mission of Sree Valmeeki High School.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 font-[family-name:var(--font-body)]">
      <ScrollProgress />
      <Header />
      
      {/* Hero */}
      <section className="relative h-[50vh] bg-[#0A1628] flex items-center justify-center text-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">About Sree Valmeeki</h1>
          <p className="text-lg md:text-xl text-slate-300">A legacy of excellence since 1999</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-6 text-[#0A1628]">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              To provide a nurturing environment that fosters academic excellence, discipline, and character. We aim to empower students to become confident, communicative, and responsible global citizens.
            </p>
          </div>
          <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400">
            [School Image Placeholder]
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] mb-12 text-center text-[#0A1628]">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {['Academic Excellence', 'Discipline', 'Confidence', 'Communication', 'Character'].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-slate-100 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#F5F3EE] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C49A3C] font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-[#1E3A8A]">{value}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-[#0A1628] rounded-3xl p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-heading)] mb-6">Join Our Community</h2>
          <p className="mb-8 text-slate-300 max-w-2xl mx-auto">Discover the difference a Sree Valmeeki education can make for your child&apos;s future.</p>
          <a href="/admissions" className="inline-block bg-[#D4A853] text-[#0A1628] font-bold py-3 px-8 rounded-full hover:bg-[#C49A3C] transition-colors">
            Admissions Information
          </a>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
