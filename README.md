# EV Insights — Electric Vehicle Market Performance & Insights

> **Academic Capstone Project & Data Analytics Showcase**  
> An interactive web analytics platform investigating global electric vehicle (EV) market trends, manufacturer adoption, battery technology frontiers, pricing elasticity, and driving range benchmarks.

---

## ⚡ Overview

**EV Insights** is a modern, high-performance web platform built to evaluate empirical electric mobility data. It seamlessly integrates a published **Tableau Public** executive dashboard into a custom, responsive dark-themed React application.

### Key Highlights
- **Zero Third-Party Server Dependencies**: No Python, no Flask, and no external paid hosting (e.g., Render, Railway, Vercel). The entire platform runs as an optimized static web app.
- **Automated GitHub Pages CI/CD**: Packaged with a production GitHub Actions workflow that builds and deploys directly from your repository on every push to `main`.
- **Embedded Business Intelligence**: Direct integration with the published Tableau Public workbook using Tableau's supported Embedding API v3 with responsive containers, loading skeletons, and fallback handling.
- **Configurable Story Module**: Dedicated Story section with ready-to-use configuration for your published Tableau Story alongside deep explanatory market syntheses.

---

## 🚀 Live Visualizations

| Resource | Description | Status / Link |
| :--- | :--- | :--- |
| **EV Executive Dashboard** | Multi-dimensional analysis of volume, pricing, battery kWh, and range. | [Open on Tableau Public](https://public.tableau.com/app/profile/megha.sisodiya/viz/EV_Market_Performance_Market_Story_2026-10-25_17934240051930/EVExecutiveDashboard?publish=yes) |
| **Tableau Profile** | Author's published analytics portfolio. | [Megha Sisodiya on Tableau Public](https://public.tableau.com/app/profile/megha.sisodiya) |
| **Tableau Story** | Chronological narrative sequencing industry transitions. | Configurable in `src/config/tableau.js` |

---

## 🛠️ Technologies Used

- **Frontend Framework**: [React 19](https://react.dev/) (Component-based architecture)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/) (Instant HMR & optimized production bundling)
- **Programming Language**: **JavaScript (ES2022+ / JSX)** (Strictly pure JS, no TypeScript overhead)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with modern dark-theme aesthetics & glassmorphism
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Business Intelligence**: [Tableau Public](https://public.tableau.com/) (Embedding API v3)
- **Source Control**: [GitHub](https://github.com/)
- **Hosting & CI/CD**: [GitHub Pages](https://pages.github.com/) & [GitHub Actions](https://github.com/features/actions)

---

## 📂 Project Structure

```text
ev-insights/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg             # Custom electric vehicle SVG favicon
│   └── assets/                 # Static assets directory
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive navigation with active section spy & mobile drawer
│   │   ├── Hero.jsx            # Project intro, metric badges & interactive EV schematic
│   │   ├── About.jsx           # 4 core research pillars & industry significance
│   │   ├── Dashboard.jsx       # Embedded Tableau Public dashboard with loading & error resilience
│   │   ├── Story.jsx           # Tableau Story embedding & 5 thematic insight cards
│   │   ├── AnalyticsFeatures.jsx # 7 analytical dimension modules & key inquiries
│   │   ├── Methodology.jsx     # 8-stage data science & engineering lifecycle
│   │   ├── TechStack.jsx       # Technology badges & zero-dependency architecture
│   │   ├── Footer.jsx          # Attribution, quick links, and repository info
│   │   └── ScrollToTop.jsx     # Smooth floating back-to-top button
│   ├── config/
│   │   └── tableau.js          # Central configuration for Tableau URLs & metadata
│   ├── App.jsx                 # Main application component assembling all sections
│   ├── main.jsx                # React root entry point
│   └── index.css               # Base dark styles, typography & Tailwind imports
├── index.html                  # HTML entry point with meta tags & Tableau Embedding API
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration with relative base './' for GitHub Pages
└── README.md                   # Complete documentation and deployment guide
```

---

## 💻 Local Installation & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 4. Build for Production
To test the production build locally:
```bash
npm run build
npm run preview
```

---

## 🌐 GitHub Pages Deployment Guide

This project is pre-configured to build and deploy to **GitHub Pages** with zero manual server setup.

### Step 1: Push Code to Your GitHub Repository
If you haven't initialized Git yet:
```bash
git init
git add .
git commit -m "feat: complete EV Insights platform"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings
1. Open your repository on **GitHub**.
2. Go to **Settings** (top navigation tab).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** > **Source**, select:
   👉 **GitHub Actions** (do *not* choose "Deploy from a branch").
5. That's it! GitHub will now automatically trigger the workflow defined in `.github/workflows/deploy.yml`.

### Step 3: Verify Live Deployment
1. Go to the **Actions** tab in your repository to watch the build pipeline run.
2. Once the workflow finishes (green checkmark), your website will be live at:
   ```text
   https://<your-username>.github.io/<your-repo-name>/
   ```

*Note: The Vite configuration uses `base: './'`, ensuring that all stylesheet and script paths resolve correctly under any GitHub Pages subpath.*

---

## 📊 Configuring the Tableau Story URL

The published **EV Executive Dashboard** is already integrated and live. When you are ready to embed your **Tableau Story**:

1. Open `src/config/tableau.js`.
2. Locate the `story` configuration block:
   ```javascript
   story: {
     title: "Electric Vehicle Market Evolution Story",
     // Paste your published Tableau Story link here:
     embedUrl: "https://public.tableau.com/views/YOUR_WORKBOOK/YOUR_STORY_SHEET",
     appUrl: "https://public.tableau.com/app/profile/megha.sisodiya/viz/YOUR_WORKBOOK/YOUR_STORY_SHEET",
   }
   ```
3. Commit and push your changes to GitHub. The GitHub Actions pipeline will re-deploy your site with the live Story embedded!
4. You can also test and preview any Story URL interactively in the live website using the **"Configure Story URL"** button in the Story section.

---

## 🔬 8-Stage Project Methodology

1. **Data Collection**: Acquisition of EV registration records, EPA/WLTP certification catalogs, and manufacturer specifications.
2. **Data Preparation & Cleaning**: Deduplication, missing value imputation (e.g. undisclosed battery kWh), and metric standardization.
3. **Exploratory Data Analysis (EDA)**: Statistical profiling, price/range interquartile distributions, and efficiency correlation matrices.
4. **Data Visualization Architecture**: Selection of visual encodings (choropleths, box plots, scatter distributions, range bars).
5. **Tableau Dashboard Development**: Level-of-Detail (LOD) expressions, synchronized cross-filtering, and executive layout containers.
6. **Story Creation & Narrative**: Chronological sequencing of market milestones and powertrain adoption inflection points.
7. **Web Integration**: Embedding via Tableau Embedding API v3 in a responsive React SPA with mobile optimization.
8. **Testing & Documentation**: Cross-browser accessibility testing, automated CI/CD pipeline, and comprehensive documentation.

---

## ⚠️ Known Limitations & Design Rationale

- **No Server-Side Database**: The site does not maintain an active SQL or Python backend since all dynamic analytical calculations are performed client-side by Tableau's visual engine.
- **Third-Party Cookie Privacy Settings**: If a visitor's browser or ad-blocker blocks third-party iframes from Tableau Public, the dashboard provides a prominent fallback button to launch the visualization directly on Tableau Public in a new tab.

---

## 📄 License & Attribution

- **Author**: Megha Sisodiya
- **Project**: Electric Vehicle Market Performance & Insights
- **License**: MIT
