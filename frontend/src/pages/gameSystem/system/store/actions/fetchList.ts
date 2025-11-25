import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import SystemsStorage from "../Systems";

export default () => {
  ApiClient.systems.list().then((response) => {
    runInAction(() => (SystemsStorage.list = response.data));
  });
};
