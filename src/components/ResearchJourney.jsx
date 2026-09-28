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
    <section id="journey" className="py-20 md:py-32 relative bg-[#FAF7F2] border-t border-[#E6D9CF]">
      
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C95C5C]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Centerpiece Timeline"
          title="The Research Journey"
          subtitle="A progressive, multi-stage evolution from a real-world observation to hybrid quantum-classical deep learning architectures."
        />

        {/* Narrative Flow Bar */}
        <div className="mb-12 p-4 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] flex flex-wrap items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C95C5C]"></span>
            <span className="text-[#857B78] font-semibold uppercase">Progression Thread:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#6B6260]">
            <span>Experience</span>
            <span className="text-[#C95C5C]">→</span>
            <span>Prototype</span>
            <span className="text-[#C95C5C]">→</span>
            <span>Survey</span>
            <span className="text-[#C95C5C]">→</span>
            <span className="text-[#302B2B]">Research 1</span>
            <span className="text-[#C95C5C]">→</span>
            <span className="text-[#302B2B] font-semibold">Quantum Models</span>
            <span className="text-[#C95C5C]">→</span>
            <span className="text-[#A94444] font-bold">Deep Learning + Quantum</span>
          </div>
        </div>

        {/* Desktop Horizontal Milestone Stepper / Tabs */}
        <div className="hidden lg:block mb-12">
          <div className="grid grid-cols-6 gap-2 bg-[#FFFDFC] p-2 rounded-2xl border border-[#E6D9CF] shadow-sm">
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
                      ? 'bg-[#F5EFE6] text-[#302B2B] shadow-sm border border-[#C95C5C]'
                      : 'text-[#6B6260] hover:text-[#302B2B] hover:bg-[#FAF7F2] border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-[#C95C5C] text-[#FFFDFC]' : 'bg-[#F5EFE6] text-[#6B6260] border border-[#E6D9CF]'
                    }`}>
                      {stage.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#A94444]' : 'text-[#857B78]'}`} />
                  </div>
                  <div className="text-xs font-bold truncate text-[#302B2B]">
                    {stage.title}
                  </div>
                  <div className="text-[10px] text-[#857B78] truncate">
                    {stage.phase}
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F5EFE6] rotate-45 border-r border-b border-[#C95C5C]" />
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
              <div className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-8 shadow-xl relative overflow-hidden animate-fadeIn">
                <div className="grid grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Number, Title, Core Text */}
                  <div className="col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#F7E3E3] border border-[#E8A3A3] flex items-center justify-center text-[#A94444]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#A94444]">STAGE {current.step}</span>
                          <span className="text-[#E6D9CF]">•</span>
                          <span className="text-xs font-mono text-[#857B78] flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {current.year}
                          </span>
                        </div>
                        <h3 className="text-2xl font-extrabold text-[#302B2B]">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-[#6B6260] leading-relaxed font-normal">
                      {current.shortSummary}
                    </p>

                    {/* Placeholder Box */}
                    <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] font-mono text-xs text-[#6B6260] leading-relaxed">
                      <span className="text-[#A94444] font-semibold block mb-1">STAGE PLACEHOLDER DETAIL:</span>
                      {current.description}
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-mono text-[#857B78] uppercase tracking-wider block mb-1">
                        Evolutionary Connection
                      </span>
                      <p className="text-xs text-[#302B2B] italic bg-[#F5EFE6] p-3 rounded-lg border border-[#E6D9CF]">
                        "{current.progressionNote}"
                      </p>
                    </div>

                    {current.researchId && (
                      <div className="pt-4">
                        <Link
                          to={`/research/${current.researchId}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#FFFDFC] bg-[#C95C5C] hover:bg-[#A94444] transition-colors shadow-md shadow-[#C95C5C]/20"
                        >
                          <span>Open Research Paper 0{current.researchId} Detail</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Key Insight and Details Checklist */}
                  <div className="col-span-5 space-y-4">
                    <div className="p-5 rounded-xl bg-[#F7E3E3]/40 border border-[#E8A3A3] space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#A94444] font-semibold uppercase">
                        <Layers className="w-4 h-4" />
                        <span>Key Insight</span>
                      </div>
                      <p className="text-sm font-medium text-[#302B2B] leading-relaxed">
                        {current.keyInsight}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] space-y-3">
                      <span className="text-xs font-mono text-[#857B78] uppercase tracking-wider font-semibold block">
                        Stage Attributes
                      </span>
                      {current.details.map((d, i) => (
                        <div key={i} className="text-xs border-b border-[#E6D9CF] pb-2 last:border-none last:pb-0">
                          <span className="text-[#857B78] font-mono block">{d.label}:</span>
                          <span className="text-[#302B2B] font-sans">{d.value}</span>
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
                className="relative rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] p-6 space-y-4 shadow-sm transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F7E3E3] border border-[#E8A3A3] flex items-center justify-center text-[#A94444] font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="font-bold text-[#A94444]">STAGE {stage.step}</span>
                        <span className="text-[#E6D9CF]">•</span>
                        <span className="text-[#857B78]">{stage.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#302B2B]">
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExpand(idx)}
                    className="p-1.5 rounded-lg bg-[#F5EFE6] text-[#6B6260] hover:text-[#302B2B]"
                    aria-label="Toggle details"
                  >
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </button>
                </div>

                <p className="text-sm text-[#6B6260] leading-relaxed font-normal">
                  {stage.shortSummary}
                </p>

                {/* Collapsible / Expandable Details */}
                {isExpanded && (
                  <div className="space-y-3 pt-3 border-t border-[#E6D9CF] animate-fadeIn">
                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed">
                      <span className="text-[#A94444] font-bold block mb-1">PLACEHOLDER:</span>
                      {stage.description}
                    </div>

                    <div className="text-xs text-[#302B2B] italic bg-[#F5EFE6] p-3 rounded-lg border border-[#E6D9CF]">
                      "{stage.progressionNote}"
                    </div>

                    {stage.researchId && (
                      <div className="pt-2">
                        <Link
                          to={`/research/${stage.researchId}`}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#FFFDFC] bg-[#C95C5C] hover:bg-[#A94444]"
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
