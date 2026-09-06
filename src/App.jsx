import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import EmptyState from './components/EmptyState.jsx'
import { currentUser } from './data/mockData.js'

const PAGE_TITLES = {
  dashboard: 'Dashboard',
  projects: 'Projects',
  tasks: 'Tasks',
  activity: 'Activity',
}

export default function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleNavigate = (page) => {
    setActivePage(page)
    setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen flex bg-ink-950 text-mist-100 font-sans">
      <Sidebar
        active={activePage}
        onNavigate={handleNavigate}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar
          title={PAGE_TITLES[activePage]}
          onMenuClick={() => setSidebarOpen(true)}
          user={currentUser}
        />

        <main className="flex-1">
          {activePage === 'dashboard' ? (
            <Dashboard />
          ) : (
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">
              <EmptyState
                title={`${PAGE_TITLES[activePage]} — coming in a later task`}
                description="This view will be wired up once the Task 2 API and Task 3 database are integrated."
              />
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
