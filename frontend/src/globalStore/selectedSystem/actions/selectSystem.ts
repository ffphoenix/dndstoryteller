import ApiClient from "../../../utils/apiClient";
import { runInAction } from "mobx";
import selectedSystem from "../SelectedSystem";

export default (id: number) => {
  ApiClient.systems
    .getOne(id)
    .then((response) => response.data)
    .then((data) => {
      runInAction(() => {
        selectedSystem.id = data.id;
        selectedSystem.name = data.name;
        selectedSystem.description = data.description;
      });
    });
};
