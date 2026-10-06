'use client';

import { useState } from 'react';
import { useAdminStore } from '@/lib/store';
import { Trash2, Upload, Star } from 'lucide-react';
import Image from 'next/image';

export default function AdminGallery() {
  const { gallery, addGalleryImage, deleteGalleryImage, toggleGalleryFeatured } = useAdminStore();
  const [category, setCategory] = useState('Campus');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      Array.from(e.target.files).forEach((file) => {
         const url = URL.createObjectURL(file);
         addGalleryImage({
           id: Date.now().toString() + Math.random().toString(),
           url: url,
           category: category,
           caption: '',
           featured: false
         });
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Gallery Management</h1>
      </div>

      {/* Upload Area */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="w-full sm:w-1/3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Image Category</label>
            <select
              className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Campus">Campus</option>
              <option value="Events">Events</option>
              <option value="Sports">Sports</option>
              <option value="Academics">Academics</option>
            </select>
          </div>
          
          <div className="w-full sm:w-2/3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Images</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-slate-500 transition-colors">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600 justify-center">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-slate-600 hover:text-slate-500 focus-within:outline-none"
                  >
                    <span>Upload files</span>
                    <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" onChange={handleFileUpload} accept="image/*" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((item) => (
          <div key={item.id} className="relative group rounded-lg overflow-hidden bg-gray-100 aspect-[4/3] shadow-sm">
            {/* We use standard img for object URLs since Next Image might complain about unconfigured blob domains */}
            <img 
              src={item.url} 
              alt="Gallery item"
              className="object-cover w-full h-full"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100">
              <div className="flex justify-between items-start">
                <span className="bg-white/90 text-xs px-2 py-1 rounded font-medium text-gray-800">
                  {item.category}
                </span>
                <button
                  onClick={() => deleteGalleryImage(item.id)}
                  className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600"
                  title="Delete image"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              
              <button
                onClick={() => toggleGalleryFeatured(item.id)}
                className={`flex items-center justify-center gap-1 w-full py-1.5 text-xs font-medium rounded ${
                  item.featured ? 'bg-amber-500 text-white' : 'bg-white/90 text-gray-800 hover:bg-white'
                }`}
              >
                <Star className={`h-3 w-3 ${item.featured ? 'fill-current' : ''}`} />
                {item.featured ? 'Featured' : 'Make Featured'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {gallery.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-500">No images in gallery yet.</p>
        </div>
      )}
    </div>
  );
}
