'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Megaphone,
  CalendarDays,
  Trophy,
  Image as ImageIcon,
  MessageSquareQuote,
  Settings,
  Menu,
  X,
  LogOut,
} from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Enquiries', href: '/admin/enquiries', icon: Users },
  { name: 'Growth Timeline', href: '/admin/timeline', icon: CalendarDays },
  { name: 'Announcements', href: '/admin/announcements', icon: Megaphone },
  { name: 'Events', href: '/admin/events', icon: CalendarDays },
  { name: 'Achievements', href: '/admin/achievements', icon: Trophy },
  { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
  { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquareQuote },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-[#050D1A] font-sans text-gray-900 dark:text-white transition-colors duration-200">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600/75 dark:bg-black/80 transition-opacity lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-slate-900 dark:bg-[#0A1628] border-r border-slate-800 dark:border-white/10 text-white transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 lg:justify-center border-b border-slate-800 dark:border-white/10">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-wider text-white">Admin Panel</span>
          </Link>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-6 w-6 text-gray-300" />
          </button>
        </div>

        <nav className="mt-6 space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-800 dark:bg-white/10 text-amber-400 font-semibold'
                    : 'text-gray-300 hover:bg-slate-800/60 dark:hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 ${
                    isActive ? 'text-amber-400' : 'text-gray-400 group-hover:text-gray-200'
                  }`}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800 dark:border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium rounded-xl hover:bg-slate-800 dark:hover:bg-white/5 transition-colors"
          >
            <LogOut className="h-5 w-5 text-gray-400" />
            Back to Website
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A1628] px-4 sm:px-6 lg:px-8 transition-colors duration-200">
          <button
            className="text-gray-500 dark:text-gray-400 focus:outline-none lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex flex-1 justify-end items-center gap-3">
            <ThemeToggle />
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-[#050D1A] p-4 sm:p-6 lg:p-8 transition-colors duration-200">
          {children}
        </main>
      </div>
    </div>
  );
}
