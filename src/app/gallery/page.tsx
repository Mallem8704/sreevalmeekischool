import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import FloatingButtons from '@/components/layout/FloatingButtons';
import Gallery from '@/components/sections/Gallery';
import Link from 'next/link';
import { Camera, ChevronRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';

export const metadata: Metadata = {
  title: 'Photo Gallery & Events | Sree Valmeeki E.M High School, Kadiri',
  description: 'Explore authentic photos of Science Fairs, Annual Day dances, Valmeeki Premier League sports, and campus life at Sree Valmeeki School.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF7] font-[family-name:var(--font-body)]">
      <ScrollProgress />
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-36 pb-20 bg-[#0A1628] text-white overflow-hidden border-b-[4px] border-[#D4A853]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#122244] to-[#0A1628] opacity-90" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4A853]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 mb-4 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
            <Link href="/" className="hover:text-[#D4A853] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#D4A853]" />
            <span className="text-[#D4A853]">Campus Gallery</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Campus Life & Photo Gallery
          </h1>
          
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-[family-name:var(--font-body)] leading-relaxed">
            Authentic memories capturing 27 years of student achievements, annual day spectacles, science exhibitions, and athletic tournaments in Kadiri.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/sree_valmeekischool_kadiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
            >
              <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
              <span>Follow @sree_valmeekischool_kadiri</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Interactive Gallery Section */}
      <div className="flex-grow">
        <Gallery />
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  );
}

