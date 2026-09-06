const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '◧' },
  { id: 'projects', label: 'Projects', icon: '◱' },
  { id: 'tasks', label: 'Tasks', icon: '☑' },
  { id: 'activity', label: 'Activity', icon: '◷' },
]

export default function Sidebar({ active, onNavigate, open, onClose }) {
  return (
    <>
      {/* Mobile scrim */}
      {open && (
        <button
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}

      <nav
        aria-label="Primary"
        className={`
          fixed md:static inset-y-0 left-0 z-40
          w-64 shrink-0 bg-ink-900 border-r border-ink-700
          transform transition-transform duration-200 ease-out
          ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          flex flex-col
        `}
      >
        <div className="h-16 flex items-center gap-2 px-5 border-b border-ink-700">
          <div className="w-7 h-7 rounded-md bg-signal-violet flex items-center justify-center font-mono text-sm font-semibold text-ink-950">
            dp
          </div>
          <span className="font-semibold tracking-tight">DevPulse</span>
        </div>

        <ul className="flex-1 px-3 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                    transition-colors
                    ${isActive
                      ? 'bg-ink-800 text-mist-100 font-medium'
                      : 'text-mist-400 hover:bg-ink-800/60 hover:text-mist-100'}
                  `}
                >
                  <span aria-hidden="true" className="text-base">{item.icon}</span>
                  {item.label}
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-signal-violet" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="px-5 py-4 border-t border-ink-700 font-mono text-xs text-mist-400">
          v1.0.0 · task-1
        </div>
      </nav>
    </>
  )
}
