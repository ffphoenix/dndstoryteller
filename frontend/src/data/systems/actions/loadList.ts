import ApiClient from "../../../utils/apiClient";
import { runInAction } from "mobx";
import systemsStorage from "../Systems";

export default () => {
  ApiClient.systems.list().then((response) => {
    runInAction(() => (systemsStorage.list = response.data));
  });
};
