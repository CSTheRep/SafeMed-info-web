import React from 'react';
import SectionHeading from './SectionHeading';
import { projectConfig } from '../data/project';
import { CheckCircle2, Clock, Activity, Flag } from 'lucide-react';

export default function CurrentProgress() {
  const badgeStyles = {
    Completed: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    Operational: "bg-tealAccent-500/10 border-tealAccent-500/30 text-tealAccent-300",
    "Academic Phase": "bg-indigo-500/10 border-indigo-500/30 text-indigo-300",
    "Active Exploration": "bg-purple-500/10 border-purple-500/30 text-purple-300",
    "In Progress": "bg-amber-500/10 border-amber-500/30 text-amber-300",
  };

  return (
    <section id="progress" className="py-20 md:py-28 bg-navy-950/80 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="State of Development"
          title="Where SafeMed Is Today"
          subtitle="A transparent overview of current milestones achieved across concept, engineering prototype, and academic research."
        />

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {projectConfig.currentProgress.map((item, idx) => (
            <div
              key={item.milestone}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-slate-500">
                    STAGE 0{idx + 1}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold ${badgeStyles[item.status] || 'border-slate-700 text-slate-400'}`}>
                    {item.status}
                  </span>
                </div>

                {/* Milestone Name */}
                <h3 className="text-base font-bold text-white mb-1">
                  {item.milestone}
                </h3>
                <div className="text-xs font-mono text-tealAccent-400 mb-3">
                  {item.badge}
                </div>

                {/* Status / Description Placeholder */}
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs font-sans text-slate-300 leading-relaxed">
                  {item.description}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Phase Review</span>
                <span className="text-slate-400">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Status Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs text-slate-400 font-mono text-center">
          Note: Milestones are actively tracked as academic validation and model experiments progress.
        </div>

      </div>
    </section>
  );
}
