import { useState, useEffect } from "react";
import { API_URL, API_TOKEN } from "../../../constants/constants.js";

export function UpdateStatus({ task, onUpdated }) {
  const [status, setStatus] = useState(task.statuses?.id || "");
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/statuses`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` }
    })
      .then(res => res.json())
      .then(data => setStatuses(data.data || []));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            statuses: status,
          },
        }),
      });
      if (!response.ok) throw new Error("Update mislukt");
      setMessage("Status succesvol aangepast!");
      if (onUpdated) onUpdated();
    } catch {
      setMessage("Fout bij updaten.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Status:</label>
      <select
        value={status}
        onChange={e => setStatus(e.target.value)}
        required
        disabled={loading}
      >
        <option value="">Kies een status</option>
        {statuses.map(status => (
          <option key={status.id} value={status.id}>
            {status.attributes?.Name || status.Name}
          </option>
        ))}
      </select>
      <button type="submit" disabled={loading}>Opslaan</button>
      {message && <span style={{ marginLeft: 10 }}>{message}</span>}
    </form>
  );
}


