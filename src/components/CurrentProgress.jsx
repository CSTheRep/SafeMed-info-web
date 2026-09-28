import React from 'react';
import SectionHeading from './SectionHeading';
import { projectConfig } from '../data/project';
import { CheckCircle2, Clock, Activity, Flag } from 'lucide-react';

export default function CurrentProgress() {
  const badgeStyles = {
    Completed: "bg-emerald-50 border-emerald-200 text-emerald-800",
    Operational: "bg-[#F7E3E3] border-[#E8A3A3] text-[#A94444]",
    "Academic Phase": "bg-stone-100 border-stone-200 text-stone-700",
    "Active Exploration": "bg-[#FAF7F2] border-[#C95C5C]/30 text-[#A94444]",
    "In Progress": "bg-amber-50 border-amber-200 text-amber-800",
  };

  return (
    <section id="progress" className="py-20 md:py-28 bg-[#FAF7F2] relative border-t border-[#E6D9CF]">
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
              className="rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] p-5 flex flex-col justify-between hover:border-[#C95C5C]/40 transition-colors shadow-sm"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-[#857B78]">
                    STAGE 0{idx + 1}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold ${badgeStyles[item.status] || 'border-[#E6D9CF] text-[#6B6260]'}`}>
                    {item.status}
                  </span>
                </div>

                {/* Milestone Name */}
                <h3 className="text-base font-bold text-[#302B2B] mb-1">
                  {item.milestone}
                </h3>
                <div className="text-xs font-mono text-[#C95C5C] font-semibold mb-3">
                  {item.badge}
                </div>

                {/* Status / Description Placeholder */}
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-sans text-[#6B6260] leading-relaxed">
                  {item.description}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E6D9CF] flex items-center justify-between text-[11px] font-mono text-[#857B78]">
                <span>Phase Review</span>
                <span className="text-[#6B6260]">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Status Disclaimer */}
        <div className="p-4 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] text-xs text-[#857B78] font-mono text-center shadow-sm">
          Note: Milestones are actively tracked as academic validation and model experiments progress.
        </div>

      </div>
    </section>
  );
}
