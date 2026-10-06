'use client';

import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Crown, Shield, Palette, Trophy, Heart, Star } from 'lucide-react';

const areas = [
  { name: 'Academics', icon: BookOpen, angle: 0 },
  { name: 'Communication', icon: MessageCircle, angle: 45 },
  { name: 'Leadership', icon: Crown, angle: 90 },
  { name: 'Discipline', icon: Shield, angle: 135 },
  { name: 'Creativity', icon: Palette, angle: 180 },
  { name: 'Sports', icon: Trophy, angle: 225 },
  { name: 'Character', icon: Heart, angle: 270 },
  { name: 'Confidence', icon: Star, angle: 315 },
];

export default function StudentDevelopment() {
  return (
    <section className="py-24 bg-[#FAFAF7] overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-[#D4A853]"></div>
            <span className="text-[#D4A853] font-semibold tracking-widest text-sm uppercase">Holistic Growth</span>
            <div className="h-px w-12 bg-[#D4A853]"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] text-[#0A1628]"
          >
            Education Beyond Marks.
          </motion.h2>
        </div>

        {/* Mobile View - Grid */}
        <div className="md:hidden grid grid-cols-2 gap-4">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#F5F3EE] flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-[#FAFAF7] rounded-full text-[#1E3A8A]">
                  <Icon size={24} />
                </div>
                <span className="text-[#2D2D3F] font-medium text-sm">{area.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop View - Orbit */}
        <div className="hidden md:flex justify-center items-center min-h-[600px] relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 rounded-full bg-[#0A1628] flex items-center justify-center z-10 shadow-xl border-4 border-[#D4A853]/20"
          >
            <div className="text-center">
              <div className="text-[#D4A853] text-sm tracking-widest uppercase mb-1">The</div>
              <div className="text-white font-[family-name:var(--font-heading)] text-2xl">Student</div>
            </div>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center">
            {areas.map((area, index) => {
              const Icon = area.icon;
              const radius = 240;
              const angleRad = (area.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  whileInView={{ opacity: 1, x, y }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, type: "spring", stiffness: 50 }}
                  className="absolute"
                  style={{ originX: 0.5, originY: 0.5 }}
                >
                  <div className="group cursor-pointer">
                    <div className="bg-white p-4 rounded-xl shadow-md border border-[#F5F3EE] flex flex-col items-center justify-center gap-2 w-32 transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
                      <div className="p-2.5 bg-[#F5F3EE] rounded-full text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                        <Icon size={24} />
                      </div>
                      <span className="text-[#2D2D3F] font-medium text-sm text-center">{area.name}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Orbit rings */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute w-[480px] h-[480px] rounded-full border border-[#D4A853]/20 border-dashed"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute w-[600px] h-[600px] rounded-full border border-[#1E3A8A]/5 border-dashed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
