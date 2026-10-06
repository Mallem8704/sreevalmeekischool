'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Monitor, Target, Award, MessageCircle, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const features = [
  {
    id: '01',
    title: 'Strong Academic Foundation',
    description: 'We focus on building a robust base in core subjects, ensuring students grasp fundamental concepts thoroughly.',
    icon: BookOpen,
  },
  {
    id: '02',
    title: 'Smart & Digital Learning',
    description: 'Interactive smart classrooms equipped with modern digital tools to make learning engaging and effective.',
    icon: Monitor,
  },
  {
    id: '03',
    title: 'IIT Foundation Program',
    description: 'Early exposure to logical reasoning and analytical thinking to prepare for future competitive exams.',
    icon: Target,
  },
  {
    id: '04',
    title: 'Olympiad Preparation',
    description: 'Specialized coaching to excel in national and international level competitive examinations.',
    icon: Award,
  },
  {
    id: '05',
    title: 'Spoken English Development',
    description: 'Dedicated focus on communication skills to build confidence and fluency in English.',
    icon: MessageCircle,
  },
  {
    id: '06',
    title: 'Experienced Faculty',
    description: 'Highly qualified and dedicated teachers who provide personalized attention to every student.',
    icon: Users,
  },
];

export default function WhyValmeeki() {
  return (
    <section className="bg-[#F5F3EE] py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.p variants={fadeInUp} className="text-sm font-bold tracking-widest text-[#64748B] uppercase mb-4">
            WHY VALMEEKI
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A2E] font-[family-name:var(--font-heading)] leading-tight">
            Why Parents Choose <br />
            <span className="text-[#D4A853] italic">Sree Valmeeki</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-transparent hover:border-[#D4A853] overflow-hidden"
            >
              <div className="absolute -top-6 -right-6 text-[100px] font-black text-[#FAFAF7] z-0 transition-colors group-hover:text-[#F5F3EE]">
                {feature.id}
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-full bg-[#FAFAF7] flex items-center justify-center text-[#D4A853] mb-6 group-hover:bg-[#0A1628] transition-colors duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-4 font-[family-name:var(--font-heading)]">
                  {feature.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed flex-grow">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-[#D4A853] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
