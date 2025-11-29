import DataStorage from "../Skills";
import setCurrent from "./setCurrent";

export default async (id: number, systemId: number) => {
  setCurrent(id, systemId).then(() => DataStorage.togglePopup());
};
