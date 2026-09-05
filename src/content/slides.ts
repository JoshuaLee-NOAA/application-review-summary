import { PresentationConfig } from "@/types/presentation";
import appsCatalog from "./apps_catalog.json";

export const presentationConfig: PresentationConfig = {
  title: "Project 1315: Application Portfolio & Staffing Baseline",
  shortTitle: "Project 1315",
  subtitle: "Briefing on application inventory, staffing baseline, and FY27 planning",
  author: "Joshua Lee",
  version: "2.0.0",
  lastUpdated: "Q4 FY26",
  slides: [
    // -------------------------------------------------------------
    // SLIDE 1: Title & Executive Scope Dashboard
    // -------------------------------------------------------------
    {
      id: "slide-1",
      type: "title",
      title: "Project 1315: Application Portfolio & Staffing Baseline",
      subtitle:
        "Briefing on application inventory, staffing baseline, and FY27 planning.",
      category: "EXECUTIVE BRIEFING",
      author: "Joshua Lee",
      authorRole: "Applications Delivery Branch Chief",
      date: "Q4 FY26",
      tags: ["Project 1315", "Application Inventory", "Staffing Baseline", "Platform Engineering"],
      logoPath: "/logos/fisheries.png",
      kpis: [
        {
          id: "kpi-apps",
          value: "120",
          label: "Cataloged Systems",
          description: "Across 16 Financial Management Centers (FMCs)",
          trend: "Portfolio",
          badgeColor: "noaa",
        },
        {
          id: "kpi-dev",
          value: "119",
          label: "App Dev / PMO Staff",
          description: "59.2% Software Engineering Footprint",
          trend: "3 Core Teams",
          badgeColor: "seagrass",
        },
        {
          id: "kpi-modernization",
          value: "10",
          label: "Target Modernizations",
          description: "6 Planned decommissions & 4 RADFish transitions",
          trend: "Debt",
          badgeColor: "coral",
        },
      ],
      notes: "Executive title slide establishing the empirical scope of Project 1315.",
    },

    // -------------------------------------------------------------
    // SLIDE 2: Application Portfolio Baseline (120 Systems)
    // -------------------------------------------------------------
    {
      id: "slide-2",
      type: "charts",
      title: "Application Portfolio Baseline (120 Systems)",
      subtitle:
        "Distribution across operational lifecycle stages and underlying software technology frameworks.",
      category: "PORTFOLIO MACRO VIEW",
      charts: [
        {
          id: "chart-lifecycle-donut",
          title: "Lifecycle Stage Breakdown",
          subtitle: "120 Systems cataloged across all operational phases",
          chartType: "PieChart",
          height: 320,
          data: [
            ["Lifecycle Stage", "Applications"],
            ["Active Development", 66],
            ["Operations & Maintenance", 41],
            ["Modernization Active", 9],
            ["Sunsetting / Decommission", 4],
          ],
          options: {
            pieHole: 0.45,
            colors: ["#003087", "#00A88F", "#F59E0B", "#FF6B4A"],
            chartArea: { width: "90%", height: "80%" },
          },
        },
        {
          id: "chart-techstack-column",
          title: "Technology Stack Distribution",
          subtitle: "5 Core Framework Categories across 120 Applications",
          chartType: "ColumnChart",
          height: 320,
          data: [
            ["Tech Stack", "Applications", { role: "style" }, { role: "annotation" }],
            ["Oracle APEX", 58, "#003087", "58 (48.3%)"],
            ["Java / JSP", 27, "#00A88F", "27 (22.5%)"],
            ["Scientific & Desktop", 15, "#F59E0B", "15 (12.5%)"],
            ["Modern Web (React)", 10, "#06B6D4", "10 (8.3%)"],
            ["COTS / Low-Code", 10, "#FF6B4A", "10 (8.3%)"],
          ],
          options: {
            legend: { position: "none" },
            vAxis: { title: "Number of Systems", minValue: 0 },
            chartArea: { width: "85%", height: "70%" },
          },
        },
      ],
      summaryNote:
        "Oracle APEX accounts for nearly half (48.3%) of all systems, while legacy Java/JSP monolithic applications represent 22.5% of the overall portfolio.",
    },

    // -------------------------------------------------------------
    // SLIDE 3: Application Portfolio Catalog (120 Systems by FMC)
    // -------------------------------------------------------------
    {
      id: "slide-3",
      type: "portfolioGrid",
      title: "Application Portfolio Catalog (120 Systems)",
      subtitle:
        "Complete inventory of 120 software systems grouped and color-coded across 16 Financial Management Centers.",
      category: "PORTFOLIO INVENTORY",
      apps: appsCatalog,
      summaryNote:
        "Dotted border denotes the 30 systems in the Regional Subteam Portfolio across Science Centers (NWFSC, AFSC, SEFSC) and Regional Offices (WCRO, GARFO, SERO). Note: ITDS is allocated to the Regulatory Subteam Portfolio.",
    },

    // -------------------------------------------------------------
    // SLIDE 4: Heatmap 1 — Financial Management Centers (FMCs)
    // -------------------------------------------------------------
    {
      id: "slide-4",
      type: "heatmap",
      title: "Portfolio Heatmap: Financial Management Centers (FMCs)",
      subtitle:
        "Cross-tabulation of application counts by technology stack across all 16 NOAA Fisheries program offices and science centers.",
      category: "HEATMAP 1 / 3 — FMCs",
      summaryMetrics: [
        { label: "Top FMC (S&T)", value: "38 Apps (31.7%)" },
        { label: "Science Centers", value: "23 Apps (19.2%)" },
        { label: "HQ Program Offices", value: "79 Apps (65.8%)" },
        { label: "Regional Offices", value: "11 Apps (9.2%)" },
      ],
      heatmap: {
        totalLabel: "Financial Management Center (FMC)",
        rowHeaders: [
          { key: "ST", label: "Office of Science and Technology (S&T)", total: 38 },
          { key: "NWFSC", label: "Northwest Fisheries Science Center (NWFSC)", total: 17 },
          { key: "OCIO", label: "Office of the Chief Information Officer (OCIO)", total: 10 },
          { key: "OLE", label: "Office of Law Enforcement (OLE)", total: 8 },
          { key: "OPR", label: "Office of Protected Resources (OPR)", total: 8 },
          { key: "OMB", label: "Office of Management and Budget (OMB)", total: 7 },
          { key: "WCRO", label: "West Coast Regional Office (WCRO)", total: 6 },
          { key: "OSF", label: "Office of Sustainable Fisheries (OSF)", total: 6 },
          { key: "IATC", label: "Office of Intl Affairs, Trade & Commerce (IATC)", total: 6 },
          { key: "OHC", label: "Office of Habitat Conservation (OHC)", total: 4 },
          { key: "SEFSC", label: "Southeast Fisheries Science Center (SEFSC)", total: 2 },
          { key: "GARFO", label: "Greater Atlantic Regional Fisheries Office (GARFO)", total: 2 },
          { key: "AFSC", label: "Alaska Fisheries Science Center (AFSC)", total: 2 },
          { key: "SERO", label: "Southeast Regional Office (SERO)", total: 2 },
          { key: "PIRO", label: "Pacific Islands Regional Office (PIRO)", total: 1 },
          { key: "ECO", label: "OPR / OHC Joint Program (ECO)", total: 1 },
        ],
        colHeaders: [
          { key: "apex", label: "Oracle APEX", total: 58 },
          { key: "java", label: "Java / JSP", total: 27 },
          { key: "react", label: "Modern Web", total: 10 },
          { key: "cots", label: "COTS/Low-Code", total: 10 },
          { key: "desktop", label: "Scientific/Desktop", total: 15 },
        ],
        matrix: {
          ST: { apex: 19, java: 11, react: 4, cots: 0, desktop: 4 },
          NWFSC: { apex: 11, java: 0, react: 5, cots: 0, desktop: 1 },
          OCIO: { apex: 5, java: 2, react: 0, cots: 2, desktop: 1 },
          OLE: { apex: 2, java: 3, react: 1, cots: 2, desktop: 0 },
          OPR: { apex: 4, java: 2, react: 1, cots: 1, desktop: 0 },
          OMB: { apex: 2, java: 2, react: 0, cots: 3, desktop: 0 },
          WCRO: { apex: 5, java: 0, react: 1, cots: 0, desktop: 0 },
          OSF: { apex: 1, java: 3, react: 0, cots: 2, desktop: 0 },
          IATC: { apex: 2, java: 2, react: 2, cots: 0, desktop: 0 },
          OHC: { apex: 4, java: 0, react: 0, cots: 0, desktop: 0 },
          SEFSC: { apex: 0, java: 0, react: 2, cots: 0, desktop: 0 },
          GARFO: { apex: 2, java: 0, react: 0, cots: 0, desktop: 0 },
          AFSC: { apex: 0, java: 0, react: 1, cots: 0, desktop: 1 },
          SERO: { apex: 1, java: 1, react: 0, cots: 0, desktop: 0 },
          PIRO: { apex: 0, java: 1, react: 0, cots: 0, desktop: 0 },
          ECO: { apex: 0, java: 0, react: 0, cots: 1, desktop: 0 },
        },
      },
      sideChart: {
        id: "side-chart-fmc",
        title: "Top 8 FMCs by System Count",
        chartType: "BarChart",
        height: 420,
        data: [
          ["FMC", "Applications", { role: "style" }],
          ["S&T (OST)", 38, "#003087"],
          ["NWFSC", 17, "#00A88F"],
          ["OCIO", 10, "#06B6D4"],
          ["OLE", 8, "#F59E0B"],
          ["OPR", 8, "#FF6B4A"],
          ["OMB", 7, "#6366F1"],
          ["WCRO", 6, "#334155"],
          ["OSF", 6, "#64748B"],
        ],
        options: {
          legend: { position: "none" },
          hAxis: { title: "Systems" },
          chartArea: { width: "65%", height: "80%" },
        },
      },
      summaryNote:
        "S&T (38 systems) and NWFSC (17 systems) represent the highest concentration of custom applications, comprising 45.8% of the agency's catalog.",
    },

    // -------------------------------------------------------------
    // SLIDE 5: Heatmap 2 — Technology Stacks & Architectures
    // -------------------------------------------------------------
    {
      id: "slide-5",
      type: "heatmap",
      title: "Portfolio Heatmap: Technology Stacks & Architectures",
      subtitle:
        "Cross-tabulation of the 5 technology stack categories across Database Platforms and Cloud Hosting environments.",
      category: "HEATMAP 2 / 3 — TECH STACKS",
      summaryMetrics: [
        { label: "Oracle Cloud (OCI)", value: "86 Systems (71.7%)" },
        { label: "Oracle Database (19c/21c)", value: "91 Systems (75.8%)" },
        { label: "PostgreSQL Database", value: "16 Systems (13.3%)" },
        { label: "Multi-Cloud (GCP/AWS)", value: "12 Systems (10.0%)" },
      ],
      heatmap: {
        totalLabel: "Technology Category",
        rowHeaders: [
          { key: "apex", label: "Oracle APEX", subLabel: "Rapid Web Database Apps", total: 58 },
          { key: "java", label: "Java / JSP Monoliths", subLabel: "Legacy Spring / Web Services", total: 27 },
          { key: "react", label: "Modern Web (React / Node)", subLabel: "Microservices & UI Apps", total: 16 },
          { key: "cots", label: "COTS / Low-Code", subLabel: "Appian, ServiceNow, Drupal", total: 11 },
          { key: "desktop", label: "Scientific & Desktop", subLabel: "PyQt, R Shiny, Python, C++", total: 8 },
        ],
        colHeaders: [
          { key: "oci", label: "OCI Cloud", total: 86 },
          { key: "onprem", label: "On-Prem/Vessels", total: 11 },
          { key: "appian", label: "Appian Cloud", total: 8 },
          { key: "gcp", label: "GCP", total: 6 },
          { key: "aws", label: "AWS", total: 6 },
          { key: "other", label: "Other Cloud", total: 3 },
        ],
        matrix: {
          apex: { oci: 58, onprem: 0, appian: 0, gcp: 0, aws: 0, other: 0 },
          java: { oci: 20, onprem: 4, appian: 0, gcp: 1, aws: 2, other: 0 },
          react: { oci: 6, onprem: 2, appian: 0, gcp: 4, aws: 3, other: 1 },
          cots: { oci: 0, onprem: 0, appian: 8, gcp: 0, aws: 1, other: 2 },
          desktop: { oci: 2, onprem: 5, appian: 0, gcp: 1, aws: 0, other: 0 },
        },
      },
      sideChart: {
        id: "side-chart-db",
        title: "Underlying Database Platforms",
        chartType: "ColumnChart",
        height: 380,
        data: [
          ["Database", "Systems", { role: "style" }, { role: "annotation" }],
          ["Oracle (19c/21c)", 91, "#003087", "91 (75.8%)"],
          ["PostgreSQL", 16, "#00A88F", "16 (13.3%)"],
          ["Appian DB", 8, "#F59E0B", "8 (6.7%)"],
          ["SQLite / Local", 3, "#64748B", "3 (2.5%)"],
          ["MySQL / Other", 2, "#FF6B4A", "2 (1.7%)"],
        ],
        options: {
          legend: { position: "none" },
          vAxis: { title: "Systems" },
          chartArea: { width: "80%", height: "70%" },
        },
      },
      summaryNote:
        "71.7% of all applications reside in Oracle Cloud Infrastructure (OCI) paired with Oracle DB (75.8%), presenting significant opportunities for multi-cloud containerization on GCP and PostgreSQL adoption.",
    },

    // -------------------------------------------------------------
    // SLIDE 6: Heatmap 3 — Application Lifecycle Stages
    // -------------------------------------------------------------
    {
      id: "slide-6",
      type: "heatmap",
      title: "Portfolio Heatmap: Application Lifecycle Stages",
      subtitle:
        "Cross-tabulation of Active Development, Operations & Maintenance, Modernization, and Sunsetting stages across top FMCs.",
      category: "HEATMAP 3 / 3 — LIFECYCLES",
      summaryMetrics: [
        { label: "Active Development", value: "66 Systems (55.0%)" },
        { label: "Operations & Maintenance", value: "41 Systems (34.2%)" },
        { label: "Modernization Active", value: "9 Systems (7.5%)" },
        { label: "Sunsetting / Retired", value: "4 Systems (3.3%)" },
      ],
      heatmap: {
        totalLabel: "FMC / Program Office",
        rowHeaders: [
          { key: "ST", label: "Science and Technology (S&T)", total: 38 },
          { key: "NWFSC", label: "Northwest Fisheries Science Ctr (NWFSC)", total: 17 },
          { key: "OCIO", label: "Office of the CIO (OCIO)", total: 10 },
          { key: "OLE", label: "Office of Law Enforcement (OLE)", total: 8 },
          { key: "OPR", label: "Office of Protected Resources (OPR)", total: 8 },
          { key: "OMB", label: "Office of Management and Budget (OMB)", total: 7 },
          { key: "WCRO", label: "West Coast Regional Office (WCRO)", total: 6 },
          { key: "OSF", label: "Office of Sustainable Fisheries (OSF)", total: 6 },
          { key: "IATC", label: "Intl Affairs, Trade & Commerce (IATC)", total: 6 },
          { key: "OHC", label: "Office of Habitat Conservation (OHC)", total: 4 },
          { key: "OTHER", label: "Other Regional Science Centers", total: 10 },
        ],
        colHeaders: [
          { key: "dev", label: "Active Dev", total: 66 },
          { key: "om", label: "O & M", total: 41 },
          { key: "mod", label: "Modernization", total: 9 },
          { key: "sunset", label: "Sunsetting", total: 4 },
        ],
        matrix: {
          ST: { dev: 24, om: 14, mod: 0, sunset: 0 },
          NWFSC: { dev: 15, om: 0, mod: 2, sunset: 0 },
          OCIO: { dev: 6, om: 4, mod: 0, sunset: 0 },
          OLE: { dev: 4, om: 4, mod: 0, sunset: 0 },
          OPR: { dev: 5, om: 3, mod: 0, sunset: 0 },
          OMB: { dev: 4, om: 3, mod: 0, sunset: 0 },
          WCRO: { dev: 5, om: 0, mod: 1, sunset: 0 },
          OSF: { dev: 4, om: 2, mod: 0, sunset: 0 },
          IATC: { dev: 3, om: 1, mod: 1, sunset: 1 },
          OHC: { dev: 3, om: 1, mod: 0, sunset: 0 },
          OTHER: { dev: 7, om: 1, mod: 0, sunset: 2 },
        },
      },
      sideChart: {
        id: "side-chart-lifecycle-by-stack",
        title: "Lifecycle Stage by Tech Stack",
        chartType: "ColumnChart",
        height: 380,
        data: [
          ["Stack", "Active Dev", "O&M", "Modernization", "Sunsetting"],
          ["Oracle APEX", 45, 12, 1, 0],
          ["Java / JSP", 14, 11, 0, 2],
          ["Modern Web", 13, 1, 3, 0],
          ["Scientific/Desktop", 6, 0, 0, 0],
          ["COTS/Low-Code", 3, 9, 0, 0],
        ],
        options: {
          isStacked: true,
          colors: ["#003087", "#00A88F", "#F59E0B", "#FF6B4A"],
          legend: { position: "top" },
          chartArea: { width: "80%", height: "65%" },
        },
      },
      summaryNote:
        "55% of systems are under active development, demonstrating high velocity across FMCs that urgently requires standardized CI/CD and secure container landing zones.",
    },

    // -------------------------------------------------------------
    // SLIDE 7: System Rationalization & Modernization Pipeline
    // -------------------------------------------------------------
    {
      id: "slide-7",
      type: "rationalization",
      title: "System Rationalization & Modernization Pipeline",
      subtitle:
        "Factual roadmap of 6 direct system retirements, 4 active modernization pairs, and 1 phased regional sunset.",
      category: "PORTFOLIO RATIONALIZATION",
      decommissions: [
        {
          id: "dec-1",
          name: "FES Results DB",
          programOffice: "Office of Science and Technology (S&T)",
          stack: "Oracle APEX",
          notes: "Duplicate survey aggregator",
        },
        {
          id: "dec-2",
          name: "MDMS",
          programOffice: "Office of Science and Technology (S&T)",
          stack: "Oracle APEX",
          notes: "Integrated into master portal",
        },
        {
          id: "dec-3",
          name: "MDRS",
          programOffice: "Office of Science and Technology (S&T)",
          stack: "Java / JSP",
          notes: "Obsolete reporting data store",
        },
        {
          id: "dec-4",
          name: "OLE SEIVR Declarations",
          programOffice: "Office of Law Enforcement (OLE)",
          stack: "Oracle APEX",
          notes: "Unified OLE portal merge",
        },
        {
          id: "dec-5",
          name: "OLE VMS VRS",
          programOffice: "Office of Law Enforcement (OLE)",
          stack: "Java / JSP",
          notes: "Cloud VMS pipeline migration",
        },
        {
          id: "dec-6",
          name: "OLE SEIVR Web Service",
          programOffice: "Office of Law Enforcement (OLE)",
          stack: "Java / JSP",
          notes: "Deprecated SOAP endpoint",
        },
      ],
      replacements: [
        {
          id: "rep-1",
          legacyName: "MMHSRP Legacy",
          legacyStack: "Java / JSP",
          newName: "HealthMAP",
          newStack: "React / RADFish",
          status: "Active Modernization",
          programOffice: "Office of Protected Resources (OPR)",
        },
        {
          id: "rep-2",
          legacyName: "NPS Legacy",
          legacyStack: "Java / JSP",
          newName: "NPS ServiceNow + BigQuery",
          newStack: "ServiceNow / BigQuery",
          status: "Target Architecture",
          programOffice: "Office of Management and Budget (OMB)",
        },
        {
          id: "rep-3",
          legacyName: "SISP Legacy",
          legacyStack: "Java / JSP",
          newName: "SISP Modernized",
          newStack: "React / RADFish",
          status: "Active Modernization",
          programOffice: "Office of Science and Technology (S&T)",
        },
        {
          id: "rep-4",
          legacyName: "ITDS Legacy",
          legacyStack: "Node.js Monolith",
          newName: "ITDS Modernized",
          newStack: "React + Java ETL",
          status: "In Modernization",
          programOffice: "Office of Intl Affairs (IATC)",
        },
      ],
      sunsets: [
        {
          id: "sun-1",
          name: "PIMS (Permits Info Management)",
          programOffice: "Office of Sustainable Fisheries (OSF)",
          timeline: "2-Year Sunset Window",
          strategy:
            "Phased transition of regional permitting datasets into modernized regional science center data marts.",
        },
      ],
      summaryNote:
        "Retiring 6 redundant systems and converting 4 legacy Java monoliths to RADFish (React) reduces technical debt and ongoing operations maintenance costs.",
    },

    // -------------------------------------------------------------
    // SLIDE 8: OCIO Staffing & Multi-Vendor Ecosystem (201 Personnel)
    // -------------------------------------------------------------
    {
      id: "slide-8",
      type: "charts",
      title: "OCIO Staffing & Multi-Vendor Ecosystem (201 Personnel)",
      subtitle:
        "Workforce ratio and distribution across 10+ contractor vendor firms supporting NOAA Fisheries OCIO.",
      category: "WORKFORCE BASELINE",
      charts: [
        {
          id: "chart-staff-ratio",
          title: "Workforce Employment Composition",
          subtitle: "201 Personnel (171 Contractors & Affiliates vs 30 Federal Staff)",
          chartType: "PieChart",
          height: 320,
          data: [
            ["Employment Type", "Personnel"],
            ["Contractors & Affiliates", 171],
            ["Federal Employees (NOAA)", 30],
          ],
          options: {
            pieHole: 0.45,
            colors: ["#FF6B4A", "#003087"],
            chartArea: { width: "90%", height: "80%" },
          },
        },
        {
          id: "chart-vendors-bar",
          title: "Top 10 Contractor Vendor Companies",
          subtitle: "Distribution of 169 Contractors across partner firms",
          chartType: "BarChart",
          height: 320,
          data: [
            ["Vendor Firm", "Contractors", { role: "style" }],
            ["T and T Consulting", 49, "#003087"],
            ["TSPi", 18, "#00A88F"],
            ["RCG", 16, "#06B6D4"],
            ["iVision", 15, "#F59E0B"],
            ["Concepts Plus", 13, "#FF6B4A"],
            ["Nuvitek", 13, "#6366F1"],
            ["ResolveSoft", 11, "#8B5CF6"],
            ["SAIC", 9, "#334155"],
            ["Starlo Innovation", 8, "#64748B"],
            ["M2 Strategy", 7, "#94A3B8"],
          ],
          options: {
            legend: { position: "none" },
            hAxis: { title: "Contractors" },
            chartArea: { width: "65%", height: "80%" },
          },
        },
      ],
      summaryNote:
        "Contractors and affiliates represent 85.1% (171 personnel) of the OCIO workforce across 10+ distinct vendors, emphasizing the urgent need for contractually enforceable engineering playbooks and automated repository guardrails.",
    },

    // -------------------------------------------------------------
    // SLIDE 9: Software Engineering Workforce Allocation (Sankey Flow)
    // -------------------------------------------------------------
    {
      id: "slide-9",
      type: "sankey",
      title: "Software Engineering Workforce Allocation (Sankey Flow)",
      subtitle:
        "Direct workforce flow from Total OCIO Personnel to 13 Reporting Managers (color-coded by App Dev vs Infrastructure) and Employment Type.",
      category: "STAFFING ALLOCATION",
      stats: [
        { label: "Total OCIO Staff", value: "201 Total Personnel", badgeColor: "noaa" },
        { label: "App Dev & PMO", value: "119 Dev Staff (59.2%)", badgeColor: "seagrass" },
        { label: "Contractor Ratio", value: "85.1% (171 CONT)", badgeColor: "coral" },
        { label: "Reporting Managers", value: "13 Leads", badgeColor: "skygold" },
      ],
      chart: {
        id: "sankey-workforce-flow",
        title: "",
        chartType: "Sankey",
        height: 380,
        data: [
          ["From", "To", "Weight"],
          // Level 1: Total OCIO directly to All 13 Reporting Managers
          ["Total OCIO (201)", "Joshua Lee (62)", 62],
          ["Total OCIO (201)", "Elton Edinborough (32)", 32],
          ["Total OCIO (201)", "Scott Sauri (25)", 25],
          ["Total OCIO (201)", "Dennis Taylor (21)", 21],
          ["Total OCIO (201)", "Darius Dukes-Thibodeaux (11)", 11],
          ["Total OCIO (201)", "Samir Mehta (9)", 9],
          ["Total OCIO (201)", "Heather Nicholas (9)", 9],
          ["Total OCIO (201)", "Joseph Baczkowski (7)", 7],
          ["Total OCIO (201)", "Catherine Amores (7)", 7],
          ["Total OCIO (201)", "Douglas Brackett (6)", 6],
          ["Total OCIO (201)", "Frank Amankwah (6)", 6],
          ["Total OCIO (201)", "Andrew Gorbonos (3)", 3],
          ["Total OCIO (201)", "Srinivas Tallapragada (3)", 3],

          // Level 2: Managers to Employment Types
          ["Joshua Lee (62)", "Contractors & Affiliates (171)", 59],
          ["Joshua Lee (62)", "Federal Staff (30)", 3],

          ["Elton Edinborough (32)", "Contractors & Affiliates (171)", 32],

          ["Scott Sauri (25)", "Contractors & Affiliates (171)", 24],
          ["Scott Sauri (25)", "Federal Staff (30)", 1],

          ["Dennis Taylor (21)", "Contractors & Affiliates (171)", 16],
          ["Dennis Taylor (21)", "Federal Staff (30)", 5],

          ["Darius Dukes-Thibodeaux (11)", "Contractors & Affiliates (171)", 11],

          ["Samir Mehta (9)", "Contractors & Affiliates (171)", 6],
          ["Samir Mehta (9)", "Federal Staff (30)", 3],

          ["Heather Nicholas (9)", "Contractors & Affiliates (171)", 7],
          ["Heather Nicholas (9)", "Federal Staff (30)", 2],

          ["Joseph Baczkowski (7)", "Contractors & Affiliates (171)", 2],
          ["Joseph Baczkowski (7)", "Federal Staff (30)", 5],

          ["Catherine Amores (7)", "Contractors & Affiliates (171)", 3],
          ["Catherine Amores (7)", "Federal Staff (30)", 4],

          ["Douglas Brackett (6)", "Contractors & Affiliates (171)", 2],
          ["Douglas Brackett (6)", "Federal Staff (30)", 4],

          ["Frank Amankwah (6)", "Contractors & Affiliates (171)", 6],

          ["Andrew Gorbonos (3)", "Contractors & Affiliates (171)", 3],

          ["Srinivas Tallapragada (3)", "Federal Staff (30)", 3],
        ],
        options: {
          sankey: {
            node: {
              colors: [
                "#003087", // Total OCIO (201) - NOAA Blue
                "#00A88F", // Joshua Lee (62) - App Dev Seagrass
                "#00A88F", // Elton Edinborough (32) - App Dev Seagrass
                "#00A88F", // Scott Sauri (25) - App Dev Seagrass
                "#64748B", // Dennis Taylor (21) - Slate
                "#64748B", // Darius Dukes-Thibodeaux (11) - Slate
                "#64748B", // Samir Mehta (9) - Slate
                "#64748B", // Heather Nicholas (9) - Slate
                "#64748B", // Joseph Baczkowski (7) - Slate
                "#64748B", // Catherine Amores (7) - Slate
                "#64748B", // Douglas Brackett (6) - Slate
                "#64748B", // Frank Amankwah (6) - Slate
                "#64748B", // Andrew Gorbonos (3) - Slate
                "#64748B", // Srinivas Tallapragada (3) - Slate
                "#FF6B4A", // Contractors & Affiliates (171) - Coral
                "#003087", // Federal Staff (30) - Navy
              ],
              nodePadding: 14,
              width: 14,
            },
            link: {
              colorMode: "gradient",
            },
          },
        },
      },
      summaryNote:
        "Joshua Lee (62), Elton Edinborough (32), and Scott Sauri (25) directly oversee 119 developers and PMO personnel (59.2% of OCIO in green), comprising 115 contractors and 4 federal leads.",
    },

    // -------------------------------------------------------------
    // SLIDE 10: Project 1315: Modern Platform Engineering Foundation
    // -------------------------------------------------------------
    {
      id: "slide-10",
      type: "featureGrid",
      title: "Project 1315: Modern Platform Engineering Foundation",
      subtitle:
        "Enterprise platform engineering initiative establishing standardized developer tooling, automated guardrails, and cloud acceleration across NOAA Fisheries.",
      category: "STRATEGIC ROADMAP",
      narrative:
        "Project 1315 is NOAA Fisheries OCIO's platform engineering initiative designed to modernize developer velocity and establish enterprise guardrails across our SDLC. With contractors representing 85% of our engineering personnel across 10+ distinct vendors, Project 1315 addresses historical fragmentation by providing shared code repositories, automated CI/CD quality gates, self-serve cloud landing zones, and standard USWDS UI components—ensuring automated FISMA compliance, zero shadow infrastructure, and rapid mission delivery.",
      features: [
        {
          id: "p-1",
          stepNumber: "01",
          stageName: "SOURCE",
          title: "Unified Code Repositories",
          description:
            "Standardize internal apps on GitLab (FISMA Moderate) and open-science on GitHub. Sunset legacy SVN and enforce structured project metadata.",
          iconName: "GitBranch",
          badge: "Code",
          accentColor: "noaa",
          tags: ["GitLab", "GitHub", "Metadata"],
        },
        {
          id: "p-2",
          stepNumber: "02",
          stageName: "AUTOMATE",
          title: "Enterprise CI/CD Pipelines",
          description:
            "Automated delivery pipelines with standardized code quality gates, automated security and vulnerability scanning, and unified OCIO/OST artifact registries.",
          iconName: "Layers",
          badge: "Pipelines",
          accentColor: "seagrass",
          tags: ["CI/CD", "Security Scans", "Registry"],
        },
        {
          id: "p-3",
          stepNumber: "03",
          stageName: "DEPLOY",
          title: "Self-Serve Cloud Infrastructure",
          description:
            "GCP automated landing zones and Containers-as-a-Service (CaaS) with reusable Terraform Infrastructure-as-Code (IaC) modules.",
          iconName: "Cloud",
          badge: "Cloud & IaC",
          accentColor: "coral",
          tags: ["GCP", "Terraform", "CaaS"],
        },
        {
          id: "p-4",
          stepNumber: "04",
          stageName: "DELIVER",
          title: "React.JS Ecosystem Expansion",
          description:
            "Scale the RADFish React component library across regional science centers for accessible, USWDS-compliant web and mobile workflows.",
          iconName: "Smartphone",
          badge: "Stack",
          accentColor: "skygold",
          tags: ["React", "USWDS", "Mobile"],
        },
        {
          id: "p-5",
          stepNumber: "05",
          stageName: "GOVERN",
          title: "Documentation-as-Code Playbook",
          description:
            "Git-backed Docusaurus docs as the single source of truth for SOPs, IAM, and branching, contractually mandated in future vendor SOWs.",
          iconName: "FileText",
          badge: "Governance",
          accentColor: "indigo",
          tags: ["Docusaurus", "Vendor SOPs", "IAM"],
        },
      ],
      summaryNote:
        "Execution Philosophy & Leadership: Project 1315 is driven by working code and demos over memos and spreadsheets. Leadership across these five initiatives requires hands-on technical wherewithal—delivering functional code and QASP-aligned artifacts at the conclusion of every two-week sprint, backed by executive downfield blocking. We explicitly reject the consultant playbook of flashy 'quick wins' and distraction-prone prototypes in favor of disciplined foundational engineering. Like laying railroad tracks into bedrock, building standardized source control, CI/CD, and automated cloud infrastructure is quiet, unglamorous work that will enable NOAA Fisheries to move faster, cheaper, and more efficiently.",
    },

    // -------------------------------------------------------------
    // SLIDE 11: Project 1315 AI Pyramid
    // -------------------------------------------------------------
    {
      id: "slide-11",
      type: "pyramid",
      title: "The Path to AI Enablement",
      subtitle:
        "Project 1315 establishes the necessary foundational engineering bedrock required to support advanced AI operations and models.",
      category: "STRATEGIC VISION",
      layers: [
        {
          id: "l6",
          label: "Artificial Intelligence (AI)",
          shortLabel: "AI",
          description: "Generative AI, Predictive Models & Automated Workflows",
        },
        {
          id: "l5",
          label: "Documentation-as-Code Playbook",
          shortLabel: "Governance",
          description: "Single Source of Truth for SOPs & Vendor Governance",
        },
        {
          id: "l4",
          label: "RADFish Ecosystem Expansion",
          shortLabel: "Stack",
          description: "Standardized & Reusable USWDS UI Components",
        },
        {
          id: "l3",
          label: "Self-Serve Cloud Infrastructure",
          shortLabel: "Cloud",
          description: "GCP Landing Zones, Containers-as-a-Service & Terraform IaC",
        },
        {
          id: "l2",
          label: "Enterprise CI/CD Pipelines",
          shortLabel: "Pipelines",
          description: "Automated Testing, Security Scans & Continuous Delivery",
        },
        {
          id: "l1",
          label: "Unified Code Repositories",
          shortLabel: "Code",
          description: "Standardized Source Control (GitLab Moderate & GitHub Open)",
        },
      ],
      summaryNote:
        "Enterprise AI adoption is impossible without first standardizing source code, automating delivery pipelines, and establishing secure cloud infrastructure. Note: The React Application Development Framework for Fisheries (RADFish) is designed to streamline the development of web applications for NOAA.",
    },
  ],
};
