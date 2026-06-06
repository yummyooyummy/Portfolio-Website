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

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} lang={lang} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
