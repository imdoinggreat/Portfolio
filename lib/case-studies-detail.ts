export type CaseStudyDetail = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  role: string;
  oneLiner: string;
  background: string;
  myRole: string;
  process: string;
  results: string;
  reflection: string;
};

export const CASE_STUDY_SLUGS = [
  "feishu-b2b",
  "boss-gamification",
  "meitu-yunjian",
  "qianxiang-brand",
] as const;

export type CaseStudySlug = (typeof CASE_STUDY_SLUGS)[number];

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  "feishu-b2b": {
    slug: "feishu-b2b",
    title: "字节跳动",
    subtitle: "飞书商业化 · 顶级商学院 To B 营销",
    period: "Sep–Dec 2025",
    role: "To B 营销 / 活动策划与数据复盘",
    oneLiner:
      "面向商学院决策人群，用 CRM + KDM 策略与差异化活动设计，提升触达效率与留资转化。",
    background:
      "飞书在商学院场景需要持续、高质量地与关键决策人（KDM）建立信任与试用意愿。挑战在于：人群分层复杂、触达渠道多元、活动效果需要可量化复盘，而不是一次性曝光。",
    myRole:
      "独立或主导部分模块：KDM 分层与触达策略、活动创意与执行协同、活动后数据整理与洞察输出；与团队共同搭建/维护 CRM 使用方式，让「谁被触达、反馈如何、下一步动作」可追溯。",
    process:
      "先用业务目标倒推指标（覆盖、参与、留资、MQL 等），再设计活动机制与物料；执行中同步沉淀名单与互动记录；结束后用表格与简短报告复盘：哪些分层响应更好、哪类话术/场景更有效，并反馈到下一轮触达。",
    results:
      "量化：500+ KDM 覆盖、留资率提升至约 20%、单场活动可产出数十条 MQL；流程侧：CRM 使用推动团队效率提升约 35%、赢单周期缩短等（与团队目标对齐后口径一致呈现）。定性：形成多份可复用的洞察与活动模板。",
    reflection:
      "若重来，会更早把「分层假设」写成可验证的实验表（样本量、对照组、观测窗口），减少凭感觉迭代；对外传播与对内复盘用同一套指标语言，降低协作摩擦。",
  },
  "boss-gamification": {
    slug: "boss-gamification",
    title: "BOSS直聘",
    subtitle: "游戏化营销 · 年轻求职者认知纠偏",
    period: "2024",
    role: "用户研究 + 营销全案（课程项目）",
    oneLiner:
      "针对「岗位认知偏差」痛点，用互动机制串联 UGC、线上游戏与线下快闪，提升参与与留资意愿。",
    background:
      "年轻用户对部分岗位存在想象与真实工作的落差，品牌需要一种低门槛、可分享的方式，让用户「体验式」理解职位，而不是单向硬广。",
    myRole:
      "负责用户侧证据链：深度访谈与应用评论挖掘，提炼核心痛点与场景；在此基础上输出完整传播路径（UGC、线上游戏化、线下快闪）的故事线与关键触点。",
    process:
      "从 6 组深访与 1000+ 条评论中归纳主题，形成人物与场景；再反推游戏化机制与传播节奏；方案阶段反复检查「每个环节是否对应一个可感知的行为改变」。",
    results:
      "课程维度获优秀评级与年级答辩二等奖；方案层面形成可演示的全链路故事，便于向业务方说明「为什么这样设计」。",
    reflection:
      "若落地到真实业务，会补充渠道投放与转化漏斗的基线数据，把「创意强度」与「可买量性」放在同一张表上评估。",
  },
  "meitu-yunjian": {
    slug: "meitu-yunjian",
    title: "美图云肩",
    subtitle: "国潮产品设计 · 文化叙事的产品化",
    period: "2024",
    role: "用户洞察 + 产品概念与表达（课程项目）",
    oneLiner:
      "从文化洞察到产品叙事，把非遗云肩做成可传播、可体验的功能（拼图 + AR）。",
    background:
      "美图需要既有美感又有文化厚度的功能点，让用户愿意拍、愿意发、愿意讲「为什么有趣」。云肩作为非遗元素，既要尊重文化语境，又要避免刻板符号堆砌。",
    myRole:
      "完成多组深访与社交媒体内容分析，提炼用户动机与表达习惯；提出九宫格拼图与 AR 穿戴两大功能方向，并串联科普与分享路径。",
    process:
      "先界定「用户在什么时刻会想用云肩元素」再设计功能，而不是先画图；用微博等内容数据辅助验证话题点；与视觉/交互叙事对齐，保证故事从开机到分享闭环。",
    results:
      "课程 A 类评级、班级答辩前 10%；方案上形成从洞察到原型说明的完整链条，便于评审理解取舍。",
    reflection:
      "若再做一版，会增加小规模可用性测试（任务完成率、分享意愿问卷），用更细颗粒度验证 AR 与拼图哪条路径传播效率更高。",
  },
  "qianxiang-brand": {
    slug: "qianxiang-brand",
    title: "乾象投资",
    subtitle: "品牌公关 · 大型年会与舆情日常",
    period: "Jan–Apr 2025",
    role: "品牌公关实习生 · 策划与执行支持",
    oneLiner:
      "在百万级预算年会中参与主题与体验设计，并独立负责舆情日报周报，支撑品牌稳健表达。",
    background:
      "金融品牌对外表达敏感度高，年会既是文化凝聚场景，也是品牌形象窗口；日常需要稳定监测舆情与摘要信息，供内部快速决策。",
    myRole:
      "年会侧参与主题与游戏化环节策划，协调供应商与现场执行链条中的信息与节奏；舆情侧独立输出日报/周报，标注敏感点与追踪建议。",
    process:
      "年会前以员工体验与品牌调性双目标对齐供应商方案；执行中把风险点（流程、话术、影像）列清单逐项对齐。舆情工作固定结构：事实摘要—情绪倾向—是否需要跟进。",
    results:
      "员工满意度约 90%；品牌宣传视频按期上线；舆情侧形成稳定输出节奏，减少信息遗漏。",
    reflection:
      "大型项目里「对齐记录」和「决策日志」同样重要；若重来会更早把关键决策人拉进同一文档，减少口头传递造成的版本漂移。",
  },
};

export function getCaseStudyDetail(slug: string): CaseStudyDetail | null {
  return caseStudyDetails[slug] ?? null;
}
