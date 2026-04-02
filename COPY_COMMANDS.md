# 文件复制命令清单

## 第一步：创建项目
```bash
npx create-next-app@latest portfolio --typescript --tailwind --app
cd portfolio
npm install framer-motion @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react sharp
```

## 第二步：创建目录结构
```bash
mkdir -p lib
mkdir -p components/ui
mkdir -p app/cases
mkdir -p app/photography
```

## 第三步：复制文件（按顺序执行）

### 1. 配置文件
```bash
# 复制 tailwind.config.ts 到项目根目录
cp tailwind.config.ts ./tailwind.config.ts

# 复制 lib/utils.ts
cp lib-utils.ts ./lib/utils.ts
```

### 2. 全局样式
```bash
# 复制 globals.css（会覆盖默认的）
cp globals.css ./app/globals.css
```

### 3. 布局和主页
```bash
# 复制根布局
cp layout.tsx ./app/layout.tsx

# 复制首页
cp page.tsx ./app/page.tsx
```

### 4. 子页面
```bash
# 作品集页面
cp cases-page.tsx ./app/cases/page.tsx

# 摄影页面
cp photography-page.tsx ./app/photography/page.tsx
```

### 5. 核心组件
```bash
# 攀岩路线组件
cp climbing-route.tsx ./components/climbing-route.tsx

# 相机胶卷组件
cp film-roll-gallery.tsx ./components/film-roll-gallery.tsx
```

### 6. UI组件
```bash
# 环形旋转标题
cp circular-reveal-heading.tsx ./components/ui/circular-reveal-heading.tsx

# 垂直图片堆叠
cp vertical-image-stack.tsx ./components/ui/vertical-image-stack.tsx
```

## 第四步：运行项目
```bash
npm run dev
```

访问 http://localhost:3000

---

## 文件对应关系表

| 提供的文件 | 复制到 |
|-----------|--------|
| tailwind.config.ts | ./tailwind.config.ts |
| lib-utils.ts | ./lib/utils.ts |
| globals.css | ./app/globals.css |
| layout.tsx | ./app/layout.tsx |
| page.tsx | ./app/page.tsx |
| cases-page.tsx | ./app/cases/page.tsx |
| photography-page.tsx | ./app/photography/page.tsx |
| climbing-route.tsx | ./components/climbing-route.tsx |
| film-roll-gallery.tsx | ./components/film-roll-gallery.tsx |
| circular-reveal-heading.tsx | ./components/ui/circular-reveal-heading.tsx |
| vertical-image-stack.tsx | ./components/ui/vertical-image-stack.tsx |

---

## 一键复制脚本（适用于Unix/Mac）

保存以下内容为 `setup.sh`:

```bash
#!/bin/bash

echo "🎨 开始配置张紫茹个人网站..."

# 创建目录
echo "📁 创建目录结构..."
mkdir -p lib
mkdir -p components/ui
mkdir -p app/cases
mkdir -p app/photography

# 复制配置文件
echo "⚙️  复制配置文件..."
cp tailwind.config.ts ./tailwind.config.ts
cp lib-utils.ts ./lib/utils.ts
cp globals.css ./app/globals.css

# 复制页面文件
echo "📄 复制页面文件..."
cp layout.tsx ./app/layout.tsx
cp page.tsx ./app/page.tsx
cp cases-page.tsx ./app/cases/page.tsx
cp photography-page.tsx ./app/photography/page.tsx

# 复制组件文件
echo "🧩 复制组件文件..."
cp climbing-route.tsx ./components/climbing-route.tsx
cp film-roll-gallery.tsx ./components/film-roll-gallery.tsx
cp circular-reveal-heading.tsx ./components/ui/circular-reveal-heading.tsx
cp vertical-image-stack.tsx ./components/ui/vertical-image-stack.tsx

echo "✅ 所有文件复制完成！"
echo "🚀 运行 npm run dev 启动项目"
```

运行脚本:
```bash
chmod +x setup.sh
./setup.sh
```

---

## Windows用户（PowerShell脚本）

保存以下内容为 `setup.ps1`:

```powershell
Write-Host "🎨 开始配置张紫茹个人网站..." -ForegroundColor Cyan

# 创建目录
Write-Host "📁 创建目录结构..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path lib
New-Item -ItemType Directory -Force -Path components\ui
New-Item -ItemType Directory -Force -Path app\cases
New-Item -ItemType Directory -Force -Path app\photography

# 复制配置文件
Write-Host "⚙️  复制配置文件..." -ForegroundColor Yellow
Copy-Item tailwind.config.ts -Destination .\tailwind.config.ts
Copy-Item lib-utils.ts -Destination .\lib\utils.ts
Copy-Item globals.css -Destination .\app\globals.css

# 复制页面文件
Write-Host "📄 复制页面文件..." -ForegroundColor Yellow
Copy-Item layout.tsx -Destination .\app\layout.tsx
Copy-Item page.tsx -Destination .\app\page.tsx
Copy-Item cases-page.tsx -Destination .\app\cases\page.tsx
Copy-Item photography-page.tsx -Destination .\app\photography\page.tsx

# 复制组件文件
Write-Host "🧩 复制组件文件..." -ForegroundColor Yellow
Copy-Item climbing-route.tsx -Destination .\components\climbing-route.tsx
Copy-Item film-roll-gallery.tsx -Destination .\components\film-roll-gallery.tsx
Copy-Item circular-reveal-heading.tsx -Destination .\components\ui\circular-reveal-heading.tsx
Copy-Item vertical-image-stack.tsx -Destination .\components\ui\vertical-image-stack.tsx

Write-Host "✅ 所有文件复制完成！" -ForegroundColor Green
Write-Host "🚀 运行 npm run dev 启动项目" -ForegroundColor Cyan
```

运行脚本:
```powershell
.\setup.ps1
```
