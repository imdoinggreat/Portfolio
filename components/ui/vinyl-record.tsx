"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface VinylRecordProps {
  name: string;
  tagline: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { outer: 280, center: 84, hole: 10 },
  md: { outer: 360, center: 108, hole: 13 },
  lg: { outer: 440, center: 132, hole: 16 },
};

export function VinylRecord({ name, tagline, className, size = "md" }: VinylRecordProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { outer, center, hole } = sizes[size];

  return (
    <div
      className={cn("relative select-none", className)}
      style={{ width: outer + 60, height: outer + 60 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Diffused color glow behind disc */}
      <div
        className="absolute rounded-full pointer-events-none transition-opacity duration-700"
        style={{
          inset: "8%",
          filter: "blur(48px)",
          opacity: isHovered ? 0.85 : 0.6,
          background: `
            radial-gradient(ellipse at 28% 28%, rgba(158,158,244,0.8) 0%, transparent 55%),
            radial-gradient(ellipse at 72% 68%, rgba(232,182,135,0.7) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 18%, rgba(100,215,200,0.55) 0%, transparent 45%)
          `,
        }}
      />

      {/* The spinning disc — centered in the container */}
      <div
        className="absolute"
        style={{
          width: outer,
          height: outer,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer ring glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: `0 0 0 1px rgba(255,255,255,0.35), 0 8px 48px rgba(158,158,244,0.35), 0 4px 24px rgba(232,182,135,0.25)`,
          }}
        />

        {/* Spinning disc */}
        <motion.div
          className="absolute inset-0 rounded-full overflow-hidden"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{
            background: `
              radial-gradient(ellipse at 22% 22%, rgba(158,158,244,0.82) 0%, transparent 50%),
              radial-gradient(ellipse at 78% 68%, rgba(232,182,135,0.72) 0%, transparent 48%),
              radial-gradient(ellipse at 62% 14%, rgba(100,215,200,0.62) 0%, transparent 43%),
              radial-gradient(ellipse at 18% 82%, rgba(190,145,235,0.5) 0%, transparent 40%),
              rgba(242,240,255,0.42)
            `,
            backdropFilter: "blur(24px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.55)",
            boxShadow: "inset 0 0 80px rgba(255,255,255,0.12)",
          }}
        >
          {/* Groove rings */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `repeating-radial-gradient(
                circle at center,
                transparent 0px, transparent 5px,
                rgba(30,36,48,0.055) 5px, rgba(30,36,48,0.055) 6px
              )`,
            }}
          />
          {/* Shimmer highlight */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(128deg, rgba(255,255,255,0.45) 0%, transparent 42%, rgba(255,255,255,0.12) 80%)",
            }}
          />
        </motion.div>

        {/* Static center label — does NOT spin */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div
            className="rounded-full flex flex-col items-center justify-center relative"
            style={{
              width: center,
              height: center,
              background: "rgba(252,252,252,0.96)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.85)",
              boxShadow:
                "0 2px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            {/* Inner groove rings on label */}
            <div
              className="absolute inset-[8px] rounded-full"
              style={{ border: "1px solid rgba(30,36,48,0.05)" }}
            />
            <div
              className="absolute inset-[18px] rounded-full"
              style={{ border: "1px solid rgba(30,36,48,0.04)" }}
            />
            {/* Center hole */}
            <div
              className="absolute rounded-full"
              style={{
                width: hole,
                height: hole,
                background: "radial-gradient(circle, #8B93A1 0%, #4D5562 100%)",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.25)",
              }}
            />
            {/* Name text */}
            <div className="text-center px-2 mt-3">
              <p
                className="font-semibold text-editorial-title leading-tight"
                style={{ fontSize: center * 0.115 }}
              >
                {name}
              </p>
              <p
                className="text-editorial-muted leading-snug mt-0.5"
                style={{ fontSize: center * 0.08 }}
              >
                {tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tonearm — positioned top-right, pivots on hover */}
      <motion.div
        className="absolute z-20 pointer-events-none"
        style={{
          top: "2%",
          right: "0%",
          transformOrigin: "88% 8%",
        }}
        animate={{ rotate: isHovered ? -16 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 16 }}
      >
        <svg
          width={outer * 0.32}
          height={outer * 0.58}
          viewBox="0 0 100 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pivot housing */}
          <circle cx="82" cy="12" r="9" fill="rgba(30,36,48,0.5)" />
          <circle cx="82" cy="12" r="6" fill="rgba(248,248,255,0.9)" />
          <circle cx="82" cy="12" r="3.5" fill="rgba(158,158,244,0.95)" />
          <circle cx="82" cy="12" r="1.5" fill="rgba(248,248,255,1)" />

          {/* Main arm — tapered path */}
          <path
            d="M82 18 Q72 55 38 148"
            stroke="rgba(30,36,48,0.55)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M82 18 Q72 55 38 148"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M82 18 Q72 55 38 148"
            stroke="rgba(158,158,244,0.35)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Counterweight at top */}
          <rect
            x="76"
            y="20"
            width="14"
            height="6"
            rx="3"
            fill="rgba(30,36,48,0.5)"
          />

          {/* Headshell */}
          <rect
            x="25"
            y="143"
            width="24"
            height="7"
            rx="2"
            fill="rgba(30,36,48,0.6)"
            transform="rotate(-22 37 146)"
          />
          <rect
            x="26"
            y="144"
            width="22"
            height="5"
            rx="1.5"
            fill="rgba(248,248,255,0.15)"
            transform="rotate(-22 37 146)"
          />

          {/* Stylus tip */}
          <circle cx="28" cy="162" r="3.5" fill="rgba(158,158,244,0.9)" />
          <circle cx="28" cy="162" r="1.5" fill="rgba(248,248,255,1)" />
          <line
            x1="28"
            y1="165"
            x2="28"
            y2="170"
            stroke="rgba(30,36,48,0.6)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
