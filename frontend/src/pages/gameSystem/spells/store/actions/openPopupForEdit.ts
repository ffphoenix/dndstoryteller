import DataStorage from "../Spells";
import setCurrent from "./setCurrent";

export default async (id: number, systemId: number) => {
  setCurrent(id, systemId).then(() => DataStorage.togglePopup());
};
