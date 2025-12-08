import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { deleteTokens, getAccessToken, getRefreshToken, saveTokens } from "../tokensManagement";
import type { JwtTokens } from "../types";

type RetryQueue = {
  config: AxiosRequestConfig;
  resolve: (response: AxiosResponse) => void;
  reject: (reason?: AxiosError) => void;
}[];

const retryQueue: RetryQueue = [];
let isRefreshing = false;

const logoutAndRedirect = (redirectURI: string) => {
  deleteTokens();
  if (window.location.pathname !== redirectURI) {
    window.location.href = redirectURI;
  }
};

type handleUnauthorizedErrorProps = {
  instance: AxiosInstance;
  refreshCallback: () => Promise<AxiosResponse<JwtTokens>>;
  originalConfig: AxiosRequestConfig;
  redirectURI: string;
};
const handleUnauthorizedError = async ({
  refreshCallback,
  originalConfig,
  redirectURI,
  instance,
}: handleUnauthorizedErrorProps) => {
  if (!isRefreshing) {
    isRefreshing = true;
    try {
      // Refresh the access token
      const newAccessTokens = (await refreshCallback()).data;
      saveTokens(newAccessTokens);

      retryQueue.forEach(({ config, resolve, reject }) => {
        instance
          .request(config)
          .then((response) => {
            resolve(response);
          })
          .catch((retryError) => reject(retryError));
      });

      retryQueue.length = 0;

      return instance(originalConfig);
    } catch (refreshError) {
      retryQueue.length = 0;
      logoutAndRedirect(redirectURI);
      isRefreshing = false;
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }

  return new Promise<AxiosResponse>((resolve, reject) => {
    retryQueue.push({ config: originalConfig, resolve, reject });
  });
};

const isRetryableError = (error: AxiosError) => {
  return getRefreshToken() !== null && getAccessToken() !== null && error.config && error.response?.status === 401;
};

type configProps = {
  redirectURI: string;
  refreshCallback: () => Promise<AxiosResponse<JwtTokens>>;
};
export default (instance: AxiosInstance, config: configProps) => {
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (isRetryableError(error)) {
        return handleUnauthorizedError({
          instance,
          originalConfig: error.config,
          refreshCallback: config.refreshCallback,
          redirectURI: config.redirectURI,
        });
      }
      return Promise.reject(error);
    },
  );
};
