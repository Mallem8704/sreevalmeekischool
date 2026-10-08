'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles, Quote } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { eventStories } from '@/lib/data';

export default function EventsIndexPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#FBBF24] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-16 overflow-hidden bg-[#0A1628] dark:bg-[#050D1A] border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/school/school-event-4.jpg"
            alt="School Events & Celebrations"
            fill
            priority
            className="object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] dark:from-[#050D1A] via-[#0A1628]/80 dark:via-[#0A1628]/80 to-[#0A1628]/90" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 text-[#FBBF24] text-xs font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAMPUS CHRONICLES & CELEBRATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-[family-name:var(--font-heading)] leading-tight text-white mb-4">
            Events &{' '}
            <span className="bg-gradient-to-r from-[#FBBF24] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent">
              Festivities.
            </span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Explore the vibrant calendar of sports championships, cultural festivals, academic expos, and milestones at Sree Valmeeki School.
          </p>
        </div>
      </section>

      {/* Events Stories Grid */}
      <section className="py-20 sm:py-28 bg-[#FDFBF7] dark:bg-[#050D1A] transition-colors duration-200 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {eventStories.map((event, idx) => (
              <motion.article
                key={event.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 hover:border-[#D4A853]/60 dark:hover:border-[#FBBF24]/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-black/40">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#D4A853] text-[10px] font-mono font-bold uppercase border border-white/10">
                    {event.category}
                  </div>

                  {/* Date Pill */}
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono flex items-center gap-1.5 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-[#D4A853]" />
                    <span>{event.date}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6">
                  <div className="space-y-3">
                    <h2 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24] transition-colors leading-snug">
                      <Link href={`/events/${event.slug}`}>
                        {event.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {event.summary}
                    </p>

                    {event.quote && (
                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-xs italic text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <Quote className="w-4 h-4 text-[#B8860B] dark:text-[#D4A853] shrink-0 mt-0.5" />
                        <span>{event.quote}</span>
                      </div>
                    )}
                  </div>

                  {/* Read Feature Link */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8860B] dark:text-[#FBBF24] group-hover:translate-x-1 transition-all"
                    >
                      <span>Read Full Chronicle</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      {event.galleryImages.length} Photos
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
