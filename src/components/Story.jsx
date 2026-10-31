import React, { useState } from 'react';
import { TABLEAU_CONFIG } from '../config/tableau.js';
import { 
  BookOpen, 
  ExternalLink, 
  Settings, 
  TrendingUp, 
  Layers, 
  BatteryCharging, 
  DollarSign, 
  Gauge, 
  Check, 
  Copy, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

export default function Story() {
  const [customStoryUrl, setCustomStoryUrl] = useState(TABLEAU_CONFIG.story.embedUrl || '');
  const [tempInput, setTempInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);

  const hasConfiguredStory = Boolean(customStoryUrl && customStoryUrl.trim() !== '');

  const copyConfigSnippet = () => {
    const code = `// In src/config/tableau.js:
story: {
  title: "Electric Vehicle Market Evolution Story",
  embedUrl: "${customStoryUrl || 'https://public.tableau.com/views/YOUR_WORKBOOK/YOUR_STORY'}",
  appUrl: "${customStoryUrl || 'https://public.tableau.com/app/profile/YOUR_PROFILE/viz/YOUR_WORKBOOK/YOUR_STORY'}",
}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleApplyCustomUrl = (e) => {
    e.preventDefault();
    if (tempInput.trim()) {
      setCustomStoryUrl(tempInput.trim());
      setShowConfigModal(false);
    }
  };

  const insightCards = [
    {
      id: "growth",
      title: "1. Market Growth & S-Curve Adoption",
      category: "Adoption Trajectory",
      badge: "Industry Dynamics",
      icon: TrendingUp,
      accent: "text-white",
      accentBg: "bg-[#970747]/30 border-[#970747]/50",
      context: "Explanatory Synthesis",
      summary: "Global EV passenger sales have accelerated past the initial 5% tipping point in major OECD markets, entering the steep upward slope of technological S-curve diffusion.",
      keyInsights: [
        "Policy Catalysts: Regulatory mandates (e.g. EU CO2 fleet standards, US Inflation Reduction Act) have structurally decoupled growth from oil price volatility.",
        "Fleet Electrification: Commercial delivery vans and rideshare networks are accelerating fleet turnover due to lower per-mile operational expenditure.",
        "Infrastructure Nexus: Mass market adoption correlates strongly with DC fast-charging corridor density rather than level-2 destination chargers."
      ],
      dashboardConnection: "Corresponds to the Sales Volume by Year & Segment chart in the Executive Dashboard."
    },
    {
      id: "manufacturers",
      title: "2. Manufacturer Strategies & Platform Archetypes",
      category: "Competitive Dynamics",
      badge: "Architecture",
      icon: Layers,
      accent: "text-white",
      accentBg: "bg-[#de1d77]/30 border-[#de1d77]/50",
      context: "Explanatory Synthesis",
      summary: "Automakers are split between ground-up dedicated 800V skateboard architectures and dual-powertrain adapted internal combustion platforms.",
      keyInsights: [
        "Dedicated EV Platforms: Offer superior packaging efficiency, longer wheelbases, flat floorpans, and higher structural battery integration (Cell-to-Pack / Cell-to-Chassis).",
        "Legacy Multi-Energy Conversions: Allowed legacy OEMs rapid time-to-market but carry thermal packaging penalties and curb weight inefficiencies.",
        "Software-Defined Vehicles (SDVs): OTA update capabilities and consolidated zonal controllers increasingly drive post-sale manufacturer valuation."
      ],
      dashboardConnection: "Explore automaker volume distributions and portfolio breakdowns in the live Tableau view."
    },
    {
      id: "battery",
      title: "3. Battery Chemistry & Volumetric Energy Density",
      category: "Energy Storage",
      badge: "Materials Science",
      icon: BatteryCharging,
      accent: "text-white",
      accentBg: "bg-[#970747]/30 border-[#970747]/50",
      context: "Explanatory Synthesis",
      summary: "The battery landscape has bifurcated into cost-efficient Lithium Iron Phosphate (LFP) for standard range and Nickel-Manganese-Cobalt (NMC) for long range.",
      keyInsights: [
        "LFP Dominance: Iron-based chemistries eliminate scarce Cobalt and Nickel, deliver superior 2,000+ cycle life, and tolerate 100% daily state-of-charge charges.",
        "High-Nickel Frontiers: High-energy NMC811 and silicon-doped anodes provide the 250-300 Wh/kg pack energy density needed for heavy luxury SUVs and haulers.",
        "Solid-State Horizon: Emerging solid electrolyte chemistries target 400+ Wh/kg and 10-minute fast-charging, with pilot automotive deployments projected later this decade."
      ],
      dashboardConnection: "Examine battery pack capacity (kWh) distributions across market segments in Tableau."
    },
    {
      id: "pricing",
      title: "4. Pricing Elasticity & Dollar-per-Mile Value",
      category: "Market Economics",
      badge: "Consumer Parity",
      icon: DollarSign,
      accent: "text-white",
      accentBg: "bg-[#de1d77]/30 border-[#de1d77]/50",
      context: "Explanatory Synthesis",
      summary: "Price parity at the purchase counter remains the primary hurdle for mainstream buyers, though lifetime total cost of ownership (TCO) favors EVs.",
      keyInsights: [
        "Segment Compression: Fierce manufacturer price competition has compressed margins while drastically improving standard vehicle equipment.",
        "Dollar-per-Mile Metric: Modern EV offerings increasingly deliver range below $160 per EPA mile of certified range in high-volume segments.",
        "Secondary Market Depreciation: Battery health verification certifications are becoming paramount to stabilizing used EV residual values."
      ],
      dashboardConnection: "Cross-reference vehicle MSRP against certified range in the dashboard scatter views."
    },
    {
      id: "range",
      title: "5. Real-World Range vs. Official Certification",
      category: "Operational Performance",
      badge: "Usability Frontier",
      icon: Gauge,
      accent: "text-white",
      accentBg: "bg-[#970747]/30 border-[#970747]/50",
      context: "Explanatory Synthesis",
      summary: "EPA and WLTP lab cycles offer standardized benchmarks, but real-world highway aerodynamics, HVAC thermal draw, and climate cause variance.",
      keyInsights: [
        "Thermal Management Impact: Heat pump-equipped EVs retain 20-30% more range during sub-freezing ambient temperatures compared to resistive PTC heaters.",
        "Aerodynamic Drag Dominance: At 70+ mph highway speeds, drag coefficient (Cd) and frontal area dominate energy consumption far more than vehicle weight.",
        "Diminishing Range Utility: Consumer surveys indicate 250-300 miles represents the median satisfaction threshold when paired with 150kW+ DC fast charging."
      ],
      dashboardConnection: "Filter driving range distributions by vehicle model and segment in the Tableau Dashboard."
    }
  ];

  return (
    <section id="story" className="py-24 bg-[#0e0409] relative border-t border-[#970747]/25">
      
      {/* Background ambient lighting in Dark Pink */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[300px] bg-[#970747]/15 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#970747]/20 border border-[#970747]/40 text-white text-xs font-semibold tracking-wider uppercase">
              <BookOpen className="w-3.5 h-3.5 text-[#f472b6]" />
              <span>Tableau Story & Market Synthesis</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              EV Market Narrative & Analytical Story
            </h2>
            
            <p className="text-slate-300 text-base leading-relaxed">
              Data storytelling bridges empirical visual charts with contextual industry understanding. 
              Explore sequential market milestones, powertrain shifts, and economic insights.
            </p>
          </div>

          {/* Action buttons in Dark Pink & White */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {hasConfiguredStory && (
              <a
                href={TABLEAU_CONFIG.story.appUrl || customStoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#970747] hover:bg-[#b50955] text-white text-sm font-semibold shadow-lg shadow-[#970747]/30 border border-white/20 transition-all duration-200"
              >
                <span>Open Story in Tableau</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            )}

            <button
              type="button"
              onClick={() => setShowConfigModal(!showConfigModal)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#970747]/30 text-white text-sm font-medium border border-white/20 transition-colors"
            >
              <Settings className="w-4 h-4 text-[#f472b6]" />
              <span>{hasConfiguredStory ? 'Configure Story URL' : 'Setup Story Embed'}</span>
            </button>
          </div>
        </div>

        {/* Tableau Story Embedding or Configuration Panel */}
        {hasConfiguredStory ? (
          /* Live Embedded Tableau Story */
          <div className="mb-16 rounded-2xl bg-[#0e0409] border border-[#970747]/40 shadow-2xl overflow-hidden">
            <div className="bg-[#170610] px-4 py-3 border-b border-[#970747]/30 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
                <span className="font-mono text-white font-semibold">Live Tableau Story Embedded</span>
              </div>
              <a
                href={customStoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f472b6] flex items-center gap-1 font-semibold"
              >
                <span>Direct Tableau View</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#f472b6]" />
              </a>
            </div>
            <div className="w-full" style={{ height: '750px' }}>
              <iframe
                src={`${customStoryUrl}?:showVizHome=no&:embed=true`}
                title="Electric Vehicle Market Story Tableau Embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          /* Guided Configuration Banner (when Story URL is pending publication) */
          <div className="mb-16 rounded-2xl bg-[#14060e] border border-[#970747]/60 p-6 sm:p-8 shadow-2xl shadow-[#970747]/15">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#970747]/25 border border-[#970747]/50 text-white text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#f472b6]" />
                  <span>Configurable Tableau Story Module</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Have You Published Your Tableau Story?
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  The executive dashboard is fully embedded in the Dashboard section above. 
                  When you publish your Tableau Story to Tableau Public, you can easily embed it here 
                  by adding your link in <code className="text-[#f472b6] font-mono bg-black/50 px-1.5 py-0.5 rounded text-xs border border-white/10">src/config/tableau.js</code> or 
                  testing it directly below.
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  type="button"
                  onClick={() => setShowConfigModal(true)}
                  className="px-5 py-3 rounded-xl bg-[#970747] hover:bg-[#b50955] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#970747]/30 border border-white/20 transition-all"
                >
                  <Settings className="w-4 h-4 text-white" />
                  <span>Enter Story URL</span>
                </button>

                <button
                  type="button"
                  onClick={copyConfigSnippet}
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 flex items-center justify-center gap-2 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4 text-white" />}
                  <span>{copied ? 'Code Copied!' : 'Copy Config Snippet'}</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Modal / Quick Config Drawer for Entering Story URL */}
        {showConfigModal && (
          <div className="mb-12 p-6 rounded-2xl bg-[#170610] border border-[#970747] shadow-2xl animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#f472b6]" />
                <span>Configure Tableau Story URL</span>
              </h4>
              <button
                type="button"
                onClick={() => setShowConfigModal(false)}
                className="text-slate-300 hover:text-white text-sm font-mono"
              >
                ✕ Close
              </button>
            </div>

            <form onSubmit={handleApplyCustomUrl} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-white mb-1.5">
                  Published Tableau Story Public URL:
                </label>
                <input
                  type="url"
                  placeholder="https://public.tableau.com/views/YourWorkbook/YourStoryName"
                  value={tempInput}
                  onChange={(e) => setTempInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#de1d77] font-mono"
                />
                <p className="text-[11px] text-slate-300 mt-1.5">
                  Paste the full public link or embed link from your Tableau Public workbook.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#970747] hover:bg-[#b50955] text-white text-sm font-semibold border border-white/20 transition-colors"
                >
                  Preview & Embed Story
                </button>
                {customStoryUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setCustomStoryUrl('');
                      setTempInput('');
                      setShowConfigModal(false);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20"
                  >
                    Clear Story Embed
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Narrative Distinction Notice */}
        <div className="mb-8 p-4 rounded-xl bg-black/50 border border-[#970747]/30 flex items-center gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-[#f472b6] shrink-0" />
          <span>
            <strong className="text-white">Analytical Notice:</strong> The following insight cards provide structured explanatory research 
            context that synthesizes market growth, battery technology, and pricing elasticity. Specific numeric volumes, 
            percentages, and distributions are calculated live within the embedded Tableau Executive Dashboard.
          </span>
        </div>

        {/* 5 Thematic Insight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insightCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="rounded-2xl bg-[#14060e] border border-white/10 p-6 flex flex-col justify-between hover:border-[#970747]/70 transition-all duration-300 group hover:shadow-xl hover:shadow-[#970747]/20"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#f472b6]">
                      {card.category}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${card.accentBg} ${card.accent}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-[#970747]/20 border border-[#970747]/40 text-white shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#f472b6] transition-colors leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-4">
                    {card.summary}
                  </p>

                  {/* Detailed Key Takeaways */}
                  <div className="space-y-2 mb-5">
                    {card.keyInsights.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <span className="text-[#de1d77] font-bold mt-0.5">•</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dashboard correlation link */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href="#dashboard"
                    className="text-[11px] font-mono text-white hover:text-[#f472b6] flex items-center justify-between group/link font-semibold"
                  >
                    <span className="truncate max-w-[220px]">{card.dashboardConnection}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover/link:translate-x-1 transition-transform ml-1 text-[#f472b6]" />
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
