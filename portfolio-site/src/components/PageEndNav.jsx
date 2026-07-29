// 页尾导流:对称一左一右 —— 左"← 返回主页",右"下一页 →",同字号,无分割线
// 动线:关于 → 作品 → 试验场 → AI 实践 → 联系 → (循环回作品)
const NEXT_MAP = {
  about: { zh: { label: '作品', href: '/work' }, en: { label: 'Work', href: '/en/work' } },
  work: { zh: { label: '试验场', href: '/lab' }, en: { label: 'Lab', href: '/en/lab' } },
  lab: { zh: { label: 'AI 实践', href: '/ai' }, en: { label: 'AI Practice', href: '/en/ai' } },
  ai: { zh: { label: '联系', href: '/contact' }, en: { label: 'Contact', href: '/en/contact' } },
  contact: null
};

export default function PageEndNav({ lang, page }) {
  const zh = lang === 'zh';
  const homeHref = zh ? '/' : '/en/';
  const next = NEXT_MAP[page] ? NEXT_MAP[page][zh ? 'zh' : 'en'] : null;
  const linkCls =
    'group inline-flex items-baseline gap-2 text-[0.9375rem] font-normal text-dark-text-secondary hover:text-dark-text transition-colors leading-tight';

  return (
    <section className="px-6 sm:px-8 pb-section pt-10 bg-dark-bg">
      <div className="max-w-content mx-auto flex items-baseline justify-between">
        <a href={homeHref} className={linkCls}>
          <span className="transition-transform duration-300 group-hover:-translate-x-1.5">←</span>
          {zh ? '返回主页' : 'Back to home'}
        </a>
        {next && (
          <a href={next.href} className={linkCls}>
            {next.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        )}
      </div>
    </section>
  );
}
