"use client";

import React, { useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

type WavePathProps = React.ComponentProps<"div">;

export function WavePath({ className, ...props }: WavePathProps) {
  const path = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const xRef = useRef(0.2);
  const timeRef = useRef(Math.PI / 2);
  const reqId = useRef<number | null>(null);

  const setPath = useCallback((progress: number) => {
    const el = containerRef.current;
    const pathEl = path.current;
    if (!el || !pathEl) return;
    const width = el.getBoundingClientRect().width;
    const x = xRef.current;
    pathEl.setAttribute(
      "d",
      `M0 100 Q${width * x} ${100 + progress * 0.6}, ${width} 100`,
    );
  }, []);

  useEffect(() => {
    setPath(progressRef.current);
    const onResize = () => setPath(progressRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setPath]);

  const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

  const resetAnimation = useCallback(() => {
    timeRef.current = Math.PI / 2;
    progressRef.current = 0;
    if (reqId.current != null) {
      cancelAnimationFrame(reqId.current);
      reqId.current = null;
    }
  }, []);

  const animateOut = useCallback(() => {
    const progress = progressRef.current;
    const time = timeRef.current;
    const newProgress = progress * Math.sin(time);
    progressRef.current = lerp(progress, 0, 0.025);
    timeRef.current += 0.2;
    setPath(newProgress);
    if (Math.abs(progressRef.current) > 0.75) {
      reqId.current = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
      setPath(0);
    }
  }, [resetAnimation, setPath]);

  const manageMouseEnter = () => {
    if (reqId.current != null) {
      cancelAnimationFrame(reqId.current);
      reqId.current = null;
    }
    resetAnimation();
  };

  const manageMouseMove = (e: React.MouseEvent) => {
    const { movementY, clientX } = e;
    const pathEl = path.current;
    if (!pathEl) return;
    const pathBound = pathEl.getBoundingClientRect();
    xRef.current = (clientX - pathBound.left) / pathBound.width;
    progressRef.current += movementY;
    setPath(progressRef.current);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-px w-[min(92vw,56rem)] max-w-[56rem] text-foreground/70",
        className,
      )}
      {...props}
    >
      <div
        onMouseEnter={manageMouseEnter}
        onMouseMove={manageMouseMove}
        onMouseLeave={manageMouseLeave}
        className="relative -top-5 z-10 h-10 w-full hover:-top-[150px] hover:h-[300px]"
      />
      <svg className="absolute -top-[100px] h-[300px] w-full overflow-visible" aria-hidden>
        <path
          ref={path}
          className="fill-none stroke-current"
          strokeWidth={2.25}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
