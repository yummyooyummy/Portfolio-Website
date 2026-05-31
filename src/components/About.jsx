import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function About({ content }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-12 sm:py-20 px-4 sm:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">{content.about.title}</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {content.about.bio}
        </p>
        <p className="text-lg text-gray-600 mt-6">
          {content.about.experience}
        </p>
      </div>
    </motion.section>
  );
}
