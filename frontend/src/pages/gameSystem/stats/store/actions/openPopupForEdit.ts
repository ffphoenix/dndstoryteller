import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import Storage from "../Stats";

export default (id: number, systemId: number) => {
  ApiClient.stats.getOne(id, systemId).then((response) => {
    runInAction(() => {
      Storage.current = response.data;
      Storage.togglePopup();
    });
  });
};
