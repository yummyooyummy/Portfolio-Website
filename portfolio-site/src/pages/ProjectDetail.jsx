import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectDetail({ content, lang, slug }) {
  const project = content.work.projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar content={content} lang={lang} />
        <div className="pt-16 py-12 px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <a href={lang === 'zh' ? '/work' : '/en/work'} className="text-purple hover:underline">
            ← {lang === 'zh' ? '返回作品列表' : 'Back to Work'}
          </a>
        </div>
        <Footer content={content} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar content={content} lang={lang} />

      {/* Add top spacing to account for fixed navbar */}
      <div className="pt-16">
        <section className="py-12 sm:py-20 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back link */}
            <a
              href={lang === 'zh' ? '/work' : '/en/work'}
              className="inline-block text-purple hover:underline mb-8"
            >
              ← {lang === 'zh' ? '返回作品列表' : 'Back to Work'}
            </a>

            {/* Project header */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{project.name}</h1>
            {project.tag && (
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-8">{project.tag}</p>
            )}

            {/* Full description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8">
                {project.fullDescription}
              </p>
            </div>

            {/* GitHub link if available */}
            {project.github && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple hover:underline focus:outline-none focus:ring-2 focus:ring-purple rounded"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  {content.work.viewCode}
                </a>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer content={content} />
    </div>
  );
}
