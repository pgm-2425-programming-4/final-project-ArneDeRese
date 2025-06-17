import { createFileRoute } from '@tanstack/react-router'
import { fetchProjectById } from '../../../data/fetch-project-by-id'
import { fetchBacklog } from '../../../data/fetchBacklog'

export const Route = createFileRoute('/projects/projects-id/projectsId')({
  loader: async ({ params }) => {
    // Haal het project op via documentId (params.projectsId)
    const projectRes = await fetchProjectById(params.projectsId)
    // projectRes.data is een array als je filtert, object als je direct op id zoekt
    const project =
      Array.isArray(projectRes.data) ? projectRes.data[0] : projectRes.data
    if (!project) throw new Error('Project not found')

    // Haal alle taken op
    const backlogRes = await fetchBacklog(1, 100)
    const allTasks = backlogRes.data || []

    // Filter taken die bij dit project horen (bijv. via documentId)
    const projectTasks = allTasks.filter(
      (task) =>
        task.project?.id === project.id ||
        task.projectId === project.id ||
        task.documentId === project.documentId // pas aan op jouw datastructuur
    )

    return { project, tasks: projectTasks }
  },
  notFoundComponent: () => <div>Project not found</div>,
  component: RouteComponent,
})

function RouteComponent() {
  const { project, tasks } = Route.useLoaderData()

  return (
    <div>
      <h1>{project.Title}</h1>
      <h2>Backlog taken voor dit project:</h2>
      <ul>
        {tasks.length === 0 && <li>Geen taken voor dit project.</li>}
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.Title}</strong>: {task.Description}
          </li>
        ))}
      </ul>
    </div>
  )
}
