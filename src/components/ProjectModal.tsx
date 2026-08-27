import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Code2,
  ShieldCheck,
  Zap,
  Terminal,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'features' | 'simulation'>('architecture');
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simLog, setSimLog] = useState<string[]>([]);

  if (!project) return null;

  const runSimulation = () => {
    setSimulationRunning(true);
    setSimLog([`[INIT] Initializing ${project.title} test harness...`]);

    setTimeout(() => {
      setSimLog((prev) => [...prev, '[NETWORK] Establishing anycast WebSocket pool across 4 regions...']);
    }, 400);

    setTimeout(() => {
      setSimLog((prev) => [
        ...prev,
        `[BENCHMARK] Ingesting synthetic payload test at ${project.metrics}...`,
      ]);
    }, 900);

    setTimeout(() => {
      setSimLog((prev) => [
        ...prev,
        '[HEALTH] Cluster status: 100% HEALTHY (0 dropped packets, jitter < 1.2ms).',
        '[SUCCESS] Verification complete. System operating within peak SLA parameters.',
      ]);
      setSimulationRunning(false);
    }, 1500);
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-dialog"
        className="w-full max-w-3xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-100 relative">
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors shadow-2xs"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 pr-12">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                {project.category}
              </span>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                {project.metrics}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {project.title}
            </h3>
            <p className="text-sm text-slate-500 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex items-center gap-2 pt-6 mt-2 border-t border-slate-200/80 text-xs sm:text-sm">
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === 'architecture'
                  ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
              }`}
            >
              System Architecture
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === 'features'
                  ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
              }`}
            >
              Key Capabilities
            </button>
            <button
              onClick={() => setActiveTab('simulation')}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === 'simulation'
                  ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200'
              }`}
            >
              Live Diagnostics
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Full description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Overview & Problem Statement
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-indigo-600" />
                <span>Architecture Highlights</span>
              </h4>
              <div className="space-y-2.5">
                {project.architectureHighlights.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Engineered Capabilities</span>
              </h4>
              <div className="space-y-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                  >
                    <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'simulation' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-indigo-600" />
                  <span>Telemetry Diagnostic Runner</span>
                </h4>
                <button
                  id="run-simulation-btn"
                  onClick={runSimulation}
                  disabled={simulationRunning}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors disabled:opacity-50 shadow-xs"
                >
                  {simulationRunning ? 'Running probe...' : 'Run Diagnostics'}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5 min-h-[140px]">
                {simLog.length === 0 ? (
                  <div className="text-slate-400 py-6 text-center">
                    Click "Run Diagnostics" to execute live system stress probe simulation.
                  </div>
                ) : (
                  simLog.map((log, idx) => (
                    <div
                      key={idx}
                      className={
                        log.includes('[SUCCESS]')
                          ? 'text-emerald-400 font-semibold'
                          : log.includes('[INIT]')
                          ? 'text-indigo-400'
                          : 'text-slate-300'
                      }
                    >
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Tech stack badges */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-slate-50 text-slate-700 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <a
            id="modal-github-btn"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-medium border border-slate-200 transition-colors shadow-2xs"
          >
            <Github className="w-4 h-4 text-slate-600" />
            <span>View Source Code</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          {project.liveUrl && (
            <a
              id="modal-live-demo-btn"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all"
            >
              <span>Launch Live Instance</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
