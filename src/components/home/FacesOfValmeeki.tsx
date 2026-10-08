'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const studentFaces = [
  {
    name: 'V. Keerthana',
    role: 'SSC District 1st Ranker (592/600)',
    badge: 'State Distinction',
    image: '/images/school/school-event-7.jpg',
    oneLiner: '“Curiosity turned into state board victory through patient guidance.”',
  },
  {
    name: 'Valmeeki Cricket XI',
    role: 'VPL Championship Winners',
    badge: 'District Champions',
    image: '/images/school/school-event-2.jpg',
    oneLiner: '“Team grit and physical discipline forged on the campus arena.”',
  },
  {
    name: 'B. Harika',
    role: 'Daily Stage Assembly Orator',
    badge: 'Spoken English Leader',
    image: '/images/school/school-event-4.jpg',
    oneLiner: '“Stage fright disappeared with daily morning English assemblies.”',
  },
  {
    name: 'M. Yashwanth Reddy',
    role: 'National Science Olympiad Gold',
    badge: 'Olympiad Ranker',
    image: '/images/school/school-event-1.jpg',
    oneLiner: '“Solving Olympiad problems became my favorite daily thrill.”',
  },
];

export default function FacesOfValmeeki() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#050D1A] text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4A853] text-xs font-black tracking-[0.25em] uppercase block mb-3">
            PEOPLE & PERSONALITIES
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-white mb-3">
            THE FACES BEHIND THE RESULTS.
          </h2>
          <p className="text-white/70 text-xs sm:text-sm">
            Not statistics on paper. Real children discovering confidence, joy, and purpose.
          </p>
        </div>

        {/* 4 Portrait Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentFaces.map((face, idx) => (
            <motion.div
              key={face.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-[#0A1628] border border-white/10 hover:border-[#D4A853]/50 transition-all shadow-xl"
            >
              {/* Photo Area with Portrait Aspect */}
              <div className="relative aspect-[3/4] w-full bg-[#050D1A]">
                <Image
                  src={face.image}
                  alt={face.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent opacity-90" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#D4A853] text-[#050D1A] text-[10px] font-black uppercase tracking-wider">
                    {face.badge}
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="text-xl font-black text-white font-[family-name:var(--font-heading)] mb-0.5">
                    {face.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#FBBF24] mb-2">{face.role}</p>
                  <p className="text-[11px] text-white/70 italic line-clamp-2">
                    {face.oneLiner}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
