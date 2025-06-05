export function BacklogList({ tasks }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => {
          return (
            <tr key={task.id}>
              <td>{task.Title}</td>
              <td>{task.Description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
