'use client';

import { motion } from 'framer-motion';

const facilities = [
  { name: 'Smart Classrooms', description: 'Tech-enabled spaces for interactive learning.', size: 'large', gradient: 'from-[#0A1628] to-[#1E3A8A]' },
  { name: 'Learning Spaces', description: 'Collaborative environments for student growth.', size: 'medium', gradient: 'from-[#1E3A8A] to-[#2563EB]' },
  { name: 'Spacious Classrooms', description: 'Well-ventilated and designed for comfort.', size: 'medium', gradient: 'from-[#D4A853] to-[#B8860B]' },
  { name: 'Transportation', description: 'Safe and reliable commute options.', size: 'small', gradient: 'from-[#0F2044] to-[#152D5E]' },
  { name: 'Activity Areas', description: 'Dedicated zones for extracurriculars.', size: 'small', gradient: 'from-[#C49A3C] to-[#D4A853]' },
  { name: 'School Campus', description: 'A secure, serene environment for holistic education.', size: 'small', gradient: 'from-[#1A1A2E] to-[#2D2D3F]' },
];

export default function Campus() {
  return (
    <section id="campus" className="scroll-mt-20 py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-12 bg-[#D4A853]"></div>
              <span className="text-[#D4A853] font-semibold tracking-widest text-sm uppercase">Our Campus</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] text-[#0A1628] leading-tight"
            >
              A Campus Designed<br />
              <span className="text-[#1E3A8A]">For Learning.</span>
            </motion.h2>
          </div>
          
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#64748B] leading-relaxed max-w-2xl"
            >
              Our infrastructure is thoughtfully crafted to support both academic excellence and personal development, providing students with the perfect environment to explore, learn, and grow.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[200px]">
          {facilities.map((facility, index) => {
            const isLarge = facility.size === 'large';
            const isMedium = facility.size === 'medium';
            
            return (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden group cursor-pointer ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : 
                  isMedium ? 'md:col-span-2 md:row-span-1' : 
                  'md:col-span-1 md:row-span-1 lg:col-span-2'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${facility.gradient} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-[family-name:var(--font-heading)] mb-2 group-hover:-translate-y-2 transition-transform duration-300">
                    {facility.name}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-white/80 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 line-clamp-2">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
