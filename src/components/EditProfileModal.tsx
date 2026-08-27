import React, { useState } from 'react';
import {
  X,
  Save,
  RotateCcw,
  Sliders,
  Sparkles,
  User,
  Mail,
  MapPin,
  Briefcase,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { ProfileData } from '../types';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSaveProfile: (updated: ProfileData) => void;
  onResetDefaults: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetDefaults,
}) => {
  const [formData, setFormData] = useState<ProfileData>({ ...profile });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    onClose();
  };

  return (
    <div
      id="edit-profile-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="edit-profile-modal-dialog"
        className="w-full max-w-2xl rounded-2xl bg-white border border-slate-100 shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-bold text-slate-900">
              Customize Portfolio Profile
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 shadow-2xs"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[70vh] overflow-y-auto text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-medium text-slate-700 block">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 shadow-2xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-medium text-slate-700 block">Role Title</label>
              <input
                type="text"
                value={formData.roleTitle}
                onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 shadow-2xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-medium text-slate-700 block">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 shadow-2xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-medium text-slate-700 block">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 shadow-2xs"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-medium text-slate-700 block">Short Hero Bio</label>
            <textarea
              rows={3}
              value={formData.shortBio}
              onChange={(e) => setFormData({ ...formData, shortBio: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 resize-none leading-relaxed shadow-2xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-medium text-slate-700 block">GitHub URL</label>
              <input
                type="url"
                value={formData.socials.github}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, github: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 shadow-2xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-medium text-slate-700 block">LinkedIn URL</label>
              <input
                type="url"
                value={formData.socials.linkedin}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socials: { ...formData.socials, linkedin: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 shadow-2xs"
              />
            </div>
          </div>

          {/* Footer actions */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                onResetDefaults();
                onClose();
              }}
              className="px-3.5 py-2 rounded-full text-xs text-rose-600 hover:bg-rose-50 font-medium transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
