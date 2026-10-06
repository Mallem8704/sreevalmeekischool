'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const nodes = [
  'Strong Fundamentals',
  'Concept Mastery',
  'Problem Solving',
  'Competitive Exposure',
  'Future Readiness'
];

const features = [
  'IIT Foundation from early classes',
  'Olympiad preparation and coaching',
  'Advanced problem-solving techniques',
  'Analytical and critical thinking skills',
  'Strengthening core scientific concepts',
  'Developing a competitive exam mindset'
];

export default function IITFoundation() {
  return (
    <section className="bg-[#0A1628] text-white py-20 lg:py-32 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#1E3A8A] opacity-20 blur-[120px]" />
        <div className="absolute bottom-[0%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#D4A853] opacity-10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content & Pathway */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="mb-12"
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] leading-tight mb-4">
                Beyond The Textbook.
              </motion.h2>
              <motion.h3 variants={fadeInUp} className="text-xl md:text-2xl text-[#D4A853] font-light mb-6">
                Early Exposure To Competitive Thinking
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed text-lg">
                Our IIT Foundation and Olympiad programs are designed to nurture analytical minds. We go beyond standard curriculum to challenge students, helping them grasp complex concepts with clarity and confidence.
              </motion.p>
            </motion.div>

            {/* Pathway Visualization */}
            <div className="relative pl-6 py-4">
              <div className="absolute left-[1.65rem] top-8 bottom-8 w-[2px] bg-white/10 border-l-2 border-dashed border-white/20" />
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
                className="space-y-8"
              >
                {nodes.map((node, index) => (
                  <motion.div key={index} variants={fadeInUp} className="relative flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-[#152D5E] border-2 border-[#D4A853] flex items-center justify-center z-10 mr-6 shadow-[0_0_15px_rgba(212,168,83,0.3)] group-hover:shadow-[0_0_25px_rgba(212,168,83,0.6)] group-hover:bg-[#D4A853] transition-all duration-300">
                      <span className="text-sm font-bold text-white group-hover:text-[#0A1628]">{index + 1}</span>
                    </div>
                    <span className="text-lg font-medium text-gray-200 group-hover:text-[#D4A853] transition-colors duration-300">
                      {node}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right Side: Feature List */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-[#0F2044] rounded-2xl p-8 lg:p-12 border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A853] opacity-5 blur-[50px]" />
              
              <h4 className="text-2xl font-bold text-white mb-8 font-[family-name:var(--font-heading)] flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#D4A853] block" />
                Program Highlights
              </h4>
              
              <ul className="space-y-6">
                {features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#D4A853] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 text-lg group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
