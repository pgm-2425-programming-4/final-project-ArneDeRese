import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/projects/projects-id/task')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/projects-id/$projecstTitle"!</div>
}
