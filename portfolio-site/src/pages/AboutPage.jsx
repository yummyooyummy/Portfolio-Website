import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage({ content, lang }) {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar content={content} lang={lang} />

      {/* Top spacing accounts for fixed navbar (internal page spacing) */}
      <div className="pt-page-top">
        <About content={content} lang={lang} />
      </div>

      <Footer content={content} />
    </div>
  );
}
