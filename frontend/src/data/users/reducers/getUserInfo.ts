import CurrentUser from '../CurrentUser';

export default () => ({
  id: CurrentUser.id,
  email: CurrentUser.email,
  pictureUrl: CurrentUser.pictureUrl,
  role: CurrentUser.role,
  fullName: CurrentUser.firstName + ' ' + CurrentUser.lastName
})