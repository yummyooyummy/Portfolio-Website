import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Contact({ content }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-12 sm:py-20 px-4 sm:px-8 bg-gray-50"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">{content.contact.cta}</h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <a
            href="mailto:zhengyuqingsherry@gmail.com"
            className="text-purple hover:underline focus:outline-none focus:ring-2 focus:ring-purple"
          >
            {content.contact.email}
          </a>
          <a
            href="https://github.com/yummyooyummy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:underline focus:outline-none focus:ring-2 focus:ring-purple"
          >
            {content.contact.github}
          </a>
          <a
            href="https://www.linkedin.com/in/yuqing-zheng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:underline focus:outline-none focus:ring-2 focus:ring-purple"
          >
            {content.contact.linkedin}
          </a>
        </div>
      </div>
    </motion.section>
  );
}
