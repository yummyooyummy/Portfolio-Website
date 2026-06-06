import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

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
          <h1 className={`${headingSize} font-medium leading-110 tracking-tighter-custom text-dark-text mb-8 max-w-2xl`}>
            {a.heading}
          </h1>
          <p className="text-[0.9375rem] sm:text-[0.9375rem] text-dark-text-secondary leading-relaxed whitespace-pre-line mb-12">
            {a.intro}
          </p>

          {/* Photo placeholder — wide, rounded */}
          <div className="aspect-[16/10] bg-dark-card border border-dark-border rounded-card overflow-hidden flex items-center justify-center">
            <span className="text-dark-text-secondary text-sm opacity-50">
              {lang === 'zh' ? '照片占位' : 'Photo'}
            </span>
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
                          <p className="text-lg font-bold text-dark-text leading-snug">
                            {exp.role}
                          </p>
                        )}
                      </div>
                      <span className="text-[0.9375rem] text-dark-text-secondary font-normal flex-shrink-0 mt-1">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed mt-4">
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
            {a.education.map((edu, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
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
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tool stack — large icon on top, name below */}
      <section className="px-6 sm:px-8 py-section border-t border-dark-border">
        <div className="max-w-content mx-auto">
          <h2 className="text-2xl sm:text-3xl font-medium text-dark-text mb-4 leading-tight">
            {a.toolsTitle}
          </h2>
          <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed mb-12">
            {a.toolsDesc}
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-8 gap-y-10">
            {a.tools.map((tool, index) => {
              // 工具图标映射
              const iconMap = {
                'Figma': '/tool-figma.png',
                'Sketch': '/tool-sketch.png',
                'Principle': '/tool-principle.png',
                'Claude': '/tool-claude.png',
                'Cursor': '/tool-cursor.png',
                '微信开发者工具': '/tool-wechat-devtools.png',
                'WeChat DevTools': '/tool-wechat-devtools.png',
                'Photoshop': '/tool-photoshop.png',
                'Illustrator': '/tool-illustrator.png',
                'Claude Code': '/tool-claude-code.png',
                'Midjourney': '/tool-midjourney.png'
              };

              return (
                <div key={index} className="flex flex-col items-center gap-3">
                  {/* Icon 图片 — large rounded square */}
                  <div className="w-16 h-16 rounded-2xl bg-dark-card border border-dark-border flex-shrink-0 overflow-hidden">
                    <img
                      src={iconMap[tool]}
                      alt={tool}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[0.9375rem] text-dark-text-secondary font-normal text-center leading-snug">
                    {tool}
                  </span>
                </div>
              );
            })}
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {['/life-skiing.png', '/life-painting.png', '/life-pottery.png'].map((imgSrc, i) => (
              <div
                key={i}
                className="aspect-[4/5] bg-dark-card border border-dark-border rounded-card overflow-hidden"
              >
                <img
                  src={imgSrc}
                  alt={lang === 'zh' ? ['滑雪', '画画', '陶艺'][i] : ['Skiing', 'Painting', 'Pottery'][i]}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
