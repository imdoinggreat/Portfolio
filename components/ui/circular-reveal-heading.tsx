"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** `image` is optional and unused — kept for CMS / HeroSlide compatibility. */
export interface CircularRevealTextItem {
  text: string;
  image?: string;
}

interface CircularRevealHeadingProps {
  items: CircularRevealTextItem[];
  centerText: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: {
    container: "h-[320px] w-[320px]",
    fontSize: "text-[10px]",
    tracking: "tracking-[0.35em]",
    radius: 140,
    gap: 42,
    labelSize: "w-[120px] h-[120px]",
  },
  md: {
    container: "h-[430px] w-[430px]",
    fontSize: "text-xs",
    tracking: "tracking-[0.4em]",
    radius: 172,
    gap: 34,
    labelSize: "w-[150px] h-[150px]",
  },
  lg: {
    container: "h-[540px] w-[540px]",
    fontSize: "text-sm",
    tracking: "tracking-[0.45em]",
    radius: 215,
    gap: 28,
    labelSize: "w-[180px] h-[180px]",
  },
};

export const CircularRevealHeading = ({
  items,
  centerText,
  className,
  size = "md",
}: CircularRevealHeadingProps) => {
  const config = sizeConfig[size];

  const createTextSegments = () => {
    const totalItems = items.length;
    const totalGapDegrees = config.gap * totalItems;
    const availableDegrees = 360 - totalGapDegrees;
    const segmentDegrees = availableDegrees / totalItems;

    return items.map((item, index) => {
      const startPosition = index * (segmentDegrees + config.gap);
      const startOffset = `${(startPosition / 360) * 100}%`;

      return (
        <g key={index}>
          <text
            className={cn(
              config.fontSize,
              config.tracking,
              "uppercase transition-colors duration-300 font-semibold",
            )}
          >
            <textPath
              href="#curve"
              className="fill-white/80"
              startOffset={startOffset}
              textLength={`${segmentDegrees * 1.85}`}
              lengthAdjust="spacingAndGlyphs"
            >
              {item.text}
            </textPath>
          </text>
        </g>
      );
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={cn(
        "relative overflow-hidden rounded-full",
        config.container,
        "bg-[#0c0c0d] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      {/* Vinyl grooves — tuned to reduce harsh moiré at the rim */}
      <div
        className="absolute inset-0 rounded-full opacity-[0.72]"
        style={{
          background: `
              radial-gradient(circle at center, rgba(255,255,255,0.025) 0 1.5px, transparent 1.5px 10px),
              repeating-radial-gradient(
                circle at center,
                rgba(255,255,255,0.055) 0px,
                rgba(255,255,255,0.055) 1px,
                rgba(0,0,0,0) 2px,
                rgba(0,0,0,0) 9px
              ),
              radial-gradient(circle at center, #1a1a1c 0%, #0b0b0c 58%, #050505 100%)
            `,
        }}
      />

      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 18%, rgba(255,255,255,0) 36%)",
          mixBlendMode: "screen",
        }}
      />

      <div className="absolute inset-[10px] rounded-full border border-white/6" />
      <div className="absolute inset-[22px] rounded-full border border-white/5" />

      {/* Center label — text always visible (no hover image swap) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className={cn(
            "rounded-full flex items-center justify-center relative shadow-2xl border border-black/20",
            config.labelSize,
          )}
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #f4b183 0%, #c96d3d 45%, #7a2f1b 100%)",
          }}
        >
          <div className="absolute inset-[10px] rounded-full border border-white/15" />
          <div className="absolute inset-[24px] rounded-full border border-white/10" />
          <div className="absolute w-4 h-4 rounded-full bg-[#f3e8dc] shadow-inner" />
          <div className="relative z-10 text-center px-3 max-w-[min(100%,12rem)]">
            {centerText}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-30"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          style={{ shapeRendering: "geometricPrecision" }}
        >
          <path
            id="curve"
            fill="none"
            d={`M 200,200 m -${config.radius},0 a ${config.radius},${config.radius} 0 1,1 ${
              config.radius * 2
            },0 a ${config.radius},${config.radius} 0 1,1 -${
              config.radius * 2
            },0`}
          />
          {createTextSegments()}
        </svg>
      </motion.div>
    </motion.div>
  );
};
