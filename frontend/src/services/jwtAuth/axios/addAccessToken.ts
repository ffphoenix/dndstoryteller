import type { AxiosInstance } from "axios";
import type { TokenManager } from "../types";

export default (instance: AxiosInstance, tokenManager: TokenManager) => {
  instance.interceptors.request.use((config) => {
    const accessToken = tokenManager.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });
};
