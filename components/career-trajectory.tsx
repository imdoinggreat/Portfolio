"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CareerNode {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  role: string;
  valueSummary: string;
  /** Short quantified result (optional) */
  metric?: string;
  caseSlug?: string;
  content: {
    description: string;
    achievements: string[];
    tags: string[];
    link?: string;
  };
}

/** Strongest proof path — 字节 → BOSS → 美图 → 乾象 */
const nodes: CareerNode[] = [
  {
    id: "feishu",
    title: "字节跳动",
    subtitle: "飞书商业化",
    date: "Sep–Dec 2025",
    role: "To B 营销 · 触达与转化",
    valueSummary: "CRM + KDM 策略优化商学院场景触达与留资效率",
    metric: "500+ KDM · 留资率 20%",
    caseSlug: "feishu-b2b",
    content: {
      description:
        "负责顶级商学院（北大国发院、清华经管、清华五道口）To B营销，通过数据驱动与创新活动设计实现留资率提升",
      achievements: [
        "覆盖 500+ KDM，留资率提升至 20%",
        "策划\"AI亲子营\"差异化活动，单场产出30+ MQL",
        "搭建CRM系统，团队效率提升35%，赢单周期缩短7天",
        "产出 12+ 份数据洞察报告",
      ],
      tags: ["ToB营销", "数据驱动", "CRM系统", "活动策划"],
    },
  },
  {
    id: "boss",
    title: "BOSS直聘",
    subtitle: "游戏化营销",
    date: "2024",
    role: "用户研究 · 全案策划",
    valueSummary: "用互动机制提升年轻用户参与与留资转化路径",
    metric: "35% 触达效率提升（课程内）",
    caseSlug: "boss-gamification",
    content: {
      description:
        "为BOSS直聘设计游戏化职业体验营销方案，解决年轻求职者\"对岗位认知偏差\"核心痛点",
      achievements: [
        "6 组深度访谈 + 1000+ 应用评论分析",
        "设计完整\"UGC内容 + 线上游戏 + 线下快闪\"全案",
        "获得课程优秀评级，全年级答辩二等奖",
      ],
      tags: ["用户研究", "游戏化设计", "营销全案"],
    },
  },
  {
    id: "meitu",
    title: "美图云肩",
    subtitle: "国潮产品设计",
    date: "2024",
    role: "洞察 · 产品叙事",
    valueSummary: "从文化洞察到拼图与 AR 的可传播产品表达",
    metric: "课程 A 类 · 班级前 10%",
    caseSlug: "meitu-yunjian",
    content: {
      description:
        "围绕非遗云肩文化，为美图秀秀设计创新产品功能，实现传统文化的年轻化、数字化表达",
      achievements: [
        "完成 5 组深度访谈 + 564 条微博数据分析",
        "设计九宫格拼图 + AR穿戴滤镜两大功能",
        "获得课程 A 类评级，班级答辩前 10%",
      ],
      tags: ["用户洞察", "产品设计", "文化创新"],
    },
  },
  {
    id: "qianxiang",
    title: "乾象投资",
    subtitle: "品牌公关",
    date: "Jan–Apr 2025",
    role: "品牌公关 · 活动与舆情",
    valueSummary: "大型年会体验与舆情日常，支撑稳健品牌表达",
    metric: "200 万预算年会 · 满意度 90%",
    caseSlug: "qianxiang-brand",
    content: {
      description: "参与200万元预算公司年会全流程，主导主题策划与供应商管理",
      achievements: [
        "主导主题策划（含游戏设计），员工满意度达90%",
        "独立负责舆情日报/周报，识别敏感信息",
        "主导品牌宣传视频拍摄，完成上线",
      ],
      tags: ["大型活动", "舆情管理", "品牌传播"],
    },
  },
];

