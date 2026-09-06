const STATUS_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'todo', label: 'To do' },
  { id: 'in-progress', label: 'In progress' },
  { id: 'done', label: 'Done' },
]

export default function SearchFilterBar({ query, onQueryChange, status, onStatusChange }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
      <div className="relative flex-1">
        <span aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-mist-400 text-sm">
          ⌕
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search tasks…"
          aria-label="Search tasks"
          className="w-full bg-ink-900 border border-ink-700 rounded-lg pl-9 pr-3 py-2 text-sm text-mist-100 placeholder:text-mist-400 focus:border-signal-violet outline-none"
        />
      </div>

      <div role="group" aria-label="Filter by status" className="flex gap-1 bg-ink-900 border border-ink-700 rounded-lg p-1 overflow-x-auto">
        {STATUS_FILTERS.map((f) => {
          const isActive = status === f.id
          return (
            <button
              key={f.id}
              onClick={() => onStatusChange(f.id)}
              aria-pressed={isActive}
              className={`
                px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors
                ${isActive ? 'bg-ink-700 text-mist-100' : 'text-mist-400 hover:text-mist-100'}
              `}
            >
              {f.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
