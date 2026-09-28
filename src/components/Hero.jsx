import React from 'react';
import { ArrowDown, BookOpen, Shield, Cpu, Activity, Atom, GitMerge, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows & Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C95C5C]/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-[#E8A3A3]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Call to Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Academic Track Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFDFC] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C95C5C] animate-pulse"></span>
              <span className="text-[#A94444] font-semibold">PROJECT SHOWCASE</span>
              <span className="text-[#E6D9CF]">•</span>
              <span>Healthcare &amp; Computational Research</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#302B2B] tracking-tight leading-[1.1]">
              SafeMed
            </h1>

            {/* Main Supporting Statement */}
            <p className="text-xl sm:text-2xl font-semibold text-[#A94444] tracking-tight leading-snug">
              A Research-Driven Approach to Safer Adverse Drug Event Reporting
            </p>

            {/* Paragraph strictly without unsupported claims */}
            <p className="text-base sm:text-lg text-[#6B6260] leading-relaxed max-w-2xl font-normal">
              SafeMed is a healthcare technology and research project exploring digital approaches to adverse drug reaction/event reporting, data, artificial intelligence, and emerging computational methods.
            </p>

            {/* Narrative Progression Indicator */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[#857B78]">
              <span className="text-[#857B78]">Continuum:</span>
              <span className="px-2 py-0.5 rounded bg-[#F5EFE6] border border-[#E6D9CF] text-[#6B6260]">Observation</span>
              <span className="text-[#A39894]">→</span>
              <span className="px-2 py-0.5 rounded bg-[#F5EFE6] border border-[#E6D9CF] text-[#6B6260]">Prototype</span>
              <span className="text-[#A39894]">→</span>
              <span className="px-2 py-0.5 rounded bg-[#F5EFE6] border border-[#E6D9CF] text-[#6B6260]">Survey</span>
              <span className="text-[#A39894]">→</span>
              <span className="px-2 py-0.5 rounded bg-[#F7E3E3] border border-[#E8A3A3] text-[#A94444] font-semibold">3 Research Papers</span>
            </div>

            {/* Two Main Hero Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('journey')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FFFDFC] bg-[#C95C5C] hover:bg-[#A94444] rounded-xl shadow-md shadow-[#C95C5C]/20 hover:shadow-[#C95C5C]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#C95C5C] cursor-pointer"
              >
                <span>Explore the Journey</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('research-papers')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#A94444] hover:text-[#C95C5C] bg-[#F7E3E3] hover:bg-[#E8A3A3]/40 border border-[#E8A3A3] rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C95C5C] cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#A94444]" />
                <span>Explore Research</span>
              </button>
            </div>
          </div>

          {/* Right Column: Abstract Conceptual Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] shadow-lg p-6 overflow-hidden">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E6D9CF] text-xs font-mono text-[#857B78]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="ml-2 text-[#302B2B]">safemed-research-mesh.graph</span>
                  </div>
                  <span className="text-[#A94444] font-semibold">STATUS: ACTIVE</span>
                </div>

                {/* Abstract Node Network Graphic */}
                <div className="py-6 relative min-h-[300px] flex items-center justify-center">
                  
                  {/* Background SVG Grid / Interconnections */}
                  <svg className="absolute inset-0 w-full h-full text-[#E6D9CF]" viewBox="0 0 360 280" fill="none">
                    {/* Connecting circuit lines */}
                    <line x1="180" y1="140" x2="60" y2="60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="180" y1="140" x2="300" y2="60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="180" y1="140" x2="60" y2="220" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="180" y1="140" x2="300" y2="220" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="180" cy="140" r="48" stroke="rgba(201, 92, 92, 0.25)" strokeWidth="1" />
                    <circle cx="180" cy="140" r="76" stroke="rgba(232, 163, 163, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>

                  {/* Central Node: SafeMed Engine */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FFFDFC] to-[#F5EFE6] border-2 border-[#C95C5C] flex flex-col items-center justify-center shadow-md shadow-[#C95C5C]/15">
                    <img src="/safemed-icon.png" alt="SafeMed Icon" className="w-4 h-7 object-contain mb-1" />
                    <span className="text-[11px] font-bold text-[#302B2B] tracking-wider">SafeMed</span>
                    <span className="text-[9px] text-[#A94444] font-mono font-bold">CORE</span>
                  </div>

                  {/* Top Left Satellite Node: ADR Telemetry */}
                  <div className="absolute top-2 left-2 z-10 p-3 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] shadow-sm flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#F7E3E3] border border-[#E8A3A3] flex items-center justify-center">
                      <Activity className="w-4 h-4 text-[#A94444]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#302B2B]">ADR Intake</div>
                      <div className="text-[9px] text-[#857B78] font-mono">Patient Signal</div>
                    </div>
                  </div>

                  {/* Top Right Satellite Node: OCR & Documents */}
                  <div className="absolute top-2 right-2 z-10 p-3 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] shadow-sm flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#F7E3E3] border border-[#E8A3A3] flex items-center justify-center">
                      <FileCheck className="w-4 h-4 text-[#C95C5C]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#302B2B]">Vision OCR</div>
                      <div className="text-[9px] text-[#857B78] font-mono">Prescription Extractor</div>
                    </div>
                  </div>

                  {/* Bottom Left Satellite Node: Deep Learning */}
                  <div className="absolute bottom-2 left-2 z-10 p-3 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] shadow-sm flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#F5EFE6] border border-[#E6D9CF] flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-[#A94444]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#302B2B]">Deep Learning</div>
                      <div className="text-[9px] text-[#857B78] font-mono">Neural Encoder</div>
                    </div>
                  </div>

                  {/* Bottom Right Satellite Node: Quantum Models */}
                  <div className="absolute bottom-2 right-2 z-10 p-3 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] shadow-sm flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#F7E3E3] border border-[#E8A3A3] flex items-center justify-center">
                      <Atom className="w-4 h-4 text-[#C95C5C]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-[#302B2B]">Quantum QML</div>
                      <div className="text-[9px] text-[#857B78] font-mono">Hilbert Space</div>
                    </div>
                  </div>
                </div>

                {/* Conceptual Subtitle Bar */}
                <div className="pt-4 border-t border-[#E6D9CF] flex items-center justify-between text-[11px] text-[#857B78] font-mono">
                  <span>Data Flow: User Intake → Model Evaluation</span>
                  <span className="text-[#A94444] font-semibold">3 Papers Linked</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
