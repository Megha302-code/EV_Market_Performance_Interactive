/**
 * EV Insights — Tableau & Project Configuration
 * 
 * Edit this file to update the Tableau URLs, author details,
 * or repository links.
 */

export const TABLEAU_CONFIG = {
  // Published Tableau Executive Dashboard
  dashboard: {
    title: "Electric Vehicle Executive Performance Dashboard",
    description: "Multi-dimensional analytical view of global electric vehicle market metrics, manufacturer adoption, battery capacities, and pricing dynamics.",
    author: "Megha Sisodiya",
    profileUrl: "https://public.tableau.com/app/profile/megha.sisodiya",
    
    // Direct public URL provided for the published project
    appUrl: "https://public.tableau.com/app/profile/megha.sisodiya/viz/EV_Market_Performance_Market_Story_2026-10-25_17934240051930/EVExecutiveDashboard?publish=yes",
    
    // Embed View URL used by the Tableau JavaScript Embedding API & iframe
    embedUrl: "https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17934240051930/EVExecutiveDashboard",
    
    // Default toolbar & sizing settings
    device: "default", // "default", "desktop", "tablet", or "phone"
    hideTabs: true,
    hideToolbar: false,
  },

  // Tableau Story Configuration
  // When your Tableau Story is published, paste its URL below.
  // Leave empty if not published yet — the application will automatically
  // display a guided configuration panel alongside explanatory narrative cards.
  story: {
    title: "Electric Vehicle Market Evolution Story",
    description: "Chronological narrative sequencing key industry inflection points, powertrain adoption rates, and technological milestones.",
    
    // Example: "https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17934240051930/EVMarketStory"
    embedUrl: "", // Paste your Tableau Story embed or view URL here
    appUrl: "",   // Paste your Tableau Story public browser URL here
    
    // Default fallback guidance if URL is pending
    isPendingConfiguration: true,
  },

  // Project Information & Repository Link
  project: {
    name: "EV Insights",
    fullTitle: "Electric Vehicle Market Performance & Insights",
    subtitle: "A comprehensive data analytics & business intelligence platform for modern electric mobility.",
    repositoryUrl: "https://github.com", // Paste your actual GitHub repository link here (e.g., https://github.com/username/ev-insights)
    academicContext: "Academic Capstone Project & Data Analytics Showcase",
    year: "2026",
    license: "MIT",
  },
};

/**
 * Analytics Features Data Model
 * Maps analytical dimensions to specific investigative questions and business insights
 * addressed in the Tableau dashboard workbook.
 */
