import apiClient from './base';
// Function to fetch all users
export const getAdmins = async () => {
  try {
    const response = await apiClient.get('/api/v1/admins');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAdmin = async (data) => {
  try {
    const response = await apiClient.post('/api/v1/admins', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};