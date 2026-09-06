export default function Topbar({ title, onMenuClick, user }) {
  return (
    <header className="h-16 border-b border-ink-700 flex items-center justify-between px-4 md:px-8 bg-ink-900/60 backdrop-blur sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-ink-700 text-mist-100"
        >
          ☰
        </button>
        <h1 className="text-lg font-semibold text-mist-100">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex flex-col items-end leading-tight">
          <span className="text-sm text-mist-100">{user.name}</span>
          <span className="text-xs text-mist-400">{user.role}</span>
        </div>
        <div
          className="w-9 h-9 rounded-full bg-signal-violet/20 border border-signal-violet/40 text-signal-violet flex items-center justify-center font-mono text-sm font-medium"
          aria-hidden="true"
        >
          {user.avatarInitials}
        </div>
      </div>
    </header>
  )
}
