import React from 'react';
import SectionHeading from './SectionHeading';
import { projectConfig } from '../data/project';
import { BookOpen, Workflow, Brain, Atom, BarChart3, FlaskConical, Compass, ArrowUpRight } from 'lucide-react';

export default function FutureVision() {
  const iconMap = {
    BookOpen: BookOpen,
    Workflow: Workflow,
    Brain: Brain,
    Atom: Atom,
    BarChart3: BarChart3,
    FlaskConical: FlaskConical
  };

  return (
    <section id="future-vision" className="py-20 md:py-28 bg-navy-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Prospective Horizons"
          title="Where It Could Go Next"
          subtitle="Outlining future research avenues, prospective clinical pilots, and hardware-level quantum testing under ongoing exploration."
        />

        {/* Future Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projectConfig.futureVision.map((item) => {
            const Icon = iconMap[item.icon] || Compass;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-tealAccent-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-tealAccent-400 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tealAccent-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-sans text-slate-300 leading-relaxed">
                    {item.description}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Prospective Vector</span>
                  <span className="text-tealAccent-400 flex items-center gap-0.5">
                    Future Roadmap <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Future Disclaimer Banner */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Disclaimer: Prospective vectors reflect exploratory academic trajectories, not deployed clinical claims.</span>
          <span className="text-tealAccent-400 font-semibold">[Future Roadmap]</span>
        </div>

      </div>
    </section>
  );
}
