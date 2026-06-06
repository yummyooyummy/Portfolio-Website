import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function TwoColumnIntro({ content, lang }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  // Extract first sentence from about.bio for preview
  const aboutPreview = lang === 'zh'
    ? '一个交互设计师的来路：从纯艺术的底子，到大厂的历练，再到今天独立用 AI 落地产品。'
    : 'The path of an interaction designer — from a fine-art foundation, through years inside a big tech company, to building products independently with AI today.';

  const aiPreview = lang === 'zh'
    ? '研究主流 AI 工具，用 AI 做自己的设计探索，把脑子里的产品一个个真正做出来。'
    : 'Studying the major AI tools and using them for my own design experiments — actually building the products in my head.';

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-section px-6 sm:px-8 bg-dark-bg border-t border-dark-border"
    >
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* About Column */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-dark-text mb-6 leading-tight">
              {content.about.title}
            </h2>
            <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed mb-6">
              {aboutPreview}
            </p>
            <a
              href={lang === 'zh' ? '/about' : '/en/about'}
              className="inline-flex items-center gap-2 text-dark-text hover:text-dark-text-secondary transition-colors font-medium"
            >
              {lang === 'zh' ? '了解更多' : 'Read more'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* AI Column */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-dark-text mb-6 leading-tight">
              {content.ai.title}
            </h2>
            <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed mb-6">
              {aiPreview}
            </p>
            <a
              href={lang === 'zh' ? '/ai' : '/en/ai'}
              className="inline-flex items-center gap-2 text-dark-text hover:text-dark-text-secondary transition-colors font-medium"
            >
              {lang === 'zh' ? '了解更多' : 'Read more'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
