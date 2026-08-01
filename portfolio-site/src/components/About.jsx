import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ToolsBand from './ToolsBand';

// 解析文案中的 **高光** 标记(与 AI 页一致:高光词用近白描白)
const parseBold = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="text-dark-text font-semibold">{part.slice(2, -2)}</strong>
      : part
  );

export default function About({ content, lang }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05, margin: "-50px" });

  const a = content.about;

  // Per-language heading sizing (Chinese a touch smaller — denser glyphs)
  const headingSize = lang === 'zh'
    ? 'text-3xl sm:text-4xl md:text-[2.625rem]'
    : 'text-3xl sm:text-4xl md:text-5xl';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-dark-bg"
    >
      {/* 1. Intro: label + heading + paragraph + photo (page top, no top border) */}
      <section id="about" className="px-6 sm:px-8 pb-section">
        <div className="max-w-content mx-auto">
          <p className="text-sm uppercase tracking-wider text-dark-text-secondary mb-6 font-normal">
            {a.label}
          </p>
          <h1 className={`${headingSize} font-medium leading-110 tracking-tighter-custom text-dark-text mb-8`}>
            {a.heading}
          </h1>
          <p className="text-[0.9375rem] sm:text-[0.9375rem] text-dark-text-secondary leading-relaxed whitespace-pre-line mb-12">
            {parseBold(a.intro)}
          </p>

          {/* 个人照片 — 宽幅、圆角 */}
          <div className="aspect-[16/10] bg-dark-card border border-dark-border rounded-card overflow-hidden">
            <img
              src="/profile-photo.jpg"
              alt={lang === 'zh' ? '郑雨晴' : 'Yuqing Zheng'}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. Experience */}
      <section className="px-6 sm:px-8 py-section border-t border-dark-border">
        <div className="max-w-content mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium text-dark-text mb-12 leading-tight">
            {a.experienceTitle}
          </h2>
          <div className="divide-y divide-dark-border">
            {a.experiences.map((exp, index) => {
              // 经历 logo 图片映射
              const logoMap = {
                0: '/exp-independent.png',
                1: '/exp-tencent.png',
                2: '/exp-pku.png'
              };

              return (
                <div key={index} className="flex gap-5 py-10 first:pt-0 last:pb-0">
                  {/* Logo 放大约 1/3: 48px → 64px */}
                  <div className="w-16 h-16 rounded-xl bg-dark-card border border-dark-border flex-shrink-0 overflow-hidden">
                    <img
                      src={logoMap[index]}
                      alt={exp.org}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-dark-text leading-snug">
                          {exp.org}
                        </h3>
                        {exp.role && (
                          <p className="text-[0.9375rem] text-dark-text-secondary font-normal leading-snug mt-1">
                            {exp.role}
                          </p>
                        )}
                      </div>
                      <span className="text-[0.9375rem] text-dark-text-secondary font-normal flex-shrink-0 mt-1">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed mt-4 whitespace-pre-line">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Education */}
      <section className="px-6 sm:px-8 py-section border-t border-dark-border">
        <div className="max-w-content mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium text-dark-text mb-4 leading-tight">
            {a.educationTitle}
          </h2>
          <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed mb-12">
            {a.educationIntro}
          </p>
          <div className="space-y-8">
            {a.education.map((edu, index) => {
              const eduLogoMap = { 0: '/edu-uts.png', 1: '/edu-mcmaster.png' };
              return (
                <div key={index} className="flex gap-5">
                  {/* 校徽方块,白底铺满,与经历区 logo 同一视觉语言 */}
                  <div className="w-16 h-16 rounded-xl bg-dark-card border border-dark-border flex-shrink-0 overflow-hidden">
                    <img
                      src={eduLogoMap[index]}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-medium text-dark-text">
                        {edu.school}
                      </h3>
                      <p className="text-[0.9375rem] text-dark-text-secondary font-normal">
                        {edu.degree} · {edu.field}
                      </p>
                    </div>
                    <span className="text-[0.9375rem] text-dark-text-secondary font-normal flex-shrink-0">
                      {edu.period}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Tool stack — auto-scrolling band (same mechanic as AI lessons band) */}
      <section className="px-0 py-section border-t border-dark-border overflow-hidden">
        <div className="px-6 sm:px-8">
          <div className="max-w-content mx-auto">
            <h2 className="text-2xl sm:text-3xl font-medium text-dark-text mb-4 leading-tight">
              {a.toolsTitle}
            </h2>
            <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed mb-12">
              {a.toolsDesc}
            </p>
          </div>
          {/* 滚动带与正文同宽 */}
          <div className="max-w-content mx-auto">
            <ToolsBand tools={a.tools} />
          </div>
        </div>
      </section>

      {/* 5. Off the clock */}
      <section className="px-6 sm:px-8 py-section border-t border-dark-border">
        <div className="max-w-content mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium text-dark-text mb-4 leading-tight">
            {a.offClockTitle}
          </h2>
          <p className="text-[0.9375rem] sm:text-[0.9375rem] text-dark-text-secondary leading-relaxed mb-12">
            {a.offClockText}
          </p>
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {['/life-skiing.png', '/life-painting.png', '/life-pottery.png'].map((imgSrc, i) => {
              const caption = lang === 'zh' ? ['滑雪', '画画', '陶艺'][i] : ['Skiing', 'Painting', 'Pottery'][i];
              return (
                <div key={i} className="group">
                  <div className="aspect-[4/5] bg-dark-card border border-dark-border rounded-card overflow-hidden">
                    <img
                      src={imgSrc}
                      alt={caption}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
