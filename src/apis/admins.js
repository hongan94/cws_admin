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

export const updateAdmin = async (id, data) => {
  try {
    const response = await apiClient.put(`/api/v1/admins/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const detailAdmin = async (id) => {
  try {
    const response = await apiClient.get(`/api/v1/admins/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const deleteAdmin = async (id) => {
  try {
    const response = await apiClient.delete(`/api/v1/admins/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};