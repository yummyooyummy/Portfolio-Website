# Portfolio Website Project

## 1. 项目简介

一个中英双语的个人作品集/简历网站，用于投递求职和发给国内外企业的 HR。展示个人背景、项目经验和联系方式，支持一键切换中英文。

## 2. 技术栈

- **前端框架：** React 18
- **构建工具：** Vite
- **样式方案：** Tailwind CSS v3.4.0
- **动画库：** Framer Motion
- **部署方式：** 计划使用 Vercel
- **语言切换：** 通过 URL 参数控制（`?lang=zh` / `?lang=en`）

## 3. 项目结构

```
portfolio-site/                    # 主项目目录
├── src/
│   ├── components/               # React 组件
│   │   ├── Navbar.jsx           # 固定顶部导航 + 语言切换按钮
│   │   ├── Hero.jsx             # 首屏大标题 + CTA 按钮
│   │   ├── Stats.jsx            # 三个数据亮点展示
│   │   ├── About.jsx            # 关于我 / 个人介绍
│   │   ├── Work.jsx             # 项目作品展示（3个卡片）
│   │   ├── Lab.jsx              # 实验室板块
│   │   ├── Contact.jsx          # 联系方式
│   │   └── Footer.jsx           # 页脚
│   ├── content.js               # 🔑 中英文案集中管理（content.zh / content.en）
│   ├── App.jsx                  # 主应用组件 + 语言状态管理
│   ├── main.jsx                 # 入口文件
│   └── index.css                # 全局样式 + Tailwind 导入
├── public/
│   └── cv.pdf                   # 简历文件（待替换真实简历）
├── index.html                   # HTML 模板
├── tailwind.config.js           # Tailwind 配置（Inter 字体 + 紫色主题）
├── postcss.config.js            # PostCSS 配置
└── package.json                 # 依赖管理

docs/superpowers/specs/          # 设计文档
└── 2026-05-31-portfolio-website-design.md  # 完整设计规格说明
```

### 组件说明

- **Navbar：** 固定顶部导航，包含导航链接和语言切换按钮（中/EN）
- **Hero：** 首屏大标题区，展示核心价值主张 + "联系我"和"下载简历"按钮
- **Stats：** 四个大数字展示关键成就（0→1 全流程、腾讯经验、AI 落地产品数、双语能力）
- **About：** 个人介绍和工作经历
- **Work：** 项目作品展示，3个卡片式布局
- **Lab：** 实验室板块，展示技术探索
- **Contact：** 联系方式（邮箱、GitHub、LinkedIn）
- **Footer：** 页脚版权信息和社交链接

### 内容管理

所有文案内容集中在 `src/content.js`，结构为：
```javascript
export const content = {
  zh: { /* 中文内容 */ },
  en: { /* 英文内容 */ }
};
```

## 4. 设计规范

### 视觉风格
- **设计理念：** 极简专业，大量留白，清晰的排版层级
- **参考来源：** benroachdesign.com 的结构化价值叙事方式

### 配色方案
- **主色：** 黑色 `#000000` / 白色 `#FFFFFF`
- **辅助灰：** `#6B7280`（副文本）、`#F3F4F6`（背景）
- **强调色：** 深紫 `#6B4E9E`（链接、按钮、数字强调）

### 字体
- **字体家族：** Inter（通过 Google Fonts CDN 加载）
- **字重：** 400（正文）、600（中粗）、700（标题）

### 响应式
- **断点：** 768px（Tailwind 的 `md` 断点）
- **移动端：** < 768px，汉堡菜单 + 单列布局
- **桌面端：** ≥ 768px，水平导航 + 多列布局

### 动画
- **库：** Framer Motion
- **效果：** 各 section 进入视口时淡入 + 轻微上移（opacity 0→1, translateY 20px→0）
- **触发：** 滚动到视口 10% 时触发，仅播放一次

## 5. 当前进度

