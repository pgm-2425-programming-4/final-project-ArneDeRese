import { createFileRoute } from '@tanstack/react-router'
import { fetchProjectById } from '../../../data/fetch-project-by-id'


export const Route = createFileRoute('/projects/projects-id/$projects-id')({
  loader: async ({ params }) => {
    const data = await fetchProjectById(params.projectsId)
    if (!data) {
      throw new Error('Project not found')
    }
    return data
  },
  component: RouteComponent,
})

function RouteComponent() {
  const response = Route.useLoaderData();

  if (!response || !Array.isArray(response.data)) {
    return <div>Geen geldige taken gevonden.</div>;
  }

  const tasks = response.data;

  const filteredTasks = tasks.filter((task) => task.project);

  if (filteredTasks.length === 0) {
    return <div>Geen taken met gekoppeld project gevonden.</div>;
  }

  const projectTitle = filteredTasks[0].project.title;

  return (
    <div>
      <h1>Project: {projectTitle}</h1>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <h2>{task.Title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

