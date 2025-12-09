import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type { JwtTokens, TokenManager } from "../types";

type RetryQueue = {
  config: AxiosRequestConfig;
  resolve: (response: AxiosResponse) => void;
  reject: (reason?: AxiosError) => void;
}[];

const retryQueue: RetryQueue = [];

type handleUnauthorizedErrorProps = {
  axiosInstance: AxiosInstance;
  refreshCallback: () => Promise<AxiosResponse<JwtTokens>>;
  originalConfig: AxiosRequestConfig;
  redirectURI: string;
  tokenManager: TokenManager;
};
const handleUnauthorizedError = async ({
  refreshCallback,
  originalConfig,
  redirectURI,
  axiosInstance,
  tokenManager,
}: handleUnauthorizedErrorProps) => {
  if (tokenManager.isRefreshing()) {
    tokenManager.setRefreshing(true);
    try {
      // Refresh the access token
      const newAccessTokens = (await refreshCallback()).data;
      tokenManager.saveTokens(newAccessTokens);

      retryQueue.forEach(({ config, resolve, reject }) => {
        axiosInstance
          .request(config)
          .then((response) => {
            resolve(response);
          })
          .catch((retryError) => reject(retryError));
      });

      retryQueue.length = 0;

      return axiosInstance(originalConfig);
    } catch (refreshError) {
      retryQueue.length = 0;
      tokenManager.deleteTokens();
      if (window.location.pathname !== redirectURI) {
        window.location.href = redirectURI;
      }
      tokenManager.setRefreshing(false);
      return Promise.reject(refreshError);
    } finally {
      tokenManager.setRefreshing(false);
    }
  }

  return new Promise<AxiosResponse>((resolve, reject) => {
    retryQueue.push({ config: originalConfig, resolve, reject });
  });
};

const isRetryableError = (error: AxiosError, tokenManager: TokenManager) => {
  return (
    tokenManager.getRefreshToken() !== null &&
    tokenManager.getAccessToken() !== null &&
    error.config &&
    error.response?.status === 401
  );
};

type Props = {
  axiosInstance: AxiosInstance;
  redirectURI: string;
  refreshCallback: () => Promise<AxiosResponse<JwtTokens>>;
  tokenManager: TokenManager;
};
export default ({ axiosInstance, redirectURI, refreshCallback, tokenManager }: Props) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (isRetryableError(error, tokenManager)) {
        return handleUnauthorizedError({
          axiosInstance,
          originalConfig: error.config,
          refreshCallback: refreshCallback,
          redirectURI: redirectURI,
          tokenManager,
        });
      }
      return Promise.reject(error);
    },
  );
};
