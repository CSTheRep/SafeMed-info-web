import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Shield, Github, Linkedin, BookOpen, ArrowUp, Mail } from 'lucide-react';
import { projectConfig } from '../data/project';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate(`/${href}`);
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5EFE6] border-t border-[#E6D9CF] text-[#6B6260] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#E6D9CF]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C95C5C] to-[#A94444] flex items-center justify-center text-[#FFFDFC]">
                <Shield className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#302B2B]">SafeMed</span>
            </div>
            
            <p className="text-sm font-medium text-[#302B2B]">
              Research • Technology • Drug Safety
            </p>
            
            <p className="text-xs text-[#6B6260] max-w-sm leading-relaxed font-normal">
              A dedicated academic and technological journey examining digital adverse drug event reporting, optical prescription intake, and hybrid quantum computational models.
            </p>

            {/* Social / External Placeholders */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={projectConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FFFDFC] border border-[#E6D9CF] flex items-center justify-center text-[#6B6260] hover:text-[#C95C5C] hover:border-[#C95C5C]/50 transition-colors shadow-sm"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={projectConfig.links.authorProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#FFFDFC] border border-[#E6D9CF] flex items-center justify-center text-[#6B6260] hover:text-[#C95C5C] hover:border-[#C95C5C]/50 transition-colors shadow-sm"
                aria-label="Academic / LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <Link
                to="/research"
                className="w-8 h-8 rounded-lg bg-[#FFFDFC] border border-[#E6D9CF] flex items-center justify-center text-[#6B6260] hover:text-[#C95C5C] hover:border-[#C95C5C]/50 transition-colors shadow-sm"
                aria-label="Research Papers"
              >
                <BookOpen className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#302B2B] font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#why-safemed"
                  onClick={(e) => handleNavClick(e, '#why-safemed')}
                  className="hover:text-[#C95C5C] transition-colors"
                >
                  Why SafeMed
                </a>
              </li>
              <li>
                <a
                  href="#journey"
                  onClick={(e) => handleNavClick(e, '#journey')}
                  className="hover:text-[#C95C5C] transition-colors"
                >
                  Journey
                </a>
              </li>
              <li>
                <a
                  href="#research-papers"
                  onClick={(e) => handleNavClick(e, '#research-papers')}
                  className="hover:text-[#C95C5C] transition-colors"
                >
                  Research Papers
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleNavClick(e, '#how-it-works')}
                  className="hover:text-[#C95C5C] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  onClick={(e) => handleNavClick(e, '#technology')}
                  className="hover:text-[#C95C5C] transition-colors"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-[#C95C5C] transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Research Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#302B2B] font-bold">
              Research Tracks
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/research/1" className="hover:text-[#C95C5C] transition-colors block">
                  Paper 01: Foundational Research
                </Link>
              </li>
              <li>
                <Link to="/research/2" className="hover:text-[#C95C5C] transition-colors block">
                  Paper 02: Quantum Models
                </Link>
              </li>
              <li>
                <Link to="/research/3" className="hover:text-[#C95C5C] transition-colors block">
                  Paper 03: Deep Learning + Quantum
                </Link>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#6B6260] hover:text-[#C95C5C]"
                >
                  <ArrowUp className="w-3.5 h-3.5" /> Back to top
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#857B78] gap-4">
          <div>
            &copy; SafeMed — Research &amp; Project Showcase
          </div>
          <div className="text-[#857B78] text-[11px]">
            Academic Information Portal • Non-Clinical Portfolio
          </div>
        </div>

      </div>
    </footer>
  );
}
