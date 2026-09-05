# Project 1315: Presentation Requirements Document (PRD)

> **Status**: In Review (Updated per User Directives)  
> **Topic**: NOAA Fisheries Application Inventory, Staffing Baseline, and Platform Engineering Roadmap (Project 1315)  
> **Target Audience**: NOAA Fisheries Executive Leadership, OCIO Leadership, Program Managers, Technical Leads  
> **Presentation Engine**: Next.js (App Router) + Tailwind CSS + Framer Motion + Google Charts API  

---

## 1. Executive Summary & Goals

### 1.1 Objective
Deliver a factual, empirical, data-driven briefing analyzing the **120-application catalog** across 16 Financial Management Centers (FMCs) and the **201 OCIO personnel** across 13 management teams. The briefing establishes clear justification for:
1. Modernizing legacy Java/JSP and fragmented desktop tooling.
2. Managing the heavy vendor contractor footprint (84.1% contractor ratio across 10+ vendor firms).
3. Implementing Project 1315's 5 core platform engineering pillars (Unified Repositories, CI/CD Pipelines, Self-Serve Cloud CaaS, RADFish UI System, Documentation-as-Code Playbook).

### 1.2 Key Changes from Previous Outline
- **Dedicated 3-Slide Heatmap Analysis**: Broken out into three focused, interactive heatmaps:
  1. **FMC Portfolio Heatmap** (Distribution & density across 16 FMCs)
  2. **Technology Stack Heatmap** (Distribution & density across tech stacks & categories)
  3. **Lifecycle Stage Heatmap** (Active Development, O&M, Modernization, and Sunsetting cross-tabulations)
- **Removed MSA Domain Slide**: Replaced by the expanded 3-slide heatmap deep dives.
- **Dedicated Google Charts Staffing Sankey**: Interactive flow tracking the 201 OCIO personnel from total workforce down to branches, direct managers, and contractor/fed employment types.

---

## 2. Design System & Branding Directives

- **Primary Colors**:
  - NOAA Blue: `#003087` (`text-noaa-blue`, `bg-noaa-blue`)
  - Seagrass Green: `#00A88F` (`text-seagrass`, `bg-seagrass`)
  - Coral Orange: `#FF6B4A` (`text-coral`, `bg-coral`)
  - Sky Gold: `#F59E0B` (`text-skygold`, `bg-skygold`)
- **Typography**: Inter (Weights: 300 Light, 400 Regular, 500/600 Medium/Semi-bold; no heavy 700+ bolds).
- **Chart Visualizations**: Google Charts API (`corechart`, `sankey`, `bar`, `table`) with NOAA brand color palette mappings.
- **Responsiveness**: Mobile-first auto-collapsing cards, swipe gestures on touch viewports, and automated chart redraw on resize.

---

## 3. Slide-by-Slide Visual & Chart Architecture (10-Slide Deck Outline)

