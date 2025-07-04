import { action } from 'mobx';
import { queryStatesBuffer } from './index';

const GARBAGE_COLLECTOR_TIMEOUT = 120 * 1000;
const STATE_LIFETIME_TIMEOUT = 300 * 1000;

export const garbageCollector = () => {
  action(() =>
    Object.keys(queryStatesBuffer).forEach((key) => {
      if (queryStatesBuffer[key].time + STATE_LIFETIME_TIMEOUT < (new Date()).getTime()
        && queryStatesBuffer[key].autoClean
      ) {
        delete queryStatesBuffer[key];
      }
    }),
  );
  setTimeout(() => garbageCollector(), GARBAGE_COLLECTOR_TIMEOUT);
};
