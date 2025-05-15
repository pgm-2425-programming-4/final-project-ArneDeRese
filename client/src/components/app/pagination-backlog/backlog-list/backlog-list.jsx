export function BacklogList({ backlogs }) {
  return (
    <ul>
      {backlogs.map((backlog) => {
        return (
          <li key={backlog.id}>
            <h1>{backlog.Title}</h1>
            {backlog.description}
          </li>
        );
      })}
    </ul>
  );
}