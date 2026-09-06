import ProgressBar from './ProgressBar.jsx'

export default function ProjectCard({ project }) {
  return (
    <article className="bg-ink-900 border border-ink-700 rounded-xl p-5 flex flex-col gap-4 hover:border-ink-600 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium text-mist-100">{project.name}</h3>
          <p className="text-sm text-mist-400 mt-1 leading-snug">{project.description}</p>
        </div>
        <span className="shrink-0 text-xs font-mono px-2 py-1 rounded-md bg-ink-800 text-mist-300 border border-ink-700">
          {project.tag}
        </span>
      </div>

      <ProgressBar value={project.progress} label={`${project.doneCount}/${project.taskCount} tasks complete`} />

      <div className="flex items-center justify-between text-xs text-mist-400 pt-1 border-t border-ink-700">
        <span>Due {new Date(project.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
        <span className="font-mono">{project.id}</span>
      </div>
    </article>
  )
}
