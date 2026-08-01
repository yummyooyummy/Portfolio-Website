import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

// 主页底部导流区:关于 / AI 实践 / 试验场 三块合为一个区域
// 桌面端:关于 + AI 两列,试验场整行在下(带分隔线);手机端:三块统一堆叠,无内部分隔
export default function TwoColumnIntro({ content, lang }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  const aboutPreview = lang === 'zh'
    ? '一个交互设计师的来路：从纯艺术的底子，到大厂的历练，再到今天独立用 AI 落地产品。'
    : 'The path of an interaction designer — from a fine-art foundation, through years inside a big tech company, to building products independently with AI today.';

  const aiPreview = lang === 'zh'
    ? '我怎么和 AI 一起工作：从一个想法，到一个真正上线的产品。'
    : 'How I work with AI — from an idea to a real, launched product.';

  const arrow = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const blocks = [
    {
      title: content.about.title,
      text: aboutPreview,
      href: lang === 'zh' ? '/about' : '/en/about',
      cta: lang === 'zh' ? '了解更多' : 'Read more'
    },
    {
      title: content.ai.title,
      text: aiPreview,
      href: lang === 'zh' ? '/ai' : '/en/ai',
      cta: lang === 'zh' ? '了解更多' : 'Read more'
    },
    {
      title: content.lab.title,
      text: content.lab.description,
      href: lang === 'zh' ? '/lab' : '/en/lab',
      cta: lang === 'zh' ? '查看' : 'See work'
    }
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some', margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-section px-6 sm:px-8 bg-dark-bg border-t border-dark-border"
    >
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {blocks.map((b, i) => (
            <div
              key={i}
              className={
                i === 2
                  ? 'md:col-span-2 md:border-t md:border-dark-border md:pt-14'
                  : ''
              }
            >
              <h2 className="text-3xl sm:text-4xl font-medium text-dark-text mb-6 leading-tight">
                {b.title}
              </h2>
              <p className={`text-[0.9375rem] text-dark-text-secondary leading-relaxed mb-6 ${i === 2 ? 'md:max-w-2xl' : ''}`}>
                {b.text}
              </p>
              <a
                href={b.href}
                className="inline-flex items-center gap-2 text-dark-text hover:text-dark-text-secondary transition-colors font-medium"
              >
                {b.cta}
                {arrow}
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
