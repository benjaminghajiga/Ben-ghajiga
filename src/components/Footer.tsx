import React from 'react';
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Globe,
  Sparkles,
  Heart,
} from 'lucide-react';
import { ProfileData } from '../types';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Articles', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-500 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow-xs">
              BG
            </div>
            <div>
              <span className="font-bold text-slate-900 text-sm tracking-tight block">
                {profile.name}
              </span>
              <span className="text-[11px] text-slate-500">
                {profile.roleTitle}
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-indigo-600 border border-slate-200 transition-colors shadow-2xs"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-indigo-600 border border-slate-200 transition-colors shadow-2xs"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-indigo-600 border border-slate-200 transition-colors shadow-2xs"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-indigo-600 border border-slate-200 transition-colors shadow-2xs ml-2"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-medium">
            Built with React 19, TypeScript & Tailwind CSS &bull; High-Throughput Web Performance
          </p>
        </div>
      </div>
    </footer>
  );
};
