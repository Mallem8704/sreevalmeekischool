'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  ExternalLink, 
  Tv, 
  Sparkles, 
  Clock, 
  Calendar, 
  Share2, 
  CheckCircle2, 
  Flame,
  Volume2
} from 'lucide-react';
import { YoutubeIcon } from '@/components/ui/SocialIcons';

export interface SchoolVideoItem {
  id: string;
  youtubeId: string;
  title: string;
  teluguTitle?: string;
  category: string;
  duration: string;
  date: string;
  description: string;
  thumbnail: string;
  featured?: boolean;
}

const OFFICIAL_CHANNEL_URL = 'https://www.youtube.com/@Dhanunjay-t5v';
const OFFICIAL_CHANNEL_HANDLE = '@Dhanunjay-t5v';

const SCHOOL_VIDEOS: SchoolVideoItem[] = [
  {
    id: 'vid-1',
    youtubeId: 'wrywWVYWydc',
    title: 'Telugu Bhasha Dinotsavam — Cultural Performance Part 7',
    teluguTitle: 'తెలుగు భాషా దినోత్సవం 2026 పాట 7',
    category: 'Cultural Heritage',
    duration: '5:19',
    date: 'Recent Celebration',
    description: 'Students celebrate Telugu Language Day with traditional music, poetic recitations, and energetic stage choreography at Sree Valmeeki School.',
    thumbnail: 'https://i.ytimg.com/vi/wrywWVYWydc/hqdefault.jpg',
    featured: true,
  },
  {
    id: 'vid-2',
    youtubeId: 'Jtc3GLSxuvg',
    title: 'Telugu Bhasha Dinotsavam — Student Classical Chorus Part 6',
    teluguTitle: 'తెలుగు భాషా దినోత్సవం 2026 పాట 6',
    category: 'School Assembly',
    duration: '4:45',
    date: 'Celebrations',
    description: 'High school and middle school student ensemble presenting traditional cultural folk songs in honor of Telugu language and cultural pride.',
    thumbnail: 'https://i.ytimg.com/vi/Jtc3GLSxuvg/hqdefault.jpg',
  },
  {
    id: 'vid-3',
    youtubeId: '3CZtg3an6ig',
    title: 'Telugu Bhasha Dinotsavam — Cultural Stage Recital Part 5',
    teluguTitle: 'తెలుగు భాషా దినోత్సవం 2026 పాట 5',
    category: 'Student Talent',
    duration: '4:30',
    date: 'Celebrations',
    description: 'Energetic group performance demonstrating creative expression, stage confidence, and musical talent developed at Sree Valmeeki.',
    thumbnail: 'https://i.ytimg.com/vi/3CZtg3an6ig/hqdefault.jpg',
  },
  {
    id: 'vid-4',
    youtubeId: 'dqtOKEXHP6w',
    title: 'Telugu Language Celebrations — Special Presentation Part 4',
    teluguTitle: 'తెలుగు భాషా దినోత్సవం 2026 పాట 4',
    category: 'Annual Events',
    duration: '4:15',
    date: 'Celebrations',
    description: 'Student choir performance fostering linguistic pride and cultural appreciation among young learners across all primary grades.',
    thumbnail: 'https://i.ytimg.com/vi/dqtOKEXHP6w/hqdefault.jpg',
  },
  {
    id: 'vid-5',
    youtubeId: '1GLfJIe7dnc',
    title: 'Gandhi Jayanti Campus Tribute & Special Assembly',
    teluguTitle: 'గాంధీ జయంతి వేడుకలు — 2 October',
    category: 'National Festivities',
    duration: 'Shorts',
    date: '2 October',
    description: 'Values-based assembly honoring Mahatma Gandhi with patriotic songs, peaceful reflections, and student presentations on character and discipline.',
    thumbnail: 'https://i.ytimg.com/vi/1GLfJIe7dnc/hqdefault.jpg',
  },
];

