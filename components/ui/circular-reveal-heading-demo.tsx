import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";

const items = [
  {
    text: "STRATEGY",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    text: "DESIGN",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    text: "GROWTH",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    text: "INNOVATION",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
];

/** Standalone demo — not used on the live homepage */
export function VinylCircularRevealHeadingDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-10">
      <CircularRevealHeading
        items={items}
        centerText={
          <div className="text-center text-[#f5e6d8]">
            <div className="text-[10px] tracking-[0.35em] uppercase opacity-80">
              Side A
            </div>
            <div className="text-xl md:text-2xl font-black tracking-tight mt-1">
              MISHRA HUB
            </div>
          </div>
        }
        size="md"
      />
    </div>
  );
}
