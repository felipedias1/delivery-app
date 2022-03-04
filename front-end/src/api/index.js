import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getAllOrders = async (Authorization) => {
  const { role, token } = Authorization;
  const URL_ORDER = `${BASE_URL}/${role}/orders`;

  try {
    const { data } = await axios.get(URL_ORDER, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getProducts = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const headers = {
    authorization: token,
  };
  const products = await axios.get(`${BASE_URL}/product`, { headers });
  return products;
};

export const register = async (data) => {
  const dataRegister = {
    name: data.name,
    email: data.email,
    password: data.password,
  };

  try {
    const response = await axios.post(`${BASE_URL}/register`, dataRegister);
    return response;
  } catch (error) {
    return false;
  }
};

export const postLogin = async (userEmail, userPassword) => {
  const userData = {
    email: userEmail,
    password: userPassword,
  };

  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response;
  } catch (error) {
    return false;
  }
};
