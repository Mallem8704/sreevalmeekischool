'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const studentFaces = [
  {
    name: 'D. Janani',
    role: 'SSC Town 1st Ranker (595/600)',
    badge: 'Town 1st Rank',
    image: '/extracted/star_achievers/janani_face.jpg',
    oneLiner: '“Town 1st Rank achieved through disciplined preparation and caring faculty mentorship.”',
  },
  {
    name: 'B. Mounika Bai',
    role: 'SSC Town 2nd Ranker (594/600)',
    badge: 'Town 2nd Rank',
    image: '/extracted/star_achievers/mounika_face.jpg',
    oneLiner: '“Focusing on fundamentals every single day created consistent 99% board excellence.”',
  },
  {
    name: 'National Handwriting Team',
    role: 'National Level Competition Champions',
    badge: 'National Champion',
    image: '/extracted/champions/handwriting_national_champion.jpg',
    oneLiner: '“Fine motor discipline and handwriting finesse celebrated at the National stage.”',
  },
  {
    name: 'State Science Innovators',
    role: 'Jana Vignana Vedika State 1st Rank',
    badge: 'State 1st Rank',
    image: '/extracted/champions/science_experiments_state_1st_rank.jpg',
    oneLiner: '“Hands-on physics and chemistry lab experimentation yielding State 1st Rank honors.”',
  },
];

export default function FacesOfValmeeki() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200/80 dark:border-white/10 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-[0.25em] uppercase block mb-3">
            PEOPLE & PERSONALITIES
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-[family-name:var(--font-heading)] uppercase tracking-tight text-[#0A1628] dark:text-white mb-3">
            THE FACES BEHIND THE RESULTS.
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
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
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#0A1628] border border-slate-200/80 dark:border-white/10 hover:border-[#D4A853]/60 dark:hover:border-[#D4A853]/60 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Photo Area with Portrait Aspect */}
                <div className="relative aspect-[4/4] sm:aspect-[4/4.2] w-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <Image
                    src={face.image}
                    alt={face.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-[#D4A853] text-[#0A1628] text-[10px] font-black uppercase tracking-wider shadow-sm">
                      {face.badge}
                    </span>
                  </div>
                </div>

                {/* Content info below image */}
                <div className="p-5 text-left bg-white dark:bg-[#0A1628] space-y-1">
                  <h3 className="text-lg font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)]">
                    {face.name}
                  </h3>
                  <p className="text-xs font-bold text-[#B8860B] dark:text-[#FBBF24] mb-2">{face.role}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 italic line-clamp-3 leading-relaxed">
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
