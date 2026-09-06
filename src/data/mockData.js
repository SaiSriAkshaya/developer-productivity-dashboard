// Mock data layer.
// Shaped to match what Task 2's REST API / Task 3's database will eventually return,
// so swapping this out for real fetch() calls later is a drop-in change.

export const currentUser = {
  name: 'Asha Verma',
  role: 'Full Stack Intern',
  avatarInitials: 'AV',
  streakDays: 12,
  focusHoursWeek: 27.5,
}

export const projects = [
  {
    id: 'proj-1',
    name: 'API Gateway Revamp',
    description: 'Migrate legacy REST endpoints to a versioned, rate-limited gateway.',
    tag: 'Backend',
    progress: 72,
    dueDate: '2026-09-18',
    taskCount: 14,
    doneCount: 10,
  },
  {
    id: 'proj-2',
    name: 'Mobile Auth Flow',
    description: 'Biometric login and refresh-token rotation for the mobile app.',
    tag: 'Security',
    progress: 40,
    dueDate: '2026-09-25',
    taskCount: 9,
    doneCount: 4,
  },
  {
    id: 'proj-3',
    name: 'Design System v2',
    description: 'Token-based theming and a shared component library across products.',
    tag: 'Frontend',
    progress: 88,
    dueDate: '2026-09-12',
    taskCount: 20,
    doneCount: 18,
  },
  {
    id: 'proj-4',
    name: 'Onboarding Analytics',
    description: 'Event pipeline to track drop-off across the signup funnel.',
    tag: 'Data',
    progress: 15,
    dueDate: '2026-10-02',
    taskCount: 11,
    doneCount: 2,
  },
]

export const tasks = [
  { id: 't-1', title: 'Add rate-limit middleware', projectId: 'proj-1', status: 'in-progress', priority: 'high', dueDate: '2026-09-08' },
  { id: 't-2', title: 'Write OpenAPI schema for /users', projectId: 'proj-1', status: 'todo', priority: 'medium', dueDate: '2026-09-10' },
  { id: 't-3', title: 'Deprecate v1 /tasks endpoint', projectId: 'proj-1', status: 'done', priority: 'low', dueDate: '2026-09-01' },
  { id: 't-4', title: 'Integrate biometric SDK (iOS)', projectId: 'proj-2', status: 'in-progress', priority: 'high', dueDate: '2026-09-09' },
  { id: 't-5', title: 'Refresh-token rotation tests', projectId: 'proj-2', status: 'todo', priority: 'high', dueDate: '2026-09-14' },
  { id: 't-6', title: 'Fallback to PIN on biometric fail', projectId: 'proj-2', status: 'todo', priority: 'medium', dueDate: '2026-09-16' },
  { id: 't-7', title: 'Publish button component tokens', projectId: 'proj-3', status: 'done', priority: 'medium', dueDate: '2026-09-03' },
  { id: 't-8', title: 'Dark mode contrast audit', projectId: 'proj-3', status: 'in-progress', priority: 'low', dueDate: '2026-09-11' },
  { id: 't-9', title: 'Define funnel event schema', projectId: 'proj-4', status: 'todo', priority: 'high', dueDate: '2026-09-20' },
  { id: 't-10', title: 'Wire analytics SDK into signup', projectId: 'proj-4', status: 'todo', priority: 'medium', dueDate: '2026-09-24' },
]

export const activity = [
  { id: 'a-1', text: 'Closed "Deprecate v1 /tasks endpoint"', time: '2h ago' },
  { id: 'a-2', text: 'Opened PR for rate-limit middleware', time: '5h ago' },
  { id: 'a-3', text: 'Commented on "Dark mode contrast audit"', time: 'Yesterday' },
  { id: 'a-4', text: 'Merged design tokens into main', time: '2 days ago' },
]
