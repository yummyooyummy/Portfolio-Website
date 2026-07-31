import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function SelectWork({ content, lang }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  const projects = content.work.projects;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-section px-6 sm:px-8 bg-dark-bg border-t border-dark-border"
    >
      <div className="max-w-content mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-dark-text mb-16 leading-tight">
          {lang === 'zh' ? '精选作品' : 'Select work'}
        </h2>

        {/* 杂志式排布:第一个作品全宽,其余两个桌面端半宽并排;手机端保持单列 */}
        <div className="space-y-16 md:space-y-14">
          {projects[0] && <ProjectCard project={projects[0]} lang={lang} />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
            {projects.slice(1).map((project, index) => (
              <ProjectCard key={index} project={project} lang={lang} compact />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
