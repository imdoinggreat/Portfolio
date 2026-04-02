"use client";

import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, FileText, Mail, Briefcase } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Position {
  id: string;
  title: string;
  tagline: string;
  keywords: string[];
}

const positions: Position[] = [
  {
    id: "marketing",
    title: "市场营销/品牌策划",
    tagline: "数据驱动的营销人 | 用洞察和创意连接用户与品牌",
    keywords: ["ToB营销", "用户洞察", "活动策划"],
  },
  {
    id: "product",
    title: "产品运营/用户增长",
    tagline: "增长驱动的产品人 | 用数据和策略实现用户价值最大化",
    keywords: ["用户增长", "数据分析", "产品思维"],
  },
  {
    id: "strategy",
    title: "战略分析/咨询",
    tagline: "系统化思考者 | 用框架和数据解构复杂商业问题",
    keywords: ["商业分析", "战略思维", "问题拆解"],
  },
];

export function HeroSection() {
  const [selectedPosition, setSelectedPosition] = useState(positions[0]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* 职位切换器 */}
      <motion.div
        className="absolute top-24 right-8 z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="glass-morphism rounded-xl p-3 shadow-soft">
          <div className="text-xs text-foreground/60 mb-2 px-2">目标岗位</div>
          <div className="space-y-2">
            {positions.map((position) => (
              <button
                key={position.id}
                onClick={() => setSelectedPosition(position)}
                className={`
                  w-full px-4 py-2 rounded-lg text-sm text-left transition-all
                  ${
                    selectedPosition.id === position.id
                      ? "bg-honeydew-200 text-foreground font-semibold"
                      : "bg-white/50 text-foreground/70 hover:bg-honeydew-100"
                  }
                `}
              >
                {position.title}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 主标题区域 */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          张紫茹
        </motion.h1>

        {/* 动态Tagline */}
        <AnimatePresence mode="wait">
          <motion.p
            key={selectedPosition.id}
            className="text-2xl text-foreground/80 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {selectedPosition.tagline}
          </motion.p>
        </AnimatePresence>

        {/* 核心能力标签 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPosition.id}
            className="flex flex-wrap gap-3 justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {selectedPosition.keywords.map((keyword, i) => (
              <motion.span
                key={keyword}
                className="px-4 py-2 bg-honeydew-200 text-foreground rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {keyword}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 3个核心能力卡片 */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: "🎯",
              title: "用户洞察",
              stat: "11组",
              desc: "深度访谈",
              detail: "2000+条真实数据分析",
            },
            {
              icon: "📊",
              title: "数据驱动",
              stat: "35%",
              desc: "效率提升",
              detail: "搭建CRM系统，输出12+份报告",
            },
            {
              icon: "💡",
              title: "创新能力",
              stat: "A类",
              desc: "项目评级",
              detail: "设计差异化方案获最高评级",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="glass-morphism rounded-2xl p-6 hover:shadow-soft-lg transition-shadow group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-3xl font-bold text-honeydew-500 mb-1">
                {item.stat}
              </div>
              <div className="text-sm font-semibold mb-2">{item.desc}</div>
              <div className="text-xs text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA按钮 */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 bg-honeydew-200 hover:bg-honeydew-300 rounded-lg font-semibold transition-colors flex items-center gap-2 shadow-soft"
          >
            <Download className="w-5 h-5" />
            下载简历 PDF
          </a>
          <Link
            href="#projects"
            className="px-8 py-4 bg-lychee-200 hover:bg-lychee-300 rounded-lg font-semibold transition-colors flex items-center gap-2 shadow-soft"
          >
            <FileText className="w-5 h-5" />
            查看作品集
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 bg-white border-2 border-honeydew-300 hover:bg-honeydew-50 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            联系我
          </Link>
        </motion.div>
      </div>

      {/* 环形标题（保留原创意） */}
      <div className="mb-12">
        <CircularRevealHeading
          items={[
            {
              text: "USER INSIGHT",
              image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80",
            },
            {
              text: "DATA DRIVEN",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            },
            {
              text: "CREATIVE",
              image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            },
            {
              text: "GROWTH",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
            },
          ]}
          centerText={
            <div className="text-center">
              <div className="text-sm text-foreground/60 mb-1">中国传媒大学</div>
              <div className="text-lg font-bold">广告学</div>
              <div className="text-sm text-foreground/60 mt-1">GPA 3.85/4.0</div>
            </div>
          }
          size="md"
        />
      </div>

      {/* 滚动提示 */}
      <motion.div
        className="flex flex-col items-center gap-2 text-foreground/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm">向下探索</span>
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
