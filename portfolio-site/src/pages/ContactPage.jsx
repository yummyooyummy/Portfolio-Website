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

      {/* Top spacing accounts for fixed navbar (same structure as AboutPage) */}
      <div className="pt-page-top">
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="px-4 sm:px-8 pb-section bg-dark-bg"
        >
          <div className="max-w-content mx-auto">
          {/* Label + heading + intro (same structure as About page top) */}
          <p className="text-sm uppercase tracking-wider text-dark-text-secondary mb-6 font-normal">
            {c.label}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-110 tracking-tighter-custom text-dark-text mb-8 max-w-2xl">
            {c.heading}
          </h1>
          <p className="text-[0.9375rem] sm:text-[0.9375rem] text-dark-text-secondary leading-relaxed mb-16">
            {c.intro}
          </p>

          {/* Discussion topics heading */}
          <h2 className="text-lg font-medium text-dark-text mb-4">
            {c.discussTitle}
          </h2>

          {/* Merged discussion paragraph with highlighted keywords */}
          <p className="text-[0.9375rem] leading-relaxed">
            {c.discussHighlights.map((segment, index) => (
              <span
                key={index}
                className={segment.bold ? "font-bold text-dark-text" : "text-dark-text-secondary"}
              >
                {segment.text}
              </span>
            ))}
          </p>
          </div>
        </motion.section>
      </div>

      {/* Divider section - separates description from contact section */}
      <div className="px-4 sm:px-8 py-divider border-t border-dark-border bg-dark-bg">
        <div className="max-w-content mx-auto"></div>
      </div>

      {/* Contact methods section */}
      <div className="px-4 sm:px-8 pb-section bg-dark-bg">
        <div className="max-w-content mx-auto">
          {/* Closing text - centered */}
          <p className="text-[0.9375rem] text-dark-text-secondary mb-12 text-center">
            {c.closingText}
          </p>

          {/* WeChat QR code - centered */}
          <div className="flex flex-col items-center mb-12">
            <img
              src="/wechat-qr.png"
              alt="WeChat QR Code"
              className="w-32 h-32 rounded-2xl opacity-80"
            />
          </div>

          {/* Social links row - centered */}
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
      </div>

      <Footer content={content} />
    </div>
  );
}
