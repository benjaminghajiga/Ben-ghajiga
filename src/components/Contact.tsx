import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Github,
  Linkedin,
  Twitter,
  Clock,
  MapPin,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Inbox,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProfileData, ContactMessage } from '../types';

interface ContactProps {
  profile: ProfileData;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'Staff / Lead Role',
    budget: '$150k - $220k+ / Full-Time',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<ContactMessage | null>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'inbox'>('form');

  // Stored messages
  const [savedMessages, setSavedMessages] = useState<ContactMessage[]>(() => {
    try {
      const stored = localStorage.getItem('portfolio_contact_messages');
      if (stored) return JSON.parse(stored);
    } catch {
      // fallback
    }
    return [
      {
        id: 'msg-sample-1',
        name: 'Sarah Jenkins',
        email: 's.jenkins@techcorp-ventures.com',
        subject: 'Staff Software Engineer Opportunity',
        projectType: 'Full-time Hire',
        budget: '$180k - $220k',
        message:
          'Hi B., I came across your work on HyperScale Edge Mesh and distributed telemetry systems. We are building a next-gen cloud observability tool and would love to chat about a Staff Engineer role on our core team.',
        createdAt: '2026-08-25T14:30:00Z',
      },
    ];
  });

  // Current Abuja (WAT) time
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newMsg: ContactMessage = {
        id: `msg-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        subject: formData.subject || `${formData.projectType} Inquiry`,
        projectType: formData.projectType,
        budget: formData.budget,
        message: formData.message,
        createdAt: new Date().toISOString(),
      };

      const updated = [newMsg, ...savedMessages];
      setSavedMessages(updated);
      try {
        localStorage.setItem('portfolio_contact_messages', JSON.stringify(updated));
      } catch {
        // ignore
      }

      setSubmittedMessage(newMsg);
      setIsSubmitting(false);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#3b82f6', '#10b981', '#f59e0b'],
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        projectType: 'Staff / Lead Role',
        budget: '$150k - $220k+ / Full-Time',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#fdfdfd] border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Let's Build Something Exceptional
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-xl">
              Currently open to Staff/Lead engineering positions, technical advisory, and high-impact distributed cloud projects.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-full border border-slate-200 self-start md:self-auto text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab('form')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-medium transition-all ${
                activeTab === 'form'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact Form</span>
            </button>
            <button
              onClick={() => setActiveTab('inbox')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-medium transition-all ${
                activeTab === 'inbox'
                  ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>Sent Messages ({savedMessages.length})</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Direct Inquiries
                </span>
                <span className="flex items-center gap-1 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Fast Response
                </span>
              </div>

              <div className="space-y-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-indigo-600 transition-colors break-all block"
                >
                  {profile.email}
                </a>
                <p className="text-xs text-slate-500">
                  Feel free to send meeting invites, job opportunities, or project briefs directly.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="flex-1 py-2.5 px-3 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 flex items-center justify-center gap-2 transition-colors shadow-2xs"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profile.email}`}
                  className="py-2.5 px-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Compose</span>
                </a>
              </div>
            </div>

            {/* Location & Timezone card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  Location
                </span>
                <span className="font-semibold text-slate-800">{profile.location}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  Current Abuja Time (WAT)
                </span>
                <span className="font-mono font-semibold text-indigo-600">
                  {currentTime || 'Loading...'}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Typical Turnaround
                </span>
                <span className="font-semibold text-slate-800">&lt; 24 Hours</span>
              </div>
            </div>

            {/* Social Network Profiles */}
            <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Verified Profiles
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-600 hover:bg-white flex items-center gap-2.5 transition-all text-xs font-medium"
                >
                  <Github className="w-4 h-4 text-slate-500" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-600 hover:bg-white flex items-center gap-2.5 transition-all text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4 text-slate-500" />
                  <span>LinkedIn</span>
                </a>

                {profile.socials.twitter && (
                  <a
                    href={profile.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-600 hover:bg-white flex items-center gap-2.5 transition-all text-xs font-medium"
                  >
                    <Twitter className="w-4 h-4 text-slate-500" />
                    <span>Twitter / X</span>
                  </a>
                )}

                <a
                  href={profile.socials.website || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-600 hover:bg-white flex items-center gap-2.5 transition-all text-xs font-medium"
                >
                  <Sparkles className="w-4 h-4 text-slate-500" />
                  <span>ben-ghajiga.ai.studio</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form or Inbox View */}
          <div className="lg:col-span-7">
            {activeTab === 'form' ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-6">
                {submittedMessage && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 text-xs sm:text-sm animate-in fade-in duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold text-emerald-900">
                        Message sent successfully!
                      </p>
                      <p className="text-emerald-700 text-xs">
                        Thank you, {submittedMessage.name}. A confirmation has been logged. Benjamin Ghajiga will reply to{' '}
                        <span className="font-mono underline font-medium">{submittedMessage.email}</span> shortly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 block">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-2xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 block">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email-input"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 block">
                        Inquiry / Project Type
                      </label>
                      <select
                        id="contact-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-2xs"
                      >
                        <option value="Staff / Lead Role">Full-Time Staff / Lead Role</option>
                        <option value="Cloud Architecture Advisory">Cloud Architecture Advisory</option>
                        <option value="AI / LLM Integration">AI / LLM Production Pipeline</option>
                        <option value="Custom MVP Development">Custom High-Scale MVP</option>
                        <option value="General Collaboration">General Networking / Coffee</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 block">
                        Estimated Budget / Rate
                      </label>
                      <select
                        id="contact-budget-select"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-2xs"
                      >
                        <option value="$150k - $220k+ / Full-Time">$150k - $220k+ / Full-Time</option>
                        <option value="$10k - $30k Project">$10k - $30k Project</option>
                        <option value="$30k - $75k+ Project">$30k - $75k+ Project</option>
                        <option value="Hourly Advisory ($150-$250/hr)">Hourly Advisory ($150-$250/hr)</option>
                        <option value="Flexible / Let's Discuss">Flexible / Let's Discuss</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 block">
                      Subject
                    </label>
                    <input
                      id="contact-subject-input"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Scaling real-time telemetry infrastructure"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-2xs"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 block">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message-input"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, tech stack, and goals..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none leading-relaxed shadow-2xs"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xs transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="font-mono text-xs">Sending dispatch...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              /* Sent Messages Inbox */
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Inbox className="w-4 h-4 text-indigo-600" />
                    <span>Inquiries Dispatched</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-500">
                    Stored in local session
                  </span>
                </div>

                <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                  {savedMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <span className="font-semibold text-sm text-slate-900">
                            {msg.name}
                          </span>
                          <span className="text-xs text-slate-500 ml-2 font-mono">
                            &lt;{msg.email}&gt;
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap text-xs">
                        <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono">
                          {msg.projectType}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-slate-200/80 text-slate-700 font-mono">
                          {msg.budget}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed pt-1">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
