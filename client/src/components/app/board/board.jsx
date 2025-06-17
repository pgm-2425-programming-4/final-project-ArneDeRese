import { TaskList } from "../tasks/task-list";

export function Board({ tasks }) {
  const statusOrder = ["done", "in progress", "ready for review", "to do"];
  const filteredTasks = tasks.filter(
    (task) => task.statuses?.Name?.toLowerCase() !== "backlog"
  );
  const groupedTasks = statusOrder.reduce((acc, status) => {
    acc[status] = filteredTasks.filter(
      (task) => task.statuses?.Name?.toLowerCase() === status
    );
    return acc;
  }, {});

  return (
    <ul>
      {statusOrder.map((status) => (
        <li key={status}>
          <h2><strong>{(status)}</strong></h2>
          <TaskList tasks={groupedTasks[status]} />
        </li>
      ))}
    </ul>
  );
}





