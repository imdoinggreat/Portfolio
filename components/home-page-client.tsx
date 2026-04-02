"use client";

import { ClimbingRoute } from "@/components/climbing-route";
import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";
import type { HomeContent } from "@/lib/sanity/types";
import { motion } from "framer-motion";
import { ArrowDown, Download, FileText, Mail } from "lucide-react";
import Link from "next/link";

type HomePageClientProps = {
  content: HomeContent;
};

export function HomePageClient({ content }: HomePageClientProps) {
  const resumeHref = content.resumeUrl;

  return (
    <main className="min-h-screen w-full">
      <section className="h-screen flex flex-col items-center justify-center relative">
        <CircularRevealHeading
          items={content.heroSlides}
          centerText={
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {content.heroName}
              </h1>
              <p className="text-sm text-muted-foreground">
                {content.heroTagline}
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
            href={resumeHref}
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
                {content.aboutTitle}
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
                {content.aboutBody}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {content.highlights.map((item, i) => (
                <motion.div
                  key={`${item.title}-${i}`}
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
            {content.stats.map((stat, i) => (
              <motion.div
                key={`${stat.label}-${i}`}
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
          <h2 className="text-4xl font-bold mb-6">{content.contactTitle}</h2>
          <p className="text-foreground/70 mb-8">{content.contactBlurb}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${content.contactEmail}`}
              className="px-8 py-4 bg-honeydew-200 hover:bg-honeydew-300 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              {content.contactEmail}
            </a>
            <a
              href={`tel:${content.contactPhone.replace(/\s/g, "")}`}
              className="px-8 py-4 bg-lychee-200 hover:bg-lychee-300 rounded-lg font-semibold transition-colors"
            >
              📱 {content.contactPhone}
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-honeydew-200/30">
        <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
          <p>{content.footerLine1}</p>
          <p className="mt-2">{content.footerLine2}</p>
        </div>
      </footer>
    </main>
  );
}
