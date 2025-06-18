import { UpdateStatus } from "../../updated/put";

export function BacklogList({ tasks }) {
  const backlogTasks = tasks.filter(
    (task) => task.statuses?.Name?.toLowerCase() === "backlog",
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {backlogTasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.Title}</td>
                <td>{task.Description}</td>
                <td>{task.statuses.Name}</td>g
                <td>
                  <UpdateStatus
                    task={tasks[0]}
                    onUpdated={() => window.location.reload()}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
