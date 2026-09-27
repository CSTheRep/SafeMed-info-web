import React from 'react';
import SectionHeading from './SectionHeading';
import { workflowSteps } from '../data/workflow';
import { Lock, FilePlus, Scan, Info, LayoutDashboard, ArrowRight, Check } from 'lucide-react';

export default function SafeMedWorkflow() {
  const iconMap = {
    Lock: Lock,
    FilePlus: FilePlus,
    Scan: Scan,
    Info: Info,
    LayoutDashboard: LayoutDashboard
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-navy-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Application Architecture"
          title="How SafeMed Works"
          subtitle="The conceptual digital pipeline designed to guide reporters from secure login through prescription OCR to structured analytics."
        />

        {/* 5-Step Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {workflowSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Info;
            return (
              <div
                key={step.id}
                className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-5 flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div>
                  {/* Step Number & Optional Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold text-white group-hover:bg-brand-600 transition-colors">
                      {step.step}
                    </span>

                    {step.isOptional ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-tealAccent-500/10 border border-tealAccent-500/30 text-tealAccent-300 font-semibold">
                        Optional
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        {step.tag}
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-brand-400 mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description Placeholder */}
                  <div className="text-xs text-slate-300 font-sans leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 mb-3">
                    {step.shortDescription}
                  </div>
                </div>

                {/* Key Conceptual Actions */}
                <div className="pt-3 border-t border-slate-800/80 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-500 font-semibold block">Actions:</span>
                  {step.keyActions.map((act, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-brand-400"></span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Summary Banner */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>Pipeline: Authentication → Ingestion → Normalization → Synthesis</span>
          <span className="text-tealAccent-400">[Conceptual workflow model]</span>
        </div>

      </div>
    </section>
  );
}
