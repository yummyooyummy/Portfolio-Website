import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SelectWork from '../components/SelectWork';
import TwoColumnIntro from '../components/TwoColumnIntro';
import Footer from '../components/Footer';

export default function HomePage({ content, lang }) {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar content={content} lang={lang} />

      {/* Hero: headline + subtitle + buttons/social + stat cards (one tight group) */}
      <Hero content={content} lang={lang} />

      {/* Select Work - 3 project cards */}
      <SelectWork content={content} lang={lang} />

      {/* 关于 / AI 实践 / 试验场 三块合一的导流区 */}
      <TwoColumnIntro content={content} lang={lang} />

      {/* Footer with social icons */}
      <Footer content={content} />
    </div>
  );
}
