import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowRight,
  Sparkles,
  Download,
  Terminal as TerminalIcon,
  ShieldCheck,
  ChevronDown,
  Globe,
} from 'lucide-react';
import { ProfileData } from '../types';
import { InteractiveTerminal } from './InteractiveTerminal';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume, onNavigateTo }) => {
  return (
    <section
      id="top"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-100 bg-[#fdfdfd]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[280px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f040_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f040_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-700 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-900">
                {profile.availability.status}:
              </span>
              <span className="text-slate-500 hidden sm:inline">
                {profile.availability.message}
              </span>
              <span className="text-slate-500 sm:hidden">
                Open to Staff/Lead roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-[0.2em]">
                Full Stack & Cloud Architecture
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Hello, I'm{' '}
                <span className="text-indigo-600">
                  {profile.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700">
                {profile.roleTitle}
              </p>
            </div>

            {/* Short Bio Narrative */}
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
              {profile.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateTo('projects');
                }}
                className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 group active:scale-95 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateTo('contact');
                }}
                className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm shadow-xs transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-indigo-300" />
                <span>Contact Me</span>
              </a>

              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium text-sm border border-slate-200 shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                title="View Full Interactive Resume"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  id="hero-github-link"
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-50 border border-slate-200 text-slate-600 hover:text-indigo-600 flex items-center justify-center transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="hero-linkedin-link"
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-50 border border-slate-200 text-slate-600 hover:text-indigo-600 flex items-center justify-center transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="hero-email-link"
                  href={`mailto:${profile.email}`}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-50 border border-slate-200 text-slate-600 hover:text-indigo-600 flex items-center justify-center transition-colors"
                  title={`Email ${profile.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
                {profile.socials.twitter && (
                  <a
                    id="hero-twitter-link"
                    href={profile.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-50 border border-slate-200 text-slate-600 hover:text-indigo-600 flex items-center justify-center transition-colors"
                    title="Twitter / X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 pl-2">
                <Globe className="w-3.5 h-3.5 text-indigo-500" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal & Code Card */}
          <div className="lg:col-span-5 w-full">
            <InteractiveTerminal
              profile={profile}
              onNavigateTo={onNavigateTo}
              onOpenResume={onOpenResume}
            />
          </div>
        </div>

        {/* Highlighted Metric Blocks */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {profile.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-indigo-200 transition-all duration-300 group"
            >
              <div className="w-8 h-1 bg-indigo-600 mb-3 group-hover:w-12 transition-all"></div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-1.5">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
