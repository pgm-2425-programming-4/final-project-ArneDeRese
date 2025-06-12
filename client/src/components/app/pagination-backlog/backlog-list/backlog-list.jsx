export function BacklogList({ tasks }) {
  const backlogTasks = tasks.filter(
    (task) => task.statuses?.Name?.toLowerCase() === "backlog"
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {backlogTasks.map((task) => {
          return (
            <tr key={task.id}>
              <td>{task.Title}</td>
              <td>{task.Description}</td>
              <td>{task.statuses.Name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
