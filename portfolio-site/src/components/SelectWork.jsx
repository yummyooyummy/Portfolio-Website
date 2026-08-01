import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function SelectWork({ content, lang }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  const projects = content.work.projects;

  return (
    <section className="pt-10 sm:pt-section pb-section px-6 sm:px-8 bg-dark-bg border-t border-dark-border">
      <div className="max-w-content mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some', margin: '0px 0px -40px 0px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium text-dark-text mb-8 sm:mb-16 leading-tight"
        >
          {lang === 'zh' ? '精选作品' : 'Select work'}
        </motion.h2>

        {/* 杂志式排布:第一个作品全宽,其余两个桌面端半宽并排;手机端保持单列 */}
        <div className="space-y-16 md:space-y-14">
          {projects[0] && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some', margin: '0px 0px -40px 0px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <ProjectCard project={projects[0]} lang={lang} />
            </motion.div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some', margin: '0px 0px -40px 0px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
              >
                <ProjectCard project={project} lang={lang} compact />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
