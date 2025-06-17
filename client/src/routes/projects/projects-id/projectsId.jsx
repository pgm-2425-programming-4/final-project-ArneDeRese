import { createFileRoute } from '@tanstack/react-router'
import { fetchProjectId } from '../../../data/fetch-project'

export const Route = createFileRoute('/projects/projects-id/projectsId')({
  loader: async ({ params }) => {

    const projectRes = await fetchProjectId(params.projectsId)
    const project = projectRes.data

    return { project }
  },
  notFoundComponent: () => <div>Project not found</div>,
  component: RouteComponent,
})

function RouteComponent() {
  const { projectdata } = Route.useLoaderData()

  return (
    <div>
      {projectdata.map((project) =>
      <h1>{project.Title}</h1>)}
    </div>
  )
}
