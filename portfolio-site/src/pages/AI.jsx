import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIWorkflow from '../components/AIWorkflow';
import AILessons from '../components/AILessons';

export default function AI({ content, lang }) {
  const a = content.ai;

  // 解析段落中的加粗标记 **text**
  const parseParagraph = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const boldText = part.slice(2, -2);
        return <strong key={i} className="text-dark-text font-semibold">{boldText}</strong>;
      }
      return part;
    });
  };

  const topRef = useRef(null);
  const topInView = useInView(topRef, { once: true, amount: 0.1, margin: '-50px' });
  const flowRef = useRef(null);
  const flowInView = useInView(flowRef, { once: true, amount: 0.1, margin: '-50px' });

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar content={content} lang={lang} />

      {/* 1. Opinion: label + heading + four paragraphs (same top structure as About) */}
      <motion.section
        ref={topRef}
        initial={{ opacity: 0, y: 20 }}
        animate={topInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 sm:px-8 pt-page-top pb-section bg-dark-bg"
      >
        <div className="max-w-content mx-auto">
          <p className="text-sm uppercase tracking-wider text-dark-text-secondary mb-6 font-normal">
            {a.label}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-110 tracking-tighter-custom text-dark-text mb-10">
            {a.heading}
          </h1>
          <div className="space-y-6">
            {a.intro.map((para, i) => (
              <p key={i} className="text-[0.9375rem] text-dark-text-secondary leading-relaxed">
                {parseParagraph(para)}
              </p>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 2. Workflow: small title + six-stage timeline */}
      <motion.section
        ref={flowRef}
        initial={{ opacity: 0, y: 20 }}
        animate={flowInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 sm:px-8 py-section border-t border-dark-border bg-dark-bg"
      >
        <div className="max-w-content mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium text-dark-text mb-16 leading-tight">
            {a.workflow.title}
          </h2>
          <AIWorkflow workflow={a.workflow} />
        </div>
      </motion.section>

      {/* 3. Lessons: creed cards in an auto-scrolling band */}
      {a.lessons && (
        <section className="py-section border-t border-dark-border bg-dark-bg overflow-hidden">
          <div className="px-6 sm:px-8">
            <div className="max-w-content mx-auto">
              <h2 className="text-2xl sm:text-3xl font-medium text-dark-text mb-14 leading-tight">
                {a.lessons.title}
              </h2>
            </div>
            {/* 滚动带比正文更宽(破格),但保留页面左右留白 */}
            <div className="max-w-[72rem] mx-auto">
              <AILessons lessons={a.lessons} />
            </div>
          </div>

          {/* Outro: link to Work page */}
          {a.outro && (
            <div className="px-6 sm:px-8">
              <div className="max-w-content mx-auto mt-20 pt-10 border-t border-dark-border">
                <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed">
                  {a.outro}{' '}
                  <a
                    href={lang === 'zh' ? '/work' : '/en/work'}
                    className="text-dark-text font-medium hover:text-dark-text-secondary transition-colors whitespace-nowrap"
                  >
                    {a.outroCta}
                  </a>
                </p>
              </div>
            </div>
          )}
        </section>
      )}

      <Footer content={content} />
    </div>
  );
}
