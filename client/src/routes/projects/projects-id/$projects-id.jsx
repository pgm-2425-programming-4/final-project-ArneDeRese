import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/projects/projects-id/$projects-id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/projects/projects-id/$projecstTitle"!</div>
}
