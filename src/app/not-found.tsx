import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import Link from 'next/link';
import { Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white selection:bg-[#FBBF24] selection:text-[#0A1628] transition-colors duration-200">
      <Header />
      
      <section className="flex-grow flex flex-col items-center justify-center text-center px-4 py-36">
        <h1 className="text-8xl sm:text-9xl font-black font-[family-name:var(--font-heading)] mb-2 bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#FBBF24] bg-clip-text text-transparent drop-shadow-sm">
          404
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4 text-[#0A1628] dark:text-white">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
          The campus page or resource you are looking for doesn&apos;t exist or may have been updated.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-[#1E3A8A] dark:bg-[#FBBF24] dark:hover:bg-[#F59E0B] text-white dark:text-[#0A1628] font-bold py-3.5 px-8 rounded-full shadow-lg transition-all text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Campus Home</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-slate-300 dark:border-white/20 text-[#0A1628] dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 font-bold py-3.5 px-8 rounded-full transition-all text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>Campus Helpdesk</span>
          </Link>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
