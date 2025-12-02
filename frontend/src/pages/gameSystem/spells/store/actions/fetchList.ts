import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import DataStorage from "../Spells";

export default (systemId: number) => {
  ApiClient.spells.list(systemId).then((response) => {
    runInAction(() => (DataStorage.list = response.data));
  });
};
