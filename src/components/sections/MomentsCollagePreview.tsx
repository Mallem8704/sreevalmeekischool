'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const collageImages = [
  { src: '/images/school/school-event-4.jpg', alt: 'Annual Day Stage', span: 'col-span-2 row-span-2' },
  { src: '/images/school/school-event-9.jpg', alt: 'Science Fair Lab', span: 'col-span-1 row-span-1' },
  { src: '/images/school/school-event-2.jpg', alt: 'VPL Sports Match', span: 'col-span-1 row-span-1' },
  { src: '/images/school/school-event-5.jpg', alt: 'Cultural Festival', span: 'col-span-1 row-span-2' },
  { src: '/images/school/school-event-11.jpg', alt: 'Assembly Prayer', span: 'col-span-1 row-span-1' },
  { src: '/images/school/school-event-1.jpg', alt: 'Academic Expo', span: 'col-span-1 row-span-1' },
  { src: '/images/school/school-event-8.jpg', alt: 'Farewell Felicitation', span: 'col-span-1 row-span-1' },
  { src: '/images/school/school-event-12.jpg', alt: 'Smart Digi-Class', span: 'col-span-2 row-span-1' },
];

export default function MomentsCollagePreview() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#0A1628] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GALLERY PREVIEW</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight text-white">
              MOMENTS THAT{' '}
              <span className="block sm:inline bg-gradient-to-r from-[#FFF5DC] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent italic font-normal">
                MAKE VALMEEKI.
              </span>
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-95 transition-all self-start md:self-auto"
          >
            <span>Enter The Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Irregular Overlapping Photo Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 auto-rows-[160px] sm:auto-rows-[190px]">
          {collageImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#050D1A] border border-white/15 hover:border-[#D4A853] transition-all duration-300 shadow-xl ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 350px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />

              <div className="absolute bottom-3 left-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[11px] sm:text-xs font-bold font-[family-name:var(--font-heading)] text-white drop-shadow-md">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
