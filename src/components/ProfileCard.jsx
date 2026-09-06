export default function ProfileCard({ user }) {
  return (
    <section
      aria-labelledby="profile-heading"
      className="bg-ink-900 border border-ink-700 rounded-xl p-5 flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full bg-signal-violet/20 border border-signal-violet/40 text-signal-violet flex items-center justify-center font-mono text-base font-medium"
          aria-hidden="true"
        >
          {user.avatarInitials}
        </div>
        <div>
          <h2 id="profile-heading" className="font-medium text-mist-100">{user.name}</h2>
          <p className="text-sm text-mist-400">{user.role}</p>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-3 pt-2 border-t border-ink-700">
        <div>
          <dt className="text-xs text-mist-400">Current streak</dt>
          <dd className="font-mono text-lg text-mist-100">{user.streakDays}d</dd>
        </div>
        <div>
          <dt className="text-xs text-mist-400">Focus this week</dt>
          <dd className="font-mono text-lg text-mist-100">{user.focusHoursWeek}h</dd>
        </div>
      </dl>
    </section>
  )
}
