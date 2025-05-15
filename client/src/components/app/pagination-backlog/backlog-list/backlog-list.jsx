export function BacklogList({ backlogs }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {backlogs.map((backlog) => {
          return (
            <tr key={backlog.id}>
              <td>{backlog.Title}</td>
              <td>{backlog.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
