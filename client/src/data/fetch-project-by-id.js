import { API_TOKEN, API_URL } from "../constants/constants";


export async function fetchProjectById() {
    const response = await fetch(`${API_URL}/tasks?populate=*`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
}