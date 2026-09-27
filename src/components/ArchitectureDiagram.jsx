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
    <section id="architecture" className="py-20 md:py-28 bg-navy-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="System Overview"
          title="High-Level System Architecture"
          subtitle="A conceptual multi-tier framework orchestrating client intake, document extraction, intelligent inference, and statistical reporting."
        />

        {/* Conceptual Diagram Container */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-10 shadow-2xl relative">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-2">
            <div className="flex items-center gap-2">
              <Network className="w-5 h-5 text-tealAccent-400" />
              <span className="text-sm font-bold text-white tracking-wide">
                SafeMed Conceptual Pipeline Stack
              </span>
            </div>
            
            {/* Required Note */}
            <span className="text-xs font-mono text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              [Detailed architecture will be updated later]
            </span>
          </div>

          {/* Vertical / Linear Flow of Architecture Layers */}
          <div className="space-y-4">
            {architectureFlow.map((layer, idx) => {
              const Icon = iconMap[layer.icon] || Server;
              return (
                <div key={layer.id} className="relative">
                  <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Layer Identifier & Icon */}
                    <div className="flex items-center gap-3 md:w-1/3">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-tealAccent-400 flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-brand-400">LAYER {layer.layer}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-[10px] font-mono text-slate-400 uppercase">{layer.role}</span>
                        </div>
                        <h4 className="text-base font-bold text-white">
                          {layer.title}
                        </h4>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:w-1/3 text-xs text-slate-300 font-sans leading-relaxed">
                      {layer.details}
                    </div>

                    {/* Sub-Components Pills */}
                    <div className="md:w-1/3 flex flex-wrap gap-1.5 justify-start md:justify-end">
                      {layer.subItems.map((sub, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Flow Arrow between layers */}
                  {idx < architectureFlow.length - 1 && (
                    <div className="flex justify-center my-1 text-slate-700">
                      <ArrowDown className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
            <span>Modular decoupled services • Microservice / Serverless compatible</span>
            <span className="text-tealAccent-400 font-medium">SafeMed Architecture Blueprint</span>
          </div>

        </div>

      </div>
    </section>
  );
}
