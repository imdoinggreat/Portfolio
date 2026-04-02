"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

interface ClimbingHold {
  id: string;
  x: number;
  y: number;
  type: "experience" | "project" | "milestone";
  title: string;
  subtitle: string;
  date: string;
  content: {
    description: string;
    achievements: string[];
    tags: string[];
    link?: string;
  };
  color: "honeydew" | "lychee" | "mango";
  difficulty: 1 | 2 | 3;
}

const holds: ClimbingHold[] = [
  {
    id: "feishu",
    x: 25,
    y: 15,
    type: "experience",
    title: "字节跳动",
    subtitle: "飞书商业化",
    date: "2025.09-12",
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
    color: "honeydew",
    difficulty: 3,
  },
  {
    id: "meitu",
    x: 55,
    y: 30,
    type: "project",
    title: "美图云肩",
    subtitle: "国潮产品设计",
    date: "2024",
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
    color: "lychee",
    difficulty: 2,
  },
  {
    id: "qianxiang",
    x: 75,
    y: 50,
    type: "experience",
    title: "乾象投资",
    subtitle: "品牌公关",
    date: "2025.01-04",
    content: {
      description: "参与200万元预算公司年会全流程，主导主题策划与供应商管理",
      achievements: [
        "主导主题策划（含游戏设计），员工满意度达90%",
        "独立负责舆情日报/周报，识别敏感信息",
        "主导品牌宣传视频拍摄，完成上线",
      ],
      tags: ["大型活动", "舆情管理", "品牌传播"],
    },
    color: "mango",
    difficulty: 2,
  },
  {
    id: "boss",
    x: 40,
    y: 70,
    type: "project",
    title: "BOSS直聘",
    subtitle: "游戏化营销",
    date: "2024",
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
    color: "lychee",
    difficulty: 2,
  },
];

export function ClimbingRoute() {
  const [activeHold, setActiveHold] = useState<string | null>(null);
  const selectedHold = holds.find((h) => h.id === activeHold);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <motion.h2
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-honeydew-400 to-lychee-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          我的攀登路线
        </motion.h2>
        <motion.p
          className="text-foreground/60 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          每个岩点都是一次成长 · 点击查看详情
        </motion.p>
      </div>

      <div className="relative w-full h-[900px] bg-gradient-to-b from-honeydew-50 via-white to-lychee-50/30 rounded-3xl overflow-hidden shadow-soft-lg border border-honeydew-200/30">
        <div className="absolute inset-0 opacity-[0.02] film-grain" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#D5F2E8" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#FFE9F1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFEDD0" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {holds.map((hold, i) => {
            if (i === holds.length - 1) return null;
            const next = holds[i + 1];
            return (
              <motion.line
                key={`line-${hold.id}`}
                x1={`${hold.x}%`}
                y1={`${hold.y}%`}
                x2={`${next.x}%`}
                y2={`${next.y}%`}
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeDasharray="8,4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </svg>

        {holds.map((hold, index) => (
          <ClimbingHoldButton
            key={hold.id}
            hold={hold}
            index={index}
            isActive={activeHold === hold.id}
            onClick={() => setActiveHold(hold.id)}
          />
        ))}

        <div className="absolute bottom-8 left-8 glass-morphism rounded-xl p-4 space-y-2">
          <div className="text-sm font-semibold text-foreground/80 mb-2">
            攀岩难度
          </div>
          {[
            { level: "V1", label: "基础", color: "bg-mango-200" },
            { level: "V2", label: "进阶", color: "bg-lychee-200" },
            { level: "V3", label: "高级", color: "bg-honeydew-200" },
          ].map((item) => (
            <div key={item.level} className="flex items-center gap-2 text-xs">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="font-mono font-semibold">{item.level}</span>
              <span className="text-foreground/60">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedHold && (
          <HoldDetailCard
            hold={selectedHold}
            onClose={() => setActiveHold(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ClimbingHoldButton({
  hold,
  index,
  isActive,
  onClick,
}: {
  hold: ClimbingHold;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const colorMap = {
    honeydew: {
      bg: "bg-honeydew-200",
      hover: "hover:bg-honeydew-300",
      border: "border-honeydew-300",
      shadow: "shadow-honeydew-200/50",
    },
    lychee: {
      bg: "bg-lychee-200",
      hover: "hover:bg-lychee-300",
      border: "border-lychee-300",
      shadow: "shadow-lychee-200/50",
    },
    mango: {
      bg: "bg-mango-200",
      hover: "hover:bg-mango-300",
      border: "border-mango-300",
      shadow: "shadow-mango-200/50",
    },
  };

  const colors = colorMap[hold.color];

  return (
    <motion.button
      className={`
        absolute w-32 h-32 rounded-full
        ${colors.bg} ${colors.hover}
        shadow-soft backdrop-blur-sm
        border-4 ${colors.border}
        cursor-pointer
        flex flex-col items-center justify-center
        transition-all duration-300
        ${isActive ? `scale-110 ${colors.shadow} shadow-lg z-20` : "hover:scale-105 z-10"}
      `}
      style={{
        left: `${hold.x}%`,
        top: `${hold.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{
        delay: index * 0.2,
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
      onClick={onClick}
      whileHover={{ rotate: [0, -3, 3, 0], transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-center px-2">
        <div className="text-[10px] font-bold text-foreground/70 uppercase tracking-wider">
          {hold.date}
        </div>
        <div className="text-sm font-bold mt-1 leading-tight">{hold.title}</div>
        <div className="text-xs text-foreground/70 mt-0.5">{hold.subtitle}</div>
        <div className="text-[10px] font-mono font-bold mt-1 bg-white/50 rounded px-2 py-0.5">
          V{hold.difficulty}
        </div>
      </div>
    </motion.button>
  );
}

function HoldDetailCard({
  hold,
  onClose,
}: {
  hold: ClimbingHold;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-md p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-morphism rounded-2xl p-8 shadow-soft-lg">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">{hold.title}</h3>
              <p className="text-lg text-foreground/70">{hold.subtitle}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-sm text-foreground/60">{hold.date}</span>
                <span className="text-xs font-mono font-bold bg-foreground/10 rounded px-2 py-1">
                  V{hold.difficulty}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-foreground/5 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-foreground/80 leading-relaxed mb-6">
            {hold.content.description}
          </p>

          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-lg">核心成就</h4>
            <ul className="space-y-2">
              {hold.content.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {hold.content.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-honeydew-100 text-honeydew-500 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {hold.content.link && (
            <a
              href={hold.content.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 bg-honeydew-200 hover:bg-honeydew-300 text-foreground font-semibold py-3 rounded-lg transition-colors"
            >
              查看完整案例
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

