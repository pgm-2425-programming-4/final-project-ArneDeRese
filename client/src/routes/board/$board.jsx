import { createFileRoute } from '@tanstack/react-router'
import { Board } from '../../components/app/board/board'
import { fetchTaks } from '../../data/fetchTask'

export const Route = createFileRoute('/board/$board')({
  loader: async () => {
    const data = await fetchTaks();
    return { tasks: data.data || [] };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { tasks } = Route.useLoaderData();

  return (
    <Board tasks={tasks} />
  );
}
