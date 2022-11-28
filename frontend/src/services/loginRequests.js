import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const loginPostRequest = async (email, password) => {
  const { data } = await api.post('/login', { email, password });
  return data;
};

export const signUpPostRequest = async (name, email, password) => {
  try {
    const { data } = await api.post('/login/signUp', { name, email, password });
    return data;
  } catch (error) {
    return { message: error.message };
  }
};
