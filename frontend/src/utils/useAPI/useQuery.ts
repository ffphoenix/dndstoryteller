import customClient from './customClient';
import { AxiosRequestConfig } from 'axios';
import getQueryState from './queryState/getQueryState';

export default (requestConfig: AxiosRequestConfig) => {
  const state = getQueryState(requestConfig.method ?? 'GET', requestConfig.url ?? '', requestConfig.params);
  state.isLoading = true;
  setTimeout(() => {
    customClient.request(requestConfig)
      .then(response => {
        state.data = response.data;
        state.isLoading = false;
        state.time = (new Date()).getTime();
      })
      .catch(error => {
        state.error = error.response;
        state.isError = true;
        state.isLoading = false;
        state.time = (new Date()).getTime();
      });
  }, 5000);
  return state;
};
