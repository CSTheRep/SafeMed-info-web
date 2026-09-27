import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { journeyStages } from '../data/journey';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  AppWindow, 
  Compass, 
  FileText, 
  Atom, 
  Sparkles, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink,
  Calendar,
  Layers
} from 'lucide-react';

export default function ResearchJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});

  const iconComponents = {
    Lightbulb: Lightbulb,
    AppWindow: AppWindow,
    Compass: Compass,
    FileText: FileText,
    Atom: Atom,
    Sparkles: Sparkles,
  };

  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="journey" className="py-20 md:py-32 relative bg-navy-950 border-t border-slate-900">
      
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Centerpiece Timeline"
          title="The Research Journey"
          subtitle="A progressive, multi-stage evolution from a real-world observation to hybrid quantum-classical deep learning architectures."
        />

        {/* Narrative Flow Bar */}
        <div className="mb-12 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-300 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-400"></span>
            <span className="text-slate-400 font-semibold uppercase">Progression Thread:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
            <span>Experience</span>
            <span className="text-brand-500">→</span>
            <span>Prototype</span>
            <span className="text-brand-500">→</span>
            <span>Survey</span>
            <span className="text-brand-500">→</span>
            <span className="text-slate-200">Research 1</span>
            <span className="text-brand-500">→</span>
            <span className="text-slate-200 font-semibold text-purple-300">Quantum Models</span>
            <span className="text-brand-500">→</span>
            <span className="text-brand-300 font-bold">Deep Learning + Quantum</span>
          </div>
        </div>

        {/* Desktop Horizontal Milestone Stepper / Tabs */}
        <div className="hidden lg:block mb-12">
          <div className="grid grid-cols-6 gap-2 bg-slate-900/80 p-2 rounded-2xl border border-slate-800">
            {journeyStages.map((stage, idx) => {
              const Icon = iconComponents[stage.icon] || Lightbulb;
              const isActive = activeStep === idx;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-3.5 rounded-xl transition-all relative ${
                    isActive
                      ? 'bg-slate-800 text-white shadow-lg border border-brand-500/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {stage.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-tealAccent-400' : 'text-slate-500'}`} />
                  </div>
                  <div className="text-xs font-bold truncate text-white">
                    {stage.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {stage.phase}
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800 rotate-45 border-r border-b border-brand-500/40" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Spotlight (Desktop & Featured View) */}
        <div className="hidden lg:block mb-16">
          {(() => {
            const current = journeyStages[activeStep];
            const Icon = iconComponents[current.icon] || Lightbulb;
            return (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl relative overflow-hidden animate-fadeIn">
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Number, Title, Core Text */}
                  <div className="col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-tealAccent-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-brand-400">STAGE {current.step}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {current.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-white">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-slate-300 leading-relaxed font-normal">
                      {current.shortSummary}
                    </p>

                    {/* Placeholder Box */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 font-mono text-xs text-slate-400 leading-relaxed">
                      <span className="text-tealAccent-400 font-semibold block mb-1">STAGE PLACEHOLDER DETAIL:</span>
                      {current.description}
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">
                        Evolutionary Connection
                      </span>
                      <p className="text-xs text-slate-300 italic bg-slate-900 p-3 rounded-lg border border-slate-800">
                        "{current.progressionNote}"
                      </p>
                    </div>

                    {current.researchId && (
                      <div className="pt-4">
                        <Link
                          to={`/research/${current.researchId}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors shadow-md"
                        >
                          <span>Open Research Paper 0{current.researchId} Detail</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Key Insight and Details Checklist */}
                  <div className="col-span-5 space-y-4">
                    <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-brand-400 font-semibold uppercase">
                        <Layers className="w-4 h-4" />
                        <span>Key Insight</span>
                      </div>
                      <p className="text-sm font-medium text-slate-200 leading-relaxed">
                        {current.keyInsight}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-slate-950/50 border border-slate-800 space-y-3">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">
                        Stage Attributes
                      </span>
                      {current.details.map((d, i) => (
                        <div key={i} className="text-xs border-b border-slate-900 pb-2 last:border-none last:pb-0">
                          <span className="text-slate-400 font-mono block">{d.label}:</span>
                          <span className="text-slate-200 font-sans">{d.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}
        </div>

        {/* Mobile & Tablet Full Vertical Interactive Timeline */}
        <div className="space-y-6 lg:hidden">
          {journeyStages.map((stage, idx) => {
            const Icon = iconComponents[stage.icon] || Lightbulb;
            const isExpanded = expandedCards[idx] ?? (idx === 0);

            return (
              <div
                key={stage.step}
                className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 space-y-4 shadow-md transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-tealAccent-400 font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="font-bold text-brand-400">STAGE {stage.step}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-400">{stage.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExpand(idx)}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                    aria-label="Toggle details"
                  >
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {stage.shortSummary}
                </p>

                {/* Collapsible / Expandable Details */}
                {isExpanded && (
                  <div className="space-y-3 pt-3 border-t border-slate-800 animate-fadeIn">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed">
                      <span className="text-tealAccent-400 font-bold block mb-1">PLACEHOLDER:</span>
                      {stage.description}
                    </div>

                    <div className="text-xs text-slate-300 italic bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                      "{stage.progressionNote}"
                    </div>

                    {stage.researchId && (
                      <div className="pt-2">
                        <Link
                          to={`/research/${stage.researchId}`}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500"
                        >
                          <span>Open Research Paper 0{stage.researchId}</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
