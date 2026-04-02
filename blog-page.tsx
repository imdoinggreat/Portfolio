"use client";

import { motion } from "framer-motion";
import { Clock, Tag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: "行业观察" | "方法论" | "项目复盘" | "读书笔记";
  date: string;
  readTime: number; // 分钟
  coverImage: string;
  excerpt: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "ai-products-observation",
    title: "我用了10个AI产品后的发现",
    subtitle: "从用户体验角度看AI产品的3个共性问题",
    category: "行业观察",
    date: "2025.03.15",
    readTime: 8,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    excerpt: "在体验了ChatGPT、文心一言、通义千问等10款AI产品后，我发现了一个有趣的现象：技术能力很强，但用户体验普遍存在3个共性问题...",
    tags: ["AI产品", "用户体验", "产品观察"],
  },
  {
    id: "product-analysis-framework",
    title: "我的产品需求分析框架",
    subtitle: "5W2H + KANO模型的实战应用",
    category: "方法论",
    date: "2025.03.08",
    readTime: 10,
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    excerpt: "在美图云肩项目中，我通过5组深度访谈 + 564条数据分析，形成了自己的需求分析框架。这套方法帮助我准确识别用户痛点...",
    tags: ["产品方法", "需求分析", "KANO模型"],
  },
  {
    id: "feishu-crm-review",
    title: "从0到1搭建CRM系统的经验",
    subtitle: "7天速成，效率提升35%的背后",
    category: "项目复盘",
    date: "2025.02.28",
    readTime: 12,
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    excerpt: "在飞书实习期间，我主导搭建了部门首个CRM系统。这个项目让我深刻理解到：解决问题需要从流程和工具层面入手，而不仅仅是执行层面...",
    tags: ["CRM系统", "流程优化", "项目复盘"],
  },
  {
    id: "ab-test-learnings",
    title: "从失败的AB测试中学到的3件事",
    subtitle: "数据会说谎，但方法不会",
    category: "项目复盘",
    date: "2025.02.20",
    readTime: 7,
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    excerpt: "在第一次做AB测试时，我犯了3个新手常见的错误：样本量不足、对照组设计不当、没有考虑辛普森悖论。这次失败让我意识到...",
    tags: ["AB测试", "数据分析", "经验教训"],
  },
  {
    id: "growth-hacker-notes",
    title: "《增长黑客》读后感",
    subtitle: "如何应用AARRR模型到实际工作",
    category: "读书笔记",
    date: "2025.02.10",
    readTime: 9,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    excerpt: "读完《增长黑客》后，我尝试将AARRR模型应用到飞书的活动策划中。发现最大的收获不是模型本身，而是数据驱动的思维方式...",
    tags: ["增长黑客", "AARRR", "用户增长"],
  },
];

const categories = ["全部", "行业观察", "方法论", "项目复盘", "读书笔记"] as const;

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("全部");

  const filteredPosts = activeCategory === "全部"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-honeydew-50/30 to-lychee-50/20 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4">博客与思考</h1>
          <p className="text-xl text-foreground/70">
            记录我的观察、方法和成长
          </p>
        </motion.div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all
                ${
                  activeCategory === cat
                    ? "bg-honeydew-200 shadow-soft scale-105"
                    : "bg-white/50 hover:bg-honeydew-100"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 博客列表 */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* 说明文字 */}
        <motion.div
          className="text-center mt-16 p-8 glass-morphism rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/70 mb-2">
            📝 持续更新中，每月2-4篇
          </p>
          <p className="text-sm text-foreground/60">
            展示思考深度 · 证明持续学习 · 建立专业形象
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// 博客卡片组件
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const categoryColors = {
    "行业观察": "bg-honeydew-100 text-honeydew-500",
    "方法论": "bg-lychee-100 text-lychee-500",
    "项目复盘": "bg-mango-100 text-mango-500",
    "读书笔记": "bg-purple-100 text-purple-500",
  };

  return (
    <motion.article
      className="group glass-morphism rounded-2xl overflow-hidden hover:shadow-soft-lg transition-all cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${post.id}`}>
        {/* 封面图 */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[post.category]}`}>
              {post.category}
            </span>
          </div>
        </div>

        {/* 内容 */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-honeydew-500 transition-colors">
            {post.title}
          </h3>
          <p className="text-foreground/70 mb-4">{post.subtitle}</p>
          
          <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Meta信息 */}
          <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
            <span>📅 {post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}分钟
            </span>
          </div>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-foreground/5 text-foreground/70 rounded text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* 阅读更多 */}
          <div className="flex items-center gap-2 text-honeydew-500 font-semibold group-hover:gap-3 transition-all">
            阅读全文
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
