// 解析文案中的 **高光** 标记
const parseBold = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} className="text-dark-text font-semibold">{part.slice(2, -2)}</strong>
      : part
  );

export default function LabProjectDetailed({ project, lang }) {
  const zh = lang === 'zh';
  const labels = {
    project: zh ? '项目' : 'Project',
    status: zh ? '状态' : 'Status',
    tech: zh ? '技术栈' : 'Tech stack',
    desc: zh ? '项目介绍' : 'Description',
    features: zh ? '核心亮点' : 'Key features',
    links: zh ? '链接' : 'Links'
  };

  return (
    <div className="space-y-8">
      {/* Large image (real if provided, placeholder otherwise) */}
      <div className="aspect-video bg-dark-card border border-dark-border rounded-card overflow-hidden flex items-center justify-center">
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

      {/* Content: left labels, right content */}
      <div className="space-y-8">
        {/* 项目 */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
            {labels.project}
          </div>
          <div className="sm:col-span-3 text-base text-dark-text font-medium">
            {project.fullName}
          </div>
        </div>

        {/* 状态 (optional) */}
        {project.status && (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
              {labels.status}
            </div>
            <div className="sm:col-span-3 text-[0.9375rem] text-dark-text-secondary leading-relaxed">
              {project.status}
            </div>
          </div>
        )}

        {/* 技术栈 */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
            {labels.tech}
          </div>
          <div className="sm:col-span-3 text-[0.9375rem] text-dark-text-secondary leading-relaxed">
            {project.techStack}
          </div>
        </div>

        {/* 项目介绍 */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
            {labels.desc}
          </div>
          <div className="sm:col-span-3 text-[0.9375rem] text-dark-text-secondary leading-relaxed">
            {parseBold(project.description)}
          </div>
        </div>

        {/* 核心亮点 */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
            {labels.features}
          </div>
          <div className="sm:col-span-3 space-y-4">
            {project.keyFeatures.map((feature, index) => (
              <div key={index} className="text-[0.9375rem] leading-relaxed">
                <span className="font-medium text-dark-text">{feature.title}</span>
                <span className="text-dark-text-secondary"> —— {feature.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 链接 (only show if links array is not empty) */}
        {project.links && project.links.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
              {labels.links}
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
