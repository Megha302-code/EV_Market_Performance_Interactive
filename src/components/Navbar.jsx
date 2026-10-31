import React, { useState, useEffect } from 'react';
import { TABLEAU_CONFIG } from '../config/tableau.js';
import { Zap, Menu, X, ExternalLink, Github, ChevronRight, BarChart2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'dashboard', 'story', 'analytics', 'methodology', 'techstack'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Dashboard', href: '#dashboard', id: 'dashboard' },
    { name: 'Story', href: '#story', id: 'story' },
    { name: 'Analytics', href: '#analytics', id: 'analytics' },
    { name: 'Methodology', href: '#methodology', id: 'methodology' },
    { name: 'Tech Stack', href: '#techstack', id: 'techstack' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0b0307]/90 backdrop-blur-md border-b border-[#970747]/30 shadow-xl shadow-black/60 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#970747] rounded-lg p-1"
            aria-label="EV Insights Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#970747] to-[#d61a72] flex items-center justify-center text-white shadow-lg shadow-[#970747]/35 group-hover:scale-105 transition-transform duration-200 border border-white/20">
              <Zap className="w-5 h-5 fill-white stroke-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg tracking-wider text-white flex items-center gap-1.5">
                EV <span className="text-[#f472b6]">INSIGHTS</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-300 font-mono -mt-1 font-medium">
                Market Analytics
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#970747]/30 border border-[#970747] shadow-sm shadow-[#970747]/20 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Live Dashboard & GitHub */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#970747] hover:bg-[#b50955] text-white text-sm font-semibold shadow-lg shadow-[#970747]/30 hover:shadow-[#970747]/50 border border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <BarChart2 className="w-4 h-4 text-white" />
              <span>Live Dashboard</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
            </a>

            <a
              href={TABLEAU_CONFIG.project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-[#970747]/20 border border-white/10 hover:border-[#970747]/50 transition-colors"
              title="GitHub Repository"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#dashboard"
              className="px-3 py-1.5 rounded-lg bg-[#970747] text-white text-xs font-semibold sm:hidden flex items-center gap-1.5 border border-white/20"
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </a>
            
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-[#970747]/20 focus:outline-none focus:ring-2 focus:ring-[#970747]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-[#970747]/30 bg-[#12050c]/98 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 shadow-2xl transition-all">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium ${
                  activeSection === link.id
                    ? 'text-white bg-[#970747]/40 border border-[#970747]/60 font-semibold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-60 text-white" />
              </a>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-white/10 space-y-2">
            <a
              href={TABLEAU_CONFIG.dashboard.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#970747]/20 hover:bg-[#970747]/35 border border-[#970747]/40 text-white text-sm font-medium transition-colors"
            >
              <span>Open in Tableau Public</span>
              <ExternalLink className="w-4 h-4 text-[#f472b6]" />
            </a>

            <a
              href={TABLEAU_CONFIG.project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-black/60 border border-white/15 text-slate-200 hover:text-white text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
