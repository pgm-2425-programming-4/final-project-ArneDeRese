import { useState, useEffect } from "react";
import { API_URL, API_TOKEN } from "../../../constants/constants.js";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [project, setProject] = useState("");
  const [success, setSuccess] = useState(false);
  const [statuses, setStatuses] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/statuses`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    })
      .then((res) => res.json())
      .then((data) => setStatuses(data.data || []));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/projects`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    })
      .then((res) => res.json())
      .then((data) => setProjects(data.data || []));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          Title: title,
          Description: description,
          statuses: status,
          project: project,
        },
      }),
    });

    if (response.ok) {
      setTitle("");
      setDescription("");
      setStatus("");
      setProject("");
      setSuccess(true);
    } else {
      console.error("Task creation failed");
      setSuccess(false);
    }
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "600px" }}>
        <h2 className="title is-3 has-text-centered">Add a New Task</h2>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  required
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
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
            <label className="label">Project</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  required
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  <option value="">Kies een project</option>
                  {projects.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.attributes?.Title || p.Title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <button type="submit" className="button is-primary">
                Add Task
              </button>
            </div>
          </div>
        </form>

        {success && (
          <div className="notification is-success mt-4">
            Task successfully created!
          </div>
        )}
      </div>
    </section>
  );
};
