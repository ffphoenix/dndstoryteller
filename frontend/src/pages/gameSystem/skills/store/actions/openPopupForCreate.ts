import DataStorage from "../Skills";

export default () => {
  if (DataStorage.current.id) {
    DataStorage.resetCurrent();
  }
  DataStorage.togglePopup();
};
