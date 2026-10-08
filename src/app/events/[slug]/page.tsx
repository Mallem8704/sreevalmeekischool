'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { ArrowLeft, ArrowRight, Calendar, Sparkles, Quote } from 'lucide-react';
import { eventStories } from '@/lib/data';
import { notFound } from 'next/navigation';

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export default function EventStoryPage({ params }: EventPageProps) {
  const resolvedParams = use(params);
  const event = eventStories.find((e) => e.slug === resolvedParams.slug) || eventStories[0];

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#D4A853] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      {/* Digital Magazine Hero Photo */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-end overflow-hidden pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0A1628] dark:bg-[#050D1A] border-b border-slate-200 dark:border-white/10">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] dark:from-[#050D1A] via-[#0A1628]/60 dark:via-[#050D1A]/60 to-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold backdrop-blur-md mb-6 border border-white/20 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Events</span>
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-[#D4A853] text-[#0A1628] text-xs font-bold uppercase tracking-wider">
              {event.category}
            </span>
            <span className="text-xs font-mono text-white/80 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D4A853]" />
              {event.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] text-white leading-tight mb-4 drop-shadow-md">
            {event.title}
          </h1>

          <p className="text-base sm:text-xl text-white/90 font-[family-name:var(--font-heading)] max-w-2xl leading-relaxed">
            {event.summary}
          </p>
        </div>
      </section>

      {/* Magazine Editorial Body: Visual First, No Long Article */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
        {/* Pull Quote */}
        {event.quote && (
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/15 text-center relative overflow-hidden shadow-xl dark:shadow-2xl transition-colors duration-200">
            <Quote className="w-10 h-10 text-[#B8860B] dark:text-[#D4A853] mx-auto mb-4 opacity-70" />
            <blockquote className="text-xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white italic leading-snug">
              {event.quote}
            </blockquote>
            <span className="text-xs font-mono text-[#B8860B] dark:text-[#D4A853] tracking-widest uppercase mt-4 block">
              VALMEEKI CHRONICLES
            </span>
          </div>
        )}

        {/* 2-Column Photo Duo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {event.galleryImages.slice(0, 2).map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/15 shadow-xl transition-all duration-300"
            >
              <Image
                src={img}
                alt={`${event.title} moment ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Full-Width Feature Photo */}
        {event.galleryImages[2] && (
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/15 shadow-2xl transition-all duration-300">
            <Image
              src={event.galleryImages[2]}
              alt={`${event.title} grand spectacle`}
              fill
              sizes="1000px"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-6 z-10 text-xs font-mono text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
              Campus Atmosphere • Kadiri
            </div>
          </div>
        )}

        {/* Next Event / Admissions Trigger */}
        <div className="pt-10 border-t border-slate-200 dark:border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors duration-200">
          <div>
            <span className="text-xs font-bold text-[#B8860B] dark:text-[#D4A853] uppercase tracking-wider block mb-1">
              EXPERIENCE THE COMMUNITY
            </span>
            <h4 className="text-xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
              Join Sree Valmeeki School Today
            </h4>
          </div>

          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 transition-all"
          >
            <span>Enquire for Admissions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
