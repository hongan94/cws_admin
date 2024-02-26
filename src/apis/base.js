import axios from 'axios';

// Define the base URL for your API
const BASE_URL = 'http://localhost:3000';

// Create an instance of Axios with custom configurations
const token = localStorage.getItem('Authorization');
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbl9pZCI6MX0.9sDvwpHSRM1I8zt1tXmKak598bUfeUHDPjqQmn-jN5k'
  },
});

export default apiClient;