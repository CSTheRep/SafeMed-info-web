import React from 'react';
import SectionHeading from './SectionHeading';
import { journeyConnectionNarrative } from '../data/journey';
import { GitMerge, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

export default function ResearchConnection() {
  return (
    <section id="research-connection" className="py-20 md:py-28 bg-[#FAF7F2] relative border-t border-[#E6D9CF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Synthesizing Theory & Product"
          title="From Research to SafeMed"
          subtitle="How empirical questions, quantum modeling, and deep learning explorations directly inform the evolving SafeMed architecture."
        />

        {/* Visual Flow Diagram */}
        <div className="mb-12 p-8 rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] shadow-sm">
          <div className="flex items-center gap-2 mb-6 text-xs font-mono uppercase text-[#A94444] font-bold tracking-wider">
            <GitMerge className="w-4 h-4" />
            <span>Evolutionary Feedback Loop</span>
          </div>

          {/* Stepper Flow Elements */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {journeyConnectionNarrative.narrativeFlow.map((item, idx) => {
              const isFinal = idx === journeyConnectionNarrative.narrativeFlow.length - 1;
              return (
                <div
                  key={item.step}
                  className={`relative p-4 rounded-xl border flex flex-col justify-between transition-all ${
                    isFinal
                      ? 'bg-[#F7E3E3] border-[#C95C5C] text-[#302B2B] shadow-sm'
                      : 'bg-[#FAF7F2] border-[#E6D9CF] text-[#6B6260]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isFinal ? 'bg-[#C95C5C] text-[#FFFDFC]' : 'bg-[#E6D9CF] text-[#6B6260]'
                      }`}>
                        {item.step}
                      </span>
                      {isFinal && <ShieldCheck className="w-4 h-4 text-[#C95C5C]" />}
                    </div>

                    <h4 className="text-xs font-bold text-[#302B2B] mb-1.5">
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-[#6B6260] leading-snug">
                      {item.detail}
                    </p>
                  </div>

                  {idx < journeyConnectionNarrative.narrativeFlow.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 text-[#857B78]">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Required Under-Diagram Placeholder Box */}
          <div className="mt-8 p-5 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF]">
            <span className="text-xs font-mono uppercase text-[#A94444] font-bold block mb-1.5">
              Synthesis Placeholder:
            </span>
            <p className="text-xs font-mono text-[#6B6260] leading-relaxed">
              [Explain how each research stage influenced the broader SafeMed project — content to be added later. SafeMed was first built as a responsive product intake mechanism, which subsequently illuminated the fundamental mathematical complexities of multi-drug adverse associations, prompting the deep learning and quantum computing research inquiries.]
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E6D9CF] flex items-center justify-between text-[11px] text-[#857B78] font-mono">
            <span>Iterative Continuum: Empirical Practice ⇄ Theoretical Research</span>
            <span className="text-[#C95C5C] font-semibold">Holistic Ecosystem</span>
          </div>
        </div>

      </div>
    </section>
  );
}
