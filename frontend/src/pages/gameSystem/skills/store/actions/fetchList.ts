import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import DataStorage from "../Skills";

export default (systemId: number) => {
  ApiClient.skills.list(systemId).then((response) => {
    runInAction(() => (DataStorage.list = response.data));
  });
};
