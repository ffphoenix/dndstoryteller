import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import Storage from "../Stats";

export default (systemId: number) => {
  ApiClient.stats.list(systemId).then((response) => {
    runInAction(() => (Storage.list = response.data));
  });
};
