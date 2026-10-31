import React from 'react';
import { TABLEAU_CONFIG } from '../config/tableau.js';
import { Zap, Github, ArrowUp, ExternalLink, BarChart3 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080205] border-t border-[#970747]/30 pt-16 pb-12 text-slate-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand & Title Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#970747] to-[#de1d77] flex items-center justify-center text-white shadow-md shadow-[#970747]/30 border border-white/20">
                <Zap className="w-4 h-4 fill-white stroke-white" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-wider text-white">
                EV <span className="text-[#f472b6]">INSIGHTS</span>
              </span>
            </div>

            <p className="text-sm font-semibold text-white">
              {TABLEAU_CONFIG.project.fullTitle}
            </p>

            <p className="text-xs text-slate-300 max-w-md leading-relaxed">
              {TABLEAU_CONFIG.project.subtitle} Developed for academic evaluation, 
              data analytics portfolio showcase, and empirical market exploration.
            </p>

            <div className="pt-2">
              <a
                href={TABLEAU_CONFIG.project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#970747]/40 text-white text-xs font-mono border border-white/20 hover:border-[#970747] transition-all"
              >
                <Github className="w-4 h-4 text-white" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-[#f472b6]" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Platform Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#f472b6] transition-colors text-slate-300">Home & Overview</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#f472b6] transition-colors text-slate-300">About & Significance</a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-[#f472b6] transition-colors text-slate-300">Executive Tableau Dashboard</a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#f472b6] transition-colors text-slate-300">Market Narrative Story</a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-[#f472b6] transition-colors text-slate-300">Analytics Dimensions</a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-[#f472b6] transition-colors text-slate-300">8-Stage Methodology</a>
              </li>
              <li>
                <a href="#techstack" className="hover:text-[#f472b6] transition-colors text-slate-300">Technologies Used</a>
              </li>
            </ul>
          </div>

          {/* Tableau Visualizations & Resources */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Tableau Public Assets
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={TABLEAU_CONFIG.dashboard.appUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#f472b6] transition-colors flex items-center gap-1.5 text-slate-200"
                >
                  <BarChart3 className="w-3.5 h-3.5 text-[#f472b6]" />
                  <span>EV Executive Dashboard</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a 
                  href={TABLEAU_CONFIG.dashboard.profileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#f472b6] transition-colors flex items-center gap-1.5 text-slate-200"
                >
                  <span>Author Tableau Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li className="pt-2 text-[11px] text-slate-400 font-mono">
                Author: {TABLEAU_CONFIG.dashboard.author}
              </li>
              <li className="text-[11px] text-slate-400 font-mono">
                Academic Context: {TABLEAU_CONFIG.project.academicContext}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <p>
            © {currentYear} {TABLEAU_CONFIG.project.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#970747]/40 hover:text-white border border-white/20 hover:border-[#970747] transition-all text-xs text-white"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#f472b6]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
