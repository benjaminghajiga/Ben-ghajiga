import React, { useState } from 'react';
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  Code2,
  Trophy,
  Users,
} from 'lucide-react';
import {
  ProfileData,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  LeadershipItem,
  AchievementItem,
} from '../types';
import { LEADERSHIP_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';

interface AboutProps {
  profile: ProfileData;
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

export const About: React.FC<AboutProps> = ({
  profile,
  experiences,
  education,
  certifications,
}) => {
  const [activeTab, setActiveTab] = useState<'story' | 'experience' | 'education' | 'community'>('story');

  const engineeringPrinciples = [
    {
      icon: <Zap className="w-5 h-5 text-indigo-600" />,
      title: 'Full-Stack Execution',
      desc: 'End-to-end craftsmanship from Figma/Framer UI prototypes to performant Next.js, Node.js REST APIs, and database architecture.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      title: 'Web3 & Smart Contracts',
      desc: 'Trustless escrow mechanisms, decentralized dApps, wallet onboarding, and multi-chain integrations (Algorand, Cardano, Solidity).',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: 'Reliability & Standards',
      desc: 'Strict TypeScript typing, modular database schemas (PostgreSQL, MongoDB, Prisma), and containerized cloud deployments.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
      title: 'Multimedia & Storytelling',
      desc: 'High-definition video production, motion graphics, and crisp visual branding that effectively communicate technical value.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-slate-100 bg-[#fdfdfd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <User className="w-4 h-4" />
              <span>Background & Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Biography, Career & Community
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center p-1 bg-slate-100 rounded-full border border-slate-200 self-start md:self-auto text-xs sm:text-sm flex-wrap gap-1">
            <button
              id="about-tab-story"
              onClick={() => setActiveTab('story')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === 'story'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>My Story</span>
            </button>

            <button
              id="about-tab-experience"
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === 'experience'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience ({experiences.length})</span>
            </button>

            <button
              id="about-tab-community"
              onClick={() => setActiveTab('community')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === 'community'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Leadership & Awards</span>
            </button>

            <button
              id="about-tab-education"
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education & Certs</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Biography / Story */}
        {activeTab === 'story' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Main narrative */}
              <div className="lg:col-span-7 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
                {profile.fullBioParagraphs.map((para, idx) => (
                  <p key={idx} className="text-slate-600">
                    {para}
                  </p>
                ))}

                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Based in {profile.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                    <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>4+ Years in Full-Stack & Web3</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">
                    <Trophy className="w-3.5 h-3.5 text-amber-600" />
                    <span>1st Place Winner — 2025 Model and I Hackathon</span>
                  </div>
                </div>
              </div>

              {/* Quick Profile Summary Card */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-xs">
                    BG
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-indigo-600 font-mono">
                      {profile.email}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {profile.roleTitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Target Roles & Engagements
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {profile.availability.targetRoles.map((role, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Availability</span>
                    <span className="font-semibold text-emerald-700 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Open for Full-Stack & Web3 Projects
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Work Arrangement</span>
                    <span className="text-slate-800 font-medium">Remote Worldwide & On-Site</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Timezone</span>
                    <span className="text-slate-800 font-medium">Africa/Lagos (WAT, UTC+1)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Phone</span>
                    <span className="text-slate-800 font-mono font-medium">{profile.phone || '(+234) 7035319985'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Principles Section */}
            <div className="pt-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <span>Core Engineering & Product Principles</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {engineeringPrinciples.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all group"
                  >
                    <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 w-fit mb-3 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Career Experience Timeline */}
        {activeTab === 'experience' && (
          <div id="experience" className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l border-slate-200 space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline node dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-indigo-600 group-hover:scale-125 group-hover:bg-indigo-600 transition-all shadow-xs" />

                  <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                              Active Role
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-indigo-600">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                        Key Accomplishments & Responsibilities
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack badges */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-slate-100">
                      <span className="text-[11px] font-mono text-slate-400 mr-1">
                        Stack & Tools:
                      </span>
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-50 text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Leadership & Awards */}
        {activeTab === 'community' && (
          <div className="space-y-8">
            {/* Hackathon Awards */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-900 text-xl font-bold">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h3>Hackathons & Honors</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {ACHIEVEMENTS_DATA.map((ach) => (
                  <div
                    key={ach.id}
                    className="p-6 rounded-2xl bg-gradient-to-r from-amber-50/60 via-white to-white border border-amber-200/70 shadow-sm space-y-2"
                  >
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 text-amber-700 flex items-center justify-center font-bold">
                          <Trophy className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900">
                            {ach.title}
                          </h4>
                          <p className="text-xs font-semibold text-amber-700">
                            {ach.event}
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-900 border border-amber-200">
                        {ach.year}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Community Building */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-2 text-slate-900 text-xl font-bold">
                <Users className="w-5 h-5 text-indigo-600" />
                <h3>Leadership & Community Initiatives</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {LEADERSHIP_DATA.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-4 hover:border-indigo-200 transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">
                          {lead.role}
                        </h4>
                        <p className="text-sm font-semibold text-indigo-600">
                          {lead.organization}
                        </p>
                      </div>
                      <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                        <Users className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {lead.description}
                    </p>

                    <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-slate-600 border-t border-slate-100">
                      {lead.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Education & Certifications */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Education */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-slate-900 text-xl font-bold">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
                <h3>Academic Education</h3>
              </div>

              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-indigo-600">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                      {edu.period}
                    </span>
                  </div>

                  {edu.grade && (
                    <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {edu.grade}
                    </div>
                  )}

                  <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-slate-600">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">&bull;</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-slate-900 text-xl font-bold">
                <Award className="w-5 h-5 text-indigo-600" />
                <h3>Certifications & Courses</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-between gap-4 hover:border-indigo-200 transition-all"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {cert.issuer} &bull; {cert.date}
                        </p>
                      </div>
                    </div>

                    {cert.credentialId && (
                      <span className="text-[11px] font-mono text-indigo-600 bg-slate-50 px-2 py-1 rounded border border-slate-200 hidden sm:inline">
                        {cert.credentialId}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
