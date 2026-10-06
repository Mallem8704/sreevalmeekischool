'use client';

import { useAdminStore } from '@/lib/store';
import { Users, Megaphone, CalendarDays, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const { enquiries, announcements, events, gallery } = useAdminStore();

  const totalEnquiries = enquiries.length;
  const newEnquiries = enquiries.filter(e => e.status === 'New').length;

  const stats = [
    { name: 'Total Enquiries', stat: totalEnquiries, icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'New Enquiries', stat: newEnquiries, icon: Users, color: 'text-amber-600', bg: 'bg-amber-100' },
    { name: 'Announcements', stat: announcements.length, icon: Megaphone, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { name: 'Events', stat: events.length, icon: CalendarDays, color: 'text-purple-600', bg: 'bg-purple-100' },
    { name: 'Gallery Items', stat: gallery.length, icon: ImageIcon, color: 'text-pink-600', bg: 'bg-pink-100' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg bg-white p-5 shadow">
            <div className="flex items-center">
              <div className={`flex-shrink-0 rounded-md p-3 ${item.bg}`}>
                <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                  <dd className="text-2xl font-semibold text-gray-900">{item.stat}</dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Enquiries */}
        <div className="rounded-lg bg-white shadow">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-medium text-gray-900">Recent Enquiries</h2>
            <Link href="/admin/enquiries" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all
            </Link>
          </div>
          <ul className="divide-y divide-gray-200">
            {enquiries.slice(0, 5).map((enquiry) => (
              <li key={enquiry.id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{enquiry.parentName} ({enquiry.studentName})</p>
                    <p className="text-sm text-gray-500">Class: {enquiry.classSeeking} | {enquiry.phone}</p>
                  </div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    enquiry.status === 'New' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {enquiry.status}
                  </span>
                </div>
              </li>
            ))}
            {enquiries.length === 0 && (
              <li className="px-6 py-4 text-sm text-gray-500">No recent enquiries.</li>
            )}
          </ul>
        </div>

        {/* Recent Announcements */}
        <div className="rounded-lg bg-white shadow">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-medium text-gray-900">Recent Announcements</h2>
            <Link href="/admin/announcements" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all
            </Link>
          </div>
          <ul className="divide-y divide-gray-200">
            {announcements.slice(0, 5).map((announcement) => (
              <li key={announcement.id} className="px-6 py-4">
                <p className="text-sm font-medium text-gray-900">{announcement.title}</p>
                <p className="text-sm text-gray-500">{new Date(announcement.date).toLocaleDateString()}</p>
              </li>
            ))}
            {announcements.length === 0 && (
              <li className="px-6 py-4 text-sm text-gray-500">No announcements yet.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
