import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import DataStorage from "../Stats";

export default (id: number, systemId: number) => {
  ApiClient.stats.getOne(id, systemId).then((response) => {
    runInAction(() => {
      DataStorage.current = response.data;
      DataStorage.togglePopup();
    });
  });
};
