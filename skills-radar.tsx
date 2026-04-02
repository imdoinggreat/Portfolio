"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
  category: "core" | "tool" | "soft";
  proofProjects: string[];
  certificates?: string[];
}

const skills: Skill[] = [
  {
    name: "用户洞察",
    level: 90,
    category: "core",
    proofProjects: ["美图云肩", "BOSS直聘"],
    certificates: [],
  },
  {
    name: "数据分析",
    level: 85,
    category: "core",
    proofProjects: ["飞书CRM系统", "BOSS用户研究"],
    certificates: ["MOS专家级Excel"],
  },
  {
    name: "活动策划",
    level: 88,
    category: "core",
    proofProjects: ["飞书商学院活动", "乾象年会"],
    certificates: [],
  },
  {
    name: "产品思维",
    level: 80,
    category: "core",
    proofProjects: ["美图云肩", "申请工具链"],
    certificates: [],
  },
  {
    name: "Excel",
    level: 95,
    category: "tool",
    proofProjects: ["数据分析报告"],
    certificates: ["MOS专家级"],
  },
  {
    name: "Python",
    level: 75,
    category: "tool",
    proofProjects: ["GRE词库系统", "数据爬取"],
    certificates: [],
  },
  {
    name: "SQL",
    level: 70,
    category: "tool",
    proofProjects: ["用户数据分析"],
    certificates: [],
  },
  {
    name: "Figma",
    level: 80,
    category: "tool",
    proofProjects: ["美图云肩原型"],
    certificates: [],
  },
  {
    name: "跨文化沟通",
    level: 85,
    category: "soft",
    proofProjects: [],
    certificates: ["托福107", "GRE330"],
  },
  {
    name: "快速学习",
    level: 90,
    category: "soft",
    proofProjects: ["7天学会CRM系统"],
    certificates: [],
  },
];

export function SkillsRadar() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "core" | "tool" | "soft">("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const categories = [
    { id: "all" as const, label: "全部技能", color: "bg-foreground/10" },
    { id: "core" as const, label: "核心能力", color: "bg-honeydew-200" },
    { id: "tool" as const, label: "工具熟练度", color: "bg-lychee-200" },
    { id: "soft" as const, label: "软技能", color: "bg-mango-200" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">技能图谱</h2>
        <p className="text-foreground/70">
          每项技能都有对应的项目证明和成果展示
        </p>
      </div>

      {/* 分类筛选 */}
      <div className="flex gap-3 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all
              ${
                activeCategory === cat.id
                  ? `${cat.color} shadow-soft scale-105`
                  : "bg-white/50 hover:bg-white/80"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 技能列表 */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="glass-morphism rounded-2xl p-6 cursor-pointer hover:shadow-soft-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedSkill(skill)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
                <div className="flex gap-2">
                  {skill.category === "core" && (
                    <span className="text-xs px-2 py-1 bg-honeydew-100 text-honeydew-500 rounded">
                      核心能力
                    </span>
                  )}
                  {skill.category === "tool" && (
                    <span className="text-xs px-2 py-1 bg-lychee-100 text-lychee-500 rounded">
                      工具
                    </span>
                  )}
                  {skill.category === "soft" && (
                    <span className="text-xs px-2 py-1 bg-mango-100 text-mango-500 rounded">
                      软技能
                    </span>
                  )}
                </div>
              </div>
              <div className="text-3xl font-bold text-honeydew-500">
                {skill.level}%
              </div>
            </div>

            {/* 进度条 */}
            <div className="w-full h-3 bg-foreground/10 rounded-full overflow-hidden mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-honeydew-400 to-lychee-400"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: index * 0.05 + 0.2, duration: 0.8 }}
              />
            </div>

            {/* 证明材料 */}
            <div className="space-y-2">
              {skill.proofProjects.length > 0 && (
                <div className="text-sm">
                  <span className="text-foreground/60">代表项目：</span>
                  <span className="text-foreground/80 ml-1">
                    {skill.proofProjects.join("、")}
                  </span>
                </div>
              )}
              {skill.certificates && skill.certificates.length > 0 && (
                <div className="text-sm">
                  <span className="text-foreground/60">证书：</span>
                  <span className="text-foreground/80 ml-1">
                    {skill.certificates.join("、")}
                  </span>
                </div>
              )}
            </div>

            {/* Hover提示 */}
            <div className="text-xs text-foreground/40 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              点击查看详情 →
            </div>
          </motion.div>
        ))}
      </div>

      {/* 详情弹窗 */}
      {selectedSkill && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            className="glass-morphism rounded-2xl p-8 max-w-2xl w-full shadow-soft-lg"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">{selectedSkill.name}</h3>
                <div className="text-lg text-honeydew-500 font-bold">
                  熟练度 {selectedSkill.level}%
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="p-2 hover:bg-foreground/5 rounded-full"
              >
                ✕
              </button>
            </div>

            {selectedSkill.proofProjects.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3">证明项目</h4>
                <div className="space-y-2">
                  {selectedSkill.proofProjects.map((project) => (
                    <div
                      key={project}
                      className="flex items-center gap-2 p-3 bg-honeydew-50 rounded-lg hover:bg-honeydew-100 transition-colors cursor-pointer"
                    >
                      <span>{project}</span>
                      <ExternalLink className="w-4 h-4 ml-auto text-foreground/40" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedSkill.certificates && selectedSkill.certificates.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">相关证书</h4>
                <div className="flex gap-2 flex-wrap">
                  {selectedSkill.certificates.map((cert) => (
                    <span
                      key={cert}
                      className="px-4 py-2 bg-lychee-100 text-lychee-500 rounded-lg font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
