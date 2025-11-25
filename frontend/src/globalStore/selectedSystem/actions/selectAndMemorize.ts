import ApiClient from "../../../utils/apiClient";
import { runInAction } from "mobx";
import selectedSystem from "../SelectedSystem";

export default (id: number) => {
  ApiClient.systems
    .getOne(id)
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      localStorage.setItem("selected-system", data.id.toString());
      runInAction(() => {
        selectedSystem.id = data.id;
        selectedSystem.name = data.name;
        selectedSystem.description = data.description;
      });
    });
};
