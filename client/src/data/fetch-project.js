import { API_URL, API_TOKEN } from "../constants/constants";

export async function fetchProjectId() {
  const response = await fetch(`${API_URL}/projects/?populate=*`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}
