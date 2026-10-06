'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const achievements = [
  { category: 'Academic Achievements' },
  { category: 'Olympiad Achievements' },
  { category: 'Competition Highlights' },
  { category: 'Student Recognition' },
  { category: 'Sports & Activities' },
];

export default function Achievements() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="achievements" className="scroll-mt-20 py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-[#D4A853]"></div>
              <span className="text-[#D4A853] font-semibold tracking-widest text-sm uppercase">Our Achievements</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] text-[#0A1628] leading-tight"
            >
              Every Achievement<br />
              <span className="text-[#1E3A8A]">Tells A Story.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#0A1628] hover:bg-[#FAFAF7] hover:border-[#D4A853] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#0A1628] hover:bg-[#FAFAF7] hover:border-[#D4A853] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="w-full pl-6 lg:pl-[calc((100vw-min(100vw,80rem))/2+3rem)]">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 pr-6 lg:pr-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] h-[480px] rounded-3xl bg-gradient-to-br from-[#0A1628] to-[#1E3A8A] p-8 flex flex-col snap-start relative overflow-hidden group shadow-xl"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A853]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#D4A853]/20 transition-colors duration-500"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-[#D4A853]/20 border border-[#D4A853]/30 flex items-center justify-center text-[#D4A853] mb-auto relative z-10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                <Award size={28} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-[family-name:var(--font-heading)] text-white mb-4">
                  {achievement.category}
                </h3>
                <div className="h-px w-full bg-white/10 mb-6 group-hover:bg-[#D4A853]/50 transition-colors duration-500"></div>
                <p className="text-white/70 font-medium leading-relaxed">
                  Achievement details will be updated from verified school records.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
