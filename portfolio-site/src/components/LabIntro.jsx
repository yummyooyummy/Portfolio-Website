import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function LabIntro({ content, lang }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-section px-4 sm:px-8 bg-dark-bg border-t border-dark-border"
    >
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-dark-text mb-6 leading-tight">
          {content.lab.title}
        </h2>
        <p className="text-base text-dark-text-secondary leading-relaxed mb-6 max-w-2xl">
          {content.lab.description}
        </p>
        <a
          href={lang === 'zh' ? '/lab' : '/en/lab'}
          className="inline-flex items-center gap-2 text-dark-text hover:text-dark-text-secondary transition-colors font-medium"
        >
          {lang === 'zh' ? '查看' : 'See work'}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.section>
  );
}
