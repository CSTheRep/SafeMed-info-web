import React from 'react';
import SectionHeading from './SectionHeading';
import { projectConfig } from '../data/project';
import { AlertTriangle, GitBranch, Cpu, Target } from 'lucide-react';

export default function WhySafeMed() {
  const iconMap = {
    AlertTriangle: AlertTriangle,
    GitBranch: GitBranch,
    Cpu: Cpu,
    Target: Target,
  };

  const borderAccents = {
    problem: "hover:border-[#E8A3A3] group-hover:text-[#A94444]",
    gap: "hover:border-[#E8A3A3] group-hover:text-[#A94444]",
    opportunity: "hover:border-[#E8A3A3] group-hover:text-[#A94444]",
    goal: "hover:border-[#E8A3A3] group-hover:text-[#A94444]",
  };

  const badgeColors = {
    problem: "text-[#B7791F] bg-[#FEFCBF] border-[#F6E05E]",
    gap: "text-[#A94444] bg-[#F7E3E3] border-[#E8A3A3]",
    opportunity: "text-[#C95C5C] bg-[#F7E3E3] border-[#E8A3A3]",
    goal: "text-[#A94444] bg-[#F5EFE6] border-[#E6D9CF]",
  };

  return (
    <section id="why-safemed" className="py-20 md:py-28 bg-[#FAF7F2] relative border-t border-[#E6D9CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Motivation & Context"
          title="Why SafeMed?"
          subtitle="Understanding the systemic friction in adverse drug event reporting and the clinical rationale that prompted this research exploration."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectConfig.whySafeMed.map((item) => {
            const IconComponent = iconMap[item.icon] || AlertTriangle;
            return (
              <div
                key={item.id}
                className={`group rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] p-6 flex flex-col justify-between transition-all duration-300 ${borderAccents[item.id] || 'hover:border-[#E8A3A3]'} hover:-translate-y-1 hover:shadow-md hover:shadow-[#C95C5C]/5`}
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E6D9CF] flex items-center justify-center text-[#A94444] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border ${badgeColors[item.id]}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#302B2B] mb-3 group-hover:text-[#A94444] transition-colors">
                    {item.title}
                  </h3>

                  {/* Placeholder Content */}
                  <div className="text-sm text-[#6B6260] leading-relaxed bg-[#FAF7F2] p-4 rounded-xl border border-[#E6D9CF]">
                    <p className="font-normal font-sans">
                      {item.content}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-6 pt-4 border-t border-[#E6D9CF] flex items-center justify-between text-xs text-[#857B78] font-mono">
                  <span>Context Card</span>
                  <span className="uppercase">{item.id}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
