import React from 'react';
import SectionHeading from './SectionHeading';
import ResearchCard from './ResearchCard';
import { researchPapers, researchOverview } from '../data/research';
import { BookOpen, GitBranch } from 'lucide-react';

export default function ResearchPapersSection() {
  return (
    <section id="research-papers" className="py-20 md:py-28 bg-navy-950/90 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          tag="Academic Publications"
          title={researchOverview.title}
          subtitle={researchOverview.subtitle}
        />

        {/* Overview Box Connecting the Three Works */}
        <div className="max-w-4xl mb-12 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm text-slate-300 leading-relaxed space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-tealAccent-400 font-semibold">
            <GitBranch className="w-4 h-4" />
            <span>Research Continuum Overview</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
            {researchOverview.intro}
          </div>
          <p className="text-xs text-slate-400">
            Rather than representing disparate isolated publications, these three research papers reflect a deliberate progression: establishing an empirical baseline, exploring quantum-native Hilbert space representations, and synthesizing deep learning encoders with quantum variational circuits.
          </p>
        </div>

        {/* 3 Research Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} />
          ))}
        </div>

      </div>
    </section>
  );
}
