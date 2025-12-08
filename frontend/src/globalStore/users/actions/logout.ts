import { deleteTokens } from "../../../services/jwtAuth/tokensManagement";

export default () => {
  deleteTokens();
  window.location.href = "/auth/login";
};
