import { API_TOKEN, API_URL } from "../constants/constants";

export async function fetchTaks() {
  const result = await fetch(
    `${API_URL}/tasks?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    },
  );
  const data = await result.json();
  console.log(data);
  return data;
}
