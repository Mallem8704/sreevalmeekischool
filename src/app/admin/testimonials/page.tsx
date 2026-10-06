'use client';

import { useState } from 'react';
import { useAdminStore } from '@/lib/store';
import { Plus, Trash2, ShieldCheck } from 'lucide-react';

export default function AdminTestimonials() {
  const { testimonials, addTestimonial, removeTestimonial } = useAdminStore();
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    role: 'Parent', // Parent, Student, Alumni
    content: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTestimonial({
      id: Date.now().toString(),
      ...formData,
      testimonial: formData.content,
      class: formData.role,
    });
    setIsAdding(false);
    setFormData({ name: '', role: 'Parent', content: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Testimonials</h1>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-900 hover:bg-slate-800"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Testimonial
          </button>
        )}
      </div>

      {isAdding && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">New Testimonial</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Author Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Role/Class</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Parent of Class X student"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Testimonial Content</label>
              <textarea
                required
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800"
              >
                Save Testimonial
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {testimonials.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative group">
            <div className="mb-4">
              <p className="text-gray-600 italic">"{item.content || item.testimonial}"</p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role || item.class}</p>
              </div>
              {/* If it's a demo testimonial, mark it */}
              {(item.id === 't1' || item.id === 't2') && (
                <span className="inline-flex items-center text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  <ShieldCheck className="w-3 h-3 mr-1" /> Demo
                </span>
              )}
            </div>
            
            <button
              onClick={() => removeTestimonial(item.id)}
              className="absolute top-4 right-4 p-1.5 bg-gray-50 text-red-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
      {testimonials.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">No testimonials found.</p>
        </div>
      )}
    </div>
  );
}
