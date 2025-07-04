import axios from "axios";

const customClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000,
});

export default customClient;
