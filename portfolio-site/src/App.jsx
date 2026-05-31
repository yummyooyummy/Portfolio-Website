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

function detectLangFromPath() {
  if (typeof window === 'undefined') return 'zh';
  return window.location.pathname.startsWith('/en') ? 'en' : 'zh';
}

function App({ initialLang }) {
  const [lang] = useState(() => initialLang ?? detectLangFromPath());

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const currentContent = content[lang];

  return (
    <div className="min-h-screen">
      <Navbar content={currentContent} lang={lang} />
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
