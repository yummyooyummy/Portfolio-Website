import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Stats({ content }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  // Only take first 3 stats
  const displayStats = content.stats.slice(0, 3);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-16 sm:py-24 px-4 sm:px-8 bg-dark-bg"
    >
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayStats.map((stat, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border p-8 rounded-card shadow-card-subtle"
            >
              <div className="text-5xl md:text-6xl font-medium text-dark-text mb-4 leading-tight">
                {stat.number}
              </div>
              <div className="text-base text-dark-text-secondary font-normal leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
