import { UpdateStatus } from "../updated/put";

export function TaskDetail({ tasks }) {
  if (!tasks) return null;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.Title}</td>
              <td>{task.Description}</td>
              <td>{task.statuses?.Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "1rem" }}>
        <strong>Update Task Status</strong>
        <UpdateStatus
          task={tasks[0]}
          onUpdated={() => window.location.reload()}
        />
      </div>
    </div>
  );
}
