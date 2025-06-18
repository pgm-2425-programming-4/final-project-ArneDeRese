import { useState, useEffect } from "react";
import { API_URL, API_TOKEN } from "../../../constants/constants.js";

export function UpdateStatus({ task, onUpdated }) {
  const [status, setStatus] = useState(task.statuses?.id || "");
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/statuses`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    })
      .then((res) => res.json())
      .then((data) => setStatuses(data.data || []));
  }, []);

  useEffect(() => {
    setStatus(task.statuses?.id || "");
  }, [task]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError(false);

    try {
      const response = await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            statuses: Number(status),
          },
        }),
      });

      if (!response.ok) throw new Error("Update mislukt");

      setMessage("Status succesvol aangepast!");
      if (onUpdated) onUpdated();
    } catch (error) {
      console.error("Fout bij updaten:", error);
      setError(true);
      setMessage("Fout bij updaten.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Status</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              disabled={loading}
            >
              <option value="">Kies een status</option>
              {statuses.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.attributes?.Name || s.Name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button
            type="submit"
            className={`button is-link ${loading ? "is-loading" : ""}`}
            disabled={loading}
          >
            Opslaan
          </button>
        </div>
      </div>

      {message && (
        <div
          className={`notification mt-3 ${
            error ? "is-danger" : "is-success"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
