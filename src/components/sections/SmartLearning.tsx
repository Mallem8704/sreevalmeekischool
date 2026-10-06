'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const statements = ['SEE IT.', 'UNDERSTAND IT.', 'REMEMBER IT.'];

export default function SmartLearning() {
  return (
    <section className="bg-[#F5F3EE] py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A2E] font-[family-name:var(--font-heading)] leading-tight mb-8">
                Traditional Values. <br />
                <span className="text-[#D4A853] italic">Modern Classrooms.</span>
              </motion.h2>
              
              <div className="space-y-6 text-[#64748B] text-lg leading-relaxed">
                <motion.p variants={fadeInUp}>
                  Education today requires more than just chalk and talk. At Sree Valmeeki High School, we blend our strong traditional teaching values with modern digital learning tools to create an immersive educational experience.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Our smart classrooms are equipped with interactive displays and audio-visual aids that bring complex concepts to life. Visual learning helps students grasp difficult topics faster and retain them longer.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-[#1A1A2E] font-medium text-xl border-l-4 border-[#D4A853] pl-6 mt-8 py-2">
                  Technology is used as a learning aid — not a distraction.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Animated Statements */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div 
              className="flex flex-col gap-8 md:gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              {statements.map((statement, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 50, filter: 'blur(10px)' },
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      filter: 'blur(0px)',
                      transition: { duration: 0.8, delay: index * 0.4, ease: 'easeOut' }
                    }
                  }}
                  className="relative group"
                >
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0A1628] to-[#1E3A8A] opacity-20 absolute -inset-2 blur-md transition-all duration-500 group-hover:opacity-40 group-hover:blur-xl">
                    {statement}
                  </h3>
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0A1628] relative z-10 tracking-tighter">
                    {statement}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
