import { createFileRoute } from '@tanstack/react-router'
import { fetchProjectById } from '../../data/fetch-project-by-id'

export const Route = createFileRoute('/projects/$projectsId')({
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
  const data = Route.useLoaderData()
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}
