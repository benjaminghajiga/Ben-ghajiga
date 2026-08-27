import React, { useState, useMemo } from 'react';
import {
  Cpu,
  Layout,
  Server,
  Cloud,
  Sparkles,
  Search,
  CheckCircle2,
  TrendingUp,
  Layers,
  Shield,
  Gauge,
  Code2,
} from 'lucide-react';
import { SkillCategory, SkillItem } from '../types';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [skillSearch, setSkillSearch] = useState<string>('');

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4 text-indigo-600" />;
      case 'Server':
        return <Server className="w-4 h-4 text-indigo-600" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-indigo-600" />;
      default:
        return <Cpu className="w-4 h-4 text-indigo-600" />;
    }
  };

  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        if (activeCategoryId !== 'all' && cat.id !== activeCategoryId) {
          return null;
        }

        const filteredSkills = cat.skills.filter((skill) => {
          if (!skillSearch) return true;
          const query = skillSearch.toLowerCase();
          return (
            skill.name.toLowerCase().includes(query) ||
            skill.keywords.some((k) => k.toLowerCase().includes(query))
          );
        });

        if (filteredSkills.length === 0) return null;

        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter(Boolean) as SkillCategory[];
  }, [categories, activeCategoryId, skillSearch]);

  const architecturalStrengths = [
    {
      title: 'High-Concurrency & Streaming',
      desc: 'Engineered WebSocket gateways & gRPC endpoints handling 250k+ events/sec with zero memory leaks.',
      metric: '< 15ms latency',
    },
    {
      title: 'Type-Safe Full-Stack Contracts',
      desc: 'End-to-end typing with TypeScript strict mode, Zod, and Drizzle/Prisma schema generators.',
      metric: '100% strictness',
    },
    {
      title: 'Cloud Cost & Performance Optimization',
      desc: 'Reduced AWS & GCP compute overhead by 38% through container optimization, connection pooling & caching.',
      metric: '-38% bill reduction',
    },
    {
      title: 'AI Workflow Engineering',
      desc: 'Multimodal Gemini integrations with grounded citations, semantic chunking, and deterministic JSON schemas.',
      metric: '99.2% extraction rate',
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-slate-100 bg-[#fdfdfd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">
              <Cpu className="w-4 h-4" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Skills & Technology Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-xl">
              Battle-tested competencies across frontend performance, cloud-native microservices, and AI integrations.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="skills-search-input"
              type="text"
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              placeholder="Search skill (e.g. React, Go, K8s)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-2xs"
            />
          </div>
        </div>

        {/* Category switcher pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs sm:text-sm no-scrollbar">
          <button
            id="skill-cat-all"
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
              activeCategoryId === 'all'
                ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            All Disciplines
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skill-cat-${cat.id}`}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                activeCategoryId === cat.id
                  ? 'bg-indigo-600 text-white shadow-xs font-semibold'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {renderCategoryIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                    {renderCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-indigo-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                  {cat.skills.length} competencies
                </span>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-800">
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-indigo-50 text-indigo-700 border border-indigo-200">
                            Primary
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 font-mono text-xs">
                        <span className="text-slate-400">{skill.experienceYears}</span>
                        <span className="text-indigo-600 font-bold">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {/* Keyword Chips */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {skill.keywords.map((kw, kIdx) => (
                        <span
                          key={kIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 text-slate-600 border border-slate-200"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Strengths Callout Grid */}
        <div className="mt-14 pt-10 border-t border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Gauge className="w-5 h-5 text-indigo-600" />
            <span>Proven Engineering Specializations</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {architecturalStrengths.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all space-y-3"
              >
                <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {item.metric}
                </div>
                <h4 className="text-base font-bold text-slate-900">
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
    </section>
  );
};
