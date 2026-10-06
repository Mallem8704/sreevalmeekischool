'use client';

import { useState } from 'react';
import { useAdminStore } from '@/lib/store';
import { Plus, Trash2, Edit2 } from 'lucide-react';

export default function AdminEvents() {
  const { events, addEvent, deleteEvent, updateEvent } = useAdminStore();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    summary: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateEvent(editingId, formData);
      setEditingId(null);
    } else {
      addEvent({
        id: Date.now().toString(),
        image: null,
        ...formData,
      });
      setIsAdding(false);
    }
    setFormData({ title: '', date: '', summary: '' });
  };

  const handleEdit = (event: any) => {
    setFormData({
      title: event.title,
      date: event.date,
      summary: event.summary,
    });
    setEditingId(event.id);
    setIsAdding(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">News & Events</h1>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-900 hover:bg-slate-800"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </button>
        )}
      </div>

      {isAdding && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">{editingId ? 'Edit Event' : 'New Event'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Event Title</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  value={formData.date.split('T')[0]} // formatting for date input if needed
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Summary / Description</label>
              <textarea
                required
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={formData.summary}
                onChange={(e) => setFormData({...formData, summary: e.target.value})}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={() => {
                  setIsAdding(false);
                  setEditingId(null);
                  setFormData({ title: '', date: '', summary: '' });
                }}
                className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800"
              >
                {editingId ? 'Update' : 'Save'} Event
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {events.map((event) => (
            <li key={event.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-lg font-medium text-slate-900">{event.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{event.summary}</p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span className="font-medium">Date:</span> <span className="ml-2">{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 sm:mt-0 flex-shrink-0">
                  <button onClick={() => handleEdit(event)} className="p-2 text-gray-400 hover:text-slate-600 border border-gray-200 rounded">
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button onClick={() => deleteEvent(event.id)} className="p-2 text-red-400 hover:text-red-600 border border-gray-200 rounded">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </li>
          ))}
          {events.length === 0 && (
            <li className="px-6 py-8 text-center text-gray-500">
              No events available.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
