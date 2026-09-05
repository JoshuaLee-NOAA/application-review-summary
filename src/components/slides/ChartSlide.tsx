"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChartSlideData } from "@/types/presentation";
import { GoogleChart } from "@/components/charts/GoogleChart";
import { Info, Sparkles } from "lucide-react";
import { SlideContainer } from "@/components/layout/SlideContainer";

interface ChartSlideProps {
  data: ChartSlideData;
}

export const ChartSlide: React.FC<ChartSlideProps> = ({ data }) => {
  const isDual = data.charts.length === 2;

  return (
    <SlideContainer>
      {/* Category Header */}
      {data.category && (
        <span className="text-xs font-semibold text-noaa-blue uppercase tracking-wider mb-1 block">
          {data.category}
        </span>
      )}

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-2">
        {data.title}
      </h2>

      {/* Subtitle */}
      {data.subtitle && (
        <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mb-6 font-normal leading-relaxed">
          {data.subtitle}
        </p>
      )}

      {/* Main Content Area */}
      <div
        className={`grid gap-6 ${
          isDual
            ? "grid-cols-1 lg:grid-cols-2"
            : data.sideCards
            ? "grid-cols-1 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {data.charts.map((chartConfig, idx) => (
          <motion.div
            key={chartConfig.id || idx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * idx, duration: 0.5 }}
            className={`bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between ${
              !isDual && data.sideCards ? "lg:col-span-2" : ""
            }`}
          >
            <GoogleChart config={chartConfig} />
          </motion.div>
        ))}

        {/* Optional Side Cards */}
        {data.sideCards && (
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <Sparkles className="w-4 h-4 text-coral" />
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                  {data.sideCards.title}
                </h3>
              </div>

              <div className="space-y-3">
                {data.sideCards.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100/80"
                  >
                    <span className="text-xs font-medium text-slate-700">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-mono font-semibold text-noaa-blue">
                        {item.value}
                      </span>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-seagrass-light text-seagrass border border-seagrass/20">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Summary Footnote */}
      {data.summaryNote && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-600"
        >
          <Info className="w-4 h-4 text-noaa-blue shrink-0 mt-0.5" />
          <span>{data.summaryNote}</span>
        </motion.div>
      )}
    </SlideContainer>
  );
};

