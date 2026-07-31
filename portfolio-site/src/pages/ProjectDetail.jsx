import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Before/After 拉杆对比:无人操作时自动缓慢左右扫动,拖拽后暂停,停手几秒恢复
function BeforeAfter({ before, after }) {
  const boxRef = useRef(null);
  const topRef = useRef(null);
  const handleRef = useRef(null);
  const posRef = useRef(50);      // 当前位置(%)
  const dirRef = useRef(1);       // 扫动方向
  const idleRef = useRef(true);   // 是否处于自动扫动
  const timerRef = useRef(null);

  const apply = (p) => {
    if (topRef.current) topRef.current.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
    if (handleRef.current) handleRef.current.style.left = `${p}%`;
  };

  useEffect(() => {
    let raf;
    const tick = () => {
      if (idleRef.current) {
        posRef.current += 0.12 * dirRef.current;
        if (posRef.current >= 82) dirRef.current = -1;
        if (posRef.current <= 18) dirRef.current = 1;
        apply(posRef.current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const setFromClientX = (clientX) => {
    const r = boxRef.current.getBoundingClientRect();
    let p = ((clientX - r.left) / r.width) * 100;
    p = Math.max(4, Math.min(96, p));
    posRef.current = p;
    apply(p);
  };

  const interact = (e) => {
    idleRef.current = false;
    setFromClientX(e.clientX);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { idleRef.current = true; }, 2500);
  };

  return (
    <div className="mt-8">
      <div
        ref={boxRef}
        className="relative mx-auto max-w-[15rem] rounded-card border border-dark-border overflow-hidden cursor-ew-resize select-none touch-none"
        onPointerDown={(e) => { boxRef.current.setPointerCapture(e.pointerId); interact(e); }}
        onPointerMove={(e) => { if (e.buttons) interact(e); }}
      >
        <img src={after.src} alt={after.alt || ''} loading="lazy" draggable="false" className="w-full block" />
        <img
          ref={topRef}
          src={before.src}
          alt={before.alt || ''}
          loading="lazy"
          draggable="false"
          className="absolute inset-0 w-full block"
          style={{ clipPath: 'inset(0 50% 0 0)' }}
        />
        <div ref={handleRef} className="absolute top-0 bottom-0 w-[2px] bg-dark-text/80" style={{ left: '50%' }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-dark-text text-dark-bg flex items-center justify-center text-sm font-bold shadow-lg">
            ⇔
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-auto max-w-[15rem] mt-2.5">
        <span className="text-xs text-dark-text-secondary/80">← {before.label}</span>
        <span className="text-xs text-dark-text-secondary/80">{after.label} →</span>
      </div>
    </div>
  );
}

// 手稿区块:档案式编号标注,无框融入页面(手稿底色与网页一致)
// 所有手稿统一宽度并在正文栏内居中,彼此左右对齐
function SketchImages({ images }) {
  return (
    <div className="mt-10 space-y-12">
      {images.map((img, j) => (
        <figure key={j} className={`mx-auto w-full ${img.wide ? '' : 'max-w-[34rem]'}`}>
          <figcaption className="text-[0.6875rem] uppercase tracking-[0.18em] text-dark-text-secondary/70 mb-3">
            {img.label}
          </figcaption>
          <img
            src={img.src}
            alt={img.alt || ''}
            loading="lazy"
            className="w-full block"
          />
        </figure>
      ))}
    </div>
  );
}

// 解析文案中的 **高光** 标记(与 AI 页一致:高光词用近白描白)
const parseBold = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="text-dark-text font-semibold">{part.slice(2, -2)}</strong>
      : part
  );

const pad2 = (n) => String(n + 1).padStart(2, '0');

// 图片组:统一 16:9 图框 + 图注;两张及以上并排
function SectionImages({ images, layout }) {
  if (layout === 'sketch') {
    return <SketchImages images={images} />;
  }
  if (layout === 'beforeAfter' && images.length === 2) {
    return <BeforeAfter before={images[0]} after={images[1]} />;
  }
  if (layout === 'phones') {
    // 竖屏截图:限制整组宽度,三张一排更紧凑,不撑满正文列
    const cols = images.length >= 3 ? 'grid-cols-3 max-w-2xl' : 'grid-cols-2 max-w-lg';
    return (
      <div className={`grid ${cols} gap-3 sm:gap-5 mt-8`}>
        {images.map((img, j) => (
          <figure key={j}>
            <img
              src={img.src}
              alt={img.alt || ''}
              loading="lazy"
              className="w-full rounded-card border border-dark-border"
            />
            {img.alt && (
              <figcaption className="text-xs text-dark-text-secondary/80 mt-2 leading-snug">
                {img.alt}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  }
  const paired = images.length > 1;
  return (
    <div className={paired ? 'grid grid-cols-2 gap-3 sm:gap-5 mt-8' : 'mt-8'}>
      {images.map((img, j) => (
        <figure key={j}>
          <div className="aspect-video rounded-card border border-dark-border overflow-hidden bg-dark-card">
            <img
              src={img.src}
              alt={img.alt || ''}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          {img.alt && (
            <figcaption className="text-xs text-dark-text-secondary/80 mt-2 leading-snug">
              {img.alt}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export default function ProjectDetail({ content, lang, slug }) {
  const project = content.work.projects.find(p => p.slug === slug);
  const backHref = lang === 'zh' ? '/work' : '/en/work';
  const backLabel = lang === 'zh' ? '← 返回作品' : '← Back to Work';
  const tocLabel = lang === 'zh' ? '目录' : 'Contents';
  const infoLabel = lang === 'zh' ? '项目信息' : 'Info';

  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);

  const sections = project?.sections || [];

  // Scrollspy:滚动时高亮当前章节
  useEffect(() => {
    if (!sections.length) return;
    const onScroll = () => {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 280);
      let idx = 0;
      sectionRefs.current.forEach((el, i) => {
        if (el && el.offsetTop <= marker) idx = i;
      });
      setActive(idx);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections.length]);

  const scrollToSection = (e, i) => {
    e.preventDefault();
    const el = sectionRefs.current[i];
    if (el) window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <Navbar content={content} lang={lang} />
        <div className="pt-page-top pb-section px-6 sm:px-8 text-center">
          <h1 className="text-2xl font-medium text-dark-text mb-4">Project not found</h1>
          <a href={backHref} className="text-dark-text-secondary hover:text-dark-text transition-colors">
            {backLabel}
          </a>
        </div>
        <Footer content={content} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar content={content} lang={lang} />

      {/* Header:低调淡出底图——封面以低透明度+模糊铺在标题背后,向下渐隐 */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative px-6 sm:px-8 pt-page-top bg-dark-bg overflow-hidden"
      >
        {project.image && (() => {
          // 每个案例可单独调底图强度:暗色封面需要更高透明度与提亮才能显形
          const hb = project.heroBackdrop || {};
          return (
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none select-none"
              style={{
                left: '-3%',
                top: '-12%',
                width: '106%',
                height: '124%',
                objectFit: 'cover',
                opacity: hb.opacity ?? 0.18,
                filter: `blur(14px) brightness(${hb.brightness ?? 1}) saturate(${hb.saturate ?? 1})`,
                WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, transparent 92%)',
                maskImage: 'linear-gradient(to bottom, #000 0%, transparent 92%)'
              }}
            />
          );
        })()}
        <div className="relative max-w-[64rem] mx-auto">
          <a
            href={backHref}
            className="inline-block text-[0.9375rem] text-dark-text-secondary hover:text-dark-text transition-colors mb-10"
          >
            {backLabel}
          </a>
          {project.tag && (
            <p className="text-sm uppercase tracking-wider text-dark-text-secondary mb-4">{project.tag}</p>
          )}
          <h1 className="text-4xl sm:text-5xl font-medium text-dark-text leading-tight mb-6">
            {project.name}
          </h1>
        </div>
      </motion.section>

      {/* 手机端:章节横条(可横滑) */}
      {sections.length > 0 && (
        <div className="lg:hidden sticky top-16 z-40 bg-dark-bg/95 backdrop-blur border-b border-dark-border">
          <div className="flex gap-2 overflow-x-auto px-6 sm:px-8 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {sections.map((s, i) => (
              <a
                key={i}
                href={`#sec-${i}`}
                onClick={(e) => scrollToSection(e, i)}
                className={`flex-none text-[0.8125rem] px-3 py-1.5 rounded-full border transition-colors ${
                  active === i
                    ? 'border-stone-500 text-dark-text bg-dark-card'
                    : 'border-dark-border text-dark-text-secondary'
                }`}
              >
                {pad2(i)} {s.heading}
              </a>
            ))}
          </div>
        </div>
      )}

      <section className="px-6 sm:px-8 pb-section bg-dark-bg">
        <div className="max-w-[64rem] mx-auto lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14 pt-6 lg:pt-10">

          {/* 桌面端:左侧固定目录 + 项目信息 */}
          {sections.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs uppercase tracking-wider text-dark-text-secondary mb-4">{tocLabel}</p>
                <nav className="space-y-1">
                  {sections.map((s, i) => (
                    <a
                      key={i}
                      href={`#sec-${i}`}
                      onClick={(e) => scrollToSection(e, i)}
                      className={`block text-[0.8125rem] leading-snug py-1.5 pl-3 border-l-2 transition-colors ${
                        active === i
                          ? 'border-dark-text text-dark-text'
                          : 'border-dark-border text-dark-text-secondary hover:text-dark-text'
                      }`}
                    >
                      <span className="tabular-nums mr-1.5">{pad2(i)}</span>
                      {s.heading}
                    </a>
                  ))}
                </nav>
                {project.facts && (
                  <div className="mt-8 pt-6 border-t border-dark-border">
                    <p className="text-xs uppercase tracking-wider text-dark-text-secondary mb-3">{infoLabel}</p>
                    <ul className="space-y-1.5">
                      {project.facts.map((fact, i) => (
                        <li key={i} className="text-[0.8125rem] text-dark-text-secondary leading-snug">{fact}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          )}

          {/* 右侧内容流 */}
          <div className={sections.length === 0 ? 'lg:col-span-2 max-w-content' : ''}>
            {/* 手机端:项目信息(桌面端在侧栏) */}
            {project.facts && (
              <div className="lg:hidden flex flex-wrap gap-x-5 gap-y-1.5 pb-6 border-b border-dark-border">
                {project.facts.map((fact, i) => (
                  <span key={i} className="text-[0.8125rem] text-dark-text-secondary">{fact}</span>
                ))}
              </div>
            )}

            {/* NDA note */}
            {project.nda && (
              <p className="text-sm text-dark-text-secondary leading-relaxed border-l-2 border-dark-border pl-4 mt-6 lg:mt-0">
                {project.nda}
              </p>
            )}

            {/* Case intro */}
            {project.caseIntro && (
              <p className="text-[1.0625rem] text-dark-text leading-relaxed whitespace-pre-line mt-10">
                {project.caseIntro}
              </p>
            )}

            {/* Case sections */}
            {sections.length > 0 ? (
              <div className="mt-14 space-y-16">
                {sections.map((section, i) => (
                  <section
                    key={i}
                    id={`sec-${i}`}
                    ref={(el) => (sectionRefs.current[i] = el)}
                  >
                    <p className="text-xs tracking-[0.14em] text-dark-text-secondary/80 tabular-nums mb-2">{pad2(i)}</p>
                    <h2 className="text-xl sm:text-2xl font-medium text-dark-text mb-5">
                      {section.heading}
                    </h2>
                    <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed whitespace-pre-line">
                      {parseBold(section.body)}
                    </p>
                    {section.images && (
                      <SectionImages images={section.images} layout={section.imageLayout} />
                    )}
                    {/* 全览图:插在指定章节末尾 */}
                    {project.overviewImage?.afterSection === i && (
                      <div className="mt-10">
                        <img
                          src={project.overviewImage.src}
                          alt={project.overviewImage.alt}
                          loading="lazy"
                          className="w-full rounded-card border border-dark-border"
                        />
                        {project.overviewImage.caption && (
                          <p className="text-xs text-dark-text-secondary/80 mt-3 text-center tracking-wide">
                            {project.overviewImage.caption}
                          </p>
                        )}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            ) : (
              project.fullDescription && (
                <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed whitespace-pre-line mt-12">
                  {project.fullDescription}
                </p>
              )
            )}

            {/* 全部界面一览图(未指定章节时,放在底部) */}
            {project.overviewImage && project.overviewImage.afterSection === undefined && (
              <div className="mt-16">
                <img
                  src={project.overviewImage.src}
                  alt={project.overviewImage.alt}
                  loading="lazy"
                  className="w-full rounded-card border border-dark-border"
                />
                {project.overviewImage.caption && (
                  <p className="text-xs text-dark-text-secondary/80 mt-3 text-center tracking-wide">
                    {project.overviewImage.caption}
                  </p>
                )}
              </div>
            )}

            {/* GitHub link */}
            {project.github && (
              <div className="mt-16 pt-8 border-t border-dark-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.9375rem] text-dark-text hover:text-dark-text-secondary transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  {content.work.viewCode}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer content={content} />
    </div>
  );
}
