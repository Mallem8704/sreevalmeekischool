'use client';

import { useState } from 'react';
import { useAdminStore } from '@/lib/store';
import { Plus, Trash2, Calendar, Sparkles } from 'lucide-react';

export default function AdminTimelinePage() {
  const { milestones, addMilestone, deleteMilestone } = useAdminStore();
  const [newYear, setNewYear] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newCaption, setNewCaption] = useState('');
  const [newBadge, setNewBadge] = useState('');
  const [newImage, setNewImage] = useState('/images/school/school-event-1.jpg');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newYear || !newTitle || !newCaption) return;

    addMilestone({
      id: Date.now().toString(),
      year: newYear,
      title: newTitle,
      caption: newCaption,
      badge: newBadge || 'Milestone',
      image: newImage,
    });

    setNewYear('');
    setNewTitle('');
    setNewCaption('');
    setNewBadge('');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">School Growth Journey CMS</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage milestones for the 1999 → 2026 timeline displayed on the homepage.
        </p>
      </div>

      {/* Add Milestone Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5 text-amber-500" />
          <span>Add New Journey Milestone</span>
        </h2>

        <form onSubmit={handleAdd} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              Year *
            </label>
            <input
              type="text"
              required
              value={newYear}
              onChange={(e) => setNewYear(e.target.value)}
              placeholder="e.g. 2008"
              className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              Badge / Tag
            </label>
            <input
              type="text"
              value={newBadge}
              onChange={(e) => setNewBadge(e.target.value)}
              placeholder="e.g. New Campus Wing"
              className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              Milestone Title *
            </label>
            <input
              type="text"
              required
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="e.g. SCIENCE LABORATORY INAUGURATION"
              className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              One-Line Story / Caption *
            </label>
            <input
              type="text"
              required
              value={newCaption}
              onChange={(e) => setNewCaption(e.target.value)}
              placeholder="e.g. Modern physics and chemistry labs opened for experiential learning."
              className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
              Image Path / URL
            </label>
            <input
              type="text"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              placeholder="/images/school/school-event-9.jpg"
              className="w-full px-3 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
            >
              Add Milestone to Timeline
            </button>
          </div>
        </form>
      </div>

      {/* Existing Milestones List */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Current Milestones ({milestones.length})
        </h2>

        <div className="space-y-4">
          {milestones.map((m) => (
            <div
              key={m.id}
              className="p-4 rounded-xl border border-gray-100 flex items-center justify-between gap-4 bg-gray-50/50"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold font-mono text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                  {m.year}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{m.title}</h4>
                  <p className="text-xs text-gray-600 line-clamp-1">{m.caption}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => deleteMilestone(m.id)}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                aria-label="Delete milestone"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
