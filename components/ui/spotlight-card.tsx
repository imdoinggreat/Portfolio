"use client";

import React, { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Muted, editorial hues — avoid neon “gaming” defaults */
const glowColorMap = {
  /** Brand accent #9E9EF4 — default editorial spotlight */
  accent: { base: 239, spread: 18 },
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
  honeydew: { base: 158, spread: 48 },
  stone: { base: 220, spread: 28 },
  sage: { base: 145, spread: 36 },
} as const;

export type GlowColor = keyof typeof glowColorMap;

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: GlowColor;
  size?: "sm" | "md" | "lg";
  width?: string | number;
  height?: string | number;
  /** When true, ignores size prop and uses width/height or className */
  customSize?: boolean;
}

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
};

const beforeAfterStyles = `
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
    );
    filter: brightness(2);
  }

  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
    );
  }

  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }

  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`;

export function GlowCard({
  children,
  className = "",
  glowColor = "accent",
  size = "md",
  width,
  height,
  customSize = false,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      const el = cardRef.current;
      if (!el) return;
      el.style.setProperty("--x", `${x.toFixed(2)}`);
      el.style.setProperty("--xp", (x / window.innerWidth).toFixed(2));
      el.style.setProperty("--y", `${y.toFixed(2)}`);
      el.style.setProperty("--yp", (y / window.innerHeight).toFixed(2));
    };

    document.addEventListener("pointermove", syncPointer);
    return () => document.removeEventListener("pointermove", syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const getSizeClasses = () => {
    if (customSize) return "";
    return sizeMap[size];
  };

  const getInlineStyles = (): CSSProperties => {
    const vars = {
      "--base": base,
      "--spread": spread,
      "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
      "--radius": 14,
      "--border": 3,
      "--backdrop": "hsl(0 0% 98% / 0.14)",
      "--backup-border": "var(--backdrop)",
      "--size": 200,
      "--outer": 1,
      "--bg-spot-opacity": 0.085,
      "--border-spot-opacity": 0.55,
      "--border-light-opacity": 0.35,
      "--saturation": 42,
      "--lightness": 62,
      "--border-size": "calc(var(--border, 2) * 1px)",
      "--spotlight-size": "calc(var(--size, 150) * 1px)",
    } as CSSProperties;

    return {
      ...vars,
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`,
      backgroundColor: "var(--backdrop, transparent)",
      backgroundSize:
        "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
      backgroundPosition: "50% 50%",
      backgroundAttachment: "fixed",
      border: "var(--border-size) solid var(--backup-border)",
      position: "relative",
      touchAction: "manipulation",
      width: width !== undefined ? (typeof width === "number" ? `${width}px` : width) : undefined,
      height:
        height !== undefined
          ? typeof height === "number"
            ? `${height}px`
            : height
          : undefined,
    };
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={cn(
          getSizeClasses(),
          !customSize && "aspect-[3/4]",
          "rounded-2xl relative grid grid-rows-[1fr_auto] shadow-[0_1rem_2rem_-1rem_rgba(0,0,0,0.08)] p-6 gap-4 backdrop-blur-[6px]",
          className,
        )}
      >
        <div data-glow aria-hidden />
        <div className="relative z-10 min-h-0 flex flex-col">{children}</div>
      </div>
    </>
  );
}
