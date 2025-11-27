import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import DataStorage from "../Stats";
import type { AxiosResponse } from "axios";
import type { Stat } from "../../../../../../generated/api";
import fetchList from "./fetchList";

export default () => {
  const current = DataStorage.current;

  const updateStorage = (response: AxiosResponse<Stat>) => {
    runInAction(() => {
      DataStorage.current = {
        ...response.data,
      };
      DataStorage.togglePopup();
      DataStorage.formUI.isLoading = false;
    });
    fetchList(response.data.system_id);
  };

  runInAction(() => (DataStorage.formUI.isLoading = true));
  if (current.id === 0) {
    ApiClient.stats.create(current.system_id, current).then(updateStorage);
  } else {
    ApiClient.stats.update(current.id, current.system_id, current).then(updateStorage);
  }
};
