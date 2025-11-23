import { makeAutoObservable } from "mobx";

export type DataStorage<dataType> = {
  list: dataType[];
  current: dataType;
  error: string | null;
  UI: { loading: boolean; showPopup: boolean };
};

export default <dataType>(defaultCurrent: () => dataType) => {
  return makeAutoObservable({
    list: [] as dataType[],
    current: defaultCurrent(),
    error: null as string | null,
    UI: {
      loading: false,
      showPopup: false,
    },

    get isPopupVisible(): boolean {
      return this.UI.showPopup;
    },
    togglePopup() {
      this.UI.showPopup = !this.UI.showPopup;
    },
  });
};
