import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';

export const metadata: Metadata = {
  title: 'News & Events | Sree Valmeeki High School',
  description: 'Latest news, announcements, and upcoming events at Sree Valmeeki High School.',
};

export default function NewsPage() {
  const events = [
    { title: 'Annual Sports Day', date: 'Oct 15, 2026', type: 'Event' },
    { title: 'Science Exhibition', date: 'Nov 12, 2026', type: 'Academic' },
    { title: 'Parent-Teacher Meeting', date: 'Dec 05, 2026', type: 'Meeting' },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#F5F3EE] font-[family-name:var(--font-body)]">
      <ScrollProgress />
      <Header />
      
      <section className="relative h-[50vh] bg-[#0A1628] flex items-center justify-center text-center px-4 pt-20">
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#D4A853]">News & Events</h1>
          <p className="text-lg md:text-xl text-slate-300">Stay updated with school activities</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto w-full flex-grow">
        <div className="space-y-6">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#1E3A8A] transition-colors">
              <div>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
                  {event.type}
                </span>
                <h2 className="text-2xl font-bold text-[#0A1628] mb-2">{event.title}</h2>
                <p className="text-slate-600 font-medium">Date: {event.date}</p>
              </div>
              <button className="shrink-0 px-6 py-2 border border-[#1E3A8A] text-[#1E3A8A] font-semibold rounded-lg hover:bg-[#1E3A8A] hover:text-white transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
