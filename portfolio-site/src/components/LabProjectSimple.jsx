export default function LabProjectSimple({ project, lang }) {
  return (
    <div className="space-y-8">
      {/* Large image placeholder (line 4-8) */}
      <div className="aspect-video bg-dark-card border border-dark-border rounded-card overflow-hidden flex items-center justify-center">
        <span className="text-dark-text-secondary text-lg font-medium opacity-60">
          {project.name}
        </span>
      </div>

      {/* Only PROJECT row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="text-sm uppercase tracking-wider text-dark-text-secondary font-normal">
          Project
        </div>
        <div className="sm:col-span-3 text-base text-dark-text font-medium">
          {project.fullName}
        </div>
      </div>
    </div>
  );
}
