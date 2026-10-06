'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles, MapPin, Tag, ExternalLink, X, Trophy } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import Image from 'next/image';
import Link from 'next/link';

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  badge: string;
  category: string;
  summary: string;
  fullDetails: string;
  image: string;
  href: string;
  actionLabel: string;
}

const events: SchoolEvent[] = [
  {
    id: 'annual-day-2026',
    title: 'Annual Day Celebrations & Cultural Extravaganza 2026',
    date: 'Annual Grand Event',
    badge: 'Flagship Event',
    category: 'Cultural & Arts',
    summary: 'A breathtaking celebration of student performing arts, classical and folk dance recitals, and honouring 27 years of educational excellence.',
    fullDetails: 'The Sree Valmeeki Annual Day brings together over 1,500 parents, alumni, and distinguished guests from Kadiri. Students from Kindergarten to Class 10 perform thematic dance, choral songs, and theatrical sketches celebrating cultural heritage, followed by the annual academic distinction awards.',
    image: '/images/school/school-event-4.jpg',
    href: '#gallery',
    actionLabel: 'View Event Gallery',
  },
  {
    id: 'vpl-championship',
    title: 'Valmeeki Premier League (VPL) Sports Championship',
    date: 'Annual Sports Season',
    badge: 'VPL 2026',
    category: 'Sports & Athletics',
    summary: 'Kadiri’s landmark inter-house cricket tournament and sports grand celebrations promoting team spirit, leadership, and athletic vigor.',
    fullDetails: 'Valmeeki Premier League (VPL) is our high-energy inter-house sports festival featuring cricket tournaments, volleyball championships, sprint relays, and track-and-field showdowns. Trained by dedicated physical education coaches, students build lifelong sportsmanship and team resilience.',
    image: '/images/school/school-event-2.jpg',
    href: '#gallery',
    actionLabel: 'Explore VPL Moments',
  },
  {
    id: 'science-fair-expo',
    title: 'National Science Fair & Innovation Expo',
    date: 'Academic Exhibition',
    badge: 'STEM & Robotics',
    category: 'Science Expo',
    summary: 'Valmeeki students showcase cutting-edge physics, chemistry, robotics prototypes, and green ecology working models with live parental demonstrations.',
    fullDetails: 'Fostering practical inquiry over rote memorization, our Science Fair features working models in hydraulic machinery, solar power harvesting, automated irrigation systems, and chemistry laboratory demonstrations. Parents and visiting educators interact directly with student creators.',
    image: '/images/school/school-event-9.jpg',
    href: '#gallery',
    actionLabel: 'Discover STEM Exhibits',
  },
  {
    id: 'admissions-2026-27',
    title: 'Admissions Open for Academic Year 2026–27',
    date: 'Active Now • Limited Seats',
    badge: 'Enroll Now',
    category: 'Admissions',
    summary: 'Enrolling Nursery to Class 10. Offering IIT/NEET foundation coaching, spoken English mastery, smart digital classrooms, and safe transport.',
    fullDetails: 'Join Kadiri’s most trusted institution with a 27-year legacy of academic and character-building excellence. We offer integrated IIT Foundation coaching from Class 6, daily spoken English mentoring, state-of-the-art computer and science labs, and GPS-enabled school bus routes.',
    image: '/images/school/school-event-12.jpg',
    href: '#enquiry',
    actionLabel: 'Apply for Admission',
  },
];

export default function NewsEvents() {
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);

  return (
    <section id="news-events" className="bg-[#F5F3EE] py-24 border-t border-gray-200 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/20 border border-[#D4A853]/40 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="text-xs font-bold tracking-widest text-[#B8860B] uppercase font-[family-name:var(--font-body)]">
                Campus Highlights & Milestones
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)] text-[#0A1628] font-bold leading-tight">
              What’s Happening At Valmeeki
            </h2>
            <p className="text-[#64748B] text-base mt-2 max-w-2xl font-[family-name:var(--font-body)]">
              Real stories, tournaments, and celebrations straight from our campus in Kadiri. Follow our verified page for daily live reels and photos.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://www.instagram.com/sree_valmeekischool_kadiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-[#0A1628] font-semibold text-xs hover:border-[#E1306C] hover:text-[#E1306C] shadow-sm transition-all"
            >
              <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
              <span>@sree_valmeekischool_kadiri</span>
            </a>

            <Link
              href="/news"
              className="flex items-center gap-2 text-[#0A1628] font-bold text-xs uppercase tracking-wider hover:text-[#B8860B] transition-colors pb-1 border-b-2 border-[#0A1628] hover:border-[#B8860B]"
            >
              <span>All News</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-200 flex flex-col justify-between"
            >
              <div>
                {/* Event Real Photo Container */}
                <div className="relative h-52 w-full overflow-hidden bg-[#0A1628]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-[#0A1628]/25 to-transparent" />
                  
                  {/* Badge & Category */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#0A1628]/85 backdrop-blur-md text-[#D4A853] text-[10px] font-bold uppercase tracking-wider border border-[#D4A853]/40">
                      {event.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0A1628] text-[10px] font-semibold">
                      {event.category}
                    </span>
                  </div>

                  {/* Date Chip at Bottom of Photo */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90 text-xs font-medium">
                    <Calendar size={13} className="text-[#D4A853]" />
                    <span>{event.date}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] text-[#0A1628] font-bold mb-3 group-hover:text-[#B8860B] transition-colors leading-snug line-clamp-2">
                    {event.title}
                  </h3>

                  <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed line-clamp-3 font-[family-name:var(--font-body)]">
                    {event.summary}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className="text-xs font-semibold text-[#0A1628] hover:text-[#B8860B] transition-colors cursor-pointer"
                >
                  Read Story
                </button>

                <a
                  href={event.href}
                  className="text-[#0A1628] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 group-hover:text-[#B8860B] group-hover:gap-2 transition-all"
                >
                  <span>{event.actionLabel}</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative h-64 sm:h-72 w-full bg-[#0A1628]">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#D4A853] text-[#0A1628] text-xs font-bold uppercase tracking-wider">
                    {selectedEvent.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 text-white text-xs font-semibold">
                    {selectedEvent.date}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-[#0A1628] mb-3 leading-snug">
                  {selectedEvent.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-[family-name:var(--font-body)]">
                  {selectedEvent.fullDetails}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://www.instagram.com/sree_valmeekischool_kadiri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#E1306C] hover:underline"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Watch highlights on Instagram</span>
                  </a>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      Close
                    </button>
                    <a
                      href={selectedEvent.href}
                      onClick={() => setSelectedEvent(null)}
                      className="px-5 py-2.5 rounded-xl bg-[#0A1628] hover:bg-[#1E3A8A] text-white text-xs font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-2 shadow-md"
                    >
                      <span>{selectedEvent.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

