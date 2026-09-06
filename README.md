# DevPulse — Developer Productivity Dashboard

Task 1 submission for the Innovation Hacks Full Stack Development Internship.
A responsive dashboard for tracking projects and tasks, built as the frontend
layer that Task 2's API and Task 3's database will plug into later.

## Tech stack

- React 18 (Vite)
- Tailwind CSS
- No backend yet — data is served from `src/data/mockData.js`, shaped to match
  what the Task 2 REST API will eventually return, so swapping it for real
  `fetch()` calls is a drop-in change.

## Features

- **Dashboard home view** with summary stats (active projects, in-progress
  tasks, completed tasks).
- **Sidebar navigation** with keyboard-focus states and `aria-current` for
  accessible wayfinding; collapses to a slide-in drawer on mobile.
- **User/profile section** showing streak and weekly focus hours.
- **Project cards** with progress bars, due dates, and tags.
- **Task list** with status pills (To do / In progress / Done) and priority
  tags.
- **Search and filter** — live text search plus status filter chips.
- **Loading states** — skeleton placeholders shown on initial load.
- **Empty states** — shown when a search/filter combination matches nothing,
  and as a placeholder for the Projects/Tasks/Activity nav pages that will be
  built out in later tasks.
- **Fully responsive** — single-column on mobile, two-column layout from
  tablet up, sidebar becomes a drawer below the `md` breakpoint.

## Installation

```bash
git clone <this-repo-url>
cd devpulse
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Environment variables

None required yet — see `.env.example`. A `VITE_API_BASE_URL` will be added
once this connects to the Task 2 API.

## Project structure

```
src/
  components/   Reusable UI pieces (cards, nav, pills, skeletons, etc.)
  pages/        Top-level views (Dashboard)
  data/         Mock data standing in for the future API/DB
  App.jsx       Layout shell + navigation state
  main.jsx      React entry point
```

## Screenshots

_Add screenshots here after running `npm run dev` locally, e.g.:_

```
![Dashboard - desktop](./screenshots/dashboard-desktop.png)
![Dashboard - mobile](./screenshots/dashboard-mobile.png)
```

## Demo

_Add your demo video link here before submitting._

## Notes for evaluators

This task intentionally ships with mock data only — Tasks 2 and 3 build the
real API and database this dashboard is designed to consume next.
