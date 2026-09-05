"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeatmapSlideData } from "@/types/presentation";
import { GoogleChart } from "@/components/charts/GoogleChart";
import { Info, Layers } from "lucide-react";
import { SlideContainer } from "@/components/layout/SlideContainer";

interface HeatmapSlideProps {
  data: HeatmapSlideData;
}

export const HeatmapSlide: React.FC<HeatmapSlideProps> = ({ data }) => {
  const { heatmap, sideChart, summaryMetrics, summaryNote } = data;

  // Helper to calculate cell density class
  const getCellColor = (val: number, maxVal: number) => {
    if (!val || val === 0) {
      return "bg-slate-50/60 text-slate-400";
    }
    const ratio = val / (maxVal || 1);
    if (ratio >= 0.75) {
      return "bg-noaa-blue text-white font-semibold shadow-xs";
    } else if (ratio >= 0.45) {
      return "bg-noaa-blue/80 text-white font-semibold";
    } else if (ratio >= 0.25) {
      return "bg-noaa-blue/40 text-slate-900 font-medium";
    } else if (ratio >= 0.1) {
      return "bg-noaa-blue/20 text-slate-800 font-medium";
    } else {
      return "bg-noaa-blue/10 text-slate-700";
    }
  };

  // Find max value in matrix for relative color scale
  let maxCellVal = 1;
  heatmap.rowHeaders.forEach((row) => {
    heatmap.colHeaders.forEach((col) => {
      const val = heatmap.matrix[row.key]?.[col.key] || 0;
      if (val > maxCellVal) maxCellVal = val;
    });
  });

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

      {/* Summary Metrics Banner */}
      {summaryMetrics && summaryMetrics.length > 0 && (
        <div className="flex flex-wrap gap-2.5 mb-4">
          {summaryMetrics.map((metric, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs"
            >
              <span className="text-slate-500">{metric.label}:</span>
              <span className="font-mono font-semibold text-noaa-blue">{metric.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Main Content: Heatmap Table + Optional Side Chart */}
      <div className={`grid gap-6 ${sideChart ? "grid-cols-1 lg:grid-cols-12" : "grid-cols-1"}`}>
        {/* Heatmap Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col ${
            sideChart ? "lg:col-span-7" : "w-full"
          }`}
        >
          <div className="overflow-x-auto max-h-[460px] overflow-y-auto scrollbar-thin">
            <table className="w-full text-left border-collapse text-xs">
              <thead className="bg-slate-100/80 sticky top-0 z-10 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 font-semibold text-slate-700 min-w-[140px]">
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-noaa-blue" />
                      <span>{heatmap.totalLabel || "Program / Unit"}</span>
                    </div>
                  </th>
                  {heatmap.colHeaders.map((col) => (
                    <th
                      key={col.key}
                      className="py-2.5 px-2 text-center font-semibold text-slate-700 min-w-[70px]"
                    >
                      <div>{col.label}</div>
                      {col.total !== undefined && (
                        <div className="text-[10px] text-slate-500 font-normal">({col.total})</div>
                      )}
                    </th>
                  ))}
                  <th className="py-2.5 px-3 text-right font-semibold text-noaa-blue min-w-[60px] bg-slate-100">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {heatmap.rowHeaders.map((row) => {
                  let rowSum = 0;
                  heatmap.colHeaders.forEach((col) => {
                    rowSum += heatmap.matrix[row.key]?.[col.key] || 0;
                  });

                  return (
                    <tr key={row.key} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2 px-3 font-medium text-slate-800">
                        <div className="truncate max-w-[200px]" title={row.label}>
                          {row.label}
                        </div>
                        {row.subLabel && (
                          <div className="text-[10px] text-slate-400 truncate">{row.subLabel}</div>
                        )}
                      </td>
                      {heatmap.colHeaders.map((col) => {
                        const val = heatmap.matrix[row.key]?.[col.key] || 0;
                        return (
                          <td key={col.key} className="p-1 text-center">
                            <div
                              className={`py-1.5 px-2 rounded-lg text-xs font-mono transition-transform hover:scale-105 ${getCellColor(
                                val,
                                maxCellVal
                              )}`}
                            >
                              {val > 0 ? val : "·"}
                            </div>
                          </td>
                        );
                      })}
                      <td className="py-2 px-3 text-right font-mono font-semibold text-noaa-blue bg-slate-50/60">
                        {row.total !== undefined ? row.total : rowSum}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Side Chart (if present) */}
        {sideChart && (
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <GoogleChart config={sideChart} />
          </motion.div>
        )}
      </div>

      {/* Summary Note */}
      {summaryNote && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-600"
        >
          <Info className="w-4 h-4 text-noaa-blue shrink-0 mt-0.5" />
          <span>{summaryNote}</span>
        </motion.div>
      )}
    </SlideContainer>
  );
};

