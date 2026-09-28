import React from 'react';
import SectionHeading from './SectionHeading';
import { technologies } from '../data/technology';
import { 
  Layers, 
  Palette, 
  Server, 
  BarChart2, 
  Database, 
  Sparkles, 
  Network, 
  ScanLine, 
  Brain,
  Code2
} from 'lucide-react';

export default function TechnologyStack() {
  const iconMap = {
    Layers: Layers,
    Palette: Palette,
    Server: Server,
    BarChart2: BarChart2,
    Database: Database,
    Sparkles: Sparkles,
    Network: Network,
    ScanLine: ScanLine,
    Brain: Brain
  };

  return (
    <section id="technology" className="py-20 md:py-28 bg-[#FAF7F2] relative border-t border-[#E6D9CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Engineering Foundation"
          title="Technology Behind SafeMed"
          subtitle="The modern web frameworks, AI libraries, vision extractors, and datastores powering the project prototype and research."
        />

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const Icon = iconMap[tech.icon] || Code2;
            return (
              <div
                key={tech.name}
                className="rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] p-6 flex flex-col justify-between hover:border-[#C95C5C]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] flex items-center justify-center text-[#A94444] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6260] px-2 py-0.5 rounded bg-[#F5EFE6] border border-[#E6D9CF]">
                      {tech.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#302B2B] mb-1 group-hover:text-[#A94444] transition-colors">
                    {tech.name}
                  </h3>

                  <div className="text-xs font-mono text-[#C95C5C] font-semibold mb-3">
                    {tech.category}
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-sans text-[#6B6260] leading-relaxed">
                    {tech.summary}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E6D9CF] flex items-center justify-between text-[11px] font-mono text-[#857B78]">
                  <span>Component Layer</span>
                  <span className="text-[#6B6260]">{tech.name}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
