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
    <div className="create">
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Status:</label>
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
        <label>Project:</label>
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
        <button type="submit">Add Task</button>
      </form>
      {success && <p style={{ color: "green" }}>Task successfully created!</p>}
    </div>
  );
};
