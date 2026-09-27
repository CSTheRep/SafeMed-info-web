import React from 'react';
import SectionHeading from './SectionHeading';
import { projectConfig } from '../data/project';
import { Sparkles, Eye, AlertCircle, Lightbulb, ArrowRight } from 'lucide-react';

export default function OriginStory() {
  const origin = projectConfig.origin;

  const stepIcons = [
    Sparkles,
    Eye,
    AlertCircle,
    Lightbulb
  ];

  return (
    <section id="origin-story" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-navy-950/40 via-navy-900/30 to-navy-950/60 border-t border-slate-900">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Origin Narrative"
          title={origin.title}
          subtitle={origin.subtitle}
        />

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Main Story Narrative Block (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-8 shadow-xl relative">
              <div className="w-8 h-8 rounded-lg bg-tealAccent-500/10 border border-tealAccent-500/20 flex items-center justify-center text-tealAccent-400 mb-6">
                <Sparkles className="w-4 h-4" />
              </div>
              
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                The Spark of Observation
              </h3>
              
              <div className="bg-slate-950/70 border-l-2 border-brand-500 p-5 rounded-r-xl my-4 text-slate-300 font-mono text-sm leading-relaxed">
                <span className="text-xs text-brand-400 font-semibold block mb-1">REAL-WORLD CATALYST</span>
                {origin.quote}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mt-4">
                SafeMed was not conceived in a vacuum or as a generic academic exercise. It began with an immediate recognition of how precarious medication safety can be when patients encounter adverse reactions, yet face fragmented avenues to log, verify, and understand what is happening.
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Phase 01: Formative Inception</span>
                <span className="text-tealAccent-400 font-semibold">Real Encounter → Scientific Goal</span>
              </div>
            </div>
          </div>

          {/* Connected Evolution Column (Right) */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <span>Narrative Arc</span>
                <span className="h-px bg-slate-800 flex-1"></span>
              </div>

              {origin.steps.map((step, idx) => {
                const Icon = stepIcons[idx] || Lightbulb;
                return (
                  <div
                    key={step.stage}
                    className="relative flex items-start gap-4 p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-400 font-bold text-xs">
                      {step.stage}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-tealAccent-400 font-semibold">
                          {step.label}
                        </span>
                        <span className="text-slate-600">•</span>
                        <h4 className="text-base font-bold text-white">
                          {step.title}
                        </h4>
                      </div>

                      <div className="mt-2 text-xs font-sans text-slate-300/90 bg-slate-950/40 p-3 rounded-lg border border-slate-800/60 leading-relaxed">
                        {step.description}
                      </div>
                    </div>

                    {idx < origin.steps.length - 1 && (
                      <div className="hidden sm:flex self-center text-slate-600">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
