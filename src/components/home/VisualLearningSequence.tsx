'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    step: '01',
    word: 'UNDERSTAND.',
    caption: 'Teacher breaks complex ideas into intuitive, real-world mental models.',
    image: '/images/school/school-event-12.jpg',
  },
  {
    step: '02',
    word: 'PRACTICE.',
    caption: 'Structured problem sets strengthen calculation speed and analytical grasp.',
    image: '/images/school/school-event-10.jpg',
  },
  {
    step: '03',
    word: 'EXPLORE.',
    caption: 'Hands-on experiments in science labs verify theories in action.',
    image: '/images/school/school-event-9.jpg',
  },
  {
    step: '04',
    word: 'IMPROVE.',
    caption: 'Continuous diagnostic assessments guide personal revision without exam fear.',
    image: '/images/school/school-event-11.jpg',
  },
  {
    step: '05',
    word: 'ACHIEVE.',
    caption: 'State distinction, stage confidence, and lifelong academic leadership.',
    image: '/images/school/school-event-7.jpg',
  },
];

export default function VisualLearningSequence() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-[0.25em] uppercase block mb-3">
            5-STEP LEARNING EVOLUTION
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-3">
            THIS IS WHERE RESULTS BEGIN.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            How a child moves from basic curiosity to board distinction.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {steps.map((s, idx) => (
            <button
              key={s.word}
              onClick={() => setActiveStep(idx)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#0A1628] dark:bg-[#D4A853] text-[#D4A853] dark:text-[#0A1628] shadow-md shadow-[#0A1628]/10 dark:shadow-none scale-105 border border-[#0A1628] dark:border-[#D4A853]'
                  : 'bg-white dark:bg-[#0A1628] hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 hover:text-[#0A1628] dark:hover:text-white border border-slate-200 dark:border-white/10 shadow-sm'
              }`}
            >
              <span>{s.step}</span> • {s.word}
            </button>
          ))}
        </div>

        {/* Feature Display */}
        <motion.div
          key={steps[activeStep].word}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-white dark:bg-[#0A1628] shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-none"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Photography Area */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] w-full">
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].word}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-transparent to-white/95 sm:to-white dark:to-[#0A1628]/95 dark:sm:to-[#0A1628] opacity-95 sm:opacity-100" />
            </div>

            {/* Dramatic Typography Overlay Area */}
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-4 text-left bg-white dark:bg-[#0A1628]">
              <span className="text-xs font-black tracking-widest text-[#B8860B] dark:text-[#FBBF24] uppercase">
                PHASE {steps[activeStep].step} OF 05
              </span>

              <h3 className="text-4xl sm:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white">
                {steps[activeStep].word}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {steps[activeStep].caption}
              </p>

              <div className="pt-4 flex items-center gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeStep ? 'w-8 bg-[#D4A853]' : 'w-2 bg-slate-300 dark:bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
