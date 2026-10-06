'use client';

import { useState } from 'react';
import { useAdminStore } from '@/lib/store';
import { Search, ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react';

const STATUSES = ['All', 'New', 'Contacted', 'Campus Visit', 'Follow Up', 'Admitted', 'Closed'];

export default function AdminEnquiries() {
  const { enquiries, updateEnquiryStatus, updateEnquiryNotes } = useAdminStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [noteInputs, setNoteInputs] = useState<Record<string, string>>({});

  const filteredEnquiries = enquiries.filter(enquiry => {
    const matchesSearch = 
      enquiry.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'All' || enquiry.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id: string, newStatus: any) => {
    updateEnquiryStatus(id, newStatus);
  };

  const handleNotesSave = (id: string) => {
    if (noteInputs[id] !== undefined) {
      updateEnquiryNotes(id, noteInputs[id]);
      setExpandedRow(null); // Optional: close after saving
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Contacted': return 'bg-amber-100 text-amber-800';
      case 'Campus Visit': return 'bg-purple-100 text-purple-800';
      case 'Follow Up': return 'bg-orange-100 text-orange-800';
      case 'Admitted': return 'bg-emerald-100 text-emerald-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Admission Enquiries</h1>
        
        <div className="relative w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search name or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Status Filters */}
      <div className="flex flex-wrap gap-2">
        {STATUSES.map(status => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              statusFilter === status
                ? 'bg-slate-900 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent/Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEnquiries.map((enquiry) => (
                <React.Fragment key={enquiry.id}>
                  <tr className="hover:bg-gray-50 cursor-pointer" onClick={() => setExpandedRow(expandedRow === enquiry.id ? null : enquiry.id)}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(enquiry.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{enquiry.parentName}</div>
                      <div className="text-sm text-gray-500">{enquiry.studentName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{enquiry.phone}</div>
                      <div className="text-sm text-gray-500">{enquiry.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {enquiry.classSeeking}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                      <select
                        value={enquiry.status}
                        onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                        className={`text-xs font-medium rounded-full px-2.5 py-1 border-0 ${getStatusColor(enquiry.status)}`}
                      >
                        {STATUSES.filter(s => s !== 'All').map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {expandedRow === enquiry.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-400 inline" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 inline" />
                      )}
                    </td>
                  </tr>
                  
                  {/* Expanded Detail Row */}
                  {expandedRow === enquiry.id && (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 bg-gray-50">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-1 space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-1">Message</h4>
                              <p className="text-sm text-gray-600 bg-white p-3 border rounded-md">{enquiry.message || 'No message provided.'}</p>
                            </div>
                            <div className="flex gap-3">
                              <a 
                                href={`tel:${enquiry.phone}`}
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                              >
                                <Phone className="h-4 w-4 mr-2" />
                                Call Parent
                              </a>
                              <a 
                                href={`https://wa.me/${enquiry.phone.replace(/\D/g,'')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                              >
                                <MessageCircle className="h-4 w-4 mr-2" />
                                WhatsApp
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex-1 space-y-2">
                            <h4 className="text-sm font-medium text-gray-900">Admin Notes</h4>
                            <textarea
                              className="w-full h-24 p-3 border rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Add follow-up notes here..."
                              value={noteInputs[enquiry.id] !== undefined ? noteInputs[enquiry.id] : (enquiry.notes || '')}
                              onChange={(e) => setNoteInputs({...noteInputs, [enquiry.id]: e.target.value})}
                            />
                            <button
                              onClick={() => handleNotesSave(enquiry.id)}
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800"
                            >
                              Save Notes
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
              {filteredEnquiries.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                    No enquiries found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
