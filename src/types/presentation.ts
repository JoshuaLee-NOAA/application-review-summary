export type SlideType =
  | "title"
  | "split"
  | "metrics"
  | "featureGrid"
  | "quote"
  | "code"
  | "charts"
  | "heatmap"
  | "sankey"
  | "rationalization"
  | "portfolioGrid"
  | "pyramid";

export interface MetricCard {
  id: string;
  value: string;
  label: string;
  description?: string;
  trend?: string;
  badgeColor?: "seagrass" | "coral" | "skygold" | "noaa";
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  accentColor?: "seagrass" | "coral" | "skygold" | "noaa" | "indigo";
  stepNumber?: string;
  stageName?: string;
  tags?: string[];
}

export interface CodeSnippet {
  language: string;
  filename?: string;
  code: string;
  highlights?: string[];
}

export interface GoogleChartConfig {
  id: string;
  title?: string;
  subtitle?: string;
  chartType: "PieChart" | "ColumnChart" | "BarChart" | "Sankey" | "Table" | "AreaChart" | "LineChart";
  data: (string | number | boolean | object | null)[][];
  options?: Record<string, any>;
  height?: number | string;
}

export interface HeatmapCell {
  rowKey: string;
  colKey: string;
  value: number;
  label?: string;
}

export interface HeatmapConfig {
  rowHeaders: { key: string; label: string; subLabel?: string; total?: number }[];
  colHeaders: { key: string; label: string; total?: number }[];
  matrix: Record<string, Record<string, number>>;
  colorScheme?: "blue" | "teal" | "amber" | "coral";
  totalLabel?: string;
}

export interface DecommissionItem {
  id: string;
  name: string;
  programOffice: string;
  stack: string;
  notes?: string;
}

export interface ReplacementPair {
  id: string;
  legacyName: string;
  legacyStack: string;
  newName: string;
  newStack: string;
  status: string;
  programOffice: string;
}

export interface SunsetItem {
  id: string;
  name: string;
  programOffice: string;
  timeline: string;
  strategy: string;
}

export interface BaseSlide {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
  category?: string;
  notes?: string;
}

export interface TitleSlideData extends BaseSlide {
  type: "title";
  author?: string;
  authorRole?: string;
  date?: string;
  tags?: string[];
  logoPath?: string;
  kpis?: MetricCard[];
}

export interface SplitSlideData extends BaseSlide {
  type: "split";
  bullets?: string[];
  mediaType?: "image" | "card";
  mediaUrl?: string;
  mediaCaption?: string;
  mediaCardTitle?: string;
  mediaCardItems?: { label: string; value: string }[];
}

export interface MetricsSlideData extends BaseSlide {
  type: "metrics";
  metrics: MetricCard[];
  summaryNote?: string;
}

export interface FeatureGridSlideData extends BaseSlide {
  type: "featureGrid";
  features: FeatureCard[];
  narrative?: string;
  summaryNote?: string;
}

export interface QuoteSlideData extends BaseSlide {
  type: "quote";
  quote: string;
  author: string;
  authorTitle: string;
  organization?: string;
  avatarUrl?: string;
}

export interface CodeSlideData extends BaseSlide {
  type: "code";
  snippet: CodeSnippet;
  explanationBullets?: string[];
}

export interface ChartSlideData extends BaseSlide {
  type: "charts";
  layout?: "single" | "dual-split" | "chart-with-cards";
  charts: GoogleChartConfig[];
  sideCards?: {
    title: string;
    items: { label: string; value: string; badge?: string }[];
  };
  summaryNote?: string;
}

export interface HeatmapSlideData extends BaseSlide {
  type: "heatmap";
  heatmap: HeatmapConfig;
  sideChart?: GoogleChartConfig;
  summaryMetrics?: { label: string; value: string }[];
  summaryNote?: string;
}

export interface SankeySlideData extends BaseSlide {
  type: "sankey";
  chart: GoogleChartConfig;
  stats?: { label: string; value: string; badgeColor?: "noaa" | "seagrass" | "coral" | "skygold" }[];
  summaryNote?: string;
}

export interface RationalizationSlideData extends BaseSlide {
  type: "rationalization";
  decommissions: DecommissionItem[];
  replacements: ReplacementPair[];
  sunsets: SunsetItem[];
  summaryNote?: string;
}

export interface AppCatalogItem {
  id: number | string;
  acronym: string;
  name: string;
  fmc: string;
  fmcShort: string;
  stack: string;
  stackShort?: string;
  lifecycle?: string;
  colorClass?: string;
  isRegionalSubteam?: boolean;
}

export interface PortfolioGridSlideData extends BaseSlide {
  type: "portfolioGrid";
  apps: AppCatalogItem[];
  summaryNote?: string;
}

export interface PyramidLayer {
  id: string;
  label: string;
  shortLabel?: string;
  description?: string;
  colorClass?: string;
}

export interface PyramidSlideData extends BaseSlide {
  type: "pyramid";
  layers: PyramidLayer[];
  summaryNote?: string;
}

export type SlideData =
  | TitleSlideData
  | SplitSlideData
  | MetricsSlideData
  | FeatureGridSlideData
  | QuoteSlideData
  | CodeSlideData
  | ChartSlideData
  | HeatmapSlideData
  | SankeySlideData
  | RationalizationSlideData
  | PortfolioGridSlideData
  | PyramidSlideData;

export interface PresentationConfig {
  title: string;
  shortTitle: string;
  subtitle?: string;
  author: string;
  version: string;
  lastUpdated: string;
  slides: SlideData[];
}
