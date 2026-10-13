'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronRight, Play } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, WhatsAppIcon } from '@/components/ui/SocialIcons';
import { replayIntroVideo } from '@/components/ui/CinematicIntro';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03101E] text-white pt-16 pb-8 border-t-[4px] border-[#D8A53C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Block matching reference */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10 border-b border-white/10 gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-2xl p-1.5 border border-white/15 shrink-0 shadow-lg flex items-center justify-center">
              <Image
                src="/images/logo/valmeeki_emblem_v3.png"
                alt="Sree Valmeeki Crest"
                fill
                sizes="64px"
                className="object-contain rounded-xl p-1"
                unoptimized
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] font-black text-lg sm:text-xl md:text-2xl text-white tracking-wide">
                SREE VALMEEKI ENGLISH MEDIUM HIGH SCHOOL
              </h2>
              <p className="text-white/60 text-xs tracking-wider mt-0.5">
                Kadiri, Sri Sathya Sai District, Andhra Pradesh • Estd. 1999
              </p>
              <p className="text-[#D8A53C] text-[11px] font-bold tracking-widest uppercase mt-0.5">
                Discipline • Knowledge • Character • Service
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/Sree-valmeeki-high-school-1574341916174521/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/sree_valmeekischool_kadiri/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-pink-600 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@valmeekischoolkadiri7987"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-red-600 transition-all"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/919440468838"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white hover:bg-[#25D366] transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4 Columns Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10 py-12 text-left">
          {/* Col 1: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#D8A53C]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '/#home' },
                { name: 'About Us', href: '/about' },
                { name: 'Academics', href: '/academics' },
                { name: 'Results & Toppers', href: '/achievements' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-[#D8A53C] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Institutional Wings */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#D8A53C]">
              Campus &amp; Wings
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Campus Facilities', href: '/campus' },
                { name: 'Photo Gallery', href: '/gallery' },
                { name: 'Admissions 2026–27', href: '/admissions' },
                { name: 'Contact & Directions', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/70 hover:text-[#D8A53C] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#D8A53C]">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D8A53C] shrink-0" />
                <a href="tel:+919440468838" className="hover:text-white transition-colors">
                  +91 94404 68838
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D8A53C] shrink-0 mt-0.5" />
                <span>Kadiri, Sri Sathya Sai District, Andhra Pradesh - 515591</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D8A53C] shrink-0" />
                <a href="mailto:sreevalmeekischool@gmail.com" className="hover:text-white transition-colors">
                  sreevalmeekischool@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Decorative Vision Script (Matching Reference Mockup) */}
          <div className="flex flex-col justify-between space-y-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
              <span className="block text-[10px] font-black uppercase tracking-wider text-[#D8A53C]">
                Institutional Vision
              </span>
              <p className="mt-2 font-serif italic text-sm text-[#F0C66A] leading-relaxed">
                “Nurturing Today for a Brighter Tomorrow”
              </p>
            </div>

            <button
              type="button"
              onClick={replayIntroVideo}
              className="text-left text-xs text-white/60 hover:text-[#D8A53C] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current text-[#D8A53C]" />
              <span>Replay Intro Experience</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {currentYear} Sree Valmeeki English Medium High School, Kadiri. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span>•</span>
            <Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
