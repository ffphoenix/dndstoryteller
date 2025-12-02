import DataStorage from "../Spells";

export default () => {
  if (DataStorage.current.id) {
    DataStorage.resetCurrent();
  }
  DataStorage.togglePopup();
};
