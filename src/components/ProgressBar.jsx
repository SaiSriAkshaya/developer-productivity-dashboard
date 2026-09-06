export default function ProgressBar({ value, label }) {
  const clamped = Math.max(0, Math.min(100, value))
  const tone =
    clamped >= 75 ? 'bg-signal-mint' : clamped >= 40 ? 'bg-signal-violet' : 'bg-signal-amber'

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-mist-400">{label}</span>
        <span className="text-xs font-mono text-mist-300">{clamped}%</span>
      </div>
      <div
        className="h-1.5 rounded-full bg-ink-700 overflow-hidden"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className={`h-full rounded-full ${tone} transition-[width] duration-300`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
