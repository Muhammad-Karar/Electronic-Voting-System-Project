import axios from 'axios';

const serverurl = "http://localhost:5000";

export const createAccount = async (userData) => {
  return await axios.post(`${serverurl}/Signup`, userData);
}
