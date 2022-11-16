import axios from 'axios';
// import https from 'https';

// const agent = new https.Agent({
  // rejectUnauthorized: false,
// });
// axios.get('https://something.com/foo', {
  // 'resolve.fallback': { https: require.resolve('https-browserify') },
// });

const api = axios.create({
  baseURL: 'http://fullstack-blog-backend.up.railway.app',
  // baseURL: 'https://localhost:3001',
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
