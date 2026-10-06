'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Sparkles, Maximize2 } from 'lucide-react';

const memoryItems = [
  { id: 1, year: '2026', title: 'Annual Day Stage Dance', image: '/images/school/school-event-4.jpg', span: 'col-span-1 md:col-span-2 row-span-2' },
  { id: 2, year: '1999', title: 'Foundational Morning Assembly', image: '/images/school/school-event-3.jpg', span: 'col-span-1 row-span-1' },
  { id: 3, year: '2025', title: 'Science Innovation Fair', image: '/images/school/school-event-9.jpg', span: 'col-span-1 row-span-1' },
  { id: 4, year: '2024', title: 'VPL Cricket Champions', image: '/images/school/school-event-2.jpg', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 5, year: '2023', title: 'Cultural Heritage Celebrations', image: '/images/school/school-event-5.jpg', span: 'col-span-1 row-span-1' },
  { id: 6, year: '2025', title: 'State Level Academic Felicitations', image: '/images/school/school-event-7.jpg', span: 'col-span-1 row-span-1' },
  { id: 7, year: '2024', title: 'Class 10 Farewell Gathering', image: '/images/school/school-event-8.jpg', span: 'col-span-1 md:col-span-2 row-span-1' },
  { id: 8, year: '2026', title: 'Interactive Smart Digi-Classes', image: '/images/school/school-event-12.jpg', span: 'col-span-1 row-span-1' },
];

export default function MemoriesWall() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof memoryItems[0] | null>(null);

  return (
    <section className="relative w-full py-20 md:py-28 bg-[#0A1628] text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/40 text-[#D4A853] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAMPUS MEMORIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight text-white mb-3">
            27 YEARS.{' '}
            <span className="block sm:inline bg-gradient-to-r from-[#FFF5DC] via-[#E8C97D] to-[#D4A853] bg-clip-text text-transparent italic font-normal">
              COUNTLESS MEMORIES.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70">
            A visual living wall of our journey in Kadiri since 1999.
          </p>
        </div>

        {/* Floating Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {memoryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#050D1A] border border-white/15 hover:border-[#D4A853] transition-all duration-300 shadow-xl ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Year Tag on Top Left */}
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#0A1628]/80 backdrop-blur-md border border-white/20 text-[#D4A853] text-xs font-mono font-bold shadow-md">
                {item.year}
              </div>

              {/* Title & Maximize Icon on Bottom */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between z-10">
                <span className="text-sm sm:text-base font-bold font-[family-name:var(--font-heading)] text-white line-clamp-1 drop-shadow-md">
                  {item.title}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-[#0A1628] border border-white/20 shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 bg-[#0A1628] border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#D4A853] uppercase block mb-1">
                    YEAR {selectedPhoto.year} • MEMORY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-white">
                    {selectedPhoto.title}
                  </h3>
                </div>
                <span className="text-xs text-white/50">Valmeeki Archives</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
