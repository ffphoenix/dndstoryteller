import { action, autorun } from 'mobx';
import apiClient from '../../../utils/apiClient';
import CurrentUser from '../CurrentUser';

export default async () => {
  apiClient.api.usersControllerGetCurrentUser().then(
    action(user => {
      CurrentUser.id = user.data.id;
      CurrentUser.email = user.data.email;
      CurrentUser.role = user.data.role;
      console.log('action', user);
    })
  )

}