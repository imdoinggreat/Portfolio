"use client";

import OrbitingSkills from "@/components/ui/orbiting-skills";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "数据分析",
    color: "#3776AB",
    borderColor: "border-blue-200",
    skills: [
      { name: "Python", desc: "数据清洗 · 可视化 · 自动化脚本", level: 75 },
      { name: "SQL", desc: "数据查询 · 多表关联 · 漏斗分析", level: 80 },
      { name: "Excel / Sheets", desc: "透视表 · 数据建模 · 仪表盘", level: 90 },
      { name: "Tableau", desc: "可视化看板 · 业务洞察呈现", level: 65 },
    ],
  },
  {
    category: "创意设计",
    color: "#31A8FF",
    borderColor: "border-purple-200",
    skills: [
      { name: "Photoshop", desc: "图文合成 · 品牌视觉 · 物料制作", level: 80 },
      { name: "Premiere Pro", desc: "视频剪辑 · 字幕 · 品牌视频", level: 75 },
      { name: "Figma", desc: "原型设计 · 交互流程 · 组件库", level: 70 },
      { name: "PowerPoint", desc: "商业演示 · 提案汇报 · 数据可视化", level: 95 },
    ],
  },
  {
    category: "营销与协作",
    color: "#F24E1E",
    borderColor: "border-orange-200",
    skills: [
      { name: "飞书 / Lark", desc: "CRM维护 · 数据报告 · 团队协作", level: 90 },
      { name: "Notion", desc: "项目管理 · 知识库搭建", level: 85 },
      { name: "微信生态", desc: "企微运营 · 社群触达 · 内容分发", level: 85 },
      { name: "SPSS / 问卷分析", desc: "用户调研 · 描述性统计", level: 65 },
    ],
  },
];

export function SkillsPageClient() {
  return (
    <main className="min-h-screen bg-editorial-canvas">
      {/* Hero */}
      <section className="pt-16 pb-8 px-4 text-center border-b border-editorial-title/[0.06]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-editorial-muted mb-3">
            Skill Stack · 技能栈
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-editorial-title tracking-tight mb-4">
            我会用的工具
          </h1>
          <p className="text-sm sm:text-base text-editorial-body max-w-lg mx-auto leading-relaxed">
            数据驱动的营销思维 × 创意执行能力 — 从洞察到呈现，全链路可落地。
          </p>
        </motion.div>
      </section>

      {/* Orbit visualization */}
      <section className="py-16 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <OrbitingSkills />
        </motion.div>
        <p className="text-xs text-editorial-muted text-center">
          悬停图标暂停动画 · 内圈：数据工具 · 外圈：创意工具
        </p>
      </section>

      {/* Skill groups */}
      <section className="pb-20 px-4 border-t border-editorial-title/[0.06]">
        <div className="container mx-auto max-w-4xl pt-14">
          <div className="grid gap-8 md:grid-cols-3">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                className={`rounded-xl border bg-editorial-card p-5 ${group.borderColor}`}
              >
                <h2 className="text-sm font-semibold text-editorial-title mb-4 tracking-wide">
                  {group.category}
                </h2>
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-sm font-medium text-editorial-title">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-editorial-muted tabular-nums">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 rounded-full bg-editorial-title/8 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: group.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: gi * 0.1 + 0.2 }}
                        />
                      </div>
                      <p className="text-[11px] text-editorial-muted mt-1 leading-snug">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
