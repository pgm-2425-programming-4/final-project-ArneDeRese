

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
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.Title}</td>
              <td>{task.Description}</td>
              <td>{task.statuses?.Name}</td>
              <td>{task.project?.Title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}