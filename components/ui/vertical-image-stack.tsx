"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, type PanInfo } from "framer-motion";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
    alt: "攀岩时刻 - 抱石挑战",
    title: "攀岩",
    description: "在岩壁上寻找解决方案的路径",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&q=80",
    alt: "城市光影 - 街头摄影",
    title: "城市光影",
    description: "用镜头记录生活的美好瞬间",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    alt: "建筑几何",
    title: "建筑",
    description: "线条与光影的交织",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    alt: "音乐现场",
    title: "音乐",
    description: "感受音乐的律动与情感",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    alt: "音乐制作",
    title: "创作",
    description: "用声音表达内心的世界",
  },
];

type VerticalImageStackProps = {
  /** When true, avoids full viewport height so it can sit below other sections */
  embedded?: boolean;
};

export function VerticalImageStack({
  embedded = false,
}: VerticalImageStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastNavigationTime = useRef(0);
  const navigationCooldown = 400;

  const navigate = useCallback((newDirection: number) => {
    const now = Date.now();
    if (now - lastNavigationTime.current < navigationCooldown) return;
    lastNavigationTime.current = now;

    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  }, []);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 50;
    if (info.offset.y < -threshold) {
      navigate(1);
    } else if (info.offset.y > threshold) {
      navigate(-1);
    }
  };

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) {
          navigate(1);
        } else {
          navigate(-1);
        }
      }
    },
    [navigate],
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const getCardStyle = (index: number) => {
    const total = images.length;
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) {
      return { y: 0, scale: 1, opacity: 1, zIndex: 5, rotateX: 0 };
    } else if (diff === -1) {
      return { y: -160, scale: 0.82, opacity: 0.6, zIndex: 4, rotateX: 8 };
    } else if (diff === -2) {
      return { y: -280, scale: 0.7, opacity: 0.3, zIndex: 3, rotateX: 15 };
    } else if (diff === 1) {
      return { y: 160, scale: 0.82, opacity: 0.6, zIndex: 4, rotateX: -8 };
    } else if (diff === 2) {
      return { y: 280, scale: 0.7, opacity: 0.3, zIndex: 3, rotateX: -15 };
    }
    return {
      y: diff > 0 ? 400 : -400,
      scale: 0.6,
      opacity: 0,
      zIndex: 0,
      rotateX: diff > 0 ? -20 : 20,
    };
  };

  const isVisible = (index: number) => {
    const total = images.length;
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return Math.abs(diff) <= 2;
  };

  const currentImage = images[currentIndex];

  return (
    <div
      className={
        embedded
          ? "relative flex min-h-[min(90vh,820px)] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white via-honeydew-50/30 to-lychee-50/20 py-16"
          : "relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white via-honeydew-50/30 to-lychee-50/20"
      }
    >
      <div
        className="relative flex h-[500px] w-[320px] items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {images.map((image, index) => {
          if (!isVisible(index)) return null;
          const style = getCardStyle(index);
          const isCurrent = index === currentIndex;

          return (
            <motion.div
              key={image.id}
              className="absolute cursor-grab active:cursor-grabbing"
              animate={{
                y: style.y,
                scale: style.scale,
                opacity: style.opacity,
                rotateX: style.rotateX,
                zIndex: style.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              }}
              drag={isCurrent ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{
                transformStyle: "preserve-3d",
                zIndex: style.zIndex,
              }}
            >
              <div
                className="relative h-[420px] w-[280px] overflow-hidden rounded-3xl ring-1 ring-honeydew-200/50 glass-morphism"
                style={{
                  boxShadow: isCurrent
                    ? "0 25px 50px -12px rgba(213, 242, 232, 0.3), 0 0 0 1px rgba(213, 242, 232, 0.1)"
                    : "0 10px 30px -10px rgba(213, 242, 232, 0.2)",
                }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-honeydew-100/20 via-transparent to-transparent" />

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full"
                  draggable={false}
                  priority={isCurrent}
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/90 to-transparent" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center max-w-md px-4">
        <motion.h3
          key={currentImage.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-2"
        >
          {currentImage.title}
        </motion.h3>
        <motion.p
          key={currentImage.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-foreground/70"
        >
          {currentImage.description}
        </motion.p>
      </div>

      <div className="absolute right-8 top-1/2 flex -translate-y-1/2 flex-col gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentIndex) setCurrentIndex(index);
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "h-6 bg-honeydew-400"
                : "bg-foreground/30 hover:bg-honeydew-300"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7-7 7 7" />
            </svg>
          </motion.div>
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll or drag
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute left-8 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-light text-foreground tabular-nums">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <div className="my-2 h-px w-8 bg-foreground/20" />
          <span className="text-sm text-muted-foreground tabular-nums">
            {String(images.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

