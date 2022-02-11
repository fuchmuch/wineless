import axios from 'axios';
import Client from '.';

const key = process.env.REACT_APP_API_KEY;
export const getStores = async () => {
  try {
    const response = await axios.get(
      ``,
      {
        headers: {
          'X-API-Key': `${key}`
        }
      }
    );
    return response.data.results[0].stores;
  } catch (error) {
    throw error;
  }
};


export const GetStoreById = async (storeId) => {
  try {
    const response = await axios.get(
      ``,
      {
        headers: {
          'X-API-Key': `${key}`
        }
      }
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getLocations = async () => {
  try {
    const response = await axios.get(
      ``,
      {
        headers: {
          'X-API-Key': `${key}`
        }
      }
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const GetUser = async () => {
  try {
    const response = await Client.get(`/users/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const PostUser = async (user) => {
  try {
    const response = await Client.post(`/users/`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteUser = async (id) => {
  try {
    const response = await Client.delete(`users/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const UpdateUser = async (id, form) => {
  try {
    const response = await Client.put(`users/${id}`, form)
    return response.data
  } catch (error) {
    throw error
  }
}