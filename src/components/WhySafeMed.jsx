import React from 'react';
import SectionHeading from './SectionHeading';
import { projectConfig } from '../data/project';
import { AlertTriangle, GitBranch, Cpu, Target } from 'lucide-react';

export default function WhySafeMed() {
  const iconMap = {
    AlertTriangle: AlertTriangle,
    GitBranch: GitBranch,
    Cpu: Cpu,
    Target: Target,
  };

  const borderAccents = {
    problem: "hover:border-amber-500/50 group-hover:text-amber-400",
    gap: "hover:border-rose-500/50 group-hover:text-rose-400",
    opportunity: "hover:border-tealAccent-500/50 group-hover:text-tealAccent-400",
    goal: "hover:border-sky-500/50 group-hover:text-sky-400",
  };

  const badgeColors = {
    problem: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    gap: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    opportunity: "text-tealAccent-400 bg-tealAccent-500/10 border-tealAccent-500/20",
    goal: "text-sky-400 bg-sky-500/10 border-sky-500/20",
  };

  return (
    <section id="why-safemed" className="py-20 md:py-28 bg-navy-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Motivation & Context"
          title="Why SafeMed?"
          subtitle="Understanding the systemic friction in adverse drug event reporting and the clinical rationale that prompted this research exploration."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectConfig.whySafeMed.map((item) => {
            const IconComponent = iconMap[item.icon] || AlertTriangle;
            return (
              <div
                key={item.id}
                className={`group rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 ${borderAccents[item.id] || 'hover:border-brand-500/50'} hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40`}
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border ${badgeColors[item.id]}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Placeholder Content */}
                  <div className="text-sm text-slate-300/90 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
                    <p className="font-normal font-sans">
                      {item.content}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Context Card</span>
                  <span className="uppercase">{item.id}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
