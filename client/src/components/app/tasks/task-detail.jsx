import { useEffect, useState } from "react";
import { fetchTaks } from "../../../data/fetchTask";

export function TaskDetail() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const data = await fetchTaks();
      setTasks(data.data || []);
    }
    loadTasks();
  }, []);

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