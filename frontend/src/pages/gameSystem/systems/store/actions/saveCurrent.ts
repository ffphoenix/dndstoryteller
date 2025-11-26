import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import SystemsStorage from "../Systems";
import type { AxiosResponse } from "axios";
import type { System } from "../../../../../../generated/api";
import fetchList from "./fetchList";

export default () => {
  const current = SystemsStorage.current;

  const updateStorage = (system: AxiosResponse<System>) => {
    runInAction(() => {
      SystemsStorage.current = {
        ...system.data,
      };
      SystemsStorage.togglePopup();
      SystemsStorage.formUI.isLoading = false;
    });
    fetchList();
  };

  runInAction(() => (SystemsStorage.formUI.isLoading = true));
  if (current.id === 0) {
    ApiClient.systems.create(current).then(updateStorage);
  } else {
    ApiClient.systems.update(current.id, current).then(updateStorage);
  }
};
