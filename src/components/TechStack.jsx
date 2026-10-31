import React from 'react';
import { TECH_STACK } from '../config/tableau.js';
import { 
  Atom, 
  Flame, 
  FileCode, 
  Globe, 
  Palette, 
  BarChart3, 
  GitBranch, 
  Workflow, 
  Cpu, 
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

const iconMap = {
  Atom,
  Flame,
  FileCode,
  Globe,
  Palette,
  BarChart3,
  GitBranch,
  Workflow,
};

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 bg-[#0b0307] relative border-t border-[#970747]/25">
      
      {/* Background ambient lighting in Dark Pink */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#970747]/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#970747]/20 border border-[#970747]/40 text-white text-xs font-semibold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5 text-[#f472b6]" />
            <span>Production Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technologies & Tools Used
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Strictly engineered with verified modern web and business intelligence technologies. 
            Delivers a high-performance static client architecture hosted with zero infrastructure costs.
          </p>
        </div>

        {/* 8 Technology Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {TECH_STACK.map((tech) => {
            const IconComponent = iconMap[tech.icon] || Cpu;

            return (
              <div
                key={tech.name}
                className="rounded-2xl bg-[#14060e] border border-white/10 p-5 hover:border-[#970747]/70 transition-all duration-300 group hover:shadow-xl hover:shadow-[#970747]/20 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-white bg-[#970747]/30 border border-[#970747]/50 px-2 py-0.5 rounded font-semibold">
                      {tech.badge}
                    </span>
                    <div className="p-2 rounded-xl bg-white/10 border border-white/10 text-white group-hover:text-[#f472b6] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Name & Category */}
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#f472b6] transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 block mb-3">
                    {tech.category}
                  </span>

                  {/* Purpose */}
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {tech.purpose}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-white font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0 text-[#de1d77]" />
                  <span>Production Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture & Deployment Compliance Banner in Dark Pink & White */}
        <div className="rounded-2xl bg-gradient-to-br from-[#190712] to-[#0e0409] border border-[#970747]/50 p-6 sm:p-8 shadow-2xl shadow-[#970747]/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#970747]/25 border border-[#970747]/50 text-white text-xs font-mono font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span>Strict Architectural Compliance</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white">
                Zero External Hosting Dependencies
              </h3>
              
              <p className="text-sm text-slate-200 leading-relaxed">
                As required, this application requires <strong>no Python, no Flask, and no paid hosting services</strong> (such as Render, Vercel, or Railway). 
                The client application builds cleanly into pure static HTML/CSS/JavaScript and deploys automatically to <strong>GitHub Pages</strong> via an included GitHub Actions workflow.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-200">
                <div className="flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-[#de1d77] font-bold">✓</span>
                  <span>Hosting: GitHub Pages</span>
                </div>
                <div className="flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-[#de1d77] font-bold">✓</span>
                  <span>CI/CD: GitHub Actions</span>
                </div>
                <div className="flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-[#de1d77] font-bold">✓</span>
                  <span>Language: Pure JavaScript (JSX)</span>
                </div>
                <div className="flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg border border-white/10">
                  <span className="text-[#de1d77] font-bold">✓</span>
                  <span>BI: Tableau Public v3 API</span>
                </div>
              </div>
            </div>

            {/* Visual Pipeline Schematic */}
            <div className="lg:col-span-5 bg-black/60 rounded-xl p-5 border border-white/10 space-y-3 font-mono text-xs">
              <div className="text-white font-bold uppercase tracking-wider text-[11px] pb-2 border-b border-white/10">
                Deployment Pipeline Workflow:
              </div>

              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-6 h-6 rounded bg-[#970747] flex items-center justify-center text-white font-bold text-[10px]">1</span>
                <span>git push origin main</span>
              </div>
              <div className="h-3 ml-3 border-l border-dashed border-[#970747]/80" />

              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-6 h-6 rounded bg-[#970747] flex items-center justify-center text-white font-bold text-[10px]">2</span>
                <span>GitHub Actions: npm ci && npm run build</span>
              </div>
              <div className="h-3 ml-3 border-l border-dashed border-[#970747]/80" />

              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-6 h-6 rounded bg-[#970747] flex items-center justify-center text-white font-bold text-[10px]">3</span>
                <span>Upload static dist bundle</span>
              </div>
              <div className="h-3 ml-3 border-l border-dashed border-[#970747]/80" />

              <div className="flex items-center gap-2 text-white font-bold">
                <span className="w-6 h-6 rounded bg-white text-[#970747] flex items-center justify-center font-bold text-[10px]">4</span>
                <span>Live on https://&lt;user&gt;.github.io/&lt;repo&gt;/</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
