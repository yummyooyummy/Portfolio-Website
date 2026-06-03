import { useState, useEffect } from 'react';

export default function Navbar({ content, lang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Active path is resolved on the client after mount, so SSR + first paint
  // render all-gray (no mismatch); the current page's item then turns white.
  const [activePath, setActivePath] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    setActivePath(path.startsWith('/en/') ? path.slice(3) : path);
  }, []);

  // Get current path and construct language toggle URL
  const getCurrentPath = () => {
    if (typeof window === 'undefined') return '/';
    const path = window.location.pathname;
    // Remove /en/ prefix if present
    return path.startsWith('/en/') ? path.slice(3) : path;
  };

  const currentPath = getCurrentPath();
  const otherLangHref = lang === 'zh' ? `/en${currentPath}` : currentPath || '/';

  // Nav items (shared by desktop + mobile)
  const navItems = [
    { key: 'about', href: lang === 'zh' ? '/about' : '/en/about', base: '/about', label: content.nav.about },
    { key: 'work', href: lang === 'zh' ? '/work' : '/en/work', base: '/work', label: content.nav.work },
    { key: 'lab', href: lang === 'zh' ? '/lab' : '/en/lab', base: '/lab', label: content.nav.lab },
    { key: 'ai', href: lang === 'zh' ? '/ai' : '/en/ai', base: '/ai', label: content.nav.ai },
    { key: 'contact', href: lang === 'zh' ? '/contact' : '/en/contact', base: '/contact', label: content.nav.contact },
  ];

  const isActive = (base) =>
    activePath != null && (activePath === base || activePath.startsWith(base + '/'));

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark-bg border-b border-dark-border z-50 h-16">
      <div className="max-w-content mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
        {/* Logo/Name — avatar placeholder + name, links to home */}
        <a
          href={lang === 'zh' ? '/' : '/en/'}
          className="flex items-center gap-3 focus:outline-none rounded-full"
          aria-label={content.nav.name}
        >
          <span className="w-8 h-8 rounded-full bg-dark-card border border-dark-border flex-shrink-0" aria-hidden="true" />
          <span className="font-medium text-lg text-dark-text">{content.nav.name}</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`font-normal transition-colors hover:text-dark-text focus:outline-none ${
                isActive(item.base) ? 'text-dark-text' : 'text-dark-text-secondary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Language Toggle */}
        <a
          href={otherLangHref}
          className="text-dark-text-secondary hover:text-dark-text transition-colors cursor-pointer focus:outline-none px-2 py-1 font-normal"
          aria-label="Toggle language"
          hrefLang={lang === 'zh' ? 'en' : 'zh'}
        >
          {lang === 'zh' ? 'EN' : '中'}
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-dark-text-secondary hover:text-dark-text transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-bg border-t border-dark-border animate-slideDown">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`px-4 py-4 hover:text-dark-text transition-colors text-left font-normal ${
                  isActive(item.base) ? 'text-dark-text' : 'text-dark-text-secondary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
