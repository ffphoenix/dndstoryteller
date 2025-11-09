import { Api } from '../../generated/api';
import type { AxiosRequestConfig } from 'axios';

const apiClient = new Api({
  secure: false,
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000, // 5 seconds
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("auth-token")}`,
  },
} as AxiosRequestConfig);

export default apiClient