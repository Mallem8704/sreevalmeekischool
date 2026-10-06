'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Menu, ArrowRight, X, MapPin } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import { navLinks } from '@/lib/data';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-2'
            : 'bg-[#0A1628]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-2.5'
        }`}
      >
        {/* Top Info / Announcement Bar (collapses on scroll or dismissal) */}
        {showAnnouncement && (
          <div
            className={`w-full transition-all duration-300 ${
              isScrolled
                ? 'hidden'
                : 'border-b border-white/10 pb-2 mb-2 text-xs text-white/90'
            }`}
          >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4A853]/25 border border-[#D4A853]/50 text-[#D4A853] font-bold text-[11px] tracking-wider uppercase">
                  Admissions 2026–27
                </span>
                <span className="hidden sm:inline text-white/80">
                  Admissions Open for Nursery to Class 10 (27 Years of Excellence)
                </span>
                <a
                  href={pathname === '/' ? '#enquiry' : '/#enquiry'}
                  className="hidden md:inline-flex items-center gap-1 text-[#D4A853] hover:text-white font-semibold transition-colors underline-offset-4 hover:underline"
                >
                  Enquire Online <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <a
                  href="https://www.instagram.com/sree_valmeekischool_kadiri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:inline-flex items-center gap-1.5 text-white/80 hover:text-[#E1306C] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
                  <span>@sree_valmeekischool_kadiri</span>
                </a>
                <a
                  href="tel:+919440468838"
                  className="hidden sm:inline-flex items-center gap-1.5 text-white/80 hover:text-[#D4A853] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#D4A853]" />
                  <span>+91 94404 68838</span>
                </a>
                <span className="hidden xl:inline-flex items-center gap-1 text-white/60">
                  <MapPin className="w-3 h-3 text-[#D4A853]" />
                  Kadiri, AP
                </span>
                <button
                  onClick={() => setShowAnnouncement(false)}
                  className="text-white/60 hover:text-white p-1 rounded-full transition-colors cursor-pointer"
                  aria-label="Dismiss notice"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Navbar */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Main Official Logo (Header Brand) */}
            <Link href="/" className="flex items-center group shrink-0">
              <div
                className={`relative h-10 sm:h-11 md:h-13 w-44 sm:w-56 md:w-68 transition-all duration-300 rounded-xl flex items-center ${
                  isScrolled
                    ? 'p-0.5'
                    : 'bg-white px-2.5 sm:px-3 py-1 shadow-md border border-white/80 ring-1 ring-[#D4A853]/30'
                }`}
              >
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

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => {
                const targetHref = getHref(link.href);
                return (
                  <Link
                    key={link.name}
                    href={targetHref}
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 group ${
                      isScrolled
                        ? 'text-[#1A1A2E] hover:text-[#B8860B]'
                        : 'text-white/90 hover:text-[#D4A853]'
                    }`}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4A853] transition-all duration-300 ease-out group-hover:w-full" />
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3.5">
              <a
                href="tel:+919440468838"
                className={`hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  isScrolled
                    ? 'border-[#0A1628]/20 text-[#0A1628] hover:bg-[#0A1628]/5'
                    : 'border-white/20 text-white hover:bg-white/10'
                }`}
                aria-label="Call admissions"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4A853]" />
                <span>Call Us</span>
              </a>

              <a
                href={pathname === '/' ? '#enquiry' : '/#enquiry'}
                className="inline-flex items-center justify-center px-3 sm:px-5 py-1.5 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0A1628] bg-gradient-to-r from-[#D4A853] via-[#E8C97D] to-[#B8860B] rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                Enquire
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden p-1.5 sm:p-2 rounded-lg transition-colors cursor-pointer ${
                  isScrolled
                    ? 'text-[#0A1628] hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 sm:w-6 h-5 sm:h-6" />
              </button>
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
