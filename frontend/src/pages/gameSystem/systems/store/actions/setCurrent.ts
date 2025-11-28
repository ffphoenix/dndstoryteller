import ApiClient from "../../../../../utils/apiClient";
import { runInAction } from "mobx";
import SystemsStorage from "../Systems";

export default async (id: number) => {
  ApiClient.systems.getOne(id).then((response) => {
    runInAction(() => {
      SystemsStorage.current = response.data;
    });
  });
};
