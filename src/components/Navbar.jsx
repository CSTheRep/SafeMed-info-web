import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Shield, ArrowUpRight, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Why SafeMed", href: "#why-safemed" },
    { name: "Journey", href: "#journey" },
    { name: "Research", href: "#research-papers" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Technology", href: "#technology" },
    { name: "About", href: "#about" },
  ];

  const handleNavClick = (e, href) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate(`/${href}`);
      return;
    }
    
    // On home page, smooth scroll
    const targetElement = document.querySelector(href);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-[#FFFDFC]/90 backdrop-blur-md border-b border-[#E6D9CF] shadow-sm shadow-[#302B2B]/5'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#C95C5C] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C95C5C] to-[#A94444] flex items-center justify-center text-[#FFFDFC] shadow-md shadow-[#C95C5C]/20 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-[#FFFDFC] stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-[#302B2B] group-hover:text-[#A94444] transition-colors">
                  SafeMed
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono tracking-wide uppercase font-semibold text-[#A94444] bg-[#F7E3E3] border border-[#E8A3A3] rounded">
                  Research
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-sm font-medium text-[#6B6260] hover:text-[#302B2B] hover:bg-[#F5EFE6] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/research"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#FFFDFC] bg-[#C95C5C] hover:bg-[#A94444] border border-[#C95C5C] hover:border-[#A94444] rounded-xl transition-all shadow-sm hover:shadow-[#C95C5C]/20 group"
            >
              <BookOpen className="w-4 h-4 text-[#FFFDFC]" />
              <span>Research Papers</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFFDFC]/80 group-hover:text-[#FFFDFC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#6B6260] hover:text-[#302B2B] hover:bg-[#F5EFE6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C95C5C]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E6D9CF] bg-[#FFFDFC]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href);
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 text-base font-medium text-[#6B6260] hover:text-[#302B2B] hover:bg-[#F5EFE6] rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E6D9CF]">
            <Link
              to="/research"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-[#FFFDFC] bg-[#C95C5C] hover:bg-[#A94444] rounded-xl shadow-md transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Research Papers</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
