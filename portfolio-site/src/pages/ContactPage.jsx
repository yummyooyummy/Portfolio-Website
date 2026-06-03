import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage({ content, lang }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" });

  const c = content.contact;

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar content={content} lang={lang} />

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-4 sm:px-8 pt-hero-top pb-section bg-dark-bg"
      >
        <div className="max-w-content mx-auto">
          {/* Label + heading + intro (same structure as About page top) */}
          <p className="text-sm uppercase tracking-wider text-dark-text-secondary mb-6 font-normal">
            {c.label}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-110 tracking-tighter-custom text-dark-text mb-8 max-w-2xl">
            {c.heading}
          </h1>
          <p className="text-base sm:text-lg text-dark-text-secondary leading-relaxed mb-16 max-w-2xl">
            {c.intro}
          </p>

          {/* Discussion topics heading */}
          <h2 className="text-lg font-medium text-dark-text mb-8">
            {c.discussTitle}
          </h2>

          {/* Three topic bullets */}
          <div className="space-y-6 mb-16">
            {c.topics.map((topic, index) => (
              <div key={index}>
                <span className="text-base font-bold text-dark-text">{topic.title}</span>
                <span className="text-base text-dark-text-secondary"> {topic.desc}</span>
              </div>
            ))}
          </div>

          {/* Closing text */}
          <p className="text-sm text-dark-text-secondary mb-12">
            {c.closingText}
          </p>

          {/* WeChat QR code placeholder (line 59-64) */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-48 h-48 bg-dark-card border border-dark-border rounded-2xl flex items-center justify-center mb-4">
              <span className="text-dark-text-secondary text-sm opacity-50">QR Code</span>
            </div>
            <p className="text-sm text-dark-text-secondary">
              {c.wechatLabel}
            </p>
          </div>

          {/* Social links row (line 68-88) */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="mailto:zhengyuqingsherry@gmail.com"
              className="text-dark-text-secondary hover:text-dark-text transition-colors focus:outline-none"
            >
              zhengyuqingsherry@gmail.com
            </a>
            <a
              href="https://github.com/yummyooyummy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-text-secondary hover:text-dark-text transition-colors focus:outline-none"
            >
              github.com/yummyooyummy
            </a>
            <a
              href="https://www.linkedin.com/in/yuqing-zheng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-text-secondary hover:text-dark-text transition-colors focus:outline-none"
            >
              linkedin.com/in/yuqing-zheng
            </a>
          </div>
        </div>
      </motion.section>

      <Footer content={content} />
    </div>
  );
}
