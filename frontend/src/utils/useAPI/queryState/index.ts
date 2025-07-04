import { observable } from 'mobx';
import { garbageCollector } from './queryGarbageCollector';

export type QueryState = {
  isLoading: boolean,
  isLoaded: boolean,
  data: object,
  isError: boolean,
  error: object | null | string,
  hash: string,
  time: number,
  autoClean: boolean,
  shouldCache?: boolean,
  cacheStaleTime?: number,
}

export type QueryStateBuffer = {
  [key: string]: QueryState
}

export const queryStatesBuffer: QueryStateBuffer = observable({});

garbageCollector();

