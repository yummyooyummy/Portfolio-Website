import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage({ content, lang }) {
  return (
    <div className="min-h-screen">
      <Navbar content={content} lang={lang} />
      <div className="pt-16">
        <Contact content={content} />
      </div>
      <Footer content={content} />
    </div>
  );
}
