import React, { useState, useMemo } from 'react';
import {
  Code2,
  ExternalLink,
  Github,
  Search,
  Sparkles,
  Network,
  Activity,
  Cpu,
  Layers,
  Terminal,
  ArrowUpRight,
  Filter,
  Flame,
} from 'lucide-react';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Cloud & Systems', 'AI & ML', 'Full-Stack', 'Developer Tools', 'Frontend'];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-5 h-5 text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-slate-700" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-slate-100 bg-[#fdfdfd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <Code2 className="w-4 h-4" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Featured Systems & Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-xl">
              Production architectures, distributed tools, and AI platforms built with a focus on high throughput and craft.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="projects-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, keywords..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 text-xs sm:text-sm no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <Filter className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-semibold text-slate-700">
              No projects found
            </h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search keywords or resetting the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-slate-900 text-xs text-white hover:bg-slate-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top Banner / Accent */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100 group-hover:scale-105 transition-transform">
                      {renderIcon(project.iconName)}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                          <Flame className="w-3 h-3 text-amber-500" />
                          Featured
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-100 text-slate-700">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Metrics badge */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-mono text-indigo-700 flex items-center justify-between">
                    <span className="text-slate-500">Benchmark:</span>
                    <span className="font-semibold">{project.metrics}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-50 text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    id={`view-details-${project.id}`}
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors py-1 px-2 rounded-lg hover:bg-indigo-50"
                  >
                    <span>Architecture Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-white transition-colors"
                        title="Live Instance"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
