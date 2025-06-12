import { useState } from "react";
import { API_URL, API_TOKEN } from "../../../constants/constants.js";

export function UpdateTaskStatus({ task, onStatusUpdated }) {
  const [status, setStatus] = useState(task.statuses?.Name || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleChange(e) {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            statuses: { Name: newStatus },
          },
        }),
      });
      if (!response.ok) throw new Error("Update mislukt");
      if (onStatusUpdated) onStatusUpdated(newStatus);
    } catch (error) {
      console.error("Error updating task status:", error);
      setError("Fout bij updaten");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <select value={status} onChange={handleChange} disabled={loading}>
        <option value="backlog">Backlog</option>
        <option value="todo">To do</option>
        <option value="in progress">In progress</option>
        <option value="done">Done</option>
      </select>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}