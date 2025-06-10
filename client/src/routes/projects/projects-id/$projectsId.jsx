import { createFileRoute } from '@tanstack/react-router'
import { fetchProjectById } from '../../../data/fetch-project-by-id'

export const Route = createFileRoute('/projects/projects-id/$projectsId')({
  loader: async ({ params }) => {
    const data = await fetchProjectById(params.projectsId)
    if (!data || !data.data) {
      throw new Error('Project not found')
    }
    return data.data
  },
  component: RouteComponent,
})

function RouteComponent() {
  const data = Route.useLoaderData();

  return (
    <div>
      {data[1].task.title}
    </div>
  );
}