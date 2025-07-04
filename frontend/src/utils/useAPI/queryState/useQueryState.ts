import {action} from "mobx";
import type {Method} from "axios";
import { useEffect } from 'react';
import { queryStatesBuffer } from './index';
import getQueryHash from './getQueryHash';
import getQueryState from './getQueryState';

type UseQueryStateProps = {
    method: Method | string,
    url: string,
    params?: object,
    autoClean?: boolean,
    shouldCache?: boolean,
    cacheStaleTime?: number,
}
export default ({method, url, params, autoClean = false, shouldCache = false, cacheStaleTime = 300}: UseQueryStateProps) => {
    const queryHash = getQueryHash(method, url, params);
    useEffect(() => {
        return () => {
            action(() => {
                delete queryStatesBuffer[queryHash];
            });
        }
    }, []);

    return getQueryState(method, url, params);
};