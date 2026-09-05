"use client";

import React from "react";
import { motion } from "framer-motion";
import { SankeySlideData } from "@/types/presentation";
import { GoogleChart } from "@/components/charts/GoogleChart";
import { Info, Users, GitMerge } from "lucide-react";
import { SlideContainer } from "@/components/layout/SlideContainer";

interface SankeySlideProps {
  data: SankeySlideData;
}

export const SankeySlide: React.FC<SankeySlideProps> = ({ data }) => {
  return (
    <SlideContainer>
      {/* Category Header */}
      {data.category && (
        <span className="text-xs font-semibold text-noaa-blue uppercase tracking-wider mb-1 block">
          {data.category}
        </span>
      )}

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-1">
        {data.title}
      </h2>

      {/* Subtitle */}
      {data.subtitle && (
        <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mb-4 font-normal leading-relaxed">
          {data.subtitle}
        </p>
      )}

      {/* Quick Stats Row */}
      {data.stats && data.stats.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {data.stats.map((st, i) => {
            let colorCls = "bg-noaa-blue/10 text-noaa-blue border-noaa-blue/20";
            if (st.badgeColor === "seagrass") {
              colorCls = "bg-seagrass-light text-seagrass border-seagrass/30";
            } else if (st.badgeColor === "coral") {
              colorCls = "bg-coral-light text-coral border-coral/30";
            } else if (st.badgeColor === "skygold") {
              colorCls = "bg-skygold-light text-skygold-hover border-skygold/30";
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                    {st.label}
                  </span>
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-mono font-semibold text-slate-900">
                    {st.value}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Sankey Chart Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <GitMerge className="w-4 h-4 text-noaa-blue" />
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide">
              Workforce Flow: Total OCIO (201) → 13 Reporting Managers → Employment Classification
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A88F]" />
              App Dev Leads (119 Staff / 59.2%)
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-[#64748B]" />
              Infra & Ops Leads (82 Staff / 40.8%)
            </span>
          </div>
        </div>

        <GoogleChart config={data.chart} className="w-full" />
      </motion.div>

      {/* Summary Footnote */}
      {data.summaryNote && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-600"
        >
          <Info className="w-4 h-4 text-noaa-blue shrink-0 mt-0.5" />
          <span>{data.summaryNote}</span>
        </motion.div>
      )}
    </SlideContainer>
  );
};

