import { Api } from '../../generated/api';
import type { AxiosRequestConfig } from 'axios';
import getUserToken from './auth/getUserToken';

const apiClient = new Api({
  secure: false,
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000, // 5 seconds
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getUserToken()}`,
  },
} as AxiosRequestConfig);

export default apiClient