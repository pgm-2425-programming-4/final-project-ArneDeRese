import { API_TOKEN, API_URL } from "../constants/constants";

export async function fetchProjectById(documentId) {
  const response = await fetch(
    `${API_URL}/projects/?filters[documentId][$eq]=${documentId}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    },
  );
  const data = await response.json();
  console.log(data);
  return data;
}
