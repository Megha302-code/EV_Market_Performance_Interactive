import React from 'react';
import { TABLEAU_CONFIG } from '../config/tableau.js';
import { 
  BarChart3, 
  BookOpen, 
  Zap, 
  ArrowRight, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Gauge, 
  BatteryMedium,
  Sparkles
} from 'lucide-react';

export default function Hero() {
  const highlights = [
    { label: "Market Segment Focus", value: "BEV & PHEV", icon: Zap, color: "text-[#f472b6]" },
    { label: "Core Dimensions", value: "MSRP, Range & Battery", icon: BatteryMedium, color: "text-white" },
    { label: "Visual Analytics", value: "Tableau Public v3", icon: BarChart3, color: "text-[#f472b6]" },
    { label: "Deployment Target", value: "GitHub Pages Ready", icon: ShieldCheck, color: "text-white" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow gradients in Dark Pink (#970747) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#970747]/30 via-[#d61a72]/15 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#970747]/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Project Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#970747]/25 border border-[#970747]/60 text-white text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#f472b6] animate-pulse" />
              <span>Academic Capstone • Data Analytics Showcase</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Electric Vehicle <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f472b6] to-[#970747]">
                Market Performance
              </span>{" "}
              & Insights
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              An interactive visual analytics platform investigating global electric mobility dynamics. 
              Explore empirical manufacturer volumes, battery capacity frontiers, pricing elasticity, 
              and certified range benchmarks through an embedded Tableau Public business intelligence suite.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#970747] hover:bg-[#b50955] text-white font-semibold text-sm shadow-xl shadow-[#970747]/30 hover:shadow-[#970747]/50 border border-white/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                <BarChart3 className="w-4 h-4 text-white" />
                <span>Explore Dashboard</span>
                <ArrowRight className="w-4 h-4 ml-0.5 text-white" />
              </a>

              <a
                href="#story"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/25 hover:border-white/40 transition-all duration-200 shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-[#f472b6]" />
                <span>Explore Story & Narrative</span>
              </a>

              <a
                href="#analytics"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                <span>Analytics Dimensions</span>
                <span className="text-xs text-[#f472b6]">→</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300">
                      <IconComponent className={`w-3.5 h-3.5 ${item.color}`} />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-white font-mono">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Visual Dashboard Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame in Dark Pink */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#970747]/60 via-[#d61a72]/30 to-[#970747]/40 rounded-2xl blur-lg opacity-85 group-hover:opacity-100 transition duration-1000"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#14060e] border border-[#970747]/40 p-5 shadow-2xl overflow-hidden">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#DE1D77]" />
                    <div className="w-3 h-3 rounded-full bg-white/80" />
                    <div className="w-3 h-3 rounded-full bg-[#970747]" />
                    <span className="text-xs font-mono text-slate-300 ml-2">tableau-embed.view</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#970747]/25 text-white border border-[#970747]/50 font-semibold">
                    Live BI View
                  </span>
                </div>

                {/* Simulated Telemetry / Analytic Visual Elements */}
                <div className="mt-4 space-y-4">
                  
                  {/* Top Analytic KPI strip */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                      <span className="text-[11px] uppercase tracking-wider text-slate-300 font-mono">Analysis Scope</span>
                      <div className="text-base font-bold text-white flex items-center justify-between">
                        <span>Multi-OEM</span>
                        <TrendingUp className="w-4 h-4 text-[#f472b6]" />
                      </div>
                      <p className="text-[11px] text-slate-300">BEV & PHEV Segments</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                      <span className="text-[11px] uppercase tracking-wider text-slate-300 font-mono">Core Metrics</span>
                      <div className="text-base font-bold text-white flex items-center justify-between">
                        <span>Range vs Price</span>
                        <Gauge className="w-4 h-4 text-[#f472b6]" />
                      </div>
                      <p className="text-[11px] text-slate-300">Efficiency & Volumetric</p>
                    </div>
                  </div>

                  {/* EV Schematic Silhouette / Visual Element in Dark Pink & White */}
                  <div className="p-4 rounded-xl bg-gradient-to-b from-[#1c0814] to-[#0e0409] border border-[#970747]/30 relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#f472b6]" />
                        Powertrain & Architecture Metrics
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Interactive Model</span>
                    </div>

                    {/* SVG Vector illustration representing an EV chassis in Dark Pink & White */}
                    <div className="py-2 flex justify-center">
                      <svg viewBox="0 0 320 100" className="w-full max-w-[280px] h-auto">
                        {/* Wheel wells & ground */}
                        <line x1="20" y1="85" x2="300" y2="85" stroke="#3d0e23" strokeWidth="2" strokeDasharray="4 4" />
                        
                        {/* Car chassis outline in white & dark pink accent */}
                        <path 
                          d="M40 70 L60 48 C70 38 85 32 105 32 L195 32 C215 32 230 40 245 52 L280 62 C290 65 295 72 295 78 L295 82 L25 82 C25 76 30 71 40 70 Z" 
                          fill="rgba(151, 7, 71, 0.15)" 
                          stroke="#FFFFFF" 
                          strokeWidth="2" 
                          strokeLinejoin="round"
                        />
                        {/* Battery pack under chassis floor */}
                        <rect x="95" y="72" width="130" height="8" rx="2" fill="#0b0307" stroke="#970747" strokeWidth="1.5" />
                        <rect x="100" y="74" width="120" height="4" rx="1" fill="#DE1D77" opacity="0.9" className="animate-pulse" />

                        {/* Wheels in white & dark pink */}
                        <circle cx="75" cy="80" r="14" fill="#0b0307" stroke="#FFFFFF" strokeWidth="2.5" />
                        <circle cx="75" cy="80" r="6" fill="#970747" />
                        
                        <circle cx="245" cy="80" r="14" fill="#0b0307" stroke="#FFFFFF" strokeWidth="2.5" />
                        <circle cx="245" cy="80" r="6" fill="#970747" />

                        {/* Cabin window styling */}
                        <path d="M110 37 L160 37 L160 55 L75 55 Z" fill="#2d0a1a" opacity="0.7" />
                        <path d="M168 37 L210 37 L232 55 L168 55 Z" fill="#2d0a1a" opacity="0.7" />

                        {/* Electric spark energy arrow in bright white and dark pink */}
                        <path d="M160 20 L150 28 L158 28 L152 38 L168 25 L160 25 Z" fill="#FFFFFF" stroke="#970747" strokeWidth="0.8" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-white/10 font-mono">
                      <span>Telemetry: WLTP / EPA</span>
                      <span className="text-[#f472b6] font-semibold">Calculated in Tableau</span>
                    </div>
                  </div>

                  {/* Direct Dashboard Link Strip in Dark Pink */}
                  <a
                    href="#dashboard"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#970747]/20 hover:bg-[#970747]/35 border border-[#970747]/50 transition-colors group/cta"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span className="text-xs font-semibold text-white">Tableau Public Dashboard Integrated</span>
                    </div>
                    <span className="text-xs font-semibold text-[#f472b6] group-hover/cta:translate-x-1 transition-transform flex items-center gap-1">
                      View Viz <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </span>
                  </a>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ChevronRight(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
