import type { AxiosInstance, AxiosResponse } from "axios";
import type { JwtTokens, TokenManager } from "./types";
import addAccessToken from "./axios/addAccessToken";
import refreshAfterExpireFunc from "./axios/registerErrorInterceptor";

//@todo implement retry refreshWhenHidden, retryOnFailure
type configProps = {
  tokenManager: TokenManager;
  clientType?: "axios" | "fetch";
  axiosInstance?: AxiosInstance;
  refreshAfterExpire?: boolean;
  tokenExpireTime?: number;
  refreshOnWindowFocus?: boolean;
  refreshBeforeExpire?: boolean;
  // refreshWhenHidden?: boolean;
  // retryOnFailure?: boolean;
  retryDelay?: number;
  retryCount?: number;
  retryOnStatus?: number[];
  refreshCallback?: () => Promise<AxiosResponse<JwtTokens>>;
  redirectURI?: string;
};

let timeOutId: number = 0;
const refreshTokenBeforeSeconds = 15;

const calculateTimeToTokenExpire = (tokenManager: TokenManager, tokenExpireTime: number): number => {
  const lastRefreshAt = tokenManager.getTokenRefreshedAt();
  if (lastRefreshAt !== null) {
    return tokenExpireTime * 1000 - (Date.now() - parseInt(lastRefreshAt));
  }
  return tokenExpireTime * 1000;
};

const initRefreshByInterval = (
  refreshCallback: () => Promise<AxiosResponse<JwtTokens>>,
  tokenManager: TokenManager,
  tokenExpireTime = 60,
) => {
  const refreshTime = calculateTimeToTokenExpire(tokenManager, tokenExpireTime) - refreshTokenBeforeSeconds * 1000;
  timeOutId = setTimeout(
    async () => {
      if (tokenManager.getRefreshToken() !== null) {
        const response = await refreshCallback();
        tokenManager.saveTokens(response.data);
      }
      initRefreshByInterval(refreshCallback, tokenManager, tokenExpireTime);
    },
    refreshTime > 0 ? refreshTime : 1000,
  );
};

const initRefreshOnWindowFocus = (
  refreshCallback: () => Promise<AxiosResponse<JwtTokens>>,
  tokenManager: TokenManager,
  tokenExpireTime: number,
) => {
  window.addEventListener("focus", async () => {
    if (
      tokenManager.getRefreshToken() !== null &&
      calculateTimeToTokenExpire(tokenManager, tokenExpireTime) < refreshTokenBeforeSeconds
    ) {
      clearTimeout(timeOutId);
      const response = await refreshCallback();
      tokenManager.saveTokens(response.data);
      initRefreshByInterval(refreshCallback, tokenManager, tokenExpireTime);
    }
  });
};

export default ({
  tokenManager,
  axiosInstance,
  clientType = "axios",
  refreshAfterExpire = true,
  tokenExpireTime = 60,
  refreshOnWindowFocus = true,
  refreshBeforeExpire = true,
  refreshCallback,
  redirectURI = "/",
}: configProps) => {
  if (clientType === "axios")
    if (axiosInstance === undefined) {
      throw new Error("axiosInstance is required for axios clientType");
    } else {
      addAccessToken(axiosInstance, tokenManager);
      if (refreshBeforeExpire && refreshCallback !== undefined) {
        initRefreshByInterval(refreshCallback, tokenManager, tokenExpireTime);
      }

      if (refreshOnWindowFocus && refreshCallback !== undefined) {
        initRefreshOnWindowFocus(refreshCallback, tokenManager, tokenExpireTime);
      }

      if (refreshAfterExpire && refreshCallback !== undefined) {
        refreshAfterExpireFunc({ axiosInstance, refreshCallback, redirectURI, tokenManager });
      }
    }
};
