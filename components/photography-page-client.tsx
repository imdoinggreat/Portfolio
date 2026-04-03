"use client";

import StackedPanels from "@/components/ui/stacked-panels-cursor-interactive-component";
import { WavePath } from "@/components/ui/wave-path";
import { VerticalImageStack } from "@/components/ui/vertical-image-stack";
import type { PhotographyItem } from "@/lib/sanity/types";

type PhotographyPageClientProps = {
  slides: PhotographyItem[];
};

export function PhotographyPageClient({ slides }: PhotographyPageClientProps) {
  return (
    <div className="min-h-screen bg-editorial-canvas">
      <section
        className="relative h-[min(62vh,640px)] min-h-[420px] w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #F8F8FF 0%, #FCFCFC 45%, rgba(158,158,244,0.05) 72%, #F8F8FF 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <p className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-xs tracking-[0.25em] uppercase text-editorial-muted font-mono select-none">
          Interactive canvas
        </p>

        <div className="absolute inset-0 pt-14 pb-6">
          <StackedPanels />
        </div>

        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-xs tracking-widest uppercase text-editorial-muted font-mono select-none">
          Move cursor to interact
        </p>
      </section>

      {/* Soft bridge between hero and interactive divider — avoids a hard horizontal cut */}
      <div
        className="pointer-events-none h-14 sm:h-20 w-full bg-gradient-to-b from-editorial-card via-editorial-canvas to-editorial-canvas"
        aria-hidden
      />

      <div className="flex flex-col items-center gap-4 px-4 pt-2 pb-14 sm:pb-16 bg-gradient-to-b from-editorial-canvas via-editorial-canvas to-editorial-card/80">
        <WavePath />
        <p className="text-sm text-editorial-muted text-center max-w-md">
          在分割线上移动鼠标，感受波浪形反馈
        </p>
      </div>

      <VerticalImageStack embedded slides={slides} />
    </div>
  );
}
