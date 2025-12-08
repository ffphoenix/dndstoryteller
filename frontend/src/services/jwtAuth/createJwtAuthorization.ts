import type { AxiosInstance, AxiosResponse } from "axios";
import type { JwtTokens } from "./types";
import addAccessToken from "./axios/addAccessToken";
import refreshOnWindowFocusFunc from "./axios/refreshOnWindowFocus";
import refreshByInterval from "./axios/refreshByInterval";
import refreshAfterExpireFunc from "./axios/refreshAfterExpire";

//@todo implement retry refreshWhenHidden, retryOnFailure
type configProps = {
  clientType: "axios" | "fetch";
  axiosInstance?: AxiosInstance;
  refreshAfterExpire?: boolean;
  refreshInterval?: number;
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

export default ({
  clientType,
  refreshAfterExpire = true,
  axiosInstance,
  refreshInterval = 60,
  refreshOnWindowFocus = true,
  refreshBeforeExpire = true,
  refreshCallback,
  redirectURI = "/",
}: configProps) => {
  if (clientType === "axios")
    if (axiosInstance === undefined) {
      throw new Error("axiosInstance is required for axios clientType");
    } else {
      addAccessToken(axiosInstance);
      if (refreshOnWindowFocus && refreshCallback !== undefined) {
        refreshOnWindowFocusFunc(refreshCallback);
      }

      if (refreshBeforeExpire && refreshCallback !== undefined) {
        refreshByInterval(refreshCallback, refreshInterval);
      }

      if (refreshAfterExpire && refreshCallback !== undefined) {
        refreshAfterExpireFunc(axiosInstance, { refreshCallback, redirectURI });
      }
    }
};
