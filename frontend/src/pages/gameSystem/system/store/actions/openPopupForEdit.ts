import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import systemsStorage from "../Systems";

export default (id: number) => {
  ApiClient.systems.getOne(id).then((response) => {
    runInAction(() => {
      systemsStorage.current = response.data;
      systemsStorage.togglePopup();
    });
  });
};
