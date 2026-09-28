import React from 'react';
import { Link } from 'react-router-dom';
import { researchPapers, researchOverview } from '../data/research';
import ResearchCard from '../components/ResearchCard';
import SectionHeading from '../components/SectionHeading';
import { ArrowLeft, BookOpen, GitBranch, ArrowRight, Layers, Sparkles } from 'lucide-react';

export default function ResearchIndex() {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#FAF7F2] text-[#302B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6B6260] hover:text-[#C95C5C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to SafeMed Journey Showcase</span>
          </Link>
        </div>

        {/* Section Heading */}
        <SectionHeading
          tag="Academic Archives"
          title="SafeMed Research Continuum"
          subtitle="A three-phase academic progression investigating empirical drug safety benchmarks, quantum state representations, and hybrid deep learning architectures."
        />

        {/* Connective Overview Narrative Card */}
        <div className="p-8 rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] shadow-sm mb-12 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A94444] font-bold">
            <GitBranch className="w-4 h-4" />
            <span>How the Three Research Papers Connect</span>
          </div>
          
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed">
            {researchOverview.intro}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#E6D9CF] text-xs">
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF]">
              <span className="font-mono text-[#C95C5C] font-bold block mb-1">01. Foundational Baseline</span>
              <p className="text-[#6B6260] font-sans">Formalizes reporting taxonomies and classical computational baselines for adverse event extraction.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF]">
              <span className="font-mono text-[#A94444] font-bold block mb-1">02. Quantum Models</span>
              <p className="text-[#6B6260] font-sans">Investigates quantum feature mapping and Hilbert space representations for exponential interaction domains.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF]">
              <span className="font-mono text-[#C95C5C] font-bold block mb-1">03. Explainable Deep Learning</span>
              <p className="text-[#6B6260] font-sans">Harnesses convolutional neural networks, transfer learning, ensemble modeling, and Grad-CAM explainability for multi-disease diagnosis and clinical decision support.</p>
            </div>
          </div>
        </div>

        {/* Research Paper Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {researchPapers.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="p-6 rounded-2xl bg-[#FFFDFC] border border-[#E6D9CF] text-center space-y-3 shadow-sm">
          <h3 className="text-lg font-bold text-[#302B2B]">
            Looking for the full product story?
          </h3>
          <p className="text-xs text-[#6B6260] max-w-lg mx-auto">
            Explore how real-world observations led to the first SafeMed prototype, literature survey, and subsequent computational milestones.
          </p>
          <div className="pt-2">
            <Link
              to="/#journey"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#A94444] bg-[#F7E3E3] hover:bg-[#E8A3A3]/40 border border-[#E8A3A3] transition-colors"
            >
              <span>Explore Interactive Timeline on Home Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
