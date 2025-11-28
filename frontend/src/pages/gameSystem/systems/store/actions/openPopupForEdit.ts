import SystemsStorage from "../Systems";
import setCurrent from "./setCurrent";
import { runInAction } from "mobx";

export default async (id: number) => {
  await setCurrent(id);
  runInAction(() => {
    SystemsStorage.togglePopup();
  });
};
