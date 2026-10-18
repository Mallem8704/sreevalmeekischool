'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCcw, Home } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <main 
      id="main-content" 
      className="min-h-screen flex flex-col bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white transition-colors duration-200"
    >
      <Header />

      <section className="flex-grow flex flex-col items-center justify-center text-center px-4 py-36">
        <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black uppercase tracking-wider mb-4 border border-[#D4A853]/30">
          Temporary Loading Notice
        </span>
        <h1 className="text-3xl sm:text-5xl font-black font-[family-name:var(--font-heading)] mb-4 text-[#0A1628] dark:text-white">
          Something Went Unexpectedly
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
          The requested school page encountered a temporary glitch. Please try refreshing or return to the homepage.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-[#D4A853] hover:bg-[#B8860B] text-[#0A1628] font-bold py-3.5 px-8 rounded-full shadow-lg transition-all text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-slate-300 dark:border-white/20 text-[#0A1628] dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 font-bold py-3.5 px-8 rounded-full transition-all text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
