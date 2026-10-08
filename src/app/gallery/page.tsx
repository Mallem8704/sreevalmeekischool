'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Share2,
  Maximize2,
  Play,
  Film,
} from 'lucide-react';
import { videoGalleryItems } from '@/lib/data';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  aspect: string; // Tailwind aspect or column span
}

const galleryCategories = [
  'ALL',
  'CAMPUS',
  'BUILDINGS',
  'CLASSROOMS',
  'SMART LEARNING',
  'TRANSPORT',
  'SPORTS',
  'ACTIVITIES',
  'EVENTS',
  'ACHIEVEMENTS',
];

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Campus Drone Aerial & Bus Bay', category: 'CAMPUS', year: '2026', image: '/images/campus/campus_drone_aerial.jpg', aspect: 'col-span-1 md:col-span-2 aspect-[16/10]' },
  { id: 2, title: 'Interactive 3D Smart Panel', category: 'SMART LEARNING', year: '2026', image: '/images/campus/smart_learning_panel.jpg', aspect: 'col-span-1 aspect-[4/3]' },
  { id: 3, title: 'Techno Block Lush Courtyard', category: 'BUILDINGS', year: '2026', image: '/images/campus/techno_block_wide.jpg', aspect: 'col-span-1 aspect-[4/3]' },
  { id: 4, title: '10th Class Academic Wing', category: 'BUILDINGS', year: '2026', image: '/images/campus/high_school_10th_block.jpg', aspect: 'col-span-1 aspect-[4/5]' },
  { id: 5, title: 'Icon Olympiad Block Walkway', category: 'CAMPUS', year: '2026', image: '/images/campus/olympiad_block_corridor.jpg', aspect: 'col-span-1 aspect-[4/3]' },
  { id: 6, title: 'Yellow Bus Transit Fleet', category: 'TRANSPORT', year: '2026', image: '/images/campus/transport_fleet_buses.jpg', aspect: 'col-span-1 md:col-span-2 aspect-[16/9]' },
  { id: 7, title: 'Mass Yoga Morning Assembly', category: 'ACTIVITIES', year: '2026', image: '/images/campus/yoga_assembly.jpg', aspect: 'col-span-1 aspect-[4/3]' },
  { id: 8, title: 'Senior Faculty Science Mentorship', category: 'CLASSROOMS', year: '2026', image: '/images/campus/science_lab_faculty.jpg', aspect: 'col-span-1 aspect-[4/5]' },
  { id: 9, title: 'Cricket Match On School Grounds', category: 'SPORTS', year: '2026', image: '/images/campus/sports_cricket_ground.jpg', aspect: 'col-span-1 aspect-[4/3]' },
  { id: 10, title: 'Playground Drone Aerial', category: 'SPORTS', year: '2026', image: '/images/campus/playground_drone_aerial.jpg', aspect: 'col-span-1 md:col-span-2 aspect-[16/10]' },
  { id: 11, title: 'Annual Day Stage Dance', category: 'EVENTS', year: '2026', image: '/images/campus/cultural_dance_stage.jpg', aspect: 'col-span-1 aspect-[4/3]' },
  { id: 12, title: 'Digital Classrooms & Pedagogy', category: 'CLASSROOMS', year: '2026', image: '/images/campus/digital_classroom.jpg', aspect: 'col-span-1 aspect-[4/3]' },
  { id: 13, title: 'Science Fair Experiments', category: 'ACTIVITIES', year: '2025', image: '/images/school/school-event-9.jpg', aspect: 'col-span-1 aspect-[4/5]' },
  { id: 14, title: 'VPL Cricket Champions', category: 'SPORTS', year: '2026', image: '/images/school/school-event-2.jpg', aspect: 'col-span-1 aspect-[4/3]' },
  { id: 15, title: 'National Handwriting Champion', category: 'ACHIEVEMENTS', year: '2026', image: '/extracted/champions/handwriting_national_champion.jpg', aspect: 'col-span-1 aspect-[4/3]' },
  { id: 16, title: 'State Science 1st Rank Ceremony', category: 'ACHIEVEMENTS', year: '2026', image: '/extracted/champions/science_experiments_state_1st_rank.jpg', aspect: 'col-span-1 aspect-[4/3]' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'ALL' || item.category === activeCategory
  );

  const currentItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({
        title: currentItem?.title || 'Sree Valmeeki School Gallery',
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Gallery link copied to clipboard!');
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#D4A853] selection:text-[#0A1628] transition-colors duration-200">
      <ScrollProgress />
      <Header />

      {/* Hero: LIFE AT VALMEEKI */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-36 pb-16 px-4 bg-gradient-to-b from-[#F8FAFC] via-[#FDFBF7] to-[#F5F3EE] dark:from-[#050D1A] dark:via-[#0A1628] dark:to-[#050D1A] border-b border-slate-200/80 dark:border-white/10 transition-colors duration-200">
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/20 border border-[#D4A853]/35 text-[#B8860B] dark:text-[#FBBF24] text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAMPUS MEMORIES & MOMENTS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white tracking-tight leading-tight mb-3"
          >
            LIFE AT VALMEEKI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-[family-name:var(--font-heading)]"
          >
            Not just classrooms. <span className="text-[#B8860B] dark:text-[#FBBF24] font-bold">Thousands of moments.</span>
          </motion.p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full my-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0A1628] dark:bg-[#FBBF24] text-[#D4A853] dark:text-[#0A1628] shadow-md border border-[#0A1628] dark:border-[#FBBF24]'
                  : 'bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 hover:text-[#0A1628] dark:hover:text-white border border-slate-200 dark:border-white/10 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Asymmetric Masonry Photo Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-grow pb-16">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedIndex(idx)}
                className={`group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200/80 dark:border-white/10 hover:border-[#D4A853]/60 dark:hover:border-[#FBBF24]/60 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-xl cursor-pointer ${item.aspect}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Hover Overlay with Year & Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-40 group-hover:opacity-90 transition-opacity" />

                {/* Top Year & Category Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#D4A853] text-[10px] font-mono font-bold uppercase border border-white/10">
                    {item.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase hidden group-hover:inline-block transition-opacity">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Title & Maximize Icon */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                  <span className="text-sm sm:text-base font-bold font-[family-name:var(--font-heading)] text-white line-clamp-1 drop-shadow-md">
                    {item.title}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Video Gallery: VALMEEKI IN MOTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-slate-200/80 dark:border-white/10 transition-colors duration-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/20 border border-[#D4A853]/35 text-[#B8860B] dark:text-[#FBBF24] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              <Film className="w-3.5 h-3.5" />
              <span>CINEMATIC STORIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] text-[#0A1628] dark:text-white">
              VALMEEKI IN MOTION
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            REELS • CELEBRATIONS • SPORTS
          </span>
        </div>

        {/* 4 Video Cards (Vertical & Landscape Formats) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoGalleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden bg-black border border-slate-200/80 dark:border-white/15 hover:border-[#D4A853]/60 dark:hover:border-[#FBBF24]/60 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.3)] hover:shadow-xl flex flex-col justify-end ${
                item.format === 'vertical' ? 'aspect-[9/16]' : 'aspect-[16/10]'
              }`}
            >
              <video
                src={item.videoUrl}
                poster={item.poster}
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              />

              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#D4A853] text-[10px] font-mono font-bold uppercase border border-white/10 pointer-events-none">
                {item.format === 'vertical' ? 'REEL' : 'FEATURE TOUR'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Modal with Next / Prev / Share / Keyboard Controls */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl select-none"
          >
            {/* Top Bar Controls */}
            <div
              className="absolute top-6 left-6 right-6 flex items-center justify-between z-50 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#D4A853] font-bold">
                  {selectedIndex! + 1} / {filteredItems.length}
                </span>
                <span className="text-xs text-white/50">• {currentItem.category}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleShare}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Share photo"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Left Nav Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Center Image */}
            <motion.div
              key={currentItem.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-contain"
                priority
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-between">
                <div>
                  <span className="text-xs font-mono text-[#D4A853] block">
                    {currentItem.year} • {currentItem.category}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-white">
                    {currentItem.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
