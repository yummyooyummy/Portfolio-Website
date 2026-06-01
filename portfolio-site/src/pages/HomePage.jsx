import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Footer from '../components/Footer';

export default function HomePage({ content, lang }) {
  return (
    <div className="min-h-screen">
      <Navbar content={content} lang={lang} />
      <Hero content={content} />
      <Stats content={content} />

      {/* Quick navigation section */}
      <section className="py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href={lang === 'zh' ? '/about' : '/en/about'}
              className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{content.nav.about}</h3>
              <p className="text-gray-600 text-sm">
                {lang === 'zh' ? '了解我的背景与经历' : 'Learn about my background'}
              </p>
            </a>

            <a
              href={lang === 'zh' ? '/work' : '/en/work'}
              className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{content.nav.work}</h3>
              <p className="text-gray-600 text-sm">
                {lang === 'zh' ? '查看我的作品集' : 'View my portfolio'}
              </p>
            </a>

            <a
              href={lang === 'zh' ? '/lab' : '/en/lab'}
              className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{content.nav.lab}</h3>
              <p className="text-gray-600 text-sm">
                {lang === 'zh' ? '探索实验性项目' : 'Explore experimental projects'}
              </p>
            </a>

            <a
              href={lang === 'zh' ? '/contact' : '/en/contact'}
              className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{content.nav.contact}</h3>
              <p className="text-gray-600 text-sm">
                {lang === 'zh' ? '与我取得联系' : 'Get in touch'}
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer content={content} />
    </div>
  );
}
