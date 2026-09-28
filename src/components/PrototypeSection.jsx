import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { projectConfig } from '../data/project';
import { AppWindow, CheckCircle, ArrowRight, Scan, ShieldCheck, BarChart3, Layers, FileText } from 'lucide-react';

export default function PrototypeSection() {
  const [activeTab, setActiveTab] = useState('adr-form');
  const prototype = projectConfig.prototype;

  return (
    <section id="prototype" className="py-20 md:py-28 bg-[#FAF7F2] relative border-t border-[#E6D9CF]">
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
                className="relative p-4 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                    idx === 2 ? 'bg-[#C95C5C] text-[#FFFDFC] shadow-md shadow-[#C95C5C]/20' : 'bg-[#F5EFE6] text-[#6B6260] border border-[#E6D9CF]'
                  }`}>
                    {prog.step}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#302B2B]">{prog.label}</div>
                    <div className="text-xs text-[#857B78]">{prog.note}</div>
                  </div>
                </div>
                {idx < 2 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-[#E6D9CF]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content & Stylized Mock Application Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Descriptive Context & Features */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] space-y-4 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A94444] font-semibold">
                Prototype Rationale
              </span>
              <h3 className="text-xl font-bold text-[#302B2B]">
                Validating the Intake Pipeline
              </h3>
              
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed">
                {prototype.description}
              </div>

              <p className="text-sm text-[#6B6260] leading-relaxed font-normal">
                The prototype proved that consolidating prescription intake, OCR, and symptom logging into a single cohesive interface dramatically simplified adverse reaction capture. However, turning raw inputs into scientifically rigorous pharmacovigilance intelligence revealed deeper computational challenges.
              </p>

              <div className="pt-4 border-t border-[#E6D9CF] space-y-3">
                <span className="text-xs font-mono uppercase text-[#857B78] block font-semibold">
                  Core Prototype Capabilities:
                </span>
                {prototype.features.map((feat) => (
                  <div key={feat.name} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C95C5C] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-[#302B2B]">{feat.name}: </span>
                      <span className="text-xs text-[#6B6260]">{feat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Mock Interface (Clearly Labeled Early SafeMed Prototype) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] shadow-lg overflow-hidden">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#F5EFE6] border-b border-[#E6D9CF] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  <span className="ml-3 text-xs font-mono text-[#302B2B] font-medium">
                    safemed-web-client :: prototype-v1.0
                  </span>
                </div>
                
                {/* Prominent Prototype Label */}
                <div className="px-2.5 py-1 rounded bg-[#F7E3E3] border border-[#E8A3A3] text-[10px] font-mono text-[#A94444] font-bold uppercase tracking-wider">
                  {prototype.badge}
                </div>
              </div>

              {/* Sub-bar / Tabs for prototype views */}
              <div className="px-4 py-2 bg-[#FAF7F2] border-b border-[#E6D9CF] flex items-center gap-2 overflow-x-auto text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('adr-form')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                    activeTab === 'adr-form' ? 'bg-[#C95C5C] text-[#FFFDFC]' : 'text-[#6B6260] hover:text-[#302B2B] hover:bg-[#F5EFE6]'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>ADR Intake Wizard</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('ocr')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                    activeTab === 'ocr' ? 'bg-[#C95C5C] text-[#FFFDFC]' : 'text-[#6B6260] hover:text-[#302B2B] hover:bg-[#F5EFE6]'
                  }`}
                >
                  <Scan className="w-3.5 h-3.5" />
                  <span>Prescription OCR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('analytics')}
                  className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
                    activeTab === 'analytics' ? 'bg-[#C95C5C] text-[#FFFDFC]' : 'text-[#6B6260] hover:text-[#302B2B] hover:bg-[#F5EFE6]'
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Reaction Stats</span>
                </button>
              </div>

              {/* Mockup Screen Viewport */}
              <div className="p-6 bg-[#FFFDFC] min-h-[340px] flex flex-col justify-center">
                
                {activeTab === 'adr-form' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-[#E6D9CF] text-xs">
                      <span className="font-mono text-[#857B78]">Step 2 of 4: Symptom Documentation</span>
                      <span className="text-[#A94444] font-mono font-semibold">Draft Mode</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF]">
                        <label className="text-[10px] uppercase font-mono text-[#857B78] block mb-1">Medication Name</label>
                        <div className="text-[#302B2B] font-mono">Amoxicillin Clavulanate (Parsed via OCR)</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF]">
                        <label className="text-[10px] uppercase font-mono text-[#857B78] block mb-1">Onset Latency</label>
                        <div className="text-[#302B2B] font-mono">~3 hours post-ingestion</div>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF] text-xs">
                      <label className="text-[10px] uppercase font-mono text-[#857B78] block mb-1">Observed Symptoms / Narrative</label>
                      <div className="text-[#6B6260] font-sans italic bg-[#FFFDFC] p-2.5 rounded border border-[#E6D9CF]">
                        "Mild cutaneous rash on forearms, accompanied by pruritus and minor gastrointestinal discomfort."
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2 text-[11px] text-[#857B78] font-mono">
                      <span>Simulated Form Workflow</span>
                      <span className="text-[#A94444] font-semibold">[Early Prototype Architecture]</span>
                    </div>
                  </div>
                )}

                {activeTab === 'ocr' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="p-4 rounded-xl border border-dashed border-[#E6D9CF] bg-[#FAF7F2] text-center space-y-2">
                      <Scan className="w-8 h-8 text-[#C95C5C] mx-auto" />
                      <div className="text-xs font-semibold text-[#302B2B]">Prescription Document Extraction</div>
                      <div className="text-[11px] text-[#6B6260] font-mono">
                        Simulating Tesseract/Vision OCR pipeline text detection
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF] font-mono text-xs text-[#302B2B] space-y-1">
                      <div className="text-[#A94444] text-[10px] uppercase font-semibold">OCR Ingestion Log:</div>
                      <div className="text-[#6B6260]">Rx: Tab. Ciprofloxacin 500mg - BID x 5d</div>
                      <div className="text-[#6B6260]">Confidence: 94.2% • Extracted to Structured State</div>
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs font-mono text-[#857B78]">
                      <span>Chart.js Visualization Mockup</span>
                      <span>Reaction Frequency</span>
                    </div>
                    <div className="h-32 flex items-end justify-between gap-3 pt-4 px-2 border-b border-[#E6D9CF]">
                      <div className="flex-1 bg-[#C95C5C] rounded-t h-[65%] flex items-center justify-center text-[10px] font-mono text-[#FFFDFC]">Rash</div>
                      <div className="flex-1 bg-[#E8A3A3] rounded-t h-[40%] flex items-center justify-center text-[10px] font-mono text-[#A94444]">Nausea</div>
                      <div className="flex-1 bg-[#A94444] rounded-t h-[85%] flex items-center justify-center text-[10px] font-mono text-[#FFFDFC]">Pruritus</div>
                      <div className="flex-1 bg-[#D67B7B] rounded-t h-[25%] flex items-center justify-center text-[10px] font-mono text-[#FFFDFC]">Dizziness</div>
                    </div>
                    <div className="text-[11px] text-center text-[#857B78] font-mono">
                      Visualized aggregate telemetry from logged user adverse event reports.
                    </div>
                  </div>
                )}

              </div>

              {/* Mock Window Footer */}
              <div className="px-4 py-2.5 bg-[#F5EFE6] border-t border-[#E6D9CF] text-[11px] text-[#857B78] flex items-center justify-between font-mono">
                <span>UI Verification Container</span>
                <span className="text-[#6B6260]">Status: Formative Proof of Concept</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
