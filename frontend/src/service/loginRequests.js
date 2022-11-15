import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fullstack-blog-backend.up.railway.app',
});

export const loginPostRequest = async (email, password) => {
  try {
    const { data } = await api.post('/login', { email, password });
    return data;

  } catch (_error) {
    return { message: 'User does not exists' }
  }
  
};
