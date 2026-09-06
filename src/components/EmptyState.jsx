export default function EmptyState({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 py-16 px-4 border border-dashed border-ink-700 rounded-xl">
      <div className="w-10 h-10 rounded-full bg-ink-800 flex items-center justify-center text-mist-400 mb-1" aria-hidden="true">
        ◇
      </div>
      <p className="text-sm font-medium text-mist-100">{title}</p>
      <p className="text-sm text-mist-400 max-w-xs">{description}</p>
    </div>
  )
}
