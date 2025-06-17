import { TaskList } from "../tasks/task-list";

export function Board({ tasks }) {
  function hasTasksWithStatus(tasks, status) {
    return tasks.some(
      (task) => task.statuses?.Name?.toLowerCase() === status.toLowerCase()
    );
  }

  return (
    <ul>
      <li>
        {hasTasksWithStatus(tasks, "Done") && <TaskList />}
      </li>
      <li>
        {hasTasksWithStatus(tasks, "In progress") && <TaskList />}
      </li>
      <li>
        {hasTasksWithStatus(tasks, "Ready for review") && <TaskList />}
      </li>
      <li>
        {hasTasksWithStatus(tasks, "To do") && <TaskList />}
      </li>
    </ul>
  );
}


