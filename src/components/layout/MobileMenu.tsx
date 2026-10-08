'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, Phone, MapPin, GraduationCap, ArrowRight, MessageCircle } from 'lucide-react';
import { navLinks } from '@/lib/data';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-[#0A1628] text-[#0A1628] dark:text-white border-l border-slate-200 dark:border-white/10 z-[70] shadow-2xl overflow-y-auto flex flex-col"
          >
            {/* Header with Official Logo */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-white/10 bg-white dark:bg-[#0A1628]">
              <Link href="/" onClick={onClose} className="flex items-center">
                <div className="relative h-11 w-48">
                  <Image
                    src="/sree-valmeeki-main-logo-transparent.png"
                    alt="SREE VALMEEKI E.M SCHOOL"
                    fill
                    sizes="200px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <button
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Theme Switcher Strip */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-white/5 border-b border-slate-100 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Theme / Appearance
              </span>
              <ThemeToggle showLabel />
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-4 flex flex-col space-y-1">
              {navLinks.map((link, i) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.03 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all ${
                        isActive
                          ? 'bg-amber-100 dark:bg-[#D4A853]/20 text-[#0A1628] dark:text-[#FBBF24] font-bold'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      <span className="text-base">{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-5 bg-slate-50 dark:bg-[#050D1A] border-t border-slate-100 dark:border-white/10 space-y-3">
              <Link
                href="/admissions"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0A1628] font-bold text-sm uppercase tracking-wider rounded-full shadow-md transition-colors"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Enroll Now 2026–27</span>
              </Link>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="tel:+919440468838"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold shadow-xs hover:bg-slate-50 dark:hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4A853]" />
                  <span>Call Direct</span>
                </a>
                <a
                  href="https://wa.me/919440468838?text=Hello%20Sree%20Valmeeki%20School,%20I%20am%20interested%20in%20Admissions%20for%202026-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366] text-white rounded-xl text-xs font-semibold shadow-xs hover:brightness-105 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#D4A853]" />
                <span>Bypass Road, Kadiri, Andhra Pradesh</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
