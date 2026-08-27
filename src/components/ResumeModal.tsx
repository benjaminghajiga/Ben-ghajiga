import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
} from 'lucide-react';
import { ProfileData, ExperienceItem, EducationItem, CertificationItem, ProjectItem } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  projects: ProjectItem[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  experiences,
  education,
  certifications,
  projects,
}) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const generatePlainTextResume = () => {
    return `
============================================================
${profile.name.toUpperCase()}
${profile.roleTitle}
Email: ${profile.email} | Location: ${profile.location}
GitHub: ${profile.socials.github} | LinkedIn: ${profile.socials.linkedin}
============================================================

EXECUTIVE SUMMARY
${profile.shortBio}

CORE COMPETENCIES
- Languages: TypeScript, JavaScript, Go, Python, SQL, HTML5/CSS3
- Frontend: React 19, Next.js, Tailwind CSS, WebSockets, State Management, Web Vitals
- Backend & Distributed: Node.js, Express, Fastify, Go, Microservices, REST, gRPC, Redis Streams
- Cloud & Infrastructure: Google Cloud Platform (GCP), AWS, Docker, Kubernetes, Terraform, CI/CD
- AI & Modern Tools: Gemini API, Vector DBs (Qdrant), Prompt Engineering, Structured JSON Schemas

PROFESSIONAL EXPERIENCE
${experiences
  .map(
    (exp) => `
${exp.role.toUpperCase()} | ${exp.company}
${exp.period} | ${exp.location}
${exp.description}
Key Achievements:
${exp.achievements.map((a) => `  * ${a}`).join('\n')}
Tech Stack: ${exp.techStack.join(', ')}
`
  )
  .join('\n')}

SELECTED PROJECTS
${projects
  .slice(0, 3)
  .map(
    (p) => `
* ${p.title}: ${p.subtitle}
  Metric: ${p.metrics}
  Tech: ${p.techStack.join(', ')}
  Link: ${p.githubUrl}
`
  )
  .join('\n')}

EDUCATION
${education
  .map(
    (edu) => `
${edu.degree}
${edu.institution} (${edu.period})
${edu.grade ? `Grade: ${edu.grade}\n` : ''}${edu.details.map((d) => `  * ${d}`).join('\n')}
`
  )
  .join('\n')}

CERTIFICATIONS
${certifications.map((c) => `* ${c.name} (${c.issuer}, ${c.date}) [${c.credentialId || ''}]`).join('\n')}
============================================================
`.trim();
  };

  const handleCopyPlainText = () => {
    navigator.clipboard.writeText(generatePlainTextResume());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const text = generatePlainTextResume();
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.name.replace(/\s+/g, '_')}_Resume_2026.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-dialog"
        className="w-full max-w-4xl rounded-2xl bg-white border border-slate-100 shadow-2xl overflow-hidden my-6 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="p-4 sm:p-5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-sm sm:text-base">
              Curriculum Vitae / Resume
            </span>
            <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200 hidden sm:inline">
              Verified 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-copy-txt-btn"
              onClick={handleCopyPlainText}
              className="px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors shadow-2xs"
              title="Copy plain text"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-indigo-600" />}
              <span className="hidden sm:inline">{copiedText ? 'Copied!' : 'Copy Plaintext'}</span>
            </button>

            <button
              id="resume-download-md-btn"
              onClick={handleDownloadMarkdown}
              className="px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors shadow-2xs"
              title="Download Markdown"
            >
              <Download className="w-3.5 h-3.5 text-indigo-600" />
              <span className="hidden sm:inline">Download .MD</span>
            </button>

            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
              title="Print to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              id="resume-modal-close"
              onClick={onClose}
              className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors shadow-2xs"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-slate-800 font-sans leading-relaxed">
          {/* Header */}
          <div className="border-b border-slate-100 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {profile.name}
                </h1>
                <p className="text-sm font-semibold text-indigo-600">
                  {profile.roleTitle}
                </p>
              </div>

              <div className="text-xs text-slate-500 space-y-1 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{profile.email}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{profile.location}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{profile.socials.linkedin}</span>
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              {profile.shortBio}
            </p>
          </div>

          {/* Core Technical Strengths */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 border-b border-slate-100 pb-1">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              <p>
                <strong className="text-slate-900 font-semibold">Languages:</strong> TypeScript, JavaScript (ESNext), Go (Golang), Python, SQL, HTML5/CSS3
              </p>
              <p>
                <strong className="text-slate-900 font-semibold">Frontend:</strong> React 19, Next.js, Tailwind CSS, Vite, Zustand, WebSockets, Web Vitals
              </p>
              <p>
                <strong className="text-slate-900 font-semibold">Backend & Systems:</strong> Node.js, Express, Fastify, Microservices, Redis Streams, gRPC, PostgreSQL
              </p>
              <p>
                <strong className="text-slate-900 font-semibold">Cloud & AI:</strong> GCP (Cloud Run, GKE, PubSub), AWS, Docker, Kubernetes, Gemini API, Vector DBs
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 border-b border-slate-100 pb-1">
              Professional Experience
            </h2>

            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-900">
                        {exp.role}
                      </span>
                      <span className="text-indigo-600 font-semibold">
                        {' '}— {exp.company}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {exp.period} | {exp.location}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600">
                    {exp.description}
                  </p>

                  <ul className="list-disc ml-5 space-y-1 text-xs text-slate-600">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 border-b border-slate-100 pb-1">
                Education
              </h2>
              {education.map((edu) => (
                <div key={edu.id} className="text-xs space-y-1">
                  <p className="font-bold text-slate-900">
                    {edu.degree}
                  </p>
                  <p className="text-slate-500">
                    {edu.institution} ({edu.period})
                  </p>
                  {edu.grade && (
                    <p className="text-emerald-700 font-semibold">
                      {edu.grade}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 border-b border-slate-100 pb-1">
                Certifications
              </h2>
              <div className="space-y-1.5 text-xs text-slate-600">
                {certifications.map((c) => (
                  <p key={c.id}>
                    &bull; <strong className="text-slate-900">{c.name}</strong> ({c.issuer})
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
