/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
      },
      colors: {
        // Deep dark theme colors
        'dark-bg': '#0c0a09',
        'dark-card': '#1c1917',
        'dark-border': '#292524',
        'dark-text': 'rgb(245, 245, 244)',
        'dark-text-secondary': 'rgb(168, 162, 158)',
      },
      letterSpacing: {
        'tighter-custom': '-0.02em',
      },
      lineHeight: {
        '110': '110%',
      },
      borderRadius: {
        'card': '28px',
      },
      maxWidth: {
        // 全站统一的内容最大宽度(所有页面的主容器都用 max-w-content + mx-auto 居中)
        // 想让内容更宽就调大、更窄就调小,改这一个值所有页面同步
        'content': '52rem',
      },
      spacing: {
        // 全局统一的大区块上下内边距(主页各 section 都用 py-section)
        // 想调大/调小整站区块留白,只改这一个值即可
        'section': '8rem',
        // 导航栏到主页首屏第一行字的专用顶部间距(仅主页 Hero 使用)
        'hero-top': '15rem',
        // 导航栏到内页首行内容的顶部间距(About/Work/Lab/AI/Contact 页使用)
        // 从 12rem 提升到 14rem (224px),确保固定导航栏下方有充足视觉留白
        'page-top': '13.5rem',
        // 分割线上下间距(Lab 页引导段下分割线、项目间分割线等都用这个统一配置)
        // 当前 4rem,想调大/调小只改这一个值
        'divider': '4rem',
      },
      boxShadow: {
        'card-subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
