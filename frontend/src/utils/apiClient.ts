import { Api } from "../../generated/api";
import type { AxiosRequestConfig } from "axios";
import createJwtAuthManager from "../services/jwtAuth/createJwtAuthorization";
import { getRefreshToken } from "../services/jwtAuth/tokensManagement";

const apiClient = new Api({
  secure: false,
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000, // 5 seconds
  headers: {
    "Content-Type": "application/json",
  },
} as AxiosRequestConfig);

createJwtAuthManager({
  clientType: "axios",
  axiosInstance: apiClient.instance,
  refreshInterval: 5 * 60,
  refreshCallback: () =>
    apiClient.auth.refresh({
      headers: {
        "x-refresh-token": getRefreshToken(),
      },
    }),
  redirectURI: "/auth/login",
});
export default apiClient;
