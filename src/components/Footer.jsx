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
    <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-tealAccent-500 flex items-center justify-center text-navy-950">
                <Shield className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">SafeMed</span>
            </div>
            
            <p className="text-sm font-medium text-slate-300">
              Research • Technology • Drug Safety
            </p>
            
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              A dedicated academic and technological journey examining digital adverse drug event reporting, optical prescription intake, and hybrid quantum computational models.
            </p>

            {/* Social / External Placeholders */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={projectConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={projectConfig.links.authorProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Academic / LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <Link
                to="/research"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Research Papers"
              >
                <BookOpen className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#why-safemed"
                  onClick={(e) => handleNavClick(e, '#why-safemed')}
                  className="hover:text-white transition-colors"
                >
                  Why SafeMed
                </a>
              </li>
              <li>
                <a
                  href="#journey"
                  onClick={(e) => handleNavClick(e, '#journey')}
                  className="hover:text-white transition-colors"
                >
                  Journey
                </a>
              </li>
              <li>
                <a
                  href="#research-papers"
                  onClick={(e) => handleNavClick(e, '#research-papers')}
                  className="hover:text-white transition-colors"
                >
                  Research Papers
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleNavClick(e, '#how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  onClick={(e) => handleNavClick(e, '#technology')}
                  className="hover:text-white transition-colors"
                >
                  Technology
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Research Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Research Tracks
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/research/1" className="hover:text-brand-300 transition-colors block">
                  Paper 01: Foundational Research
                </Link>
              </li>
              <li>
                <Link to="/research/2" className="hover:text-purple-300 transition-colors block">
                  Paper 02: Quantum Models
                </Link>
              </li>
              <li>
                <Link to="/research/3" className="hover:text-tealAccent-300 transition-colors block">
                  Paper 03: Deep Learning + Quantum
                </Link>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-white"
                >
                  <ArrowUp className="w-3.5 h-3.5" /> Back to top
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            &copy; SafeMed — Research &amp; Project Showcase
          </div>
          <div className="text-slate-500 text-[11px]">
            Academic Information Portal • Non-Clinical Portfolio
          </div>
        </div>

      </div>
    </footer>
  );
}
