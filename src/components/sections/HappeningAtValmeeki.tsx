'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { eventStories } from '@/lib/data';

export default function HappeningAtValmeeki() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#050D1A] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAMPUS CHRONICLES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight text-white">
              HAPPENING AT VALMEEKI
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-white/60 max-w-sm">
            Experience our grand celebrations, sports meets, and student exhibitions.
          </p>
        </div>

        {/* 4 Large Editorial Event Photo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventStories.map((event, idx) => (
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <Link
                href={`/events/${event.slug}`}
                className="group relative rounded-3xl overflow-hidden bg-[#0A1628] border border-white/15 hover:border-[#D4A853] transition-all duration-300 shadow-xl flex flex-col aspect-[3/4] block"
              >
                {/* Big Image */}
                <Image
                  src={event.coverImage}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/35 to-transparent" />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1628]/85 backdrop-blur-md border border-[#D4A853]/40 text-[#D4A853] text-xs font-mono font-bold shadow-md">
                  <Calendar className="w-3 h-3" />
                  <span>{event.date}</span>
                </div>

                {/* Card Title & Arrow at Bottom */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A853] block mb-1">
                    {event.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-[family-name:var(--font-heading)] text-white leading-snug group-hover:text-[#FFF5DC] transition-colors">
                    {event.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-[#D4A853] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Photo Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
