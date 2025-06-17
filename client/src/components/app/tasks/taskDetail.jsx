export function BacklogList({ tasks }) {;
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
        {tasks.map((task) => {
          return (
            <tr key={task.id}>
              <td>{task.Title}</td>
              <td>{task.Description}</td>
              <td>{task.statuses.Name}</td>
              <td>{task.projects.Title}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    
  );
}