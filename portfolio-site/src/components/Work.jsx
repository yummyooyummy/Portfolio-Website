import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Work({ content }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  return (
    <motion.section
      id="work"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-12 sm:py-20 px-6 sm:px-8 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">{content.work.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.work.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-bold mb-1">{project.name}</h3>
              {project.tag && (
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">{project.tag}</p>
              )}
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              <div className="flex items-center gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple hover:underline focus:outline-none focus:ring-2 focus:ring-purple rounded"
                  >
                    {content.work.viewCode}
                  </a>
                )}
                <span className="text-purple cursor-not-allowed opacity-50">
                  {content.work.viewDetails}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
