'use client';

import { useState } from 'react';
import { useAdminStore } from '@/lib/store';
import { Plus, Trash2, Edit2 } from 'lucide-react';

export default function AdminAnnouncements() {
  const { announcements, addAnnouncement, deleteAnnouncement, updateAnnouncement } = useAdminStore();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'admission' as any,
    active: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateAnnouncement(editingId, { ...formData, date: new Date().toISOString() });
      setEditingId(null);
    } else {
      addAnnouncement({
        id: Date.now().toString(),
        ...formData,
        date: new Date().toISOString(),
      });
      setIsAdding(false);
    }
    setFormData({ title: '', content: '', type: 'admission', active: true });
  };

  const handleEdit = (announcement: any) => {
    setFormData({
      title: announcement.title,
      content: announcement.content,
      type: announcement.type,
      active: announcement.active ?? announcement.isActive ?? true,
    });
    setEditingId(announcement.id);
    setIsAdding(true);
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'admission': return 'bg-amber-100 text-amber-800';
      case 'event': return 'bg-blue-100 text-blue-800';
      case 'holiday': return 'bg-emerald-100 text-emerald-800';
      case 'exam': return 'bg-purple-100 text-purple-800';
      case 'result': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Announcements</h1>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-900 hover:bg-slate-800"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Announcement
          </button>
        )}
      </div>

      {isAdding && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">{editingId ? 'Edit Announcement' : 'New Announcement'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <textarea
                required
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Type</label>
                <select
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value as any})}
                >
                  <option value="admission">Admission</option>
                  <option value="event">Event</option>
                  <option value="holiday">Holiday</option>
                  <option value="exam">Exam</option>
                  <option value="result">Result</option>
                </select>
              </div>
              <div className="flex items-center mt-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-slate-600 focus:ring-slate-500 border-gray-300 rounded"
                    checked={formData.active}
                    onChange={(e) => setFormData({...formData, active: e.target.checked})}
                  />
                  <span className="ml-2 text-sm text-gray-900">Active (Visible on site)</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={() => {
                  setIsAdding(false);
                  setEditingId(null);
                  setFormData({ title: '', content: '', type: 'admission', active: true });
                }}
                className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800"
              >
                {editingId ? 'Update' : 'Save'} Announcement
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {announcements.map((announcement) => (
            <li key={announcement.id}>
              <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 flex items-center justify-between">
                <div className="flex-1 pr-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-900 truncate">{announcement.title}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeColor(announcement.type)}`}>
                        {announcement.type}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {announcement.content}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>
                        {new Date(announcement.date).toLocaleDateString()}
                        {!announcement.active && <span className="ml-2 text-red-500 font-medium">(Inactive)</span>}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4 flex-shrink-0">
                  <button onClick={() => handleEdit(announcement)} className="p-2 text-gray-400 hover:text-slate-600">
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button onClick={() => deleteAnnouncement(announcement.id)} className="p-2 text-gray-400 hover:text-red-600">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </li>
          ))}
          {announcements.length === 0 && (
            <li className="px-6 py-8 text-center text-gray-500">
              No announcements available. Click "Add Announcement" to create one.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
