"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  tags: string[];
  date: string;
  role: string;
  
  // STAR结构
  situation: {
    title: string;
    content: string;
    highlights: string[];
  };
  task: {
    title: string;
    content: string;
    myRole: string;
    teamSize?: string;
  };
  action: {
    title: string;
    steps: {
      title: string;
      description: string;
      image?: string;
      methods?: string[];
    }[];
  };
  result: {
    title: string;
    metrics: {
      label: string;
      value: string;
      icon: string;
    }[];
    feedback: string[];
    images?: string[];
  };
  insights: {
    title: string;
    learnings: string[];
    improvements: string[];
  };
  skills: string[];
  links?: {
    label: string;
    url: string;
  }[];
}

// 示例数据：飞书项目
const projectData: ProjectDetail = {
  id: "feishu-marketing",
  title: "飞书商学院营销全案",
  subtitle: "顶级商学院To B营销，单场产出30+ MQL",
  coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
  tags: ["ToB营销", "活动策划", "数据驱动", "用户洞察"],
  date: "2025.09 - 2025.12",
  role: "独立负责",
  
  situation: {
    title: "背景与挑战",
    content: "飞书商业化团队需要拓展高端B端客户，重点目标是北大国发院、清华经管、清华五道口等顶级商学院的企业家群体。这个群体具有高决策权但难以触达的特点。",
    highlights: [
      "目标用户：顶级商学院的企业家（KDM）",
      "核心挑战：高净值人群建联难、留资难",
      "竞争环境：钉钉、企业微信等竞品已有布局",
    ],
  },
  
  task: {
    title: "我的角色与职责",
    content: "作为市场营销实习生，我负责从0到1策划并执行"走进字节"系列活动，包括需求洞察、方案设计、执行协调和数据复盘全流程。",
    myRole: "活动策划与执行负责人",
    teamSize: "跨部门协作，对接销售、产品、运营3个团队",
  },
  
  action: {
    title: "方法与过程",
    steps: [
      {
        title: "Step 1: 用户洞察",
        description: "通过与销售团队深度访谈，分析企业家群体的核心诉求，发现"子女教育"和"AI思维培养"是关键痛点。",
        methods: [
          "访谈销售团队，收集客户反馈",
          "分析历史活动数据，识别转化瓶颈",
          "竞品调研，寻找差异化机会",
        ],
      },
      {
        title: "Step 2: 创新方案设计",
        description: "基于洞察，策划"AI亲子营"差异化活动，通过"AI Portrait生成"等互动环节，让客户在游戏化体验中感受飞书技术实力。",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
        methods: [
          "设计游戏化体验流程",
          "定制AI技术展示环节",
          "准备个性化礼品和资料",
        ],
      },
      {
        title: "Step 3: 执行与优化",
        description: "从场地选择、流程设计、物料准备到现场执行，全程跟进。活动后立即进行数据分析和复盘，持续优化方案。",
        methods: [
          "建立活动执行SOP",
          "实时追踪参与数据",
          "活动后24小时内完成复盘",
        ],
      },
      {
        title: "Step 4: CRM系统搭建",
        description: "为提升客户管理效率，主导搭建部门首个CRM系统，实现客户自动标签化和线索自动录入。",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        methods: [
          "需求调研与字段体系设计",
          "流程自动化配置",
          "团队培训与推广",
        ],
      },
    ],
  },
  
  result: {
    title: "核心成果",
    metrics: [
      { label: "KDM覆盖", value: "500+", icon: "👥" },
      { label: "留资率", value: "20%", icon: "📈" },
      { label: "单场MQL", value: "25条", icon: "🎯" },
      { label: "效率提升", value: "35%", icon: "⚡" },
      { label: "赢单周期缩短", value: "7天", icon: "⏱️" },
      { label: "数据报告", value: "12+份", icon: "📊" },
    ],
    feedback: [
      "团队反馈：「活动设计很有创意，客户反响超出预期」",
      "销售部门：「CRM系统大幅提升了我们的工作效率」",
      "客户评价：「AI亲子营让我看到飞书的技术实力和人文关怀」",
    ],
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80",
      "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&q=80",
    ],
  },
  
  insights: {
    title: "关键洞察与反思",
    learnings: [
      "洞察驱动创新：真正的差异化来自对用户需求的深刻理解，而不是形式上的创新",
      "系统化思维：搭建CRM系统让我理解到，解决问题需要从流程和工具层面入手",
      "数据闭环：每次活动后的数据分析和复盘，是持续优化的关键",
    ],
    improvements: [
      "如果重来，会在活动前期增加更多用户预调研，减少方案试错成本",
      "CRM系统可以加入更多AI自动化功能，进一步提升效率",
      "可以建立更完善的知识库，沉淀经验供团队共享",
    ],
  },
  
  skills: ["活动策划", "用户洞察", "数据分析", "系统设计", "项目管理"],
  
  links: [
    { label: "活动方案PDF", url: "#" },
    { label: "数据分析报告", url: "#" },
  ],
};

