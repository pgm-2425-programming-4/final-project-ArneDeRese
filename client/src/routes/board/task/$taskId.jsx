import { createFileRoute, Link } from '@tanstack/react-router';
import { TaskDetail } from '../../../components/app/tasks/task-detail';
import { fetchTaks } from '../../../data/fetchTask';

export const Route = createFileRoute('/board/task/$taskId')({
  loader: async ({ params }) => {
    const data = await fetchTaks();
    const task = data.data.find((task) => String(task.id) === params.taskId);
    if (!task) throw new Error('Taak niet gevonden');
     const projectId = task.project?.id ? String(task.project.id) : "";
    return { task, projectId };
  },
  component: TaskDetailRouteComponent,
});

function TaskDetailRouteComponent() {
  const { task, projectId } = Route.useLoaderData();
  return (
    <div>
      <h1>Taakdetails</h1>
      <TaskDetail tasks={[task]} />
       <Link to={`/board/${projectId}`}>
        Back
      </Link>
    </div>
  );
}