export function CareerTrajectory() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const selected = nodes.find((n) => n.id === activeId);

  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="text-center mb-12 md:mb-14 max-w-2xl mx-auto">
        <p className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-editorial-muted mb-3">
          Career trajectory · Selected experience
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-editorial-title tracking-tight mb-4">
          职业路径 / 关键节点
        </h2>
        <p className="text-sm sm:text-base text-editorial-body leading-relaxed">
          横向时间轴：时间、组织、职能与一句话价值；点击卡片查看摘要，完整拆解见案例页。
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div
          className="flex flex-col lg:flex-row lg:justify-start gap-4 lg:gap-6 lg:overflow-x-auto lg:pb-4 lg:pt-2 lg:snap-x lg:snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {nodes.map((node, index) => (
            <motion.button
              key={node.id}
              type="button"
              onClick={() => setActiveId(node.id)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={cn(
                "text-left w-full lg:w-[min(260px,80vw)] lg:flex-shrink-0 lg:snap-center",
                "rounded-lg border border-editorial-title/10 bg-editorial-card",
                "pl-5 pr-4 py-4 sm:py-5",
                "border-l-[3px] border-l-editorial-title/15",
                "transition-all duration-200",
                "hover:border-editorial-accent/40 hover:bg-white hover:shadow-soft hover:border-l-editorial-accent/50",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-editorial-canvas",
              )}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-editorial-title/25 ring-4 ring-editorial-title/[0.04]"
                  aria-hidden
                />
                <time className="text-[11px] font-mono tabular-nums text-editorial-muted">
                  {node.date}
                </time>
              </div>
              <h3 className="text-base font-semibold text-editorial-title leading-snug">
                {node.title}
              </h3>
              <p className="text-xs text-editorial-muted mt-0.5">{node.subtitle}</p>
              <p className="text-[11px] text-editorial-body/90 mt-2 leading-snug">
                {node.role}
              </p>
              <p className="text-sm text-editorial-body mt-3 leading-relaxed line-clamp-3">
                {node.valueSummary}
              </p>
              {node.metric && (
                <p className="mt-3 pt-3 border-t border-editorial-title/[0.06] text-xs font-medium text-editorial-title/85 tabular-nums">
                  {node.metric}
                </p>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <NodeDetailModal
            node={selected}
            onClose={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function NodeDetailModal({
  node,
  onClose,
}: {
  node: CareerNode;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-editorial-ink/35 backdrop-blur-md p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.96, y: 16, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.96, y: 16, opacity: 0 }}
        transition={{ type: "spring", damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-editorial-card border border-editorial-title/10 rounded-2xl p-6 sm:p-8 shadow-soft-lg">
          <div className="flex justify-between items-start gap-4 mb-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-editorial-title">
                {node.title}
              </h3>
              <p className="text-editorial-muted mt-1">{node.subtitle}</p>
              <p className="text-sm text-editorial-body mt-2">{node.role}</p>
              <p className="text-sm text-editorial-title mt-3 font-medium leading-snug">
                {node.valueSummary}
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="text-xs font-mono text-editorial-muted">
                  {node.date}
                </span>
                {node.metric && (
                  <span className="text-xs text-editorial-body">{node.metric}</span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-editorial-title/5 transition-colors shrink-0"
              aria-label="关闭"
            >
              <X className="w-5 h-5 text-editorial-muted" />
            </button>
          </div>

          <p className="text-editorial-body leading-relaxed mb-6 text-[15px]">
            {node.content.description}
          </p>

          <div className="space-y-3 mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-editorial-muted">
              要点
            </h4>
            <ul className="space-y-2">
              {node.content.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-editorial-body"
                >
                  <span className="mt-2 h-px w-3 bg-editorial-accent/35 shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {node.content.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] px-2.5 py-1 rounded-md border border-editorial-title/10 text-editorial-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {node.caseSlug && (
            <Link
              href={`/cases/${node.caseSlug}`}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-editorial-title text-white font-medium py-3 rounded-lg transition-opacity hover:opacity-90"
              onClick={onClose}
            >
              阅读完整案例拆解
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}

          {node.content.link && (
            <a
              href={node.content.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full flex items-center justify-center gap-2 border border-editorial-title/15 py-3 rounded-lg font-medium text-editorial-title hover:bg-editorial-title/[0.03] transition-colors"
            >
              外部链接
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
