"use client";

import React from "react";
import { motion } from "framer-motion";
import { PyramidSlideData } from "@/types/presentation";
import { Info, Target } from "lucide-react";
import { SlideContainer } from "@/components/layout/SlideContainer";

interface PyramidSlideProps {
  data: PyramidSlideData;
}

// Color palettes for the 6 layers (Index 0 is Peak, Index 5 is Base)
const COLOR_PALETTES = [
  { top: "bg-teal-300", front: "bg-teal-400", right: "bg-teal-500", text: "text-teal-950" },
  { top: "bg-blue-500", front: "bg-blue-600", right: "bg-blue-700", text: "text-white" },
  { top: "bg-blue-600", front: "bg-blue-700", right: "bg-blue-800", text: "text-white" },
  { top: "bg-blue-700", front: "bg-blue-800", right: "bg-blue-900", text: "text-white" },
  { top: "bg-blue-800", front: "bg-blue-900", right: "bg-blue-950", text: "text-white" },
  { top: "bg-blue-900", front: "bg-blue-950", right: "bg-slate-900", text: "text-white" },
];

const Block3D = ({
  size,
  thickness,
  zOffset,
  colors,
  index,
  isPeak,
  label,
}: {
  size: number;
  thickness: number;
  zOffset: number;
  colors: any;
  index: number;
  isPeak: boolean;
  label: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, z: zOffset + 80 }}
      animate={{ opacity: 1, z: zOffset }}
      transition={{ delay: 0.15 * (5 - index), duration: 0.6, type: "spring", bounce: 0.4 }}
      className="absolute top-1/2 left-1/2 transition-transform duration-500 hover:scale-[1.03]"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Top Face */}
      <div
        className={`absolute inset-0 ${colors.top} border border-white/20 flex items-center justify-center transition-colors`}
        style={{
          transform: `translateZ(${thickness}px)`,
          boxShadow: isPeak ? "0 0 50px rgba(45,212,191,0.6)" : "inset 0 0 20px rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ transform: "rotateZ(-45deg)" }} className="flex flex-col items-center pointer-events-none">
          <span className={`font-black drop-shadow-md ${isPeak ? "text-2xl" : "text-base"} ${colors.text}`}>
            {isPeak ? "🤖" : 6 - index}
          </span>
        </div>
      </div>

      {/* Front Face (Bottom Edge) */}
      <div
        className={`absolute bottom-0 left-0 ${colors.front} border-x border-b border-black/20`}
        style={{
          width: size,
          height: thickness,
          transformOrigin: "bottom",
          transform: "rotateX(-90deg)",
        }}
      />

      {/* Right Face (Right Edge) */}
      <div
        className={`absolute top-0 right-0 ${colors.right} border-y border-r border-black/20 flex items-center justify-center overflow-hidden`}
        style={{
          width: thickness,
          height: size,
          transformOrigin: "right",
          transform: "rotateY(90deg)",
        }}
      >
        <span 
          className="text-white/40 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.15em] whitespace-nowrap"
          style={{ 
            transform: "rotateZ(-90deg)",
            textShadow: "1px 1px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1)"
          }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
};

export const PyramidSlide: React.FC<PyramidSlideProps> = ({ data }) => {
  const numLayers = data.layers.length;

  return (
    <SlideContainer className="max-w-[1600px]">
      {/* Header Section */}
      <div className="mb-4">
        {data.category && (
          <span className="text-xs font-semibold text-noaa-blue uppercase tracking-wider mb-1 block">
            {data.category}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 tracking-tight mb-2">
          {data.title}
        </h2>
        {data.subtitle && (
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-4xl font-normal leading-relaxed">
            {data.subtitle}
          </p>
        )}
      </div>

      {/* 3-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 flex-1 items-center mt-6 sm:mt-10">
        
        {/* Column 1: 3D Isometric Pyramid */}
        <div className="lg:col-span-4 flex justify-center items-center perspective-[1200px] min-h-[350px]">
          {/* Wrapper to physically push the entire 3D object down to visually center it */}
          <div className="w-full max-w-[280px] aspect-square translate-y-[90px] sm:translate-y-[116px]">
            <div
              className="relative w-full h-full hover:scale-[1.02] transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(60deg) rotateZ(45deg)",
              }}
            >
              {[...data.layers].reverse().map((layer, reversedIndex) => {
              const originalIndex = numLayers - 1 - reversedIndex; 
              const isPeak = originalIndex === 0;
              
              const size = 70 + originalIndex * 36;
              const thickness = 54;
              const zOffset = (numLayers - 1 - originalIndex) * 54;
              const colors = COLOR_PALETTES[originalIndex] || COLOR_PALETTES[5];

              return (
                <Block3D
                  key={layer.id}
                  size={size}
                  thickness={thickness}
                  zOffset={zOffset}
                  colors={colors}
                  index={originalIndex}
                  isPeak={isPeak}
                  label={layer.shortLabel || layer.label}
                />
              );
            })}
            </div>
          </div>
        </div>

        {/* Column 2: Compact Layer Cards */}
        <div className="lg:col-span-4 flex flex-col justify-center gap-2.5 sm:gap-3">
          {data.layers.map((layer, index) => {
            const colors = COLOR_PALETTES[index] || COLOR_PALETTES[5];
            const isPeak = index === 0;

            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (numLayers - index), duration: 0.5 }}
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all hover:shadow-md ${
                  isPeak 
                    ? "bg-teal-50 border-teal-200 shadow-sm scale-[1.02]" 
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Number Badge */}
                <div
                  className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm shadow-inner ${colors.top} ${colors.text}`}
                >
                  {isPeak ? <span className="text-lg leading-none">🤖</span> : 6 - index}
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className={`font-bold text-[13px] sm:text-sm tracking-tight leading-tight mb-0.5 ${isPeak ? "text-teal-800" : "text-slate-900"}`}>
                    {layer.label}
                  </h3>
                  {layer.description && (
                    <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug line-clamp-2">
                      {layer.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Column 3: AI Context Narrative */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <div className="p-2 rounded-lg bg-teal-50 text-teal-600">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 tracking-tight leading-tight">
                The Prerequisites for AI
              </h3>
            </div>
            
            <div className="text-[12.5px] sm:text-[13px] text-slate-700 leading-relaxed mb-5 font-medium space-y-3">
              <p>
                Before operational AI can add real value, it requires structured codebases, standardized context, and predictable infrastructure. By unifying repositories, automating cloud environments, and standardizing documentation, this foundation creates the exact environment needed for AI tools and autonomous agents to safely analyze, build, and deploy operational capabilities at scale.
              </p>
              <p className="text-slate-800 font-semibold">
                Here is how this foundation specifically enables AI for operations:
              </p>
            </div>

            <ul className="space-y-4 mb-2">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-1.5 shrink-0" />
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Context-Rich Codebases for AI Agents:</strong> Unified repositories and Documentation-as-Code supply the clean metadata and context AI needs to accurately inspect, maintain, and generate code.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Predictable Serverless Infrastructure:</strong> Serverless GCP environments create highly predictable deployments for both human operators and AI agents, while drastically simplifying direct access to Vertex AI services.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 font-semibold">Automated Guardrails for Safe Deployment:</strong> Enterprise CI/CD pipelines and RADFish standards automatically test and validate AI-generated code against security controls before production.
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Summary Note Footer */}
      {data.summaryNote && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-xs sm:text-sm text-slate-600"
        >
          <Info className="w-5 h-5 text-noaa-blue shrink-0 mt-0.5" />
          <span className="leading-relaxed">{data.summaryNote}</span>
        </motion.div>
      )}
    </SlideContainer>
  );
};
