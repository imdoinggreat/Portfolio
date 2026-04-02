"use client";

import StackedPanels from "@/components/ui/stacked-panels-cursor-interactive-component";
import { WavePath } from "@/components/ui/wave-path";
import { VerticalImageStack } from "@/components/ui/vertical-image-stack";

export default function PhotographyPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[min(52vh,520px)] min-h-[360px] w-full overflow-hidden bg-gradient-to-b from-white via-honeydew-50/30 to-lychee-50/20">
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <p className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-xs tracking-[0.25em] uppercase text-muted-foreground font-mono select-none">
          Interactive canvas
        </p>

        <div className="absolute inset-0 pt-14 pb-6">
          <StackedPanels />
        </div>

        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-xs tracking-widest uppercase text-muted-foreground font-mono select-none">
          Move cursor to interact
        </p>
      </section>

      <div className="flex flex-col items-center gap-3 py-10 px-4">
        <WavePath />
        <p className="text-sm text-muted-foreground text-center max-w-md">
          在分割线上移动鼠标，感受波浪形反馈
        </p>
      </div>

      <VerticalImageStack embedded />
    </div>
  );
}
