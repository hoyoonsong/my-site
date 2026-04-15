import { projects, GITHUB_PROFILE } from '../data/projects'

function ProjectMedia({
  title,
  imageSrc,
  imageAlt,
  demoUrl,
  placeholderTone = 1,
}: {
  title: string
  imageSrc?: string
  imageAlt?: string
  demoUrl: string
  placeholderTone?: 1 | 2 | 3 | 4
}) {
  if (imageSrc) {
    return (
      <a
        href={demoUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="project-thumb project-thumb--linked"
        aria-label={`Open demo: ${title}`}
      >
        <img src={imageSrc} alt={imageAlt ?? ''} loading="lazy" />
      </a>
    )
  }

  return (
    <a
      href={demoUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={`project-thumb project-thumb--placeholder project-thumb--tone-${placeholderTone} project-thumb--linked`}
      aria-label={`Open demo: ${title}`}
    >
      <span className="project-thumb__label">{title}</span>
      <span className="project-thumb__hint">Open demo</span>
    </a>
  )
}

export function Projects() {
  return (
    <div className="page projects-page">
      <header className="projects-intro">
        <h1 className="page-title">Projects</h1>
        <p className="projects-lede">
          Selected work with live demos and visuals. More code and experiments
          live on{' '}
          <a href={GITHUB_PROFILE} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          .
        </p>
      </header>

      <ul className="project-grid">
        {projects.map((project) => (
          <li key={project.demoUrl}>
            <article className="project-card">
              <ProjectMedia
                title={project.title}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                demoUrl={project.demoUrl}
                placeholderTone={project.placeholderTone}
              />
              <div className="project-card-body">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a
                    href={project.demoUrl}
                    className="project-action project-action--primary"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {project.demoLabel ?? 'Live demo'}
                  </a>
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      className="project-action project-action--ghost"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Source
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
