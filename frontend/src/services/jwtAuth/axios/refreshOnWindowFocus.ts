import type { AxiosResponse } from "axios";
import type { JwtTokens } from "../types";
import { getRefreshToken, saveTokens } from "../tokensManagement";

// @todo fix focus event
export default (refreshFunction: () => Promise<AxiosResponse<JwtTokens>>) => {
  window.addEventListener("focus", () => {
    if (getRefreshToken() !== null) {
      refreshFunction().then((response) => saveTokens(response.data));
    }
  });
};
