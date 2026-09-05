"use client";

import React from "react";
import { motion } from "framer-motion";
import { RationalizationSlideData } from "@/types/presentation";
import { ArrowRight, Trash2, RefreshCw, Clock, Info, ShieldAlert } from "lucide-react";
import { SlideContainer } from "@/components/layout/SlideContainer";

interface RationalizationSlideProps {
  data: RationalizationSlideData;
}

export const RationalizationSlide: React.FC<RationalizationSlideProps> = ({ data }) => {
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

      {/* Main 3-Column Rationalization Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-2">
        {/* Column 1: Direct Decommission (6 Systems) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="lg:col-span-4 bg-white p-5 rounded-2xl border border-red-200/80 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-red-100">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-red-50 text-red-600">
                  <Trash2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">Direct Decommission</h3>
              </div>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
                {data.decommissions.length} Systems
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Redundant or obsolete systems targeted for complete retirement without direct replacement.
            </p>

            <div className="space-y-2">
              {data.decommissions.map((item) => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-100/90 hover:border-red-200 transition-colors"
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs font-semibold text-slate-800">{item.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">{item.stack}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center justify-between">
                    <span>{item.programOffice}</span>
                    {item.notes && <span className="text-red-600 text-[10px]">{item.notes}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Column 2: Modernization & RADFish Replacement Pairs (4 Pairs) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="lg:col-span-5 bg-white p-5 rounded-2xl border border-seagrass/30 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-seagrass/20">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-seagrass-light text-seagrass">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">Modernization Pairs</h3>
              </div>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-seagrass-light text-seagrass border border-seagrass/30">
                {data.replacements.length} Active Transitions
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Legacy monolithic applications transitioning to standardized Next.js / RADFish and cloud architectures.
            </p>

            <div className="space-y-2.5">
              {data.replacements.map((pair) => (
                <div
                  key={pair.id}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col gap-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-medium text-slate-700">
                      <span className="line-through text-slate-400">{pair.legacyName}</span>
                      <span className="text-[10px] text-slate-400">({pair.legacyStack})</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-seagrass shrink-0" />
                    <div className="flex items-center gap-1.5 font-semibold text-seagrass">
                      <span>{pair.newName}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-seagrass-light text-seagrass">
                        {pair.newStack}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                    <span>{pair.programOffice}</span>
                    <span className="font-medium text-noaa-blue">{pair.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Column 3: Phased Sunset & Governance Policy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="lg:col-span-3 bg-white p-5 rounded-2xl border border-skygold/40 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-skygold/30">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-skygold-light text-skygold-hover">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">Phased Sunset</h3>
              </div>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-skygold-light text-skygold-hover border border-skygold/30">
                1 Program
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Gradual phase-out requiring data archiving and multi-center migration.
            </p>

            <div className="space-y-2 mb-4">
              {data.sunsets.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-skygold-light/30 border border-skygold/30"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-slate-900">{item.name}</span>
                    <span className="text-[10px] font-semibold text-skygold-hover">{item.timeline}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-1">{item.strategy}</p>
                  <div className="text-[10px] text-slate-500">{item.programOffice}</div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 mb-1">
                <ShieldAlert className="w-3.5 h-3.5 text-coral" />
                <span>Governance Rule</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-tight">
                All decommissions require schema backup to BigQuery and verification before server reclamation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Summary Footnote */}
      {data.summaryNote && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-600"
        >
          <Info className="w-4 h-4 text-noaa-blue shrink-0 mt-0.5" />
          <span>{data.summaryNote}</span>
        </motion.div>
      )}
    </SlideContainer>
  );
};

