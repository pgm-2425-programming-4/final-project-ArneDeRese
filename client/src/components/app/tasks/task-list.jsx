import { useEffect, useState } from "react";
import { fetchTaks } from "../../../data/fetchTask";

export function TaskList() {
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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.Title}</td>
              <td>{task.statuses?.Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}