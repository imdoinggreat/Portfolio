import type { CaseStudyFrame, HomeContent, PhotographyItem } from "./types";

export const defaultHomeContent: HomeContent = {
  heroName: "张紫茹",
  heroTagline: "数据驱动 · 创意传播",
  heroSlides: [
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
  ],
  aboutTitle: "关于我",
  aboutBody:
    "我是张紫茹，中传广告学在读\n在字节跳动飞书做To B营销\n在营销与产品的交界处，用数据讲故事",
  highlights: [
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
  ],
  stats: [
    { number: "500+", label: "KDM覆盖" },
    { number: "35%", label: "效率提升" },
    { number: "20%", label: "留资率" },
    { number: "2", label: "A类项目" },
  ],
  contactTitle: "联系我",
  contactBlurb: "欢迎讨论市场营销、产品运营、数据分析相关话题",
  contactEmail: "3459613530@qq.com",
  contactPhone: "15810629707",
  resumeUrl: "/resume.pdf",
  footerLine1: "© 2026 张紫茹 · 用 Next.js + Framer Motion 构建",
  footerLine2: "数据驱动 · 创意传播 · 高效执行",
};

export const defaultCaseStudies: CaseStudyFrame[] = [
  {
    id: "feishu-1",
    title: "商学院活动策划",
    category: "字节跳动·飞书",
    date: "2025.09",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1000&fit=crop",
    description: '顶级商学院"走进字节"系列活动',
    details: ["500+ KDM覆盖", "留资率 20%", "单场 25 条 MQL"],
  },
  {
    id: "feishu-2",
    title: "AI亲子营活动",
    category: "字节跳动·飞书",
    date: "2025.10",
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
    date: "2025.03",
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
