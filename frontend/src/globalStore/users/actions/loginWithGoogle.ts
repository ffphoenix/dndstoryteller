import apiClient from "../../../utils/apiClient";
import setCurrentUser from "./setCurrentUser";
import { saveUserToken } from "../../../utils/auth/saveUserToken";
import type { CredentialResponseDto } from "../../../../generated/api";

export default async (credentialResponse: CredentialResponseDto) => {
  const response = await apiClient.auth.googleLogin({ credentialResponse });
  saveUserToken(response.data.access_token);
  await setCurrentUser();
};
