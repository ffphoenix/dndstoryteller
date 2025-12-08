import { getAccessToken } from "../tokensManagement";
import type { AxiosInstance } from "axios";

export default (instance: AxiosInstance) => {
  instance.interceptors.request.use((config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });
};
