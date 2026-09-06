import { StatusPill, PriorityTag } from './StatusPill.jsx'

export default function TaskCard({ task, projectName }) {
  return (
    <li className="bg-ink-900 border border-ink-700 rounded-xl p-4 flex items-center justify-between gap-4 hover:border-ink-600 transition-colors">
      <div className="min-w-0">
        <p className="text-sm text-mist-100 truncate">{task.title}</p>
        <p className="text-xs text-mist-400 mt-1 font-mono truncate">{projectName}</p>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <PriorityTag priority={task.priority} />
        <StatusPill status={task.status} />
      </div>
    </li>
  )
}
