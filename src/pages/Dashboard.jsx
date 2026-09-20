import { useEffect, useMemo, useState } from 'react'
import ProfileCard from '../components/ProfileCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import TaskCard from '../components/TaskCard.jsx'
import SearchFilterBar from '../components/SearchFilterBar.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { SkeletonGrid, RowSkeleton } from '../components/LoadingSkeleton.jsx'
import { currentUser, activity } from '../data/mockData.js'
import { fetchDashboardData } from '../data/api.js'

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([])
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('all')

  useEffect(() => {
    fetchDashboardData()
      .then((data) => {
        setProjects(data.projects)
        setTasks(data.tasks)
      })
      .catch((err) => console.error('Could not load data:', err))
      .finally(() => setIsLoading(false))
  }, [])

  const projectNameById = useMemo(
    () => Object.fromEntries(projects.map((p) => [p.id, p.name])),
    [projects]
  )

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const matchesQuery = t.title.toLowerCase().includes(query.trim().toLowerCase())
      const matchesStatus = status === 'all' || t.status === status
      return matchesQuery && matchesStatus
    })
  }, [tasks, query, status])

  const stats = useMemo(() => {
    const done = tasks.filter((t) => t.status === 'done').length
    const inProgress = tasks.filter((t) => t.status === 'in-progress').length
    return { total: tasks.length, done, inProgress }
  }, [tasks])

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 space-y-8">
      {/* Summary row */}
      <section aria-label="Summary" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-ink-900 border border-ink-700 rounded-xl p-5">
          <p className="text-xs text-mist-400">Active projects</p>
          <p className="text-2xl font-mono text-mist-100 mt-1">{projects.length}</p>
        </div>
        <div className="bg-ink-900 border border-ink-700 rounded-xl p-5">
          <p className="text-xs text-mist-400">Tasks in progress</p>
          <p className="text-2xl font-mono text-signal-amber mt-1">{stats.inProgress}</p>
        </div>
        <div className="bg-ink-900 border border-ink-700 rounded-xl p-5">
          <p className="text-xs text-mist-400">Tasks completed</p>
          <p className="text-2xl font-mono text-signal-mint mt-1">{stats.done}/{stats.total}</p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Left column: profile + activity */}
        <div className="space-y-6 order-2 lg:order-1">
          <ProfileCard user={currentUser} />

          <section aria-labelledby="activity-heading" className="bg-ink-900 border border-ink-700 rounded-xl p-5">
            <h2 id="activity-heading" className="text-sm font-medium text-mist-100 mb-3">Recent activity</h2>
            <ul className="space-y-3">
              {activity.map((a) => (
                <li key={a.id} className="text-sm">
                  <p className="text-mist-300">{a.text}</p>
                  <p className="text-xs text-mist-400 font-mono mt-0.5">{a.time}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right column: projects + tasks */}
        <div className="space-y-8 order-1 lg:order-2">
          <section aria-labelledby="projects-heading">
            <div className="flex items-center justify-between mb-4">
              <h2 id="projects-heading" className="text-base font-medium text-mist-100">Projects</h2>
              <span className="text-xs text-mist-400 font-mono">{projects.length} total</span>
            </div>

            {isLoading ? (
              <SkeletonGrid count={4} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            )}
          </section>

          <section aria-labelledby="tasks-heading">
            <div className="flex items-center justify-between mb-4">
              <h2 id="tasks-heading" className="text-base font-medium text-mist-100">Tasks</h2>
              <span className="text-xs text-mist-400 font-mono">{filteredTasks.length} shown</span>
            </div>

            <div className="mb-4">
              <SearchFilterBar
                query={query}
                onQueryChange={setQuery}
                status={status}
                onStatusChange={setStatus}
              />
            </div>

            {isLoading ? (
              <div className="space-y-3">
                <RowSkeleton />
                <RowSkeleton />
                <RowSkeleton />
              </div>
            ) : filteredTasks.length === 0 ? (
              <EmptyState
                title="No tasks match"
                description="Try a different search term or clear the status filter."
              />
            ) : (
              <ul className="space-y-3">
                {filteredTasks.map((t) => (
                  <TaskCard key={t.id} task={t} projectName={projectNameById[t.projectId]} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
