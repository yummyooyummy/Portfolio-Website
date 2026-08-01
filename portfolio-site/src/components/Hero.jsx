import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Hero({ content, lang }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });
  // 微信内置浏览器屏蔽文件下载,检测到微信环境时改为弹出引导蒙层
  const [showWxTip, setShowWxTip] = useState(false);
  const handleCvClick = (e) => {
    if (typeof navigator !== 'undefined' && /MicroMessenger/i.test(navigator.userAgent)) {
      e.preventDefault();
      setShowWxTip(true);
    }
  };

  // Only the first 3 stats render as cards in the hero
  const statCards = content.stats.slice(0, 3);

  // Per-language sizing: Chinese a touch smaller than English (denser glyphs)
  const headlineSize = lang === 'zh'
    ? 'text-3xl sm:text-4xl md:text-[2.625rem]'
    : 'text-3xl sm:text-4xl md:text-5xl';
  const subtitleSize = 'text-[0.9375rem]'; // 15px, unified for zh/en

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-dark-bg px-6 sm:px-8 pt-page-top pb-16"
    >
      <div className="max-w-content mx-auto">
        {/* 状态徽章:正在看新机会 */}
        <div className="inline-flex items-center gap-2.5 border border-dark-border rounded-full px-4 py-1.5 mb-7">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="text-[0.8125rem] text-dark-text-secondary">
            {content.contact.status} · {content.contact.statusDetail}
          </span>
        </div>

        {/* Headline */}
        <h1 className={`${headlineSize} font-medium mb-6 leading-110 tracking-tighter-custom text-dark-text`}>
          {content.hero.headline}
        </h1>

        {/* Subtitle */}
        <p className={`${subtitleSize} text-dark-text-secondary mb-8 leading-relaxed font-medium`}>
          {content.hero.subtitle}
        </p>

        {/* Button row + social icons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div className="flex flex-row gap-3 sm:gap-4">
            <a
              href={lang === 'zh' ? '/contact' : '/en/contact'}
              className="flex-1 sm:flex-none bg-dark-text text-dark-bg px-4 sm:px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-dark-text font-medium flex items-center justify-center gap-2"
            >
              {content.hero.cta1}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href={lang === 'zh' ? '/cv.pdf' : '/cv-en.pdf'}
              download={lang === 'zh' ? '郑雨晴-交互设计师.pdf' : 'Yuqing-Zheng-Interaction-Designer.pdf'}
              onClick={handleCvClick}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none border border-dark-text-secondary text-dark-text px-4 sm:px-8 py-3.5 rounded-lg hover:bg-dark-card transition-colors focus:outline-none focus:ring-2 focus:ring-dark-text-secondary text-center font-medium flex items-center justify-center gap-2"
            >
              {content.hero.cta2}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>

          {/* Social icons (right end of button row) */}
          <div className="flex gap-5 items-center sm:justify-end">
            <a
              href="mailto:zhengyuqingsherry@gmail.com"
              className="text-dark-text-secondary hover:text-dark-text transition-colors"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="https://github.com/yummyooyummy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-text-secondary hover:text-dark-text transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yuqing-zheng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-text-secondary hover:text-dark-text transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 移动端:紧凑数据条(一行三列) */}
        <div className="flex md:hidden border-y border-dark-border py-4">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className={`flex-1 text-center px-1 ${index > 0 ? 'border-l border-dark-border' : ''}`}
            >
              <div className="text-xl font-medium text-dark-text leading-tight">{stat.number}</div>
              <div className="text-[11px] text-dark-text-secondary mt-1.5">{stat.short}</div>
            </div>
          ))}
        </div>

        {/* Stat cards — desktop only, immediately below buttons, same left edge */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border p-7 rounded-card shadow-card-subtle"
            >
              <div className="text-3xl md:text-4xl font-medium text-dark-text mb-3 leading-tight">
                {stat.number}
              </div>
              <div className="text-[0.9375rem] text-dark-text-secondary font-normal leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 微信内下载引导蒙层 */}
      {showWxTip && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex flex-col items-end px-6 pt-6"
          onClick={() => setShowWxTip(false)}
        >
          {/* 指向右上角的箭头 */}
          <svg className="w-14 h-14 text-white mb-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9M17 7v8" />
          </svg>
          <div className="w-full text-right">
            <p className="text-white text-base font-medium leading-relaxed">
              {lang === 'zh' ? '微信内无法直接下载文件' : "WeChat's browser blocks downloads"}
            </p>
            <p className="text-white/80 text-sm mt-2 leading-relaxed">
              {lang === 'zh'
                ? '请点击右上角「···」，选择「在浏览器中打开」即可下载简历'
                : 'Tap "···" in the top-right corner and choose "Open in Browser" to download the CV'}
            </p>
            <p className="text-white/50 text-xs mt-6">
              {lang === 'zh' ? '点击任意位置关闭' : 'Tap anywhere to close'}
            </p>
          </div>
        </div>
      )}
    </motion.section>
  );
}
