# 张紫茹个人网站 🎨

**数据驱动 · 创意传播 · 高效执行**

一个独特的个人作品集网站，融合**攀岩路线式导航** + **相机胶卷展示** + **柔性加色系统配色**。

---

## ✨ 核心特色

### 🧗‍♀️ 1. 攀岩路线式职业展示
- 每个经历/项目 = 一个攀岩岩点（hold）
- 用V级难度表示项目复杂度
- 点击岩点查看详细成就
- 路线连线展示成长路径

### 📸 2. 相机胶卷作品集
- 仿真胶片穿孔边框
- 自动播放 + 手动导航
- 卡片式详情展示
- 沉浸式视觉体验

### 🎨 3. 柔性加色系统配色
基于60·30·10法则的配色方案：
- **Honeydew Jelly** (#D5F2E8) - 主冷色 60%
- **Lychee Sorbet** (#FFE9F1) - 主柔粉 30%
- **Mango Dew** (#FFEDD0) - 主暖色 10%
- 高明度 + 低饱和 + 半透明叠色 + 大面积留白

---

## 🚀 快速开始

### 安装步骤

```bash
# 1. 创建Next.js项目
npx create-next-app@latest portfolio --typescript --tailwind --app

# 2. 进入目录
cd portfolio

# 3. 安装依赖
npm install framer-motion @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react sharp

# 4. 复制所有文件到对应位置

# 5. 运行
npm run dev
```

---

## 📁 文件结构与复制指南

### 配置文件
```
项目根目录/
├── tailwind.config.ts      ← 复制 tailwind.config.ts
└── lib/
    └── utils.ts            ← 复制 lib-utils.ts
```

### 应用文件
```
app/
├── layout.tsx              ← 复制 layout.tsx
├── page.tsx                ← 复制 page.tsx
├── globals.css             ← 复制 globals.css
├── cases/
│   └── page.tsx            ← 复制 cases-page.tsx
└── photography/
    └── page.tsx            ← 复制 photography-page.tsx
```

### 组件文件
```
components/
├── climbing-route.tsx      ← 复制 climbing-route.tsx
├── film-roll-gallery.tsx   ← 复制 film-roll-gallery.tsx
└── ui/
    ├── circular-reveal-heading.tsx  ← 复制 circular-reveal-heading.tsx
    └── vertical-image-stack.tsx     ← 复制 vertical-image-stack.tsx
```

---

## 🎯 核心组件说明

### 1. ClimbingRoute (攀岩路线)
**文件**: `components/climbing-route.tsx`

**功能**:
- 展示职业经历和项目
- 可点击岩点查看详情
- 动画路线连线
- 难度等级显示

**自定义数据**:
```typescript
const holds: ClimbingHold[] = [
  {
    id: "unique-id",
    x: 25,           // 横坐标 0-100
    y: 15,           // 纵坐标 0-100  
    type: "experience",  // experience/project/milestone
    title: "公司名",
    subtitle: "职位",
    date: "2025.01-04",
    content: {
      description: "描述",
      achievements: ["成就1", "成就2"],
      tags: ["标签1", "标签2"],
    },
    color: "honeydew",  // honeydew/lychee/mango
    difficulty: 2,      // 1/2/3
  },
]
```

### 2. FilmRollGallery (相机胶卷)
**文件**: `components/film-roll-gallery.tsx`

**功能**:
- 胶片式作品展示
- 自动轮播（5秒）
- 缩略图导航
- 详情弹窗

**自定义数据**:
```typescript
const filmFrames: FilmFrame[] = [
  {
    id: "frame-1",
    title: "项目名称",
    category: "分类",
    date: "2025.01",
    image: "图片URL (800×1000)",
    description: "描述",
    details: ["亮点1", "亮点2", "亮点3"],
  },
]
```

### 3. CircularRevealHeading (环形标题)
**文件**: `components/ui/circular-reveal-heading.tsx`

**功能**:
- 旋转文字环绕
- Hover显示图片
- 3D凹凸效果

**使用示例**:
```typescript
<CircularRevealHeading
  items={[
    { text: "USER INSIGHT", image: "图片URL" },
    { text: "DATA DRIVEN", image: "图片URL" },
  ]}
  centerText={<div>中心内容</div>}
  size="lg"
/>
```

### 4. VerticalImageStack (垂直堆叠)
**文件**: `components/ui/vertical-image-stack.tsx`

**功能**:
- 3D卡片堆叠效果
- 滚轮/拖拽切换
- 进度指示器

---

## 🎨 配色使用指南

### Tailwind类名
```tsx
{/* Honeydew - 主冷色 */}
className="bg-honeydew-200 text-honeydew-500"

{/* Lychee - 主柔粉 */}
className="bg-lychee-200 text-lychee-500"

{/* Mango - 主暖色 */}
className="bg-mango-200 text-mango-500"

{/* 渐变背景 */}
className="bg-honeydew-gradient"
className="bg-lychee-gradient"
```

### 使用场景
- **60% 白色留白**: 大面积背景
- **30% Honeydew**: 主要UI元素（卡片、按钮）
- **10% Lychee + Mango**: 强调色（高亮、点缀）

---

## 📝 内容修改清单

### ✅ 必改项
1. **个人信息** (`app/page.tsx`)
   - 姓名
   - 定位标签
   - 邮箱/电话

2. **攀岩数据** (`components/climbing-route.tsx`)
   - 添加你的经历
   - 修改成就描述
   - 调整岩点位置

3. **作品数据** (`components/film-roll-gallery.tsx`)
   - 替换项目信息
   - 上传真实图片

### ⚙️ 可选项
4. **环形标题** (`app/page.tsx`)
   - 修改4个关键词
   - 替换对应图片

5. **统计数据** (`app/page.tsx`)
   - 更新数字统计

6. **摄影作品** (`components/ui/vertical-image-stack.tsx`)
   - 添加个人摄影作品

---

## 📸 图片规格建议

| 位置 | 尺寸 | 比例 |
|------|------|------|
| 胶卷作品 | 800×1000 | 4:5 |
| 垂直堆叠 | 800×1000 | 4:5 |
| 环形图片 | 800×800 | 1:1 |
| 岩点背景 | 任意 | 自适应 |

**图片来源**:
- Unsplash (临时占位)
- 项目截图
- 活动照片
- 个人摄影作品

---

## 🚀 部署步骤

### Vercel (推荐)
1. 推送代码到GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入GitHub仓库
4. 自动部署完成

### 自定义域名
1. 购买域名
2. Vercel设置域名
3. 配置DNS记录

---

## 🎯 SEO优化

编辑 `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "你的名字 | 你的定位",
  description: "你的简介",
  keywords: "关键词1, 关键词2",
}
```

---

## 📱 响应式现状

- ✅ 桌面端 (1920×1080)
- ✅ 笔记本 (1440×900)  
- ⚠️ 平板 (需测试)
- ⚠️ 手机 (需优化)

---

## 🛠️ 技术栈

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

---

## 💬 联系作者

- 邮箱: 3459613530@qq.com
- 电话: 15810629707
- 定位: 数据驱动 · 创意传播 · 高效执行

---

**版本**: v1.0.0  
**最后更新**: 2026年4月  
**设计理念**: 在营销与产品的交界处，用数据讲故事 🎨
