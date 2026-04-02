"use client";

import { HeroSection } from "@/components/hero-section";
import { ClimbingRoute } from "@/components/climbing-route";
import { SkillsRadar } from "@/components/skills-radar";
import { motion } from "framer-motion";
import { Mail, Download, Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";

export default function OptimizedHomePage() {
  return (
    <main className="min-h-screen w-full">
      
      {/* Hero Section - 3秒抓眼球 */}
      <section id="hero" className="min-h-screen">
        <HeroSection />
      </section>

      {/* About Section - 快速了解 */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-honeydew-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">快速了解我</h2>
            <div className="text-lg text-foreground/80 leading-relaxed space-y-4 mb-8">
              <p>
                我是<strong>张紫茹</strong>，中国传媒大学广告学在读研究生。
              </p>
              <p>
                在字节跳动飞书，我负责顶级商学院To B营销，通过<strong>数据驱动的活动策划</strong>
                覆盖500+ KDM，留资率提升至20%。
              </p>
              <p>
                我擅长将<strong>用户洞察</strong>（11组深度访谈）、<strong>数据分析</strong>
                （搭建CRM系统）和<strong>创新能力</strong>（A类项目评级）结合，
                用系统化思维解决复杂问题。
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-honeydew-200 hover:bg-honeydew-300 rounded-lg font-semibold transition-colors"
            >
              <FileText className="w-5 h-5" />
              查看完整简介
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 攀岩路线 - 30秒建立印象 */}
      <section id="projects" className="py-20">
        <ClimbingRoute />
      </section>

      {/* 技能图谱 - 3分钟深度了解 */}
      <section id="skills" className="py-20 bg-gradient-to-b from-honeydew-50/30 to-white">
        <div className="container mx-auto px-4">
          <SkillsRadar />
        </div>
      </section>

      {/* 数据统计 - 量化成果 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              核心数据
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { 
                  number: "500+", 
                  label: "KDM覆盖",
                  desc: "顶级商学院企业家触达"
                },
                { 
                  number: "35%", 
                  label: "效率提升",
                  desc: "CRM系统优化成果"
                },
                { 
                  number: "20%", 
                  label: "留资率",
                  desc: "活动留资转化率"
                },
                { 
                  number: "A类×2", 
                  label: "项目评级",
                  desc: "美图云肩 + BOSS直聘"
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="glass-morphism rounded-2xl p-8 hover:shadow-soft-lg transition-all"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-5xl font-bold text-honeydew-500 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-foreground/60">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 博客预览 - 思考深度 */}
      <section className="py-20 bg-gradient-to-b from-white to-lychee-50/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">最新思考</h2>
            <p className="text-foreground/70">
              记录我的观察、方法和成长
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "我用了10个AI产品后的发现",
                category: "行业观察",
                date: "2025.03.15",
              },
              {
                title: "我的产品需求分析框架",
                category: "方法论",
                date: "2025.03.08",
              },
              {
                title: "从0到1搭建CRM系统的经验",
                category: "项目复盘",
                date: "2025.02.28",
              },
            ].map((post, i) => (
              <motion.div
                key={i}
                className="p-6 glass-morphism rounded-xl hover:shadow-soft transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-sm text-honeydew-500 font-medium mb-2">
                  {post.category}
                </div>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <div className="text-sm text-foreground/60">{post.date}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-lychee-200 hover:bg-lychee-300 rounded-lg font-semibold transition-colors"
            >
              查看全部文章
            </Link>
          </div>
        </div>
      </section>

      {/* 联系方式 - 快速行动 */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">让我们聊聊！</h2>
            <p className="text-xl text-foreground/70 mb-12">
              欢迎讨论市场营销、产品运营、数据分析相关话题
            </p>

            {/* 联系方式卡片 */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.a
                href="mailto:3459613530@qq.com"
                className="p-8 glass-morphism rounded-2xl hover:shadow-soft-lg transition-all group"
                whileHover={{ y: -5 }}
              >
                <Mail className="w-12 h-12 mx-auto mb-4 text-honeydew-500" />
                <div className="font-semibold mb-2">邮箱</div>
                <div className="text-foreground/70 group-hover:text-honeydew-500 transition-colors">
                  3459613530@qq.com
                </div>
              </motion.a>

              <motion.a
                href="tel:15810629707"
                className="p-8 glass-morphism rounded-2xl hover:shadow-soft-lg transition-all group"
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4">📱</div>
                <div className="font-semibold mb-2">电话</div>
                <div className="text-foreground/70 group-hover:text-honeydew-500 transition-colors">
                  15810629707
                </div>
              </motion.a>
            </div>

            {/* 社交媒体 */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="#"
                className="p-4 bg-white hover:bg-honeydew-100 rounded-full transition-colors shadow-soft"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-4 bg-white hover:bg-honeydew-100 rounded-full transition-colors shadow-soft"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

            {/* 下载简历 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 bg-honeydew-200 hover:bg-honeydew-300 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-soft"
              >
                <Download className="w-5 h-5" />
                下载简历 PDF
              </a>
              <a
                href="/portfolio.pdf"
                download
                className="px-8 py-4 bg-lychee-200 hover:bg-lychee-300 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-soft"
              >
                <Download className="w-5 h-5" />
                下载作品集 PDF
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-honeydew-200/30 bg-honeydew-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-foreground/60 space-y-2">
            <p>© 2026 张紫茹 · 用 Next.js + Framer Motion 构建</p>
            <p>数据驱动 · 创意传播 · 高效执行</p>
            <p className="text-xs">
              🎯 正在寻找市场营销/产品运营/战略分析相关实习机会
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
