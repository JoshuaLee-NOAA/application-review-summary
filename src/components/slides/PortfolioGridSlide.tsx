"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PortfolioGridSlideData } from "@/types/presentation";
import { Info, Filter } from "lucide-react";
import { SlideContainer } from "@/components/layout/SlideContainer";

interface PortfolioGridSlideProps {
  data: PortfolioGridSlideData;
}

// Color palette mapping for 16 FMCs
export const FMC_COLOR_MAP: Record<
  string,
  {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    dot: string;
  }
> = {
  "S&T": {
    bg: "bg-blue-50/70 hover:bg-blue-100/90",
    border: "border-blue-200/90 hover:border-blue-400",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-800",
    dot: "bg-blue-600",
  },
  NWFSC: {
    bg: "bg-emerald-50/70 hover:bg-emerald-100/90",
    border: "border-emerald-200/90 hover:border-emerald-400",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800",
    dot: "bg-emerald-600",
  },
  OCIO: {
    bg: "bg-indigo-50/70 hover:bg-indigo-100/90",
    border: "border-indigo-200/90 hover:border-indigo-400",
    badgeBg: "bg-indigo-100",
    badgeText: "text-indigo-800",
    dot: "bg-indigo-600",
  },
  OLE: {
    bg: "bg-amber-50/70 hover:bg-amber-100/90",
    border: "border-amber-200/90 hover:border-amber-400",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
    dot: "bg-amber-600",
  },
  OPR: {
    bg: "bg-teal-50/70 hover:bg-teal-100/90",
    border: "border-teal-200/90 hover:border-teal-400",
    badgeBg: "bg-teal-100",
    badgeText: "text-teal-800",
    dot: "bg-teal-600",
  },
  OMB: {
    bg: "bg-violet-50/70 hover:bg-violet-100/90",
    border: "border-violet-200/90 hover:border-violet-400",
    badgeBg: "bg-violet-100",
    badgeText: "text-violet-800",
    dot: "bg-violet-600",
  },
  WCRO: {
    bg: "bg-sky-50/70 hover:bg-sky-100/90",
    border: "border-sky-200/90 hover:border-sky-400",
    badgeBg: "bg-sky-100",
    badgeText: "text-sky-800",
    dot: "bg-sky-600",
  },
  OSF: {
    bg: "bg-orange-50/70 hover:bg-orange-100/90",
    border: "border-orange-200/90 hover:border-orange-400",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-800",
    dot: "bg-orange-600",
  },
  IATC: {
    bg: "bg-cyan-50/70 hover:bg-cyan-100/90",
    border: "border-cyan-200/90 hover:border-cyan-400",
    badgeBg: "bg-cyan-100",
    badgeText: "text-cyan-800",
    dot: "bg-cyan-600",
  },
  OHC: {
    bg: "bg-lime-50/70 hover:bg-lime-100/90",
    border: "border-lime-200/90 hover:border-lime-400",
    badgeBg: "bg-lime-100",
    badgeText: "text-lime-800",
    dot: "bg-lime-600",
  },
  SEFSC: {
    bg: "bg-rose-50/70 hover:bg-rose-100/90",
    border: "border-rose-200/90 hover:border-rose-400",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-800",
    dot: "bg-rose-600",
  },
  GARFO: {
    bg: "bg-slate-100/80 hover:bg-slate-200/90",
    border: "border-slate-300 hover:border-slate-400",
    badgeBg: "bg-slate-200",
    badgeText: "text-slate-800",
    dot: "bg-slate-600",
  },
  AFSC: {
    bg: "bg-purple-50/70 hover:bg-purple-100/90",
    border: "border-purple-200/90 hover:border-purple-400",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-800",
    dot: "bg-purple-600",
  },
  SERO: {
    bg: "bg-yellow-50/70 hover:bg-yellow-100/90",
    border: "border-yellow-200/90 hover:border-yellow-400",
    badgeBg: "bg-yellow-100",
    badgeText: "text-yellow-800",
    dot: "bg-yellow-600",
  },
  PIRO: {
    bg: "bg-fuchsia-50/70 hover:bg-fuchsia-100/90",
    border: "border-fuchsia-200/90 hover:border-fuchsia-400",
    badgeBg: "bg-fuchsia-100",
    badgeText: "text-fuchsia-800",
    dot: "bg-fuchsia-600",
  },
  "OPR/OHC": {
    bg: "bg-pink-50/70 hover:bg-pink-100/90",
    border: "border-pink-200/90 hover:border-pink-400",
    badgeBg: "bg-pink-100",
    badgeText: "text-pink-800",
    dot: "bg-pink-600",
  },
};

