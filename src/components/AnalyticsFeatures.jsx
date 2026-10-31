import React, { useState } from 'react';
import { ANALYTICS_FEATURES } from '../config/tableau.js';
import { 
  TrendingUp, 
  DollarSign, 
  Globe, 
  BatteryCharging, 
  Gauge, 
  Layers, 
  Zap, 
  ArrowUpRight, 
  HelpCircle, 
  SlidersHorizontal,
  BarChart2
} from 'lucide-react';

const iconMap = {
  TrendingUp,
  DollarSign,
  Globe,
  BatteryCharging,
  Gauge,
  Layers,
  Zap,
};

export default function AnalyticsFeatures() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Market Share & Volume', 'Cost & Economics', 'Energy Storage', 'Performance & Usability', 'Competitive Landscape', 'Aerodynamics & Consumption'];

  const filteredFeatures = selectedCategory === 'All'
    ? ANALYTICS_FEATURES
    : ANALYTICS_FEATURES.filter(f => f.category === selectedCategory);

  return (
    <section id="analytics" className="py-24 bg-[#0b0307] relative border-t border-[#970747]/25">
      
      {/* Background ambient glow in Dark Pink */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#970747]/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#970747]/20 border border-[#970747]/40 text-white text-xs font-semibold tracking-wider uppercase">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#f472b6]" />
            <span>Analytical Dimensions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Market Analytics Framework
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            The project interrogates the global electric vehicle ecosystem across seven core analytical dimensions. 
            Each module addresses specific business questions materialized inside the Tableau Executive Dashboard.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#970747] text-white shadow-lg shadow-[#970747]/30 border border-white/20 font-semibold'
                  : 'bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 7 Analytics Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => {
            const IconComponent = iconMap[feature.icon] || BarChart2;

            return (
              <div
                key={feature.id}
                className="rounded-2xl bg-[#14060e] border border-white/10 p-6 flex flex-col justify-between hover:border-[#970747]/70 transition-all duration-300 group hover:shadow-xl hover:shadow-[#970747]/20 relative overflow-hidden"
              >
                {/* Subtle top indicator bar in Dark Pink & White */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#970747] via-[#de1d77] to-white opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Category badge & icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white bg-[#970747]/30 border border-[#970747]/50 px-2.5 py-0.5 rounded-full font-semibold">
                      {feature.category}
                    </span>
                    <div className="p-2 rounded-xl bg-white/10 border border-white/10 text-white group-hover:text-[#f472b6] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f472b6] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {feature.summary}
                  </p>

                  {/* Key Questions Answered */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 mb-4 space-y-2">
                    <span className="text-[11px] font-mono text-[#f472b6] uppercase tracking-wide flex items-center gap-1 font-semibold">
                      <HelpCircle className="w-3.5 h-3.5 text-white" />
                      Core Inquiries Answered:
                    </span>
                    <ul className="space-y-1.5">
                      {feature.keyQuestions.map((q, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                          <span className="text-[#de1d77] font-bold">•</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tableau Visualization Format */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 mb-4 bg-[#0e0409] px-3 py-2 rounded-lg border border-white/10">
                    <span className="text-slate-400">Viz Encodings:</span>
                    <span className="text-white font-semibold">{feature.visualizationType}</span>
                  </div>
                </div>

                {/* Footer link to Dashboard */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">
                    Workbook: {feature.tableauSheetHint}
                  </span>
                  <a
                    href="#dashboard"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#f472b6] transition-colors group/cta"
                  >
                    <span>View in Dashboard</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#f472b6] group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
