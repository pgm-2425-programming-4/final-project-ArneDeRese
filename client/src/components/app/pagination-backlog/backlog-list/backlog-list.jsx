export function StudentList({ backlogs }) {
  return (
    <ul>
      {backlogs.map((backlog) => {
        return (
          <li key={backlog.id}>
            {backlog.title} {backlog.description}
          </li>
        );
      })}
    </ul>
  );
}