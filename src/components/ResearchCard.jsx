import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, ExternalLink, Atom, Sparkles, FileText, Calendar, User, Tag } from 'lucide-react';

export default function ResearchCard({ paper }) {
  const directionIcons = {
    "Research 1": FileText,
    "Quantum Models": Atom,
    "Deep Learning + Quantum": Sparkles,
  };

  const IconComponent = directionIcons[paper.direction] || FileText;

  const cardBadges = {
    1: "border-brand-500/30 text-brand-300 bg-brand-500/10",
    2: "border-purple-500/30 text-purple-300 bg-purple-500/10",
    3: "border-tealAccent-500/30 text-tealAccent-300 bg-tealAccent-500/10"
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 hover:border-slate-700 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group">
      
      {/* Top Banner with Number and Direction */}
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-slate-500">PAPER {paper.number}</span>
            <span className="text-slate-600">•</span>
            <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full border ${cardBadges[paper.id]}`}>
              {paper.direction}
            </span>
          </div>

          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-brand-300 transition-colors">
            <IconComponent className="w-4 h-4" />
          </div>
        </div>

        {/* Paper Title */}
        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4 tracking-tight leading-snug group-hover:text-brand-300 transition-colors">
          {paper.title}
        </h3>

        {/* Metadata Key-Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
          
          <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1 flex items-center gap-1">
              <Tag className="w-3 h-3 text-brand-400" /> Research Area
            </span>
            <span className="text-slate-200 font-medium">{paper.area}</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-tealAccent-400" /> Year &amp; Status
            </span>
            <span className="text-slate-200 font-medium">{paper.year} • {paper.status}</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 sm:col-span-2">
            <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1 flex items-center gap-1">
              <User className="w-3 h-3 text-indigo-400" /> Authors
            </span>
            <span className="text-slate-200 font-mono text-[11px]">
              {Array.isArray(paper.authors) ? paper.authors.join(", ") : paper.authors}
            </span>
          </div>

        </div>

        {/* Abstract Box */}
        <div className="mb-6 p-4 rounded-xl bg-slate-950/90 border border-slate-800/90">
          <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1.5">
            Abstract Placeholder
          </span>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            {paper.abstract}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Link
          to={`/research/${paper.id}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors shadow-md shadow-brand-600/20"
        >
          <BookOpen className="w-4 h-4" />
          <span>Read Paper</span>
        </Link>

        {paper.link ? (
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            <span>External Paper Link</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <Link
            to="/research"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-colors"
          >
            <span>Explore Research</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

    </div>
  );
}
