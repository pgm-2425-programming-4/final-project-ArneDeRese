import { createFileRoute } from '@tanstack/react-router'
import { Board } from '../../components/app/board/board'

export const Route = createFileRoute('/board/$board')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Board />
  )
}
