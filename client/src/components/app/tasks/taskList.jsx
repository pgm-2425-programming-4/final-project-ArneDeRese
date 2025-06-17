export function taskList ({ tasks }) {;
  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => {
          return (
            <tr key={task.id}>
              <td>{task.Title}</td>
              <td>{task.statuses.Name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    
  );
}