import React, { useState } from 'react';
import {
  Terminal,
  FileCode2,
  Activity,
  Send,
  CornerDownLeft,
  Sparkles,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { ProfileData } from '../types';

interface InteractiveTerminalProps {
  profile: ProfileData;
  onNavigateTo: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  profile,
  onNavigateTo,
  onOpenResume,
}) => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'config' | 'status'>('terminal');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([
    {
      command: 'whoami',
      output: profile.terminalCommands['whoami'] || `${profile.name} — ${profile.roleTitle}`,
    },
    {
      command: 'status',
      output: profile.terminalCommands['status'] || '🟢 Open for select Staff / Lead opportunities.',
    },
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (cmd === 'projects') {
      onNavigateTo('projects');
      setHistory((prev) => [
        ...prev,
        { command: cmd, output: 'Navigating to #projects showcase...' },
      ]);
      setInputVal('');
      return;
    }

    if (cmd === 'contact') {
      onNavigateTo('contact');
      setHistory((prev) => [
        ...prev,
        { command: cmd, output: 'Navigating to #contact form...' },
      ]);
      setInputVal('');
      return;
    }

    if (cmd === 'resume' || cmd === 'cv') {
      onOpenResume();
      setHistory((prev) => [
        ...prev,
        { command: cmd, output: 'Opening interactive resume viewer...' },
      ]);
      setInputVal('');
      return;
    }

    let output: string | React.ReactNode = profile.terminalCommands[cmd];
    if (!output) {
      if (cmd === 'experience') {
        output = 'Lead Full Stack Engineer @ Vanguard (2022-Present) • Senior Full Stack @ Nexus (2019-2022)';
      } else {
        output = `Command not found: "${cmd}". Type "help" for a list of available commands.`;
      }
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  return (
    <div
      id="hero-terminal-container"
      className="w-full rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-slate-700"
    >
      {/* Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400">
            Benjaminghajiga@workstation:~/{activeTab}
          </span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            id="tab-terminal-btn"
            onClick={() => setActiveTab('terminal')}
            className={`px-2.5 py-1 rounded font-mono transition-colors flex items-center gap-1.5 ${
              activeTab === 'terminal'
                ? 'bg-indigo-500/20 text-indigo-300 font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal</span>
          </button>
          <button
            id="tab-config-btn"
            onClick={() => setActiveTab('config')}
            className={`px-2.5 py-1 rounded font-mono transition-colors flex items-center gap-1.5 ${
              activeTab === 'config'
                ? 'bg-indigo-500/20 text-indigo-300 font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>stack.ts</span>
          </button>
          <button
            id="tab-status-btn"
            onClick={() => setActiveTab('status')}
            className={`px-2.5 py-1 rounded font-mono transition-colors flex items-center gap-1.5 ${
              activeTab === 'status'
                ? 'bg-indigo-500/20 text-indigo-300 font-medium'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Telemetry</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-5 min-h-[310px] max-h-[360px] overflow-y-auto text-sm font-mono leading-relaxed">
        {activeTab === 'terminal' && (
          <div className="flex flex-col h-full justify-between gap-4">
            <div className="space-y-3">
              <div className="text-slate-400 text-xs pb-1 border-b border-slate-800/60 flex items-center justify-between">
                <span>Interactive Shell v2.4 (Try: stack, status, resume, help, clear)</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live
                </span>
              </div>

              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-indigo-400">
                    <span className="text-slate-500">$</span>
                    <span className="font-semibold text-slate-100">{item.command}</span>
                  </div>
                  <div className="text-slate-300 pl-4 border-l-2 border-indigo-500/30 text-xs sm:text-sm">
                    {item.output}
                  </div>
                </div>
              ))}
            </div>

            {/* Prompt input */}
            <form onSubmit={handleCommandSubmit} className="pt-2 border-t border-slate-800/80 flex items-center gap-2">
              <span className="text-indigo-400 font-bold">$</span>
              <input
                id="terminal-cli-input"
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command (e.g. stack, contact, whoami)..."
                className="w-full bg-transparent text-slate-100 placeholder:text-slate-500 focus:outline-none text-xs sm:text-sm"
              />
              <button
                type="submit"
                id="terminal-submit-btn"
                className="text-slate-400 hover:text-indigo-400 p-1 transition-colors"
                title="Execute command"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {activeTab === 'config' && (
          <div className="text-xs sm:text-sm space-y-1 text-slate-300 overflow-x-auto">
            <p className="text-slate-400">// engineer.config.ts</p>
            <p>
              <span className="text-indigo-300">export const</span>{' '}
              <span className="text-yellow-300">architectProfile</span> = &#123;
            </p>
            <p className="pl-4">
              <span className="text-sky-300">name</span>:{' '}
              <span className="text-emerald-300">'{profile.name}'</span>,
            </p>
            <p className="pl-4">
              <span className="text-sky-300">title</span>:{' '}
              <span className="text-emerald-300">'{profile.roleTitle}'</span>,
            </p>
            <p className="pl-4">
              <span className="text-sky-300">location</span>:{' '}
              <span className="text-emerald-300">'{profile.location}'</span>,
            </p>
            <p className="pl-4">
              <span className="text-sky-300">specialization</span>: [
            </p>
            <p className="pl-8 text-amber-200">
              'Distributed Systems', 'React 19 & Next.js', 'Cloud Run / GCP', 'AI Workflows', 'Zero-Latency UX'
            </p>
            <p className="pl-4">],</p>
            <p className="pl-4">
              <span className="text-sky-300">currentAvailability</span>:{' '}
              <span className="text-emerald-400">true</span>,
            </p>
            <p className="pl-4">
              <span className="text-sky-300">preferredChannels</span>: &#123;
            </p>
            <p className="pl-8">
              <span className="text-sky-300">email</span>:{' '}
              <span className="text-emerald-300">'{profile.email}'</span>,
            </p>
            <p className="pl-8">
              <span className="text-sky-300">github</span>:{' '}
              <span className="text-emerald-300">'{profile.socials.github}'</span>,
            </p>
            <p className="pl-4">&#125;</p>
            <p>&#125;;</p>
          </div>
        )}

        {activeTab === 'status' && (
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-slate-300">
                <span className="font-semibold text-slate-100 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Primary Status
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-medium text-xs">
                  {profile.availability.status}
                </span>
              </div>
              <p className="text-slate-400 text-xs">{profile.availability.message}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80">
                <span className="text-slate-400 block">Target Roles</span>
                <span className="text-slate-200 font-medium">Staff Engineer / Lead</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80">
                <span className="text-slate-400 block">Work Preference</span>
                <span className="text-slate-200 font-medium">Remote Worldwide / Abuja</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80">
                <span className="text-slate-400 block">Response Time</span>
                <span className="text-emerald-400 font-medium">&lt; 24 Hours</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80">
                <span className="text-slate-400 block">Primary Cloud</span>
                <span className="text-indigo-300 font-medium">GCP & AWS</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-400 border-t border-slate-800">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Timezone: WAT (UTC+1, Abuja)
              </span>
              <button
                onClick={() => onNavigateTo('contact')}
                className="text-indigo-400 hover:text-indigo-300 underline font-medium"
              >
                Send Direct Message &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
