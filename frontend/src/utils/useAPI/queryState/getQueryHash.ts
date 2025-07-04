import type { Method } from 'axios';
import generateHash from '../../generateHash';

export default (method: Method | string, url: string, params?: object): string => {
  return generateHash(method + url + JSON.stringify(params));
};