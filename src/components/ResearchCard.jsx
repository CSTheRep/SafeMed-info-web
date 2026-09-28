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
    1: "border-[#E8A3A3] text-[#A94444] bg-[#F7E3E3]",
    2: "border-[#D67B7B] text-[#A94444] bg-[#F7E3E3]",
    3: "border-[#C95C5C]/40 text-[#A94444] bg-[#F7E3E3]"
  };

  return (
    <div className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] hover:border-[#E8A3A3] p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#C95C5C]/5 hover:-translate-y-1 relative overflow-hidden group">
      
      {/* Top Banner with Number and Direction */}
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-[#E6D9CF] mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#857B78]">PAPER {paper.number}</span>
            <span className="text-[#E6D9CF]">•</span>
            <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full border ${cardBadges[paper.id]}`}>
              {paper.direction}
            </span>
          </div>

          <div className="w-8 h-8 rounded-lg bg-[#F5EFE6] border border-[#E6D9CF] flex items-center justify-center text-[#A94444] group-hover:text-[#C95C5C] group-hover:bg-[#F7E3E3] transition-colors">
            <IconComponent className="w-4 h-4" />
          </div>
        </div>

        {/* Paper Title */}
        <h3 className="text-xl md:text-2xl font-extrabold text-[#302B2B] mb-4 tracking-tight leading-snug group-hover:text-[#A94444] transition-colors">
          {paper.title}
        </h3>

        {/* Metadata Key-Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
          
          <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF]">
            <span className="text-[10px] font-mono uppercase text-[#857B78] block mb-1 flex items-center gap-1">
              <Tag className="w-3 h-3 text-[#C95C5C]" /> Research Area
            </span>
            <span className="text-[#302B2B] font-medium">{paper.area}</span>
          </div>

          <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF]">
            <span className="text-[10px] font-mono uppercase text-[#857B78] block mb-1 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#A94444]" /> Year &amp; Status
            </span>
            <span className="text-[#302B2B] font-medium">{paper.year} • {paper.status}</span>
          </div>

          <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF] sm:col-span-2">
            <span className="text-[10px] font-mono uppercase text-[#857B78] block mb-1 flex items-center gap-1">
              <User className="w-3 h-3 text-[#C95C5C]" /> Authors
            </span>
            <span className="text-[#302B2B] font-mono text-[11px]">
              {Array.isArray(paper.authors) ? paper.authors.join(", ") : paper.authors}
            </span>
          </div>

        </div>

        {/* Abstract Box */}
        <div className="mb-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF]">
          <span className="text-[10px] font-mono uppercase text-[#857B78] font-bold block mb-1.5">
            {paper.id === 1 ? "Abstract" : "Abstract Placeholder"}
          </span>
          <p className="text-xs text-[#6B6260] font-sans leading-relaxed">
            {paper.abstract}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-[#E6D9CF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Link
          to={`/research/${paper.id}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#FFFDFC] bg-[#C95C5C] hover:bg-[#A94444] transition-colors shadow-md shadow-[#C95C5C]/20"
        >
          <BookOpen className="w-4 h-4" />
          <span>Read Paper</span>
        </Link>

        {paper.link ? (
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#A94444] hover:text-[#C95C5C] bg-[#F7E3E3] hover:bg-[#E8A3A3]/40 border border-[#E8A3A3] transition-colors"
          >
            <span>External Paper Link</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <Link
            to="/research"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#A94444] hover:text-[#C95C5C] bg-[#F7E3E3] hover:bg-[#E8A3A3]/40 border border-[#E8A3A3] transition-colors"
          >
            <span>Explore Research</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

    </div>
  );
}
