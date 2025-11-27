import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import Storage from "../Stats";
import type { AxiosResponse } from "axios";
import type { Stat } from "../../../../../../generated/api";
import fetchList from "./fetchList";

export default () => {
  const current = Storage.current;

  const updateStorage = (response: AxiosResponse<Stat>) => {
    runInAction(() => {
      Storage.current = {
        ...response.data,
      };
      Storage.togglePopup();
      Storage.formUI.isLoading = false;
    });
    fetchList(response.data.system_id);
  };

  runInAction(() => (Storage.formUI.isLoading = true));
  if (current.id === 0) {
    ApiClient.stats.create(current.system_id, current).then(updateStorage);
  } else {
    ApiClient.stats.update(current.id, current.system_id, current).then(updateStorage);
  }
};
