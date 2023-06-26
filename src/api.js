import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Update the URL to match your backend API endpoint
});

export default api;
