import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { EditProfileModal } from './components/EditProfileModal';
import {
  INITIAL_PROFILE,
  PROJECTS_DATA,
  SKILL_CATEGORIES,
  EXPERIENCE_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  BLOG_POSTS,
} from './data/portfolioData';
import { ProfileData } from './types';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('portfolio_user_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed) {
          if (parsed.name === 'B. Ghajiga' || !parsed.name) {
            parsed.name = 'Benjamin Ghajiga';
          }
          if (parsed.location === 'London, UK / Remote Worldwide' || parsed.location === 'London, UK') {
            parsed.location = 'Nigeria, Abuja / Remote Worldwide';
          }
          if (parsed.terminalCommands && parsed.terminalCommands.whoami && parsed.terminalCommands.whoami.includes('London')) {
            parsed.terminalCommands.whoami = 'Benjamin Ghajiga — Senior Full Stack Engineer & Cloud Architect (Abuja, Nigeria / Remote Worldwide)';
          }
        }
        return parsed;
      }
    } catch {
      // ignore
    }
    return INITIAL_PROFILE;
  });

  const [activeSection, setActiveSection] = useState<string>('top');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [editProfileOpen, setEditProfileOpen] = useState(false);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'about', 'experience', 'projects', 'skills', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem('portfolio_user_profile', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetDefaults = () => {
    setProfile(INITIAL_PROFILE);
    try {
      localStorage.removeItem('portfolio_user_profile');
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-slate-800 flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-900">
      {/* Top sticky navbar */}
      <Navbar
        profile={profile}
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
        onOpenEditProfile={() => setEditProfileOpen(true)}
      />

      {/* Main content body */}
      <main className="flex-grow">
        <Hero
          profile={profile}
          onOpenResume={() => setResumeOpen(true)}
          onNavigateTo={handleNavigateTo}
        />

        <About
          profile={profile}
          experiences={EXPERIENCE_DATA}
          education={EDUCATION_DATA}
          certifications={CERTIFICATIONS_DATA}
        />

        <Projects projects={PROJECTS_DATA} />

        <Skills categories={SKILL_CATEGORIES} />

        <Blog posts={BLOG_POSTS} profile={profile} />

        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        profile={profile}
        experiences={EXPERIENCE_DATA}
        education={EDUCATION_DATA}
        certifications={CERTIFICATIONS_DATA}
        projects={PROJECTS_DATA}
      />

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={editProfileOpen}
        onClose={() => setEditProfileOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
