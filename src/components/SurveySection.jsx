import React from 'react';
import SectionHeading from './SectionHeading';
import { projectConfig } from '../data/project';
import { Library, Search, Lightbulb, ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function SurveySection() {
  const survey = projectConfig.survey;

  const iconMap = {
    Library: Library,
    Search: Search,
    Lightbulb: Lightbulb,
    ArrowRight: ArrowRight
  };

  return (
    <section id="survey" className="py-20 md:py-28 bg-navy-950/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Literature & Context"
          title={survey.title}
          subtitle={survey.subtitle}
        />

        {/* Narrative Introduction */}
        <div className="max-w-3xl mb-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-sm text-slate-300 font-sans leading-relaxed">
          <p className="font-mono text-xs text-brand-400 font-semibold mb-2">SURVEY TRANSITION NOTE</p>
          <p>{survey.description}</p>
        </div>

        {/* Visual Structure: Existing Work -> Patterns & Gaps -> Research Opportunities -> Next Direction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {survey.framework.map((step, idx) => {
            const Icon = iconMap[step.icon] || BookOpen;
            return (
              <div
                key={step.title}
                className="relative rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-tealAccent-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <div className="text-xs font-sans text-slate-300/90 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
                    {step.desc}
                  </div>
                </div>

                {idx < survey.framework.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-500">
                    <ArrowRight className="w-3 h-3 mx-auto" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Required Academic Survey Placeholders Grid */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-5 h-5 text-tealAccent-400" />
            <h3 className="text-lg font-bold text-white">
              Systematic Survey &amp; Literature Placeholders
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            {/* Objective */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
              <span className="font-mono uppercase text-brand-400 font-bold block">1. Survey Objective</span>
              <p className="text-slate-300 font-sans leading-relaxed">{survey.placeholders.objective}</p>
            </div>

            {/* Scope */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
              <span className="font-mono uppercase text-tealAccent-400 font-bold block">2. Investigation Scope</span>
              <p className="text-slate-300 font-sans leading-relaxed">{survey.placeholders.scope}</p>
            </div>

            {/* Existing Approaches */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
              <span className="font-mono uppercase text-indigo-400 font-bold block">3. Existing Approaches</span>
              <p className="text-slate-300 font-sans leading-relaxed">{survey.placeholders.approaches}</p>
            </div>

            {/* Observed Gaps */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2 md:col-span-2 lg:col-span-1">
              <span className="font-mono uppercase text-amber-400 font-bold block">4. Observed Gaps</span>
              <p className="text-slate-300 font-sans leading-relaxed">{survey.placeholders.gaps}</p>
            </div>

            {/* Research Opportunity */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2 md:col-span-2">
              <span className="font-mono uppercase text-purple-400 font-bold block">5. Research Opportunity</span>
              <p className="text-slate-300 font-sans leading-relaxed">{survey.placeholders.opportunity}</p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
            <span>Research Foundation</span>
            <span>Literature Survey Framework</span>
          </div>
        </div>

      </div>
    </section>
  );
}
