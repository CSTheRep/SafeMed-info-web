import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { researchPapers } from '../data/research';
import { 
  ArrowLeft, 
  ExternalLink, 
  BookOpen, 
  Tag, 
  Calendar, 
  User, 
  Share2, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Atom,
  Sparkles,
  FileText,
  Bookmark,
  Layers,
  HelpCircle,
  Menu,
  X
} from 'lucide-react';

export default function ResearchDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const paperId = parseInt(id, 10);
  const paper = researchPapers.find(p => p.id === paperId) || researchPapers[0];

  // Scroll to top on paper change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [paperId]);

  const prevPaper = paperId > 1 ? researchPapers.find(p => p.id === paperId - 1) : null;
  const nextPaper = paperId < 3 ? researchPapers.find(p => p.id === paperId + 1) : null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const baseNavSections = [
    { id: "overview", label: "Overview & Abstract" },
    { id: "background", label: "Background" },
    { id: "problem", label: "Problem Statement" },
    { id: "motivation", label: "Motivation & Objectives" },
    { id: "methodology", label: "Methodology" },
    { id: "dataset", label: "Dataset & Sources" },
    { id: "architecture", label: "Architecture / Model" },
    { id: "experiments", label: "Experimental Setup" },
    { id: "results", label: "Results & Benchmarks" },
    { id: "discussion", label: "Discussion & Limitations" },
    { id: "future", label: "Future Work" },
    { id: "conclusion", label: "Conclusion" },
  ];

  const navSections = paper.references && paper.references.length > 0
    ? [...baseNavSections, { id: "references", label: "References" }]
    : baseNavSections;

  const scrollToSection = (secId) => {
    setActiveSection(secId);
    setMobileNavOpen(false);
    const element = document.getElementById(secId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directionIcons = {
    "Research 1": FileText,
    "Quantum Models": Atom,
    "Deep Learning + Quantum": Sparkles,
  };

  const IconComponent = directionIcons[paper.direction] || FileText;

  return (
    <div className="pt-24 pb-24 min-h-screen bg-[#FAF7F2] text-[#302B2B]">
      
      {/* Top Banner / Breadcrumb */}
      <div className="border-b border-[#E6D9CF] bg-[#FFFDFC]/90 backdrop-blur-md sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-[#6B6260]">
            <Link to="/" className="hover:text-[#C95C5C] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link to="/research" className="hover:text-[#C95C5C] transition-colors">
              Research
            </Link>
            <span>/</span>
            <span className="text-[#C95C5C] font-semibold truncate max-w-[200px] sm:max-w-none">
              Paper 0{paper.id}: {paper.direction}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#302B2B] border border-[#E6D9CF] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-[#6B6260]" />}
              <span>{copied ? "Link Copied" : "Share"}</span>
            </button>

            {/* Mobile Nav Toggle */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-1.5 rounded-lg bg-[#FAF7F2] text-[#302B2B] hover:bg-[#F5EFE6] border border-[#E6D9CF]"
              aria-label="Table of contents"
            >
              {mobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Paper Header */}
        <div className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-6 sm:p-10 mb-12 shadow-sm relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] flex items-center justify-center text-[#A94444] font-mono font-bold text-sm">
                0{paper.id}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[#F7E3E3] border border-[#E8A3A3] text-[#A94444]">
                  {paper.direction}
                </span>
                <span className="text-xs font-mono text-[#857B78]">
                  {paper.tag}
                </span>
              </div>
            </div>

            {paper.link ? (
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#C95C5C] hover:bg-[#A94444] text-[#FFFDFC] transition-colors shadow-sm"
              >
                <span>Read Original Publication</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs font-mono text-[#857B78] px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF] text-right truncate max-w-md" title={paper.venue || "To be added upon publication"}>
                {paper.venue ? paper.venue : "[19. Paper Link: To be added upon publication]"}
              </span>
            )}
          </div>

          {/* 1. Paper Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#302B2B] tracking-tight leading-tight mb-6">
            {paper.title}
          </h1>

          {/* 2. Research Area, 3. Authors, 4. Status Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono pt-4 border-t border-[#E6D9CF]">
            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF]">
              <span className="text-[10px] text-[#857B78] block uppercase mb-1 flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#C95C5C]" /> Research Area
              </span>
              <span className="text-[#302B2B] font-sans font-semibold">{paper.area}</span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF]">
              <span className="text-[10px] text-[#857B78] block uppercase mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#A94444]" /> Year
              </span>
              <span className="text-[#302B2B] font-semibold">{paper.year}</span>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF]">
              <span className="text-[10px] text-[#857B78] block uppercase mb-1 flex items-center gap-1">
                <Bookmark className="w-3 h-3 text-[#C95C5C]" /> Status / Venue
              </span>
              <span className="text-[#302B2B] font-semibold block">{paper.status}</span>
              {paper.doi && (
                <span className="text-[10px] text-[#857B78] block mt-1 truncate" title={paper.doi}>
                  {paper.doi}
                </span>
              )}
            </div>

            <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF]">
              <span className="text-[10px] text-[#857B78] block uppercase mb-1 flex items-center gap-1">
                <User className="w-3 h-3 text-[#A94444]" /> Authors
              </span>
              <span className="text-[#302B2B] font-sans truncate block font-medium" title={Array.isArray(paper.authors) ? paper.authors.join(", ") : paper.authors}>
                {Array.isArray(paper.authors) ? paper.authors.join(", ") : paper.authors}
              </span>
              {paper.affiliations && (
                <span className="text-[10px] text-[#857B78] block mt-1 font-sans truncate" title={paper.affiliations}>
                  {paper.affiliations}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Two-Column Reading Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sticky Desktop Table of Contents */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 space-y-4">
            <div className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-5 shadow-sm">
              <div className="text-xs font-mono uppercase tracking-wider text-[#302B2B] font-bold pb-3 mb-3 border-b border-[#E6D9CF] flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#A94444]" />
                <span>Paper Sections</span>
              </div>
              <nav className="space-y-1 text-xs">
                {navSections.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      activeSection === sec.id
                        ? 'bg-[#C95C5C] text-[#FFFDFC] font-semibold shadow-sm'
                        : 'text-[#6B6260] hover:text-[#302B2B] hover:bg-[#FAF7F2]'
                    }`}
                  >
                    <span>{sec.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Quick Switch to Other Papers */}
            <div className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-4 text-xs font-mono space-y-2 shadow-sm">
              <span className="text-[10px] uppercase text-[#857B78] font-bold block">All Research Tracks</span>
              {researchPapers.map((p) => (
                <Link
                  key={p.id}
                  to={`/research/${p.id}`}
                  className={`block px-3 py-2 rounded-lg truncate transition-colors ${
                    p.id === paper.id
                      ? 'bg-[#F7E3E3] text-[#A94444] font-bold border border-[#E8A3A3]'
                      : 'text-[#6B6260] hover:text-[#302B2B] hover:bg-[#FAF7F2]'
                  }`}
                >
                  Paper 0{p.id}: {p.direction}
                </Link>
              ))}
            </div>
          </aside>

          {/* Mobile Table of Contents Accordion */}
          {mobileNavOpen && (
            <div className="lg:hidden col-span-12 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] p-4 mb-6 space-y-1 shadow-sm">
              <div className="text-xs font-mono uppercase text-[#302B2B] font-bold mb-2">Jump to Section</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {navSections.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className="p-2 rounded bg-[#FAF7F2] border border-[#E6D9CF] text-left text-[#6B6260] hover:text-[#302B2B] truncate"
                  >
                    {sec.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Main Reading Paper Content (All Sections) */}
          <main className="lg:col-span-9 space-y-10">
            
            {/* 5. Abstract & 6. Background */}
            <section id="overview" className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-6 md:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-[#C95C5C] uppercase tracking-wider block mb-1">
                  Section 05
                </span>
                <h2 className="text-2xl font-bold text-[#302B2B] mb-3">Abstract</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-sm text-[#6B6260] leading-relaxed font-sans">
                  {paper.abstract}
                </div>
                {paper.keywords && paper.keywords.length > 0 && (
                  <div className="mt-3.5 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-[#857B78] font-semibold">Keywords:</span>
                    {paper.keywords.map((kw, idx) => (
                      <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E6D9CF] text-[#6B6260]">
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div id="background" className="pt-6 border-t border-[#E6D9CF]">
                <span className="text-xs font-mono font-bold text-[#A94444] uppercase tracking-wider block mb-1">
                  Section 06
                </span>
                <h2 className="text-xl font-bold text-[#302B2B] mb-3">Background</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed whitespace-pre-line">
                  {paper.sections.background}
                </div>
              </div>
            </section>

            {/* 7. Problem Statement, 8. Motivation, 9. Objectives */}
            <section id="problem" className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-6 md:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-[#C95C5C] uppercase tracking-wider block mb-1">
                  Section 07
                </span>
                <h2 className="text-2xl font-bold text-[#302B2B] mb-3">Problem Statement</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed whitespace-pre-line">
                  {paper.sections.problemStatement}
                </div>
              </div>

              <div id="motivation" className="pt-6 border-t border-[#E6D9CF] grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#857B78] uppercase tracking-wider block mb-1">
                    Section 08 • Motivation
                  </span>
                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed h-full whitespace-pre-line">
                    {paper.sections.motivation}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-[#857B78] uppercase tracking-wider block mb-1">
                    Section 09 • Objectives
                  </span>
                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed h-full whitespace-pre-line">
                    {paper.sections.objectives}
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Methodology & 12. Architecture / Model */}
            <section id="methodology" className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-6 md:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-[#A94444] uppercase tracking-wider block mb-1">
                  Section 10
                </span>
                <h2 className="text-2xl font-bold text-[#302B2B] mb-3">Methodology</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed whitespace-pre-line">
                  {paper.sections.methodology}
                </div>
              </div>

              <div id="architecture" className="pt-6 border-t border-[#E6D9CF]">
                <span className="text-xs font-mono font-bold text-[#C95C5C] uppercase tracking-wider block mb-1">
                  Section 12
                </span>
                <h2 className="text-xl font-bold text-[#302B2B] mb-3">Architecture / Model</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed whitespace-pre-line">
                  {paper.sections.architecture}
                </div>
              </div>
            </section>

            {/* 11. Dataset / Data Source & 13. Experimental Setup */}
            <section id="dataset" className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-6 md:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-[#A94444] uppercase tracking-wider block mb-1">
                  Section 11
                </span>
                <h2 className="text-2xl font-bold text-[#302B2B] mb-3">Dataset / Data Source</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed whitespace-pre-line">
                  {paper.sections.dataset}
                </div>
              </div>

              <div id="experiments" className="pt-6 border-t border-[#E6D9CF]">
                <span className="text-xs font-mono font-bold text-[#C95C5C] uppercase tracking-wider block mb-1">
                  Section 13
                </span>
                <h2 className="text-xl font-bold text-[#302B2B] mb-3">Experimental Setup</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed whitespace-pre-line">
                  {paper.sections.experimentalSetup}
                </div>
              </div>
            </section>

            {/* 14. Results */}
            <section id="results" className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-6 md:p-8 space-y-4 shadow-sm">
              <span className="text-xs font-mono font-bold text-[#A94444] uppercase tracking-wider block mb-1">
                Section 14
              </span>
              <h2 className="text-2xl font-bold text-[#302B2B] mb-3">Results &amp; Empirical Evaluation</h2>
              <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed whitespace-pre-line">
                {paper.sections.results}
              </div>
              {paper.id === 1 ? (
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF] text-[11px] font-mono text-[#857B78]">
                  Empirical results extracted directly from the IEEE ICICV-2025 published paper (Figs. 1–7).
                </div>
              ) : paper.id === 2 ? (
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF] text-[11px] font-mono text-[#857B78]">
                  Simulation benchmark results extracted directly from the IEEE published paper (Tables II &amp; III, Figs. 2 &amp; 3).
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-[#FAF7F2] border border-[#E6D9CF] text-[11px] font-mono text-[#857B78]">
                  Strict placeholder rule: No synthetic metrics or fabricated benchmark scores are displayed.
                </div>
              )}
            </section>

            {/* 15. Discussion & 16. Limitations */}
            <section id="discussion" className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-6 md:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-[#C95C5C] uppercase tracking-wider block mb-1">
                  Section 15
                </span>
                <h2 className="text-2xl font-bold text-[#302B2B] mb-3">Discussion</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed whitespace-pre-line">
                  {paper.sections.discussion}
                </div>
              </div>

              <div className="pt-6 border-t border-[#E6D9CF]">
                <span className="text-xs font-mono font-bold text-[#A94444] uppercase tracking-wider block mb-1">
                  Section 16
                </span>
                <h2 className="text-xl font-bold text-[#302B2B] mb-3">Limitations</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed whitespace-pre-line">
                  {paper.sections.limitations}
                </div>
              </div>
            </section>

            {/* 17. Future Work & 18. Conclusion */}
            <section id="future" className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-6 md:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-mono font-bold text-[#C95C5C] uppercase tracking-wider block mb-1">
                  Section 17
                </span>
                <h2 className="text-2xl font-bold text-[#302B2B] mb-3">Future Work</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed whitespace-pre-line">
                  {paper.sections.futureWork}
                </div>
              </div>

              <div id="conclusion" className="pt-6 border-t border-[#E6D9CF]">
                <span className="text-xs font-mono font-bold text-[#A94444] uppercase tracking-wider block mb-1">
                  Section 18
                </span>
                <h2 className="text-xl font-bold text-[#302B2B] mb-3">Conclusion</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] text-xs font-mono text-[#6B6260] leading-relaxed whitespace-pre-line">
                  {paper.sections.conclusion}
                </div>
              </div>
            </section>

            {/* 19. References */}
            {paper.references && paper.references.length > 0 && (
              <section id="references" className="rounded-2xl border border-[#E6D9CF] bg-[#FFFDFC] p-6 md:p-8 space-y-4 shadow-sm">
                <span className="text-xs font-mono font-bold text-[#C95C5C] uppercase tracking-wider block mb-1">
                  Section 19
                </span>
                <h2 className="text-2xl font-bold text-[#302B2B] mb-3">References</h2>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E6D9CF] divide-y divide-[#E6D9CF] text-xs font-mono text-[#6B6260]">
                  {paper.references.map((ref, idx) => (
                    <div key={idx} className="py-2.5 first:pt-0 last:pb-0 flex items-start gap-2">
                      <span className="text-[#A94444] font-bold shrink-0">[{idx + 1}]</span>
                      <span className="leading-relaxed">{ref}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Paper Navigation (Previous / Next Paper) */}
            <div className="pt-8 border-t border-[#E6D9CF] flex flex-col sm:flex-row items-center justify-between gap-4">
              {prevPaper ? (
                <Link
                  to={`/research/${prevPaper.id}`}
                  className="w-full sm:w-auto p-4 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] hover:border-[#C95C5C]/50 flex items-center gap-3 transition-colors shadow-sm group"
                >
                  <ChevronLeft className="w-5 h-5 text-[#857B78] group-hover:text-[#C95C5C]" />
                  <div>
                    <span className="text-[10px] font-mono text-[#857B78] uppercase block">Previous Paper</span>
                    <span className="text-xs font-bold text-[#302B2B] group-hover:text-[#A94444]">
                      Paper 0{prevPaper.id}: {prevPaper.direction}
                    </span>
                  </div>
                </Link>
              ) : <div />}

              {nextPaper ? (
                <Link
                  to={`/research/${nextPaper.id}`}
                  className="w-full sm:w-auto p-4 rounded-xl bg-[#FFFDFC] border border-[#E6D9CF] hover:border-[#C95C5C]/50 flex items-center justify-end gap-3 transition-colors text-right shadow-sm group"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#857B78] uppercase block">Next Paper</span>
                    <span className="text-xs font-bold text-[#302B2B] group-hover:text-[#A94444]">
                      Paper 0{nextPaper.id}: {nextPaper.direction}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#857B78] group-hover:text-[#C95C5C]" />
                </Link>
              ) : <div />}
            </div>

          </main>

        </div>

      </div>
    </div>
  );
}
