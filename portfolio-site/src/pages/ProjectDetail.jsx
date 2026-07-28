import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectDetail({ content, lang, slug }) {
  const project = content.work.projects.find(p => p.slug === slug);
  const backHref = lang === 'zh' ? '/work' : '/en/work';
  const backLabel = lang === 'zh' ? '← 返回作品' : '← Back to Work';

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-bg">
        <Navbar content={content} lang={lang} />
        <div className="pt-page-top pb-section px-6 sm:px-8 text-center">
          <h1 className="text-2xl font-medium text-dark-text mb-4">Project not found</h1>
          <a href={backHref} className="text-dark-text-secondary hover:text-dark-text transition-colors">
            {backLabel}
          </a>
        </div>
        <Footer content={content} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar content={content} lang={lang} />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 sm:px-8 pt-page-top pb-section bg-dark-bg"
      >
        <div className="max-w-content mx-auto">
          {/* Back link */}
          <a
            href={backHref}
            className="inline-block text-[0.9375rem] text-dark-text-secondary hover:text-dark-text transition-colors mb-10"
          >
            {backLabel}
          </a>

          {/* Header */}
          {project.tag && (
            <p className="text-sm uppercase tracking-wider text-dark-text-secondary mb-4">{project.tag}</p>
          )}
          <h1 className="text-4xl sm:text-5xl font-medium text-dark-text leading-tight mb-8">
            {project.name}
          </h1>

          {/* Facts row */}
          {project.facts && (
            <div className="flex flex-wrap gap-x-6 gap-y-2 pb-8 border-b border-dark-border">
              {project.facts.map((fact, i) => (
                <span key={i} className="text-sm text-dark-text-secondary">{fact}</span>
              ))}
            </div>
          )}

          {/* NDA note */}
          {project.nda && (
            <p className="text-sm text-dark-text-secondary leading-relaxed border-l-2 border-dark-border pl-4 mt-8">
              {project.nda}
            </p>
          )}

          {/* Case intro */}
          {project.caseIntro && (
            <p className="text-[1.0625rem] text-dark-text leading-relaxed whitespace-pre-line mt-12">
              {project.caseIntro}
            </p>
          )}

          {/* Case sections */}
          {project.sections ? (
            <div className="mt-16 space-y-16">
              {project.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="text-xl sm:text-2xl font-medium text-dark-text mb-5">
                    {section.heading}
                  </h2>
                  <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed whitespace-pre-line">
                    {section.body}
                  </p>
                  {section.images && (
                    <div
                      className={
                        section.imageLayout === 'phones'
                          ? 'grid grid-cols-2 gap-4 sm:gap-6 mt-8'
                          : 'mt-8 space-y-6'
                      }
                    >
                      {section.images.map((img, j) => (
                        <img
                          key={j}
                          src={img.src}
                          alt={img.alt || ''}
                          loading="lazy"
                          className="w-full rounded-card border border-dark-border"
                        />
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          ) : (
            project.fullDescription && (
              <p className="text-[0.9375rem] text-dark-text-secondary leading-relaxed whitespace-pre-line mt-12">
                {project.fullDescription}
              </p>
            )
          )}

          {/* GitHub link */}
          {project.github && (
            <div className="mt-16 pt-8 border-t border-dark-border">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.9375rem] text-dark-text hover:text-dark-text-secondary transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                {content.work.viewCode}
              </a>
            </div>
          )}
        </div>
      </motion.section>

      <Footer content={content} />
    </div>
  );
}
