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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-tealAccent-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Call to Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Academic Track Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tealAccent-400 animate-pulse"></span>
              <span className="text-tealAccent-400 font-semibold">PROJECT SHOWCASE</span>
              <span className="text-slate-500">•</span>
              <span>Healthcare &amp; Computational Research</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              SafeMed
            </h1>

            {/* Main Supporting Statement */}
            <p className="text-xl sm:text-2xl font-semibold text-brand-300 tracking-tight leading-snug">
              A Research-Driven Approach to Safer Adverse Drug Event Reporting
            </p>

            {/* Paragraph strictly without unsupported claims */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              SafeMed is a healthcare technology and research project exploring digital approaches to adverse drug reaction/event reporting, data, artificial intelligence, and emerging computational methods.
            </p>

            {/* Narrative Progression Indicator */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Continuum:</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">Observation</span>
              <span className="text-slate-600">→</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">Prototype</span>
              <span className="text-slate-600">→</span>
              <span className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 text-slate-300">Survey</span>
              <span className="text-slate-600">→</span>
              <span className="px-2 py-0.5 rounded bg-brand-950/80 border border-brand-500/40 text-brand-300 font-semibold">3 Research Papers</span>
            </div>

            {/* Two Main Hero Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('journey')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-tealAccent-600 hover:from-brand-500 hover:to-tealAccent-500 rounded-xl shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-brand-400 cursor-pointer"
              >
                <span>Explore the Journey</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('research-papers')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-tealAccent-400" />
                <span>Explore Research</span>
              </button>
            </div>
          </div>

          {/* Right Column: Abstract Conceptual Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-slate-300">safemed-research-mesh.graph</span>
                  </div>
                  <span className="text-tealAccent-400">STATUS: ACTIVE</span>
                </div>

                {/* Abstract Node Network Graphic */}
                <div className="py-6 relative min-h-[300px] flex items-center justify-center">
                  
                  {/* Background SVG Grid / Interconnections */}
                  <svg className="absolute inset-0 w-full h-full text-slate-800/80" viewBox="0 0 360 280" fill="none">
                    {/* Connecting circuit lines */}
                    <line x1="180" y1="140" x2="60" y2="60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="180" y1="140" x2="300" y2="60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="180" y1="140" x2="60" y2="220" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="180" y1="140" x2="300" y2="220" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="180" cy="140" r="48" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="1" />
                    <circle cx="180" cy="140" r="76" stroke="rgba(20, 184, 166, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>

                  {/* Central Node: SafeMed Engine */}
                  <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-900 to-navy-900 border-2 border-brand-500/80 flex flex-col items-center justify-center shadow-lg shadow-brand-500/30">
                    <Shield className="w-7 h-7 text-brand-400 mb-1" />
                    <span className="text-[11px] font-bold text-white tracking-wider">SafeMed</span>
                    <span className="text-[9px] text-tealAccent-400 font-mono">CORE</span>
                  </div>

                  {/* Top Left Satellite Node: ADR Telemetry */}
                  <div className="absolute top-2 left-2 z-10 p-3 rounded-xl bg-slate-900/90 border border-slate-700 shadow-md flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-rose-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">ADR Intake</div>
                      <div className="text-[9px] text-slate-400 font-mono">Patient Signal</div>
                    </div>
                  </div>

                  {/* Top Right Satellite Node: OCR & Documents */}
                  <div className="absolute top-2 right-2 z-10 p-3 rounded-xl bg-slate-900/90 border border-slate-700 shadow-md flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-tealAccent-500/10 border border-tealAccent-500/20 flex items-center justify-center">
                      <FileCheck className="w-4 h-4 text-tealAccent-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">Vision OCR</div>
                      <div className="text-[9px] text-slate-400 font-mono">Prescription Extractor</div>
                    </div>
                  </div>

                  {/* Bottom Left Satellite Node: Deep Learning */}
                  <div className="absolute bottom-2 left-2 z-10 p-3 rounded-xl bg-slate-900/90 border border-slate-700 shadow-md flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">Deep Learning</div>
                      <div className="text-[9px] text-slate-400 font-mono">Neural Encoder</div>
                    </div>
                  </div>

                  {/* Bottom Right Satellite Node: Quantum Models */}
                  <div className="absolute bottom-2 right-2 z-10 p-3 rounded-xl bg-slate-900/90 border border-slate-700 shadow-md flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <Atom className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">Quantum QML</div>
                      <div className="text-[9px] text-slate-400 font-mono">Hilbert Space</div>
                    </div>
                  </div>
                </div>

                {/* Conceptual Subtitle Bar */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Data Flow: User Intake → Model Evaluation</span>
                  <span className="text-brand-400">3 Papers Linked</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
