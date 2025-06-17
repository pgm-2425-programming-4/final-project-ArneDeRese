import { useState } from "react";
import { API_URL, API_TOKEN } from "../../../constants/constants.js";


 export const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          Title: title,
          Description: description,
        },
      }),
    });
  }

  return (
    <div className="create">
      <h2>Add a New task</h2>
      <form onSubmit={handleSubmit}>
        <label> title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>discription:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

