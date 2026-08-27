import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  FileText,
  Send,
  Sliders,
  ExternalLink,
  Code2,
  Sparkles,
} from 'lucide-react';
import { ProfileData } from '../types';

interface NavbarProps {
  profile: ProfileData;
  activeSection: string;
  onOpenResume: () => void;
  onOpenEditProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeSection,
  onOpenResume,
  onOpenEditProfile,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Articles', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          id="brand-logo"
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-sm group-hover:bg-indigo-700 transition-colors">
            BG
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                {profile.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-mono tracking-tight line-clamp-1">
              Senior Full Stack & Cloud
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 uppercase tracking-widest text-xs font-semibold text-slate-500">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                id={`nav-link-${sectionId}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-indigo-600 border-b-2 border-indigo-600 font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="navbar-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>Resume</span>
          </button>

          <button
            id="navbar-edit-profile-btn"
            onClick={onOpenEditProfile}
            title="Edit Portfolio Profile Data"
            className="p-2 rounded-full text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all"
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>

          <a
            id="navbar-contact-cta"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-indigo-300" />
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-resume-trigger"
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs"
          >
            <FileText className="w-4 h-4 text-indigo-600" />
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg mt-2 animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors text-center ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 border border-indigo-200'
                      : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
            <button
              onClick={() => {
                onOpenEditProfile();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 flex items-center justify-center gap-2"
            >
              <Sliders className="w-4 h-4 text-indigo-600" />
              <span>Customize Profile</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex-1 py-2.5 rounded-full text-xs font-medium bg-slate-900 text-white flex items-center justify-center gap-2 text-center"
            >
              <Send className="w-4 h-4 text-indigo-300" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
