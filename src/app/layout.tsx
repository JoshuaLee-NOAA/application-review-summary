import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Project 1315: Application Portfolio & Staffing Baseline",
  description:
    "A clean, modern, mobile-first presentation briefing analyzing 120 software systems and 201 OCIO personnel across NOAA Fisheries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-noaa-blue-light selection:text-noaa-blue font-sans">
        {children}
      </body>
    </html>
  );
}
