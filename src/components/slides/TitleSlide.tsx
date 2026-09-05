"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { TitleSlideData } from "@/types/presentation";
import { Calendar, User, Tag, Activity } from "lucide-react";
import { FISHERIES_LOGO_DATA_URI } from "@/constants/logos";
import { SlideContainer } from "@/components/layout/SlideContainer";

interface TitleSlideProps {
  data: TitleSlideData;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ data }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Automatic failover to embedded base64 data URI if network fetch ever drops
    if (e.currentTarget.src !== FISHERIES_LOGO_DATA_URI) {
      e.currentTarget.src = FISHERIES_LOGO_DATA_URI;
    }
  };

  return (
    <SlideContainer className="min-h-full items-center py-6 sm:py-10 bg-gradient-to-b from-white via-slate-50 to-noaa-blue-light/30 max-w-none px-0 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-5xl w-full text-center flex flex-col items-center"
      >
        {/* Category Badge */}
        {data.category && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-noaa-blue-light border border-noaa-blue/20 text-noaa-blue text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <span>{data.category}</span>
          </motion.div>
        )}

        {/* Main Fisheries Brand Logo (fisheries.png) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex items-center justify-center shrink-0 h-14 sm:h-18 md:h-20 min-h-[56px] w-auto relative mb-2"
        >
          <img
            ref={imgRef}
            src={data.logoPath || FISHERIES_LOGO_DATA_URI}
            alt="NOAA Fisheries Logo"
            width={380}
            height={162}
            className="h-14 sm:h-18 md:h-20 w-auto max-w-full object-contain shrink-0"
            loading="eager"
            decoding="sync"
            onError={handleError}
          />
        </motion.div>

        {/* Coral Animated Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          className="w-[150px] sm:w-[188px] md:w-[224px] h-1.5 bg-gradient-to-r from-coral via-coral-hover to-skygold rounded-full mb-6 origin-center"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight sm:leading-tight mb-3"
        >
          {data.title}
        </motion.h1>

        {/* Subtitle */}
        {data.subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="text-xs sm:text-base md:text-lg text-slate-600 font-normal max-w-3xl mb-6 leading-relaxed"
          >
            {data.subtitle}
          </motion.p>
        )}

        {/* Optional KPI Grid (Supports 2, 3, or 4 cards) */}
        {data.kpis && data.kpis.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className={`grid gap-3 w-full max-w-4xl mb-6 ${
              data.kpis.length === 3
                ? "grid-cols-1 sm:grid-cols-3"
                : data.kpis.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {data.kpis.map((kpi, idx) => {
              let badgeCls = "bg-noaa-blue-light text-noaa-blue border-noaa-blue/20";
              if (kpi.badgeColor === "seagrass") {
                badgeCls = "bg-seagrass-light text-seagrass border-seagrass/30";
              } else if (kpi.badgeColor === "coral") {
                badgeCls = "bg-coral-light text-coral border-coral/30";
              } else if (kpi.badgeColor === "skygold") {
                badgeCls = "bg-skygold-light text-skygold-hover border-skygold/30";
              }

              return (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-xs p-3.5 sm:p-4 rounded-xl border border-slate-200/90 shadow-2xs text-left flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                      {kpi.label}
                    </span>
                    {kpi.trend && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${badgeCls}`}>
                        {kpi.trend}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-mono font-semibold text-slate-900 mb-0.5">
                      {kpi.value}
                    </div>
                    {kpi.description && (
                      <div className="text-[11px] text-slate-500 leading-tight">
                        {kpi.description}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Presenter Metadata & Tags Footer Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 pt-4 border-t border-slate-200/80 w-full max-w-3xl text-xs sm:text-sm text-slate-600"
        >
          {data.author && (
            <div className="flex items-center gap-1.5 font-medium text-slate-800">
              <User className="w-4 h-4 text-noaa-blue" />
              <span>{data.author}</span>
              {data.authorRole && (
                <span className="text-slate-400 font-normal">
                  ({data.authorRole})
                </span>
              )}
            </div>
          )}

          {data.date && (
            <div className="flex items-center gap-1.5 text-slate-500">
              <Calendar className="w-4 h-4 text-seagrass" />
              <span>{data.date}</span>
            </div>
          )}

          {/* Tags */}
          {data.tags && data.tags.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap justify-center w-full mt-1.5">
              <Tag className="w-3.5 h-3.5 text-coral shrink-0" />
              {data.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </SlideContainer>
  );
};

