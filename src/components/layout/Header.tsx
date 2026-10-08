'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, ArrowRight, X } from 'lucide-react';
import { navLinks } from '@/lib/data';
import MobileMenu from './MobileMenu';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Info Bar (collapses smoothly on scroll) */}
        {showAnnouncement && !isScrolled && (
          <div className="w-full bg-[#0A1628] text-white py-1 px-4 text-xs border-b border-white/10 hidden sm:block">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#FBBF24] text-[#0A1628] font-black text-[10px] tracking-wider uppercase">
                  Admissions Open 2026–27
                </span>
                <span className="text-white/90 font-medium text-xs">
                  Sree Valmeeki E.M School • 27 Years of Educational Excellence • Kadiri
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <Link
                  href="/admissions"
                  className="text-[#FBBF24] hover:text-white font-bold transition-colors inline-flex items-center gap-1"
                >
                  Enroll Now <ArrowRight className="w-3 h-3" />
                </Link>
                <a
                  href="tel:+919440468838"
                  className="text-white/80 hover:text-[#FBBF24] transition-colors inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-[#FBBF24]" />
                  <span>+91 94404 68838</span>
                </a>
                <button
                  onClick={() => setShowAnnouncement(false)}
                  className="text-white/60 hover:text-white transition-colors cursor-pointer"
                  aria-label="Dismiss notice"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Navbar - Pure Crisp White Floating Header matching reference */}
        <div
          className={`w-full bg-white/95 dark:bg-[#0A1628]/95 backdrop-blur-md transition-all duration-300 border-b border-slate-100 dark:border-white/10 ${
            isScrolled ? 'shadow-md py-2' : 'shadow-sm py-2.5 sm:py-3'
          }`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between">
              {/* Main Official Logo (Header Brand) */}
              <Link href="/" className="flex items-center group shrink-0">
                <div className="relative h-10 sm:h-12 md:h-13 w-48 sm:w-56 md:w-64 transition-all duration-300">
                  <Image
                    src="/sree-valmeeki-main-logo-transparent.png"
                    alt="SREE VALMEEKI E.M SCHOOL — Since 1999 — 27 YEARS OF EXCELLENCE"
                    fill
                    sizes="(max-width: 768px) 190px, 280px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation Links with Pill Highlight */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-sm font-semibold tracking-wide transition-all duration-200 px-3.5 py-1.5 rounded-full ${
                        isActive
                          ? 'bg-amber-100/90 dark:bg-[#D4A853]/20 text-[#0A1628] dark:text-[#FBBF24] border border-amber-300/80 dark:border-[#D4A853]/40 shadow-xs font-bold'
                          : 'text-slate-700 dark:text-slate-200 hover:text-[#0A1628] dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Right Actions: Phone + Theme Toggle + Enroll Now Pill */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="tel:+919440468838"
                  className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-slate-200 dark:border-white/20 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 transition-all"
                  aria-label="Call admissions"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B8860B] dark:text-[#FBBF24]" />
                  <span>Call Us</span>
                </a>

                {/* Theme Toggle Button */}
                <ThemeToggle />

                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 text-xs font-black uppercase tracking-wider text-[#0A1628] bg-[#FBBF24] hover:bg-[#F59E0B] rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                >
                  Enroll Now
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