export default function SchoolMediaYouTube() {
  const [selectedVideo, setSelectedVideo] = useState<SchoolVideoItem>(SCHOOL_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleVideoSelect = (video: SchoolVideoItem) => {
    setSelectedVideo(video);
    setIsPlaying(true);
  };

  return (
    <section 
      id="media" 
      className="relative w-full py-16 sm:py-24 lg:py-28 bg-[#FDFBF7] dark:bg-[#050D1A] text-[#0A1628] dark:text-white border-t border-slate-200 dark:border-white/10 transition-colors duration-200 overflow-hidden"
    >
      {/* Decorative Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4A853]/5 dark:bg-[#D4A853]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/5 dark:bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A853]/15 dark:bg-[#D4A853]/25 border border-[#D4A853]/35 dark:border-[#D4A853]/50 text-[#B8860B] dark:text-[#FBBF24] text-xs font-black tracking-widest uppercase mb-4 shadow-xs">
              <Tv className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
              <span>SCHOOL STORIES IN MOTION • OFFICIAL YOUTUBE MEDIA</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-[family-name:var(--font-heading)] leading-tight tracking-tight uppercase text-[#0A1628] dark:text-white">
              WATCH SREE VALMEEKI <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#D4A853] to-[#8C6D23] dark:from-[#FBBF24] dark:via-[#D4A853] dark:to-[#E8C97D]">
                IN ACTION & CELEBRATION
              </span>
            </h2>

            <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-[family-name:var(--font-body)]">
              Watch authentic classroom moments, cultural performances, annual assemblies, and student talent directly inside our website. Visit the official channel for the full school video archive.
            </p>
          </div>

          {/* Channel Info & Visit Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={OFFICIAL_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Valmeeki School Official YouTube Channel"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0A1628] to-[#152D5E] dark:from-[#D4A853] dark:to-[#B8860B] text-white dark:text-[#0A1628] text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all group cursor-pointer border border-[#D4A853]/30"
            >
              <YoutubeIcon className="w-5 h-5 text-red-500 dark:text-[#0A1628] group-hover:scale-110 transition-transform" />
              <span>Visit Our YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Video Player & Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Featured Player (Column 1-7/8 on desktop) */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0A1628] shadow-2xl border-2 border-slate-200 dark:border-white/10 group">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
                >
                  {/* High Quality Thumbnail Poster */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-95"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                  {/* Pulsing Luxury Gold Play Button */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#D4A853]/30 animate-ping opacity-75" />
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#D4A853] to-[#FBBF24] text-[#0A1628] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                      </div>
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-md">
                      Click to Play Video
                    </span>
                  </div>

                  {/* Category Pill on Video */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#0A1628]/85 backdrop-blur-md text-[#FBBF24] border border-[#D4A853]/40 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      <span>{selectedVideo.category}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-medium flex items-center gap-1 border border-white/10">
                      <Clock className="w-3 h-3 text-[#FBBF24]" />
                      <span>{selectedVideo.duration}</span>
                    </span>
                  </div>

                  {/* Channel Stamp on Video */}
                  <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-semibold border border-white/10">
                    <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                    <span>Valmeeki Official</span>
                  </div>

                  {/* Bottom Video Headline on Poster */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-white text-base sm:text-xl font-bold line-clamp-1 drop-shadow-md">
                      {selectedVideo.title}
                    </h3>
                    {selectedVideo.teluguTitle && (
                      <p className="text-white/80 text-xs sm:text-sm font-medium line-clamp-1 mt-0.5">
                        {selectedVideo.teluguTitle}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Video Details Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0A1628] border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-[#B8860B] dark:text-[#FBBF24] text-[11px] font-black uppercase tracking-wider">
                    {selectedVideo.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Duration: {selectedVideo.duration} • {selectedVideo.date}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-[#0A1628] dark:text-white font-[family-name:var(--font-heading)]">
                  {selectedVideo.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedVideo.description}
                </p>
              </div>

              {/* Direct Open in YouTube */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-[#0A1628] dark:text-white text-xs font-bold transition-colors cursor-pointer border border-slate-200 dark:border-white/15"
                  title="Open video on YouTube"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-600" />
                  <span>Open on YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Supporting Video Playlist (Column 9-12 on desktop) */}
          <div className="lg:col-span-4 flex flex-col space-y-3.5">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-500" />
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Featured Videos Playlist
                </h4>
              </div>
              <span className="text-xs font-bold text-[#B8860B] dark:text-[#FBBF24]">
                {SCHOOL_VIDEOS.length} Videos
              </span>
            </div>

            {/* Video Cards List */}
            <div className="space-y-3">
              {SCHOOL_VIDEOS.map((video) => {
                const isCurrent = video.id === selectedVideo.id;

                return (
                  <button
                    key={video.id}
                    onClick={() => handleVideoSelect(video)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 group cursor-pointer ${
                      isCurrent
                        ? 'bg-amber-50/80 dark:bg-[#D4A853]/15 border-[#D4A853] shadow-md ring-1 ring-[#D4A853]/40'
                        : 'bg-white dark:bg-[#0A1628] border-slate-200 dark:border-white/10 hover:border-[#D4A853]/60 hover:shadow-md'
                    }`}
                  >
                    {/* Compact 16:9 Thumbnail */}
                    <div className="relative w-28 sm:w-32 aspect-video rounded-xl overflow-hidden shrink-0 bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                      {/* Duration badge */}
                      <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-bold text-white">
                        {video.duration}
                      </span>

                      {/* Playing state indicator */}
                      {isCurrent && (
                        <div className="absolute inset-0 bg-[#0A1628]/60 flex items-center justify-center">
                          <div className="w-7 h-7 rounded-full bg-[#D4A853] text-[#0A1628] flex items-center justify-center shadow-md">
                            <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Metadata */}
                    <div className="flex-1 min-w-0 pr-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#B8860B] dark:text-[#FBBF24]">
                          {video.category}
                        </span>
                        {isCurrent && (
                          <span className="px-1.5 py-0.2 rounded-full bg-[#D4A853] text-[#0A1628] text-[9px] font-black uppercase">
                            Now Selected
                          </span>
                        )}
                      </div>
                      <h5 className={`text-xs sm:text-sm font-bold line-clamp-2 leading-snug transition-colors ${
                        isCurrent 
                          ? 'text-[#0A1628] dark:text-white font-black' 
                          : 'text-slate-800 dark:text-slate-200 group-hover:text-[#B8860B] dark:group-hover:text-[#FBBF24]'
                      }`}>
                        {video.title}
                      </h5>
                      {video.teluguTitle && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                          {video.teluguTitle}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Channel Banner Link */}
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-[#0A1628] to-[#152D5E] text-white border border-white/10 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <YoutubeIcon className="w-6 h-6 text-red-500" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h5 className="text-xs font-black uppercase tracking-wider text-[#FBBF24]">
                      Valmeeki School Media
                    </h5>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Subscribe to {OFFICIAL_CHANNEL_HANDLE} for student speeches, dance choreography, annual day highlights, and science exhibitions.
                  </p>
                </div>
              </div>

              <a
                href={OFFICIAL_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full py-2.5 px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer border border-white/20"
              >
                <span>Subscribe on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
