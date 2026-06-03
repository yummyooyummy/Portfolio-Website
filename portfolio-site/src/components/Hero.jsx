import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Hero({ content, lang }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  // Only the first 3 stats render as cards in the hero
  const statCards = content.stats.slice(0, 3);

  // Per-language sizing: Chinese a touch smaller than English (denser glyphs)
  const headlineSize = lang === 'zh'
    ? 'text-3xl sm:text-4xl md:text-[2.625rem]'
    : 'text-3xl sm:text-4xl md:text-5xl';
  const subtitleSize = lang === 'zh'
    ? 'text-base sm:text-lg'
    : 'text-lg sm:text-xl';

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-dark-bg px-4 sm:px-8 pt-hero-top pb-section"
    >
      <div className="max-w-content mx-auto">
        {/* Headline */}
        <h1 className={`${headlineSize} font-medium mb-6 leading-110 tracking-tighter-custom text-dark-text max-w-4xl`}>
          {content.hero.headline}
        </h1>

        {/* Subtitle */}
        <p className={`${subtitleSize} text-dark-text-secondary mb-8 leading-relaxed font-medium max-w-3xl`}>
          {content.hero.subtitle}
        </p>

        {/* Button row + social icons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={lang === 'zh' ? '/contact' : '/en/contact'}
              className="w-full sm:w-auto bg-dark-text text-dark-bg px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-dark-text font-medium flex items-center justify-center gap-2"
            >
              {content.hero.cta1}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="/cv.pdf"
              download
              className="w-full sm:w-auto border border-dark-text-secondary text-dark-text px-8 py-3.5 rounded-lg hover:bg-dark-card transition-colors focus:outline-none focus:ring-2 focus:ring-dark-text-secondary text-center font-medium flex items-center justify-center gap-2"
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

        {/* Stat cards — immediately below buttons, same left edge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border p-8 rounded-card shadow-card-subtle"
            >
              <div className="text-4xl md:text-5xl font-medium text-dark-text mb-4 leading-tight">
                {stat.number}
              </div>
              <div className="text-base text-dark-text-secondary font-normal leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
