import { Api } from "../../generated/api";
import type { AxiosRequestConfig } from "axios";
import getUserToken from "./auth/getUserToken";
import deleteUserToken from "./auth/deleteUserToken";

const apiClient = new Api({
  secure: false,
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000, // 5 seconds
  headers: {
    "Content-Type": "application/json",
  },
} as AxiosRequestConfig);

apiClient.instance.interceptors.request.use(
  (config) => {
    const token = getUserToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log("Unauthorized", error);
      deleteUserToken();
      const loginURI = "/auth/login";
      if (window.location.pathname !== loginURI) {
        window.location.href = loginURI;
      }
    }
    return Promise.reject(error);
  },
);
export default apiClient;
