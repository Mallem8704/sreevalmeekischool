'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ExternalLink, Sparkles, ChevronLeft, ChevronRight, Heart, Camera } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import Image from 'next/image';

const categories = ['All', 'Science Fair', 'Annual Day', 'Campus Life', 'Cultural'] as const;
type Category = (typeof categories)[number];

export interface GalleryItem {
  id: number;
  title: string;
  category: 'Science Fair' | 'Annual Day' | 'Campus Life' | 'Cultural';
  image: string;
  description: string;
  badge?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Valmeeki Science Fair Innovations & Research',
    category: 'Science Fair',
    image: '/images/school/school-event-1.jpg',
    description: 'Students presenting interactive STEM projects, physics exhibits, and scientific hypotheses to parents and teachers.',
    badge: 'STEM Exhibition',
  },
  {
    id: 2,
    title: 'Valmeeki Premier League (VPL) Sports Championship',
    category: 'Campus Life',
    image: '/images/school/school-event-2.jpg',
    description: 'Inter-house cricket tournament and sports grand celebrations promoting team spirit, leadership, and athletic vigor.',
    badge: 'VPL Sports',
  },
  {
    id: 3,
    title: 'Annual Day Classical & Stage Dance Extravaganza',
    category: 'Annual Day',
    image: '/images/school/school-event-3.jpg',
    description: 'Graceful classical and semi-classical Indian dance performance showcasing student artistry on the grand auditorium stage.',
    badge: 'Stage Performance',
  },
  {
    id: 4,
    title: 'Annual Day Cultural Dance Celebration',
    category: 'Annual Day',
    image: '/images/school/school-event-4.jpg',
    description: 'Spectacular synchronized stage choreography celebrating India’s rich cultural diversity and Valmeeki pride.',
    badge: 'Annual Day 2026',
  },
  {
    id: 5,
    title: 'District-Level Cultural Dance Championship',
    category: 'Cultural',
    image: '/images/school/school-event-5.jpg',
    description: 'Award-winning synchronized folk performance representing Sree Valmeeki School at district-level inter-school cultural competitions.',
    badge: 'District Winner',
  },
  {
    id: 6,
    title: 'Cultural Rhythm & Festival Celebrations',
    category: 'Cultural',
    image: '/images/school/school-event-6.jpg',
    description: 'Vibrant student choreography depicting traditional folklore and harmonious celebration of festive arts.',
    badge: 'Folk Arts',
  },
  {
    id: 7,
    title: 'Annual Day Celebrations & Honors Gala',
    category: 'Annual Day',
    image: '/images/school/school-event-7.jpg',
    description: 'Grand gathering celebrating student academic accomplishments, faculty dedication, and 27 years of educational excellence.',
    badge: 'Grand Gala',
  },
  {
    id: 8,
    title: 'Valmeeki Premier League (VPL) Track & Field Meet',
    category: 'Campus Life',
    image: '/images/school/school-event-8.jpg',
    description: 'Outdoor athletic competitions, track events, and sportsmanship fostering discipline, fitness, and team camaraderie.',
    badge: 'Athletics Meet',
  },
  {
    id: 9,
    title: 'Science Exhibition Working Models & Laboratory Demos',
    category: 'Science Fair',
    image: '/images/school/school-event-9.jpg',
    description: 'Practical physics, chemistry, and biology laboratory demonstrations created and presented by high school innovators.',
    badge: 'Live Demos',
  },
  {
    id: 10,
    title: 'Smart STEM Lab & Practical Technology Models',
    category: 'Science Fair',
    image: '/images/school/school-event-10.jpg',
    description: 'High school students demonstrating working hydraulic, renewable energy, and electronic circuit models.',
    badge: 'STEM Lab',
  },
  {
    id: 11,
    title: 'Environmental Science & Innovation Expo',
    category: 'Science Fair',
    image: '/images/school/school-event-11.jpg',
    description: 'Eco-friendly and sustainable technology exhibits highlighting water conservation, solar power, and green ecology.',
    badge: 'Eco Science',
  },
  {
    id: 12,
    title: 'Faculty Mentorship & Smart Classroom Learning',
    category: 'Campus Life',
    image: '/images/school/school-event-12.jpg',
    description: 'Dedicated faculty mentors guiding students through experiential learning, smart classroom presentations, and academic inquiry.',
    badge: 'Mentorship',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const currentItem = selectedIdx !== null ? filteredItems[selectedIdx] : null;

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [selectedIdx, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [selectedIdx, filteredItems.length]);

  // Handle keyboard navigation for Lightbox
  useEffect(() => {
    if (selectedIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, handlePrev, handleNext]);

  return (
    <section id="gallery" className="scroll-mt-20 py-24 bg-[#FAFAF7] relative overflow-hidden border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/35 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-xs font-bold tracking-widest text-[#B8860B] uppercase font-[family-name:var(--font-body)]">
              Real Campus Life & Celebrations
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] mb-4"
          >
            Moments That Define Valmeeki
          </motion.h2>

          <p className="text-[#64748B] text-base max-w-2xl mx-auto mb-10 font-[family-name:var(--font-body)]">
            Explore authentic moments from our campus — from annual day extravaganzas and science fairs to sports meets, cultural dance, and smart classroom milestones.
          </p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {categories.map((category) => {
              const count =
                category === 'All'
                  ? galleryItems.length
                  : galleryItems.filter((i) => i.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedIdx(null);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    activeCategory === category
                      ? 'bg-[#0A1628] text-white shadow-md shadow-[#0A1628]/20 scale-105'
                      : 'bg-white text-[#64748B] hover:text-[#0A1628] hover:bg-[#F5F3EE] border border-gray-200'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      activeCategory === category
                        ? 'bg-[#D4A853] text-[#0A1628]'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Gallery Grid of Real School Photographs */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-[#0A1628] cursor-pointer aspect-[4/3] border border-black/5"
                onClick={() => setSelectedIdx(idx)}
              >
                {/* Real School Photo */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0A1628]/80 backdrop-blur-md text-[#D4A853] text-[10px] font-bold uppercase tracking-wider border border-[#D4A853]/30">
                    {item.badge || item.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
                  <span className="text-[11px] font-medium text-[#D4A853] mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-sm sm:text-base leading-snug line-clamp-2 text-white group-hover:text-[#FCE49E] transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-2.5 flex items-center justify-between text-xs text-[#D4A853]">
                    <span className="flex items-center gap-1.5 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View High-Res</span>
                    </span>
                    <span className="text-[10px] font-mono text-white/50">
                      #{item.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Official Instagram Community Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-[#0A1628] via-[#122244] to-[#0A1628] rounded-3xl p-6 sm:p-10 border border-[#D4A853]/30 shadow-2xl relative overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#E1306C]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D4A853]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: Profile avatar + details */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              {/* Profile Avatar with Instagram Gradient Ring */}
              <div className="relative group shrink-0">
                <div className="w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0A1628] relative">
                    <Image
                      src="/instagram-profile-pic.jpg"
                      alt="Sree Valmeeki School Instagram Profile"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] flex items-center justify-center text-white shadow-md border-2 border-[#0A1628]">
                  <InstagramIcon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                  <span className="text-xs font-bold tracking-widest text-[#D4A853] uppercase font-[family-name:var(--font-body)]">
                    OFFICIAL INSTAGRAM COMMUNITY
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/80 text-[10px] font-semibold border border-white/10">
                    27 Years of Excellence
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-[family-name:var(--font-heading)] text-white">
                  @sree_valmeekischool_kadiri
                </h3>
                
                <p className="text-white/80 text-sm mt-2 max-w-xl font-[family-name:var(--font-body)] leading-relaxed">
                  Catch daily student achievements, cultural dance reels, VPL sports highlights, morning assemblies, and academic celebrations live from our Kadiri campus.
                </p>

                {/* Popular Tags */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3 text-[11px] text-[#D4A853]/90 font-medium">
                  <span className="hover:text-white transition-colors">#SreeValmeekiSchool</span>
                  <span>•</span>
                  <span className="hover:text-white transition-colors">#KadiriEducation</span>
                  <span>•</span>
                  <span className="hover:text-white transition-colors">#ValmeekiPremierLeague</span>
                  <span>•</span>
                  <span className="hover:text-white transition-colors">#ScienceFairKadiri</span>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="https://www.instagram.com/sree_valmeekischool_kadiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold text-sm tracking-wide shadow-lg hover:shadow-2xl hover:brightness-105 active:scale-95 transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-[#0A1628]" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-4 h-4 text-[#0A1628]" />
              </a>

              <a
                href="https://www.instagram.com/sree_valmeekischool_kadiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all"
              >
                <Camera className="w-4 h-4 text-[#D4A853]" />
                <span>View Reels & Photos</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal with Full Keyboard & Next/Prev Controls */}
      <AnimatePresence>
        {currentItem && selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Top Close Button & Counter */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-mono border border-white/10">
                {selectedIdx + 1} / {filteredItems.length}
              </span>
              <button
                className="text-white hover:text-[#D4A853] p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx(null);
                }}
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 z-50 text-white hover:text-[#D4A853] p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer backdrop-blur-md"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 z-50 text-white hover:text-[#D4A853] p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer backdrop-blur-md"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-4xl rounded-2xl overflow-hidden bg-[#0A1628] border border-[#D4A853]/40 shadow-2xl relative flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] sm:aspect-video w-full bg-black">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  priority
                  className="object-contain sm:object-cover"
                />
              </div>

              <div className="p-5 sm:p-7 bg-[#0A1628] border-t border-white/10 text-white">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs font-bold text-[#D4A853] uppercase tracking-wider inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                    {currentItem.category} • {currentItem.badge}
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    Photo {selectedIdx + 1} of {filteredItems.length}
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold font-[family-name:var(--font-heading)] text-white">
                  {currentItem.title}
                </h3>
                
                <p className="text-white/75 text-xs sm:text-sm mt-2 leading-relaxed font-[family-name:var(--font-body)]">
                  {currentItem.description}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-white/60">
                    Sree Valmeeki E.M High School, Kadiri
                  </span>
                  <a
                    href="https://www.instagram.com/sree_valmeekischool_kadiri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#D4A853] hover:text-white transition-colors font-medium"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>See more updates on Instagram</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

