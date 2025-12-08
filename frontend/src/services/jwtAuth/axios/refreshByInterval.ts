import type { AxiosResponse } from "axios";
import type { JwtTokens } from "../types";
import { getRefreshToken, saveTokens } from "../tokensManagement";

export default (refreshCallback: () => Promise<AxiosResponse<JwtTokens>>, interval = 60) => {
  setInterval(() => {
    if (getRefreshToken() !== null) refreshCallback().then((response) => saveTokens(response.data));
  }, interval * 1000);
};
