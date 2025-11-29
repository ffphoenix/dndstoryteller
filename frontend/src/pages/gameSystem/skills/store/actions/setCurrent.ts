import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import DataStorage from "../Skills";

export default async (id: number, systemId: number) => {
  ApiClient.skills.getOne(id, systemId).then((response) => {
    runInAction(() => {
      DataStorage.current = response.data;
    });
  });
};
