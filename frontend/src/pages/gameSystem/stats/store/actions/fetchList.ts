import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import DataStorage from "../Stats";

export default (systemId: number) => {
  ApiClient.stats.list(systemId).then((response) => {
    runInAction(() => (DataStorage.list = response.data));
  });
};
