const STATUS_MAP = {
  todo: { label: 'To do', className: 'bg-ink-700 text-mist-300' },
  'in-progress': { label: 'In progress', className: 'bg-signal-amber/15 text-signal-amber' },
  done: { label: 'Done', className: 'bg-signal-mint/15 text-signal-mint' },
}

const PRIORITY_MAP = {
  high: { label: 'High', className: 'text-signal-rose' },
  medium: { label: 'Medium', className: 'text-signal-amber' },
  low: { label: 'Low', className: 'text-mist-400' },
}

export function StatusPill({ status }) {
  const s = STATUS_MAP[status] ?? STATUS_MAP.todo
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${s.className}`}>
      {s.label}
    </span>
  )
}

export function PriorityTag({ priority }) {
  const p = PRIORITY_MAP[priority] ?? PRIORITY_MAP.low
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-mono ${p.className}`}>
      <span aria-hidden="true">●</span>{p.label}
    </span>
  )
}