export const ANALYTICS_FEATURES = [
  {
    id: "sales-analysis",
    title: "Manufacturer Sales Analysis",
    category: "Market Share & Volume",
    summary: "Evaluates annual sales volume across leading automakers (e.g. Tesla, BYD, Volkswagen Group) to identify volume momentum and market consolidation.",
    icon: "TrendingUp",
    keyQuestions: [
      "Which automakers dominate current BEV and PHEV delivery volumes?",
      "How rapidly are legacy OEMs closing the production delta with pure-play EV leaders?",
      "What are the quarterly growth velocities across key regional market leaders?"
    ],
    visualizationType: "Aggregated Bar & Trend Line Charts",
    tableauSheetHint: "Sales Volume by Make & Year",
  },
  {
    id: "pricing-comparison",
    title: "EV Pricing Comparison",
    category: "Cost & Economics",
    summary: "Examines base MSRP distribution, trim variance, and price elasticity across vehicle segments from entry commuters to premium long-range SUVs.",
    icon: "DollarSign",
    keyQuestions: [
      "What is the average price premium of BEVs relative to parity internal combustion vehicles?",
      "How do federal/regional subsidies correlate with median consumer purchase pricing?",
      "Which vehicle classes offer the lowest dollar-per-mile of certified range?"
    ],
    visualizationType: "Box Plots & Scatter Distributions",
    tableauSheetHint: "MSRP Distribution & Segment Pricing",
  },
  {
    id: "geo-distribution",
    title: "Country-wise EV Distribution",
    category: "Geographic Penetration",
    summary: "Visualizes regional registration density, charging infrastructure readiness, and national EV adoption percentages across leading global markets.",
    icon: "Globe",
    keyQuestions: [
      "Which territories exhibit the highest EV share of new vehicle registrations?",
      "Where are regional disparities in fast-charging density impacting adoption rates?",
      "How do regulatory emissions mandates correlate with country-level fleet conversion?"
    ],
    visualizationType: "Choropleth Geographic Density Maps",
    tableauSheetHint: "Regional Density & Adoption Geospatial",
  },
  {
    id: "battery-capacity",
    title: "Battery Capacity Analysis",
    category: "Energy Storage",
    summary: "Assesses usable pack kilowatt-hours (kWh), chemistry configurations (LFP vs. NMC/NCA), and volumetric pack weight efficiencies across generations.",
    icon: "BatteryCharging",
    keyQuestions: [
      "What is the median usable kWh battery pack capacity in modern commercial EV offerings?",
      "How has LFP adoption shifted consumer battery sizing in budget segments?",
      "What is the degradation risk curve associated with high C-rate DC fast charging?"
    ],
    visualizationType: "Histograms & Density Curves",
    tableauSheetHint: "Pack Capacity (kWh) Distribution",
  },
  {
    id: "driving-range",
    title: "Driving Range Comparison",
    category: "Performance & Usability",
    summary: "Benchmarks official EPA and WLTP certified single-charge ranges across vehicle classes, addressing consumer range anxiety and usability frontiers.",
    icon: "Gauge",
    keyQuestions: [
      "What is the average certified range in the entry-level vs luxury vehicle tiers?",
      "How do environmental temperature variations historically degrade real-world range?",
      "What proportion of modern EV models achieve 300+ miles on a single charge?"
    ],
    visualizationType: "Horizontal Range Range-Bar Benchmarks",
    tableauSheetHint: "Certified Range by Make & Model",
  },
  {
    id: "manufacturer-distribution",
    title: "Manufacturer Distribution",
    category: "Competitive Landscape",
    summary: "Profiles portfolio breadth, model variety, platform sharing architectures, and powertrain splits (BEV vs. PHEV) across global automotive groups.",
    icon: "Layers",
    keyQuestions: [
      "How diversified are individual OEM electric portfolio offerings?",
      "What percentage of automaker portfolios are built on dedicated EV skateboards vs converted ICE platforms?",
      "Which manufacturers maintain the broadest spread across multiple vehicle segments?"
    ],
    visualizationType: "Treemaps & Segment Matrices",
    tableauSheetHint: "Automaker Model Distribution & Categories",
  },
  {
    id: "efficiency-analysis",
    title: "EV Efficiency Analysis",
    category: "Aerodynamics & Consumption",
    summary: "Quantifies vehicle consumption metrics (Watt-hours per mile / kWh per 100km) to assess thermal management and aerodynamic drag efficiency.",
    icon: "Zap",
    keyQuestions: [
      "Which vehicle form factors achieve optimal sub-250 Wh/mi consumption in highway cruising?",
      "How does vehicle curb weight correlate with real-world energy consumption penalty?",
      "What powertrain inverter technologies (e.g., Silicon Carbide / SiC) yield highest system efficiencies?"
    ],
    visualizationType: "Multi-variable Correlation Scatter Matrix",
    tableauSheetHint: "Energy Efficiency Wh/mi vs Vehicle Mass",
  },
];

/**
 * Structured 8-Stage Methodology
 */