### ✅ 已完成
- [x] 项目初始化（Vite + React + Tailwind CSS + Framer Motion）
- [x] 所有组件开发完成（Navbar / Hero / Stats / About / Work / Lab / Contact / Footer）
- [x] 中英双语支持（URL 参数切换 + 语言切换按钮）
- [x] 响应式设计（移动端 + 桌面端）
- [x] 滚动动画（Framer Motion）
- [x] 平滑滚动 + 导航锚点
- [x] 修复 Tailwind CSS v4 兼容性问题（降级到 v3.4.0）
- [x] 本地开发环境运行正常
- [x] Git 仓库初始化并推送到 GitHub
- [x] 替换 Hero / Stats / About / Work 真实文案（中英双语；Stats 改为 4 项、移动端 2 列 / 桌面端 4 列；About 支持多段；Work 卡片接入 GitHub 链接,前两个项目已挂上,Ski 项目内容待补)
- [x] 替换真实姓名为"郑雨晴 / Yuqing Zheng"（Navbar / Footer / index.html title & meta；Navbar 由硬编码改为读取 `content.nav.name`,实现 i18n）
- [x] 更新真实联系方式（邮箱 `zhengyuqingsherry@gmail.com` / LinkedIn `linkedin.com/in/yuqing-zheng` / GitHub `github.com/yummyooyummy`,Footer 与 Contact 两处都已替换）
- [x] Work 新增"王者荣耀世界 Honor of Kings World"并置顶（腾讯天美三年半经历,含 fullDescription 长文案,中英双语；无 github 字段）
- [x] 将 Ski Mini-Program 从 Work 移除（Work 最终保留 3 个：王者荣耀世界 / 点宇宙 / 签署应用）
- [x] 替换 Lab 引言文案（"还在路上的探索——用 AI 把想法快速试出来的地方"）
- [x] Lab 改造为支持项目卡片列表（`content.lab` 增加 `projects` 数组,中英双语；`Lab.jsx` 在 description 下方 `.map()` 渲染卡片网格,样式与 Work 一致——同样的圆角/边框/内边距/响应式 3 列网格,移除 GitHub 链接和"查看详情"链接,无 hover shadow,且对 `projects` 缺失/空数组做了兜底）
- [x] 滑雪小程序作为第一张占位卡片加入 Lab（中文"滑雪小程序 · 小程序 · 内容补充中" / 英文"Ski Mini-Program · Mini Program · Coming soon"）

### 🚧 进行中
- [ ] 无

### 📋 待办
- [ ] 替换真实简历 PDF（`public/cv.pdf`）
- [ ] 视觉细节调整和优化（Work 新卡片布局、王者荣耀世界长描述、Lab 单卡片显示效果需在浏览器中视觉验证）
- [ ] 添加项目详情页（Work 卡片的"查看详情"链接,长内容已存在 `fullDescription` 字段中)
- [ ] 部署到 Vercel
- [ ] 配置自定义域名（可选）
- [ ] SEO 优化（OG 标签 / Twitter Card,基础 title + description 已写)

## 6. 待办与已知问题

### 待办事项
1. **简历文件：** `public/cv.pdf` 是占位文件，需要上传真实简历
2. **Lab 卡片真实内容：** 滑雪小程序当前是"内容补充中"占位卡片,后续补真实文案；如有更多 Lab 项目可继续追加到 `content.lab.projects` 数组
3. **项目详情：** Work 板块的"查看详情"链接目前是禁用状态，未来可扩展为独立详情页
4. **部署上线：** 完成内容替换后部署到 Vercel

### 已知问题
- 无重大问题

### 技术债务
- 无

## 7. 开发指南

### 本地开发

```bash
# 进入项目目录
cd /Users/yuqingzheng/PortfolioWeb/portfolio-site

# 安装依赖（首次运行）
npm install

# 启动开发服务器
npm run dev

# 访问地址
# 中文版：http://localhost:5173/ 或 http://localhost:5173/?lang=zh
# 英文版：http://localhost:5173/?lang=en

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

### 修改内容

1. **修改文案：** 编辑 `src/content.js`，分别更新 `content.zh` 和 `content.en`
2. **修改样式：** 使用 Tailwind CSS utility classes，或在组件中直接修改
3. **修改配色：** 编辑 `tailwind.config.js` 中的 `colors.purple`
4. **修改字体：** 编辑 `tailwind.config.js` 中的 `fontFamily.sans`

### Git 工作流

```bash
# 查看修改
git status

# 提交修改
git add .
git commit -m "描述修改内容"

# 推送到 GitHub
git push origin main
```

## 8. 部署说明

### Vercel 部署步骤（待执行）

1. 在 Vercel 官网登录并连接 GitHub 仓库
2. 选择 `Portfolio-Website` 仓库
3. 配置构建设置：
   - **Framework Preset:** Vite
   - **Root Directory:** `portfolio-site`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. 点击 Deploy
5. 获取部署 URL（如 `https://your-portfolio.vercel.app`）

### 环境变量
- 当前项目无需环境变量

## 9. 参考资源

- **设计参考：** https://www.benroachdesign.com/
- **设计文档：** `docs/superpowers/specs/2026-05-31-portfolio-website-design.md`
- **GitHub 仓库：** https://github.com/yummyooyummy/Portfolio-Website
- **Tailwind CSS 文档：** https://tailwindcss.com/docs
- **Framer Motion 文档：** https://www.framer.com/motion/

---

**最后更新：** 2026-06-01  
**项目状态：** 开发中（Work 已重整：王者荣耀世界置顶 + 滑雪移出;Lab 已支持卡片列表,滑雪以"内容补充中"占位卡片入驻;cv.pdf / 部署待办)
