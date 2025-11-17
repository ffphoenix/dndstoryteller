import apiClient from '../../../utils/apiClient';
import setCurrentUser from './setCurrentUser';
import { saveUserToken } from '../../../utils/auth/saveUserToken';

export default async (credentialResponse) => {
    const response = await apiClient.auth.googleLogin({credentialResponse});
    saveUserToken(response.data.access_token);
    await setCurrentUser();
}