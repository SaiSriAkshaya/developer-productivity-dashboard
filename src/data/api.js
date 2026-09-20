const API = 'http://localhost:5000/api'

async function get(path) {
  const res = await fetch(`${API}${path}`)
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  const json = await res.json()
  return json.data
}

function normalizeStatus(s = '') {
  const v = String(s).toLowerCase().replace(/[_\s]/g, '-')
  if (v === 'done' || v === 'completed') return 'done'
  if (v === 'in-progress' || v === 'inprogress') return 'in-progress'
  return 'todo'
}

const idOf = (v) => (v && typeof v === 'object' ? v._id : v)

export async function fetchDashboardData() {
  const [rawProjects, rawTasks] = await Promise.all([
    get('/projects'),
    get('/tasks'),
  ])

  const tasks = rawTasks.map((t) => ({
    id: t._id,
    title: t.title || t.name || 'Untitled task',
    projectId: idOf(t.projectId || t.project),
    status: normalizeStatus(t.status),
    priority: String(t.priority || 'medium').toLowerCase(),
    dueDate: t.dueDate,
  }))

  const projects = rawProjects.map((p) => {
    const mine = tasks.filter((t) => t.projectId === p._id)
    const done = mine.filter((t) => t.status === 'done').length
    return {
      id: p._id,
      name: p.name,
      description: p.description || '',
      tag: (p.tags && p.tags[0]) || p.status || 'project',
      progress: mine.length ? Math.round((done / mine.length) * 100) : 0,
      dueDate: p.dueDate,
      taskCount: mine.length,
      doneCount: done,
    }
  })

  return { projects, tasks }
}
