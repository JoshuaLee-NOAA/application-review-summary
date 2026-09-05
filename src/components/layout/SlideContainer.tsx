import React from "react";
import { twMerge } from "tailwind-merge";

interface SlideContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SlideContainer: React.FC<SlideContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={twMerge("w-full flex flex-col justify-start px-4 sm:px-8 py-8 md:py-12 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};
