import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { projectConfig } from '../data/project';
import { AppWindow, CheckCircle, ArrowRight, Scan, ShieldCheck, BarChart3, Layers, FileText } from 'lucide-react';

export default function PrototypeSection() {
  const [activeTab, setActiveTab] = useState('adr-form');
  const prototype = projectConfig.prototype;

  return (
    <section id="prototype" className="py-20 md:py-28 bg-navy-950/80 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Initial Engineering"
          title={prototype.title}
          subtitle={prototype.subtitle}
        />

        {/* Visual Progression: Idea -> Concept -> Prototype */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {prototype.progression.map((prog, idx) => (
              <div
                key={prog.step}
                className="relative p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    idx === 2 ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {prog.step}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{prog.label}</div>
                    <div className="text-xs text-slate-400">{prog.note}</div>
                  </div>
                </div>
                {idx < 2 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-slate-600" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content & Stylized Mock Application Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Descriptive Context & Features */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold">
                Prototype Rationale
              </span>
              <h3 className="text-xl font-bold text-white">
                Validating the Intake Pipeline
              </h3>
              
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs font-mono text-slate-300 leading-relaxed">
                {prototype.description}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                The prototype proved that consolidating prescription intake, OCR, and symptom logging into a single cohesive interface dramatically simplified adverse reaction capture. However, turning raw inputs into scientifically rigorous pharmacovigilance intelligence revealed deeper computational challenges.
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                  Core Prototype Capabilities:
                </span>
                {prototype.features.map((feat) => (
                  <div key={feat.name} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-tealAccent-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-white">{feat.name}: </span>
                      <span className="text-xs text-slate-400">{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Mock Interface (Clearly Labeled Early SafeMed Prototype) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-3 text-xs font-mono text-slate-300 font-medium">
                    safemed-web-client :: prototype-v1.0
                  </span>
                </div>
                
                {/* Prominent Prototype Label */}
                <div className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider">
                  {prototype.badge}
                </div>
              </div>

              {/* Sub-bar / Tabs for prototype views */}
              <div className="px-4 py-2 bg-slate-900/80 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('adr-form')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                    activeTab === 'adr-form' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>ADR Intake Wizard</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('ocr')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                    activeTab === 'ocr' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Scan className="w-3.5 h-3.5" />
                  <span>Prescription OCR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('analytics')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                    activeTab === 'analytics' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Reaction Stats</span>
                </button>
              </div>

              {/* Mockup Screen Viewport */}
              <div className="p-6 bg-slate-950/60 min-h-[340px] flex flex-col justify-center">
                
                {activeTab === 'adr-form' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                      <span className="font-mono text-slate-400">Step 2 of 4: Symptom Documentation</span>
                      <span className="text-tealAccent-400 font-mono">Draft Mode</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <label className="text-[10px] uppercase font-mono text-slate-500 block mb-1">Medication Name</label>
                        <div className="text-slate-200 font-mono">Amoxicillin Clavulanate (Parsed via OCR)</div>
                      </div>
                      <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                        <label className="text-[10px] uppercase font-mono text-slate-500 block mb-1">Onset Latency</label>
                        <div className="text-slate-200 font-mono">~3 hours post-ingestion</div>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                      <label className="text-[10px] uppercase font-mono text-slate-500 block mb-1">Observed Symptoms / Narrative</label>
                      <div className="text-slate-300 font-sans italic bg-slate-950 p-2.5 rounded border border-slate-800">
                        "Mild cutaneous rash on forearms, accompanied by pruritus and minor gastrointestinal discomfort."
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500 font-mono">
                      <span>Simulated Form Workflow</span>
                      <span className="text-brand-400 font-semibold">[Early Prototype Architecture]</span>
                    </div>
                  </div>
                )}

                {activeTab === 'ocr' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="p-4 rounded-xl border border-dashed border-slate-700 bg-slate-900/60 text-center space-y-2">
                      <Scan className="w-8 h-8 text-tealAccent-400 mx-auto" />
                      <div className="text-xs font-semibold text-white">Prescription Document Extraction</div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        Simulating Tesseract/Vision OCR pipeline text detection
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                      <div className="text-tealAccent-400 text-[10px] uppercase font-semibold">OCR Ingestion Log:</div>
                      <div className="text-slate-400">Rx: Tab. Ciprofloxacin 500mg - BID x 5d</div>
                      <div className="text-slate-400">Confidence: 94.2% • Extracted to Structured State</div>
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Chart.js Visualization Mockup</span>
                      <span>Reaction Frequency</span>
                    </div>
                    <div className="h-32 flex items-end justify-between gap-3 pt-4 px-2 border-b border-slate-800">
                      <div className="flex-1 bg-brand-500/20 hover:bg-brand-500/40 border border-brand-500/40 rounded-t h-[65%] flex items-center justify-center text-[10px] font-mono text-brand-300">Rash</div>
                      <div className="flex-1 bg-tealAccent-500/20 hover:bg-tealAccent-500/40 border border-tealAccent-500/40 rounded-t h-[40%] flex items-center justify-center text-[10px] font-mono text-tealAccent-300">Nausea</div>
                      <div className="flex-1 bg-amber-500/20 hover:bg-amber-500/40 border border-amber-500/40 rounded-t h-[85%] flex items-center justify-center text-[10px] font-mono text-amber-300">Pruritus</div>
                      <div className="flex-1 bg-rose-500/20 hover:bg-rose-500/40 border border-rose-500/40 rounded-t h-[25%] flex items-center justify-center text-[10px] font-mono text-rose-300">Dizziness</div>
                    </div>
                    <div className="text-[11px] text-center text-slate-500 font-mono">
                      Visualized aggregate telemetry from logged user adverse event reports.
                    </div>
                  </div>
                )}

              </div>

              {/* Mock Window Footer */}
              <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between font-mono">
                <span>UI Verification Container</span>
                <span className="text-slate-400">Status: Formative Proof of Concept</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
