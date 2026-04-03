"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight, Monitor, X } from "lucide-react";
import Image from "next/image";
import { GlowCard } from "@/components/ui/spotlight-card";

export interface FilmFrame {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  details: string[];
}

const FALLBACK_FILM_FRAMES: FilmFrame[] = [
  {
    id: "feishu-1",
    title: "商学院活动策划",
    category: "字节跳动·飞书",
    date: "2025.09",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1000&fit=crop",
    description: "顶级商学院\"走进字节\"系列活动",
    details: ["500+ KDM覆盖", "留资率 20%", "单场 25 条 MQL"],
  },
  {
    id: "feishu-2",
    title: "AI亲子营活动",
    category: "字节跳动·飞书",
    date: "2025.10",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1000&fit=crop",
    description: "洞察企业家子女教育诉求的差异化活动",
    details: ["AI Portrait生成", "游戏化体验", "高净值群体建联"],
  },
  {
    id: "meitu-1",
    title: "云肩九宫格设计",
    category: "美图秀秀·云肩项目",
    date: "2024.11",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=1000&fit=crop",
    description: "非遗云肩纹样的年轻化表达",
    details: ["564条微博分析", "5组深度访谈", "课程A类评级"],
  },
  {
    id: "meitu-2",
    title: "AR穿戴滤镜",
    category: "美图秀秀·云肩项目",
    date: "2024.11",
    image:
      "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=800&h=1000&fit=crop",
    description: "虚拟云肩一键穿戴 + 纹样科普",
    details: ["AR技术应用", "体验-分享闭环", "文化传播创新"],
  },
  {
    id: "boss-1",
    title: "职业体验游戏",
    category: "BOSS直聘·游戏化营销",
    date: "2024.05",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=1000&fit=crop",
    description: "分支剧情还原岗位真实工作场景",
    details: ["1000+应用评论", "6组深度访谈", "年级二等奖"],
  },
  {
    id: "qianxiang-1",
    title: "200万年会策划",
    category: "乾象投资·品牌公关",
    date: "2025.03",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1000&fit=crop",
    description: "主题策划 + 供应商统筹 + 现场协调",
    details: ["员工满意度 90%", "多家供应商管理", "全流程执行"],
  },
  {
    id: "climbing-1",
    title: "攀岩时刻",
    category: "个人爱好",
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=1000&fit=crop",
    description: "在岩壁上寻找解决方案的路径",
    details: ["抱石V4", "顶绳5.11a", "坚持与突破"],
  },
  {
    id: "photo-1",
    title: "城市光影",
    category: "摄影作品",
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&h=1000&fit=crop",
    description: "用镜头记录生活的美好瞬间",
    details: ["Fujifilm X-T4", "街拍", "光影捕捉"],
  },
];

type FilmRollGalleryProps = {
  /** 来自 Sanity；不传则使用内置示例数据 */
  initialFrames?: FilmFrame[];
};

export function FilmRollGallery({ initialFrames }: FilmRollGalleryProps) {
  const frames =
    initialFrames && initialFrames.length > 0
      ? initialFrames
      : FALLBACK_FILM_FRAMES;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFrame, setSelectedFrame] = useState<FilmFrame | null>(null);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return frames.length - 1;
      if (next >= frames.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, frames.length]);

  return (
    <div className="min-h-screen bg-editorial-canvas py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Monitor className="w-7 h-7 sm:w-8 sm:h-8 text-editorial-accent" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-editorial-title tracking-tight">
              作品集
            </h2>
          </motion.div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -left-12 top-0 bottom-0 w-8 film-perforation opacity-[0.12]" />
          <div className="absolute -right-12 top-0 bottom-0 w-8 film-perforation opacity-[0.12]" />

          <GlowCard
            glowColor="accent"
            customSize
            className="w-full !p-0 !gap-0 min-h-[280px] border border-editorial-title/10 bg-editorial-card shadow-soft"
          >
            <div
              ref={containerRef}
              className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
            >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (d: number) => ({
                    x: d > 0 ? 1000 : -1000,
                    opacity: 0,
                    scale: 0.8,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                  },
                  exit: (d: number) => ({
                    x: d < 0 ? 1000 : -1000,
                    opacity: 0,
                    scale: 0.8,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
              >
                <FilmFrameCard
                  frame={frames[currentIndex]}
                  onClick={() => setSelectedFrame(frames[currentIndex])}
                />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-editorial-card/95 backdrop-blur-sm rounded-full border border-editorial-title/10 shadow-soft hover:border-editorial-accent/30 transition-colors z-10"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="w-6 h-6 text-editorial-title" />
            </button>
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-editorial-card/95 backdrop-blur-sm rounded-full border border-editorial-title/10 shadow-soft hover:border-editorial-accent/30 transition-colors z-10"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="w-6 h-6 text-editorial-title" />
            </button>
          </div>
          </GlowCard>

          <div className="mt-8 flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {frames.map((frame, index) => (
              <button
                key={frame.id}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`
                  flex-shrink-0 w-20 h-24 rounded-lg overflow-hidden border-2 transition-all
                  ${
                    index === currentIndex
                      ? "border-editorial-accent scale-110 shadow-soft"
                      : "border-editorial-title/15 hover:border-editorial-accent/40 opacity-60 hover:opacity-100"
                  }
                `}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={frame.image}
                    alt={frame.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {frames.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`
                  h-1 rounded-full transition-all
                  ${
                    index === currentIndex
                      ? "w-8 bg-editorial-accent"
                      : "w-4 bg-editorial-title/20 hover:bg-editorial-title/35"
                  }
                `}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedFrame && (
            <FilmFrameModal
              frame={selectedFrame}
              onClose={() => setSelectedFrame(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function FilmFrameCard({
  frame,
  onClick,
}: {
  frame: FilmFrame;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-8 items-center cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-film group">
        <Image
          src={frame.image}
          alt={frame.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white/90 text-xs font-mono mb-1">
            {frame.date}
          </div>
          <div className="text-white text-xs bg-white/20 backdrop-blur-sm rounded px-2 py-1 inline-block">
            {frame.category}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-editorial-title mb-2 tracking-tight">
            {frame.title}
          </h3>
          <p className="text-editorial-body leading-relaxed text-[15px]">
            {frame.description}
          </p>
        </div>

        <div className="space-y-2">
          {frame.details.map((detail, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 text-sm text-editorial-body"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-editorial-accent/80 shrink-0" />
              <span>{detail}</span>
            </motion.div>
          ))}
        </div>

        <span className="inline-flex items-center gap-2 text-sm font-medium text-editorial-muted">
          查看详情
          <ChevronRight className="w-4 h-4" />
        </span>
      </div>
    </motion.div>
  );
}

function FilmFrameModal({
  frame,
  onClose,
}: {
  frame: FilmFrame;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-morphism rounded-2xl shadow-film"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-96 rounded-t-2xl overflow-hidden">
          <Image
            src={frame.image}
            alt={frame.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="text-sm font-mono mb-2">
              {frame.date} · {frame.category}
            </div>
            <h3 className="text-4xl font-bold">{frame.title}</h3>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base text-editorial-body leading-relaxed">
            {frame.description}
          </p>

          <div>
            <h4 className="font-semibold text-editorial-title text-sm uppercase tracking-wider mb-3">
              核心亮点
            </h4>
            <div className="grid gap-3">
              {frame.details.map((detail, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-editorial-accent flex-shrink-0" />
                  <span className="text-editorial-body text-sm">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

