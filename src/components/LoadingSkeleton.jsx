export function CardSkeleton() {
  return (
    <div className="bg-ink-900 border border-ink-700 rounded-xl p-5 animate-pulse" aria-hidden="true">
      <div className="h-4 w-2/3 bg-ink-700 rounded mb-3" />
      <div className="h-3 w-full bg-ink-700 rounded mb-2" />
      <div className="h-3 w-4/5 bg-ink-700 rounded mb-4" />
      <div className="h-1.5 w-full bg-ink-700 rounded-full" />
    </div>
  )
}

export function RowSkeleton() {
  return (
    <div className="bg-ink-900 border border-ink-700 rounded-xl p-4 animate-pulse flex items-center justify-between" aria-hidden="true">
      <div className="h-3 w-1/2 bg-ink-700 rounded" />
      <div className="h-3 w-16 bg-ink-700 rounded" />
    </div>
  )
}

export function SkeletonGrid({ count = 4, Component = CardSkeleton }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="status" aria-label="Loading content">
      {Array.from({ length: count }).map((_, i) => (
        <Component key={i} />
      ))}
    </div>
  )
}
