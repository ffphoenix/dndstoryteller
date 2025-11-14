import { action, autorun } from 'mobx';
import apiClient from '../../../utils/apiClient';
import CurrentUser from '../CurrentUser';

export default async () => {
  apiClient.api.usersControllerGetCurrentUser().then(
    action(user => {
      CurrentUser.id = user.data.id;
      CurrentUser.email = user.data.email;
      CurrentUser.role = user.data.role;
      CurrentUser.pictureUrl = user.data.pictureUrl;
      CurrentUser.firstName = user.data.firstName;
      CurrentUser.lastName = user.data.lastName;
    })
  )

}