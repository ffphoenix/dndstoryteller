import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import DataStorage from "../Skills";
import type { AxiosResponse } from "axios";
import type { Skill } from "../../../../../../generated/api";
import fetchList from "./fetchList";

export default (systemId: number) => {
  const current = {
    ...DataStorage.current,
    systemId,
  };

  const updateStorage = (response: AxiosResponse<Skill>) => {
    runInAction(() => {
      DataStorage.current = {
        ...response.data,
      };
      DataStorage.togglePopup();
      DataStorage.formUI.isLoading = false;
    });
    fetchList(response.data.systemId);
  };

  runInAction(() => (DataStorage.formUI.isLoading = true));
  if (current.id === 0) {
    ApiClient.skills.create(systemId, current).then(updateStorage);
  } else {
    ApiClient.skills.update(current.id, systemId, current).then(updateStorage);
  }
};
