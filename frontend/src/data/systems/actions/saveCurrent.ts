import ApiClient from "../../../utils/apiClient";
import { runInAction } from "mobx";
import systemsStorage from "../Systems";
import type { AxiosResponse } from "axios";
import type { System } from "../../../../generated/api";

export default () => {
  const current = systemsStorage.current;

  const updateStorage = (system: AxiosResponse<System>) => {
    runInAction(() => {
      systemsStorage.current = {
        ...system.data,
      };
      systemsStorage.togglePopup();
      systemsStorage.formUI.isLoading = false;
    });
  };

  runInAction(() => (systemsStorage.formUI.isLoading = true));
  if (current.id === 0) {
    ApiClient.systems.create(current).then(updateStorage);
  } else {
    ApiClient.systems.update(current.id, current).then(updateStorage);
  }
};
