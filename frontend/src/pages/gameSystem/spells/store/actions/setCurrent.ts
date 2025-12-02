import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import DataStorage from "../Spells";

export default async (id: number, systemId: number) => {
  ApiClient.spells.getOne(id, systemId).then((response) => {
    runInAction(() => {
      DataStorage.current = response.data;
    });
  });
};
