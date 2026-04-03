"use client";

import { ClimbingRoute } from "@/components/climbing-route";
import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";
import {
  GlowCard,
  type GlowColor,
} from "@/components/ui/spotlight-card";
import type { HomeContent } from "@/lib/sanity/types";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  FileText,
  Mail,
  UserRound,
} from "lucide-react";
import Link from "next/link";

type HomePageClientProps = {
  content: HomeContent;
};

export function HomePageClient({ content }: HomePageClientProps) {
  const resumeHref = content.resumeUrl;
  const resumeLabel = content.resumeButtonLabel;

  return (
    <main className="min-h-screen w-full">
      <section className="h-screen flex flex-col items-center justify-center relative px-4">
        <CircularRevealHeading
          items={content.heroSlides}
          centerText={
            <div className="text-center text-[#f5e6d8]">
              <div className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase opacity-80">
                Portfolio
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-black tracking-tight mt-1 leading-tight">
                {content.heroName}
              </h1>
              <p className="text-[11px] sm:text-xs mt-2 opacity-90 leading-snug font-medium">
                {content.heroTagline}
              </p>
            </div>
          }
          size="md"
        />

        {content.heroKeywordChips.length > 0 && (
          <motion.div
            className="flex flex-wrap justify-center gap-2 mt-6 max-w-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            aria-label="职业关键词"
          >
            {content.heroKeywordChips.map((chip) => (
              <span
                key={chip}
                className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full border border-honeydew-200/80 bg-white/60 text-foreground/75 font-medium tracking-wide"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        )}

        <motion.div
          className="flex flex-col items-center gap-4 mt-10 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Link
              href="#projects"
              className="px-6 py-3 bg-honeydew-200 hover:bg-honeydew-300 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4 shrink-0" />
              查看代表项目
            </Link>
            <a
              href={resumeHref}
              download
              className="px-6 py-3 bg-lychee-200/90 hover:bg-lychee-300 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 shrink-0" />
              {resumeLabel}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-foreground/55">
            <Link
              href="#about"
              className="inline-flex items-center gap-1.5 hover:text-honeydew-600 transition-colors"
            >
              <UserRound className="w-3.5 h-3.5" />
              了解我
            </Link>
            <span className="text-foreground/25 hidden sm:inline" aria-hidden>
              ·
            </span>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 hover:text-honeydew-600 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              联系我
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-foreground/40" />
        </motion.div>
      </section>

      <section
        id="projects"
        className="min-h-screen py-20 scroll-mt-20"
        aria-labelledby="projects-heading"
      >
        <h2 id="projects-heading" className="sr-only">
          精选项目 · 攀登路线
        </h2>
        <ClimbingRoute />
      </section>

      <section
        id="stats"
        className="py-20 bg-gradient-to-b from-honeydew-50/30 to-white scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-sm font-medium text-foreground/50 uppercase tracking-widest mb-4">
              成果与证据
            </p>
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-foreground mb-12">
              用数字建立信任，详情见代表项目与案例页
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {content.stats.map((stat, i) => (
                <motion.div
                  key={`${stat.label}-${i}`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-morphism rounded-2xl p-8 text-left sm:text-center"
                >
                  <div className="text-4xl font-bold text-honeydew-500 mb-2 tabular-nums">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-foreground/85 mb-1">
                    {stat.label}
                  </div>
                  {stat.context && (
                    <div className="text-xs text-foreground/55 leading-relaxed">
                      {stat.context}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center py-20 bg-gradient-to-b from-white to-honeydew-50/30 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-honeydew-400 to-lychee-400 bg-clip-text text-transparent">
                {content.aboutTitle}
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
                {content.aboutBody}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {content.highlights.map((item, i) => {
                const spotlightPalette: GlowColor[] = [
                  "honeydew",
                  "sage",
                  "stone",
                ];
                return (
                  <motion.div
                    key={`${item.title}-${i}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <GlowCard
                      glowColor={spotlightPalette[i % spotlightPalette.length]}
                      customSize
                      className="w-full min-h-[260px] text-center border-white/40 shadow-soft"
                    >
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </GlowCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <h2 className="text-4xl font-bold mb-6">{content.contactTitle}</h2>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            {content.contactBlurb}
          </p>
          <div className="flex flex-col items-stretch gap-4">
            <a
              href={`mailto:${content.contactEmail}`}
              className="px-8 py-4 bg-honeydew-200 hover:bg-honeydew-300 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              发送邮件
            </a>
            <a
              href={resumeHref}
              download
              className="px-8 py-3 border-2 border-honeydew-200 hover:bg-honeydew-50 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2 text-foreground/80"
            >
              <Download className="w-4 h-4" />
              {resumeLabel}
            </a>
            <p className="text-xs text-foreground/50 leading-relaxed">
              手机与更多联系方式见简历 PDF，避免首页信息过度裸露。
            </p>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-honeydew-200/30">
        <div className="container mx-auto px-4 text-center text-sm text-foreground/60 space-y-3 max-w-2xl">
          <p className="text-foreground/70 leading-relaxed">
            {content.footerLine2}
          </p>
          <p>{content.footerLine1}</p>
        </div>
      </footer>
    </main>
  );
}
