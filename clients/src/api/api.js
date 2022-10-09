import axios from "axios";
const base_url = "http://localhost:8080/";

const getToken = () => {
  let token = localStorage.getItem("token");

  if (token) {
    token = JSON.parse(token);
  }
  return token;
};

// auth
export const createUser = async (formData) => {
  return await axios.post(`${base_url}users/create`, formData);
};
export const validateUser = async (formData) => {
  return await axios.post(`${base_url}users/validate-user`, formData);
};

// Memes
export const createMemes = async (formData) => {
  const token = getToken();
  return await axios.post(`${base_url}memes/create`, {
    formData,
    token,
  });
};

export const getAllMemes = async () => {
  return await axios.get(`${base_url}memes/get-all-memes`);
};

export const getMyMemes = async () => {
  const token = getToken();
  return await axios.get(`${base_url}memes/get-my-memes/${token}`);
};

export const deleteMyMemes = async (formData) => {
  return await axios.delete(`${base_url}memes/delete-my-memes/${formData}`);
};

export const LikeIt = async (formData) => {
  return await axios.post(`${base_url}memes/like-my-memes`, formData);
};
