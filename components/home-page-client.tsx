"use client";

import { CareerTrajectory } from "@/components/career-trajectory";
import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";
import { GlowCard } from "@/components/ui/spotlight-card";
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
    <main className="min-h-screen w-full bg-editorial-canvas">
      <section className="h-screen flex flex-col items-center justify-center relative px-4">
        <CircularRevealHeading
          items={content.heroSlides}
          centerText={
            <div className="text-center">
              <div className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#A8A5A0]">
                Portfolio
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight mt-1.5 leading-tight text-[#E8E4DF]">
                {content.heroName}
              </h1>
              <p className="text-[11px] sm:text-xs mt-2 leading-snug text-[#B8B3AC] font-normal">
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
                className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full border border-editorial-title/10 bg-white/80 text-editorial-body font-medium tracking-wide"
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
              className="px-6 py-3 bg-editorial-title text-white rounded-lg font-medium transition-opacity hover:opacity-90 flex items-center justify-center gap-2 shadow-soft"
            >
              <FileText className="w-4 h-4 shrink-0" />
              查看代表项目
            </Link>
            <a
              href={resumeHref}
              download
              className="px-6 py-3 bg-editorial-card border border-editorial-title/12 rounded-lg font-medium transition-colors hover:border-editorial-accent/40 flex items-center justify-center gap-2 text-editorial-title"
            >
              <Download className="w-4 h-4 shrink-0" />
              {resumeLabel}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-editorial-muted">
            <Link
              href="#about"
              className="inline-flex items-center gap-1.5 hover:text-editorial-accent transition-colors"
            >
              <UserRound className="w-3.5 h-3.5" />
              了解我
            </Link>
            <span className="text-editorial-muted/40 hidden sm:inline" aria-hidden>
              ·
            </span>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 hover:text-editorial-accent transition-colors"
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
          <ArrowDown className="w-6 h-6 text-editorial-muted" />
        </motion.div>
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
        id="stats"
        className="py-16 md:py-20 scroll-mt-20 border-t border-editorial-title/[0.06]"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-[11px] font-medium text-editorial-muted uppercase tracking-[0.2em] mb-3">
              Evidence
            </p>
            <h2 className="text-center text-2xl sm:text-3xl font-semibold text-editorial-title mb-10 tracking-tight">
              用数字建立信任
            </h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {content.stats.map((stat, i) => (
                <motion.div
                  key={`${stat.label}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group border border-editorial-title/10 bg-editorial-card rounded-lg px-4 py-5 sm:px-5 sm:py-6 transition-colors hover:border-editorial-accent/35 hover:bg-white hover:shadow-soft"
                >
                  <div className="text-2xl sm:text-3xl font-semibold text-editorial-title tabular-nums tracking-tight leading-none mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-editorial-muted uppercase tracking-wider mb-1.5">
                    {stat.label}
                  </div>
                  {stat.context && (
                    <div className="text-[11px] sm:text-xs text-editorial-body leading-snug line-clamp-3">
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
