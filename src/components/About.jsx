import React from 'react';
import { 
  Target, 
  Globe2, 
  Eye, 
  Compass, 
  CheckCircle, 
  Zap, 
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';

export default function About() {
  const pillars = [
    {
      id: "scope",
      title: "What the Project Analyzes",
      subtitle: "Empirical Scope & Research Focus",
      icon: Target,
      accent: "from-[#970747]/30 to-[#de1d77]/15",
      borderColor: "border-[#970747]/40",
      iconColor: "text-white",
      points: [
        "Comprehensive tracking of Battery Electric Vehicles (BEV) and Plug-in Hybrid Electric Vehicles (PHEV).",
        "Vehicle pricing mechanics: MSRP distributions, segment tiers (Economy, Mid-range, Luxury, Commercial), and market price elasticity.",
        "Energy storage and powertrain telemetry: Battery capacity (kWh), volumetric energy density, and chemistry adoption (LFP vs. NMC).",
        "Performance benchmarks: Real-world and certified driving range (EPA / WLTP) relative to vehicle curb weight and aerodynamic drag."
      ]
    },
    {
      id: "significance",
      title: "Why EV Market Analysis Matters",
      subtitle: "Industry Impact & Energy Transition",
      icon: Globe2,
      accent: "from-[#de1d77]/30 to-[#970747]/15",
      borderColor: "border-[#de1d77]/40",
      iconColor: "text-white",
      points: [
        "Decarbonization roadmaps: Accelerating global commitments toward net-zero transport and zero-emission vehicle mandates.",
        "Consumer economics: Evaluating the inflection point where EV Total Cost of Ownership (TCO) reaches parity with internal combustion engines.",
        "Automotive supply chain resilience: Highlighting critical dependencies on battery mineral reserves (Lithium, Nickel, Cobalt, Graphite).",
        "Grid infrastructure planning: Guiding municipal energy providers on peak electricity loads and fast-charging network deployments."
      ]
    },
    {
      id: "visualization",
      title: "The Purpose of Data Visualization",
      subtitle: "Cognitive Clarity & Business Intelligence",
      icon: Eye,
      accent: "from-[#970747]/30 to-white/10",
      borderColor: "border-[#970747]/40",
      iconColor: "text-white",
      points: [
        "Eliminating analytical blind spots by translating dense multi-thousand row tabular datasets into immediate perceptual patterns.",
        "Isolating non-linear correlations between battery capacity, vehicle mass, efficiency, and real-world range.",
        "Empowering executive stakeholders to spot outlier models delivering superior dollar-per-mile value or lagging market adoption.",
        "Facilitating evidence-based decision making for automakers, fleet operators, and institutional investors."
      ]
    },
    {
      id: "exploration",
      title: "How It Helps Explore Market Patterns",
      subtitle: "Interactive Discovery & User Agency",
      icon: Compass,
      accent: "from-[#de1d77]/30 to-[#970747]/20",
      borderColor: "border-[#de1d77]/40",
      iconColor: "text-white",
      points: [
        "Multi-parameter cross-filtering in Tableau allowing visitors to slice data by manufacturer, vehicle type, and production year.",
        "Side-by-side comparative benchmarking of legacy automakers transitioning to electric platforms versus pure-play EV pioneers.",
        "Geospatial navigation to uncover regional adoption variance influenced by local government subsidies and emissions standards.",
        "Guided analytical storytelling connecting individual data views into a coherent macro narrative of transport electrification."
      ]
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0e0409] relative border-t border-[#970747]/20">
      {/* Background radial accent in Dark Pink */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#970747]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#970747]/20 border border-[#970747]/40 text-white text-xs font-semibold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5 text-[#f472b6]" />
            <span>Project Foundation & Objective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Understanding the Electric Mobility Revolution
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The automotive landscape is undergoing its most profound structural disruption in over a century.
            EV Insights bridges raw market datasets with interactive visual intelligence to uncover
            the economic, technological, and environmental levers powering this shift.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative rounded-2xl bg-[#14060e] border border-white/10 p-7 lg:p-8 hover:border-[#970747]/70 transition-all duration-300 hover:shadow-2xl hover:shadow-[#970747]/15 flex flex-col justify-between"
              >
                {/* Header info */}
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-medium tracking-wider text-[#f472b6] uppercase">
                        {pillar.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#f472b6] transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${pillar.accent} border ${pillar.borderColor} shrink-0 shadow-md`}>
                      <IconComponent className={`w-6 h-6 ${pillar.iconColor}`} />
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3.5 mb-6">
                    {pillar.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-200 text-sm leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-[#de1d77] mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom interactive bridge */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span>Methodology Alignment: Stage 1-4</span>
                  <a 
                    href="#dashboard" 
                    className="text-[#f472b6] hover:text-white flex items-center gap-1 group/link font-medium"
                  >
                    <span>View in Dashboard</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Analytical Context Callout Banner in Dark Pink & White */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1c0814] via-[#10040a] to-[#1c0814] border border-[#970747]/50 shadow-xl shadow-[#970747]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <TrendingUp className="w-5 h-5 text-[#f472b6]" />
              <span>Academic Capstone & Portfolio Integrity</span>
            </h4>
            <p className="text-sm text-slate-300 max-w-3xl">
              This project is built upon rigorous analytical standards. All visual figures, segment distributions, 
              and calculations are dynamically executed directly from the author's published Tableau Public workbook.
            </p>
          </div>
          <a
            href="#methodology"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#970747] text-white font-semibold text-sm border border-white/20 hover:border-[#970747] transition-all shadow-md"
          >
            Review 8-Stage Methodology
          </a>
        </div>

      </div>
    </section>
  );
}
