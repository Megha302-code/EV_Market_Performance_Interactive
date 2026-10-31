import React, { useState, useEffect, useRef } from 'react';
import { TABLEAU_CONFIG } from '../config/tableau.js';
import { 
  BarChart3, 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  RefreshCw, 
  AlertCircle, 
  User,
  Info
} from 'lucide-react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const containerRef = useRef(null);

  const { dashboard } = TABLEAU_CONFIG;

  // Iframe embed URL with Tableau Public query parameters
  const embedUrl = `${dashboard.embedUrl}?:showVizHome=no&:embed=true&:device=${isFullscreen ? 'desktop' : 'default'}&:toolbar=yes`;

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 12000);

    return () => clearTimeout(timer);
  }, [refreshKey]);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setRefreshKey(prev => prev + 1);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.warn("Fullscreen request error:", err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.warn("Exit fullscreen error:", err);
      });
    }
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  return (
    <section id="dashboard" className="py-20 bg-[#0b0307] relative border-t border-[#970747]/25">
      
      {/* Background ambient glow in Dark Pink (#970747) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-[#970747]/15 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#970747]/20 border border-[#970747]/40 text-white text-xs font-semibold tracking-wider uppercase">
              <BarChart3 className="w-3.5 h-3.5 text-[#f472b6]" />
              <span>Tableau Public Interactive View</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {dashboard.title}
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {dashboard.description} Explore dynamic filtering across vehicle segments, 
              compare brand market shares, and examine efficiency distributions in real-time.
            </p>
          </div>

          {/* Action Buttons Top Bar in Dark Pink & White */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={dashboard.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#970747] hover:bg-[#b50955] text-white text-sm font-semibold shadow-lg shadow-[#970747]/30 hover:shadow-[#970747]/50 border border-white/20 transition-all duration-200"
              title="Open full interactive dashboard on Tableau Public in a new tab"
            >
              <span>Open in Tableau Public</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>

            <button
              type="button"
              onClick={handleRefresh}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-[#970747]/30 text-white text-sm font-medium border border-white/20 transition-colors"
              title="Reload dashboard view"
              aria-label="Reload dashboard view"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-[#f472b6]' : 'text-white'}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-[#970747]/30 text-white text-sm font-medium border border-white/20 transition-colors"
              title="Toggle full screen view"
              aria-label="Toggle full screen view"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4 text-white" /> : <Maximize2 className="w-4 h-4 text-white" />}
              <span className="hidden sm:inline">{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
            </button>
          </div>
        </div>

        {/* Dashboard Metadata Bar */}
        <div className="mb-4 px-4 py-3 rounded-xl bg-[#14060e] border border-[#970747]/30 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 text-white">
              <User className="w-3.5 h-3.5 text-[#f472b6]" />
              Author: <strong className="text-white font-bold">{dashboard.author}</strong>
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#de1d77] animate-pulse" />
              Official Tableau Public Embed API
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden md:inline">Credentials: No login required</span>
            <a
              href={dashboard.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f472b6] underline underline-offset-2 flex items-center gap-1 font-semibold"
            >
              Author Profile <ExternalLink className="w-3 h-3 text-[#f472b6]" />
            </a>
          </div>
        </div>

        {/* Tableau Responsive Viewer Container */}
        <div 
          ref={containerRef}
          className={`relative rounded-2xl bg-[#0e0409] border border-[#970747]/40 shadow-2xl overflow-hidden transition-all duration-300 ${
            isFullscreen ? 'p-2' : ''
          }`}
          style={{ minHeight: isFullscreen ? '100vh' : '780px' }}
        >
          {/* Top Embedded Header Strip */}
          <div className="bg-[#170610] px-4 py-2.5 border-b border-[#970747]/30 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#de1d77]" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#970747]" />
              <span className="ml-2 font-mono text-white text-[11px] font-semibold truncate max-w-[280px] sm:max-w-md">
                EVExecutiveDashboard • Tableau Public
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-slate-300 hidden sm:inline">
                {isLoading ? "Syncing visualization..." : "Interactive Ready"}
              </span>
              <a
                href={dashboard.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f472b6] flex items-center gap-1 text-[11px] font-semibold"
              >
                <span>Tableau Direct</span>
                <ExternalLink className="w-3 h-3 text-[#f472b6]" />
              </a>
            </div>
          </div>

          {/* Loading Skeleton & Status in Dark Pink */}
          {isLoading && (
            <div className="absolute inset-0 top-[41px] z-20 bg-[#0b0307]/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#970747]/20 border border-[#970747]/50 flex items-center justify-center text-white">
                  <BarChart3 className="w-8 h-8 animate-pulse text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#970747] flex items-center justify-center border border-white">
                  <RefreshCw className="w-3.5 h-3.5 text-white animate-spin" />
                </div>
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                Connecting to Tableau Public Server...
              </h4>
              <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                Loading live EV executive performance sheets, interactive filters, and calculated metrics.
              </p>

              {/* Animated Progress Bar */}
              <div className="w-64 h-1.5 bg-[#200814] rounded-full overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-r from-[#970747] via-white to-[#970747] animate-[pulse_1.5s_ease-in-out_infinite]" />
              </div>

              <p className="text-xs font-mono text-slate-400">
                Source: public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17934240051930
              </p>
            </div>
          )}

          {/* Error / Fallback State */}
          {hasError && (
            <div className="absolute inset-0 top-[41px] z-20 bg-[#14060e] flex flex-col items-center justify-center p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#970747]/30 border border-[#970747] flex items-center justify-center text-white mb-4">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Unable to Load Embedded Frame
              </h4>
              <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
                Your browser privacy settings, cookie restrictions, or an ad-blocker may be preventing 
                the third-party Tableau Public frame from embedding.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={dashboard.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#970747] hover:bg-[#b50955] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#970747]/30 border border-white/20"
                >
                  <span>Open Directly in Tableau Public</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>
                <button
                  type="button"
                  onClick={handleRefresh}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#970747]/30 text-white text-sm font-medium border border-white/20"
                >
                  Retry Loading
                </button>
              </div>
            </div>
          )}

          {/* Embedded Tableau Iframe */}
          <div className="w-full h-full relative" style={{ minHeight: isFullscreen ? 'calc(100vh - 42px)' : '780px' }}>
            <iframe
              key={refreshKey}
              src={embedUrl}
              title="Electric Vehicle Market Performance & Insights Executive Dashboard"
              className="w-full h-full border-0 rounded-b-2xl"
              style={{
                width: '100%',
                height: isFullscreen ? 'calc(100vh - 42px)' : '780px',
                minHeight: '780px',
                display: 'block',
              }}
              allowFullScreen
              loading="lazy"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          </div>

        </div>

        {/* Helpful User Tips & Accessibility note below embed */}
        <div className="mt-6 p-4 rounded-xl bg-[#14060e] border border-[#970747]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-start sm:items-center gap-2.5">
            <Info className="w-4 h-4 text-[#f472b6] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong className="text-white">Tableau Interaction Tip:</strong> Click any chart element (e.g. specific OEM bar or vehicle segment) 
              to activate linked cross-filtering across the entire dashboard.
            </span>
          </div>

          <a
            href={dashboard.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#f472b6] shrink-0 font-semibold inline-flex items-center gap-1"
          >
            Launch Full Screen on Tableau Public <ExternalLink className="w-3.5 h-3.5 text-[#f472b6]" />
          </a>
        </div>

      </div>
    </section>
  );
}
