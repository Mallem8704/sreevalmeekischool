'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const galleryPhotos = [
  { src: '/images/school/school-event-4.jpg', label: 'Grand Stage Dance Performance', tag: 'Annual Day' },
  { src: '/images/school/school-event-9.jpg', label: 'Working Science Fair Innovation', tag: 'STEM Lab' },
  { src: '/images/school/school-event-2.jpg', label: 'Cricket Championship Victory Walk', tag: 'Sports Arena' },
  { src: '/images/school/school-event-1.jpg', label: 'Robotics & Physics Model Showcase', tag: 'Exhibition' },
  { src: '/images/school/school-event-7.jpg', label: 'Student Felicitations on Stage', tag: 'Honors' },
  { src: '/images/school/school-event-5.jpg', label: 'Auditorium Classical Dance Ensemble', tag: 'Cultural' },
  { src: '/images/school/school-event-12.jpg', label: 'Smart Interactive Panel Session', tag: 'Classroom' },
  { src: '/images/school/school-event-8.jpg', label: '10th Class Academic Honors', tag: 'Scholars' },
];

export default function MomentsGalleryPreview() {
  const [activePhoto, setActivePhoto] = useState<(typeof galleryPhotos)[0] | null>(null);

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/30 dark:border-[#D4A853]/40 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black tracking-widest uppercase mb-3">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>VISUAL ARCHIVE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] leading-[1.05] tracking-tight uppercase text-[#0A1628] dark:text-white">
              MOMENTS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#C49A3C] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
                THAT MAKE VALMEEKI.
              </span>
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#0A1628] hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-bold text-[#0A1628] dark:text-white uppercase tracking-wider transition-all cursor-pointer group shadow-sm hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60"
          >
            <span>Explore The Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#B8860B] dark:text-[#FBBF24]" />
          </Link>
        </div>

        {/* Dynamic Mixed-Sized Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {galleryPhotos.map((photo, idx) => (
            <motion.div
              key={photo.src + idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setActivePhoto(photo)}
              className={`relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group border border-slate-200/80 dark:border-white/10 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-xl bg-white dark:bg-[#0A1628] ${
                idx === 0 || idx === 3 ? 'aspect-[4/5]' : 'aspect-square sm:aspect-[4/3]'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity" />

              {/* Hover Badge */}
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-block px-2 py-0.5 rounded bg-[#D4A853] text-[#0A1628] text-[9px] font-black uppercase tracking-wider mb-1">
                  {photo.tag}
                </span>
                <p className="text-xs font-bold text-white line-clamp-1">
                  {photo.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhoto(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 text-[#0A1628] dark:text-white"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-slate-100 dark:bg-white/5">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.label}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-6 flex items-center justify-between text-[#0A1628] dark:text-white border-t border-slate-100 dark:border-white/10 bg-white dark:bg-[#0A1628]">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-[#B8860B] dark:text-[#FBBF24] uppercase block">
                    {activePhoto.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0A1628] dark:text-white">
                    {activePhoto.label}
                  </h3>
                </div>

                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1628] dark:text-white hover:text-[#B8860B] dark:hover:text-[#FBBF24] uppercase tracking-wider"
                >
                  <span>Full Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
