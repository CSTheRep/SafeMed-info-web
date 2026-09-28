import React from 'react';
import SectionHeading from './SectionHeading';
import { architectureFlow } from '../data/architecture';
import { User, Monitor, Server, Cpu, Brain, Database, BarChart3, ArrowDown, Network } from 'lucide-react';

export default function ArchitectureDiagram() {
  const iconMap = {
    User: User,
    Monitor: Monitor,
    Server: Server,
    Cpu: Cpu,
    Brain: Brain,
    Database: Database,
    BarChart3: BarChart3
  };

  return (
    <section id="architecture" className="py-20 md:py-28 bg-[#F5EFE6] relative border-t border-[#E6D9CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="System Overview"
          title="High-Level System Architecture"
          subtitle="A conceptual multi-tier framework orchestrating client intake, document extraction, intelligent inference, and statistical reporting."
        />

        {/* Conceptual Diagram Container */}
        <div className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-6 md:p-10 shadow-sm relative">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#E6D9CF] gap-2">
            <div className="flex items-center gap-2">
              <Network className="w-5 h-5 text-[#C95C5C]" />
              <span className="text-sm font-bold text-[#302B2B] tracking-wide">
                SafeMed Conceptual Pipeline Stack
              </span>
            </div>
            
            {/* Required Note */}
            <span className="text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              [Detailed architecture will be updated later]
            </span>
          </div>

          {/* Vertical / Linear Flow of Architecture Layers */}
          <div className="space-y-4">
            {architectureFlow.map((layer, idx) => {
              const Icon = iconMap[layer.icon] || Server;
              return (
                <div key={layer.id} className="relative">
                  <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] hover:border-[#C95C5C]/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Layer Identifier & Icon */}
                    <div className="flex items-center gap-3 md:w-1/3">
                      <div className="w-10 h-10 rounded-lg bg-[#FFFDFC] border border-[#E6D9CF] flex items-center justify-center text-[#A94444] flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-[#C95C5C]">LAYER {layer.layer}</span>
                          <span className="text-[#857B78]">•</span>
                          <span className="text-[10px] font-mono text-[#6B6260] uppercase">{layer.role}</span>
                        </div>
                        <h4 className="text-base font-bold text-[#302B2B]">
                          {layer.title}
                        </h4>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:w-1/3 text-xs text-[#6B6260] font-sans leading-relaxed">
                      {layer.details}
                    </div>

                    {/* Sub-Components Pills */}
                    <div className="md:w-1/3 flex flex-wrap gap-1.5 justify-start md:justify-end">
                      {layer.subItems.map((sub, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#FFFDFC] border border-[#E6D9CF] text-[#6B6260]"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Flow Arrow between layers */}
                  {idx < architectureFlow.length - 1 && (
                    <div className="flex justify-center my-1 text-[#857B78]">
                      <ArrowDown className="w-4 h-4 text-[#857B78]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-4 border-t border-[#E6D9CF] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#857B78] gap-2">
            <span>Modular decoupled services • Microservice / Serverless compatible</span>
            <span className="text-[#C95C5C] font-medium">SafeMed Architecture Blueprint</span>
          </div>

        </div>

      </div>
    </section>
  );
}
