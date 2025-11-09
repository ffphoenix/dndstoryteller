import { autorun } from 'mobx';
import apiClient from '../../../utils/apiClient';
import CurrentUser from '../CurrentUser';

export default async () => {
  const request = await apiClient.api.usersControllerGetCurrentUser();
  autorun(() => {
    console.log(request.data);
    CurrentUser.email = request.data.email;
  })
}