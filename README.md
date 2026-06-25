# 🌿 二十四节气精灵助手

> 顺应时节，诗意生活

一个精美的二十四节气 Web 应用，为每个节气设计了独特的精灵形象卡片。

![预览](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![预览](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![预览](https://img.shields.io/badge/Tailwind-CSS-38b2ac?style=flat-square&logo=tailwind-css)
![预览](https://img.shields.io/badge/Framer-Motion-orange?style=flat-square)

## ✨ 功能特色

- 🎨 **24个节气精灵卡片** - 每个节气都有独特的精灵形象和配色
- 📅 **完整节气时间表** - 包含2026年所有24个节气
- 🌸 **四季分组展示** - 按春夏秋冬分类，清晰易浏览
- 💌 **专属祝福弹窗** - 自动识别今日节气，送上温馨祝福
- 📱 **完美响应式** - 手机和电脑都能完美显示
- ✨ **流畅动画** - Framer Motion 驱动的精美过渡效果
- 🎯 **中国风设计** - 琥珀金主色调，温暖典雅

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **类型**: TypeScript

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone <your-repo-url>
cd 24-solar-terms

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 打开 http://localhost:3000
```

### 构建部署

```bash
# 构建静态文件
npm run build

# 输出在 out/ 目录
```

## 📦 部署到 Vercel

### 方式一：Vercel CLI

```bash
npm i -g vercel
vercel
```

### 方式二：GitHub 集成

1. 将项目推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. Import 项目
4. 点击 Deploy

## 📁 项目结构

```
24-solar-terms/
├── public/              # 静态资源
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── page.tsx    # 首页
│   │   ├── layout.tsx  # 布局
│   │   └── detail/[id] # 详情页
│   ├── components/     # 组件
│   ├── data/
│   │   └── terms.ts    # 节气数据
│   └── styles/
│       └── globals.css # 全局样式
├── package.json
├── tailwind.config.ts
└── vercel.json
```

## 🌐 二十四节气

| 季节 | 节气 | 日期 |
|:---:|:---:|:---:|
| 冬 | 小寒 | 1月5日 |
| 冬 | 大寒 | 1月20日 |
| 春 | 立春 | 2月4日 |
| 春 | 雨水 | 2月18日 |
| 春 | 惊蛰 | 3月5日 |
| 春 | 春分 | 3月20日 |
| 春 | 清明 | 4月5日 |
| 春 | 谷雨 | 4月20日 |
| 夏 | 立夏 | 5月5日 |
| 夏 | 小满 | 5月21日 |
| 夏 | 芒种 | 6月5日 |
| 夏 | 夏至 | 6月21日 |
| 夏 | 小暑 | 7月7日 |
| 夏 | 大暑 | 7月23日 |
| 秋 | 立秋 | 8月7日 |
| 秋 | 处暑 | 8月23日 |
| 秋 | 白露 | 9月7日 |
| 秋 | 秋分 | 9月23日 |
| 秋 | 寒露 | 10月8日 |
| 秋 | 霜降 | 10月23日 |
| 冬 | 立冬 | 11月7日 |
| 冬 | 小雪 | 11月22日 |
| 冬 | 大雪 | 12月7日 |
| 冬 | 冬至 | 12月22日 |

## 📄 License

MIT License
