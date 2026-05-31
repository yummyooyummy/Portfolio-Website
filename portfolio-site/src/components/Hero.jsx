import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Hero({ content }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {content.hero.headline}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          {content.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-purple text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple"
          >
            {content.hero.cta1}
          </button>
          <a
            href="/cv.pdf"
            download
            className="w-full sm:w-auto border-2 border-purple text-purple px-8 py-3 rounded-lg hover:bg-purple hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple text-center"
          >
            {content.hero.cta2}
          </a>
        </div>
      </div>
    </motion.section>
  );
}
