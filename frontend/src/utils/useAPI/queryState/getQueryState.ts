import type { Method } from 'axios';
import { queryStatesBuffer } from './index';
import getQueryHash from './getQueryHash';

export default (method: Method | string, url: string, params?: object, autoClean = true) => {
  const queryHash = getQueryHash(method, url, params);

  if (queryStatesBuffer[queryHash] === undefined) {
    queryStatesBuffer[queryHash] = {
      autoClean: false,
      isLoading: false,
      data: {},
      isLoaded: false,
      isError: false,
      error: null,
      hash: queryHash,
      time: (new Date()).getTime(),
    };
  }

  return queryStatesBuffer[queryHash];
};