import Navbar from '../components/Navbar';
import About from '../components/About';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

export default function AboutPage({ content, lang }) {
  return (
    <div className="min-h-screen">
      <Navbar content={content} lang={lang} />

      {/* Add top spacing to account for fixed navbar */}
      <div className="pt-16">
        <Stats content={content} />
        <About content={content} />
      </div>

      <Footer content={content} />
    </div>
  );
}