| Slide # | Slide Title | Slide Type / Template | Primary Visual / Google Charts Integration | Key Metrics & Data Content |
| :--- | :--- | :--- | :--- | :--- |
| **Slide 1** | **Project 1315: Executive Scope & KPIs** | `title` + KPI Grid | 4 Metric KPI Cards with branded accent pills | • **120 Applications** (16 FMCs)<br>• **201 OCIO Personnel** (84.1% Contractors)<br>• **119 App Dev / PMO Staff** (59.2% Footprint)<br>• **13 Direct Reporting Managers** |
| **Slide 2** | **Application Portfolio Baseline** | `charts` (Dual Column/Donut) | **Chart A:** Donut Chart (`PieChart` with `pieHole: 0.45`)<br>**Chart B:** Column Chart (`ColumnChart`) | • **Lifecycle**: Active Dev 66 (55%), O&M 41 (34.2%), Modernization 9 (7.5%), Sunset 4 (3.3%)<br>• **Tech Stack**: APEX 58 (48.3%), Java/JSP 27 (22.5%), Desktop 15 (12.5%), React 10 (8.3%), COTS 10 (8.3%) |
| **Slide 3** | **FMC Portfolio Heatmap** | `heatmap` + Stacked Bar | **Visual A:** HTML/CSS Density Table (16 FMCs with app density shading)<br>**Visual B:** Google Charts `BarChart` (`isStacked: true`) | • Top FMCs: S&T (38), NWFSC (17), OCIO (10), OLE (8), OPR (8), OMB (7), WCRO (6), OSF (6), IATC (6), OHC (4)<br>• Regional Offices & Science Centers representation |
| **Slide 4** | **Technology Stack Heatmap** | `heatmap` + Column/Donut | **Visual A:** Tech Stack Cross-Tabulation Matrix (5 Categories × Hosting/DB)<br>**Visual B:** Google Charts `ColumnChart` | • Oracle APEX (58), Java/JSP (27), Modern Web React/Node (16), COTS/Low-Code (11), Scientific/Desktop (8)<br>• Architectural density & legacy footprint |
| **Slide 5** | **Lifecycle Stage Heatmap** | `heatmap` + Stacked Column | **Visual A:** Lifecycle Matrix (FMC × Lifecycle Stage: Active Dev, O&M, Modernization, Sunset)<br>**Visual B:** Google Charts `ColumnChart` (`isStacked: true`) | • **Active Development**: 66 apps (heavy in S&T, NWFSC, OCIO)<br>• **Operations & Maintenance**: 41 apps<br>• **Modernization**: 9 apps<br>• **Sunsetting**: 4 apps |
| **Slide 6** | **Database & Hosting Infrastructure** | `charts` (Dual Donut) | **Chart A:** Database Platforms Donut<br>**Chart B:** Hosting Cloud Environments Donut | • **DB**: Oracle 91 (75.8%), Postgres 16 (13.3%), Appian 8 (6.7%), SQLite 3 (2.5%), MySQL/Other 2 (1.7%)<br>• **Hosting**: OCI 86 (71.7%), On-Prem/Vessels 11 (9.2%), Appian 8 (6.7%), GCP 6 (5.0%), AWS 6 (5.0%), Other 3 (2.5%) |
| **Slide 7** | **System Rationalization & Modernization Pipeline** | `split` / Transition Cards | Multi-column Flow Cards & Sunset Timeline | • **6 Direct Decommissions**: FES Results DB, MDMS, MDRS, OLE SEIVR Declarations, OLE VMS VRS, OLE SEIVR Web Service<br>• **4 Modernization Pairs**: MMHSRP $\rightarrow$ HealthMAP (RADFish), NPS Legacy $\rightarrow$ NPS ServiceNow + BigQuery, SISP Legacy $\rightarrow$ SISP New (RADFish), ITDS Legacy $\rightarrow$ ITDS New<br>• **Phased Sunset**: PIMS (2-Year Phase-out) |
| **Slide 8** | **OCIO Staffing & Multi-Vendor Ecosystem** | `charts` (Donut + Bar) | **Chart A:** Workforce Ratio Donut<br>**Chart B:** Top 10 Vendor Firms Bar Chart | • **Staff Split**: Contractors 169 (84.1%), Federal Employees 30 (14.9%), Commercial/Affiliate 2 (1.0%)<br>• **Top Vendors**: T&T Consulting (49), TSPi (18), RCG (16), iVision (15), Concepts Plus (13), Nuvitek (13), ResolveSoft (11), SAIC (9), Starlo (8), M2 (7) |
| **Slide 9** | **Software Engineering Allocation & Staffing Flow** | `sankey` | **Google Chart:** Multi-level Interactive **Sankey Diagram** (`Sankey`) | • **Flow Structure**:<br>&nbsp;&nbsp;Total Workforce (201)<br>&nbsp;&nbsp;$\rightarrow$ App Dev & PMO (119) vs. Infra/Ops/Security (82)<br>&nbsp;&nbsp;$\rightarrow$ Managers (Josh Lee 62, Elton Edinborough 32, Scott Sauri 25, Dennis Taylor 21, Darius Dukes-Thibodeaux 11, etc.)<br>&nbsp;&nbsp;$\rightarrow$ Contractors (169) vs. Feds (30) |
| **Slide 10** | **Project 1315: 5 Core Technical Focus Areas** | `featureGrid` (5 Pillars) | 5 Interactive Architecture Feature Cards with Badge Accents | 1. **Unified Code Repositories**: GitLab (FISMA Moderate) + GitHub (Open Science)<br>2. **Enterprise CI/CD Pipelines**: Automated SonarQube/OWASP scans & build automation<br>3. **Self-Serve Cloud Infrastructure**: GCP landing zones + CaaS + Terraform IaC<br>4. **RADFish Ecosystem Expansion**: USWDS-compliant standard UI component library<br>5. **Documentation-as-Code Playbook**: Git-backed Docusaurus for SOPs and contract requirements |

---

## 4. Technical Implementation Specifications

### 4.1 Reusable Google Chart Component (`GoogleChart.tsx`)
- Embeds Google Charts loader dynamically (`https://www.gstatic.com/charts/loader.js`).
- Supports packages: `['corechart', 'sankey', 'bar', 'table']`.
- Custom NOAA theme styling: font `Inter`, smooth borders, high-contrast legend, customized tooltips.
- Automated responsive redraw via `ResizeObserver` and window resize listeners.

### 4.2 Interactive Heatmap Slides
- **`HeatmapSlide.tsx`**: Reusable component supporting configurable matrix dimensions (Rows: FMCs, Stacks, or Lifecycles; Columns: Categories or Stages), density color gradients (Slate/Cyan/NOAA Blue), cell tooltips, and linked Google Chart.

### 4.3 Interactive Sankey Diagram
- 3-tier flow with NOAA color-coded nodes:
  `Total Workforce (201)` $\rightarrow$ `Functional Directorate (App Dev 119 / Infra 82)` $\rightarrow$ `Managers (13 Leads)` $\rightarrow$ `Employment Type (Contractors / Feds)`.
