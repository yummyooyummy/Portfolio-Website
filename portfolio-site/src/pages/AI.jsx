import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AI({ content, lang }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  return (
    <div className="min-h-screen">
      <Navbar content={content} lang={lang} />
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pt-16 py-12 sm:py-20 px-4 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{content.ai.title}</h2>
            <p className="text-lg text-gray-600">
              {content.ai.description}
            </p>
          </div>
        </div>
      </motion.section>
      <Footer content={content} />
    </div>
  );
}