export const METHODOLOGY_STEPS = [
  {
    step: 1,
    title: "Data Collection",
    badge: "Ingestion",
    description: "Systematic acquisition of global EV registration datasets, government transportation databases, EPA/WLTP certification catalogs, and manufacturer technical specification sheets.",
    deliverables: "Raw tabular dataset repositories, technical specification schemas, and schema definitions.",
    icon: "Database",
  },
  {
    step: 2,
    title: "Data Preparation & Cleaning",
    badge: "Preprocessing",
    description: "Data deduplication, handling missing attributes (e.g. undisclosed battery kWh ratings), standardizing currency conversions for international MSRPs, and normalizing range metrics between EPA and WLTP standards.",
    deliverables: "Sanitized data pipeline, validation scripts, and standardized tabular records.",
    icon: "Filter",
  },
  {
    step: 3,
    title: "Exploratory Data Analysis (EDA)",
    badge: "Statistical Profiling",
    description: "Descriptive statistical computations evaluating distributions of price, battery size, and range; interquartile outlier detection; and correlation matrices between curb weight, efficiency, and range.",
    deliverables: "Statistical summary matrices, variance distributions, and hypothesis logs.",
    icon: "Search",
  },
  {
    step: 4,
    title: "Data Visualization Architecture",
    badge: "Visual Design",
    description: "Selection of visual encodings tailored to perceptual effectiveness: choropleth maps for geographic penetration, scatter plots with regression trends for efficiency vs weight, and linked box plots for segment pricing.",
    deliverables: "Visual encoding specifications, color palette accessibility standards, and visual wireframes.",
    icon: "PieChart",
  },
  {
    step: 5,
    title: "Tableau Dashboard Development",
    badge: "BI Engineering",
    description: "Construction of calculated fields, dynamic parameters, level-of-detail (LOD) expressions, synchronized cross-filtering actions, and responsive layout containers in Tableau Public.",
    deliverables: "Production Tableau workbook published to Tableau Public server with executive dashboard layout.",
    icon: "LayoutDashboard",
  },
  {
    step: 6,
    title: "Story Creation & Narrative Flow",
    badge: "Data Storytelling",
    description: "Sequencing exploratory charts into an engaging Tableau Story with guided captioning, highlighting structural market tipping points, inflection years, and technology transitions.",
    deliverables: "Interactive Tableau Story checkpoints conveying cohesive market insights.",
    icon: "BookOpen",
  },
  {
    step: 7,
    title: "Web Integration & Responsive Design",
    badge: "Full-Stack Web",
    description: "Embedding the Tableau visual analytics inside a custom high-performance React application via Tableau's official Embedding API v3, featuring a bespoke dark UI, mobile optimization, and loading resilience.",
    deliverables: "Production React/Vite single-page web application optimized for desktop and mobile viewports.",
    icon: "Code2",
  },
  {
    step: 8,
    title: "Testing, Verification & Documentation",
    badge: "CI/CD & Review",
    description: "Cross-browser validation, accessibility audits, automated GitHub Actions deployment pipeline setup for GitHub Pages, and comprehensive README documentation.",
    deliverables: "Automated GitHub Pages deployment, accessibility verification, and complete technical documentation.",
    icon: "CheckCircle2",
  },
];

/**
 * Verified Technologies Stack
 */
export const TECH_STACK = [
  {
    name: "React 19",
    category: "Frontend Framework",
    purpose: "Component-based declarative user interface architecture",
    icon: "Atom",
    badge: "v19.0",
  },
  {
    name: "Vite",
    category: "Build Tool & Bundler",
    purpose: "Instant HMR development environment and optimized static production bundling",
    icon: "Flame",
    badge: "v6+",
  },
  {
    name: "JavaScript (ES2022+)",
    category: "Programming Language",
    purpose: "Modern, standard JavaScript driving client application logic without build bloat",
    icon: "FileCode",
    badge: "ES6+",
  },
  {
    name: "HTML5 & Semantic Web",
    category: "Markup & Structure",
    purpose: "Semantic, accessible document structure adhering to W3C standards",
    icon: "Globe",
    badge: "HTML5",
  },
  {
    name: "CSS3 & Tailwind CSS",
    category: "Styling & Design System",
    purpose: "Utility-first styling powering the responsive dark theme and bespoke visual aesthetics",
    icon: "Palette",
    badge: "Tailwind v4",
  },
  {
    name: "Tableau Public",
    category: "Business Intelligence",
    purpose: "Interactive executive data visualizations and visual analytics embedding",
    icon: "BarChart3",
    badge: "BI Platform",
  },
  {
    name: "GitHub",
    category: "Source Control & VCS",
    purpose: "Code versioning, collaboration, open-source portfolio hosting, and revision tracking",
    icon: "GitBranch",
    badge: "VCS",
  },
  {
    name: "GitHub Pages & Actions",
    category: "CI/CD & Static Hosting",
    purpose: "Automated zero-cost deployment pipeline directly compiling and hosting the static site",
    icon: "Workflow",
    badge: "CI/CD",
  },
];
