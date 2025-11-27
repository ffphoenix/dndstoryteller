import DataStorage from "../Stats";

export default () => {
  if (DataStorage.current.id) {
    DataStorage.resetCurrent();
  }
  DataStorage.togglePopup();
};
