'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface MosaicPhoto {
  id: string;
  title: string;
  category: string;
  src: string;
}

const mosaicPhotos: MosaicPhoto[] = [
  // Top Row: 3 Photos
  {
    id: 'm-1',
    title: 'Happy Learners',
    category: 'Friendships',
    src: '/images/school/school-event-4.jpg',
  },
  {
    id: 'm-2',
    title: 'Inter-School Sports Champions',
    category: 'Athletics',
    src: '/images/sports/futsal_state_champions.jpg',
  },
  {
    id: 'm-3',
    title: 'Classical Dance & Cultural Heritage',
    category: 'Annual Day',
    src: '/images/activities/cultural_dance_stage.jpg',
  },
  // Bottom Row: 4 Photos
  {
    id: 'm-4',
    title: 'Sports Podium & Trophy Winners',
    category: 'Achievements',
    src: '/images/sports/sports_trophy_winners.jpg',
  },
  {
    id: 'm-5',
    title: 'Annual Felicitation Ceremony',
    category: 'Excellence',
    src: '/images/achievements/ssc_2026_felicitation_hero.jpg',
  },
  {
    id: 'm-6',
    title: 'Library & Deep Exploration',
    category: 'Academics',
    src: '/images/learning/step_01_understand.jpg',
  },
  {
    id: 'm-7',
    title: 'Collaborative Classrooms',
    category: 'Daily Life',
    src: '/images/academic_systems/system_05_spoken_english.jpg',
  },
];

export default function VisualStudentLife() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const activePhoto = activePhotoIndex !== null ? mosaicPhotos[activePhotoIndex] : null;

  const nextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % mosaicPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + mosaicPhotos.length) % mosaicPhotos.length);
    }
  };

  return (
    <>
      <section id="gallery" className="relative w-full py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#06172A] text-[#0A1C31] dark:text-white transition-colors duration-200 border-t border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Heading & CTA matching Reference Screenshot */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-5 text-left lg:sticky lg:top-28">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D8A53C] block">
                STUDENT LIFE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-heading)] leading-[1.08] tracking-tight text-[#0A1C31] dark:text-white">
                Moments <br />
                <span className="text-[#0A1C31] dark:text-white">That Matter</span>
              </h2>

              <p className="text-sm sm:text-base text-[#69778A] dark:text-slate-300 font-medium leading-relaxed max-w-sm">
                Learning, friendships, achievements and memorable experiences.
              </p>

              <div className="pt-2">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D8A53C] hover:bg-[#F0C66A] text-[#03101E] font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>View Photo Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Editorial Photo Mosaic (3 on Top Row, 4 on Bottom Row) */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              {/* Row 1: 3 Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {mosaicPhotos.slice(0, 3).map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ y: -3 }}
                    onClick={() => setActivePhotoIndex(index)}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all cursor-pointer"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                      <span className="text-[10px] font-bold text-[#F0C66A] uppercase tracking-wider">
                        {photo.category}
                      </span>
                      <span className="text-xs font-black truncate">
                        {photo.title}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Row 2: 4 Photos */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {mosaicPhotos.slice(3, 7).map((photo, index) => {
                  const globalIdx = index + 3;
                  return (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: globalIdx * 0.06 }}
                      whileHover={{ y: -3 }}
                      onClick={() => setActivePhotoIndex(globalIdx)}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all cursor-pointer"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 text-white">
                        <span className="text-[9px] font-bold text-[#F0C66A] uppercase tracking-wider">
                          {photo.category}
                        </span>
                        <span className="text-[11px] font-black truncate">
                          {photo.title}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[85vh] flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActivePhotoIndex(null)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Bottom Caption & Controls */}
              <div className="w-full flex items-center justify-between text-white mt-4 px-2">
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-[#F0C66A] uppercase tracking-wider">
                    {activePhoto.category}
                  </span>
                  <span className="text-base font-black font-[family-name:var(--font-heading)]">
                    {activePhoto.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevPhoto}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/25 transition-colors cursor-pointer"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextPhoto}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/25 transition-colors cursor-pointer"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
