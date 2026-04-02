import type { CaseStudyFrame, HomeContent, PhotographyItem } from "./types";

export const defaultHomeContent: HomeContent = {
  heroName: "张紫茹",
  heroTagline: "数据驱动 · 创意传播",
  heroKeywordChips: [
    "User Insight",
    "B2B Marketing",
    "Data Analysis",
    "Product Thinking",
  ],
  heroSlides: [
    {
      text: "USER INSIGHT",
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80",
    },
    {
      text: "B2B GROWTH",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      text: "DATA STORY",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      text: "STRATEGY",
      image:
        "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
    },
  ],
  aboutTitle: "关于我",
  aboutBody:
    "市场营销与增长方向，偏 To B 触达与用户转化。\n擅长把访谈与行为数据收成洞察，再落到 CRM、活动链路与内容表达。\n不做「什么都能做」的通才叙事——更常接的是：谁值得触达、怎么触达、如何验证转化。",
  highlights: [
    {
      icon: "🎯",
      title: "用户洞察与定性研究",
      description: "深访、问卷与用户行为归纳，把模糊诉求拆成可验证假设",
    },
    {
      icon: "📊",
      title: "营销策略与转化设计",
      description: "CRM、KDM 分层、活动链路优化，用数据复盘迭代触达",
    },
    {
      icon: "💡",
      title: "内容表达与创意落地",
      description: "传播概念、方案包装与执行协同，让策略能被看见、被理解",
    },
  ],
  stats: [
    {
      number: "500+",
      label: "KDM 覆盖",
      context: "支撑更精准的目标客户触达与分层策略",
    },
    {
      number: "35%",
      label: "效率提升",
      context: "来自 CRM 流程优化与触达方式调整",
    },
    {
      number: "20%",
      label: "留资率",
      context: "关键活动中验证链路具备实际转化",
    },
    {
      number: "2",
      label: "A 类项目",
      context: "参与高优先级项目协作与复盘沉淀",
    },
  ],
  contactTitle: "联系我",
  contactBlurb:
    "欢迎讨论市场营销、产品运营与用户增长；合作前可先看看代表项目与完整简历。",
  contactEmail: "3459613530@qq.com",
  contactPhone: "15810629707",
  resumeUrl: "/resume.pdf",
  resumeButtonLabel: "下载简历（PDF · 中文）",
  footerLine1: "© 2026 张紫茹 · 用 Next.js + Framer Motion 构建",
  footerLine2:
    "用洞察、策略与表达，把想法做成真正有结果的项目。",
};

export const defaultCaseStudies: CaseStudyFrame[] = [
  {
    id: "feishu-1",
    title: "商学院活动策划",
    category: "字节跳动·飞书",
    date: "Sep 2025",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1000&fit=crop",
    description: '顶级商学院"走进字节"系列活动',
    details: ["500+ KDM覆盖", "留资率 20%", "单场 25 条 MQL"],
  },
  {
    id: "feishu-2",
    title: "AI亲子营活动",
    category: "字节跳动·飞书",
    date: "Oct 2025",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1000&fit=crop",
    description: "洞察企业家子女教育诉求的差异化活动",
    details: ["AI Portrait生成", "游戏化体验", "高净值群体建联"],
  },
  {
    id: "meitu-1",
    title: "云肩九宫格设计",
    category: "美图秀秀·云肩项目",
    date: "2024.11",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=1000&fit=crop",
    description: "非遗云肩纹样的年轻化表达",
    details: ["564条微博分析", "5组深度访谈", "课程A类评级"],
  },
  {
    id: "meitu-2",
    title: "AR穿戴滤镜",
    category: "美图秀秀·云肩项目",
    date: "2024.11",
    image:
      "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=800&h=1000&fit=crop",
    description: "虚拟云肩一键穿戴 + 纹样科普",
    details: ["AR技术应用", "体验-分享闭环", "文化传播创新"],
  },
  {
    id: "boss-1",
    title: "职业体验游戏",
    category: "BOSS直聘·游戏化营销",
    date: "2024.05",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=1000&fit=crop",
    description: "分支剧情还原岗位真实工作场景",
    details: ["1000+应用评论", "6组深度访谈", "年级二等奖"],
  },
  {
    id: "qianxiang-1",
    title: "200万年会策划",
    category: "乾象投资·品牌公关",
    date: "Mar 2025",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=1000&fit=crop",
    description: "主题策划 + 供应商统筹 + 现场协调",
    details: ["员工满意度 90%", "多家供应商管理", "全流程执行"],
  },
  {
    id: "climbing-1",
    title: "攀岩时刻",
    category: "个人爱好",
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=1000&fit=crop",
    description: "在岩壁上寻找解决方案的路径",
    details: ["抱石V4", "顶绳5.11a", "坚持与突破"],
  },
  {
    id: "photo-1",
    title: "城市光影",
    category: "摄影作品",
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&h=1000&fit=crop",
    description: "用镜头记录生活的美好瞬间",
    details: ["Fujifilm X-T4", "街拍", "光影捕捉"],
  },
];

export const defaultPhotography: PhotographyItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80",
    alt: "攀岩时刻 - 抱石挑战",
    title: "攀岩",
    description: "在岩壁上寻找解决方案的路径",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&q=80",
    alt: "城市光影 - 街头摄影",
    title: "城市光影",
    description: "用镜头记录生活的美好瞬间",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    alt: "建筑几何",
    title: "建筑",
    description: "线条与光影的交织",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    alt: "音乐现场",
    title: "音乐",
    description: "感受音乐的律动与情感",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    alt: "音乐制作",
    title: "创作",
    description: "用声音表达内心的世界",
  },
];
