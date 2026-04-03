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
              "uppercase transition-colors duration-300 font-medium",
            )}
          >
            <textPath
              href="#curve"
              className="fill-white/[0.72]"
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
      whileHover={{ scale: 1.008 }}
      whileTap={{ scale: 0.992 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={cn(
        "relative overflow-hidden rounded-full",
        config.container,
        "bg-[#060607] border border-white/[0.07] shadow-[0_32px_96px_rgba(0,0,0,0.5),0_0_0_1px_rgba(158,158,244,0.06)]",
        className,
      )}
    >
      {/* Grooves — fine, low-contrast */}
      <div
        className="absolute inset-0 rounded-full opacity-[0.65]"
        style={{
          background: `
              radial-gradient(circle at center, rgba(255,255,255,0.02) 0 1px, transparent 1px 11px),
              repeating-radial-gradient(
                circle at center,
                rgba(255,255,255,0.045) 0px,
                rgba(255,255,255,0.045) 1px,
                rgba(0,0,0,0) 2px,
                rgba(0,0,0,0) 10px
              ),
              radial-gradient(circle at center, #141418 0%, #0a0a0c 52%, #030304 100%)
            `,
        }}
      />

      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(128deg, rgba(158,158,244,0.09) 0%, rgba(255,255,255,0.06) 14%, rgba(255,255,255,0) 38%)",
          mixBlendMode: "screen",
        }}
      />

      <div className="absolute inset-[11px] rounded-full border border-white/[0.04]" />
      <div className="absolute inset-[24px] rounded-full border border-white/[0.03]" />

      {/* Center label — STATIC (no rotation); only outer text ring spins */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div
          className={cn(
            "rounded-full flex items-center justify-center relative",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_40px_rgba(0,0,0,0.45)]",
            "border border-black/25",
            config.labelSize,
          )}
          style={{
            background: `
              radial-gradient(circle at 32% 28%, rgba(232,182,135,0.35) 0%, transparent 42%),
              radial-gradient(circle at 50% 100%, rgba(30,36,48,0.4) 0%, transparent 55%),
              linear-gradient(165deg, #1c1d22 0%, #121318 48%, #0c0c0f 100%)
            `,
          }}
        >
          <div className="absolute inset-[9px] rounded-full border border-white/[0.06]" />
          <div className="absolute inset-[22px] rounded-full border border-white/[0.04]" />
          <div
            className="absolute w-3.5 h-3.5 rounded-full border border-white/10"
            style={{
              background:
                "radial-gradient(circle at 40% 35%, #f5f0e8 0%, #c4bdb2 100%)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.25)",
            }}
          />
          <div className="relative z-10 text-center px-3 max-w-[min(100%,12rem)] pointer-events-auto">
            {centerText}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 z-30"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 48,
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
