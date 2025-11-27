import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import DataStorage from "../Stats";
import type { AxiosResponse } from "axios";
import type { Stat } from "../../../../../../generated/api";
import fetchList from "./fetchList";

export default (systemId: number) => {
  const current = {
    ...DataStorage.current,
    system_id: systemId,
  };

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
    ApiClient.stats.create(systemId, current).then(updateStorage);
  } else {
    ApiClient.stats.update(current.id, systemId, current).then(updateStorage);
  }
};
