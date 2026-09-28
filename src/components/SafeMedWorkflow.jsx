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
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F5EFE6] relative border-t border-[#E6D9CF]">
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
                className="relative rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] p-5 flex flex-col justify-between hover:border-[#C95C5C]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm group"
              >
                <div>
                  {/* Step Number & Optional Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#F5EFE6] border border-[#E6D9CF] flex items-center justify-center font-mono text-xs font-bold text-[#302B2B] group-hover:bg-[#C95C5C] group-hover:text-[#FFFDFC] transition-colors">
                      {step.step}
                    </span>

                    {step.isOptional ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F7E3E3] border border-[#E8A3A3] text-[#A94444] font-semibold">
                        Optional
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-[#857B78] uppercase">
                        {step.tag}
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] flex items-center justify-center text-[#A94444] mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#302B2B] mb-2 group-hover:text-[#A94444] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description Placeholder */}
                  <div className="text-xs text-[#6B6260] font-sans leading-relaxed bg-[#FAF7F2] p-3 rounded-lg border border-[#E6D9CF] mb-3">
                    {step.shortDescription}
                  </div>
                </div>

                {/* Key Conceptual Actions */}
                <div className="pt-3 border-t border-[#E6D9CF] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#857B78] font-semibold block">Actions:</span>
                  {step.keyActions.map((act, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#6B6260]">
                      <span className="w-1 h-1 rounded-full bg-[#C95C5C]"></span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Summary Banner */}
        <div className="p-4 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-sm">
          <span>Pipeline: Authentication → Ingestion → Normalization → Synthesis</span>
          <span className="text-[#A94444] font-semibold">[Conceptual workflow model]</span>
        </div>

      </div>
    </section>
  );
}
