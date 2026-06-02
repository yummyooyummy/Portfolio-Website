import Navbar from '../components/Navbar';
import Lab from '../components/Lab';
import Footer from '../components/Footer';

export default function LabPage({ content, lang }) {
  return (
    <div className="min-h-screen">
      <Navbar content={content} lang={lang} />
      <div className="pt-16">
        <Lab content={content} />
      </div>
      <Footer content={content} />
    </div>
  );
}
