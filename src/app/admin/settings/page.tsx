'use client';

import { useState } from 'react';
import { useAdminStore } from '@/lib/store';
import { Save } from 'lucide-react';

export default function AdminSettings() {
  const { 
    heroContent, updateHeroContent,
    contactInfo, updateContactInfo,
    socialLinks, updateSocialLinks
  } = useAdminStore();
  
  const [heroForm, setHeroForm] = useState(heroContent);
  const [contactForm, setContactForm] = useState(contactInfo);
  const [socialForm, setSocialForm] = useState(socialLinks);
  const [saveMessage, setSaveMessage] = useState('');

  const handleSaveHero = () => {
    updateHeroContent(heroForm);
    setSaveMessage('Hero Content updated successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleSaveContact = () => {
    updateContactInfo(contactForm);
    setSaveMessage('Contact Info updated successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleSaveSocial = () => {
    updateSocialLinks(socialForm);
    setSaveMessage('Social Links updated successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleHeroChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setHeroForm({
      ...heroForm,
      [field]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setContactForm({
      ...contactForm,
      [field]: e.target.value
    });
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setSocialForm({
      ...socialForm,
      [field]: e.target.value
    });
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Website Settings</h1>
        {saveMessage && (
          <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            {saveMessage}
          </span>
        )}
      </div>

      {/* Contact Information */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={contactForm.phone}
                onChange={(e) => handleContactChange(e, 'phone')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={contactForm.email}
                onChange={(e) => handleContactChange(e, 'email')}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Physical Address</label>
              <textarea
                rows={2}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={contactForm.address}
                onChange={(e) => handleContactChange(e, 'address')}
              />
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              onClick={handleSaveContact}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-900 hover:bg-slate-800"
            >
              <Save className="h-4 w-4 mr-2" /> Save Contact Info
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section Content */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Homepage Hero Content</h3>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Top Badge Text</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={heroForm.badge}
                onChange={(e) => handleHeroChange(e, 'badge')}
              />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Headline Line 1</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  value={heroForm.headline1}
                  onChange={(e) => handleHeroChange(e, 'headline1')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Headline Line 2</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                  value={heroForm.headline2}
                  onChange={(e) => handleHeroChange(e, 'headline2')}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={heroForm.description}
                onChange={(e) => handleHeroChange(e, 'description')}
              />
            </div>
            <div className="flex items-center">
              <input
                id="admissionBanner"
                type="checkbox"
                className="h-4 w-4 text-slate-900 focus:ring-slate-500 border-gray-300 rounded"
                checked={heroForm.admissionBanner}
                onChange={(e) => handleHeroChange(e, 'admissionBanner')}
              />
              <label htmlFor="admissionBanner" className="ml-2 block text-sm text-gray-900">
                Show Admission Banner/Alert on Homepage
              </label>
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              onClick={handleSaveHero}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-900 hover:bg-slate-800"
            >
              <Save className="h-4 w-4 mr-2" /> Save Hero Content
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Social Media Links</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">Facebook URL</label>
              <input
                type="url"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={socialForm.facebook}
                onChange={(e) => handleSocialChange(e, 'facebook')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Instagram URL</label>
              <input
                type="url"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={socialForm.instagram}
                onChange={(e) => handleSocialChange(e, 'instagram')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">YouTube URL</label>
              <input
                type="url"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                value={socialForm.youtube}
                onChange={(e) => handleSocialChange(e, 'youtube')}
              />
            </div>
          </div>
          <div className="mt-5 flex justify-end">
            <button
              onClick={handleSaveSocial}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-slate-900 hover:bg-slate-800"
            >
              <Save className="h-4 w-4 mr-2" /> Save Social Links
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
