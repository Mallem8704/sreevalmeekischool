'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, Phone, MapPin, GraduationCap } from 'lucide-react';
import { navLinks } from '@/lib/data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const getHref = (href: string) => {
    if (href === '/') {
      return pathname === '/' ? '#' : '/';
    }
    if (href.startsWith('#')) {
      return pathname === '/' ? href : `/${href}`;
    }
    return href;
  };

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
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0A1628] z-[70] shadow-2xl overflow-y-auto flex flex-col"
          >
            {/* Header with Official Logo */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <Link href="/" onClick={onClose} className="flex items-center">
                <div className="relative h-11 w-48 bg-white/95 px-2.5 py-1 rounded-xl shadow-md border border-white/40 flex items-center">
                  <Image
                    src="/sree-valmeeki-main-logo-transparent.png"
                    alt="SREE VALMEEKI E.M SCHOOL — Since 1999"
                    fill
                    sizes="220px"
                    className="object-contain"
                  />
                </div>
              </Link>
              <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-6 flex flex-col space-y-1">
              {navLinks.map((link, i) => {
                const targetHref = getHref(link.href);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.04 }}
                  >
                    <Link
                      href={targetHref}
                      onClick={onClose}
                      className="block text-xl font-[family-name:var(--font-heading)] text-white/85 hover:text-[#D4A853] py-2.5 transition-colors border-b border-white/5"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-white/5 space-y-3.5"
            >
              <a
                href={pathname === '/' ? '#enquiry' : '/#enquiry'}
                onClick={onClose}
                className="flex items-center justify-center w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] text-[#0A1628] font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                Enquire Now
              </a>

              <a
                href="tel:+919440468838"
                className="flex items-center justify-center w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 mr-2.5 text-[#D4A853]" />
                +91 94404 68838
              </a>

              <a
                href="https://wa.me/919440468838"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white font-semibold text-xs border border-[#25D366]/40 transition-all"
              >
                <span>Chat on WhatsApp: +91 94404 68838</span>
              </a>

              <a
                href="https://www.instagram.com/sree_valmeekischool_kadiri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#E1306C]/20 text-white/80 hover:text-white font-semibold text-xs border border-white/10 transition-all"
              >
                <span>Instagram: @sree_valmeekischool_kadiri</span>
              </a>

              <div className="flex justify-center pt-2">
                <Link
                  href={pathname === '/' ? '#contact' : '/#contact'}
                  onClick={onClose}
                  className="flex items-center text-white/60 hover:text-[#D4A853] transition-colors text-xs"
                >
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#D4A853]" />
                  Madanapalli Road, Kadiri, AP
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
