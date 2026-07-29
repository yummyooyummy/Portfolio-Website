export default function ProjectCard({ project, lang }) {
  return (
    <a
      href={lang === 'zh' ? `/work/${project.slug}` : `/en/work/${project.slug}`}
      className="block group"
    >
      {/* Clean image (real image if provided, placeholder otherwise), rounded, no overlay/text */}
      <div className="aspect-video bg-dark-card border border-dark-border rounded-card overflow-hidden flex items-center justify-center mb-5 group-hover:shadow-card-subtle transition-shadow">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-dark-text-secondary text-lg font-medium opacity-60">
            {project.name}
          </span>
        )}
      </div>

      {/* Meta row: source · tag */}
      <div className="flex items-center mb-3">
        <span className="text-[0.9375rem] text-dark-text-secondary font-normal">
          {project.source || project.tag}
        </span>
      </div>

      {/* Large title */}
      <h3 className="text-2xl sm:text-3xl font-medium text-dark-text leading-tight group-hover:text-dark-text-secondary transition-colors">
        {project.cardTitle || project.name}
      </h3>
    </a>
  );
}
