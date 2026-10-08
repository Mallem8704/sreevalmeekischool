import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { Calendar, Bell, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'News & Announcements | Sree Valmeeki High School',
  description: 'Latest official notices, circulars, exam schedules, and community news from Sree Valmeeki High School.',
};

export default function NewsPage() {
  const newsItems = [
    {
      title: 'Admissions Open for Academic Year 2026–27 (Nursery to Class 10)',
      date: 'March 2026',
      type: 'Admissions',
      description: 'Applications are actively invited for 2026-27 academic session. Campus tours and counselor interactions available daily.',
      link: '/admissions',
    },
    {
      title: 'Annual Sports Day & Athletic Meet 2026',
      date: 'January 2026',
      type: 'Sports',
      description: 'Valmeeki sports ground hosted 400+ student athletes competing in track, badminton, and cricket championships.',
      link: '/events/valmeeki-premier-league',
    },
    {
      title: 'Practical Science Innovation Fair & Model Expo',
      date: 'November 2025',
      type: 'Academic',
      description: 'Students demonstrated 60+ interactive physics, robotics, and biological science projects for district visitors.',
      link: '/events/national-science-fair',
    },
    {
      title: 'State Board SSC Examination Preparation Camps',
      date: 'December 2025',
      type: 'Circular',
      description: 'Dedicated evening revision classes and mock test series commenced for all registered Class 10 aspirants.',
      link: '/academics',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#FBBF24] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[45vh] bg-[#0A1628] dark:bg-[#050D1A] border-b border-slate-200 dark:border-white/10 flex items-center justify-center text-center px-4 pt-32 pb-16">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#FBBF24] text-xs font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL NOTICES & UPDATES</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-heading)] mb-4 text-white">
            News &{' '}
            <span className="bg-gradient-to-r from-[#FBBF24] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent">
              Announcements
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-medium">
            Stay updated with school activities, examination schedules, events, and important parent circulars.
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex-grow">
        <div className="space-y-6">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0A1628] p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl border border-slate-200 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#B8860B]/60 dark:hover:border-[#FBBF24]/60 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="inline-block px-3 py-1 bg-amber-500/10 dark:bg-amber-400/10 text-[#B8860B] dark:text-[#FBBF24] border border-amber-500/20 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                    {item.date}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white leading-snug">
                  {item.title}
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              <Link
                href={item.link}
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 dark:border-white/20 text-[#0A1628] dark:text-white hover:bg-[#0A1628] hover:text-white dark:hover:bg-[#FBBF24] dark:hover:text-[#0A1628] text-xs font-bold uppercase tracking-wider rounded-full transition-all group"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
