import axios from 'axios';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getFromWrongUrl() {
  try {
    await axios.get(`${BASE_URL}/wrong-url`);
  } catch (error) {
    return `Request failed with status ${error.response.status}`;
  }
}

export async function getPostsWithHeadersAndParams() {
  return axios.get(`${BASE_URL}/posts`, {
    headers: { 'X-Custom-Header': 'aqa-advanced' },
    params: { userId: 1 },
  });
}

export async function getUser(id) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
