import { UpdateStatus } from "../updated/put";

export function TaskDetail({ tasks }) {
  if (!tasks) return null;

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-4 has-text-centered">Taakdetails</h2>

        <div className="table-container">
          <table className="table is-striped is-fullwidth is-hoverable">
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
        </div>

        <div className="box">
          <h3 className="subtitle is-5">Update Task Status</h3>
          <UpdateStatus
            task={tasks[0]}
            onUpdated={() => window.location.reload()}
          />
        </div>
      </div>
    </section>
  );
}

