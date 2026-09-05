"use client";

import React from "react";
import { motion } from "framer-motion";
import { FeatureGridSlideData } from "@/types/presentation";
import {
  GitBranch,
  Layers,
  Cloud,
  Smartphone,
  FileText,
  ArrowRight,
  ShieldCheck,
  Compass,
  Sparkles,
} from "lucide-react";
import { SlideContainer } from "@/components/layout/SlideContainer";

interface FeatureGridSlideProps {
  data: FeatureGridSlideData;
}

export const FeatureGridSlide: React.FC<FeatureGridSlideProps> = ({ data }) => {
  // Color configuration map for the 5 pipeline stages
  const colorMap: Record<
    string,
    {
      border: string;
      accentBg: string;
      iconBg: string;
      iconColor: string;
      badgeBg: string;
      badgeText: string;
      tagBg: string;
      tagText: string;
      stepBadge: string;
    }
  > = {
    noaa: {
      border: "border-blue-200 hover:border-blue-400",
      accentBg: "bg-blue-50/40",
      iconBg: "bg-blue-100/90",
      iconColor: "text-noaa-blue",
      badgeBg: "bg-noaa-blue-light",
      badgeText: "text-noaa-blue border-noaa-blue/30",
      tagBg: "bg-blue-50",
      tagText: "text-blue-700",
      stepBadge: "bg-noaa-blue text-white",
    },
    seagrass: {
      border: "border-emerald-200 hover:border-emerald-400",
      accentBg: "bg-emerald-50/40",
      iconBg: "bg-emerald-100/90",
      iconColor: "text-seagrass",
      badgeBg: "bg-seagrass-light",
      badgeText: "text-seagrass border-seagrass/30",
      tagBg: "bg-emerald-50",
      tagText: "text-emerald-700",
      stepBadge: "bg-seagrass text-white",
    },
    coral: {
      border: "border-rose-200 hover:border-rose-400",
      accentBg: "bg-rose-50/40",
      iconBg: "bg-rose-100/90",
      iconColor: "text-coral",
      badgeBg: "bg-coral-light",
      badgeText: "text-coral border-coral/30",
      tagBg: "bg-rose-50",
      tagText: "text-rose-700",
      stepBadge: "bg-coral text-white",
    },
    skygold: {
      border: "border-amber-200 hover:border-amber-400",
      accentBg: "bg-amber-50/40",
      iconBg: "bg-amber-100/90",
      iconColor: "text-skygold-hover",
      badgeBg: "bg-skygold-light",
      badgeText: "text-skygold-hover border-skygold/30",
      tagBg: "bg-amber-50",
      tagText: "text-amber-800",
      stepBadge: "bg-amber-500 text-white",
    },
    indigo: {
      border: "border-indigo-200 hover:border-indigo-400",
      accentBg: "bg-indigo-50/40",
      iconBg: "bg-indigo-100/90",
      iconColor: "text-indigo-600",
      badgeBg: "bg-indigo-50",
      badgeText: "text-indigo-700 border-indigo-200",
      tagBg: "bg-indigo-50",
      tagText: "text-indigo-700",
      stepBadge: "bg-indigo-600 text-white",
    },
  };

  const getIcon = (iconName: string, colorKey: string) => {
    const styling = colorMap[colorKey] || colorMap.noaa;
    const cls = `w-5 h-5 ${styling.iconColor}`;

    switch (iconName) {
      case "GitBranch":
      case "Code2":
        return <GitBranch className={cls} />;
      case "Layers":
      case "CheckCircle2":
        return <Layers className={cls} />;
      case "Cloud":
      case "Server":
        return <Cloud className={cls} />;
      case "Smartphone":
      case "Layout":
        return <Smartphone className={cls} />;
      case "FileText":
      case "BookOpen":
      case "Menu":
        return <FileText className={cls} />;
      case "ShieldCheck":
        return <ShieldCheck className={cls} />;
      default:
        return <GitBranch className={cls} />;
    }
  };

  return (
    <SlideContainer className="max-w-[1600px] py-5 md:py-5 justify-between">
      {/* 1. Slide Header */}
      <div>
        {data.category && (
          <span className="text-xs font-semibold text-noaa-blue uppercase tracking-wider mb-1 block">
            {data.category}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-1">
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="text-sm sm:text-base text-slate-600 max-w-5xl mb-4 font-normal leading-relaxed">
            {data.subtitle}
          </p>
        )}
      </div>

      {/* 2. Executive Narrative Paragraph */}
      {data.narrative && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-2xs mb-5 flex items-start gap-3.5 text-sm sm:text-base text-slate-700 leading-relaxed"
        >
          <div className="p-2 rounded-xl bg-noaa-blue/10 text-noaa-blue shrink-0 mt-0.5">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="font-semibold text-slate-900 block mb-1">
              Strategic Mission & Operational Objectives:
            </span>
            <span className="leading-relaxed">{data.narrative}</span>
          </div>
        </motion.div>
      )}

      {/* 3. 5-Stage Sequential Engineering Pipeline (Expanded Height & Typography) */}
      <div className="w-full flex-1 flex flex-col justify-center my-auto py-2">
        <div className="flex items-center gap-2 mb-3 px-1">
          <Sparkles className="w-4 h-4 text-noaa-blue" />
          <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
            5 Core Implementation Focus Areas (End-to-End Delivery Pipeline)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative flex-1 min-h-[340px]">
          {data.features.map((feature, idx) => {
            const colorKey = feature.accentColor || "noaa";
            const styling = colorMap[colorKey] || colorMap.noaa;
            const isLast = idx === data.features.length - 1;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.4 }}
                className="relative flex flex-col h-full"
              >
                {/* Connecting Chevron Arrow on desktop */}
                {!isLast && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="w-5 h-5 text-slate-400 stroke-[2.5]" />
                  </div>
                )}

                {/* Pipeline Stage Card */}
                <div
                  className={`bg-white rounded-2xl border ${styling.border} shadow-xs hover:shadow-lg transition-all p-5 sm:p-6 lg:p-7 flex flex-col justify-between h-full group ${styling.accentBg}`}
                >
                  <div>
                    {/* Header: Stage Number & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs sm:text-sm font-mono font-bold px-2.5 py-0.5 rounded-md ${styling.stepBadge}`}
                        >
                          {feature.stepNumber || `0${idx + 1}`}
                        </span>
                        {feature.stageName && (
                          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800">
                            {feature.stageName}
                          </span>
                        )}
                      </div>

                      {feature.badge && (
                        <span
                          className={`text-xs sm:text-[13px] font-semibold px-2.5 py-0.5 rounded-full border truncate ${styling.badgeBg} ${styling.badgeText}`}
                        >
                          {feature.badge}
                        </span>
                      )}
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-3.5">
                      <div
                        className={`p-2.5 rounded-xl ${styling.iconBg} group-hover:scale-105 transition-transform shrink-0`}
                      >
                        {getIcon(feature.iconName, colorKey)}
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug">
                        {feature.title.replace(/^\d+\.\s*/, "")}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-[15px] text-slate-700 font-normal leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 4. Strategic Execution Philosophy & Leadership Note */}
      {data.summaryNote && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-3 p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
        >
          <div className="p-2 rounded-xl bg-noaa-blue/10 text-noaa-blue shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5 text-noaa-blue" />
          </div>
          <div>
            <span className="font-bold text-slate-900 block mb-1 text-xs sm:text-sm uppercase tracking-wider">
              Execution Philosophy & Operational Leadership
            </span>
            <span className="text-slate-600 leading-relaxed">
              {data.summaryNote.replace(/^Execution Philosophy & Leadership:\s*/i, "")}
            </span>
          </div>
        </motion.div>
      )}
    </SlideContainer>
  );
};
