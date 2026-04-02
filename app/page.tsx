"use client";

import { ClimbingRoute } from "@/components/climbing-route";
import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";
import { FilmRollGallery } from "@/components/film-roll-gallery";
import { motion } from "framer-motion";
import { ArrowDown, Download, FileText, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <section className="h-screen flex flex-col items-center justify-center relative">
        <CircularRevealHeading
          items={[
            {
              text: "USER INSIGHT",
              image:
                "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80",
            },
            {
              text: "DATA DRIVEN",
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            },
            {
              text: "CREATIVE",
              image:
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            },
            {
              text: "CLIMBING",
              image:
                "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
            },
          ]}
          centerText={
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">张紫茹</h1>
              <p className="text-sm text-muted-foreground">
                数据驱动 · 创意传播
              </p>
            </div>
          }
          size="lg"
        />

        <motion.div
          className="flex gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/cases"
            className="px-6 py-3 bg-honeydew-200 hover:bg-honeydew-300 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            查看作品集
          </Link>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-lychee-200 hover:bg-lychee-300 rounded-lg font-semibold transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            下载简历
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-foreground/40" />
        </motion.div>
      </section>

      <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-white to-honeydew-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-honeydew-400 to-lychee-400 bg-clip-text text-transparent">
                关于我
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
                我是张紫茹，中传广告学在读
                <br />
                在字节跳动飞书做To B营销
                <br />
                <span className="font-semibold text-honeydew-500">
                  在营销与产品的交界处，用数据讲故事
                </span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "用户洞察",
                  description: "11组深度访谈，2000+条真实数据分析",
                },
                {
                  icon: "📊",
                  title: "数据驱动",
                  description: "搭建CRM系统，输出12+份洞察报告",
                },
                {
                  icon: "💡",
                  title: "创新能力",
                  description: "设计差异化方案，获课程最高评级",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-morphism rounded-2xl p-8 text-center hover:shadow-soft-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-20">
        <ClimbingRoute />
      </section>

      <section className="py-20 bg-gradient-to-b from-honeydew-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "KDM覆盖" },
              { number: "35%", label: "效率提升" },
              { number: "20%", label: "留资率" },
              { number: "2", label: "A类项目" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-morphism rounded-2xl p-8"
              >
                <div className="text-4xl font-bold text-honeydew-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">联系我</h2>
          <p className="text-foreground/70 mb-8">
            欢迎讨论市场营销、产品运营、数据分析相关话题
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:3459613530@qq.com"
              className="px-8 py-4 bg-honeydew-200 hover:bg-honeydew-300 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              3459613530@qq.com
            </a>
            <a
              href="tel:15810629707"
              className="px-8 py-4 bg-lychee-200 hover:bg-lychee-300 rounded-lg font-semibold transition-colors"
            >
              📱 15810629707
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-honeydew-200/30">
        <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
          <p>© 2026 张紫茹 · 用 Next.js + Framer Motion 构建</p>
          <p className="mt-2">数据驱动 · 创意传播 · 高效执行</p>
        </div>
      </footer>
    </main>
  );
}

