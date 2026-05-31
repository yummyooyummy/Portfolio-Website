import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Work from './components/Work';
import Lab from './components/Lab';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { content } from './content';

function App() {
  const [lang, setLang] = useState('zh');

  // Read language from URL parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'en') {
      setLang('en');
    } else {
      setLang('zh');
    }
  }, []);

  // Toggle language and update URL
  const handleLanguageChange = () => {
    const newLang = lang === 'zh' ? 'en' : 'zh';
    setLang(newLang);

    // Update URL parameter
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);
  };

  const currentContent = content[lang];

  return (
    <div className="min-h-screen">
      <Navbar
        content={currentContent}
        lang={lang}
        onLanguageChange={handleLanguageChange}
      />
      <Hero content={currentContent} />
      <Stats content={currentContent} />
      <About content={currentContent} />
      <Work content={currentContent} />
      <Lab content={currentContent} />
      <Contact content={currentContent} />
      <Footer content={currentContent} />
    </div>
  );
}

export default App;
