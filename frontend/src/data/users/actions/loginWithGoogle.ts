import {autorun} from "mobx";
import apiClient from '../../../utils/apiClient';
import setCurrentUser from './getCurrentUser';

export default async (credentialResponse) => {
    const response = await apiClient.api.authControllerGoogleLogin({credentialResponse});
    autorun(() => {
      localStorage.setItem("auth-token", response.data.access_token);

    });
    await setCurrentUser();
}