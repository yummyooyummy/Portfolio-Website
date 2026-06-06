export default function LabProjectDetailed({ project, lang }) {
  return (
    <div className="space-y-8">
      {/* Large image placeholder (line 4-8) */}
      <div className="aspect-video bg-dark-card border border-dark-border rounded-card overflow-hidden flex items-center justify-center">
        <span className="text-dark-text-secondary text-lg font-medium opacity-60">
          {project.name}
        </span>
      </div>

      {/* Content: left labels, right content */}
      <div className="space-y-8">
        {/* PROJECT */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
            Project
          </div>
          <div className="sm:col-span-3 text-base text-dark-text font-medium">
            {project.fullName}
          </div>
        </div>

        {/* TECH STACK */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
            Tech stack
          </div>
          <div className="sm:col-span-3 text-base text-dark-text leading-relaxed">
            {project.techStack}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
            Description
          </div>
          <div className="sm:col-span-3 text-base text-dark-text leading-relaxed">
            {project.description}
          </div>
        </div>

        {/* KEY FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
            Key features
          </div>
          <div className="sm:col-span-3 space-y-4">
            {project.keyFeatures.map((feature, index) => (
              <div key={index} className="text-base text-dark-text leading-relaxed">
                <span className="font-bold">{feature.title}:</span>
                <span> {feature.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* LINKS (only show if links array is not empty) */}
        {project.links && project.links.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
              Links
            </div>
            <div className="sm:col-span-3 flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.9375rem] text-dark-text hover:text-dark-text-secondary transition-colors focus:outline-none"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
