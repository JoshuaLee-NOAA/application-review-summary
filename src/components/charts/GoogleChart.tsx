"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { GoogleChartConfig } from "@/types/presentation";

// Global loader tracker to avoid duplicate script tags
let googleChartsPromise: Promise<void> | null = null;

function loadGoogleChartsScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  // Already loaded and initialized
  if (window.google && window.google.charts) {
    return Promise.resolve();
  }

  if (!googleChartsPromise) {
    googleChartsPromise = new Promise<void>((resolve, reject) => {
      // Check if script element already exists
      const existingScript = document.getElementById("google-charts-loader");
      if (existingScript) {
        if (window.google && window.google.charts) {
          resolve();
        } else {
          existingScript.addEventListener("load", () => resolve());
          existingScript.addEventListener("error", (e) => reject(e));
        }
        return;
      }

      const script = document.createElement("script");
      script.id = "google-charts-loader";
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.async = true;
      script.onload = () => {
        if (window.google && window.google.charts) {
          window.google.charts.load("current", {
            packages: ["corechart", "sankey", "bar", "table"],
          });
          window.google.charts.setOnLoadCallback(() => {
            resolve();
          });
        } else {
          resolve();
        }
      };
      script.onerror = (e) => reject(e);
      document.head.appendChild(script);
    });
  }

  return googleChartsPromise;
}

interface GoogleChartProps {
  config: GoogleChartConfig;
  className?: string;
}

declare global {
  interface Window {
    google?: any;
  }
}

export const GoogleChart: React.FC<GoogleChartProps> = ({ config, className = "" }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const chartInstanceRef = useRef<any>(null);

  const drawChart = useCallback(() => {
    if (!chartContainerRef.current || !window.google || !window.google.visualization) {
      return;
    }

    try {
      const dataTable = window.google.visualization.arrayToDataTable(config.data);

      const defaultFont = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

      // NOAA Fisheries Design System color palette
      const defaultOptions: Record<string, any> = {
        fontName: defaultFont,
        fontSize: 12,
        backgroundColor: "transparent",
        chartArea: {
          left: "10%",
          top: "10%",
          width: "80%",
          height: "80%",
        },
        legend: {
          textStyle: { color: "#334155", fontName: defaultFont, fontSize: 12 },
          alignment: "center",
        },
        tooltip: {
          textStyle: { fontName: defaultFont, fontSize: 12 },
          showColorCode: true,
        },
        colors: [
          "#003087", // NOAA Blue
          "#00A88F", // Seagrass Green
          "#FF6B4A", // Coral Orange
          "#F59E0B", // Sky Gold
          "#06B6D4", // Cyan
          "#6366F1", // Indigo
          "#EC4899", // Pink
          "#8B5CF6", // Purple
        ],
      };

      // Custom adjustments per chart type
      if (config.chartType === "PieChart") {
        defaultOptions.pieHole = config.options?.pieHole ?? 0.45;
        defaultOptions.pieSliceTextStyle = {
          color: "#ffffff",
          fontName: defaultFont,
          fontSize: 11,
          bold: false,
        };
        defaultOptions.pieSliceBorderColor = "#ffffff";
      }

      if (config.chartType === "ColumnChart" || config.chartType === "BarChart") {
        defaultOptions.hAxis = {
          textStyle: { color: "#64748b", fontName: defaultFont, fontSize: 11 },
          gridlines: { color: "#f1f5f9" },
          baselineColor: "#cbd5e1",
          ...(config.options?.hAxis || {}),
        };
        defaultOptions.vAxis = {
          textStyle: { color: "#64748b", fontName: defaultFont, fontSize: 11 },
          gridlines: { color: "#f1f5f9" },
          baselineColor: "#cbd5e1",
          ...(config.options?.vAxis || {}),
        };
      }

      if (config.chartType === "Sankey") {
        defaultOptions.sankey = {
          node: {
            colors: ["#003087", "#00A88F", "#FF6B4A", "#F59E0B", "#06B6D4", "#6366F1", "#334155"],
            label: {
              fontName: defaultFont,
              fontSize: 11,
              color: "#0f172a",
              bold: false,
            },
            nodePadding: 18,
            width: 14,
          },
          link: {
            colorMode: "gradient",
            colors: ["#93c5fd", "#6ee7b7", "#fca5a5", "#fde68a", "#a5f3fc"],
          },
          ...(config.options?.sankey || {}),
        };
      }

      const mergedOptions = {
        ...defaultOptions,
        ...(config.options || {}),
      };

      let chart: any = null;
      if (config.chartType === "PieChart") {
        chart = new window.google.visualization.PieChart(chartContainerRef.current);
      } else if (config.chartType === "ColumnChart") {
        chart = new window.google.visualization.ColumnChart(chartContainerRef.current);
      } else if (config.chartType === "BarChart") {
        chart = new window.google.visualization.BarChart(chartContainerRef.current);
      } else if (config.chartType === "Sankey") {
        chart = new window.google.visualization.Sankey(chartContainerRef.current);
      } else if (config.chartType === "Table") {
        chart = new window.google.visualization.Table(chartContainerRef.current);
      } else {
        chart = new window.google.visualization.ColumnChart(chartContainerRef.current);
      }

      chartInstanceRef.current = chart;
      chart.draw(dataTable, mergedOptions);
    } catch (err: any) {
      console.error("Error drawing Google Chart:", err);
      setLoadError(err?.message || "Failed to render chart");
    }
  }, [config]);

  useEffect(() => {
    let isMounted = true;

    loadGoogleChartsScript()
      .then(() => {
        if (!isMounted) return;
        if (window.google && window.google.charts) {
          window.google.charts.load("current", {
            packages: ["corechart", "sankey", "bar", "table"],
          });
          window.google.charts.setOnLoadCallback(() => {
            if (isMounted) {
              setIsLoaded(true);
            }
          });
        }
      })
      .catch((err) => {
        if (isMounted) {
          setLoadError(err?.message || "Could not load Google Charts API");
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        drawChart();
      }, 50);

      const resizeObserver = new ResizeObserver(() => {
        drawChart();
      });

      if (chartContainerRef.current) {
        resizeObserver.observe(chartContainerRef.current);
      }

      return () => {
        clearTimeout(timer);
        resizeObserver.disconnect();
      };
    }
  }, [isLoaded, drawChart]);

  const heightVal = config.height || 340;

  return (
    <div className={`w-full flex flex-col justify-center relative ${className}`}>
      {config.title && (
        <div className="mb-2">
          <h4 className="text-sm sm:text-base font-semibold text-slate-800 tracking-tight">
            {config.title}
          </h4>
          {config.subtitle && (
            <p className="text-xs text-slate-500 font-normal">{config.subtitle}</p>
          )}
        </div>
      )}

      <div
        ref={chartContainerRef}
        style={{ height: typeof heightVal === "number" ? `${heightVal}px` : heightVal }}
        className="w-full flex items-center justify-center transition-all"
      >
        {!isLoaded && !loadError && (
          <div className="flex items-center gap-2 text-xs text-slate-400 animate-pulse py-8">
            <div className="w-4 h-4 border-2 border-noaa-blue border-t-transparent rounded-full animate-spin" />
            <span>Loading chart visual...</span>
          </div>
        )}

        {loadError && (
          <div className="text-xs text-red-500 bg-red-50 p-4 rounded-xl border border-red-200">
            {loadError}
          </div>
        )}
      </div>
    </div>
  );
};
