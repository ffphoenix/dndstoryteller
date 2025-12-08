import apiClient from "../../../utils/apiClient";
import setCurrentUser from "./setCurrentUser";
import type { CredentialResponseDto } from "../../../../generated/api";
import { saveTokens } from "../../../services/jwtAuth/tokensManagement";

export default async (credentialResponse: CredentialResponseDto) => {
  const response = await apiClient.auth.googleLogin({ credentialResponse });
  saveTokens(response.data);
  await setCurrentUser();
};
