import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Lab({ content }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });
  const projects = content.lab.projects ?? [];

  return (
    <motion.section
      id="lab"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-12 sm:py-20 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{content.lab.title}</h2>
          <p className="text-lg text-gray-600">
            {content.lab.description}
          </p>
        </div>
        {projects.length > 0 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col"
              >
                <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                {project.tag && (
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">{project.tag}</p>
                )}
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
