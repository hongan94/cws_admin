import axios from 'axios';

// Define the base URL for your API
const BASE_URL = 'http://localhost:3000';

// Create an instance of Axios with custom configurations
const token = localStorage.getItem('Authorization');
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token
  },
});

export default apiClient;