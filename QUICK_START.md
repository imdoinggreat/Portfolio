# 🚀 快速开始指南

## 📦 你收到的文件

### ✅ 核心文件（13个）

**配置文件** (2个):
- `tailwind.config.ts` - Tailwind配置（你的柔性配色方案）
- `lib-utils.ts` - 工具函数

**样式文件** (1个):
- `globals.css` - 全局样式

**页面文件** (4个):
- `layout.tsx` - 根布局（导航栏）
- `page.tsx` - 首页
- `cases-page.tsx` - 作品集页面
- `photography-page.tsx` - 摄影页面

**核心组件** (2个):
- `climbing-route.tsx` - 🧗 攀岩路线组件
- `film-roll-gallery.tsx` - 📸 相机胶卷组件

**UI组件** (2个):
- `circular-reveal-heading.tsx` - 环形旋转标题
- `vertical-image-stack.tsx` - 垂直图片堆叠

**文档** (2个):
- `PROJECT_README.md` - 完整项目文档
- `COPY_COMMANDS.md` - 文件复制命令清单

---

## ⚡ 3分钟快速启动

### 方法1：全新项目（推荐）

```bash
# 1. 创建项目
npx create-next-app@latest portfolio --typescript --tailwind --app
cd portfolio

# 2. 安装依赖
npm install framer-motion @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react sharp tailwindcss-animate

# 3. 创建目录
mkdir -p lib components/ui app/cases app/photography

# 4. 复制文件（按照下方的文件对应表）

# 5. 运行
npm run dev
```

### 方法2：使用提供的package.json

```bash
# 1. 创建空项目目录
mkdir portfolio
cd portfolio

# 2. 复制 package.json 到项目根目录

# 3. 安装依赖
npm install

# 4. 初始化Next.js
npx create-next-app@latest . --typescript --tailwind --app

# 5. 复制所有文件

# 6. 运行
npm run dev
```

---

## 📋 文件复制对应表

### 步骤1：配置文件
```
tailwind.config.ts      →  ./tailwind.config.ts
lib-utils.ts            →  ./lib/utils.ts
globals.css             →  ./app/globals.css
```

### 步骤2：页面文件
```
layout.tsx              →  ./app/layout.tsx
page.tsx                →  ./app/page.tsx
cases-page.tsx          →  ./app/cases/page.tsx
photography-page.tsx    →  ./app/photography/page.tsx
```

### 步骤3：组件文件
```
climbing-route.tsx      →  ./components/climbing-route.tsx
film-roll-gallery.tsx   →  ./components/film-roll-gallery.tsx

circular-reveal-heading.tsx  →  ./components/ui/circular-reveal-heading.tsx
vertical-image-stack.tsx     →  ./components/ui/vertical-image-stack.tsx
```

---

## 🎯 核心功能预览

### 首页 (/)
✅ Hero区域 - 环形旋转标题  
✅ About介绍  
✅ 攀岩路线展示  
✅ 数据统计  
✅ 联系方式  

### 作品集 (/cases)
✅ 相机胶卷式展示  
✅ 自动播放  
✅ 详情弹窗  

### 摄影 (/photography)
✅ 垂直3D堆叠  
✅ 滚轮/拖拽导航  

---

## 🎨 你的配色方案

```css
Honeydew Jelly #D5F2E8  (60% - 主冷色)
Lychee Sorbet  #FFE9F1  (30% - 主柔粉)
Mango Dew      #FFEDD0  (10% - 主暖色)
```

**已配置好的Tailwind类**:
- `bg-honeydew-200` / `text-honeydew-500`
- `bg-lychee-200` / `text-lychee-500`
- `bg-mango-200` / `text-mango-500`

---

## ✏️ 必须修改的内容

### 1. 个人信息 (app/page.tsx)
找到并修改：
```typescript
<h1>张紫茹</h1>  ← 改成你的名字
<p>数据驱动 · 创意传播</p>  ← 改成你的定位

邮箱: 3459613530@qq.com  ← 你的邮箱
电话: 15810629707  ← 你的电话
```

### 2. 攀岩数据 (components/climbing-route.tsx)
找到 `const holds: ClimbingHold[]` 数组，修改：
```typescript
{
  id: "feishu",       ← 改成你的ID
  x: 25,              ← 调整位置
  y: 15,              ← 调整位置
  title: "字节跳动",   ← 你的公司
  subtitle: "飞书商业化",  ← 你的职位
  content: {
    achievements: ["...", "..."],  ← 你的成就
  }
}
```

### 3. 作品数据 (components/film-roll-gallery.tsx)
找到 `const filmFrames: FilmFrame[]` 数组，修改：
```typescript
{
  title: "商学院活动策划",  ← 你的项目
  image: "图片URL",         ← 你的图片
  description: "...",       ← 你的描述
  details: ["...", "..."],  ← 你的亮点
}
```

---

## 🖼️ 图片替换

**当前使用Unsplash占位图**，需替换为：

1. **项目截图** (800×1000)
2. **活动照片** (800×1000)
3. **个人摄影作品** (800×1000)
4. **技能相关图片** (800×800)

**替换方法**:
```typescript
// 改前
image: "https://images.unsplash.com/..."

// 改后（本地图片）
image: "/images/your-photo.jpg"

// 或（其他CDN）
image: "https://your-cdn.com/image.jpg"
```

---

## 🐛 常见问题

### Q: 安装依赖时报错？
```bash
# 清除缓存重试
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Q: 找不到module？
```bash
# 确保安装了所有依赖
npm install framer-motion @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react sharp tailwindcss-animate
```

### Q: 样式不生效？
检查 `tailwind.config.ts` 是否正确复制到项目根目录

### Q: 图片加载失败？
1. 检查图片URL是否有效
2. 本地图片放在 `public/images/` 目录
3. 使用相对路径 `/images/xxx.jpg`

---

## 📚 进阶学习

详细文档请查看：
- `PROJECT_README.md` - 完整项目说明
- `COPY_COMMANDS.md` - 文件复制命令

---

## 🎉 完成后

访问 `http://localhost:3000` 查看你的网站！

**效果预览**:
- 首屏：环形旋转标题
- 滚动：攀岩路线展示
- 点击岩点：查看详细成就
- /cases：相机胶卷作品集
- /photography：垂直图片堆叠

---

## 🚀 部署到线上

### Vercel (免费)
```bash
# 1. 推送到GitHub
git init
git add .
git commit -m "Initial commit"
git push

# 2. 访问 vercel.com 导入仓库
# 3. 一键部署完成
```

---

## 💬 需要帮助？

遇到问题可以：
1. 查看 `PROJECT_README.md` 详细文档
2. 检查 Next.js 官方文档
3. 检查控制台错误信息

---

**祝你搭建顺利！🎨**

*在营销与产品的交界处，用数据讲故事*
