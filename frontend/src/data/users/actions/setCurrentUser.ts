import { action, autorun } from 'mobx';
import apiClient from '../../../utils/apiClient';
import CurrentUser from '../CurrentUser';
import { redirect } from 'react-router';

const setCurrentUser = action(user => {
  CurrentUser.id = user.id;
  CurrentUser.email = user.email;
  CurrentUser.role = user.role;
  CurrentUser.pictureUrl = user.pictureUrl;
  CurrentUser.firstName = user.firstName;
  CurrentUser.lastName = user.lastName;
});

export default async () => {
  apiClient.users.getCurrentUser().then(
    (user) => setCurrentUser(user.data)
  )
}