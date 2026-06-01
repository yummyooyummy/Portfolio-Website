import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WorkPage({ content, lang }) {
  return (
    <div className="min-h-screen">
      <Navbar content={content} lang={lang} />

      {/* Add top spacing to account for fixed navbar */}
      <div className="pt-16">
        <section className="py-12 sm:py-20 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-center">{content.work.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {content.work.projects.map((project, index) => (
                <a
                  key={index}
                  href={lang === 'zh' ? `/work/${project.slug}` : `/en/work/${project.slug}`}
                  className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow flex flex-col"
                >
                  <h2 className="text-xl font-bold mb-1">{project.name}</h2>
                  {project.tag && (
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">{project.tag}</p>
                  )}
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <span className="text-purple hover:underline">
                      {content.work.viewDetails}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer content={content} />
    </div>
  );
}
