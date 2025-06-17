import { createFileRoute } from '@tanstack/react-router';
import { TaskDetail } from '../../../components/app/tasks/task-detail';
import { fetchTaks } from '../../../data/fetchTask';

export const Route = createFileRoute('/board/task/$taskId')({
  loader: async ({ params }) => {
    const data = await fetchTaks();
    const task = data.data.find((t) => String(t.id) === params.taskId);
    if (!task) throw new Error('Taak niet gevonden');
    return { task };
  },
  component: TaskDetailRouteComponent,
});

function TaskDetailRouteComponent() {
  const { task } = Route.useLoaderData();
  return (
    <div>
      <h1>Taakdetails</h1>
      <TaskDetail tasks={[task]} />
    </div>
  );
}
