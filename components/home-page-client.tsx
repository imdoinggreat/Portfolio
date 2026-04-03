"use client";

import { CareerTrajectory } from "@/components/career-trajectory";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GlowCard } from "@/components/ui/spotlight-card";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import type { HomeContent } from "@/lib/sanity/types";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  FileText,
  Github,
  Mail,
  MessageCircle,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type HomePageClientProps = {
  content: HomeContent;
};

export function HomePageClient({ content }: HomePageClientProps) {
  const resumeHref = content.resumeUrl;
  const resumeLabel = content.resumeButtonLabel;

  return (
    <main className="min-h-screen w-full bg-editorial-canvas">
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center relative px-6 sm:px-10 overflow-hidden">
        {/* Radial gradient background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto py-24 flex flex-col gap-10">

          {/* ── Greeting text ── */}
          <h1
            className="font-semibold text-editorial-title tracking-tight leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.03}
              staggerFrom="first"
              transition={{ type: "spring", stiffness: 200, damping: 21 }}
              containerClassName="block"
            >
              {"嗨👋你好呀"}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.03}
              staggerFrom="last"
              reverse
              transition={{ type: "spring", stiffness: 200, damping: 21, delay: 0.4 }}
              containerClassName="block"
            >
              {"我是张紫茹"}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.03}
              staggerFrom="center"
              transition={{ type: "spring", stiffness: 200, damping: 21, delay: 0.9 }}
              containerClassName="block"
            >
              {"🌤️ 很高兴认识你！"}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.025}
              staggerFrom="first"
              transition={{ type: "spring", stiffness: 200, damping: 21, delay: 1.4 }}
              containerClassName="block"
            >
              {"希望你可以通过这个网站"}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.03}
              staggerFrom="last"
              reverse
              transition={{ type: "spring", stiffness: 200, damping: 21, delay: 1.9 }}
              containerClassName="block"
            >
              {"😊 多了解我一点"}
            </VerticalCutReveal>
          </h1>

          {/* ── CTA buttons ── */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 max-w-md"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            <Link
              href="/cases"
              className="flex-1 py-3 px-5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md text-white"
              style={{
                background: "linear-gradient(135deg, #1E2430 0%, #2d3444 100%)",
                boxShadow: "0 2px 12px rgba(30,36,48,0.18)",
              }}
            >
              <FileText className="w-4 h-4 shrink-0" />
              查看代表项目
            </Link>
            <a
              href={resumeHref}
              download
              className="flex-1 py-3 px-5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-soft text-editorial-title"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 100%)",
                border: "1px solid rgba(99,102,241,0.25)",
                boxShadow: "0 2px 8px rgba(99,102,241,0.1)",
              }}
            >
              <Download className="w-4 h-4 shrink-0" />
              {resumeLabel}
            </a>
          </motion.div>

          {/* Sub-links */}
          <motion.div
            className="flex items-center gap-5 text-sm text-editorial-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0 }}
          >
            <Link
              href="#about"
              className="inline-flex items-center gap-1.5 hover:text-editorial-accent transition-colors"
            >
              <UserRound className="w-3.5 h-3.5" />
              了解我
            </Link>
            <span className="text-editorial-muted/30" aria-hidden>·</span>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 hover:text-editorial-accent transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              联系我
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-editorial-muted/50" />
        </motion.div>
      </section>

      {/* ── Showcase Scroll Section ── */}
      <section className="overflow-hidden border-t border-editorial-title/[0.06]">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center gap-3">
              <p className="text-[11px] tracking-[0.25em] uppercase text-editorial-muted font-medium">
                Featured Work · 代表项目
              </p>
              <h2
                className="font-semibold text-editorial-title tracking-tight leading-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
              >
                用数据讲好每一个故事
              </h2>
              <p className="text-editorial-body text-base max-w-md">
                从洞察到落地，从策略到转化
              </p>
              <Link
                href="/cases"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-editorial-accent hover:underline"
              >
                浏览完整作品集
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          }
        >
          <Image
            src={content.heroShowcaseImage}
            alt="作品集展示"
            width={1400}
            height={720}
            className="mx-auto rounded-2xl object-cover h-full object-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      <section
        id="projects"
        className="min-h-screen py-12 md:py-20 scroll-mt-20 border-t border-editorial-title/[0.06]"
        aria-labelledby="projects-heading"
      >
        <h2 id="projects-heading" className="sr-only">
          职业路径与代表项目
        </h2>
        <CareerTrajectory />
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center py-16 md:py-20 scroll-mt-20 border-t border-editorial-title/[0.06]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14 md:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold text-editorial-title mb-6 tracking-tight">
                {content.aboutTitle}
              </h2>
              <p className="text-base sm:text-lg text-editorial-body leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
                {content.aboutBody}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {content.highlights.map((item, i) => (
                <motion.div
                  key={`${item.title}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlowCard
                    glowColor="accent"
                    customSize
                    className="w-full min-h-[240px] text-center border border-editorial-title/10 bg-editorial-card shadow-none hover:shadow-soft"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-editorial-title">
                      {item.title}
                    </h3>
                    <p className="text-editorial-body text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── English Proficiency ── */}
      <section
        id="english"
        className="py-16 md:py-20 scroll-mt-20 border-t border-editorial-title/[0.06]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-[11px] font-medium text-editorial-muted uppercase tracking-[0.2em] mb-3">
              Language Proficiency
            </p>
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-editorial-title mb-10 tracking-tight">
              英语能力
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  score: "107",
                  exam: "TOEFL",
                  sub: "R27 · L30 · S23 · W27",
                  note: "达到顶尖项目申请门槛",
                },
                {
                  score: "330",
                  exam: "GRE",
                  sub: "Verbal 160 + Quant 170",
                  note: "全球前 10% 水平",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.exam}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden border border-editorial-title/10 bg-editorial-card rounded-2xl px-6 py-7 sm:px-8 sm:py-8 hover:border-editorial-accent/30 hover:bg-white hover:shadow-soft transition-all duration-300"
                >
                  {/* Subtle gradient orb */}
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(158,158,244,0.8) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-editorial-accent mb-1">
                      {item.exam}
                    </p>
                    <p
                      className="font-semibold text-editorial-title tabular-nums leading-none mb-3"
                      style={{ fontSize: "clamp(2.8rem, 7vw, 3.8rem)" }}
                    >
                      {item.score}
                    </p>
                    <p className="text-xs font-mono text-editorial-muted mb-2">{item.sub}</p>
                    <p className="text-[11px] text-editorial-body leading-snug">{item.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-20 scroll-mt-20 border-t border-editorial-title/[0.06]">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <h2 className="text-3xl font-semibold text-editorial-title mb-4">
            {content.contactTitle}
          </h2>
          <p className="text-editorial-body mb-8 leading-relaxed">
            {content.contactBlurb}
          </p>
          <div className="flex flex-col items-stretch gap-4">
            <a
              href={`mailto:${content.contactEmail}`}
              className="px-8 py-4 bg-editorial-title text-white rounded-lg font-medium transition-opacity hover:opacity-90 inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              发送邮件
            </a>
            <a
              href={resumeHref}
              download
              className="px-8 py-3 border border-editorial-title/15 rounded-lg font-medium transition-colors hover:border-editorial-accent/40 hover:bg-white inline-flex items-center justify-center gap-2 text-editorial-title"
            >
              <Download className="w-4 h-4" />
              {resumeLabel}
            </a>

            {/* Social links */}
            <div className="flex items-center justify-center gap-3 pt-1">
              {/* GitHub */}
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-editorial-title/12 bg-editorial-card text-editorial-body hover:border-editorial-title/30 hover:bg-white hover:text-editorial-title transition-all duration-200 text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              {/* 小红书 */}
              <a
                href="https://www.xiaohongshu.com/user/profile/YOUR_XIAOHONGSHU_ID"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="小红书"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-editorial-title/12 bg-editorial-card text-editorial-body hover:border-[#FF2442]/30 hover:bg-white hover:text-[#FF2442] transition-all duration-200 text-sm font-medium"
              >
                {/* 小红书 icon */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5v-9l7 4.5-7 4.5z" />
                </svg>
                小红书
              </a>

              {/* WeChat */}
              <button
                type="button"
                aria-label="微信"
                title="微信 ID: YOUR_WECHAT_ID"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-editorial-title/12 bg-editorial-card text-editorial-body hover:border-[#07C160]/30 hover:bg-white hover:text-[#07C160] transition-all duration-200 text-sm font-medium"
                onClick={() => {
                  navigator.clipboard?.writeText("YOUR_WECHAT_ID").catch(() => {});
                  alert("微信 ID 已复制：YOUR_WECHAT_ID");
                }}
              >
                <MessageCircle className="w-4 h-4" />
                微信
              </button>
            </div>

            <p className="text-xs text-editorial-muted leading-relaxed">
              手机与更多联系方式见简历 PDF，避免首页信息过度裸露。
            </p>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-editorial-title/[0.06]">
        <div className="container mx-auto px-4 text-center text-sm text-editorial-muted space-y-3 max-w-2xl">
          <p className="text-editorial-body leading-relaxed">
            {content.footerLine2}
          </p>
          <p>{content.footerLine1}</p>
        </div>
      </footer>
    </main>
  );
}
