import { Api } from '../../generated/api';

const bearerToken = localStorage.getItem("token");


export default new Api({
  baseUrl: 'http://localhost:3000/api',
  timeout: 5000, // 5 seconds
  withCredentials: true, // Include cookies in cross-site requests
  headers: {
    'Content-Type': 'application/json',
    (bearerToken) ?? 'Authorization': `Bearer ${bearerToken}`,
  },
});