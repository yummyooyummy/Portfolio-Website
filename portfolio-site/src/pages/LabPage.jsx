import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import LabProjectDetailed from '../components/LabProjectDetailed';
import LabProjectSimple from '../components/LabProjectSimple';
import Footer from '../components/Footer';

export default function LabPage({ content, lang }) {
  const topRef = useRef(null);
  const topInView = useInView(topRef, { once: true, amount: 0.1, margin: "-50px" });

  const l = content.lab;

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar content={content} lang={lang} />

      {/* Top section: label + heading + intro */}
      <motion.section
        ref={topRef}
        initial={{ opacity: 0, y: 20 }}
        animate={topInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-4 sm:px-8 pt-page-top pb-section bg-dark-bg"
      >
        <div className="max-w-content mx-auto">
          <p className="text-sm uppercase tracking-wider text-dark-text-secondary mb-6 font-normal">
            {l.label}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-110 tracking-tighter-custom text-dark-text mb-8 max-w-2xl">
            {l.heading}
          </h1>
          <p className="text-[0.9375rem] sm:text-[0.9375rem] text-dark-text-secondary leading-relaxed max-w-2xl">
            {l.intro}
          </p>
        </div>
      </motion.section>

      {/* Projects list - same structure as AI page sections with divider */}
      <section className="px-4 sm:px-8 py-section border-t border-dark-border bg-dark-bg">
        <div className="max-w-content mx-auto">
          {l.projects.map((project, index) => {
            const projectRef = useRef(null);
            const projectInView = useInView(projectRef, { once: true, amount: 0.1, margin: "-50px" });

            return (
              <div key={index}>
                <motion.div
                  ref={projectRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={projectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  {project.type === 'detailed' ? (
                    <LabProjectDetailed project={project} lang={lang} />
                  ) : (
                    <LabProjectSimple project={project} lang={lang} />
                  )}
                </motion.div>

                {/* Divider between projects - same as AI page section dividers */}
                {index < l.projects.length - 1 && (
                  <div className="border-t border-dark-border my-section"></div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer content={content} />
    </div>
  );
}
