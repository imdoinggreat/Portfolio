"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Briefcase, Heart, Lightbulb, Zap, Globe } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-honeydew-50/30 to-lychee-50/20 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section 1: 个人简介 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">关于我</h1>
            <div className="max-w-3xl mx-auto text-xl text-foreground/80 leading-relaxed space-y-4">
              <p>
                我是<strong>张紫茹</strong>，中国传媒大学广告学在读研究生。
              </p>
              <p>
                在过去2年里，我深度参与了<strong>To B营销、产品设计和用户研究</strong>。
                从500+ KDM触达和11组深度访谈中，我意识到"数据能力"和"用户洞察"
                之间仍有巨大协同空间。
              </p>
              <p>
                我的目标是成为<strong>数据驱动的产品营销人</strong>，用洞察和创意
                帮助企业实现用户价值最大化。
              </p>
              <p className="text-honeydew-500 font-semibold">
                现在，我正在寻找能让我深入市场营销/产品运营一线的实习机会。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: 教育背景 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">教育背景</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <TimelineItem
              icon={<GraduationCap className="w-6 h-6" />}
              title="中国传媒大学"
              subtitle="广告学 硕士在读"
              period="2023.09 - 2026.06"
              highlights={[
                "GPA: 3.85/4.0",
                "核心课程：数字营销、消费者行为、品牌管理",
                "获得A类项目评级2次",
              ]}
              color="honeydew"
            />
            <TimelineItem
              icon={<GraduationCap className="w-6 h-6" />}
              title="中国传媒大学"
              subtitle="广告学 本科"
              period="2019.09 - 2023.06"
              highlights={[
                "托福: 107 (阅读30)",
                "GRE: 330 (Verbal 164 + Quant 166)",
                "优秀毕业生",
              ]}
              color="lychee"
            />
          </div>
        </motion.section>

        {/* Section 3: 经历时间线 */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">职业经历</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <TimelineItem
              icon={<Briefcase className="w-6 h-6" />}
              title="字节跳动 飞书商业化"
              subtitle="市场营销实习生"
              period="2025.09 - 2025.12"
              highlights={[
                "负责顶级商学院To B营销活动策划",
                "覆盖500+ KDM，留资率提升至20%",
                "主导搭建CRM系统，团队效率提升35%",
              ]}
              color="honeydew"
            />
            <TimelineItem
              icon={<Briefcase className="w-6 h-6" />}
              title="乾象投资"
              subtitle="品牌公关实习生"
              period="2025.01 - 2025.04"
              highlights={[
                "参与200万元预算年会全流程",
                "独立负责舆情日报/周报",
                "主导品牌宣传视频拍摄上线",
              ]}
              color="lychee"
            />
            <TimelineItem
              icon={<Lightbulb className="w-6 h-6" />}
              title="美图云肩项目"
              subtitle="产品设计（课程项目）"
              period="2024.11 - 2024.12"
              highlights={[
                "完成5组深度访谈 + 564条微博数据分析",
                "设计九宫格拼图 + AR穿戴滤镜",
                "获得课程A类评级，答辩前10%",
              ]}
              color="mango"
            />
          </div>
        </motion.section>

        {/* Section 4: 个人特质（软实力） */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">个人特质</h2>
          <p className="text-center text-foreground/70 mb-12">
            用3个真实故事展示我的软实力
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <TraitCard
              icon={<Zap className="w-8 h-8" />}
              title="快速学习能力"
              story="为了做飞书CRM系统，我在7天内从零学会系统搭建和自动化配置"
              outcome="独立搭建部门首个CRM系统，效率提升35%"
              proof="附上系统截图和学习笔记"
              color="honeydew"
            />
            <TraitCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="问题拆解能力"
              story="面对“留资率低”的模糊问题，我将其拆解为5个子问题：活动吸引力、流程便利性、后续跟进..."
              outcome="通过逐一击破，最终将留资率从12%提升至20%"
              proof="附上问题拆解框架图"
              color="lychee"
            />
            <TraitCard
              icon={<Globe className="w-8 h-8" />}
              title="跨文化敏感度"
              story="托福107、GRE330的成绩背后，是我对中英文语境的深度理解"
              outcome="能够准确把握不同文化背景用户的需求差异"
              proof="附上语言成绩单"
              color="mango"
            />
          </div>
        </motion.section>

        {/* Section 5: 兴趣爱好 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">兴趣爱好</h2>
          <p className="text-center text-foreground/70 mb-12">
            工作之外的我
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <HobbyCard
              image="https://images.unsplash.com/photo-1522163182402-834f871fd851?w=400&q=80"
              title="🧗‍♀️ 攀岩"
              description="抱石V4，在岩壁上学会了拆解问题和寻找路径"
            />
            <HobbyCard
              image="https://images.unsplash.com/photo-1514539079130-25950c84af65?w=400&q=80"
              title="📷 摄影"
              description="用Fujifilm X-T4记录生活的美好瞬间"
            />
            <HobbyCard
              image="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&q=80"
              title="📚 阅读"
              description="喜欢《增长黑客》《用户思维+》等产品类书籍"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}

// 时间线项目组件
function TimelineItem({
  icon,
  title,
  subtitle,
  period,
  highlights,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  highlights: string[];
  color: "honeydew" | "lychee" | "mango";
}) {
  const colorMap = {
    honeydew: "border-honeydew-300 bg-honeydew-50",
    lychee: "border-lychee-300 bg-lychee-50",
    mango: "border-mango-300 bg-mango-50",
  };

  return (
    <motion.div
      className={`p-6 rounded-2xl border-l-4 ${colorMap[color]} glass-morphism`}
      whileHover={{ x: 5 }}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-full bg-white/80`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-foreground/70 mb-2">{subtitle}</p>
          <p className="text-sm text-foreground/60 mb-4">📅 {period}</p>
          <ul className="space-y-2">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-honeydew-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// 特质卡片组件
function TraitCard({
  icon,
  title,
  story,
  outcome,
  proof,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  story: string;
  outcome: string;
  proof: string;
  color: "honeydew" | "lychee" | "mango";
}) {
  const colorMap = {
    honeydew: "bg-honeydew-100 text-honeydew-500",
    lychee: "bg-lychee-100 text-lychee-500",
    mango: "bg-mango-100 text-mango-500",
  };

  return (
    <motion.div
      className="p-6 glass-morphism rounded-2xl hover:shadow-soft-lg transition-all"
      whileHover={{ y: -5 }}
    >
      <div className={`w-16 h-16 rounded-full ${colorMap[color]} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div className="space-y-3 text-sm">
        <div>
          <div className="font-semibold text-foreground/70 mb-1">📖 故事</div>
          <p className="text-foreground/80">{story}</p>
        </div>
        <div>
          <div className="font-semibold text-foreground/70 mb-1">✨ 成果</div>
          <p className="text-foreground/80">{outcome}</p>
        </div>
        <div>
          <div className="font-semibold text-foreground/70 mb-1">📎 佐证</div>
          <p className="text-xs text-foreground/60">{proof}</p>
        </div>
      </div>
    </motion.div>
  );
}

// 爱好卡片组件
function HobbyCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-sm text-white/90">{description}</p>
      </div>
    </motion.div>
  );
}
