'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '@/components/ui/SocialIcons';
import { replayIntroVideo } from '@/components/ui/CinematicIntro';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-white pt-20 pb-10 border-t-[6px] border-[#D4A853]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-white/10 gap-8">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl p-2 border border-white/15 shrink-0 shadow-lg">
              <Image
                src="/sree-valmeeki-main-logo-transparent.png"
                alt="Sree Valmeeki E.M High School Crest"
                fill
                sizes="80px"
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-wide">
                Sree Valmeeki E.M High School
              </h2>
              <span className="text-[#D4A853] text-xs sm:text-sm md:text-base font-semibold tracking-wider mt-1">
                (Est. 1999 - 27 Years of Excellence)
              </span>
              <span className="text-white/60 text-xs tracking-widest uppercase mt-0.5">
                Education • Discipline • Confidence
              </span>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/sree_valmeekischool_kadiri/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Sree Valmeeki School on Instagram"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#833AB4] hover:border-transparent transition-all duration-300 shadow-lg hover:scale-105"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/Sree-valmeeki-high-school-1574341916174521/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Sree Valmeeki School Facebook page"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300 shadow-lg hover:scale-105"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/@valmeekischoolkadiri7987" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Sree Valmeeki School YouTube channel"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300 shadow-lg hover:scale-105"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* About Column */}
          <div className="space-y-6">
            <h3 className="font-[family-name:var(--font-heading)] text-[#D4A853] text-xl font-bold uppercase tracking-wide">
              About Our School
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed font-[family-name:var(--font-body)]">
              Established in 1999, Sree Valmeeki E.M High School has fostered 27 years of academic distinction, disciplined character building, and holistic child development in Kadiri.
            </p>
            <div className="pt-2">
              <Link 
                href="/about" 
                className="inline-flex items-center text-[#D4A853] hover:text-white transition-colors text-sm font-semibold gap-1"
              >
                <span>Read Full School History</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 lg:pl-6">
            <h3 className="font-[family-name:var(--font-heading)] text-[#D4A853] text-xl font-bold uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'About School', href: '/#about' },
                { name: 'Academic Curriculum', href: '/#academics' },
                { name: 'IIT Foundation Program', href: '/academics/iit-foundation' },
                { name: 'Campus Facilities', href: '/#campus' },
                { name: 'Photo Gallery', href: '/gallery' },
                { name: 'Admissions 2026–27', href: '/admissions' },
                { name: 'Online Enquiry', href: '/#enquiry' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-[#D4A853] hover:pl-1.5 transition-all duration-200 flex items-center"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-50 text-[#D4A853]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Programs & Media */}
          <div className="space-y-6">
            <h3 className="font-[family-name:var(--font-heading)] text-[#D4A853] text-xl font-bold uppercase tracking-wide">
              Media & Highlights
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Valmeeki Premier League (VPL)', href: '/#news-events' },
                { name: 'Science Fair & STEM Expo', href: '/gallery' },
                { name: 'Campus Video Tour', href: '/#campus-tour' },
                { name: 'Student Achievements', href: '/#achievements' },
                { name: 'News & Announcements', href: '/news' },
                { name: 'School Bus Transport Routes', href: '/#transport' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-[#D4A853] hover:pl-1.5 transition-all duration-200 flex items-center"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-50 text-[#D4A853]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-[family-name:var(--font-heading)] text-[#D4A853] text-xl font-bold uppercase tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#D4A853] mr-3 mt-1 shrink-0" />
                <span className="text-gray-300 leading-relaxed font-[family-name:var(--font-body)]">
                  <strong className="text-white block">Sree Valmeeki E.M High School</strong>
                  Kadiri, Sri Sathya Sai District,<br />
                  Andhra Pradesh 515591
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#D4A853] mr-3 shrink-0" />
                <a 
                  href="tel:+919440468838" 
                  className="text-gray-300 hover:text-[#D4A853] transition-colors font-medium"
                >
                  +91 94404 68838
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#D4A853] mr-3 shrink-0" />
                <a 
                  href="mailto:info@sreevalmeekischool.edu.in" 
                  className="text-gray-300 hover:text-[#D4A853] transition-colors break-all"
                >
                  info@sreevalmeekischool.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-[family-name:var(--font-body)] gap-4">
          <p>© {currentYear} Sree Valmeeki E.M High School (Est. 1999). All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-5">
            <button
              type="button"
              onClick={replayIntroVideo}
              className="text-[#D4A853] hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 font-medium"
            >
              <Play className="w-3.5 h-3.5 fill-[#D4A853]" /> Replay Intro Video
            </button>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact & Directions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

