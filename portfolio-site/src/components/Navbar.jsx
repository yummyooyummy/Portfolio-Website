import { useState } from 'react';

export default function Navbar({ content, lang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const otherLangHref = lang === 'zh' ? '/en/' : '/';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
        {/* Logo/Name */}
        <div className="font-bold text-lg">{content.nav.name}</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:text-purple transition-colors focus:outline-none focus:ring-2 focus:ring-purple"
          >
            {content.nav.about}
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="text-gray-700 hover:text-purple transition-colors focus:outline-none focus:ring-2 focus:ring-purple"
          >
            {content.nav.work}
          </button>
          <button
            onClick={() => scrollToSection('lab')}
            className="text-gray-700 hover:text-purple transition-colors focus:outline-none focus:ring-2 focus:ring-purple"
          >
            {content.nav.lab}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-700 hover:text-purple transition-colors focus:outline-none focus:ring-2 focus:ring-purple"
          >
            {content.nav.contact}
          </button>
        </div>

        {/* Language Toggle */}
        <a
          href={otherLangHref}
          className="text-gray-600 hover:text-purple transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple px-2 py-1"
          aria-label="Toggle language"
          hrefLang={lang === 'zh' ? 'en' : 'zh'}
        >
          {lang === 'zh' ? 'EN' : '中'}
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
          <div className="flex flex-col py-4">
            <button
              onClick={() => scrollToSection('about')}
              className="px-4 py-4 text-gray-700 hover:bg-gray-50 hover:text-purple transition-colors text-left"
            >
              {content.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="px-4 py-4 text-gray-700 hover:bg-gray-50 hover:text-purple transition-colors text-left"
            >
              {content.nav.work}
            </button>
            <button
              onClick={() => scrollToSection('lab')}
              className="px-4 py-4 text-gray-700 hover:bg-gray-50 hover:text-purple transition-colors text-left"
            >
              {content.nav.lab}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-4 text-gray-700 hover:bg-gray-50 hover:text-purple transition-colors text-left"
            >
              {content.nav.contact}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
