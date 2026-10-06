'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const features = [
  { title: 'Daily Communication Practice', desc: 'Integrating conversational English into daily school routines.' },
  { title: 'Vocabulary Development', desc: 'Structured activities to expand and refine everyday vocabulary.' },
  { title: 'Public Speaking', desc: 'Opportunities for debates, elocution, and stage presentations.' },
  { title: 'Classroom Interaction', desc: 'Encouraging students to express their thoughts clearly and confidently.' },
  { title: 'Confidence Building', desc: 'Creating a supportive environment free from the fear of making mistakes.' }
];

export default function SpokenEnglish() {
  return (
    <section className="bg-white py-24 lg:py-40 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAFAF7] rounded-l-[100px] pointer-events-none hidden lg:block" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A2E] font-[family-name:var(--font-heading)] leading-tight mb-8">
              Confidence Begins <br />
              <span className="text-[#D4A853] italic">With Communication.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#64748B] leading-relaxed">
              In today's globalized world, expressing oneself clearly is just as important as academic knowledge. Our dedicated Spoken English program is woven into the fabric of our curriculum.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="relative pl-8 group"
            >
              <div className="absolute left-0 top-2.5 w-3 h-3 rounded-full bg-[#D4A853] group-hover:scale-150 transition-transform duration-300" />
              <div className="absolute left-[5px] top-5 bottom-[-40px] w-[2px] bg-[#F5F3EE] group-last:hidden md:group-[&:nth-last-child(-n+2)]:hidden lg:group-[&:nth-last-child(-n+3)]:hidden" />
              
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3 font-[family-name:var(--font-heading)]">
                {feature.title}
              </h3>
              <p className="text-[#64748B] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
