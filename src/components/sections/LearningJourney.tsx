'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const journeyStages = [
  {
    id: 1,
    stage: 'FOUNDATION',
    classes: 'Nursery – UKG',
    description: 'Nurturing curiosity and essential life skills in a warm, caring environment.',
    focus: ['Curiosity', 'Motor Skills', 'Language', 'Social Growth'],
    align: 'left',
  },
  {
    id: 2,
    stage: 'PRIMARY',
    classes: 'Classes 1–5',
    description: 'Building strong fundamentals and encouraging independent thought processes.',
    focus: ['Fundamentals', 'Reading', 'Numeracy', 'Critical Thinking'],
    align: 'right',
  },
  {
    id: 3,
    stage: 'MIDDLE SCHOOL',
    classes: 'Classes 6–8',
    description: 'Deepening subject knowledge and developing analytical problem-solving abilities.',
    focus: ['Concept Building', 'Application', 'Reasoning', 'Exploration'],
    align: 'left',
  },
  {
    id: 4,
    stage: 'HIGH SCHOOL',
    classes: 'Classes 9–10',
    description: 'Focused preparation for board exams and building a competitive edge for the future.',
    focus: ['Board Preparation', 'Competitive Edge', 'Future Readiness', 'Leadership'],
    align: 'right',
  },
];

export default function LearningJourney() {
  return (
    <section id="academics" className="scroll-mt-20 bg-white py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.p variants={fadeInUp} className="text-sm font-bold tracking-widest text-[#64748B] uppercase mb-4">
            LEARNING PATHWAY
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A2E] font-[family-name:var(--font-heading)] leading-tight">
            A Learning Journey <br />
            <span className="text-[#D4A853] italic">That Grows With Your Child</span>
          </motion.h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-[#F5F3EE] md:-translate-x-1/2 rounded-full">
            <motion.div
              className="absolute top-0 w-full bg-[#D4A853] rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="space-y-12 md:space-y-24 relative z-10">
            {journeyStages.map((item, index) => (
              <div key={item.id} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
                
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: 0.3 + index * 0.2, type: 'spring' }}
                  className="absolute left-6 md:left-1/2 top-6 md:top-1/2 w-5 h-5 bg-white border-4 border-[#D4A853] rounded-full md:-translate-x-1/2 md:-translate-y-1/2 z-20 shadow-[0_0_0_4px_white]"
                />

                {/* Content Left */}
                <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${item.align === 'left' ? 'md:pr-12 md:text-right' : 'md:hidden'}`}>
                  {item.align === 'left' && (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                      <h3 className="text-sm font-bold text-[#D4A853] tracking-widest uppercase mb-2">{item.classes}</h3>
                      <h4 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E] mb-4 font-[family-name:var(--font-heading)]">{item.stage}</h4>
                      <p className="text-[#64748B] mb-6 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {item.focus.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-[#F5F3EE] text-[#1A1A2E] text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Content Right (Mobile fallback and Desktop right side) */}
                <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${item.align === 'right' ? 'md:pl-12 md:text-left' : 'md:hidden block mt-0 md:mt-0'}`}>
                  {(item.align === 'right' || item.align === 'left') && (
                    <motion.div
                      initial={{ opacity: 0, x: item.align === 'right' ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className={item.align === 'left' ? 'md:hidden' : ''}
                    >
                      <h3 className="text-sm font-bold text-[#D4A853] tracking-widest uppercase mb-2">{item.classes}</h3>
                      <h4 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E] mb-4 font-[family-name:var(--font-heading)]">{item.stage}</h4>
                      <p className="text-[#64748B] mb-6 leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.focus.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-[#F5F3EE] text-[#1A1A2E] text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
