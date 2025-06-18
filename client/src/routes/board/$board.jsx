import { createFileRoute, Link } from '@tanstack/react-router'
import { fetchTaks } from '../../data/fetchTask'
import { TaskList } from '../../components/app/tasks/task-list'

export const Route = createFileRoute('/board/$board')({
  loader: async ({ params }) => {
    const data = await fetchTaks();
    const filteredTasks = (data.data || []).filter(
      (task) => String(task.project?.id) === params.board
    );
    return { tasks: filteredTasks };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { tasks } = Route.useLoaderData();

  const statusOrder = ["done", "in progress", "ready for review", "to do"];
  const groupedTasks = statusOrder.reduce((acc, status) => {
    acc[status] = tasks.filter(
      (task) => task.statuses?.Name?.toLowerCase() === status
    );
    return acc;
  }, {});

  return (
    <ul>
      {statusOrder.map((status) => (
        <li key={status}>
          <h2>
            <strong>{status}</strong>
          </h2>
          <ul>
            {groupedTasks[status].map((task) => (
              <li key={task.id}>
                <Link to={`/board/task/${task.id}`}>
                  {task.Title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
