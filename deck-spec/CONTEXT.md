# Project 1315: Presentation Context & Source Material

## 1. Project Background & Core Scope
- **Project Initiative**: Project 1315 — Application Portfolio, Staffing Baseline, and Platform Engineering Focus.
- **Target Audience**: NOAA Fisheries Executive Leadership, Office of the Chief Information Officer (OCIO), Program Office Leads, Engineering Teams.
- **Primary Objective**: Present an empirical, data-driven briefing analyzing NOAA Fisheries' 120-system software portfolio and 201 OCIO personnel, establishing the case for modern platform engineering, self-serve cloud infrastructure, RADFish UI standardization, and multi-vendor contract governance.

---

## 2. Empirical Datasets Summary

### A. Application Portfolio (120 Systems)
- **Total Systems**: 120 applications across 16 Financial Management Centers (FMCs).
- **Lifecycle Stages**:
  - Active Development: 66 systems (55.0%)
  - Operations & Maintenance: 41 systems (34.2%)
  - Modernization: 9 systems (7.5%)
  - Sunsetting / Decommissioning: 4 systems (3.3%)
- **Tech Stack Breakdown**:
  - Oracle APEX: 58 systems (48.3%)
  - Java / JSP Monoliths: 27 systems (22.5%)
  - Modern Web (React / Node.js): 10 systems (8.3%)
  - Low-Code / COTS (Appian, ServiceNow, Drupal): 10 systems (8.3%)
  - Scientific & Desktop (PyQt, R Shiny, Python, C++): 15 systems (12.5%)
- **Database DBMS Split**:
  - Oracle Database (19c/21c): 91 (75.8%)
  - PostgreSQL: 16 (13.3%)
  - Appian Cloud DB: 8 (6.7%)
  - SQLite / Local Embedded DB: 3 (2.5%)
  - MySQL / MariaDB & ServiceNow: 2 (1.7%)
- **Hosting Infrastructure Split**:
  - Oracle Cloud Infrastructure (OCI): 86 (71.7%)
  - Linux On-Premises / Research Vessels: 11 (9.2%)
  - Appian Cloud: 8 (6.7%)
  - Google Cloud Platform (GCP): 6 (5.0%)
  - Amazon Web Services (AWS / Acquia): 6 (5.0%)
  - ServiceNow Cloud & Other: 3 (2.5%)

### B. 3 Core Portfolio Heatmap Matrixes
1. **FMC Portfolio Heatmap**:
   - S&T (38), NWFSC (17), OCIO (10), OLE (8), OPR (8), OMB (7), WCRO (6), OSF (6), IATC (6), OHC (4), SEFSC (2), GARFO (2), AFSC (2), SERO (2), PIRO (1), OPR/OHC joint (1).
2. **Technology Stack Heatmap**:
   - Oracle APEX (58), Java / JSP (27), Modern Web [React/Node] (16), COTS/Low-Code (11), Scientific & Desktop (8).
3. **Lifecycle Stage Heatmap**:
   - Cross-tabulation of Active Development (66), Operations & Maintenance (41), Modernization (9), and Sunsetting (4) across FMCs and Stacks.

### C. OCIO Staffing Baseline (201 Personnel)
- **Total Personnel**: 201 individuals across 13 reporting managers (Michael Liddel and direct records excluded).
- **Workforce Composition**:
  - Contractors (`CONT`): 169 (84.1%)
  - Federal Employees (`NOAA`): 30 (14.9%)
  - Commercial / Affiliates (`COMM`/`ASSOC`): 2 (1.0%)
- **Functional Division**:
  - **App Dev & PMO Teams**: 119 personnel (59.2% of OCIO)
    - Joshua Lee (Applications Delivery Branch): 62 (59 Contractors, 3 Feds)
    - Elton Edinborough (PMO): 32 (32 Contractors)
    - Scott Sauri (ST6 App Dev): 25 (24 Contractors, 1 Fed)
  - **Infrastructure, Ops, Security & Governance**: 82 personnel (40.8% of OCIO)
    - Dennis Taylor (21), Darius Dukes-Thibodeaux (11), Samir Mehta (9), Heather Nicholas (9), Joseph Baczkowski (7), Catherine Amores (7), Douglas Brackett (6), Frank Amankwah (6), Andrew Gorbonos (3), Srinivas Tallapragada (3).
- **Top Vendor Ecosystem**:
  - T and T Consulting: 49
  - TSPi: 18
  - RCG: 16
  - iVision: 15
  - Concepts Plus: 13
  - Nuvitek: 13
  - ResolveSoft: 11
  - SAIC: 9
  - Starlo Innovation: 8
  - M2 Strategy: 7

---

## 3. Visual & Interactive Requirements
- **Google Charts API Integration**: Donut charts, Column charts, Stacked Horizontal Bar charts, and a multi-level **Sankey Diagram** illustrating the flow from Total Workforce -> Branch Focus -> Managers -> Employment Type.
- **3 Dedicated Heatmap Slides**: FMC Heatmap, Stack Heatmap, and Lifecycle Heatmap with dynamic density background shading.
- **NOAA Design System**: NOAA Blue (`#003087`), Seagrass (`#00A88F`), Coral (`#FF6B4A`), Sky Gold (`#F59E0B`), and Slate neutrals (`#F8FAFC`, `#0F172A`).
- **Mobile First & Responsive**: Smooth touch swipe support, adaptive chart redraw on resize, and clean viewport fit.