export const PortfolioGridSlide: React.FC<PortfolioGridSlideProps> = ({ data }) => {
  const [selectedFmc, setSelectedFmc] = useState<string | null>(null);

  const [showRegionalOnly, setShowRegionalOnly] = useState<boolean>(false);

  // Group or filter apps
  const filteredApps = data.apps.filter((a) => {
    if (showRegionalOnly && !a.isRegionalSubteam) return false;
    if (selectedFmc && a.fmcShort !== selectedFmc) return false;
    return true;
  });

  // Extract unique FMCs with counts
  const fmcCounts: Record<string, number> = {};
  data.apps.forEach((a) => {
    fmcCounts[a.fmcShort] = (fmcCounts[a.fmcShort] || 0) + 1;
  });

  const fmcKeys = Object.keys(fmcCounts).sort((a, b) => fmcCounts[b] - fmcCounts[a]);
  const regionalAppsCount = data.apps.filter((a) => a.isRegionalSubteam).length;

  return (
    <SlideContainer className="max-w-[1550px] p-4 sm:p-6 md:p-6 justify-between">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-2">
          <div>
            {data.category && (
              <span className="text-xs font-semibold text-noaa-blue uppercase tracking-wider block">
                {data.category}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight">
              {data.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-noaa-blue-light text-noaa-blue border border-noaa-blue/20 shrink-0">
              {filteredApps.length} / {data.apps.length} Systems
            </span>
            {(selectedFmc || showRegionalOnly) && (
              <button
                onClick={() => {
                  setSelectedFmc(null);
                  setShowRegionalOnly(false);
                }}
                className="text-[11px] px-2 py-0.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors font-medium"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Interactive FMC Legend Filter Bar */}
        <div className="flex flex-wrap items-center gap-1.5 py-1 mb-1.5 overflow-x-auto scrollbar-none border-y border-slate-200/70 text-[10px]">
          <span className="text-slate-400 font-medium mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>
          <button
            onClick={() => {
              setSelectedFmc(null);
              setShowRegionalOnly(false);
            }}
            className={`px-2 py-0.5 rounded-full font-medium transition-all ${
              selectedFmc === null && !showRegionalOnly
                ? "bg-noaa-blue text-white shadow-2xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All (120)
          </button>

          {/* Regional Subteam Quick Filter */}
          <button
            onClick={() => setShowRegionalOnly(!showRegionalOnly)}
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-bold border-[1.5px] border-dotted transition-all ${
              showRegionalOnly
                ? "bg-slate-900 text-white border-slate-900 shadow-2xs scale-105"
                : "bg-slate-100 text-slate-800 border-slate-600 hover:bg-slate-200"
            }`}
            title="Filter to only the 30 applications in the Regional Subteam Portfolio"
          >
            <span className="w-2 h-0 border-t-2 border-dotted border-current" />
            <span>Regional Subteam</span>
            <span className="opacity-80 font-mono">({regionalAppsCount})</span>
          </button>

          <span className="text-slate-300 font-light">|</span>

          {fmcKeys.map((fmc) => {
            const styling = FMC_COLOR_MAP[fmc] || {
              bg: "bg-slate-50",
              border: "border-slate-200",
              badgeBg: "bg-slate-100",
              badgeText: "text-slate-700",
              dot: "bg-slate-500",
            };
            const isSelected = selectedFmc === fmc;

            return (
              <button
                key={fmc}
                onClick={() => setSelectedFmc(isSelected ? null : fmc)}
                className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full font-medium border transition-all ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-2xs scale-105"
                    : `${styling.badgeBg} ${styling.badgeText} border-transparent hover:border-slate-300`
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${styling.dot}`} />
                <span>{fmc}</span>
                <span className="opacity-70 font-mono">({fmcCounts[fmc]})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 120 Applications Micro-Cards Grid */}
      <motion.div
        layout
        className="w-full flex-1 max-h-[calc(100vh-14rem)] overflow-y-auto scrollbar-thin p-1"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-1.5">
          {filteredApps.map((app) => {
            const styling = FMC_COLOR_MAP[app.fmcShort] || {
              bg: "bg-slate-50 hover:bg-slate-100",
              border: "border-slate-200",
              badgeBg: "bg-slate-100",
              badgeText: "text-slate-700",
              dot: "bg-slate-500",
            };

            const isRegional = app.isRegionalSubteam;
            const borderClass = isRegional
              ? "border-[2px] border-dotted border-slate-700 shadow-2xs hover:border-slate-950 ring-1 ring-slate-900/5"
              : `border ${styling.border}`;

            return (
              <motion.div
                key={app.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                title={`${app.name}\nFMC: ${app.fmc}\nStack: ${app.stack}\nLifecycle: ${app.lifecycle || "N/A"}${isRegional ? "\nPortfolio: Regional Subteam" : ""}`}
                className={`p-1.5 rounded-lg shadow-3xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group min-h-[64px] ${styling.bg} ${borderClass}`}
              >
                {/* Top Row: FMC Badge & Stack Tag */}
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span
                    className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[8px] font-bold ${styling.badgeBg} ${styling.badgeText}`}
                  >
                    <span className={`w-1 h-1 rounded-full ${styling.dot}`} />
                    {app.fmcShort}
                  </span>
                  <div className="flex items-center gap-0.5">
                    {isRegional && (
                      <span
                        className="text-[7px] font-black uppercase px-0.5 rounded bg-slate-800 text-white leading-none py-0.5"
                        title="Regional Subteam Portfolio"
                      >
                        REG
                      </span>
                    )}
                    <span className="text-[8px] font-mono font-medium px-1 py-0.2 rounded bg-white/90 text-slate-600 border border-slate-200/60 truncate max-w-[50px]">
                      {app.stackShort || app.stack.split(" ")[0]}
                    </span>
                  </div>
                </div>

                {/* Application Name */}
                <h4 className="text-[10px] font-semibold text-slate-800 leading-tight line-clamp-2 group-hover:text-noaa-blue transition-colors">
                  {app.name}
                </h4>

                {/* Footer: Lifecycle Stage & ID */}
                <div className="flex items-center justify-between mt-1 pt-1 border-t border-slate-200/50 text-[8px] text-slate-500">
                  <span className="truncate font-medium text-slate-600">
                    {app.lifecycle?.replace("Active Development", "Active").replace("Operations & Maintenance", "O&M") || "Active"}
                  </span>
                  <span className="font-mono text-slate-400">#{app.id}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Summary Note */}
      {data.summaryNote && (
        <div className="mt-1.5 p-1.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2 text-[11px] text-slate-600">
          <Info className="w-3.5 h-3.5 text-noaa-blue shrink-0 mt-0.5" />
          <span>{data.summaryNote}</span>
        </div>
      )}
    </SlideContainer>
  );
};