export function ProjectDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-honeydew-50/30 to-lychee-50/20">
      {/* 返回按钮 */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Link
          href="/cases"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回作品集
        </Link>
      </div>

      {/* Header */}
      <div className="relative h-96 mb-12">
        <Image
          src={projectData.coverImage}
          alt={projectData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
          <div className="max-w-4xl">
            <div className="flex gap-2 mb-4">
              {projectData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              {projectData.title}
            </h1>
            <p className="text-xl text-white/90 mb-4">{projectData.subtitle}</p>
            <div className="flex gap-6 text-white/80 text-sm">
              <span>📅 {projectData.date}</span>
              <span>👤 {projectData.role}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Situation */}
          <Section title={projectData.situation.title} number="01">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {projectData.situation.content}
            </p>
            <div className="grid gap-4">
              {projectData.situation.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-honeydew-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-honeydew-400 mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Task */}
          <Section title={projectData.task.title} number="02">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {projectData.task.content}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 glass-morphism rounded-xl">
                <div className="text-sm text-foreground/60 mb-2">我的角色</div>
                <div className="font-semibold">{projectData.task.myRole}</div>
              </div>
              {projectData.task.teamSize && (
                <div className="p-6 glass-morphism rounded-xl">
                  <div className="text-sm text-foreground/60 mb-2">团队协作</div>
                  <div className="font-semibold">{projectData.task.teamSize}</div>
                </div>
              )}
            </div>
          </Section>

          {/* Action */}
          <Section title={projectData.action.title} number="03">
            <div className="space-y-8">
              {projectData.action.steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="p-6 glass-morphism rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-foreground/80 mb-4">{step.description}</p>
                  
                  {step.image && (
                    <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  {step.methods && (
                    <div className="space-y-2">
                      {step.methods.map((method, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-lychee-400" />
                          {method}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Result */}
          <Section title={projectData.result.title} number="04">
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {projectData.result.metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  className="p-6 glass-morphism rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="text-4xl mb-2">{metric.icon}</div>
                  <div className="text-3xl font-bold text-honeydew-500 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-foreground/60">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {projectData.result.feedback.map((item, i) => (
                <div key={i} className="p-4 bg-lychee-50 rounded-lg border-l-4 border-lychee-400">
                  <p className="text-foreground/80 italic">"{item}"</p>
                </div>
              ))}
            </div>

            {projectData.result.images && (
              <div className="grid md:grid-cols-2 gap-4">
                {projectData.result.images.map((img, i) => (
                  <div key={i} className="relative h-48 rounded-xl overflow-hidden">
                    <Image src={img} alt={`Result ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </Section>

          {/* Insights */}
          <Section title={projectData.insights.title} number="05">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-lg">💡 我学到了什么</h4>
                <div className="space-y-3">
                  {projectData.insights.learnings.map((item, i) => (
                    <div key={i} className="p-4 bg-mango-50 rounded-lg">
                      <p className="text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-lg">🔄 如果重来我会...</h4>
                <div className="space-y-3">
                  {projectData.insights.improvements.map((item, i) => (
                    <div key={i} className="p-4 bg-honeydew-50 rounded-lg">
                      <p className="text-foreground/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Skills & Links */}
          <div className="p-8 glass-morphism rounded-2xl">
            <div className="mb-6">
              <h4 className="font-semibold mb-3">🛠️ 技能应用</h4>
              <div className="flex flex-wrap gap-2">
                {projectData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-honeydew-100 text-honeydew-500 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {projectData.links && projectData.links.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3">📎 相关资料</h4>
                <div className="flex flex-wrap gap-3">
                  {projectData.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-lychee-100 text-lychee-500 rounded-lg hover:bg-lychee-200 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Section组件
function Section({
  title,
  number,
  children,
}: {
  title: string;
  number: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-6xl font-bold text-honeydew-200">{number}</span>
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      {children}
    </motion.section>
  );
}
