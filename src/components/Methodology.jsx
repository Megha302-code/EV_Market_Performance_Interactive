import React from 'react';
import { METHODOLOGY_STEPS } from '../config/tableau.js';
import { 
  Database, 
  Filter, 
  Search, 
  PieChart, 
  LayoutDashboard, 
  BookOpen, 
  Code2, 
  CheckCircle2, 
  GitCommit,
  Layers
} from 'lucide-react';

const iconMap = {
  Database,
  Filter,
  Search,
  PieChart,
  LayoutDashboard,
  BookOpen,
  Code2,
  CheckCircle2,
};

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 bg-[#0e0409] relative border-t border-[#970747]/25">
      
      {/* Background ambient lighting in Dark Pink */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-[#970747]/15 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#970747]/20 border border-[#970747]/40 text-white text-xs font-semibold tracking-wider uppercase">
            <GitCommit className="w-3.5 h-3.5 text-[#f472b6]" />
            <span>End-to-End Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Methodology & Technical Execution
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            The project follows a structured, reproducible 8-stage data science and engineering lifecycle, 
            spanning empirical data acquisition through to production web integration on GitHub Pages.
          </p>
        </div>

        {/* 8-Stage Timeline Grid */}
        <div className="relative">
          {/* Vertical line indicator in Dark Pink & White */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#970747] via-[#de1d77] to-white" />

          <div className="space-y-8 lg:space-y-12">
            {METHODOLOGY_STEPS.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Layers;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={step.step}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge in Center */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#14060e] border-2 border-[#970747] items-center justify-center text-xs font-bold font-mono text-white shadow-lg shadow-[#970747]/30 z-10">
                    {step.step}
                  </div>

                  {/* Card Content (Occupies half width on large screens) */}
                  <div className="w-full lg:w-[calc(50%-40px)]">
                    <div className="rounded-2xl bg-[#14060e] border border-white/10 p-6 sm:p-7 hover:border-[#970747]/70 transition-all duration-300 shadow-xl group hover:shadow-[#970747]/20">
                      
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="lg:hidden w-7 h-7 rounded-lg bg-[#970747]/25 border border-[#970747]/50 text-white font-mono text-xs font-bold flex items-center justify-center">
                            {step.step}
                          </span>
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase bg-white/10 text-white border border-white/15 font-semibold">
                            {step.badge}
                          </span>
                        </div>

                        <div className="p-2 rounded-xl bg-[#970747]/20 border border-[#970747]/40 text-white">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f472b6] transition-colors">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Deliverables / Output */}
                      <div className="pt-3 border-t border-white/10 flex items-start gap-2 text-xs text-slate-300 font-mono">
                        <span className="text-white font-bold shrink-0">Deliverable:</span>
                        <span className="text-slate-200">{step.deliverables}</span>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
