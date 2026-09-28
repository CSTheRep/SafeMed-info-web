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
    <section id="origin-story" className="py-20 md:py-28 relative overflow-hidden bg-[#F5EFE6] border-t border-[#E6D9CF]">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C95C5C]/5 blur-[120px] rounded-full pointer-events-none" />

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
            <div className="rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] p-8 shadow-md relative">
              <div className="w-8 h-8 rounded-lg bg-[#F7E3E3] border border-[#E8A3A3] flex items-center justify-center text-[#A94444] mb-6">
                <Sparkles className="w-4 h-4" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#302B2B] tracking-tight mb-4">
                The Spark of Observation
              </h3>
              
              <div className="bg-[#FAF7F2] border-l-2 border-[#C95C5C] p-5 rounded-r-xl my-4 text-[#302B2B] font-mono text-sm leading-relaxed">
                <span className="text-xs text-[#A94444] font-semibold block mb-1">REAL-WORLD CATALYST</span>
                {origin.quote}
              </div>

              <p className="text-[#6B6260] text-sm leading-relaxed mt-4">
                SafeMed was not conceived in a vacuum or as a generic academic exercise. It began with an immediate recognition of how precarious medication safety can be when patients encounter adverse reactions, yet face fragmented avenues to log, verify, and understand what is happening.
              </p>

              <div className="mt-6 pt-4 border-t border-[#E6D9CF] flex items-center justify-between text-xs text-[#857B78] font-mono">
                <span>Phase 01: Formative Inception</span>
                <span className="text-[#A94444] font-semibold">Real Encounter → Scientific Goal</span>
              </div>
            </div>
          </div>

          {/* Connected Evolution Column (Right) */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#857B78] mb-2 flex items-center gap-2">
                <span>Narrative Arc</span>
                <span className="h-px bg-[#E6D9CF] flex-1"></span>
              </div>

              {origin.steps.map((step, idx) => {
                const Icon = stepIcons[idx] || Lightbulb;
                return (
                  <div
                    key={step.stage}
                    className="relative flex items-start gap-4 p-5 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] hover:border-[#E8A3A3] transition-colors shadow-sm"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F7E3E3] border border-[#E8A3A3] flex items-center justify-center text-[#A94444] font-bold text-xs">
                      {step.stage}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#A94444] font-semibold">
                          {step.label}
                        </span>
                        <span className="text-[#E6D9CF]">•</span>
                        <h4 className="text-base font-bold text-[#302B2B]">
                          {step.title}
                        </h4>
                      </div>

                      <div className="mt-2 text-xs font-sans text-[#6B6260] bg-[#FAF7F2] p-3 rounded-lg border border-[#E6D9CF] leading-relaxed">
                        {step.description}
                      </div>
                    </div>

                    {idx < origin.steps.length - 1 && (
                      <div className="hidden sm:flex self-center text-[#E6D9CF]">
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
